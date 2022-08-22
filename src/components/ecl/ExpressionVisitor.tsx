/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Stack } from "@mui/material";
import antlr4, { ParserRuleContext } from "antlr4";
import React, { cloneElement, isValidElement, ReactNode } from "react";
import * as uuid from "uuid";
import ECLLexer from "../../parser/src/grammar/syntax/ECLLexer";
import ECLParser, {
  ConjunctionContext,
  ConjunctionexpressionconstraintContext,
  ConstraintoperatorContext,
  DisjunctionContext,
  DisjunctionexpressionconstraintContext,
  EclattributeContext,
  EclattributesetContext,
  EclconceptreferenceContext,
  ExpressionconstraintContext,
  RefinedexpressionconstraintContext,
  SubexpressionconstraintContext,
} from "../../parser/src/grammar/syntax/ECLParser";
import ECLVisitor from "../../parser/src/grammar/syntax/ECLVisitor";
import Attribute from "./Attribute";
import BlankExpression from "./BlankExpression";
import ConceptReference from "./ConceptReference";
import ConceptSearchScope from "./ConceptSearchScope";
import ConstraintOperator, {
  constraintNameToOperator,
  operatorToConstraintName,
  REFERENCE_SET_VALUE_SET_URI,
} from "./ConstraintOperator";
import ExpressionComparisonOperator from "./ExpressionComparisonOperator";
import ExpressionConstraint from "./ExpressionConstraint";
import ExpressionTransformer from "./ExpressionTransformer";
import LogicOperator from "./LogicOperator";
import LogicStatement, {
  LogicStatementType,
  logicStatementTypeToOperator,
} from "./LogicStatement";
import MemberOfOperator, { MEMBER_OF_OPERATOR } from "./MemberOfOperator";
import Refinement from "./Refinement";
import SubExpression from "./SubExpression";
import Wildcard from "./Wildcard";

export type VisualExpressionType = ReactNode;

export type ChangeHandler<T = string> = (expression: T) => unknown;

export interface ChangeReporterProps<T = string> {
  // Invoked when expression is updated.
  onChange: ChangeHandler<T>;
}

/**
 * This component implements an ANTLR visitor, delegating out to other components to render the
 * supported elements of the grammar.
 *
 * @author John Grimes
 */
class ExpressionVisitor extends ECLVisitor {
  readonly transformer: ExpressionTransformer;

  constructor(expression: string, onChange: (expression: string) => unknown) {
    super();
    this.transformer = new ExpressionTransformer(expression, onChange);
  }

  /**
   * expressionconstraint : ws ( refinedexpressionconstraint | compoundexpressionconstraint |
   * dottedexpressionconstraint | subexpressionconstraint ) ws;
   */
  visitExpressionconstraint(
    ctx: ExpressionconstraintContext
  ): VisualExpressionType {
    return ctx.subexpressionconstraint() ? (
      <ExpressionConstraint>{this.visitChildren(ctx)}</ExpressionConstraint>
    ) : (
      this.visitChildren(ctx)
    );
  }

  /**
   * subexpressionconstraint: (constraintoperator ws)? ( ( (memberof ws)? (eclfocusconcept |
   * (LEFT_PAREN ws expressionconstraint ws RIGHT_PAREN)) (ws memberfilterconstraint)*) |
   * (eclfocusconcept | (LEFT_PAREN ws expressionconstraint ws RIGHT_PAREN)) ) (ws
   * (descriptionfilterconstraint | conceptfilterconstraint))* (ws historysupplement)?;
   */
  visitSubexpressionconstraint(
    ctx: SubexpressionconstraintContext
  ): VisualExpressionType {
    return this.renderSubExpression(ctx);
  }

  /**
   * refinedexpressionconstraint : subexpressionconstraint ws COLON ws eclrefinement;
   */
  visitRefinedexpressionconstraint(
    ctx: RefinedexpressionconstraintContext
  ): VisualExpressionType {
    const conjunctions =
        ctx
          .eclrefinement()
          .subrefinement()
          .eclattributeset()
          ?.conjunctionattributeset()
          ?.conjunction() ?? [],
      disjunctions =
        ctx
          .eclrefinement()
          .subrefinement()
          .eclattributeset()
          ?.disjunctionattributeset()
          ?.disjunction() ?? [],
      ctxs = conjunctions.concat(disjunctions);

    // We reuse the sub-expression visitor, adding additional content that will share the same
    // grouping within the UI.
    return this.renderSubExpression(
      ctx.subexpressionconstraint(),
      <Refinement
        onChangeType={(type) =>
          this.handleChangeLogicStatementTypes(ctxs, type)
        }
      >
        {this.visitChildren(ctx.eclrefinement())}
      </Refinement>
    );
  }

  private renderSubExpression(
    ctx: SubexpressionconstraintContext,
    relatedContent?: ReactNode
  ): VisualExpressionType {
    // If the expression contains a nested expression, we don't bother rendering a sub-expression
    // wrapper. We effectively merge these two levels together from a UI perspective.
    const content = ctx.expressionconstraint() ? (
      this.visitChildren(ctx.expressionconstraint())
    ) : (
      <SubExpression
        constraint={!!ctx.constraintoperator()}
        memberOf={!!ctx.memberof()}
        relatedContent={relatedContent}
        onAddConstraint={() =>
          this.transformer.prepend(
            ctx,
            constraintNameToOperator["descendantorselfof"]
          )
        }
        onRemoveConstraint={() => {
          const constraintoperator = ctx.constraintoperator();
          if (constraintoperator) {
            this.transformer.remove(constraintoperator, {
              collapseWhiteSpaceRight: true,
            });
          } else {
            console.warn(
              "Passed nullish constraintoperator to onRemoveConstraint"
            );
          }
        }}
        onAddMemberOf={() =>
          this.transformer.prepend(ctx.eclfocusconcept(), MEMBER_OF_OPERATOR)
        }
        onRemoveMemberOf={() => {
          const memberof = ctx.memberof();
          if (memberof) {
            this.transformer.remove(memberof, {
              collapseWhiteSpaceRight: true,
            });
          } else {
            console.warn("Passed nullish memberof to onRemoveMemberOf");
          }
        }}
        // This gets called when the user adds a logic statement to the sub-expression, e.g. AND.
        onAddLogicStatement={(type, expression) =>
          this.transformer.append(
            ctx,
            logicStatementTypeToOperator[type] + expression,
            { parenthesize: true }
          )
        }
      >
        {this.visitChildren(ctx)}
      </SubExpression>
    );
    // If there is a "member of" operator within this sub-expression, we modify the scope of concept
    // search to only return reference set concepts.
    return ctx.memberof() ? (
      <ConceptSearchScope.Provider
        value={{
          valueSet: REFERENCE_SET_VALUE_SET_URI,
          label: "Search for a reference set",
        }}
      >
        {content}
      </ConceptSearchScope.Provider>
    ) : (
      content
    );
  }

  /**
   * eclattribute : (LEFT_BRACE cardinality RIGHT_BRACE ws)? (reverseflag ws)? eclattributename ws
   * ((expressioncomparisonoperator ws subexpressionconstraint) | (numericcomparisonoperator ws HASH
   * numericvalue) | (stringcomparisonoperator ws (typedsearchterm | typedsearchtermset)) |
   * (booleancomparisonoperator ws booleanvalue));
   */
  visitEclattribute(ctx: EclattributeContext): VisualExpressionType {
    return <Attribute>{this.visitChildren(ctx)}</Attribute>;
  }

  /**
   * expressioncomparisonoperator : EQUALS | (EXCLAMATION EQUALS);
   */
  visitExpressioncomparisonoperator(): VisualExpressionType {
    return <ExpressionComparisonOperator />;
  }

  /**
   * eclattributeset : subattributeset ws (conjunctionattributeset | disjunctionattributeset)?;
   */
  visitEclattributeset(ctx: EclattributesetContext): VisualExpressionType {
    return (
      <Stack className="attribute-set" spacing={1}>
        {this.visitChildren(ctx)}
      </Stack>
    );
  }

  /**
   * constraintoperator : childof | childorselfof | descendantorselfof | descendantof | parentof |
   * parentorselfof | ancestororselfof | ancestorof;
   */
  visitConstraintoperator(
    ctx: ConstraintoperatorContext
  ): VisualExpressionType {
    return (
      <ConstraintOperator
        constraint={operatorToConstraintName[ctx.getText()]}
        onChange={(e) => this.transformer.applyUpdate(ctx, e)}
      />
    );
  }

  /**
   * constraintoperator : childof | childorselfof | descendantorselfof | descendantof | parentof |
   * parentorselfof | ancestororselfof | ancestorof;
   */
  visitEclconceptreference(
    ctx: EclconceptreferenceContext
  ): VisualExpressionType {
    return (
      <ConceptReference
        concept={{
          id: ctx.conceptid().getText(),
          display: ctx.term()?.getText(),
        }}
        onChange={(e) => this.transformer.applyUpdate(ctx, e)}
      />
    );
  }

  /**
   * conjunctionexpressionconstraint : subexpressionconstraint (ws conjunction ws
   * subexpressionconstraint)+;
   */
  visitConjunctionexpressionconstraint(
    ctx: ConjunctionexpressionconstraintContext
  ): VisualExpressionType {
    return this.visitLogicStatement(ctx, ctx.conjunction(), "conjunction");
  }

  /**
   * disjunctionexpressionconstraint : subexpressionconstraint (ws disjunction ws
   * subexpressionconstraint)+;
   */
  visitDisjunctionexpressionconstraint(
    ctx: DisjunctionexpressionconstraintContext
  ): VisualExpressionType {
    return this.visitLogicStatement(ctx, ctx.disjunction(), "disjunction");
  }

  /**
   * CARAT ( ws LEFT_BRACE ws (refsetfieldset | wildcard) ws RIGHT_BRACE )?;
   */
  visitMemberof(): VisualExpressionType {
    return <MemberOfOperator />;
  }

  /**
   * wildcard : ASTERISK;
   */
  visitWildcard(): VisualExpressionType {
    return <Wildcard />;
  }

  private visitLogicStatement(
    ctx: ConjunctionContext | DisjunctionContext,
    operatorCtx: ParserRuleContext[],
    type: LogicStatementType
  ) {
    return (
      <LogicStatement
        onChangeType={(type) =>
          this.handleChangeLogicStatementTypes(operatorCtx, type)
        }
        onAddCondition={(e) => this.transformer.append(ctx, e)}
        type={type}
      >
        {this.visitChildren(ctx)}
      </LogicStatement>
    );
  }

  visitConjunction(): VisualExpressionType {
    return <LogicOperator type="conjunction" />;
  }

  visitDisjunction(): VisualExpressionType {
    return <LogicOperator type="disjunction" />;
  }

  /**
   * Changes a set of logic statements to a new type.
   */
  handleChangeLogicStatementTypes(
    ctxs: ParserRuleContext[],
    type: LogicStatementType
  ) {
    this.transformer.applyUpdates(ctxs, logicStatementTypeToOperator[type]);
  }

  visit(ctx: ParserRuleContext): VisualExpressionType {
    return super.visit(ctx);
  }

  visitChildren(ctx: ParserRuleContext): VisualExpressionType {
    const children = super.visitChildren(ctx);
    if (Array.isArray(children)) {
      // This adds a unique key to each child element, to satisfy the requirement of React that all
      // elements in a list must have a unique key prop.
      // See: https://reactjs.org/docs/lists-and-keys.html#keys
      return children.map((child: VisualExpressionType) =>
        isValidElement(child) ? cloneElement(child, { key: uuid.v4() }) : child
      );
    } else {
      return children;
    }
  }

  protected defaultResult(): never {
    throw new Error(
      "ExpressionVisitor: visitation fell through to default result"
    );
  }
}

function getExpressionContext(expression: string): ExpressionconstraintContext {
  const input = new antlr4.InputStream(expression),
    lexer = new ECLLexer(input),
    tokens = new antlr4.CommonTokenStream(lexer),
    parser = new ECLParser(tokens);
  return parser.expressionconstraint();
}

export function visitExpression(
  expression: string,
  onChange: (expression: string) => unknown
): VisualExpressionType {
  return visitExpressionTree(
    expression,
    getExpressionContext(expression),
    onChange
  );
}

export function visitExpressionTree(
  expression: string,
  tree: ParserRuleContext,
  onChange: (expression: string) => unknown
): VisualExpressionType {
  const visitor = new ExpressionVisitor(expression, onChange);
  // If there is nothing but whitespace in the expression, we render a blank concept reference
  // component to bootstrap the build.
  if (expression.trim().length === 0) {
    return <BlankExpression onChange={(e) => visitor.transformer.replace(e)} />;
  } else {
    return visitor.visit(tree);
  }
}

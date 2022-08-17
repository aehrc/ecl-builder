/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Stack } from "@mui/material";
import antlr4, { ParserRuleContext } from "antlr4";
import React, { cloneElement, isValidElement, ReactNode } from "react";
import * as uuid from "uuid";
import ECLLexer from "../../parser/src/grammar/syntax/ECLLexer";
import ECLParser from "../../parser/src/grammar/syntax/ECLParser";
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
import LogicOperator from "./LogicOperator";
import LogicStatement, {
  LogicStatementType,
  logicStatementTypeToOperator,
} from "./LogicStatement";
import MemberOfOperator from "./MemberOfOperator";
import Refinement from "./Refinement";
import SubExpression from "./SubExpression";
import Wildcard from "./Wildcard";

export type VisualExpressionType = ReactNode;

export type ChangeHandler<T = string> = (expression: T) => unknown;

export interface ChangeReporterProps<T = string> {
  // Invoked when expression is updated.
  onChange: ChangeHandler<T>;
}

interface UpdateOptions {
  // Set this to true if the subject expression has optional whitespace on the right side.
  optionalWhiteSpaceRight?: boolean;
  // Set this to true if the subject expression has optional whitespace on the left side.
  optionalWhiteSpaceLeft?: boolean;
}

interface SupplementOptions extends UpdateOptions {
  // Set this to true to parenthesize the original expression.
  parenthesize?: boolean;
}

/**
 * This component implements an ANTLR visitor, delegating out to other components to render the
 * supported elements of the grammar.
 *
 * @author John Grimes
 */
class ExpressionVisitor extends ECLVisitor {
  readonly expression: string;
  readonly onChange: (expression: string) => unknown;

  constructor(expression: string, onChange: (expression: string) => unknown) {
    super();
    this.expression = expression;
    this.onChange = onChange;
  }

  /**
   * expressionconstraint : ws ( refinedexpressionconstraint | compoundexpressionconstraint |
   * dottedexpressionconstraint | subexpressionconstraint ) ws;
   */
  visitExpressionconstraint(ctx: any): VisualExpressionType {
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
  visitSubexpressionconstraint(ctx: any): VisualExpressionType {
    return this.renderSubExpression(ctx);
  }

  /**
   * refinedexpressionconstraint : subexpressionconstraint ws COLON ws eclrefinement;
   */
  visitRefinedexpressionconstraint(ctx: any): VisualExpressionType {
    // We reuse the sub-expression visitor, adding additional content that will share the same
    // grouping within the UI.
    const conjunctions: ParserRuleContext | undefined = ctx
        .eclrefinement()
        .subrefinement()
        .eclattributeset()
        ?.conjunctionattributeset()
        ?.conjunction(),
      disjunctions: ParserRuleContext | undefined = ctx
        .eclrefinement()
        .subrefinement()
        .eclattributeset()
        ?.disjunctionattributeset()
        ?.disjunction();
    const ctxs = [conjunctions, disjunctions].filter(
      (ctx) => !!ctx
    ) as ParserRuleContext[];
    console.log("ctx", ctx);
    console.log("ctxs", ctxs);
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
    ctx: any,
    relatedContent?: ReactNode
  ): VisualExpressionType {
    // If the expression contains a nested expression, we don't bother rendering a sub-expression
    // wrapper. We effectively merge these two levels together from a UI perspective.
    const content = ctx.expressionconstraint() ? (
      this.visitChildren(ctx.expressionconstraint())
    ) : (
      <SubExpression
        constraint={ctx.constraintoperator()}
        relatedContent={relatedContent}
        // This gets called when the user adds a hierarchy constraint, e.g. descendants and self.
        onAddConstraint={() =>
          this.handlePrepend(
            ctx,
            constraintNameToOperator["descendantorselfof"]
          )
        }
        // This gets called when the user removes the hierarchy constraint, reverting to self.
        onRemoveConstraint={() =>
          this.handleRemove(ctx.constraintoperator(), {
            optionalWhiteSpaceRight: true,
          })
        }
        // This gets called when the user adds a logic statement to the sub-expression, e.g. AND.
        onAddLogicStatement={(type, expression) =>
          this.handleAppend(
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
  visitEclattribute(ctx: any): VisualExpressionType {
    return <Attribute>{this.visitChildren(ctx)}</Attribute>;
  }

  /**
   * expressioncomparisonoperator : EQUALS | (EXCLAMATION EQUALS);
   */
  visitExpressioncomparisonoperator(ctx: any): VisualExpressionType {
    return <ExpressionComparisonOperator />;
  }

  /**
   * eclattributeset : subattributeset ws (conjunctionattributeset | disjunctionattributeset)?;
   */
  visitEclattributeset(ctx: any): VisualExpressionType {
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
  visitConstraintoperator(ctx: any): VisualExpressionType {
    return (
      <ConstraintOperator
        constraint={operatorToConstraintName[ctx.getText()]}
        onChange={(e) => this.handleUpdate(ctx, e)}
      />
    );
  }

  /**
   * constraintoperator : childof | childorselfof | descendantorselfof | descendantof | parentof |
   * parentorselfof | ancestororselfof | ancestorof;
   */
  visitEclconceptreference(ctx: any): VisualExpressionType {
    return (
      <ConceptReference
        concept={{
          id: ctx.conceptid().getText(),
          display: ctx.term().getText(),
        }}
        onChange={(e) => this.handleUpdate(ctx, e)}
      />
    );
  }

  /**
   * conjunctionexpressionconstraint : subexpressionconstraint (ws conjunction ws
   * subexpressionconstraint)+;
   */
  visitConjunctionexpressionconstraint(ctx: any): VisualExpressionType {
    return this.visitLogicStatement(ctx, ctx.conjunction(), "conjunction");
  }

  /**
   * disjunctionexpressionconstraint : subexpressionconstraint (ws disjunction ws
   * subexpressionconstraint)+;
   */
  visitDisjunctionexpressionconstraint(ctx: any): VisualExpressionType {
    return this.visitLogicStatement(ctx, ctx.disjunction(), "disjunction");
  }

  /**
   * CARAT ( ws LEFT_BRACE ws (refsetfieldset | wildcard) ws RIGHT_BRACE )?;
   */
  visitMemberof(ctx: any): VisualExpressionType {
    return <MemberOfOperator />;
  }

  /**
   * wildcard : ASTERISK;
   */
  visitWildcard(ctx: any): VisualExpressionType {
    return <Wildcard />;
  }

  private visitLogicStatement(
    ctx: any,
    operatorCtx: ParserRuleContext[],
    type: LogicStatementType
  ) {
    return (
      <LogicStatement
        onChangeType={(type) =>
          this.handleChangeLogicStatementTypes(operatorCtx, type)
        }
        onAddCondition={(e) => this.handleAppend(ctx, e)}
        type={type}
      >
        {this.visitChildren(ctx)}
      </LogicStatement>
    );
  }

  visitConjunction(ctx: any): VisualExpressionType {
    return <LogicOperator type="conjunction" />;
  }

  visitDisjunction(ctx: any): VisualExpressionType {
    return <LogicOperator type="disjunction" />;
  }

  /**
   * Changes a set of logic statements to a new type.
   */
  handleChangeLogicStatementTypes(
    ctxs: ParserRuleContext[],
    type: LogicStatementType
  ) {
    this.handleUpdates(ctxs, logicStatementTypeToOperator[type]);
  }

  /**
   * Uses the parser rule context to identify the range of characters within the expression that
   * have changed, and then substitutes those characters with the expression reported by the
   * component.
   */
  handleUpdate(
    ctx: ParserRuleContext,
    expression: string,
    options: UpdateOptions = {}
  ): void {
    this.handleUpdates([ctx], expression, options);
  }

  /**
   * Uses the parser rule context to identify the range of characters within the expression that
   * have changed, and then removes those characters.
   */
  handleRemove(ctx: ParserRuleContext, options: UpdateOptions = {}): void {
    this.handleUpdates([ctx], "", options);
  }

  /**
   * Performs the same function as `handleUpdate`, except that it can replace multiple
   * subexpressions with the same new expression.
   */
  handleUpdates(
    ctxs: ParserRuleContext[],
    expression: string,
    {
      optionalWhiteSpaceRight = false,
      optionalWhiteSpaceLeft = false,
    }: UpdateOptions = {}
  ): void {
    if (this.onChange) {
      const newExpression = ctxs.reduce((acc, ctx) => {
        const start = ctx.start.start,
          stop = ctx.stop?.stop;
        if (stop !== undefined) {
          // If the prefix ends with whitespace, replace it with a single space.
          let prefix = acc.slice(0, start);
          if (/\s/.test(prefix[prefix.length - 1])) {
            prefix = prefix.trimEnd() + (optionalWhiteSpaceLeft ? "" : " ");
          }
          // If the suffix starts with whitespace, replace it with a single space.
          let suffix = acc.slice(stop + 1);
          if (/\s/.test(suffix[0])) {
            suffix = (optionalWhiteSpaceRight ? "" : " ") + suffix.trimStart();
          }
          return prefix + expression + suffix;
        } else {
          return acc;
        }
      }, this.expression);
      this.onChange(newExpression);
    }
  }

  /**
   * Prepends a new expression to the start of the existing expression, separating it with an
   * optionally configurable delimiter.
   */
  handlePrepend(
    ctx: ParserRuleContext,
    expression: string,
    { parenthesize = false }: SupplementOptions = {}
  ): void {
    const suffix = ctx.getText().trimStart(),
      newExpression = expression + " " + suffix,
      parenthesizedExpression = parenthesize
        ? `(${newExpression})`
        : newExpression;
    this.handleUpdate(ctx, parenthesizedExpression);
  }

  /**
   * Appends a new expression to the end of the existing expression, separating it with an
   * optionally configurable delimiter.
   */
  handleAppend(
    ctx: ParserRuleContext,
    expression: string,
    { parenthesize = false }: SupplementOptions = {}
  ): void {
    const prefix = ctx.getText().trimEnd(),
      newExpression = prefix + " " + expression,
      parenthesizedExpression = parenthesize
        ? `(${newExpression})`
        : newExpression;
    this.handleUpdate(ctx, parenthesizedExpression);
  }

  /**
   * Replaces the entire expression.
   */
  handleReplace(expression: string): void {
    if (this.onChange) {
      this.onChange(expression);
    }
  }

  visit(ctx: any): VisualExpressionType {
    // @ts-ignore
    return super.visit(ctx);
  }

  visitChildren(ctx: any): VisualExpressionType {
    // @ts-ignore
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

  protected defaultResult(): VisualExpressionType {
    throw new Error(
      "ExpressionVisitor: visitation fell through to default result"
    );
  }
}

function getExpressionContext(expression: string) {
  const input = new antlr4.InputStream(expression),
    lexer = new ECLLexer(input),
    tokens = new antlr4.CommonTokenStream(lexer),
    parser = new ECLParser(tokens);
  return parser.expressionconstraint();
}

export function visitExpression(
  expression: string,
  onChange: (expression: string) => unknown
) {
  return visitExpressionTree(
    expression,
    getExpressionContext(expression),
    onChange
  );
}

export function visitExpressionTree(
  expression: string,
  tree: any,
  onChange: (expression: string) => unknown
) {
  const visitor = new ExpressionVisitor(expression.trim(), onChange);
  // If there is nothing but whitespace in the expression, we render a blank concept reference
  // component to bootstrap the build.
  if (expression.trim().length === 0) {
    return <BlankExpression onChange={(e) => visitor.handleReplace(e)} />;
  } else {
    return visitor.visit(tree);
  }
}

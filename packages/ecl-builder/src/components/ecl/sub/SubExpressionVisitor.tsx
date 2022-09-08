/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import React from "react";
import { REFERENCE_SET_VALUE_SET_URI } from "../../../constants";
import {
  CompoundexpressionconstraintContext,
  ConstraintoperatorContext,
  EclconceptreferenceContext,
  ExpressionconstraintContext,
  RefinedexpressionconstraintContext,
  SubexpressionconstraintContext,
  WildcardContext,
} from "../../../parser/src/grammar/syntax/ECLParser";
import BaseEclVisitor from "../BaseEclVisitor";
import CompoundVisitor from "../compound/CompoundVisitor";
import { logicStatementTypeToOperator } from "../compound/LogicStatement";
import { ExpressionVisitor, VisualExpressionType } from "../ExpressionVisitor";
import { focusHandler, isFocused } from "../FocusProvider";
import RefinementVisitor from "../refinement/RefinementVisitor";
import ConceptReference from "./ConceptReference";
import ConceptSearchScope from "./ConceptSearchScope";
import ConstraintOperator, {
  constraintNameToOperator,
  operatorToConstraintName,
} from "./ConstraintOperator";
import MemberOfOperator, { MEMBER_OF_OPERATOR } from "./MemberOfOperator";
import SubExpression from "./SubExpression";

/**
 * This component implements an ANTLR visitor specialised to the task of rendering sub-expressions.
 *
 * @author John Grimes
 */
export default class SubExpressionVisitor extends BaseEclVisitor {
  visitExpressionconstraint(
    ctx: ExpressionconstraintContext
  ): VisualExpressionType {
    return new ExpressionVisitor(this.options).visit(ctx);
  }

  visitRefinedexpressionconstraint(
    ctx: RefinedexpressionconstraintContext
  ): VisualExpressionType {
    return new RefinementVisitor(this.options).visit(ctx);
  }

  visitCompoundexpressionconstraint(
    ctx: CompoundexpressionconstraintContext
  ): VisualExpressionType {
    return new CompoundVisitor(this.options).visit(ctx);
  }

  visitSubexpressionconstraint(
    ctx: SubexpressionconstraintContext
  ): VisualExpressionType {
    // If the expression contains a nested expression, we don't bother rendering a sub-expression
    // wrapper. We effectively merge these two levels together from a UI perspective.
    const expressionConstraint = ctx.expressionconstraint();
    const content = expressionConstraint ? (
      this.visitChildren(expressionConstraint)
    ) : (
      <SubExpression
        constraint={!!ctx.constraintoperator()}
        memberOf={!!ctx.memberof()}
        refinement={this.options.refinement}
        onAddConstraint={() =>
          this.transformer.prepend(
            ctx,
            constraintNameToOperator["descendantorselfof"]
          )
        }
        onRemoveConstraint={() => {
          const constraintOperator = ctx.constraintoperator();
          if (constraintOperator) {
            this.transformer.remove(constraintOperator, {
              collapseWhiteSpaceRight: true,
              focusUpdateStrategy: "AFTER_UPDATE",
            });
          } else {
            console.warn(
              "Passed nullish constraintoperator to onRemoveConstraint"
            );
          }
        }}
        onAddMemberOf={() => {
          const eclFocusConcept = ctx.eclfocusconcept();
          if (eclFocusConcept) {
            this.transformer.prepend(eclFocusConcept, MEMBER_OF_OPERATOR, {
              focusUpdateStrategy: "AFTER_UPDATE",
            });
          } else {
            console.warn("Passed nullish eclfocusconcept to onAddMemberOf");
          }
        }}
        onRemoveMemberOf={() => {
          const memberOf = ctx.memberof();
          if (memberOf) {
            this.transformer.remove(memberOf, {
              collapseWhiteSpaceRight: true,
              focusUpdateStrategy: "AFTER_UPDATE",
            });
          } else {
            console.warn("Passed nullish memberof to onRemoveMemberOf");
          }
        }}
        onRemoveRefinement={() =>
          this.transformer.removeAllSpans(this.options.removalContext)
        }
        // This gets called when the user adds a logic statement to the sub-expression, e.g. AND.
        onAddLogicStatement={(type, expression) =>
          this.transformer.append(
            ctx,
            logicStatementTypeToOperator[type] + expression,
            { parenthesize: true }
          )
        }
        // This gets called when the user adds an attribute refinement to the sub-expression.
        onAddRefinement={(e) => this.transformer.append(ctx, `: ${e}`)}
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

  visitMemberof(): VisualExpressionType {
    return <MemberOfOperator />;
  }

  visitEclconceptreference(
    ctx: EclconceptreferenceContext
  ): VisualExpressionType {
    return (
      <ConceptReference
        concept={{
          type: "SPECIFIC_CONCEPT",
          id: ctx.conceptid().getText(),
          display: ctx.term()?.getText(),
        }}
        focus={isFocused(ctx, this.options.focusPosition)}
        onChange={(e) => this.transformer.applyUpdate(ctx, e)}
        onFocus={focusHandler(ctx, this.options.onFocus)}
      />
    );
  }

  visitWildcard(ctx: WildcardContext): VisualExpressionType {
    return (
      <ConceptReference
        concept={{ type: "ANY_CONCEPT" }}
        onChange={(e) => this.transformer.applyUpdate(ctx, e)}
      />
    );
  }

  visitConstraintoperator(
    ctx: ConstraintoperatorContext
  ): VisualExpressionType {
    return (
      <ConstraintOperator
        constraint={operatorToConstraintName[ctx.getText()]}
        focus={isFocused(ctx, this.options.focusPosition)}
        onChange={(e) => this.transformer.applyUpdate(ctx, e)}
        onFocus={focusHandler(ctx, this.options.onFocus)}
      />
    );
  }
}

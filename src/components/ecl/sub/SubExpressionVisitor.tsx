/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import React from "react";
import {
  CompoundexpressionconstraintContext,
  ConstraintoperatorContext,
  EclconceptreferenceContext,
  SubexpressionconstraintContext,
} from "../../../parser/src/grammar/syntax/ECLParser";
import BaseEclVisitor from "../BaseEclVisitor";
import CompoundVisitor from "../compound/CompoundVisitor";
import { logicStatementTypeToOperator } from "../compound/LogicStatement";
import { VisualExpressionType } from "../ExpressionVisitor";
import ConceptReference from "./ConceptReference";
import ConceptSearchScope from "./ConceptSearchScope";
import ConstraintOperator, {
  constraintNameToOperator,
  operatorToConstraintName,
  REFERENCE_SET_VALUE_SET_URI,
} from "./ConstraintOperator";
import MemberOfOperator, { MEMBER_OF_OPERATOR } from "./MemberOfOperator";
import SubExpression from "./SubExpression";
import Wildcard from "./Wildcard";

export default class SubExpressionVisitor extends BaseEclVisitor {
  /**
   * subexpressionconstraint: (constraintoperator ws)? ( ( (memberof ws)? (eclfocusconcept |
   * (LEFT_PAREN ws expressionconstraint ws RIGHT_PAREN)) (ws memberfilterconstraint)*) |
   * (eclfocusconcept | (LEFT_PAREN ws expressionconstraint ws RIGHT_PAREN)) ) (ws
   * (descriptionfilterconstraint | conceptfilterconstraint))* (ws historysupplement)?;
   */
  visitSubexpressionconstraint(
    ctx: SubexpressionconstraintContext
  ): VisualExpressionType {
    // If the expression contains a nested expression, we don't bother rendering a sub-expression
    // wrapper. We effectively merge these two levels together from a UI perspective.
    const content = ctx.expressionconstraint() ? (
      this.visitChildren(ctx.expressionconstraint())
    ) : (
      <SubExpression
        constraint={!!ctx.constraintoperator()}
        memberOf={!!ctx.memberof()}
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
   * compoundexpressionconstraint : conjunctionexpressionconstraint |
   * disjunctionexpressionconstraint | exclusionexpressionconstraint;
   */
  visitCompoundexpressionconstraint(
    ctx: CompoundexpressionconstraintContext
  ): VisualExpressionType {
    return new CompoundVisitor({ transformer: this.transformer }).visit(ctx);
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
}

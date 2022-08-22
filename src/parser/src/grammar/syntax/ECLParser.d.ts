/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Parser, ParserRuleContext } from "antlr4";

export default class ECLParser extends Parser {
  expressionconstraint(): ExpressionconstraintContext;
}

export class ExpressionconstraintContext extends ParserRuleContext {
  subexpressionconstraint(): SubexpressionconstraintContext[];
}

export class SubexpressionconstraintContext extends ParserRuleContext {
  constraintoperator(): ConstraintoperatorContext | null | undefined;

  memberof(): MemberofContext | null | undefined;

  eclfocusconcept(): EclfocusconceptContext;

  expressionconstraint(): ExpressionconstraintContext;
}

export class ConstraintoperatorContext extends ParserRuleContext {}

export class MemberofContext extends ParserRuleContext {}

export class EclfocusconceptContext extends ParserRuleContext {}

export class RefinedexpressionconstraintContext extends ParserRuleContext {
  subexpressionconstraint(): SubexpressionconstraintContext;

  eclrefinement(): EclrefinementContext;
}

export class EclrefinementContext extends ParserRuleContext {
  subrefinement(): SubrefinementContext;
}

export class SubrefinementContext extends ParserRuleContext {
  eclattributeset(): EclattributesetContext | null | undefined;
}

export class EclattributesetContext extends ParserRuleContext {
  conjunctionattributeset(): ConjunctionattributesetContext | null | undefined;

  disjunctionattributeset(): DisjunctionattributesetContext | null | undefined;
}

export class ConjunctionexpressionconstraintContext extends ParserRuleContext {
  conjunction(): ConjunctionContext[];
}

export class DisjunctionexpressionconstraintContext extends ParserRuleContext {
  disjunction(): DisjunctionContext[];
}

export class ConjunctionattributesetContext extends ParserRuleContext {
  conjunction(): ConjunctionContext[];
}

export class DisjunctionattributesetContext extends ParserRuleContext {
  disjunction(): DisjunctionContext[];
}

export class ConjunctionContext extends ParserRuleContext {}

export class DisjunctionContext extends ParserRuleContext {}

export class EclattributeContext extends ParserRuleContext {}

export class EclconceptreferenceContext extends ParserRuleContext {
  conceptid(): ConceptidContext;

  term(): TermContext | null | undefined;
}

export class ConceptidContext extends ParserRuleContext {}

export class TermContext extends ParserRuleContext {}

export class ExpressioncomparisonoperatorContext extends ParserRuleContext {
  EXCLAMATION(): TerminalNode | undefined;
}

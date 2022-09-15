/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Parser, ParserRuleContext } from "antlr4";
import { TerminalNode } from "antlr4/tree/Tree";

export default class ECLParser extends Parser {
  expressionconstraint(): ExpressionconstraintContext;
}

/**
 * expressionconstraint : ws ( refinedexpressionconstraint | compoundexpressionconstraint |
 * dottedexpressionconstraint | subexpressionconstraint ) ws;
 */
export class ExpressionconstraintContext extends ParserRuleContext {
  refinedexpressionconstraint():
    | RefinedexpressionconstraintContext
    | null
    | undefined;

  compoundexpressionconstraint():
    | CompoundexpressionconstraintContext
    | null
    | undefined;

  subexpressionconstraint(): SubexpressionconstraintContext | null | undefined;
}

/**
 * refinedexpressionconstraint : subexpressionconstraint ws COLON ws eclrefinement;
 */
export class RefinedexpressionconstraintContext extends ParserRuleContext {
  subexpressionconstraint(): SubexpressionconstraintContext;

  COLON(): TerminalNode;

  eclrefinement(): EclrefinementContext;
}

/**
 * compoundexpressionconstraint : conjunctionexpressionconstraint | disjunctionexpressionconstraint
 * | exclusionexpressionconstraint;
 */
export class CompoundexpressionconstraintContext extends ParserRuleContext {
  conjunctionexpressionconstraint():
    | ConjunctionexpressionconstraintContext
    | null
    | undefined;

  disjunctionexpressionconstraint():
    | DisjunctionexpressionconstraintContext
    | null
    | undefined;
}

/**
 * conjunctionexpressionconstraint : subexpressionconstraint (ws conjunction ws
 * subexpressionconstraint)+;
 */
export class ConjunctionexpressionconstraintContext extends ParserRuleContext {
  subexpressionconstraint(): SubexpressionconstraintContext[];

  conjunction(): ConjunctionContext[];
}

/**
 * disjunctionexpressionconstraint : subexpressionconstraint (ws disjunction ws
 * subexpressionconstraint)+;
 */
export class DisjunctionexpressionconstraintContext extends ParserRuleContext {
  subexpressionconstraint(): SubexpressionconstraintContext[];

  disjunction(): DisjunctionContext[];
}

/**
 * exclusionexpressionconstraint : subexpressionconstraint ws exclusion ws subexpressionconstraint;
 */
export class ExclusionexpressionconstraintContext extends ParserRuleContext {}

/**
 * dottedexpressionconstraint : subexpressionconstraint (ws dottedexpressionattribute)+;
 */
export class DottedexpressionconstraintContext extends ParserRuleContext {}

/**
 * subexpressionconstraint: (constraintoperator ws)? ( ( (memberof ws)? (eclfocusconcept |
 * (LEFT_PAREN ws expressionconstraint ws RIGHT_PAREN)) (ws memberfilterconstraint)*) |
 * (eclfocusconcept | (LEFT_PAREN ws expressionconstraint ws RIGHT_PAREN)) ) (ws
 * (descriptionfilterconstraint | conceptfilterconstraint))* (ws historysupplement)?;
 */
export class SubexpressionconstraintContext extends ParserRuleContext {
  constraintoperator(): ConstraintoperatorContext | null | undefined;

  memberof(): MemberofContext | null | undefined;

  eclfocusconcept(): EclfocusconceptContext | null | undefined;

  expressionconstraint(): ExpressionconstraintContext | null | undefined;

  LEFT_PAREN(): TerminalNode | null | undefined;

  RIGHT_PAREN(): TerminalNode | null | undefined;
}

/**
 * eclfocusconcept : eclconceptreference | wildcard;
 */
export class EclfocusconceptContext extends ParserRuleContext {}

/**
 * memberof : CARAT ( ws LEFT_BRACE ws (refsetfieldset | wildcard) ws RIGHT_BRACE )?;
 */
export class MemberofContext extends ParserRuleContext {}

/**
 * eclconceptreference : conceptid (ws PIPE ws term ws PIPE)?;
 */
export class EclconceptreferenceContext extends ParserRuleContext {
  conceptid(): ConceptidContext;

  term(): TermContext | null | undefined;
}

/**
 * conceptid : sctid;
 */
export class ConceptidContext extends ParserRuleContext {}

/**
 * term : nonwsnonpipe+ ( sp+ nonwsnonpipe+ )*;
 */
export class TermContext extends ParserRuleContext {}

/**
 * wildcard : ASTERISK;
 */
export class WildcardContext extends ParserRuleContext {}

/**
 * constraintoperator : childof | childorselfof | descendantorselfof | descendantof | parentof |
 * parentorselfof | ancestororselfof | ancestorof;
 */
export class ConstraintoperatorContext extends ParserRuleContext {}

/**
 * conjunction : (((CAP_A | A)|(CAP_A | A)) ((CAP_N | N)|(CAP_N | N)) ((CAP_D | D)|(CAP_D | D)) mws)
 * | COMMA;
 */
export class ConjunctionContext extends ParserRuleContext {}

/**
 * disjunction : ((CAP_O | O)|(CAP_O | O)) ((CAP_R | R)|(CAP_R | R)) mws;
 */
export class DisjunctionContext extends ParserRuleContext {}

/**
 * eclrefinement : subrefinement ws (conjunctionrefinementset | disjunctionrefinementset)?;
 */
export class EclrefinementContext extends ParserRuleContext {
  subrefinement(): SubrefinementContext;

  conjunctionrefinementset():
    | ConjunctionrefinementsetContext
    | null
    | undefined;

  disjunctionrefinementset():
    | DisjunctionrefinementsetContext
    | null
    | undefined;
}

/**
 * conjunctionrefinementset : (ws conjunction ws subrefinement)+;
 */
export class ConjunctionrefinementsetContext extends ParserRuleContext {
  subrefinement(): SubrefinementContext[];

  conjunction(): ConjunctionContext[];
}

/**
 * disjunctionrefinementset : (ws disjunction ws subrefinement)+;
 */
export class DisjunctionrefinementsetContext extends ParserRuleContext {
  subrefinement(): SubrefinementContext[];

  disjunction(): DisjunctionContext[];
}

/**
 * subrefinement : eclattributeset | eclattributegroup |
 * (LEFT_PAREN ws eclrefinement ws RIGHT_PAREN);
 */
export class SubrefinementContext extends ParserRuleContext {
  eclattributeset(): EclattributesetContext | null | undefined;

  eclattributegroup(): EclattributegroupContext | null | undefined;
}

/**
 * eclattributeset : subattributeset ws (conjunctionattributeset | disjunctionattributeset)?;
 */
export class EclattributesetContext extends ParserRuleContext {
  subattributeset(): SubattributesetContext;

  conjunctionattributeset(): ConjunctionattributesetContext | null | undefined;

  disjunctionattributeset(): DisjunctionattributesetContext | null | undefined;
}

/**
 * conjunctionattributeset : (ws conjunction ws subattributeset)+;
 */
export class ConjunctionattributesetContext extends ParserRuleContext {
  subattributeset(): SubattributesetContext[];

  conjunction(): ConjunctionContext[];
}

/**
 * disjunctionattributeset : (ws disjunction ws subattributeset)+;
 */
export class DisjunctionattributesetContext extends ParserRuleContext {
  subattributeset(): SubattributesetContext[];

  disjunction(): DisjunctionContext[];
}

/**
 * subattributeset : eclattribute | (LEFT_PAREN ws eclattributeset ws RIGHT_PAREN);
 */
export class SubattributesetContext extends ParserRuleContext {}

/**
 * eclattributegroup : (LEFT_BRACE cardinality RIGHT_BRACE ws)? LEFT_CURLY_BRACE ws eclattributeset
 * ws RIGHT_CURLY_BRACE;
 */
export class EclattributegroupContext extends ParserRuleContext {}

/**
 * eclattribute : (LEFT_BRACE cardinality RIGHT_BRACE ws)? (reverseflag ws)? eclattributename ws
 * ((expressioncomparisonoperator ws subexpressionconstraint) | (numericcomparisonoperator ws HASH
 * numericvalue) | (stringcomparisonoperator ws (typedsearchterm | typedsearchtermset)) |
 * (booleancomparisonoperator ws booleanvalue));
 */
export class EclattributeContext extends ParserRuleContext {}

/**
 * cardinality : minvalue to maxvalue;
 */
export class CardinalityContext extends ParserRuleContext {}

/**
 * reverseflag : (CAP_R | R);
 */
export class ReverseflagContext extends ParserRuleContext {}

/**
 * eclattributename : subexpressionconstraint;
 */
export class EclattributenameContext extends ParserRuleContext {}

/**
 * expressioncomparisonoperator : EQUALS | (EXCLAMATION EQUALS);
 */
export class ExpressioncomparisonoperatorContext extends ParserRuleContext {
  EXCLAMATION(): TerminalNode | null | undefined;
}

/**
 * numericcomparisonoperator : EQUALS | (EXCLAMATION EQUALS) | (LESS_THAN EQUALS) | LESS_THAN |
 * (GREATER_THAN EQUALS) | GREATER_THAN;
 */
export class NumericcomparisonoperatorContext extends ParserRuleContext {}

/**
 * stringcomparisonoperator : EQUALS | (EXCLAMATION EQUALS);
 */
export class StringcomparisonoperatorContext extends ParserRuleContext {}

/**
 * descriptionfilterconstraint : (LEFT_CURLY_BRACE LEFT_CURLY_BRACE) ws
 * ( (CAP_D | D) | (CAP_D | D) )? ws descriptionfilter (ws COMMA ws descriptionfilter)* ws
 * (RIGHT_CURLY_BRACE RIGHT_CURLY_BRACE);
 */
export class DescriptionfilterconstraintContext extends ParserRuleContext {}

/**
 * matchsearchterm : (nonwsnonescapedchar | escapedchar)+;
 */
export class MatchsearchtermContext extends ParserRuleContext {}

/**
 * matchsearchtermset : qm ws matchsearchterm (mws matchsearchterm)* ws qm;
 */
export class MatchsearchtermsetContext extends ParserRuleContext {
  matchsearchterm(): MatchsearchtermContext[];
}

/**
 * conceptfilterconstraint : (LEFT_CURLY_BRACE LEFT_CURLY_BRACE) ws ((CAP_C | C) | (CAP_C | C)) ws
 * conceptfilter (ws COMMA ws conceptfilter)* ws (RIGHT_CURLY_BRACE RIGHT_CURLY_BRACE);
 */
export class ConceptfilterconstraintContext extends ParserRuleContext {}

/**
 * memberfilterconstraint : (LEFT_CURLY_BRACE LEFT_CURLY_BRACE) ws ((CAP_M | M) | (CAP_M | M)) ws
 * memberfilter (ws COMMA ws memberfilter)* ws (RIGHT_CURLY_BRACE RIGHT_CURLY_BRACE);
 */
export class MemberfilterconstraintContext extends ParserRuleContext {}

/**
 * historysupplement : (LEFT_CURLY_BRACE LEFT_CURLY_BRACE) ws PLUS ws historykeyword
 * ( historyprofilesuffix | (ws historysubset) )? ws (RIGHT_CURLY_BRACE RIGHT_CURLY_BRACE);
 */
export class HistorysupplementContext extends ParserRuleContext {}

/**
 * numericvalue : (DASH|PLUS)? (decimalvalue | integervalue);
 */
export class NumericvalueContext extends ParserRuleContext {}

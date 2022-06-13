/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

// Generated from .local/SctExpressionConstraintGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import {
  AcceptabilityConceptReferenceSetContext,
  AcceptabilitySetContext,
  AcceptabilityTokenContext,
  AcceptabilityTokenSetContext,
  ActiveFalseContext,
  ActiveTrueContext,
  AttributeContext,
  AttributeGroupContext,
  AttributeNameContext,
  AttributeOperatorContext,
  AttributeSetContext,
  BooleanComparisonOperatorContext,
  CardinalityContext,
  CompoundExpressionConstraintContext,
  ConceptFilterConstraintContext,
  ConceptFilterContext,
  ConceptIdContext,
  ConceptReferenceContext,
  ConceptReferenceSetContext,
  ConcreteComparisonOperatorContext,
  ConcreteValueContext,
  ConjunctionAttributeContext,
  ConjunctionExpressionConstraintContext,
  ConjunctionRefinementContext,
  ConstraintOperatorContext,
  DefnStatusTokenContext,
  DefnStatusTokenSetContext,
  DescriptionFilterConstraintContext,
  DescriptionFilterContext,
  DialectAliasContext,
  DialectAliasFilterContext,
  DialectAliasSetContext,
  DialectIdFilterContext,
  DialectIdSetContext,
  DisjunctionAttributeContext,
  DisjunctionExpressionConstraintContext,
  DisjunctionRefinementContext,
  DottedExpressionConstraintContext,
  ELetContext,
  ELetsContext,
  EQueryContext,
  ExclusionExpressionConstraintContext,
  ExpressionComparisonOperatorContext,
  ExpressionConstraintContext,
  ExpressionConstraintValueContext,
  FilterActiveContext,
  FilterActiveDescContext,
  FilterConstraintContext,
  FilterDefnStatusContext,
  FilterDefnStatusIdContext,
  FilterDialectDescContext,
  FilterEffectiveTimeContext,
  FilterEffectiveTimeDescContext,
  FilterLanguageDescContext,
  FilterModuleContext,
  FilterModuleDescContext,
  FilterTermContext,
  FilterTypeDescContext,
  FocusConceptContext,
  FromContext,
  FunctionContext,
  HistoryProfileContext,
  HistorySubsetContext,
  HistorySupplementContext,
  LanguageCodeContext,
  LanguageCodeSetContext,
  MemberBooleanFilterContext,
  MemberExpressionFilterContext,
  MemberFilterConstraintContext,
  MemberFilterContext,
  MemberNumericFilterContext,
  MemberOfContext,
  MemberStringFilterContext,
  MemberTimeFilterContext,
  OtherIdContext,
  RefinedExpressionConstraintContext,
  RefinementContext,
  RefsetFieldNameContext,
  RefsetFieldNameSetContext,
  ScopeContext,
  SearchValueContext,
  SearchValueSetContext,
  SimpleExpressionConstraintContext,
  SnomedIdContext,
  String_valueContext,
  SubAttributeSetContext,
  SubExpressionConstraintContext,
  SubRefinementContext,
  TimeComparisonOperatorContext,
  TimeValueContext,
  TimeValueSetContext,
  TypeIdFilterContext,
  TypeTokenContext,
  TypeTokenFilterContext,
  TypeTokenSetContext,
  UnrefinedExpressionConstraintContext
} from "./SctExpressionConstraintGrammar";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `SctExpressionConstraintGrammar`.
 */
export interface SctExpressionConstraintGrammarListener extends ParseTreeListener {
  /**
   * Enter a parse tree produced by the `SnomedId`
   * labeled alternative in `SctExpressionConstraintGrammar.conceptId`.
   * @param ctx the parse tree
   */
  enterSnomedId?: (ctx: SnomedIdContext) => void;
  /**
   * Exit a parse tree produced by the `SnomedId`
   * labeled alternative in `SctExpressionConstraintGrammar.conceptId`.
   * @param ctx the parse tree
   */
  exitSnomedId?: (ctx: SnomedIdContext) => void;

  /**
   * Enter a parse tree produced by the `OtherId`
   * labeled alternative in `SctExpressionConstraintGrammar.conceptId`.
   * @param ctx the parse tree
   */
  enterOtherId?: (ctx: OtherIdContext) => void;
  /**
   * Exit a parse tree produced by the `OtherId`
   * labeled alternative in `SctExpressionConstraintGrammar.conceptId`.
   * @param ctx the parse tree
   */
  exitOtherId?: (ctx: OtherIdContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.eQuery`.
   * @param ctx the parse tree
   */
  enterEQuery?: (ctx: EQueryContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.eQuery`.
   * @param ctx the parse tree
   */
  exitEQuery?: (ctx: EQueryContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.eLet`.
   * @param ctx the parse tree
   */
  enterELet?: (ctx: ELetContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.eLet`.
   * @param ctx the parse tree
   */
  exitELet?: (ctx: ELetContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.eLets`.
   * @param ctx the parse tree
   */
  enterELets?: (ctx: ELetsContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.eLets`.
   * @param ctx the parse tree
   */
  exitELets?: (ctx: ELetsContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.expressionConstraint`.
   * @param ctx the parse tree
   */
  enterExpressionConstraint?: (ctx: ExpressionConstraintContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.expressionConstraint`.
   * @param ctx the parse tree
   */
  exitExpressionConstraint?: (ctx: ExpressionConstraintContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.dottedExpressionConstraint`.
   * @param ctx the parse tree
   */
  enterDottedExpressionConstraint?: (ctx: DottedExpressionConstraintContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.dottedExpressionConstraint`.
   * @param ctx the parse tree
   */
  exitDottedExpressionConstraint?: (ctx: DottedExpressionConstraintContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.refinedExpressionConstraint`.
   * @param ctx the parse tree
   */
  enterRefinedExpressionConstraint?: (ctx: RefinedExpressionConstraintContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.refinedExpressionConstraint`.
   * @param ctx the parse tree
   */
  exitRefinedExpressionConstraint?: (ctx: RefinedExpressionConstraintContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.unrefinedExpressionConstraint`.
   * @param ctx the parse tree
   */
  enterUnrefinedExpressionConstraint?: (ctx: UnrefinedExpressionConstraintContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.unrefinedExpressionConstraint`.
   * @param ctx the parse tree
   */
  exitUnrefinedExpressionConstraint?: (ctx: UnrefinedExpressionConstraintContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.simpleExpressionConstraint`.
   * @param ctx the parse tree
   */
  enterSimpleExpressionConstraint?: (ctx: SimpleExpressionConstraintContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.simpleExpressionConstraint`.
   * @param ctx the parse tree
   */
  exitSimpleExpressionConstraint?: (ctx: SimpleExpressionConstraintContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.compoundExpressionConstraint`.
   * @param ctx the parse tree
   */
  enterCompoundExpressionConstraint?: (ctx: CompoundExpressionConstraintContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.compoundExpressionConstraint`.
   * @param ctx the parse tree
   */
  exitCompoundExpressionConstraint?: (ctx: CompoundExpressionConstraintContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.disjunctionExpressionConstraint`.
   * @param ctx the parse tree
   */
  enterDisjunctionExpressionConstraint?: (ctx: DisjunctionExpressionConstraintContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.disjunctionExpressionConstraint`.
   * @param ctx the parse tree
   */
  exitDisjunctionExpressionConstraint?: (ctx: DisjunctionExpressionConstraintContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.exclusionExpressionConstraint`.
   * @param ctx the parse tree
   */
  enterExclusionExpressionConstraint?: (ctx: ExclusionExpressionConstraintContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.exclusionExpressionConstraint`.
   * @param ctx the parse tree
   */
  exitExclusionExpressionConstraint?: (ctx: ExclusionExpressionConstraintContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.conceptReference`.
   * @param ctx the parse tree
   */
  enterConceptReference?: (ctx: ConceptReferenceContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.conceptReference`.
   * @param ctx the parse tree
   */
  exitConceptReference?: (ctx: ConceptReferenceContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.constraintOperator`.
   * @param ctx the parse tree
   */
  enterConstraintOperator?: (ctx: ConstraintOperatorContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.constraintOperator`.
   * @param ctx the parse tree
   */
  exitConstraintOperator?: (ctx: ConstraintOperatorContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.conceptId`.
   * @param ctx the parse tree
   */
  enterConceptId?: (ctx: ConceptIdContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.conceptId`.
   * @param ctx the parse tree
   */
  exitConceptId?: (ctx: ConceptIdContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.focusConcept`.
   * @param ctx the parse tree
   */
  enterFocusConcept?: (ctx: FocusConceptContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.focusConcept`.
   * @param ctx the parse tree
   */
  exitFocusConcept?: (ctx: FocusConceptContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.memberOf`.
   * @param ctx the parse tree
   */
  enterMemberOf?: (ctx: MemberOfContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.memberOf`.
   * @param ctx the parse tree
   */
  exitMemberOf?: (ctx: MemberOfContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.function`.
   * @param ctx the parse tree
   */
  enterFunction?: (ctx: FunctionContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.function`.
   * @param ctx the parse tree
   */
  exitFunction?: (ctx: FunctionContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.from`.
   * @param ctx the parse tree
   */
  enterFrom?: (ctx: FromContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.from`.
   * @param ctx the parse tree
   */
  exitFrom?: (ctx: FromContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.scope`.
   * @param ctx the parse tree
   */
  enterScope?: (ctx: ScopeContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.scope`.
   * @param ctx the parse tree
   */
  exitScope?: (ctx: ScopeContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.conjunctionExpressionConstraint`.
   * @param ctx the parse tree
   */
  enterConjunctionExpressionConstraint?: (ctx: ConjunctionExpressionConstraintContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.conjunctionExpressionConstraint`.
   * @param ctx the parse tree
   */
  exitConjunctionExpressionConstraint?: (ctx: ConjunctionExpressionConstraintContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.subExpressionConstraint`.
   * @param ctx the parse tree
   */
  enterSubExpressionConstraint?: (ctx: SubExpressionConstraintContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.subExpressionConstraint`.
   * @param ctx the parse tree
   */
  exitSubExpressionConstraint?: (ctx: SubExpressionConstraintContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.filterConstraint`.
   * @param ctx the parse tree
   */
  enterFilterConstraint?: (ctx: FilterConstraintContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.filterConstraint`.
   * @param ctx the parse tree
   */
  exitFilterConstraint?: (ctx: FilterConstraintContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.historySupplement`.
   * @param ctx the parse tree
   */
  enterHistorySupplement?: (ctx: HistorySupplementContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.historySupplement`.
   * @param ctx the parse tree
   */
  exitHistorySupplement?: (ctx: HistorySupplementContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.historyProfile`.
   * @param ctx the parse tree
   */
  enterHistoryProfile?: (ctx: HistoryProfileContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.historyProfile`.
   * @param ctx the parse tree
   */
  exitHistoryProfile?: (ctx: HistoryProfileContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.historySubset`.
   * @param ctx the parse tree
   */
  enterHistorySubset?: (ctx: HistorySubsetContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.historySubset`.
   * @param ctx the parse tree
   */
  exitHistorySubset?: (ctx: HistorySubsetContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.descriptionFilterConstraint`.
   * @param ctx the parse tree
   */
  enterDescriptionFilterConstraint?: (ctx: DescriptionFilterConstraintContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.descriptionFilterConstraint`.
   * @param ctx the parse tree
   */
  exitDescriptionFilterConstraint?: (ctx: DescriptionFilterConstraintContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.conceptFilterConstraint`.
   * @param ctx the parse tree
   */
  enterConceptFilterConstraint?: (ctx: ConceptFilterConstraintContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.conceptFilterConstraint`.
   * @param ctx the parse tree
   */
  exitConceptFilterConstraint?: (ctx: ConceptFilterConstraintContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.memberFilterConstraint`.
   * @param ctx the parse tree
   */
  enterMemberFilterConstraint?: (ctx: MemberFilterConstraintContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.memberFilterConstraint`.
   * @param ctx the parse tree
   */
  exitMemberFilterConstraint?: (ctx: MemberFilterConstraintContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.descriptionFilter`.
   * @param ctx the parse tree
   */
  enterDescriptionFilter?: (ctx: DescriptionFilterContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.descriptionFilter`.
   * @param ctx the parse tree
   */
  exitDescriptionFilter?: (ctx: DescriptionFilterContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.conceptFilter`.
   * @param ctx the parse tree
   */
  enterConceptFilter?: (ctx: ConceptFilterContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.conceptFilter`.
   * @param ctx the parse tree
   */
  exitConceptFilter?: (ctx: ConceptFilterContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.memberFilter`.
   * @param ctx the parse tree
   */
  enterMemberFilter?: (ctx: MemberFilterContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.memberFilter`.
   * @param ctx the parse tree
   */
  exitMemberFilter?: (ctx: MemberFilterContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.memberExpressionFilter`.
   * @param ctx the parse tree
   */
  enterMemberExpressionFilter?: (ctx: MemberExpressionFilterContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.memberExpressionFilter`.
   * @param ctx the parse tree
   */
  exitMemberExpressionFilter?: (ctx: MemberExpressionFilterContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.memberNumericFilter`.
   * @param ctx the parse tree
   */
  enterMemberNumericFilter?: (ctx: MemberNumericFilterContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.memberNumericFilter`.
   * @param ctx the parse tree
   */
  exitMemberNumericFilter?: (ctx: MemberNumericFilterContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.memberStringFilter`.
   * @param ctx the parse tree
   */
  enterMemberStringFilter?: (ctx: MemberStringFilterContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.memberStringFilter`.
   * @param ctx the parse tree
   */
  exitMemberStringFilter?: (ctx: MemberStringFilterContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.memberBooleanFilter`.
   * @param ctx the parse tree
   */
  enterMemberBooleanFilter?: (ctx: MemberBooleanFilterContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.memberBooleanFilter`.
   * @param ctx the parse tree
   */
  exitMemberBooleanFilter?: (ctx: MemberBooleanFilterContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.memberTimeFilter`.
   * @param ctx the parse tree
   */
  enterMemberTimeFilter?: (ctx: MemberTimeFilterContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.memberTimeFilter`.
   * @param ctx the parse tree
   */
  exitMemberTimeFilter?: (ctx: MemberTimeFilterContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.refsetFieldName`.
   * @param ctx the parse tree
   */
  enterRefsetFieldName?: (ctx: RefsetFieldNameContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.refsetFieldName`.
   * @param ctx the parse tree
   */
  exitRefsetFieldName?: (ctx: RefsetFieldNameContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.refsetFieldNameSet`.
   * @param ctx the parse tree
   */
  enterRefsetFieldNameSet?: (ctx: RefsetFieldNameSetContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.refsetFieldNameSet`.
   * @param ctx the parse tree
   */
  exitRefsetFieldNameSet?: (ctx: RefsetFieldNameSetContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.filterTerm`.
   * @param ctx the parse tree
   */
  enterFilterTerm?: (ctx: FilterTermContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.filterTerm`.
   * @param ctx the parse tree
   */
  exitFilterTerm?: (ctx: FilterTermContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.filterLanguageDesc`.
   * @param ctx the parse tree
   */
  enterFilterLanguageDesc?: (ctx: FilterLanguageDescContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.filterLanguageDesc`.
   * @param ctx the parse tree
   */
  exitFilterLanguageDesc?: (ctx: FilterLanguageDescContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.languageCodeSet`.
   * @param ctx the parse tree
   */
  enterLanguageCodeSet?: (ctx: LanguageCodeSetContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.languageCodeSet`.
   * @param ctx the parse tree
   */
  exitLanguageCodeSet?: (ctx: LanguageCodeSetContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.languageCode`.
   * @param ctx the parse tree
   */
  enterLanguageCode?: (ctx: LanguageCodeContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.languageCode`.
   * @param ctx the parse tree
   */
  exitLanguageCode?: (ctx: LanguageCodeContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.filterTypeDesc`.
   * @param ctx the parse tree
   */
  enterFilterTypeDesc?: (ctx: FilterTypeDescContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.filterTypeDesc`.
   * @param ctx the parse tree
   */
  exitFilterTypeDesc?: (ctx: FilterTypeDescContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.typeIdFilter`.
   * @param ctx the parse tree
   */
  enterTypeIdFilter?: (ctx: TypeIdFilterContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.typeIdFilter`.
   * @param ctx the parse tree
   */
  exitTypeIdFilter?: (ctx: TypeIdFilterContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.typeTokenFilter`.
   * @param ctx the parse tree
   */
  enterTypeTokenFilter?: (ctx: TypeTokenFilterContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.typeTokenFilter`.
   * @param ctx the parse tree
   */
  exitTypeTokenFilter?: (ctx: TypeTokenFilterContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.typeTokenSet`.
   * @param ctx the parse tree
   */
  enterTypeTokenSet?: (ctx: TypeTokenSetContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.typeTokenSet`.
   * @param ctx the parse tree
   */
  exitTypeTokenSet?: (ctx: TypeTokenSetContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.typeToken`.
   * @param ctx the parse tree
   */
  enterTypeToken?: (ctx: TypeTokenContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.typeToken`.
   * @param ctx the parse tree
   */
  exitTypeToken?: (ctx: TypeTokenContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.filterDialectDesc`.
   * @param ctx the parse tree
   */
  enterFilterDialectDesc?: (ctx: FilterDialectDescContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.filterDialectDesc`.
   * @param ctx the parse tree
   */
  exitFilterDialectDesc?: (ctx: FilterDialectDescContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.dialectAliasFilter`.
   * @param ctx the parse tree
   */
  enterDialectAliasFilter?: (ctx: DialectAliasFilterContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.dialectAliasFilter`.
   * @param ctx the parse tree
   */
  exitDialectAliasFilter?: (ctx: DialectAliasFilterContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.dialectAlias`.
   * @param ctx the parse tree
   */
  enterDialectAlias?: (ctx: DialectAliasContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.dialectAlias`.
   * @param ctx the parse tree
   */
  exitDialectAlias?: (ctx: DialectAliasContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.dialectAliasSet`.
   * @param ctx the parse tree
   */
  enterDialectAliasSet?: (ctx: DialectAliasSetContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.dialectAliasSet`.
   * @param ctx the parse tree
   */
  exitDialectAliasSet?: (ctx: DialectAliasSetContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.dialectIdFilter`.
   * @param ctx the parse tree
   */
  enterDialectIdFilter?: (ctx: DialectIdFilterContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.dialectIdFilter`.
   * @param ctx the parse tree
   */
  exitDialectIdFilter?: (ctx: DialectIdFilterContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.dialectIdSet`.
   * @param ctx the parse tree
   */
  enterDialectIdSet?: (ctx: DialectIdSetContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.dialectIdSet`.
   * @param ctx the parse tree
   */
  exitDialectIdSet?: (ctx: DialectIdSetContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.acceptabilitySet`.
   * @param ctx the parse tree
   */
  enterAcceptabilitySet?: (ctx: AcceptabilitySetContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.acceptabilitySet`.
   * @param ctx the parse tree
   */
  exitAcceptabilitySet?: (ctx: AcceptabilitySetContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.acceptabilityConceptReferenceSet`.
   * @param ctx the parse tree
   */
  enterAcceptabilityConceptReferenceSet?: (ctx: AcceptabilityConceptReferenceSetContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.acceptabilityConceptReferenceSet`.
   * @param ctx the parse tree
   */
  exitAcceptabilityConceptReferenceSet?: (ctx: AcceptabilityConceptReferenceSetContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.acceptabilityTokenSet`.
   * @param ctx the parse tree
   */
  enterAcceptabilityTokenSet?: (ctx: AcceptabilityTokenSetContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.acceptabilityTokenSet`.
   * @param ctx the parse tree
   */
  exitAcceptabilityTokenSet?: (ctx: AcceptabilityTokenSetContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.acceptabilityToken`.
   * @param ctx the parse tree
   */
  enterAcceptabilityToken?: (ctx: AcceptabilityTokenContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.acceptabilityToken`.
   * @param ctx the parse tree
   */
  exitAcceptabilityToken?: (ctx: AcceptabilityTokenContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.filterModuleDesc`.
   * @param ctx the parse tree
   */
  enterFilterModuleDesc?: (ctx: FilterModuleDescContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.filterModuleDesc`.
   * @param ctx the parse tree
   */
  exitFilterModuleDesc?: (ctx: FilterModuleDescContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.filterEffectiveTimeDesc`.
   * @param ctx the parse tree
   */
  enterFilterEffectiveTimeDesc?: (ctx: FilterEffectiveTimeDescContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.filterEffectiveTimeDesc`.
   * @param ctx the parse tree
   */
  exitFilterEffectiveTimeDesc?: (ctx: FilterEffectiveTimeDescContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.filterActiveDesc`.
   * @param ctx the parse tree
   */
  enterFilterActiveDesc?: (ctx: FilterActiveDescContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.filterActiveDesc`.
   * @param ctx the parse tree
   */
  exitFilterActiveDesc?: (ctx: FilterActiveDescContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.filterActive`.
   * @param ctx the parse tree
   */
  enterFilterActive?: (ctx: FilterActiveContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.filterActive`.
   * @param ctx the parse tree
   */
  exitFilterActive?: (ctx: FilterActiveContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.activeTrue`.
   * @param ctx the parse tree
   */
  enterActiveTrue?: (ctx: ActiveTrueContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.activeTrue`.
   * @param ctx the parse tree
   */
  exitActiveTrue?: (ctx: ActiveTrueContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.activeFalse`.
   * @param ctx the parse tree
   */
  enterActiveFalse?: (ctx: ActiveFalseContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.activeFalse`.
   * @param ctx the parse tree
   */
  exitActiveFalse?: (ctx: ActiveFalseContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.filterModule`.
   * @param ctx the parse tree
   */
  enterFilterModule?: (ctx: FilterModuleContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.filterModule`.
   * @param ctx the parse tree
   */
  exitFilterModule?: (ctx: FilterModuleContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.filterDefnStatus`.
   * @param ctx the parse tree
   */
  enterFilterDefnStatus?: (ctx: FilterDefnStatusContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.filterDefnStatus`.
   * @param ctx the parse tree
   */
  exitFilterDefnStatus?: (ctx: FilterDefnStatusContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.filterDefnStatusId`.
   * @param ctx the parse tree
   */
  enterFilterDefnStatusId?: (ctx: FilterDefnStatusIdContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.filterDefnStatusId`.
   * @param ctx the parse tree
   */
  exitFilterDefnStatusId?: (ctx: FilterDefnStatusIdContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.filterEffectiveTime`.
   * @param ctx the parse tree
   */
  enterFilterEffectiveTime?: (ctx: FilterEffectiveTimeContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.filterEffectiveTime`.
   * @param ctx the parse tree
   */
  exitFilterEffectiveTime?: (ctx: FilterEffectiveTimeContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.defnStatusToken`.
   * @param ctx the parse tree
   */
  enterDefnStatusToken?: (ctx: DefnStatusTokenContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.defnStatusToken`.
   * @param ctx the parse tree
   */
  exitDefnStatusToken?: (ctx: DefnStatusTokenContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.defnStatusTokenSet`.
   * @param ctx the parse tree
   */
  enterDefnStatusTokenSet?: (ctx: DefnStatusTokenSetContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.defnStatusTokenSet`.
   * @param ctx the parse tree
   */
  exitDefnStatusTokenSet?: (ctx: DefnStatusTokenSetContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.timeValue`.
   * @param ctx the parse tree
   */
  enterTimeValue?: (ctx: TimeValueContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.timeValue`.
   * @param ctx the parse tree
   */
  exitTimeValue?: (ctx: TimeValueContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.timeValueSet`.
   * @param ctx the parse tree
   */
  enterTimeValueSet?: (ctx: TimeValueSetContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.timeValueSet`.
   * @param ctx the parse tree
   */
  exitTimeValueSet?: (ctx: TimeValueSetContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.searchValue`.
   * @param ctx the parse tree
   */
  enterSearchValue?: (ctx: SearchValueContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.searchValue`.
   * @param ctx the parse tree
   */
  exitSearchValue?: (ctx: SearchValueContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.searchValueSet`.
   * @param ctx the parse tree
   */
  enterSearchValueSet?: (ctx: SearchValueSetContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.searchValueSet`.
   * @param ctx the parse tree
   */
  exitSearchValueSet?: (ctx: SearchValueSetContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.string_value`.
   * @param ctx the parse tree
   */
  enterString_value?: (ctx: String_valueContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.string_value`.
   * @param ctx the parse tree
   */
  exitString_value?: (ctx: String_valueContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.conceptReferenceSet`.
   * @param ctx the parse tree
   */
  enterConceptReferenceSet?: (ctx: ConceptReferenceSetContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.conceptReferenceSet`.
   * @param ctx the parse tree
   */
  exitConceptReferenceSet?: (ctx: ConceptReferenceSetContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.refinement`.
   * @param ctx the parse tree
   */
  enterRefinement?: (ctx: RefinementContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.refinement`.
   * @param ctx the parse tree
   */
  exitRefinement?: (ctx: RefinementContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.conjunctionRefinement`.
   * @param ctx the parse tree
   */
  enterConjunctionRefinement?: (ctx: ConjunctionRefinementContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.conjunctionRefinement`.
   * @param ctx the parse tree
   */
  exitConjunctionRefinement?: (ctx: ConjunctionRefinementContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.disjunctionRefinement`.
   * @param ctx the parse tree
   */
  enterDisjunctionRefinement?: (ctx: DisjunctionRefinementContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.disjunctionRefinement`.
   * @param ctx the parse tree
   */
  exitDisjunctionRefinement?: (ctx: DisjunctionRefinementContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.subRefinement`.
   * @param ctx the parse tree
   */
  enterSubRefinement?: (ctx: SubRefinementContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.subRefinement`.
   * @param ctx the parse tree
   */
  exitSubRefinement?: (ctx: SubRefinementContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.attributeGroup`.
   * @param ctx the parse tree
   */
  enterAttributeGroup?: (ctx: AttributeGroupContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.attributeGroup`.
   * @param ctx the parse tree
   */
  exitAttributeGroup?: (ctx: AttributeGroupContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.attributeSet`.
   * @param ctx the parse tree
   */
  enterAttributeSet?: (ctx: AttributeSetContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.attributeSet`.
   * @param ctx the parse tree
   */
  exitAttributeSet?: (ctx: AttributeSetContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.conjunctionAttribute`.
   * @param ctx the parse tree
   */
  enterConjunctionAttribute?: (ctx: ConjunctionAttributeContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.conjunctionAttribute`.
   * @param ctx the parse tree
   */
  exitConjunctionAttribute?: (ctx: ConjunctionAttributeContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.disjunctionAttribute`.
   * @param ctx the parse tree
   */
  enterDisjunctionAttribute?: (ctx: DisjunctionAttributeContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.disjunctionAttribute`.
   * @param ctx the parse tree
   */
  exitDisjunctionAttribute?: (ctx: DisjunctionAttributeContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.subAttributeSet`.
   * @param ctx the parse tree
   */
  enterSubAttributeSet?: (ctx: SubAttributeSetContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.subAttributeSet`.
   * @param ctx the parse tree
   */
  exitSubAttributeSet?: (ctx: SubAttributeSetContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.attribute`.
   * @param ctx the parse tree
   */
  enterAttribute?: (ctx: AttributeContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.attribute`.
   * @param ctx the parse tree
   */
  exitAttribute?: (ctx: AttributeContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.cardinality`.
   * @param ctx the parse tree
   */
  enterCardinality?: (ctx: CardinalityContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.cardinality`.
   * @param ctx the parse tree
   */
  exitCardinality?: (ctx: CardinalityContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.attributeOperator`.
   * @param ctx the parse tree
   */
  enterAttributeOperator?: (ctx: AttributeOperatorContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.attributeOperator`.
   * @param ctx the parse tree
   */
  exitAttributeOperator?: (ctx: AttributeOperatorContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.attributeName`.
   * @param ctx the parse tree
   */
  enterAttributeName?: (ctx: AttributeNameContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.attributeName`.
   * @param ctx the parse tree
   */
  exitAttributeName?: (ctx: AttributeNameContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.expressionConstraintValue`.
   * @param ctx the parse tree
   */
  enterExpressionConstraintValue?: (ctx: ExpressionConstraintValueContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.expressionConstraintValue`.
   * @param ctx the parse tree
   */
  exitExpressionConstraintValue?: (ctx: ExpressionConstraintValueContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.booleanComparisonOperator`.
   * @param ctx the parse tree
   */
  enterBooleanComparisonOperator?: (ctx: BooleanComparisonOperatorContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.booleanComparisonOperator`.
   * @param ctx the parse tree
   */
  exitBooleanComparisonOperator?: (ctx: BooleanComparisonOperatorContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.timeComparisonOperator`.
   * @param ctx the parse tree
   */
  enterTimeComparisonOperator?: (ctx: TimeComparisonOperatorContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.timeComparisonOperator`.
   * @param ctx the parse tree
   */
  exitTimeComparisonOperator?: (ctx: TimeComparisonOperatorContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.concreteComparisonOperator`.
   * @param ctx the parse tree
   */
  enterConcreteComparisonOperator?: (ctx: ConcreteComparisonOperatorContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.concreteComparisonOperator`.
   * @param ctx the parse tree
   */
  exitConcreteComparisonOperator?: (ctx: ConcreteComparisonOperatorContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.expressionComparisonOperator`.
   * @param ctx the parse tree
   */
  enterExpressionComparisonOperator?: (ctx: ExpressionComparisonOperatorContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.expressionComparisonOperator`.
   * @param ctx the parse tree
   */
  exitExpressionComparisonOperator?: (ctx: ExpressionComparisonOperatorContext) => void;

  /**
   * Enter a parse tree produced by `SctExpressionConstraintGrammar.concreteValue`.
   * @param ctx the parse tree
   */
  enterConcreteValue?: (ctx: ConcreteValueContext) => void;
  /**
   * Exit a parse tree produced by `SctExpressionConstraintGrammar.concreteValue`.
   * @param ctx the parse tree
   */
  exitConcreteValue?: (ctx: ConcreteValueContext) => void;
}


/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

// Generated from .local/SctExpressionConstraintGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SctExpressionConstraintGrammar`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface SctExpressionConstraintGrammarVisitor<Result> extends ParseTreeVisitor<Result> {
  /**
   * Visit a parse tree produced by the `SnomedId`
   * labeled alternative in `SctExpressionConstraintGrammar.conceptId`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSnomedId?: (ctx: SnomedIdContext) => Result;

  /**
   * Visit a parse tree produced by the `OtherId`
   * labeled alternative in `SctExpressionConstraintGrammar.conceptId`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitOtherId?: (ctx: OtherIdContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.eQuery`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEQuery?: (ctx: EQueryContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.eLet`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitELet?: (ctx: ELetContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.eLets`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitELets?: (ctx: ELetsContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.expressionConstraint`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpressionConstraint?: (ctx: ExpressionConstraintContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.dottedExpressionConstraint`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDottedExpressionConstraint?: (ctx: DottedExpressionConstraintContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.refinedExpressionConstraint`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitRefinedExpressionConstraint?: (ctx: RefinedExpressionConstraintContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.unrefinedExpressionConstraint`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUnrefinedExpressionConstraint?: (ctx: UnrefinedExpressionConstraintContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.simpleExpressionConstraint`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSimpleExpressionConstraint?: (ctx: SimpleExpressionConstraintContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.compoundExpressionConstraint`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCompoundExpressionConstraint?: (ctx: CompoundExpressionConstraintContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.disjunctionExpressionConstraint`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDisjunctionExpressionConstraint?: (ctx: DisjunctionExpressionConstraintContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.exclusionExpressionConstraint`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExclusionExpressionConstraint?: (ctx: ExclusionExpressionConstraintContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.conceptReference`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConceptReference?: (ctx: ConceptReferenceContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.constraintOperator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConstraintOperator?: (ctx: ConstraintOperatorContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.conceptId`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConceptId?: (ctx: ConceptIdContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.focusConcept`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFocusConcept?: (ctx: FocusConceptContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.memberOf`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMemberOf?: (ctx: MemberOfContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.function`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFunction?: (ctx: FunctionContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.from`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFrom?: (ctx: FromContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.scope`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitScope?: (ctx: ScopeContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.conjunctionExpressionConstraint`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConjunctionExpressionConstraint?: (ctx: ConjunctionExpressionConstraintContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.subExpressionConstraint`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSubExpressionConstraint?: (ctx: SubExpressionConstraintContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.filterConstraint`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFilterConstraint?: (ctx: FilterConstraintContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.historySupplement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitHistorySupplement?: (ctx: HistorySupplementContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.historyProfile`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitHistoryProfile?: (ctx: HistoryProfileContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.historySubset`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitHistorySubset?: (ctx: HistorySubsetContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.descriptionFilterConstraint`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDescriptionFilterConstraint?: (ctx: DescriptionFilterConstraintContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.conceptFilterConstraint`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConceptFilterConstraint?: (ctx: ConceptFilterConstraintContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.memberFilterConstraint`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMemberFilterConstraint?: (ctx: MemberFilterConstraintContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.descriptionFilter`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDescriptionFilter?: (ctx: DescriptionFilterContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.conceptFilter`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConceptFilter?: (ctx: ConceptFilterContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.memberFilter`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMemberFilter?: (ctx: MemberFilterContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.memberExpressionFilter`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMemberExpressionFilter?: (ctx: MemberExpressionFilterContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.memberNumericFilter`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMemberNumericFilter?: (ctx: MemberNumericFilterContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.memberStringFilter`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMemberStringFilter?: (ctx: MemberStringFilterContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.memberBooleanFilter`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMemberBooleanFilter?: (ctx: MemberBooleanFilterContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.memberTimeFilter`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMemberTimeFilter?: (ctx: MemberTimeFilterContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.refsetFieldName`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitRefsetFieldName?: (ctx: RefsetFieldNameContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.refsetFieldNameSet`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitRefsetFieldNameSet?: (ctx: RefsetFieldNameSetContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.filterTerm`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFilterTerm?: (ctx: FilterTermContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.filterLanguageDesc`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFilterLanguageDesc?: (ctx: FilterLanguageDescContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.languageCodeSet`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLanguageCodeSet?: (ctx: LanguageCodeSetContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.languageCode`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLanguageCode?: (ctx: LanguageCodeContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.filterTypeDesc`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFilterTypeDesc?: (ctx: FilterTypeDescContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.typeIdFilter`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypeIdFilter?: (ctx: TypeIdFilterContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.typeTokenFilter`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypeTokenFilter?: (ctx: TypeTokenFilterContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.typeTokenSet`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypeTokenSet?: (ctx: TypeTokenSetContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.typeToken`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypeToken?: (ctx: TypeTokenContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.filterDialectDesc`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFilterDialectDesc?: (ctx: FilterDialectDescContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.dialectAliasFilter`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDialectAliasFilter?: (ctx: DialectAliasFilterContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.dialectAlias`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDialectAlias?: (ctx: DialectAliasContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.dialectAliasSet`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDialectAliasSet?: (ctx: DialectAliasSetContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.dialectIdFilter`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDialectIdFilter?: (ctx: DialectIdFilterContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.dialectIdSet`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDialectIdSet?: (ctx: DialectIdSetContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.acceptabilitySet`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAcceptabilitySet?: (ctx: AcceptabilitySetContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.acceptabilityConceptReferenceSet`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAcceptabilityConceptReferenceSet?: (ctx: AcceptabilityConceptReferenceSetContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.acceptabilityTokenSet`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAcceptabilityTokenSet?: (ctx: AcceptabilityTokenSetContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.acceptabilityToken`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAcceptabilityToken?: (ctx: AcceptabilityTokenContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.filterModuleDesc`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFilterModuleDesc?: (ctx: FilterModuleDescContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.filterEffectiveTimeDesc`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFilterEffectiveTimeDesc?: (ctx: FilterEffectiveTimeDescContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.filterActiveDesc`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFilterActiveDesc?: (ctx: FilterActiveDescContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.filterActive`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFilterActive?: (ctx: FilterActiveContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.activeTrue`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitActiveTrue?: (ctx: ActiveTrueContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.activeFalse`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitActiveFalse?: (ctx: ActiveFalseContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.filterModule`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFilterModule?: (ctx: FilterModuleContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.filterDefnStatus`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFilterDefnStatus?: (ctx: FilterDefnStatusContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.filterDefnStatusId`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFilterDefnStatusId?: (ctx: FilterDefnStatusIdContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.filterEffectiveTime`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFilterEffectiveTime?: (ctx: FilterEffectiveTimeContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.defnStatusToken`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDefnStatusToken?: (ctx: DefnStatusTokenContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.defnStatusTokenSet`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDefnStatusTokenSet?: (ctx: DefnStatusTokenSetContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.timeValue`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTimeValue?: (ctx: TimeValueContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.timeValueSet`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTimeValueSet?: (ctx: TimeValueSetContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.searchValue`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSearchValue?: (ctx: SearchValueContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.searchValueSet`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSearchValueSet?: (ctx: SearchValueSetContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.string_value`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitString_value?: (ctx: String_valueContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.conceptReferenceSet`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConceptReferenceSet?: (ctx: ConceptReferenceSetContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.refinement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitRefinement?: (ctx: RefinementContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.conjunctionRefinement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConjunctionRefinement?: (ctx: ConjunctionRefinementContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.disjunctionRefinement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDisjunctionRefinement?: (ctx: DisjunctionRefinementContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.subRefinement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSubRefinement?: (ctx: SubRefinementContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.attributeGroup`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAttributeGroup?: (ctx: AttributeGroupContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.attributeSet`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAttributeSet?: (ctx: AttributeSetContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.conjunctionAttribute`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConjunctionAttribute?: (ctx: ConjunctionAttributeContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.disjunctionAttribute`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDisjunctionAttribute?: (ctx: DisjunctionAttributeContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.subAttributeSet`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSubAttributeSet?: (ctx: SubAttributeSetContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.attribute`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAttribute?: (ctx: AttributeContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.cardinality`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCardinality?: (ctx: CardinalityContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.attributeOperator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAttributeOperator?: (ctx: AttributeOperatorContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.attributeName`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAttributeName?: (ctx: AttributeNameContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.expressionConstraintValue`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpressionConstraintValue?: (ctx: ExpressionConstraintValueContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.booleanComparisonOperator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBooleanComparisonOperator?: (ctx: BooleanComparisonOperatorContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.timeComparisonOperator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTimeComparisonOperator?: (ctx: TimeComparisonOperatorContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.concreteComparisonOperator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConcreteComparisonOperator?: (ctx: ConcreteComparisonOperatorContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.expressionComparisonOperator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpressionComparisonOperator?: (ctx: ExpressionComparisonOperatorContext) => Result;

  /**
   * Visit a parse tree produced by `SctExpressionConstraintGrammar.concreteValue`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConcreteValue?: (ctx: ConcreteValueContext) => Result;
}


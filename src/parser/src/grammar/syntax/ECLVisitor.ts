// noinspection SpellCheckingInspection
// Generated from src/grammar/syntax/ECL.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import {
  AcceptabilityconceptreferencesetContext,
  AcceptabilitysetContext,
  AcceptabilitytokenContext,
  AcceptabilitytokensetContext,
  AcceptableContext,
  ActivefalsevalueContext,
  ActivefilterContext,
  ActivekeywordContext,
  ActivetruevalueContext,
  ActivevalueContext,
  AlphaContext,
  AncestorofContext,
  AncestororselfofContext,
  AnynonescapedcharContext,
  BooleancomparisonoperatorContext,
  BooleanvalueContext,
  BsContext,
  CardinalityContext,
  ChildofContext,
  ChildorselfofContext,
  CommentContext,
  CompoundexpressionconstraintContext,
  ConceptfilterconstraintContext,
  ConceptfilterContext,
  ConceptidContext,
  ConjunctionattributesetContext,
  ConjunctionContext,
  ConjunctionexpressionconstraintContext,
  ConjunctionrefinementsetContext,
  ConstraintoperatorContext,
  CrContext,
  DashContext,
  DayContext,
  DecimalvalueContext,
  DefinedtokenContext,
  DefinitionContext,
  DefinitionstatusfilterContext,
  DefinitionstatusidfilterContext,
  DefinitionstatusidkeywordContext,
  DefinitionstatuskeywordContext,
  DefinitionstatustokenContext,
  DefinitionstatustokenfilterContext,
  DefinitionstatustokensetContext,
  DescendantofContext,
  DescendantorselfofContext,
  DescriptionfilterconstraintContext,
  DescriptionfilterContext,
  DialectaliasContext,
  DialectaliasfilterContext,
  DialectaliassetContext,
  DialectContext,
  DialectfilterContext,
  DialectidContext,
  DialectidfilterContext,
  DialectidsetContext,
  DigitContext,
  DigitnonzeroContext,
  DisjunctionattributesetContext,
  DisjunctionContext,
  DisjunctionexpressionconstraintContext,
  DisjunctionrefinementsetContext,
  DotContext,
  DottedexpressionattributeContext,
  DottedexpressionconstraintContext,
  EclattributeContext,
  EclattributegroupContext,
  EclattributenameContext,
  EclattributesetContext,
  EclconceptreferenceContext,
  EclconceptreferencesetContext,
  EclfocusconceptContext,
  EclrefinementContext,
  EffectivetimefilterContext,
  EffectivetimekeywordContext,
  EscapedcharContext,
  EscapedwildcharContext,
  ExclusionContext,
  ExclusionexpressionconstraintContext,
  ExpressioncomparisonoperatorContext,
  ExpressionconstraintContext,
  False_1Context,
  FullyspecifiednameContext,
  HistorykeywordContext,
  HistorymaximumsuffixContext,
  HistoryminimumsuffixContext,
  HistorymoderatesuffixContext,
  HistoryprofilesuffixContext,
  HistorysubsetContext,
  HistorysupplementContext,
  HtabContext,
  IntegervalueContext,
  LanguagecodeContext,
  LanguagecodesetContext,
  LanguageContext,
  LanguagefilterContext,
  LfContext,
  ManyContext,
  MatchContext,
  MatchsearchtermContext,
  MatchsearchtermsetContext,
  MaxvalueContext,
  MemberfieldfilterContext,
  MemberfilterconstraintContext,
  MemberfilterContext,
  MemberofContext,
  MinvalueContext,
  ModulefilterContext,
  ModuleidkeywordContext,
  MonthContext,
  MwsContext,
  NonfslashContext,
  NonnegativeintegervalueContext,
  NonstarcharContext,
  NonwsnonescapedcharContext,
  NonwsnonpipeContext,
  NumericcomparisonoperatorContext,
  NumericvalueContext,
  ParentofContext,
  ParentorselfofContext,
  PreferredContext,
  PrimitivetokenContext,
  QmContext,
  RefinedexpressionconstraintContext,
  RefsetfieldContext,
  RefsetfieldnameContext,
  RefsetfieldrefContext,
  RefsetfieldsetContext,
  ReverseflagContext,
  SctidContext,
  SpContext,
  StarContext,
  StarwithnonfslashContext,
  StringcomparisonoperatorContext,
  StringvalueContext,
  SubattributesetContext,
  SubexpressionconstraintContext,
  SubrefinementContext,
  SynonymContext,
  TermContext,
  TermfilterContext,
  TermkeywordContext,
  TimecomparisonoperatorContext,
  TimevalueContext,
  TimevaluesetContext,
  ToContext,
  True_1Context,
  TypeContext,
  TypedsearchtermContext,
  TypedsearchtermsetContext,
  TypefilterContext,
  TypeidContext,
  TypeidfilterContext,
  TypetokenContext,
  TypetokenfilterContext,
  TypetokensetContext,
  WildcardContext,
  WildContext,
  WildsearchtermContext,
  WildsearchtermsetContext,
  WsContext,
  YearContext,
  ZeroContext
} from "./ECLParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ECLParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ECLVisitor<Result> extends ParseTreeVisitor<Result> {
  /**
   * Visit a parse tree produced by `ECLParser.expressionconstraint`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpressionconstraint?: (ctx: ExpressionconstraintContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.refinedexpressionconstraint`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitRefinedexpressionconstraint?: (ctx: RefinedexpressionconstraintContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.compoundexpressionconstraint`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCompoundexpressionconstraint?: (ctx: CompoundexpressionconstraintContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.conjunctionexpressionconstraint`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConjunctionexpressionconstraint?: (ctx: ConjunctionexpressionconstraintContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.disjunctionexpressionconstraint`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDisjunctionexpressionconstraint?: (ctx: DisjunctionexpressionconstraintContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.exclusionexpressionconstraint`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExclusionexpressionconstraint?: (ctx: ExclusionexpressionconstraintContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.dottedexpressionconstraint`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDottedexpressionconstraint?: (ctx: DottedexpressionconstraintContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.dottedexpressionattribute`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDottedexpressionattribute?: (ctx: DottedexpressionattributeContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.subexpressionconstraint`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSubexpressionconstraint?: (ctx: SubexpressionconstraintContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.eclfocusconcept`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEclfocusconcept?: (ctx: EclfocusconceptContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.dot`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDot?: (ctx: DotContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.memberof`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMemberof?: (ctx: MemberofContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.refsetfieldset`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitRefsetfieldset?: (ctx: RefsetfieldsetContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.refsetfield`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitRefsetfield?: (ctx: RefsetfieldContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.refsetfieldname`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitRefsetfieldname?: (ctx: RefsetfieldnameContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.refsetfieldref`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitRefsetfieldref?: (ctx: RefsetfieldrefContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.eclconceptreference`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEclconceptreference?: (ctx: EclconceptreferenceContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.eclconceptreferenceset`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEclconceptreferenceset?: (ctx: EclconceptreferencesetContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.conceptid`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConceptid?: (ctx: ConceptidContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.term`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTerm?: (ctx: TermContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.wildcard`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitWildcard?: (ctx: WildcardContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.constraintoperator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConstraintoperator?: (ctx: ConstraintoperatorContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.descendantof`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDescendantof?: (ctx: DescendantofContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.descendantorselfof`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDescendantorselfof?: (ctx: DescendantorselfofContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.childof`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitChildof?: (ctx: ChildofContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.childorselfof`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitChildorselfof?: (ctx: ChildorselfofContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.ancestorof`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAncestorof?: (ctx: AncestorofContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.ancestororselfof`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAncestororselfof?: (ctx: AncestororselfofContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.parentof`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitParentof?: (ctx: ParentofContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.parentorselfof`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitParentorselfof?: (ctx: ParentorselfofContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.conjunction`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConjunction?: (ctx: ConjunctionContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.disjunction`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDisjunction?: (ctx: DisjunctionContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.exclusion`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExclusion?: (ctx: ExclusionContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.eclrefinement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEclrefinement?: (ctx: EclrefinementContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.conjunctionrefinementset`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConjunctionrefinementset?: (ctx: ConjunctionrefinementsetContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.disjunctionrefinementset`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDisjunctionrefinementset?: (ctx: DisjunctionrefinementsetContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.subrefinement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSubrefinement?: (ctx: SubrefinementContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.eclattributeset`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEclattributeset?: (ctx: EclattributesetContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.conjunctionattributeset`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConjunctionattributeset?: (ctx: ConjunctionattributesetContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.disjunctionattributeset`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDisjunctionattributeset?: (ctx: DisjunctionattributesetContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.subattributeset`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSubattributeset?: (ctx: SubattributesetContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.eclattributegroup`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEclattributegroup?: (ctx: EclattributegroupContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.eclattribute`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEclattribute?: (ctx: EclattributeContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.cardinality`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCardinality?: (ctx: CardinalityContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.minvalue`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMinvalue?: (ctx: MinvalueContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.to`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTo?: (ctx: ToContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.maxvalue`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMaxvalue?: (ctx: MaxvalueContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.many`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMany?: (ctx: ManyContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.reverseflag`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitReverseflag?: (ctx: ReverseflagContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.eclattributename`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEclattributename?: (ctx: EclattributenameContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.expressioncomparisonoperator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpressioncomparisonoperator?: (ctx: ExpressioncomparisonoperatorContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.numericcomparisonoperator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitNumericcomparisonoperator?: (ctx: NumericcomparisonoperatorContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.timecomparisonoperator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTimecomparisonoperator?: (ctx: TimecomparisonoperatorContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.stringcomparisonoperator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStringcomparisonoperator?: (ctx: StringcomparisonoperatorContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.booleancomparisonoperator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBooleancomparisonoperator?: (ctx: BooleancomparisonoperatorContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.descriptionfilterconstraint`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDescriptionfilterconstraint?: (ctx: DescriptionfilterconstraintContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.descriptionfilter`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDescriptionfilter?: (ctx: DescriptionfilterContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.termfilter`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTermfilter?: (ctx: TermfilterContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.termkeyword`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTermkeyword?: (ctx: TermkeywordContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.typedsearchterm`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypedsearchterm?: (ctx: TypedsearchtermContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.typedsearchtermset`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypedsearchtermset?: (ctx: TypedsearchtermsetContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.wild`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitWild?: (ctx: WildContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.match`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMatch?: (ctx: MatchContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.matchsearchterm`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMatchsearchterm?: (ctx: MatchsearchtermContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.matchsearchtermset`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMatchsearchtermset?: (ctx: MatchsearchtermsetContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.wildsearchterm`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitWildsearchterm?: (ctx: WildsearchtermContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.wildsearchtermset`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitWildsearchtermset?: (ctx: WildsearchtermsetContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.languagefilter`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLanguagefilter?: (ctx: LanguagefilterContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.language`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLanguage?: (ctx: LanguageContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.languagecode`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLanguagecode?: (ctx: LanguagecodeContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.languagecodeset`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLanguagecodeset?: (ctx: LanguagecodesetContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.typefilter`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypefilter?: (ctx: TypefilterContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.typeidfilter`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypeidfilter?: (ctx: TypeidfilterContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.typeid`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypeid?: (ctx: TypeidContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.typetokenfilter`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypetokenfilter?: (ctx: TypetokenfilterContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.type`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitType?: (ctx: TypeContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.typetoken`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypetoken?: (ctx: TypetokenContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.typetokenset`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypetokenset?: (ctx: TypetokensetContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.synonym`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSynonym?: (ctx: SynonymContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.fullyspecifiedname`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFullyspecifiedname?: (ctx: FullyspecifiednameContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.definition`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDefinition?: (ctx: DefinitionContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.dialectfilter`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDialectfilter?: (ctx: DialectfilterContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.dialectidfilter`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDialectidfilter?: (ctx: DialectidfilterContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.dialectid`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDialectid?: (ctx: DialectidContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.dialectaliasfilter`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDialectaliasfilter?: (ctx: DialectaliasfilterContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.dialect`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDialect?: (ctx: DialectContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.dialectalias`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDialectalias?: (ctx: DialectaliasContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.dialectaliasset`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDialectaliasset?: (ctx: DialectaliassetContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.dialectidset`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDialectidset?: (ctx: DialectidsetContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.acceptabilityset`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAcceptabilityset?: (ctx: AcceptabilitysetContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.acceptabilityconceptreferenceset`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAcceptabilityconceptreferenceset?: (ctx: AcceptabilityconceptreferencesetContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.acceptabilitytokenset`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAcceptabilitytokenset?: (ctx: AcceptabilitytokensetContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.acceptabilitytoken`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAcceptabilitytoken?: (ctx: AcceptabilitytokenContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.acceptable`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAcceptable?: (ctx: AcceptableContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.preferred`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPreferred?: (ctx: PreferredContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.conceptfilterconstraint`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConceptfilterconstraint?: (ctx: ConceptfilterconstraintContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.conceptfilter`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConceptfilter?: (ctx: ConceptfilterContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.definitionstatusfilter`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDefinitionstatusfilter?: (ctx: DefinitionstatusfilterContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.definitionstatusidfilter`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDefinitionstatusidfilter?: (ctx: DefinitionstatusidfilterContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.definitionstatusidkeyword`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDefinitionstatusidkeyword?: (ctx: DefinitionstatusidkeywordContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.definitionstatustokenfilter`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDefinitionstatustokenfilter?: (ctx: DefinitionstatustokenfilterContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.definitionstatuskeyword`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDefinitionstatuskeyword?: (ctx: DefinitionstatuskeywordContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.definitionstatustoken`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDefinitionstatustoken?: (ctx: DefinitionstatustokenContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.definitionstatustokenset`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDefinitionstatustokenset?: (ctx: DefinitionstatustokensetContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.primitivetoken`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPrimitivetoken?: (ctx: PrimitivetokenContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.definedtoken`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDefinedtoken?: (ctx: DefinedtokenContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.modulefilter`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitModulefilter?: (ctx: ModulefilterContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.moduleidkeyword`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitModuleidkeyword?: (ctx: ModuleidkeywordContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.effectivetimefilter`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEffectivetimefilter?: (ctx: EffectivetimefilterContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.effectivetimekeyword`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEffectivetimekeyword?: (ctx: EffectivetimekeywordContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.timevalue`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTimevalue?: (ctx: TimevalueContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.timevalueset`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTimevalueset?: (ctx: TimevaluesetContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.year`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitYear?: (ctx: YearContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.month`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMonth?: (ctx: MonthContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.day`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDay?: (ctx: DayContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.activefilter`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitActivefilter?: (ctx: ActivefilterContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.activekeyword`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitActivekeyword?: (ctx: ActivekeywordContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.activevalue`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitActivevalue?: (ctx: ActivevalueContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.activetruevalue`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitActivetruevalue?: (ctx: ActivetruevalueContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.activefalsevalue`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitActivefalsevalue?: (ctx: ActivefalsevalueContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.memberfilterconstraint`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMemberfilterconstraint?: (ctx: MemberfilterconstraintContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.memberfilter`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMemberfilter?: (ctx: MemberfilterContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.memberfieldfilter`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMemberfieldfilter?: (ctx: MemberfieldfilterContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.historysupplement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitHistorysupplement?: (ctx: HistorysupplementContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.historykeyword`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitHistorykeyword?: (ctx: HistorykeywordContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.historyprofilesuffix`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitHistoryprofilesuffix?: (ctx: HistoryprofilesuffixContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.historyminimumsuffix`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitHistoryminimumsuffix?: (ctx: HistoryminimumsuffixContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.historymoderatesuffix`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitHistorymoderatesuffix?: (ctx: HistorymoderatesuffixContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.historymaximumsuffix`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitHistorymaximumsuffix?: (ctx: HistorymaximumsuffixContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.historysubset`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitHistorysubset?: (ctx: HistorysubsetContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.numericvalue`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitNumericvalue?: (ctx: NumericvalueContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.stringvalue`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStringvalue?: (ctx: StringvalueContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.integervalue`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIntegervalue?: (ctx: IntegervalueContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.decimalvalue`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDecimalvalue?: (ctx: DecimalvalueContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.booleanvalue`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBooleanvalue?: (ctx: BooleanvalueContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.true_1`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTrue_1?: (ctx: True_1Context) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.false_1`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFalse_1?: (ctx: False_1Context) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.nonnegativeintegervalue`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitNonnegativeintegervalue?: (ctx: NonnegativeintegervalueContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.sctid`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSctid?: (ctx: SctidContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.ws`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitWs?: (ctx: WsContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.mws`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMws?: (ctx: MwsContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.comment`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitComment?: (ctx: CommentContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.nonstarchar`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitNonstarchar?: (ctx: NonstarcharContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.starwithnonfslash`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStarwithnonfslash?: (ctx: StarwithnonfslashContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.nonfslash`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitNonfslash?: (ctx: NonfslashContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.sp`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSp?: (ctx: SpContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.htab`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitHtab?: (ctx: HtabContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.cr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCr?: (ctx: CrContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.lf`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLf?: (ctx: LfContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.qm`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitQm?: (ctx: QmContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.bs`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBs?: (ctx: BsContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.star`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStar?: (ctx: StarContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.digit`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDigit?: (ctx: DigitContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.zero`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitZero?: (ctx: ZeroContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.digitnonzero`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDigitnonzero?: (ctx: DigitnonzeroContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.nonwsnonpipe`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitNonwsnonpipe?: (ctx: NonwsnonpipeContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.anynonescapedchar`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAnynonescapedchar?: (ctx: AnynonescapedcharContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.escapedchar`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEscapedchar?: (ctx: EscapedcharContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.escapedwildchar`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEscapedwildchar?: (ctx: EscapedwildcharContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.nonwsnonescapedchar`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitNonwsnonescapedchar?: (ctx: NonwsnonescapedcharContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.alpha`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAlpha?: (ctx: AlphaContext) => Result;

  /**
   * Visit a parse tree produced by `ECLParser.dash`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDash?: (ctx: DashContext) => Result;
}


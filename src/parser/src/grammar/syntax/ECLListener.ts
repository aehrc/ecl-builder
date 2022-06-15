// noinspection SpellCheckingInspection
// Generated from src/grammar/syntax/ECL.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `ECLParser`.
 */
export interface ECLListener extends ParseTreeListener {
  /**
   * Enter a parse tree produced by `ECLParser.expressionconstraint`.
   * @param ctx the parse tree
   */
  enterExpressionconstraint?: (ctx: ExpressionconstraintContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.expressionconstraint`.
   * @param ctx the parse tree
   */
  exitExpressionconstraint?: (ctx: ExpressionconstraintContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.refinedexpressionconstraint`.
   * @param ctx the parse tree
   */
  enterRefinedexpressionconstraint?: (ctx: RefinedexpressionconstraintContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.refinedexpressionconstraint`.
   * @param ctx the parse tree
   */
  exitRefinedexpressionconstraint?: (ctx: RefinedexpressionconstraintContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.compoundexpressionconstraint`.
   * @param ctx the parse tree
   */
  enterCompoundexpressionconstraint?: (ctx: CompoundexpressionconstraintContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.compoundexpressionconstraint`.
   * @param ctx the parse tree
   */
  exitCompoundexpressionconstraint?: (ctx: CompoundexpressionconstraintContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.conjunctionexpressionconstraint`.
   * @param ctx the parse tree
   */
  enterConjunctionexpressionconstraint?: (ctx: ConjunctionexpressionconstraintContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.conjunctionexpressionconstraint`.
   * @param ctx the parse tree
   */
  exitConjunctionexpressionconstraint?: (ctx: ConjunctionexpressionconstraintContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.disjunctionexpressionconstraint`.
   * @param ctx the parse tree
   */
  enterDisjunctionexpressionconstraint?: (ctx: DisjunctionexpressionconstraintContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.disjunctionexpressionconstraint`.
   * @param ctx the parse tree
   */
  exitDisjunctionexpressionconstraint?: (ctx: DisjunctionexpressionconstraintContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.exclusionexpressionconstraint`.
   * @param ctx the parse tree
   */
  enterExclusionexpressionconstraint?: (ctx: ExclusionexpressionconstraintContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.exclusionexpressionconstraint`.
   * @param ctx the parse tree
   */
  exitExclusionexpressionconstraint?: (ctx: ExclusionexpressionconstraintContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.dottedexpressionconstraint`.
   * @param ctx the parse tree
   */
  enterDottedexpressionconstraint?: (ctx: DottedexpressionconstraintContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.dottedexpressionconstraint`.
   * @param ctx the parse tree
   */
  exitDottedexpressionconstraint?: (ctx: DottedexpressionconstraintContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.dottedexpressionattribute`.
   * @param ctx the parse tree
   */
  enterDottedexpressionattribute?: (ctx: DottedexpressionattributeContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.dottedexpressionattribute`.
   * @param ctx the parse tree
   */
  exitDottedexpressionattribute?: (ctx: DottedexpressionattributeContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.subexpressionconstraint`.
   * @param ctx the parse tree
   */
  enterSubexpressionconstraint?: (ctx: SubexpressionconstraintContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.subexpressionconstraint`.
   * @param ctx the parse tree
   */
  exitSubexpressionconstraint?: (ctx: SubexpressionconstraintContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.eclfocusconcept`.
   * @param ctx the parse tree
   */
  enterEclfocusconcept?: (ctx: EclfocusconceptContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.eclfocusconcept`.
   * @param ctx the parse tree
   */
  exitEclfocusconcept?: (ctx: EclfocusconceptContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.dot`.
   * @param ctx the parse tree
   */
  enterDot?: (ctx: DotContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.dot`.
   * @param ctx the parse tree
   */
  exitDot?: (ctx: DotContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.memberof`.
   * @param ctx the parse tree
   */
  enterMemberof?: (ctx: MemberofContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.memberof`.
   * @param ctx the parse tree
   */
  exitMemberof?: (ctx: MemberofContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.refsetfieldset`.
   * @param ctx the parse tree
   */
  enterRefsetfieldset?: (ctx: RefsetfieldsetContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.refsetfieldset`.
   * @param ctx the parse tree
   */
  exitRefsetfieldset?: (ctx: RefsetfieldsetContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.refsetfield`.
   * @param ctx the parse tree
   */
  enterRefsetfield?: (ctx: RefsetfieldContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.refsetfield`.
   * @param ctx the parse tree
   */
  exitRefsetfield?: (ctx: RefsetfieldContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.refsetfieldname`.
   * @param ctx the parse tree
   */
  enterRefsetfieldname?: (ctx: RefsetfieldnameContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.refsetfieldname`.
   * @param ctx the parse tree
   */
  exitRefsetfieldname?: (ctx: RefsetfieldnameContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.refsetfieldref`.
   * @param ctx the parse tree
   */
  enterRefsetfieldref?: (ctx: RefsetfieldrefContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.refsetfieldref`.
   * @param ctx the parse tree
   */
  exitRefsetfieldref?: (ctx: RefsetfieldrefContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.eclconceptreference`.
   * @param ctx the parse tree
   */
  enterEclconceptreference?: (ctx: EclconceptreferenceContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.eclconceptreference`.
   * @param ctx the parse tree
   */
  exitEclconceptreference?: (ctx: EclconceptreferenceContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.eclconceptreferenceset`.
   * @param ctx the parse tree
   */
  enterEclconceptreferenceset?: (ctx: EclconceptreferencesetContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.eclconceptreferenceset`.
   * @param ctx the parse tree
   */
  exitEclconceptreferenceset?: (ctx: EclconceptreferencesetContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.conceptid`.
   * @param ctx the parse tree
   */
  enterConceptid?: (ctx: ConceptidContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.conceptid`.
   * @param ctx the parse tree
   */
  exitConceptid?: (ctx: ConceptidContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.term`.
   * @param ctx the parse tree
   */
  enterTerm?: (ctx: TermContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.term`.
   * @param ctx the parse tree
   */
  exitTerm?: (ctx: TermContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.wildcard`.
   * @param ctx the parse tree
   */
  enterWildcard?: (ctx: WildcardContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.wildcard`.
   * @param ctx the parse tree
   */
  exitWildcard?: (ctx: WildcardContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.constraintoperator`.
   * @param ctx the parse tree
   */
  enterConstraintoperator?: (ctx: ConstraintoperatorContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.constraintoperator`.
   * @param ctx the parse tree
   */
  exitConstraintoperator?: (ctx: ConstraintoperatorContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.descendantof`.
   * @param ctx the parse tree
   */
  enterDescendantof?: (ctx: DescendantofContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.descendantof`.
   * @param ctx the parse tree
   */
  exitDescendantof?: (ctx: DescendantofContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.descendantorselfof`.
   * @param ctx the parse tree
   */
  enterDescendantorselfof?: (ctx: DescendantorselfofContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.descendantorselfof`.
   * @param ctx the parse tree
   */
  exitDescendantorselfof?: (ctx: DescendantorselfofContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.childof`.
   * @param ctx the parse tree
   */
  enterChildof?: (ctx: ChildofContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.childof`.
   * @param ctx the parse tree
   */
  exitChildof?: (ctx: ChildofContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.childorselfof`.
   * @param ctx the parse tree
   */
  enterChildorselfof?: (ctx: ChildorselfofContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.childorselfof`.
   * @param ctx the parse tree
   */
  exitChildorselfof?: (ctx: ChildorselfofContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.ancestorof`.
   * @param ctx the parse tree
   */
  enterAncestorof?: (ctx: AncestorofContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.ancestorof`.
   * @param ctx the parse tree
   */
  exitAncestorof?: (ctx: AncestorofContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.ancestororselfof`.
   * @param ctx the parse tree
   */
  enterAncestororselfof?: (ctx: AncestororselfofContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.ancestororselfof`.
   * @param ctx the parse tree
   */
  exitAncestororselfof?: (ctx: AncestororselfofContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.parentof`.
   * @param ctx the parse tree
   */
  enterParentof?: (ctx: ParentofContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.parentof`.
   * @param ctx the parse tree
   */
  exitParentof?: (ctx: ParentofContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.parentorselfof`.
   * @param ctx the parse tree
   */
  enterParentorselfof?: (ctx: ParentorselfofContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.parentorselfof`.
   * @param ctx the parse tree
   */
  exitParentorselfof?: (ctx: ParentorselfofContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.conjunction`.
   * @param ctx the parse tree
   */
  enterConjunction?: (ctx: ConjunctionContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.conjunction`.
   * @param ctx the parse tree
   */
  exitConjunction?: (ctx: ConjunctionContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.disjunction`.
   * @param ctx the parse tree
   */
  enterDisjunction?: (ctx: DisjunctionContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.disjunction`.
   * @param ctx the parse tree
   */
  exitDisjunction?: (ctx: DisjunctionContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.exclusion`.
   * @param ctx the parse tree
   */
  enterExclusion?: (ctx: ExclusionContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.exclusion`.
   * @param ctx the parse tree
   */
  exitExclusion?: (ctx: ExclusionContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.eclrefinement`.
   * @param ctx the parse tree
   */
  enterEclrefinement?: (ctx: EclrefinementContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.eclrefinement`.
   * @param ctx the parse tree
   */
  exitEclrefinement?: (ctx: EclrefinementContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.conjunctionrefinementset`.
   * @param ctx the parse tree
   */
  enterConjunctionrefinementset?: (ctx: ConjunctionrefinementsetContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.conjunctionrefinementset`.
   * @param ctx the parse tree
   */
  exitConjunctionrefinementset?: (ctx: ConjunctionrefinementsetContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.disjunctionrefinementset`.
   * @param ctx the parse tree
   */
  enterDisjunctionrefinementset?: (ctx: DisjunctionrefinementsetContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.disjunctionrefinementset`.
   * @param ctx the parse tree
   */
  exitDisjunctionrefinementset?: (ctx: DisjunctionrefinementsetContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.subrefinement`.
   * @param ctx the parse tree
   */
  enterSubrefinement?: (ctx: SubrefinementContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.subrefinement`.
   * @param ctx the parse tree
   */
  exitSubrefinement?: (ctx: SubrefinementContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.eclattributeset`.
   * @param ctx the parse tree
   */
  enterEclattributeset?: (ctx: EclattributesetContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.eclattributeset`.
   * @param ctx the parse tree
   */
  exitEclattributeset?: (ctx: EclattributesetContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.conjunctionattributeset`.
   * @param ctx the parse tree
   */
  enterConjunctionattributeset?: (ctx: ConjunctionattributesetContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.conjunctionattributeset`.
   * @param ctx the parse tree
   */
  exitConjunctionattributeset?: (ctx: ConjunctionattributesetContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.disjunctionattributeset`.
   * @param ctx the parse tree
   */
  enterDisjunctionattributeset?: (ctx: DisjunctionattributesetContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.disjunctionattributeset`.
   * @param ctx the parse tree
   */
  exitDisjunctionattributeset?: (ctx: DisjunctionattributesetContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.subattributeset`.
   * @param ctx the parse tree
   */
  enterSubattributeset?: (ctx: SubattributesetContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.subattributeset`.
   * @param ctx the parse tree
   */
  exitSubattributeset?: (ctx: SubattributesetContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.eclattributegroup`.
   * @param ctx the parse tree
   */
  enterEclattributegroup?: (ctx: EclattributegroupContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.eclattributegroup`.
   * @param ctx the parse tree
   */
  exitEclattributegroup?: (ctx: EclattributegroupContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.eclattribute`.
   * @param ctx the parse tree
   */
  enterEclattribute?: (ctx: EclattributeContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.eclattribute`.
   * @param ctx the parse tree
   */
  exitEclattribute?: (ctx: EclattributeContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.cardinality`.
   * @param ctx the parse tree
   */
  enterCardinality?: (ctx: CardinalityContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.cardinality`.
   * @param ctx the parse tree
   */
  exitCardinality?: (ctx: CardinalityContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.minvalue`.
   * @param ctx the parse tree
   */
  enterMinvalue?: (ctx: MinvalueContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.minvalue`.
   * @param ctx the parse tree
   */
  exitMinvalue?: (ctx: MinvalueContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.to`.
   * @param ctx the parse tree
   */
  enterTo?: (ctx: ToContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.to`.
   * @param ctx the parse tree
   */
  exitTo?: (ctx: ToContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.maxvalue`.
   * @param ctx the parse tree
   */
  enterMaxvalue?: (ctx: MaxvalueContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.maxvalue`.
   * @param ctx the parse tree
   */
  exitMaxvalue?: (ctx: MaxvalueContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.many`.
   * @param ctx the parse tree
   */
  enterMany?: (ctx: ManyContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.many`.
   * @param ctx the parse tree
   */
  exitMany?: (ctx: ManyContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.reverseflag`.
   * @param ctx the parse tree
   */
  enterReverseflag?: (ctx: ReverseflagContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.reverseflag`.
   * @param ctx the parse tree
   */
  exitReverseflag?: (ctx: ReverseflagContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.eclattributename`.
   * @param ctx the parse tree
   */
  enterEclattributename?: (ctx: EclattributenameContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.eclattributename`.
   * @param ctx the parse tree
   */
  exitEclattributename?: (ctx: EclattributenameContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.expressioncomparisonoperator`.
   * @param ctx the parse tree
   */
  enterExpressioncomparisonoperator?: (ctx: ExpressioncomparisonoperatorContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.expressioncomparisonoperator`.
   * @param ctx the parse tree
   */
  exitExpressioncomparisonoperator?: (ctx: ExpressioncomparisonoperatorContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.numericcomparisonoperator`.
   * @param ctx the parse tree
   */
  enterNumericcomparisonoperator?: (ctx: NumericcomparisonoperatorContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.numericcomparisonoperator`.
   * @param ctx the parse tree
   */
  exitNumericcomparisonoperator?: (ctx: NumericcomparisonoperatorContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.timecomparisonoperator`.
   * @param ctx the parse tree
   */
  enterTimecomparisonoperator?: (ctx: TimecomparisonoperatorContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.timecomparisonoperator`.
   * @param ctx the parse tree
   */
  exitTimecomparisonoperator?: (ctx: TimecomparisonoperatorContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.stringcomparisonoperator`.
   * @param ctx the parse tree
   */
  enterStringcomparisonoperator?: (ctx: StringcomparisonoperatorContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.stringcomparisonoperator`.
   * @param ctx the parse tree
   */
  exitStringcomparisonoperator?: (ctx: StringcomparisonoperatorContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.booleancomparisonoperator`.
   * @param ctx the parse tree
   */
  enterBooleancomparisonoperator?: (ctx: BooleancomparisonoperatorContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.booleancomparisonoperator`.
   * @param ctx the parse tree
   */
  exitBooleancomparisonoperator?: (ctx: BooleancomparisonoperatorContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.descriptionfilterconstraint`.
   * @param ctx the parse tree
   */
  enterDescriptionfilterconstraint?: (ctx: DescriptionfilterconstraintContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.descriptionfilterconstraint`.
   * @param ctx the parse tree
   */
  exitDescriptionfilterconstraint?: (ctx: DescriptionfilterconstraintContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.descriptionfilter`.
   * @param ctx the parse tree
   */
  enterDescriptionfilter?: (ctx: DescriptionfilterContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.descriptionfilter`.
   * @param ctx the parse tree
   */
  exitDescriptionfilter?: (ctx: DescriptionfilterContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.termfilter`.
   * @param ctx the parse tree
   */
  enterTermfilter?: (ctx: TermfilterContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.termfilter`.
   * @param ctx the parse tree
   */
  exitTermfilter?: (ctx: TermfilterContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.termkeyword`.
   * @param ctx the parse tree
   */
  enterTermkeyword?: (ctx: TermkeywordContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.termkeyword`.
   * @param ctx the parse tree
   */
  exitTermkeyword?: (ctx: TermkeywordContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.typedsearchterm`.
   * @param ctx the parse tree
   */
  enterTypedsearchterm?: (ctx: TypedsearchtermContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.typedsearchterm`.
   * @param ctx the parse tree
   */
  exitTypedsearchterm?: (ctx: TypedsearchtermContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.typedsearchtermset`.
   * @param ctx the parse tree
   */
  enterTypedsearchtermset?: (ctx: TypedsearchtermsetContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.typedsearchtermset`.
   * @param ctx the parse tree
   */
  exitTypedsearchtermset?: (ctx: TypedsearchtermsetContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.wild`.
   * @param ctx the parse tree
   */
  enterWild?: (ctx: WildContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.wild`.
   * @param ctx the parse tree
   */
  exitWild?: (ctx: WildContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.match`.
   * @param ctx the parse tree
   */
  enterMatch?: (ctx: MatchContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.match`.
   * @param ctx the parse tree
   */
  exitMatch?: (ctx: MatchContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.matchsearchterm`.
   * @param ctx the parse tree
   */
  enterMatchsearchterm?: (ctx: MatchsearchtermContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.matchsearchterm`.
   * @param ctx the parse tree
   */
  exitMatchsearchterm?: (ctx: MatchsearchtermContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.matchsearchtermset`.
   * @param ctx the parse tree
   */
  enterMatchsearchtermset?: (ctx: MatchsearchtermsetContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.matchsearchtermset`.
   * @param ctx the parse tree
   */
  exitMatchsearchtermset?: (ctx: MatchsearchtermsetContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.wildsearchterm`.
   * @param ctx the parse tree
   */
  enterWildsearchterm?: (ctx: WildsearchtermContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.wildsearchterm`.
   * @param ctx the parse tree
   */
  exitWildsearchterm?: (ctx: WildsearchtermContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.wildsearchtermset`.
   * @param ctx the parse tree
   */
  enterWildsearchtermset?: (ctx: WildsearchtermsetContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.wildsearchtermset`.
   * @param ctx the parse tree
   */
  exitWildsearchtermset?: (ctx: WildsearchtermsetContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.languagefilter`.
   * @param ctx the parse tree
   */
  enterLanguagefilter?: (ctx: LanguagefilterContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.languagefilter`.
   * @param ctx the parse tree
   */
  exitLanguagefilter?: (ctx: LanguagefilterContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.language`.
   * @param ctx the parse tree
   */
  enterLanguage?: (ctx: LanguageContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.language`.
   * @param ctx the parse tree
   */
  exitLanguage?: (ctx: LanguageContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.languagecode`.
   * @param ctx the parse tree
   */
  enterLanguagecode?: (ctx: LanguagecodeContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.languagecode`.
   * @param ctx the parse tree
   */
  exitLanguagecode?: (ctx: LanguagecodeContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.languagecodeset`.
   * @param ctx the parse tree
   */
  enterLanguagecodeset?: (ctx: LanguagecodesetContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.languagecodeset`.
   * @param ctx the parse tree
   */
  exitLanguagecodeset?: (ctx: LanguagecodesetContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.typefilter`.
   * @param ctx the parse tree
   */
  enterTypefilter?: (ctx: TypefilterContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.typefilter`.
   * @param ctx the parse tree
   */
  exitTypefilter?: (ctx: TypefilterContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.typeidfilter`.
   * @param ctx the parse tree
   */
  enterTypeidfilter?: (ctx: TypeidfilterContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.typeidfilter`.
   * @param ctx the parse tree
   */
  exitTypeidfilter?: (ctx: TypeidfilterContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.typeid`.
   * @param ctx the parse tree
   */
  enterTypeid?: (ctx: TypeidContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.typeid`.
   * @param ctx the parse tree
   */
  exitTypeid?: (ctx: TypeidContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.typetokenfilter`.
   * @param ctx the parse tree
   */
  enterTypetokenfilter?: (ctx: TypetokenfilterContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.typetokenfilter`.
   * @param ctx the parse tree
   */
  exitTypetokenfilter?: (ctx: TypetokenfilterContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.type`.
   * @param ctx the parse tree
   */
  enterType?: (ctx: TypeContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.type`.
   * @param ctx the parse tree
   */
  exitType?: (ctx: TypeContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.typetoken`.
   * @param ctx the parse tree
   */
  enterTypetoken?: (ctx: TypetokenContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.typetoken`.
   * @param ctx the parse tree
   */
  exitTypetoken?: (ctx: TypetokenContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.typetokenset`.
   * @param ctx the parse tree
   */
  enterTypetokenset?: (ctx: TypetokensetContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.typetokenset`.
   * @param ctx the parse tree
   */
  exitTypetokenset?: (ctx: TypetokensetContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.synonym`.
   * @param ctx the parse tree
   */
  enterSynonym?: (ctx: SynonymContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.synonym`.
   * @param ctx the parse tree
   */
  exitSynonym?: (ctx: SynonymContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.fullyspecifiedname`.
   * @param ctx the parse tree
   */
  enterFullyspecifiedname?: (ctx: FullyspecifiednameContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.fullyspecifiedname`.
   * @param ctx the parse tree
   */
  exitFullyspecifiedname?: (ctx: FullyspecifiednameContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.definition`.
   * @param ctx the parse tree
   */
  enterDefinition?: (ctx: DefinitionContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.definition`.
   * @param ctx the parse tree
   */
  exitDefinition?: (ctx: DefinitionContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.dialectfilter`.
   * @param ctx the parse tree
   */
  enterDialectfilter?: (ctx: DialectfilterContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.dialectfilter`.
   * @param ctx the parse tree
   */
  exitDialectfilter?: (ctx: DialectfilterContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.dialectidfilter`.
   * @param ctx the parse tree
   */
  enterDialectidfilter?: (ctx: DialectidfilterContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.dialectidfilter`.
   * @param ctx the parse tree
   */
  exitDialectidfilter?: (ctx: DialectidfilterContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.dialectid`.
   * @param ctx the parse tree
   */
  enterDialectid?: (ctx: DialectidContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.dialectid`.
   * @param ctx the parse tree
   */
  exitDialectid?: (ctx: DialectidContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.dialectaliasfilter`.
   * @param ctx the parse tree
   */
  enterDialectaliasfilter?: (ctx: DialectaliasfilterContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.dialectaliasfilter`.
   * @param ctx the parse tree
   */
  exitDialectaliasfilter?: (ctx: DialectaliasfilterContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.dialect`.
   * @param ctx the parse tree
   */
  enterDialect?: (ctx: DialectContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.dialect`.
   * @param ctx the parse tree
   */
  exitDialect?: (ctx: DialectContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.dialectalias`.
   * @param ctx the parse tree
   */
  enterDialectalias?: (ctx: DialectaliasContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.dialectalias`.
   * @param ctx the parse tree
   */
  exitDialectalias?: (ctx: DialectaliasContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.dialectaliasset`.
   * @param ctx the parse tree
   */
  enterDialectaliasset?: (ctx: DialectaliassetContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.dialectaliasset`.
   * @param ctx the parse tree
   */
  exitDialectaliasset?: (ctx: DialectaliassetContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.dialectidset`.
   * @param ctx the parse tree
   */
  enterDialectidset?: (ctx: DialectidsetContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.dialectidset`.
   * @param ctx the parse tree
   */
  exitDialectidset?: (ctx: DialectidsetContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.acceptabilityset`.
   * @param ctx the parse tree
   */
  enterAcceptabilityset?: (ctx: AcceptabilitysetContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.acceptabilityset`.
   * @param ctx the parse tree
   */
  exitAcceptabilityset?: (ctx: AcceptabilitysetContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.acceptabilityconceptreferenceset`.
   * @param ctx the parse tree
   */
  enterAcceptabilityconceptreferenceset?: (ctx: AcceptabilityconceptreferencesetContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.acceptabilityconceptreferenceset`.
   * @param ctx the parse tree
   */
  exitAcceptabilityconceptreferenceset?: (ctx: AcceptabilityconceptreferencesetContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.acceptabilitytokenset`.
   * @param ctx the parse tree
   */
  enterAcceptabilitytokenset?: (ctx: AcceptabilitytokensetContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.acceptabilitytokenset`.
   * @param ctx the parse tree
   */
  exitAcceptabilitytokenset?: (ctx: AcceptabilitytokensetContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.acceptabilitytoken`.
   * @param ctx the parse tree
   */
  enterAcceptabilitytoken?: (ctx: AcceptabilitytokenContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.acceptabilitytoken`.
   * @param ctx the parse tree
   */
  exitAcceptabilitytoken?: (ctx: AcceptabilitytokenContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.acceptable`.
   * @param ctx the parse tree
   */
  enterAcceptable?: (ctx: AcceptableContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.acceptable`.
   * @param ctx the parse tree
   */
  exitAcceptable?: (ctx: AcceptableContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.preferred`.
   * @param ctx the parse tree
   */
  enterPreferred?: (ctx: PreferredContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.preferred`.
   * @param ctx the parse tree
   */
  exitPreferred?: (ctx: PreferredContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.conceptfilterconstraint`.
   * @param ctx the parse tree
   */
  enterConceptfilterconstraint?: (ctx: ConceptfilterconstraintContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.conceptfilterconstraint`.
   * @param ctx the parse tree
   */
  exitConceptfilterconstraint?: (ctx: ConceptfilterconstraintContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.conceptfilter`.
   * @param ctx the parse tree
   */
  enterConceptfilter?: (ctx: ConceptfilterContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.conceptfilter`.
   * @param ctx the parse tree
   */
  exitConceptfilter?: (ctx: ConceptfilterContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.definitionstatusfilter`.
   * @param ctx the parse tree
   */
  enterDefinitionstatusfilter?: (ctx: DefinitionstatusfilterContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.definitionstatusfilter`.
   * @param ctx the parse tree
   */
  exitDefinitionstatusfilter?: (ctx: DefinitionstatusfilterContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.definitionstatusidfilter`.
   * @param ctx the parse tree
   */
  enterDefinitionstatusidfilter?: (ctx: DefinitionstatusidfilterContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.definitionstatusidfilter`.
   * @param ctx the parse tree
   */
  exitDefinitionstatusidfilter?: (ctx: DefinitionstatusidfilterContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.definitionstatusidkeyword`.
   * @param ctx the parse tree
   */
  enterDefinitionstatusidkeyword?: (ctx: DefinitionstatusidkeywordContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.definitionstatusidkeyword`.
   * @param ctx the parse tree
   */
  exitDefinitionstatusidkeyword?: (ctx: DefinitionstatusidkeywordContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.definitionstatustokenfilter`.
   * @param ctx the parse tree
   */
  enterDefinitionstatustokenfilter?: (ctx: DefinitionstatustokenfilterContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.definitionstatustokenfilter`.
   * @param ctx the parse tree
   */
  exitDefinitionstatustokenfilter?: (ctx: DefinitionstatustokenfilterContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.definitionstatuskeyword`.
   * @param ctx the parse tree
   */
  enterDefinitionstatuskeyword?: (ctx: DefinitionstatuskeywordContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.definitionstatuskeyword`.
   * @param ctx the parse tree
   */
  exitDefinitionstatuskeyword?: (ctx: DefinitionstatuskeywordContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.definitionstatustoken`.
   * @param ctx the parse tree
   */
  enterDefinitionstatustoken?: (ctx: DefinitionstatustokenContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.definitionstatustoken`.
   * @param ctx the parse tree
   */
  exitDefinitionstatustoken?: (ctx: DefinitionstatustokenContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.definitionstatustokenset`.
   * @param ctx the parse tree
   */
  enterDefinitionstatustokenset?: (ctx: DefinitionstatustokensetContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.definitionstatustokenset`.
   * @param ctx the parse tree
   */
  exitDefinitionstatustokenset?: (ctx: DefinitionstatustokensetContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.primitivetoken`.
   * @param ctx the parse tree
   */
  enterPrimitivetoken?: (ctx: PrimitivetokenContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.primitivetoken`.
   * @param ctx the parse tree
   */
  exitPrimitivetoken?: (ctx: PrimitivetokenContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.definedtoken`.
   * @param ctx the parse tree
   */
  enterDefinedtoken?: (ctx: DefinedtokenContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.definedtoken`.
   * @param ctx the parse tree
   */
  exitDefinedtoken?: (ctx: DefinedtokenContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.modulefilter`.
   * @param ctx the parse tree
   */
  enterModulefilter?: (ctx: ModulefilterContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.modulefilter`.
   * @param ctx the parse tree
   */
  exitModulefilter?: (ctx: ModulefilterContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.moduleidkeyword`.
   * @param ctx the parse tree
   */
  enterModuleidkeyword?: (ctx: ModuleidkeywordContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.moduleidkeyword`.
   * @param ctx the parse tree
   */
  exitModuleidkeyword?: (ctx: ModuleidkeywordContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.effectivetimefilter`.
   * @param ctx the parse tree
   */
  enterEffectivetimefilter?: (ctx: EffectivetimefilterContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.effectivetimefilter`.
   * @param ctx the parse tree
   */
  exitEffectivetimefilter?: (ctx: EffectivetimefilterContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.effectivetimekeyword`.
   * @param ctx the parse tree
   */
  enterEffectivetimekeyword?: (ctx: EffectivetimekeywordContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.effectivetimekeyword`.
   * @param ctx the parse tree
   */
  exitEffectivetimekeyword?: (ctx: EffectivetimekeywordContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.timevalue`.
   * @param ctx the parse tree
   */
  enterTimevalue?: (ctx: TimevalueContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.timevalue`.
   * @param ctx the parse tree
   */
  exitTimevalue?: (ctx: TimevalueContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.timevalueset`.
   * @param ctx the parse tree
   */
  enterTimevalueset?: (ctx: TimevaluesetContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.timevalueset`.
   * @param ctx the parse tree
   */
  exitTimevalueset?: (ctx: TimevaluesetContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.year`.
   * @param ctx the parse tree
   */
  enterYear?: (ctx: YearContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.year`.
   * @param ctx the parse tree
   */
  exitYear?: (ctx: YearContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.month`.
   * @param ctx the parse tree
   */
  enterMonth?: (ctx: MonthContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.month`.
   * @param ctx the parse tree
   */
  exitMonth?: (ctx: MonthContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.day`.
   * @param ctx the parse tree
   */
  enterDay?: (ctx: DayContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.day`.
   * @param ctx the parse tree
   */
  exitDay?: (ctx: DayContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.activefilter`.
   * @param ctx the parse tree
   */
  enterActivefilter?: (ctx: ActivefilterContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.activefilter`.
   * @param ctx the parse tree
   */
  exitActivefilter?: (ctx: ActivefilterContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.activekeyword`.
   * @param ctx the parse tree
   */
  enterActivekeyword?: (ctx: ActivekeywordContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.activekeyword`.
   * @param ctx the parse tree
   */
  exitActivekeyword?: (ctx: ActivekeywordContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.activevalue`.
   * @param ctx the parse tree
   */
  enterActivevalue?: (ctx: ActivevalueContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.activevalue`.
   * @param ctx the parse tree
   */
  exitActivevalue?: (ctx: ActivevalueContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.activetruevalue`.
   * @param ctx the parse tree
   */
  enterActivetruevalue?: (ctx: ActivetruevalueContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.activetruevalue`.
   * @param ctx the parse tree
   */
  exitActivetruevalue?: (ctx: ActivetruevalueContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.activefalsevalue`.
   * @param ctx the parse tree
   */
  enterActivefalsevalue?: (ctx: ActivefalsevalueContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.activefalsevalue`.
   * @param ctx the parse tree
   */
  exitActivefalsevalue?: (ctx: ActivefalsevalueContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.memberfilterconstraint`.
   * @param ctx the parse tree
   */
  enterMemberfilterconstraint?: (ctx: MemberfilterconstraintContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.memberfilterconstraint`.
   * @param ctx the parse tree
   */
  exitMemberfilterconstraint?: (ctx: MemberfilterconstraintContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.memberfilter`.
   * @param ctx the parse tree
   */
  enterMemberfilter?: (ctx: MemberfilterContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.memberfilter`.
   * @param ctx the parse tree
   */
  exitMemberfilter?: (ctx: MemberfilterContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.memberfieldfilter`.
   * @param ctx the parse tree
   */
  enterMemberfieldfilter?: (ctx: MemberfieldfilterContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.memberfieldfilter`.
   * @param ctx the parse tree
   */
  exitMemberfieldfilter?: (ctx: MemberfieldfilterContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.historysupplement`.
   * @param ctx the parse tree
   */
  enterHistorysupplement?: (ctx: HistorysupplementContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.historysupplement`.
   * @param ctx the parse tree
   */
  exitHistorysupplement?: (ctx: HistorysupplementContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.historykeyword`.
   * @param ctx the parse tree
   */
  enterHistorykeyword?: (ctx: HistorykeywordContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.historykeyword`.
   * @param ctx the parse tree
   */
  exitHistorykeyword?: (ctx: HistorykeywordContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.historyprofilesuffix`.
   * @param ctx the parse tree
   */
  enterHistoryprofilesuffix?: (ctx: HistoryprofilesuffixContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.historyprofilesuffix`.
   * @param ctx the parse tree
   */
  exitHistoryprofilesuffix?: (ctx: HistoryprofilesuffixContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.historyminimumsuffix`.
   * @param ctx the parse tree
   */
  enterHistoryminimumsuffix?: (ctx: HistoryminimumsuffixContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.historyminimumsuffix`.
   * @param ctx the parse tree
   */
  exitHistoryminimumsuffix?: (ctx: HistoryminimumsuffixContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.historymoderatesuffix`.
   * @param ctx the parse tree
   */
  enterHistorymoderatesuffix?: (ctx: HistorymoderatesuffixContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.historymoderatesuffix`.
   * @param ctx the parse tree
   */
  exitHistorymoderatesuffix?: (ctx: HistorymoderatesuffixContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.historymaximumsuffix`.
   * @param ctx the parse tree
   */
  enterHistorymaximumsuffix?: (ctx: HistorymaximumsuffixContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.historymaximumsuffix`.
   * @param ctx the parse tree
   */
  exitHistorymaximumsuffix?: (ctx: HistorymaximumsuffixContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.historysubset`.
   * @param ctx the parse tree
   */
  enterHistorysubset?: (ctx: HistorysubsetContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.historysubset`.
   * @param ctx the parse tree
   */
  exitHistorysubset?: (ctx: HistorysubsetContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.numericvalue`.
   * @param ctx the parse tree
   */
  enterNumericvalue?: (ctx: NumericvalueContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.numericvalue`.
   * @param ctx the parse tree
   */
  exitNumericvalue?: (ctx: NumericvalueContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.stringvalue`.
   * @param ctx the parse tree
   */
  enterStringvalue?: (ctx: StringvalueContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.stringvalue`.
   * @param ctx the parse tree
   */
  exitStringvalue?: (ctx: StringvalueContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.integervalue`.
   * @param ctx the parse tree
   */
  enterIntegervalue?: (ctx: IntegervalueContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.integervalue`.
   * @param ctx the parse tree
   */
  exitIntegervalue?: (ctx: IntegervalueContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.decimalvalue`.
   * @param ctx the parse tree
   */
  enterDecimalvalue?: (ctx: DecimalvalueContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.decimalvalue`.
   * @param ctx the parse tree
   */
  exitDecimalvalue?: (ctx: DecimalvalueContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.booleanvalue`.
   * @param ctx the parse tree
   */
  enterBooleanvalue?: (ctx: BooleanvalueContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.booleanvalue`.
   * @param ctx the parse tree
   */
  exitBooleanvalue?: (ctx: BooleanvalueContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.true_1`.
   * @param ctx the parse tree
   */
  enterTrue_1?: (ctx: True_1Context) => void;
  /**
   * Exit a parse tree produced by `ECLParser.true_1`.
   * @param ctx the parse tree
   */
  exitTrue_1?: (ctx: True_1Context) => void;

  /**
   * Enter a parse tree produced by `ECLParser.false_1`.
   * @param ctx the parse tree
   */
  enterFalse_1?: (ctx: False_1Context) => void;
  /**
   * Exit a parse tree produced by `ECLParser.false_1`.
   * @param ctx the parse tree
   */
  exitFalse_1?: (ctx: False_1Context) => void;

  /**
   * Enter a parse tree produced by `ECLParser.nonnegativeintegervalue`.
   * @param ctx the parse tree
   */
  enterNonnegativeintegervalue?: (ctx: NonnegativeintegervalueContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.nonnegativeintegervalue`.
   * @param ctx the parse tree
   */
  exitNonnegativeintegervalue?: (ctx: NonnegativeintegervalueContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.sctid`.
   * @param ctx the parse tree
   */
  enterSctid?: (ctx: SctidContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.sctid`.
   * @param ctx the parse tree
   */
  exitSctid?: (ctx: SctidContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.ws`.
   * @param ctx the parse tree
   */
  enterWs?: (ctx: WsContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.ws`.
   * @param ctx the parse tree
   */
  exitWs?: (ctx: WsContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.mws`.
   * @param ctx the parse tree
   */
  enterMws?: (ctx: MwsContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.mws`.
   * @param ctx the parse tree
   */
  exitMws?: (ctx: MwsContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.comment`.
   * @param ctx the parse tree
   */
  enterComment?: (ctx: CommentContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.comment`.
   * @param ctx the parse tree
   */
  exitComment?: (ctx: CommentContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.nonstarchar`.
   * @param ctx the parse tree
   */
  enterNonstarchar?: (ctx: NonstarcharContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.nonstarchar`.
   * @param ctx the parse tree
   */
  exitNonstarchar?: (ctx: NonstarcharContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.starwithnonfslash`.
   * @param ctx the parse tree
   */
  enterStarwithnonfslash?: (ctx: StarwithnonfslashContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.starwithnonfslash`.
   * @param ctx the parse tree
   */
  exitStarwithnonfslash?: (ctx: StarwithnonfslashContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.nonfslash`.
   * @param ctx the parse tree
   */
  enterNonfslash?: (ctx: NonfslashContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.nonfslash`.
   * @param ctx the parse tree
   */
  exitNonfslash?: (ctx: NonfslashContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.sp`.
   * @param ctx the parse tree
   */
  enterSp?: (ctx: SpContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.sp`.
   * @param ctx the parse tree
   */
  exitSp?: (ctx: SpContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.htab`.
   * @param ctx the parse tree
   */
  enterHtab?: (ctx: HtabContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.htab`.
   * @param ctx the parse tree
   */
  exitHtab?: (ctx: HtabContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.cr`.
   * @param ctx the parse tree
   */
  enterCr?: (ctx: CrContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.cr`.
   * @param ctx the parse tree
   */
  exitCr?: (ctx: CrContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.lf`.
   * @param ctx the parse tree
   */
  enterLf?: (ctx: LfContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.lf`.
   * @param ctx the parse tree
   */
  exitLf?: (ctx: LfContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.qm`.
   * @param ctx the parse tree
   */
  enterQm?: (ctx: QmContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.qm`.
   * @param ctx the parse tree
   */
  exitQm?: (ctx: QmContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.bs`.
   * @param ctx the parse tree
   */
  enterBs?: (ctx: BsContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.bs`.
   * @param ctx the parse tree
   */
  exitBs?: (ctx: BsContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.star`.
   * @param ctx the parse tree
   */
  enterStar?: (ctx: StarContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.star`.
   * @param ctx the parse tree
   */
  exitStar?: (ctx: StarContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.digit`.
   * @param ctx the parse tree
   */
  enterDigit?: (ctx: DigitContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.digit`.
   * @param ctx the parse tree
   */
  exitDigit?: (ctx: DigitContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.zero`.
   * @param ctx the parse tree
   */
  enterZero?: (ctx: ZeroContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.zero`.
   * @param ctx the parse tree
   */
  exitZero?: (ctx: ZeroContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.digitnonzero`.
   * @param ctx the parse tree
   */
  enterDigitnonzero?: (ctx: DigitnonzeroContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.digitnonzero`.
   * @param ctx the parse tree
   */
  exitDigitnonzero?: (ctx: DigitnonzeroContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.nonwsnonpipe`.
   * @param ctx the parse tree
   */
  enterNonwsnonpipe?: (ctx: NonwsnonpipeContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.nonwsnonpipe`.
   * @param ctx the parse tree
   */
  exitNonwsnonpipe?: (ctx: NonwsnonpipeContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.anynonescapedchar`.
   * @param ctx the parse tree
   */
  enterAnynonescapedchar?: (ctx: AnynonescapedcharContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.anynonescapedchar`.
   * @param ctx the parse tree
   */
  exitAnynonescapedchar?: (ctx: AnynonescapedcharContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.escapedchar`.
   * @param ctx the parse tree
   */
  enterEscapedchar?: (ctx: EscapedcharContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.escapedchar`.
   * @param ctx the parse tree
   */
  exitEscapedchar?: (ctx: EscapedcharContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.escapedwildchar`.
   * @param ctx the parse tree
   */
  enterEscapedwildchar?: (ctx: EscapedwildcharContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.escapedwildchar`.
   * @param ctx the parse tree
   */
  exitEscapedwildchar?: (ctx: EscapedwildcharContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.nonwsnonescapedchar`.
   * @param ctx the parse tree
   */
  enterNonwsnonescapedchar?: (ctx: NonwsnonescapedcharContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.nonwsnonescapedchar`.
   * @param ctx the parse tree
   */
  exitNonwsnonescapedchar?: (ctx: NonwsnonescapedcharContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.alpha`.
   * @param ctx the parse tree
   */
  enterAlpha?: (ctx: AlphaContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.alpha`.
   * @param ctx the parse tree
   */
  exitAlpha?: (ctx: AlphaContext) => void;

  /**
   * Enter a parse tree produced by `ECLParser.dash`.
   * @param ctx the parse tree
   */
  enterDash?: (ctx: DashContext) => void;
  /**
   * Exit a parse tree produced by `ECLParser.dash`.
   * @param ctx the parse tree
   */
  exitDash?: (ctx: DashContext) => void;
}


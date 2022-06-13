// noinspection ExceptionCaughtLocallyJS

/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

// Generated from .local/SctExpressionConstraintGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";

import * as Utils from "antlr4ts/misc/Utils";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import { SctExpressionConstraintGrammarListener } from "./SctExpressionConstraintGrammarListener";
import { SctExpressionConstraintGrammarVisitor } from "./SctExpressionConstraintGrammarVisitor";


export class SctExpressionConstraintGrammar extends Parser {
  public static readonly LET = 1;
  public static readonly IN = 2;
  public static readonly FROM = 3;
  public static readonly URI = 4;
  public static readonly EQ = 5;
  public static readonly LONG_LT = 6;
  public static readonly LONG_GT = 7;
  public static readonly OPEN_ROUND = 8;
  public static readonly CLOSE_ROUND = 9;
  public static readonly COLON = 10;
  public static readonly COMMA = 11;
  public static readonly DOT = 12;
  public static readonly TERM = 13;
  public static readonly WS = 14;
  public static readonly COMMENT = 15;
  public static readonly AND = 16;
  public static readonly OR = 17;
  public static readonly MINUS = 18;
  public static readonly CHILD_OF = 19;
  public static readonly PARENT_OF = 20;
  public static readonly CHILD_OR_SELF_OF = 21;
  public static readonly PARENT_OR_SELF_OF = 22;
  public static readonly DESCENDANT_OR_SELF_OF = 23;
  public static readonly ANCESTOR_OR_SELF_OF = 24;
  public static readonly STAR = 25;
  public static readonly TIMESTAMP = 26;
  public static readonly STRING_VALUE = 27;
  public static readonly MSGA = 28;
  public static readonly CARET = 29;
  public static readonly ZERO = 30;
  public static readonly ONE = 31;
  public static readonly SCTID = 32;
  public static readonly REVERSE_FLAG = 33;
  public static readonly LTE = 34;
  public static readonly GTE = 35;
  public static readonly NE = 36;
  public static readonly LT = 37;
  public static readonly GT = 38;
  public static readonly OPEN_PROP = 39;
  public static readonly CLOSE_PROP = 40;
  public static readonly OPEN_CURLY = 41;
  public static readonly CLOSE_CURLY = 42;
  public static readonly PLUS = 43;
  public static readonly OPEN_SLOT = 44;
  public static readonly NUMBER = 45;
  public static readonly REFSETS = 46;
  public static readonly OPEN_SQUARE = 47;
  public static readonly F_TERM = 48;
  public static readonly F_ACTIVE = 49;
  public static readonly F_DEFNSTATUSID = 50;
  public static readonly F_DEFNSTATUS = 51;
  public static readonly F_MODULE = 52;
  public static readonly F_EFFECTIVETIME = 53;
  public static readonly PRIMITIVE = 54;
  public static readonly DEFINED = 55;
  public static readonly HISTORY_MIN = 56;
  public static readonly HISTORY_MOD = 57;
  public static readonly HISTORY_MAX = 58;
  public static readonly HISTORY = 59;
  public static readonly FALSE = 60;
  public static readonly TRUE = 61;
  public static readonly F_REGEX = 62;
  public static readonly F_WILD = 63;
  public static readonly F_MATCH = 64;
  public static readonly F_D = 65;
  public static readonly F_C = 66;
  public static readonly F_M = 67;
  public static readonly ALPHA_ID = 68;
  public static readonly ID = 69;
  public static readonly CLOSE_SQUARE = 70;
  public static readonly CARD_SCTID = 71;
  public static readonly NON_NEGATIVE_INTEGER = 72;
  public static readonly DOTDOT = 73;
  public static readonly MANY = 74;
  public static readonly CARD_ID = 75;
  public static readonly CARD_WS = 76;
  public static readonly CLOSE_SLOT = 77;
  public static readonly SLOT_WS = 78;
  public static readonly F_LANGUAGE = 79;
  public static readonly ALPHA2 = 80;
  public static readonly F_TYPE_ID = 81;
  public static readonly F_TYPE = 82;
  public static readonly F_SYN = 83;
  public static readonly F_FSN = 84;
  public static readonly F_DEF = 85;
  public static readonly F_DIALECT = 86;
  public static readonly F_DIALECT_ALIAS = 87;
  public static readonly F_DIALECT_ID = 88;
  public static readonly F_ACCEPTABLE = 89;
  public static readonly F_PREFERRED = 90;
  public static readonly RULE_eQuery = 0;
  public static readonly RULE_eLet = 1;
  public static readonly RULE_eLets = 2;
  public static readonly RULE_expressionConstraint = 3;
  public static readonly RULE_dottedExpressionConstraint = 4;
  public static readonly RULE_refinedExpressionConstraint = 5;
  public static readonly RULE_unrefinedExpressionConstraint = 6;
  public static readonly RULE_simpleExpressionConstraint = 7;
  public static readonly RULE_compoundExpressionConstraint = 8;
  public static readonly RULE_disjunctionExpressionConstraint = 9;
  public static readonly RULE_exclusionExpressionConstraint = 10;
  public static readonly RULE_conceptReference = 11;
  public static readonly RULE_constraintOperator = 12;
  public static readonly RULE_conceptId = 13;
  public static readonly RULE_focusConcept = 14;
  public static readonly RULE_memberOf = 15;
  public static readonly RULE_function = 16;
  public static readonly RULE_from = 17;
  public static readonly RULE_scope = 18;
  public static readonly RULE_conjunctionExpressionConstraint = 19;
  public static readonly RULE_subExpressionConstraint = 20;
  public static readonly RULE_filterConstraint = 21;
  public static readonly RULE_historySupplement = 22;
  public static readonly RULE_historyProfile = 23;
  public static readonly RULE_historySubset = 24;
  public static readonly RULE_descriptionFilterConstraint = 25;
  public static readonly RULE_conceptFilterConstraint = 26;
  public static readonly RULE_memberFilterConstraint = 27;
  public static readonly RULE_descriptionFilter = 28;
  public static readonly RULE_conceptFilter = 29;
  public static readonly RULE_memberFilter = 30;
  public static readonly RULE_memberExpressionFilter = 31;
  public static readonly RULE_memberNumericFilter = 32;
  public static readonly RULE_memberStringFilter = 33;
  public static readonly RULE_memberBooleanFilter = 34;
  public static readonly RULE_memberTimeFilter = 35;
  public static readonly RULE_refsetFieldName = 36;
  public static readonly RULE_refsetFieldNameSet = 37;
  public static readonly RULE_filterTerm = 38;
  public static readonly RULE_filterLanguageDesc = 39;
  public static readonly RULE_languageCodeSet = 40;
  public static readonly RULE_languageCode = 41;
  public static readonly RULE_filterTypeDesc = 42;
  public static readonly RULE_typeIdFilter = 43;
  public static readonly RULE_typeTokenFilter = 44;
  public static readonly RULE_typeTokenSet = 45;
  public static readonly RULE_typeToken = 46;
  public static readonly RULE_filterDialectDesc = 47;
  public static readonly RULE_dialectAliasFilter = 48;
  public static readonly RULE_dialectAlias = 49;
  public static readonly RULE_dialectAliasSet = 50;
  public static readonly RULE_dialectIdFilter = 51;
  public static readonly RULE_dialectIdSet = 52;
  public static readonly RULE_acceptabilitySet = 53;
  public static readonly RULE_acceptabilityConceptReferenceSet = 54;
  public static readonly RULE_acceptabilityTokenSet = 55;
  public static readonly RULE_acceptabilityToken = 56;
  public static readonly RULE_filterModuleDesc = 57;
  public static readonly RULE_filterEffectiveTimeDesc = 58;
  public static readonly RULE_filterActiveDesc = 59;
  public static readonly RULE_filterActive = 60;
  public static readonly RULE_activeTrue = 61;
  public static readonly RULE_activeFalse = 62;
  public static readonly RULE_filterModule = 63;
  public static readonly RULE_filterDefnStatus = 64;
  public static readonly RULE_filterDefnStatusId = 65;
  public static readonly RULE_filterEffectiveTime = 66;
  public static readonly RULE_defnStatusToken = 67;
  public static readonly RULE_defnStatusTokenSet = 68;
  public static readonly RULE_timeValue = 69;
  public static readonly RULE_timeValueSet = 70;
  public static readonly RULE_searchValue = 71;
  public static readonly RULE_searchValueSet = 72;
  public static readonly RULE_string_value = 73;
  public static readonly RULE_conceptReferenceSet = 74;
  public static readonly RULE_refinement = 75;
  public static readonly RULE_conjunctionRefinement = 76;
  public static readonly RULE_disjunctionRefinement = 77;
  public static readonly RULE_subRefinement = 78;
  public static readonly RULE_attributeGroup = 79;
  public static readonly RULE_attributeSet = 80;
  public static readonly RULE_conjunctionAttribute = 81;
  public static readonly RULE_disjunctionAttribute = 82;
  public static readonly RULE_subAttributeSet = 83;
  public static readonly RULE_attribute = 84;
  public static readonly RULE_cardinality = 85;
  public static readonly RULE_attributeOperator = 86;
  public static readonly RULE_attributeName = 87;
  public static readonly RULE_expressionConstraintValue = 88;
  public static readonly RULE_booleanComparisonOperator = 89;
  public static readonly RULE_timeComparisonOperator = 90;
  public static readonly RULE_concreteComparisonOperator = 91;
  public static readonly RULE_expressionComparisonOperator = 92;
  public static readonly RULE_concreteValue = 93;
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    "eQuery", "eLet", "eLets", "expressionConstraint", "dottedExpressionConstraint",
    "refinedExpressionConstraint", "unrefinedExpressionConstraint", "simpleExpressionConstraint",
    "compoundExpressionConstraint", "disjunctionExpressionConstraint", "exclusionExpressionConstraint",
    "conceptReference", "constraintOperator", "conceptId", "focusConcept",
    "memberOf", "function", "from", "scope", "conjunctionExpressionConstraint",
    "subExpressionConstraint", "filterConstraint", "historySupplement", "historyProfile",
    "historySubset", "descriptionFilterConstraint", "conceptFilterConstraint",
    "memberFilterConstraint", "descriptionFilter", "conceptFilter", "memberFilter",
    "memberExpressionFilter", "memberNumericFilter", "memberStringFilter",
    "memberBooleanFilter", "memberTimeFilter", "refsetFieldName", "refsetFieldNameSet",
    "filterTerm", "filterLanguageDesc", "languageCodeSet", "languageCode",
    "filterTypeDesc", "typeIdFilter", "typeTokenFilter", "typeTokenSet", "typeToken",
    "filterDialectDesc", "dialectAliasFilter", "dialectAlias", "dialectAliasSet",
    "dialectIdFilter", "dialectIdSet", "acceptabilitySet", "acceptabilityConceptReferenceSet",
    "acceptabilityTokenSet", "acceptabilityToken", "filterModuleDesc", "filterEffectiveTimeDesc",
    "filterActiveDesc", "filterActive", "activeTrue", "activeFalse", "filterModule",
    "filterDefnStatus", "filterDefnStatusId", "filterEffectiveTime", "defnStatusToken",
    "defnStatusTokenSet", "timeValue", "timeValueSet", "searchValue", "searchValueSet",
    "string_value", "conceptReferenceSet", "refinement", "conjunctionRefinement",
    "disjunctionRefinement", "subRefinement", "attributeGroup", "attributeSet",
    "conjunctionAttribute", "disjunctionAttribute", "subAttributeSet", "attribute",
    "cardinality", "attributeOperator", "attributeName", "expressionConstraintValue",
    "booleanComparisonOperator", "timeComparisonOperator", "concreteComparisonOperator",
    "expressionComparisonOperator", "concreteValue"
  ];

  private static readonly _LITERAL_NAMES: Array<string | undefined> = [
    undefined, undefined, undefined, undefined, undefined, "'='", undefined,
    undefined, "'('", "')'", "':'", "','", "'.'", undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    "'0'", "'1'", undefined, undefined, "'<='", "'>='", undefined, "'<'",
    "'>'", "'{{'", "'}}'", "'{'", "'}'", "'+'", undefined, undefined, "'Refsets'",
    "'['", undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, "']'", undefined, undefined, "'..'", undefined,
    undefined, undefined, "']]'"
  ];
  private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
    undefined, "LET", "IN", "FROM", "URI", "EQ", "LONG_LT", "LONG_GT", "OPEN_ROUND",
    "CLOSE_ROUND", "COLON", "COMMA", "DOT", "TERM", "WS", "COMMENT", "AND",
    "OR", "MINUS", "CHILD_OF", "PARENT_OF", "CHILD_OR_SELF_OF", "PARENT_OR_SELF_OF",
    "DESCENDANT_OR_SELF_OF", "ANCESTOR_OR_SELF_OF", "STAR", "TIMESTAMP", "STRING_VALUE",
    "MSGA", "CARET", "ZERO", "ONE", "SCTID", "REVERSE_FLAG", "LTE", "GTE",
    "NE", "LT", "GT", "OPEN_PROP", "CLOSE_PROP", "OPEN_CURLY", "CLOSE_CURLY",
    "PLUS", "OPEN_SLOT", "NUMBER", "REFSETS", "OPEN_SQUARE", "F_TERM", "F_ACTIVE",
    "F_DEFNSTATUSID", "F_DEFNSTATUS", "F_MODULE", "F_EFFECTIVETIME", "PRIMITIVE",
    "DEFINED", "HISTORY_MIN", "HISTORY_MOD", "HISTORY_MAX", "HISTORY", "FALSE",
    "TRUE", "F_REGEX", "F_WILD", "F_MATCH", "F_D", "F_C", "F_M", "ALPHA_ID",
    "ID", "CLOSE_SQUARE", "CARD_SCTID", "NON_NEGATIVE_INTEGER", "DOTDOT",
    "MANY", "CARD_ID", "CARD_WS", "CLOSE_SLOT", "SLOT_WS", "F_LANGUAGE", "ALPHA2",
    "F_TYPE_ID", "F_TYPE", "F_SYN", "F_FSN", "F_DEF", "F_DIALECT", "F_DIALECT_ALIAS",
    "F_DIALECT_ID", "F_ACCEPTABLE", "F_PREFERRED"
  ];
  public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SctExpressionConstraintGrammar._LITERAL_NAMES, SctExpressionConstraintGrammar._SYMBOLIC_NAMES, []);

  // @Override
  // @NotNull
  public get vocabulary(): Vocabulary {
    return SctExpressionConstraintGrammar.VOCABULARY;
  }

  // tslint:enable:no-trailing-whitespace

  // @Override
  public get grammarFileName(): string {
    return "SctExpressionConstraintGrammar.g4";
  }

  // @Override
  public get ruleNames(): string[] {
    return SctExpressionConstraintGrammar.ruleNames;
  }

  // @Override
  public get serializedATN(): string {
    return SctExpressionConstraintGrammar._serializedATN;
  }

  protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
    return new FailedPredicateException(this, predicate, message);
  }


  // @ts-ignore
  public boolean;
  msgaMode = false;

  constructor(input: TokenStream) {
    super(input);
    this._interp = new ParserATNSimulator(SctExpressionConstraintGrammar._ATN, this);
  }

  // @RuleVersion(0)
  public eQuery(): EQueryContext {
    let _localctx: EQueryContext = new EQueryContext(this._ctx, this.state);
    this.enterRule(_localctx, 0, SctExpressionConstraintGrammar.RULE_eQuery);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 192;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 0, this._ctx)) {
          case 1: {
            this.state = 188;
            this.match(SctExpressionConstraintGrammar.LET);
            this.state = 189;
            this.eLets();
            this.state = 190;
            this.match(SctExpressionConstraintGrammar.IN);
          }
            break;
        }
        this.state = 194;
        this.expressionConstraint();
        this.state = 195;
        this.match(SctExpressionConstraintGrammar.EOF);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public eLet(): ELetContext {
    let _localctx: ELetContext = new ELetContext(this._ctx, this.state);
    this.enterRule(_localctx, 2, SctExpressionConstraintGrammar.RULE_eLet);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 197;
        _localctx._id = this._input.LT(1);
        _la = this._input.LA(1);
        if (!(_la === SctExpressionConstraintGrammar.ALPHA_ID || _la === SctExpressionConstraintGrammar.ID)) {
          _localctx._id = this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
        this.state = 198;
        this.match(SctExpressionConstraintGrammar.EQ);
        this.state = 201;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
          case 1: {
            this.state = 199;
            _localctx._url = this.match(SctExpressionConstraintGrammar.URI);
          }
            break;

          case 2: {
            this.state = 200;
            _localctx._expr = this.expressionConstraint();
          }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public eLets(): ELetsContext {
    let _localctx: ELetsContext = new ELetsContext(this._ctx, this.state);
    this.enterRule(_localctx, 4, SctExpressionConstraintGrammar.RULE_eLets);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 203;
        this.eLet();
        this.state = 208;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === SctExpressionConstraintGrammar.COMMA) {
          {
            {
              this.state = 204;
              this.match(SctExpressionConstraintGrammar.COMMA);
              this.state = 205;
              this.eLet();
            }
          }
          this.state = 210;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public expressionConstraint(): ExpressionConstraintContext {
    let _localctx: ExpressionConstraintContext = new ExpressionConstraintContext(this._ctx, this.state);
    this.enterRule(_localctx, 6, SctExpressionConstraintGrammar.RULE_expressionConstraint);
    try {
      this.state = 215;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 211;
          this.refinedExpressionConstraint();
        }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 212;
          this.unrefinedExpressionConstraint();
        }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
        {
          this.state = 213;
          this.dottedExpressionConstraint();
        }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
        {
          this.state = 214;
          this.match(SctExpressionConstraintGrammar.ID);
        }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public dottedExpressionConstraint(): DottedExpressionConstraintContext {
    let _localctx: DottedExpressionConstraintContext = new DottedExpressionConstraintContext(this._ctx, this.state);
    this.enterRule(_localctx, 8, SctExpressionConstraintGrammar.RULE_dottedExpressionConstraint);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 217;
        this.subExpressionConstraint();
        this.state = 223;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 218;
              this.match(SctExpressionConstraintGrammar.DOT);
              this.state = 220;
              this._errHandler.sync(this);
              switch (this.interpreter.adaptivePredict(this._input, 4, this._ctx)) {
                case 1: {
                  this.state = 219;
                  this.attributeOperator();
                }
                  break;
              }
              this.state = 222;
              this.attributeName();
            }
          }
          this.state = 225;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === SctExpressionConstraintGrammar.DOT);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public refinedExpressionConstraint(): RefinedExpressionConstraintContext {
    let _localctx: RefinedExpressionConstraintContext = new RefinedExpressionConstraintContext(this._ctx, this.state);
    this.enterRule(_localctx, 10, SctExpressionConstraintGrammar.RULE_refinedExpressionConstraint);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 227;
        this.unrefinedExpressionConstraint();
        this.state = 228;
        this.match(SctExpressionConstraintGrammar.COLON);
        this.state = 229;
        this.refinement();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public unrefinedExpressionConstraint(): UnrefinedExpressionConstraintContext {
    let _localctx: UnrefinedExpressionConstraintContext = new UnrefinedExpressionConstraintContext(this._ctx, this.state);
    this.enterRule(_localctx, 12, SctExpressionConstraintGrammar.RULE_unrefinedExpressionConstraint);
    try {
      this.state = 233;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 231;
          this.compoundExpressionConstraint();
        }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 232;
          this.subExpressionConstraint();
        }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public simpleExpressionConstraint(): SimpleExpressionConstraintContext {
    let _localctx: SimpleExpressionConstraintContext = new SimpleExpressionConstraintContext(this._ctx, this.state);
    this.enterRule(_localctx, 14, SctExpressionConstraintGrammar.RULE_simpleExpressionConstraint);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 236;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
          case 1: {
            this.state = 235;
            this.constraintOperator();
          }
            break;
        }
        this.state = 243;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 8, this._ctx)) {
          case 1: {
            this.state = 238;
            this.focusConcept();
          }
            break;

          case 2: {
            this.state = 239;
            this.match(SctExpressionConstraintGrammar.OPEN_ROUND);
            this.state = 240;
            this.expressionConstraint();
            this.state = 241;
            this.match(SctExpressionConstraintGrammar.CLOSE_ROUND);
          }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public compoundExpressionConstraint(): CompoundExpressionConstraintContext {
    let _localctx: CompoundExpressionConstraintContext = new CompoundExpressionConstraintContext(this._ctx, this.state);
    this.enterRule(_localctx, 16, SctExpressionConstraintGrammar.RULE_compoundExpressionConstraint);
    try {
      this.state = 248;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 9, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 245;
          this.conjunctionExpressionConstraint();
        }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 246;
          this.disjunctionExpressionConstraint();
        }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
        {
          this.state = 247;
          this.exclusionExpressionConstraint();
        }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public disjunctionExpressionConstraint(): DisjunctionExpressionConstraintContext {
    let _localctx: DisjunctionExpressionConstraintContext = new DisjunctionExpressionConstraintContext(this._ctx, this.state);
    this.enterRule(_localctx, 18, SctExpressionConstraintGrammar.RULE_disjunctionExpressionConstraint);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 250;
        this.subExpressionConstraint();
        this.state = 253;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 251;
              this.match(SctExpressionConstraintGrammar.OR);
              this.state = 252;
              this.subExpressionConstraint();
            }
          }
          this.state = 255;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === SctExpressionConstraintGrammar.OR);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public exclusionExpressionConstraint(): ExclusionExpressionConstraintContext {
    let _localctx: ExclusionExpressionConstraintContext = new ExclusionExpressionConstraintContext(this._ctx, this.state);
    this.enterRule(_localctx, 20, SctExpressionConstraintGrammar.RULE_exclusionExpressionConstraint);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 257;
        this.subExpressionConstraint();
        this.state = 258;
        this.match(SctExpressionConstraintGrammar.MINUS);
        this.state = 259;
        this.subExpressionConstraint();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public conceptReference(): ConceptReferenceContext {
    let _localctx: ConceptReferenceContext = new ConceptReferenceContext(this._ctx, this.state);
    this.enterRule(_localctx, 22, SctExpressionConstraintGrammar.RULE_conceptReference);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 261;
        this.conceptId();
        this.state = 263;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === SctExpressionConstraintGrammar.TERM) {
          {
            this.state = 262;
            this.match(SctExpressionConstraintGrammar.TERM);
          }
        }

      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public constraintOperator(): ConstraintOperatorContext {
    let _localctx: ConstraintOperatorContext = new ConstraintOperatorContext(this._ctx, this.state);
    this.enterRule(_localctx, 24, SctExpressionConstraintGrammar.RULE_constraintOperator);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 265;
        _la = this._input.LA(1);
        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SctExpressionConstraintGrammar.LONG_LT) | (1 << SctExpressionConstraintGrammar.LONG_GT) | (1 << SctExpressionConstraintGrammar.CHILD_OF) | (1 << SctExpressionConstraintGrammar.PARENT_OF) | (1 << SctExpressionConstraintGrammar.CHILD_OR_SELF_OF) | (1 << SctExpressionConstraintGrammar.PARENT_OR_SELF_OF) | (1 << SctExpressionConstraintGrammar.DESCENDANT_OR_SELF_OF) | (1 << SctExpressionConstraintGrammar.ANCESTOR_OR_SELF_OF))) !== 0) || _la === SctExpressionConstraintGrammar.LT || _la === SctExpressionConstraintGrammar.GT)) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public conceptId(): ConceptIdContext {
    let _localctx: ConceptIdContext = new ConceptIdContext(this._ctx, this.state);
    this.enterRule(_localctx, 26, SctExpressionConstraintGrammar.RULE_conceptId);
    try {
      this.state = 269;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case SctExpressionConstraintGrammar.SCTID:
          _localctx = new SnomedIdContext(_localctx);
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 267;
          this.match(SctExpressionConstraintGrammar.SCTID);
        }
          break;
        case SctExpressionConstraintGrammar.URI:
          _localctx = new OtherIdContext(_localctx);
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 268;
          this.match(SctExpressionConstraintGrammar.URI);
        }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public focusConcept(): FocusConceptContext {
    let _localctx: FocusConceptContext = new FocusConceptContext(this._ctx, this.state);
    this.enterRule(_localctx, 28, SctExpressionConstraintGrammar.RULE_focusConcept);
    try {
      this.state = 287;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 16, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 271;
          this.memberOf();
          this.state = 276;
          this._errHandler.sync(this);
          switch (this.interpreter.adaptivePredict(this._input, 13, this._ctx)) {
            case 1: {
              this.state = 272;
              this.conceptReference();
            }
              break;

            case 2: {
              this.state = 273;
              this.match(SctExpressionConstraintGrammar.STAR);
            }
              break;

            case 3: {
              this.state = 274;
              this.match(SctExpressionConstraintGrammar.REFSETS);
            }
              break;

            case 4: {
              this.state = 275;
              this.function();
            }
              break;
          }
          this.state = 279;
          this._errHandler.sync(this);
          switch (this.interpreter.adaptivePredict(this._input, 14, this._ctx)) {
            case 1: {
              this.state = 278;
              this.memberFilterConstraint();
            }
              break;
          }
        }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 285;
          this._errHandler.sync(this);
          switch (this.interpreter.adaptivePredict(this._input, 15, this._ctx)) {
            case 1: {
              this.state = 281;
              this.conceptReference();
            }
              break;

            case 2: {
              this.state = 282;
              this.match(SctExpressionConstraintGrammar.STAR);
            }
              break;

            case 3: {
              this.state = 283;
              this.match(SctExpressionConstraintGrammar.REFSETS);
            }
              break;

            case 4: {
              this.state = 284;
              this.function();
            }
              break;
          }
        }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public memberOf(): MemberOfContext {
    let _localctx: MemberOfContext = new MemberOfContext(this._ctx, this.state);
    this.enterRule(_localctx, 30, SctExpressionConstraintGrammar.RULE_memberOf);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 289;
        this.match(SctExpressionConstraintGrammar.CARET);
        this.state = 296;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 18, this._ctx)) {
          case 1: {
            this.state = 290;
            this.match(SctExpressionConstraintGrammar.OPEN_SQUARE);
            this.state = 293;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case SctExpressionConstraintGrammar.SCTID:
              case SctExpressionConstraintGrammar.ALPHA_ID:
              case SctExpressionConstraintGrammar.CARD_SCTID:
              case SctExpressionConstraintGrammar.CARD_ID: {
                this.state = 291;
                this.refsetFieldNameSet();
              }
                break;
              case SctExpressionConstraintGrammar.MANY: {
                this.state = 292;
                this.match(SctExpressionConstraintGrammar.MANY);
              }
                break;
              default:
                throw new NoViableAltException(this);
            }
            this.state = 295;
            this.match(SctExpressionConstraintGrammar.CLOSE_SQUARE);
          }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public function(): FunctionContext {
    let _localctx: FunctionContext = new FunctionContext(this._ctx, this.state);
    this.enterRule(_localctx, 32, SctExpressionConstraintGrammar.RULE_function);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 298;
        // @ts-ignore
        if (!(msgaMode)) {
          throw this.createFailedPredicateException("msgaMode");
        }
        this.state = 299;
        this.match(SctExpressionConstraintGrammar.MSGA);
        this.state = 300;
        this.from();
        this.state = 302;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 19, this._ctx)) {
          case 1: {
            this.state = 301;
            this.scope();
          }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public from(): FromContext {
    let _localctx: FromContext = new FromContext(this._ctx, this.state);
    this.enterRule(_localctx, 34, SctExpressionConstraintGrammar.RULE_from);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 304;
        this.match(SctExpressionConstraintGrammar.OPEN_ROUND);
        this.state = 305;
        this.expressionConstraint();
        this.state = 306;
        this.match(SctExpressionConstraintGrammar.CLOSE_ROUND);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public scope(): ScopeContext {
    let _localctx: ScopeContext = new ScopeContext(this._ctx, this.state);
    this.enterRule(_localctx, 36, SctExpressionConstraintGrammar.RULE_scope);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 308;
        this.match(SctExpressionConstraintGrammar.OPEN_ROUND);
        this.state = 309;
        this.expressionConstraint();
        this.state = 310;
        this.match(SctExpressionConstraintGrammar.CLOSE_ROUND);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public conjunctionExpressionConstraint(): ConjunctionExpressionConstraintContext {
    let _localctx: ConjunctionExpressionConstraintContext = new ConjunctionExpressionConstraintContext(this._ctx, this.state);
    this.enterRule(_localctx, 38, SctExpressionConstraintGrammar.RULE_conjunctionExpressionConstraint);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 312;
        this.subExpressionConstraint();
        this.state = 315;
        this._errHandler.sync(this);
        _alt = 1;
        do {
          switch (_alt) {
            case 1: {
              {
                this.state = 313;
                _la = this._input.LA(1);
                if (!(_la === SctExpressionConstraintGrammar.COMMA || _la === SctExpressionConstraintGrammar.AND)) {
                  this._errHandler.recoverInline(this);
                } else {
                  if (this._input.LA(1) === Token.EOF) {
                    this.matchedEOF = true;
                  }

                  this._errHandler.reportMatch(this);
                  this.consume();
                }
                this.state = 314;
                this.subExpressionConstraint();
              }
            }
              break;
            default:
              throw new NoViableAltException(this);
          }
          this.state = 317;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
        } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public subExpressionConstraint(): SubExpressionConstraintContext {
    let _localctx: SubExpressionConstraintContext = new SubExpressionConstraintContext(this._ctx, this.state);
    this.enterRule(_localctx, 40, SctExpressionConstraintGrammar.RULE_subExpressionConstraint);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 319;
        this.simpleExpressionConstraint();
        this.state = 323;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 320;
                this.filterConstraint();
              }
            }
          }
          this.state = 325;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
        }
        this.state = 327;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === SctExpressionConstraintGrammar.OPEN_PROP) {
          {
            this.state = 326;
            this.historySupplement();
          }
        }

      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public filterConstraint(): FilterConstraintContext {
    let _localctx: FilterConstraintContext = new FilterConstraintContext(this._ctx, this.state);
    this.enterRule(_localctx, 42, SctExpressionConstraintGrammar.RULE_filterConstraint);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 329;
        this.match(SctExpressionConstraintGrammar.OPEN_PROP);
        this.state = 332;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case SctExpressionConstraintGrammar.F_TERM:
          case SctExpressionConstraintGrammar.F_ACTIVE:
          case SctExpressionConstraintGrammar.F_MODULE:
          case SctExpressionConstraintGrammar.F_EFFECTIVETIME:
          case SctExpressionConstraintGrammar.F_D:
          case SctExpressionConstraintGrammar.F_LANGUAGE:
          case SctExpressionConstraintGrammar.F_TYPE_ID:
          case SctExpressionConstraintGrammar.F_TYPE:
          case SctExpressionConstraintGrammar.F_DIALECT:
          case SctExpressionConstraintGrammar.F_DIALECT_ID: {
            this.state = 330;
            this.descriptionFilterConstraint();
          }
            break;
          case SctExpressionConstraintGrammar.F_C: {
            this.state = 331;
            this.conceptFilterConstraint();
          }
            break;
          default:
            throw new NoViableAltException(this);
        }
        this.state = 334;
        this.match(SctExpressionConstraintGrammar.CLOSE_PROP);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public historySupplement(): HistorySupplementContext {
    let _localctx: HistorySupplementContext = new HistorySupplementContext(this._ctx, this.state);
    this.enterRule(_localctx, 44, SctExpressionConstraintGrammar.RULE_historySupplement);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 336;
        this.match(SctExpressionConstraintGrammar.OPEN_PROP);
        this.state = 337;
        this.match(SctExpressionConstraintGrammar.PLUS);
        this.state = 341;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case SctExpressionConstraintGrammar.HISTORY_MIN:
          case SctExpressionConstraintGrammar.HISTORY_MOD:
          case SctExpressionConstraintGrammar.HISTORY_MAX: {
            this.state = 338;
            this.historyProfile();
          }
            break;
          case SctExpressionConstraintGrammar.HISTORY: {
            this.state = 339;
            this.match(SctExpressionConstraintGrammar.HISTORY);
            this.state = 340;
            this.historySubset();
          }
            break;
          default:
            throw new NoViableAltException(this);
        }
        this.state = 343;
        this.match(SctExpressionConstraintGrammar.CLOSE_PROP);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public historyProfile(): HistoryProfileContext {
    let _localctx: HistoryProfileContext = new HistoryProfileContext(this._ctx, this.state);
    this.enterRule(_localctx, 46, SctExpressionConstraintGrammar.RULE_historyProfile);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 345;
        _la = this._input.LA(1);
        if (!(((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (SctExpressionConstraintGrammar.HISTORY_MIN - 56)) | (1 << (SctExpressionConstraintGrammar.HISTORY_MOD - 56)) | (1 << (SctExpressionConstraintGrammar.HISTORY_MAX - 56)))) !== 0))) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public historySubset(): HistorySubsetContext {
    let _localctx: HistorySubsetContext = new HistorySubsetContext(this._ctx, this.state);
    this.enterRule(_localctx, 48, SctExpressionConstraintGrammar.RULE_historySubset);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 347;
        this.match(SctExpressionConstraintGrammar.OPEN_ROUND);
        this.state = 348;
        this.expressionConstraint();
        this.state = 349;
        this.match(SctExpressionConstraintGrammar.CLOSE_ROUND);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public descriptionFilterConstraint(): DescriptionFilterConstraintContext {
    let _localctx: DescriptionFilterConstraintContext = new DescriptionFilterConstraintContext(this._ctx, this.state);
    this.enterRule(_localctx, 50, SctExpressionConstraintGrammar.RULE_descriptionFilterConstraint);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 352;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === SctExpressionConstraintGrammar.F_D) {
          {
            this.state = 351;
            this.match(SctExpressionConstraintGrammar.F_D);
          }
        }

        this.state = 354;
        this.descriptionFilter();
        this.state = 359;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === SctExpressionConstraintGrammar.COMMA) {
          {
            {
              this.state = 355;
              this.match(SctExpressionConstraintGrammar.COMMA);
              this.state = 356;
              this.descriptionFilter();
            }
          }
          this.state = 361;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public conceptFilterConstraint(): ConceptFilterConstraintContext {
    let _localctx: ConceptFilterConstraintContext = new ConceptFilterConstraintContext(this._ctx, this.state);
    this.enterRule(_localctx, 52, SctExpressionConstraintGrammar.RULE_conceptFilterConstraint);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 362;
        this.match(SctExpressionConstraintGrammar.F_C);
        this.state = 363;
        this.conceptFilter();
        this.state = 368;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === SctExpressionConstraintGrammar.COMMA) {
          {
            {
              this.state = 364;
              this.match(SctExpressionConstraintGrammar.COMMA);
              this.state = 365;
              this.conceptFilter();
            }
          }
          this.state = 370;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public memberFilterConstraint(): MemberFilterConstraintContext {
    let _localctx: MemberFilterConstraintContext = new MemberFilterConstraintContext(this._ctx, this.state);
    this.enterRule(_localctx, 54, SctExpressionConstraintGrammar.RULE_memberFilterConstraint);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 371;
        this.match(SctExpressionConstraintGrammar.OPEN_PROP);
        this.state = 372;
        this.match(SctExpressionConstraintGrammar.F_M);
        this.state = 373;
        this.memberFilter();
        this.state = 378;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === SctExpressionConstraintGrammar.COMMA) {
          {
            {
              this.state = 374;
              this.match(SctExpressionConstraintGrammar.COMMA);
              this.state = 375;
              this.memberFilter();
            }
          }
          this.state = 380;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 381;
        this.match(SctExpressionConstraintGrammar.CLOSE_PROP);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public descriptionFilter(): DescriptionFilterContext {
    let _localctx: DescriptionFilterContext = new DescriptionFilterContext(this._ctx, this.state);
    this.enterRule(_localctx, 56, SctExpressionConstraintGrammar.RULE_descriptionFilter);
    try {
      this.state = 390;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case SctExpressionConstraintGrammar.F_TERM:
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 383;
          this.filterTerm();
        }
          break;
        case SctExpressionConstraintGrammar.F_LANGUAGE:
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 384;
          this.filterLanguageDesc();
        }
          break;
        case SctExpressionConstraintGrammar.F_TYPE_ID:
        case SctExpressionConstraintGrammar.F_TYPE:
          this.enterOuterAlt(_localctx, 3);
        {
          this.state = 385;
          this.filterTypeDesc();
        }
          break;
        case SctExpressionConstraintGrammar.F_DIALECT:
        case SctExpressionConstraintGrammar.F_DIALECT_ID:
          this.enterOuterAlt(_localctx, 4);
        {
          this.state = 386;
          this.filterDialectDesc();
        }
          break;
        case SctExpressionConstraintGrammar.F_MODULE:
          this.enterOuterAlt(_localctx, 5);
        {
          this.state = 387;
          this.filterModuleDesc();
        }
          break;
        case SctExpressionConstraintGrammar.F_EFFECTIVETIME:
          this.enterOuterAlt(_localctx, 6);
        {
          this.state = 388;
          this.filterEffectiveTimeDesc();
        }
          break;
        case SctExpressionConstraintGrammar.F_ACTIVE:
          this.enterOuterAlt(_localctx, 7);
        {
          this.state = 389;
          this.filterActiveDesc();
        }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public conceptFilter(): ConceptFilterContext {
    let _localctx: ConceptFilterContext = new ConceptFilterContext(this._ctx, this.state);
    this.enterRule(_localctx, 58, SctExpressionConstraintGrammar.RULE_conceptFilter);
    try {
      this.state = 397;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case SctExpressionConstraintGrammar.F_ACTIVE:
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 392;
          this.filterActive();
        }
          break;
        case SctExpressionConstraintGrammar.F_MODULE:
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 393;
          this.filterModule();
        }
          break;
        case SctExpressionConstraintGrammar.F_DEFNSTATUS:
          this.enterOuterAlt(_localctx, 3);
        {
          this.state = 394;
          this.filterDefnStatus();
        }
          break;
        case SctExpressionConstraintGrammar.F_DEFNSTATUSID:
          this.enterOuterAlt(_localctx, 4);
        {
          this.state = 395;
          this.filterDefnStatusId();
        }
          break;
        case SctExpressionConstraintGrammar.F_EFFECTIVETIME:
          this.enterOuterAlt(_localctx, 5);
        {
          this.state = 396;
          this.filterEffectiveTime();
        }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public memberFilter(): MemberFilterContext {
    let _localctx: MemberFilterContext = new MemberFilterContext(this._ctx, this.state);
    this.enterRule(_localctx, 60, SctExpressionConstraintGrammar.RULE_memberFilter);
    try {
      this.state = 404;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 31, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 399;
          this.memberExpressionFilter();
        }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 400;
          this.memberNumericFilter();
        }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
        {
          this.state = 401;
          this.memberStringFilter();
        }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
        {
          this.state = 402;
          this.memberBooleanFilter();
        }
          break;

        case 5:
          this.enterOuterAlt(_localctx, 5);
        {
          this.state = 403;
          this.memberTimeFilter();
        }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public memberExpressionFilter(): MemberExpressionFilterContext {
    let _localctx: MemberExpressionFilterContext = new MemberExpressionFilterContext(this._ctx, this.state);
    this.enterRule(_localctx, 62, SctExpressionConstraintGrammar.RULE_memberExpressionFilter);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 406;
        this.refsetFieldName();
        this.state = 407;
        this.expressionComparisonOperator();
        this.state = 408;
        this.subExpressionConstraint();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public memberNumericFilter(): MemberNumericFilterContext {
    let _localctx: MemberNumericFilterContext = new MemberNumericFilterContext(this._ctx, this.state);
    this.enterRule(_localctx, 64, SctExpressionConstraintGrammar.RULE_memberNumericFilter);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 410;
        this.refsetFieldName();
        this.state = 411;
        this.concreteComparisonOperator();
        this.state = 412;
        this.match(SctExpressionConstraintGrammar.NUMBER);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public memberStringFilter(): MemberStringFilterContext {
    let _localctx: MemberStringFilterContext = new MemberStringFilterContext(this._ctx, this.state);
    this.enterRule(_localctx, 66, SctExpressionConstraintGrammar.RULE_memberStringFilter);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 414;
        this.refsetFieldName();
        this.state = 415;
        this.booleanComparisonOperator();
        this.state = 418;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case SctExpressionConstraintGrammar.TIMESTAMP:
          case SctExpressionConstraintGrammar.STRING_VALUE:
          case SctExpressionConstraintGrammar.F_REGEX:
          case SctExpressionConstraintGrammar.F_WILD:
          case SctExpressionConstraintGrammar.F_MATCH: {
            this.state = 416;
            this.searchValue();
          }
            break;
          case SctExpressionConstraintGrammar.OPEN_ROUND: {
            this.state = 417;
            this.searchValueSet();
          }
            break;
          default:
            throw new NoViableAltException(this);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public memberBooleanFilter(): MemberBooleanFilterContext {
    let _localctx: MemberBooleanFilterContext = new MemberBooleanFilterContext(this._ctx, this.state);
    this.enterRule(_localctx, 68, SctExpressionConstraintGrammar.RULE_memberBooleanFilter);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 420;
        this.refsetFieldName();
        this.state = 421;
        this.booleanComparisonOperator();
        this.state = 422;
        _la = this._input.LA(1);
        if (!(_la === SctExpressionConstraintGrammar.FALSE || _la === SctExpressionConstraintGrammar.TRUE)) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public memberTimeFilter(): MemberTimeFilterContext {
    let _localctx: MemberTimeFilterContext = new MemberTimeFilterContext(this._ctx, this.state);
    this.enterRule(_localctx, 70, SctExpressionConstraintGrammar.RULE_memberTimeFilter);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 424;
        this.refsetFieldName();
        this.state = 425;
        this.timeComparisonOperator();
        this.state = 428;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case SctExpressionConstraintGrammar.TIMESTAMP: {
            this.state = 426;
            this.timeValue();
          }
            break;
          case SctExpressionConstraintGrammar.OPEN_ROUND:
          case SctExpressionConstraintGrammar.COMMA:
          case SctExpressionConstraintGrammar.CLOSE_PROP: {
            this.state = 427;
            this.timeValueSet();
          }
            break;
          default:
            throw new NoViableAltException(this);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public refsetFieldName(): RefsetFieldNameContext {
    let _localctx: RefsetFieldNameContext = new RefsetFieldNameContext(this._ctx, this.state);
    this.enterRule(_localctx, 72, SctExpressionConstraintGrammar.RULE_refsetFieldName);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 430;
        _la = this._input.LA(1);
        if (!(_la === SctExpressionConstraintGrammar.SCTID || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (SctExpressionConstraintGrammar.ALPHA_ID - 68)) | (1 << (SctExpressionConstraintGrammar.CARD_SCTID - 68)) | (1 << (SctExpressionConstraintGrammar.CARD_ID - 68)))) !== 0))) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public refsetFieldNameSet(): RefsetFieldNameSetContext {
    let _localctx: RefsetFieldNameSetContext = new RefsetFieldNameSetContext(this._ctx, this.state);
    this.enterRule(_localctx, 74, SctExpressionConstraintGrammar.RULE_refsetFieldNameSet);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 432;
        this.refsetFieldName();
        this.state = 437;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === SctExpressionConstraintGrammar.COMMA) {
          {
            {
              this.state = 433;
              this.match(SctExpressionConstraintGrammar.COMMA);
              this.state = 434;
              this.refsetFieldName();
            }
          }
          this.state = 439;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public filterTerm(): FilterTermContext {
    let _localctx: FilterTermContext = new FilterTermContext(this._ctx, this.state);
    this.enterRule(_localctx, 76, SctExpressionConstraintGrammar.RULE_filterTerm);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 440;
        this.match(SctExpressionConstraintGrammar.F_TERM);
        this.state = 441;
        this.booleanComparisonOperator();
        this.state = 444;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case SctExpressionConstraintGrammar.TIMESTAMP:
          case SctExpressionConstraintGrammar.STRING_VALUE:
          case SctExpressionConstraintGrammar.F_REGEX:
          case SctExpressionConstraintGrammar.F_WILD:
          case SctExpressionConstraintGrammar.F_MATCH: {
            this.state = 442;
            this.searchValue();
          }
            break;
          case SctExpressionConstraintGrammar.OPEN_ROUND: {
            this.state = 443;
            this.searchValueSet();
          }
            break;
          default:
            throw new NoViableAltException(this);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public filterLanguageDesc(): FilterLanguageDescContext {
    let _localctx: FilterLanguageDescContext = new FilterLanguageDescContext(this._ctx, this.state);
    this.enterRule(_localctx, 78, SctExpressionConstraintGrammar.RULE_filterLanguageDesc);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 446;
        this.match(SctExpressionConstraintGrammar.F_LANGUAGE);
        this.state = 447;
        this.booleanComparisonOperator();
        this.state = 450;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case SctExpressionConstraintGrammar.ALPHA2: {
            this.state = 448;
            this.languageCode();
          }
            break;
          case SctExpressionConstraintGrammar.OPEN_ROUND: {
            this.state = 449;
            this.languageCodeSet();
          }
            break;
          default:
            throw new NoViableAltException(this);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public languageCodeSet(): LanguageCodeSetContext {
    let _localctx: LanguageCodeSetContext = new LanguageCodeSetContext(this._ctx, this.state);
    this.enterRule(_localctx, 80, SctExpressionConstraintGrammar.RULE_languageCodeSet);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 452;
        this.match(SctExpressionConstraintGrammar.OPEN_ROUND);
        this.state = 454;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 453;
              this.languageCode();
            }
          }
          this.state = 456;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === SctExpressionConstraintGrammar.ALPHA2);
        this.state = 458;
        this.match(SctExpressionConstraintGrammar.CLOSE_ROUND);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public languageCode(): LanguageCodeContext {
    let _localctx: LanguageCodeContext = new LanguageCodeContext(this._ctx, this.state);
    this.enterRule(_localctx, 82, SctExpressionConstraintGrammar.RULE_languageCode);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 460;
        this.match(SctExpressionConstraintGrammar.ALPHA2);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public filterTypeDesc(): FilterTypeDescContext {
    let _localctx: FilterTypeDescContext = new FilterTypeDescContext(this._ctx, this.state);
    this.enterRule(_localctx, 84, SctExpressionConstraintGrammar.RULE_filterTypeDesc);
    try {
      this.state = 464;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case SctExpressionConstraintGrammar.F_TYPE_ID:
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 462;
          this.typeIdFilter();
        }
          break;
        case SctExpressionConstraintGrammar.F_TYPE:
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 463;
          this.typeTokenFilter();
        }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public typeIdFilter(): TypeIdFilterContext {
    let _localctx: TypeIdFilterContext = new TypeIdFilterContext(this._ctx, this.state);
    this.enterRule(_localctx, 86, SctExpressionConstraintGrammar.RULE_typeIdFilter);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 466;
        this.match(SctExpressionConstraintGrammar.F_TYPE_ID);
        this.state = 467;
        this.booleanComparisonOperator();
        this.state = 470;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 39, this._ctx)) {
          case 1: {
            this.state = 468;
            this.subExpressionConstraint();
          }
            break;

          case 2: {
            this.state = 469;
            this.conceptReferenceSet();
          }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public typeTokenFilter(): TypeTokenFilterContext {
    let _localctx: TypeTokenFilterContext = new TypeTokenFilterContext(this._ctx, this.state);
    this.enterRule(_localctx, 88, SctExpressionConstraintGrammar.RULE_typeTokenFilter);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 472;
        this.match(SctExpressionConstraintGrammar.F_TYPE);
        this.state = 473;
        this.booleanComparisonOperator();
        this.state = 476;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case SctExpressionConstraintGrammar.F_SYN:
          case SctExpressionConstraintGrammar.F_FSN:
          case SctExpressionConstraintGrammar.F_DEF: {
            this.state = 474;
            this.typeToken();
          }
            break;
          case SctExpressionConstraintGrammar.OPEN_ROUND: {
            this.state = 475;
            this.typeTokenSet();
          }
            break;
          default:
            throw new NoViableAltException(this);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public typeTokenSet(): TypeTokenSetContext {
    let _localctx: TypeTokenSetContext = new TypeTokenSetContext(this._ctx, this.state);
    this.enterRule(_localctx, 90, SctExpressionConstraintGrammar.RULE_typeTokenSet);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 478;
        this.match(SctExpressionConstraintGrammar.OPEN_ROUND);
        this.state = 480;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 479;
              this.typeToken();
            }
          }
          this.state = 482;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & ((1 << (SctExpressionConstraintGrammar.F_SYN - 83)) | (1 << (SctExpressionConstraintGrammar.F_FSN - 83)) | (1 << (SctExpressionConstraintGrammar.F_DEF - 83)))) !== 0));
        this.state = 484;
        this.match(SctExpressionConstraintGrammar.CLOSE_ROUND);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public typeToken(): TypeTokenContext {
    let _localctx: TypeTokenContext = new TypeTokenContext(this._ctx, this.state);
    this.enterRule(_localctx, 92, SctExpressionConstraintGrammar.RULE_typeToken);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 486;
        _la = this._input.LA(1);
        if (!(((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & ((1 << (SctExpressionConstraintGrammar.F_SYN - 83)) | (1 << (SctExpressionConstraintGrammar.F_FSN - 83)) | (1 << (SctExpressionConstraintGrammar.F_DEF - 83)))) !== 0))) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public filterDialectDesc(): FilterDialectDescContext {
    let _localctx: FilterDialectDescContext = new FilterDialectDescContext(this._ctx, this.state);
    this.enterRule(_localctx, 94, SctExpressionConstraintGrammar.RULE_filterDialectDesc);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 490;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case SctExpressionConstraintGrammar.F_DIALECT: {
            this.state = 488;
            this.dialectAliasFilter();
          }
            break;
          case SctExpressionConstraintGrammar.F_DIALECT_ID: {
            this.state = 489;
            this.dialectIdFilter();
          }
            break;
          default:
            throw new NoViableAltException(this);
        }
        this.state = 493;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === SctExpressionConstraintGrammar.OPEN_ROUND) {
          {
            this.state = 492;
            this.acceptabilitySet();
          }
        }

      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public dialectAliasFilter(): DialectAliasFilterContext {
    let _localctx: DialectAliasFilterContext = new DialectAliasFilterContext(this._ctx, this.state);
    this.enterRule(_localctx, 96, SctExpressionConstraintGrammar.RULE_dialectAliasFilter);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 495;
        this.match(SctExpressionConstraintGrammar.F_DIALECT);
        this.state = 496;
        this.booleanComparisonOperator();
        this.state = 499;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case SctExpressionConstraintGrammar.F_DIALECT_ALIAS: {
            this.state = 497;
            this.dialectAlias();
          }
            break;
          case SctExpressionConstraintGrammar.OPEN_ROUND: {
            this.state = 498;
            this.dialectAliasSet();
          }
            break;
          default:
            throw new NoViableAltException(this);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public dialectAlias(): DialectAliasContext {
    let _localctx: DialectAliasContext = new DialectAliasContext(this._ctx, this.state);
    this.enterRule(_localctx, 98, SctExpressionConstraintGrammar.RULE_dialectAlias);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 501;
        this.match(SctExpressionConstraintGrammar.F_DIALECT_ALIAS);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public dialectAliasSet(): DialectAliasSetContext {
    let _localctx: DialectAliasSetContext = new DialectAliasSetContext(this._ctx, this.state);
    this.enterRule(_localctx, 100, SctExpressionConstraintGrammar.RULE_dialectAliasSet);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 503;
        this.match(SctExpressionConstraintGrammar.OPEN_ROUND);
        this.state = 508;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 504;
              this.dialectAlias();
              this.state = 506;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === SctExpressionConstraintGrammar.OPEN_ROUND) {
                {
                  this.state = 505;
                  this.acceptabilitySet();
                }
              }

            }
          }
          this.state = 510;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === SctExpressionConstraintGrammar.F_DIALECT_ALIAS);
        this.state = 512;
        this.match(SctExpressionConstraintGrammar.CLOSE_ROUND);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public dialectIdFilter(): DialectIdFilterContext {
    let _localctx: DialectIdFilterContext = new DialectIdFilterContext(this._ctx, this.state);
    this.enterRule(_localctx, 102, SctExpressionConstraintGrammar.RULE_dialectIdFilter);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 514;
        this.match(SctExpressionConstraintGrammar.F_DIALECT_ID);
        this.state = 515;
        this.booleanComparisonOperator();
        this.state = 518;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 47, this._ctx)) {
          case 1: {
            this.state = 516;
            this.subExpressionConstraint();
          }
            break;

          case 2: {
            this.state = 517;
            this.dialectIdSet();
          }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public dialectIdSet(): DialectIdSetContext {
    let _localctx: DialectIdSetContext = new DialectIdSetContext(this._ctx, this.state);
    this.enterRule(_localctx, 104, SctExpressionConstraintGrammar.RULE_dialectIdSet);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 520;
        this.match(SctExpressionConstraintGrammar.OPEN_ROUND);
        this.state = 525;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 521;
              this.conceptReference();
              this.state = 523;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === SctExpressionConstraintGrammar.OPEN_ROUND) {
                {
                  this.state = 522;
                  this.acceptabilitySet();
                }
              }

            }
          }
          this.state = 527;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === SctExpressionConstraintGrammar.URI || _la === SctExpressionConstraintGrammar.SCTID);
        this.state = 529;
        this.match(SctExpressionConstraintGrammar.CLOSE_ROUND);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public acceptabilitySet(): AcceptabilitySetContext {
    let _localctx: AcceptabilitySetContext = new AcceptabilitySetContext(this._ctx, this.state);
    this.enterRule(_localctx, 106, SctExpressionConstraintGrammar.RULE_acceptabilitySet);
    try {
      this.state = 533;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 50, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 531;
          this.acceptabilityConceptReferenceSet();
        }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 532;
          this.acceptabilityTokenSet();
        }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public acceptabilityConceptReferenceSet(): AcceptabilityConceptReferenceSetContext {
    let _localctx: AcceptabilityConceptReferenceSetContext = new AcceptabilityConceptReferenceSetContext(this._ctx, this.state);
    this.enterRule(_localctx, 108, SctExpressionConstraintGrammar.RULE_acceptabilityConceptReferenceSet);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 535;
        this.match(SctExpressionConstraintGrammar.OPEN_ROUND);
        this.state = 537;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 536;
              this.conceptReference();
            }
          }
          this.state = 539;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === SctExpressionConstraintGrammar.URI || _la === SctExpressionConstraintGrammar.SCTID);
        this.state = 541;
        this.match(SctExpressionConstraintGrammar.CLOSE_ROUND);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public acceptabilityTokenSet(): AcceptabilityTokenSetContext {
    let _localctx: AcceptabilityTokenSetContext = new AcceptabilityTokenSetContext(this._ctx, this.state);
    this.enterRule(_localctx, 110, SctExpressionConstraintGrammar.RULE_acceptabilityTokenSet);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 543;
        this.match(SctExpressionConstraintGrammar.OPEN_ROUND);
        this.state = 545;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 544;
              this.acceptabilityToken();
            }
          }
          this.state = 547;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === SctExpressionConstraintGrammar.F_ACCEPTABLE || _la === SctExpressionConstraintGrammar.F_PREFERRED);
        this.state = 549;
        this.match(SctExpressionConstraintGrammar.CLOSE_ROUND);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public acceptabilityToken(): AcceptabilityTokenContext {
    let _localctx: AcceptabilityTokenContext = new AcceptabilityTokenContext(this._ctx, this.state);
    this.enterRule(_localctx, 112, SctExpressionConstraintGrammar.RULE_acceptabilityToken);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 551;
        _la = this._input.LA(1);
        if (!(_la === SctExpressionConstraintGrammar.F_ACCEPTABLE || _la === SctExpressionConstraintGrammar.F_PREFERRED)) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public filterModuleDesc(): FilterModuleDescContext {
    let _localctx: FilterModuleDescContext = new FilterModuleDescContext(this._ctx, this.state);
    this.enterRule(_localctx, 114, SctExpressionConstraintGrammar.RULE_filterModuleDesc);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 553;
        this.match(SctExpressionConstraintGrammar.F_MODULE);
        this.state = 554;
        this.booleanComparisonOperator();
        this.state = 557;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 53, this._ctx)) {
          case 1: {
            this.state = 555;
            this.subExpressionConstraint();
          }
            break;

          case 2: {
            this.state = 556;
            this.conceptReferenceSet();
          }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public filterEffectiveTimeDesc(): FilterEffectiveTimeDescContext {
    let _localctx: FilterEffectiveTimeDescContext = new FilterEffectiveTimeDescContext(this._ctx, this.state);
    this.enterRule(_localctx, 116, SctExpressionConstraintGrammar.RULE_filterEffectiveTimeDesc);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 559;
        this.match(SctExpressionConstraintGrammar.F_EFFECTIVETIME);
        this.state = 560;
        this.timeComparisonOperator();
        this.state = 563;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case SctExpressionConstraintGrammar.TIMESTAMP: {
            this.state = 561;
            this.timeValue();
          }
            break;
          case SctExpressionConstraintGrammar.OPEN_ROUND:
          case SctExpressionConstraintGrammar.COMMA:
          case SctExpressionConstraintGrammar.CLOSE_PROP: {
            this.state = 562;
            this.timeValueSet();
          }
            break;
          default:
            throw new NoViableAltException(this);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public filterActiveDesc(): FilterActiveDescContext {
    let _localctx: FilterActiveDescContext = new FilterActiveDescContext(this._ctx, this.state);
    this.enterRule(_localctx, 118, SctExpressionConstraintGrammar.RULE_filterActiveDesc);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 565;
        this.match(SctExpressionConstraintGrammar.F_ACTIVE);
        this.state = 566;
        this.booleanComparisonOperator();
        this.state = 569;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case SctExpressionConstraintGrammar.ONE:
          case SctExpressionConstraintGrammar.TRUE: {
            this.state = 567;
            this.activeTrue();
          }
            break;
          case SctExpressionConstraintGrammar.ZERO:
          case SctExpressionConstraintGrammar.FALSE: {
            this.state = 568;
            this.activeFalse();
          }
            break;
          default:
            throw new NoViableAltException(this);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public filterActive(): FilterActiveContext {
    let _localctx: FilterActiveContext = new FilterActiveContext(this._ctx, this.state);
    this.enterRule(_localctx, 120, SctExpressionConstraintGrammar.RULE_filterActive);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 571;
        this.match(SctExpressionConstraintGrammar.F_ACTIVE);
        this.state = 572;
        this.booleanComparisonOperator();
        this.state = 575;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case SctExpressionConstraintGrammar.ONE:
          case SctExpressionConstraintGrammar.TRUE: {
            this.state = 573;
            this.activeTrue();
          }
            break;
          case SctExpressionConstraintGrammar.ZERO:
          case SctExpressionConstraintGrammar.FALSE: {
            this.state = 574;
            this.activeFalse();
          }
            break;
          default:
            throw new NoViableAltException(this);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public activeTrue(): ActiveTrueContext {
    let _localctx: ActiveTrueContext = new ActiveTrueContext(this._ctx, this.state);
    this.enterRule(_localctx, 122, SctExpressionConstraintGrammar.RULE_activeTrue);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 577;
        _la = this._input.LA(1);
        if (!(_la === SctExpressionConstraintGrammar.ONE || _la === SctExpressionConstraintGrammar.TRUE)) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public activeFalse(): ActiveFalseContext {
    let _localctx: ActiveFalseContext = new ActiveFalseContext(this._ctx, this.state);
    this.enterRule(_localctx, 124, SctExpressionConstraintGrammar.RULE_activeFalse);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 579;
        _la = this._input.LA(1);
        if (!(_la === SctExpressionConstraintGrammar.ZERO || _la === SctExpressionConstraintGrammar.FALSE)) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public filterModule(): FilterModuleContext {
    let _localctx: FilterModuleContext = new FilterModuleContext(this._ctx, this.state);
    this.enterRule(_localctx, 126, SctExpressionConstraintGrammar.RULE_filterModule);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 581;
        this.match(SctExpressionConstraintGrammar.F_MODULE);
        this.state = 582;
        this.booleanComparisonOperator();
        this.state = 585;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 57, this._ctx)) {
          case 1: {
            this.state = 583;
            this.subExpressionConstraint();
          }
            break;

          case 2: {
            this.state = 584;
            this.conceptReferenceSet();
          }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public filterDefnStatus(): FilterDefnStatusContext {
    let _localctx: FilterDefnStatusContext = new FilterDefnStatusContext(this._ctx, this.state);
    this.enterRule(_localctx, 128, SctExpressionConstraintGrammar.RULE_filterDefnStatus);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 587;
        this.match(SctExpressionConstraintGrammar.F_DEFNSTATUS);
        this.state = 588;
        this.booleanComparisonOperator();
        this.state = 591;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case SctExpressionConstraintGrammar.PRIMITIVE:
          case SctExpressionConstraintGrammar.DEFINED: {
            this.state = 589;
            this.defnStatusToken();
          }
            break;
          case SctExpressionConstraintGrammar.OPEN_ROUND: {
            this.state = 590;
            this.defnStatusTokenSet();
          }
            break;
          default:
            throw new NoViableAltException(this);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public filterDefnStatusId(): FilterDefnStatusIdContext {
    let _localctx: FilterDefnStatusIdContext = new FilterDefnStatusIdContext(this._ctx, this.state);
    this.enterRule(_localctx, 130, SctExpressionConstraintGrammar.RULE_filterDefnStatusId);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 593;
        this.match(SctExpressionConstraintGrammar.F_DEFNSTATUSID);
        this.state = 594;
        this.booleanComparisonOperator();
        this.state = 597;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 59, this._ctx)) {
          case 1: {
            this.state = 595;
            this.subExpressionConstraint();
          }
            break;

          case 2: {
            this.state = 596;
            this.conceptReferenceSet();
          }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public filterEffectiveTime(): FilterEffectiveTimeContext {
    let _localctx: FilterEffectiveTimeContext = new FilterEffectiveTimeContext(this._ctx, this.state);
    this.enterRule(_localctx, 132, SctExpressionConstraintGrammar.RULE_filterEffectiveTime);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 599;
        this.match(SctExpressionConstraintGrammar.F_EFFECTIVETIME);
        this.state = 600;
        this.timeComparisonOperator();
        this.state = 603;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case SctExpressionConstraintGrammar.TIMESTAMP: {
            this.state = 601;
            this.timeValue();
          }
            break;
          case SctExpressionConstraintGrammar.OPEN_ROUND:
          case SctExpressionConstraintGrammar.COMMA:
          case SctExpressionConstraintGrammar.CLOSE_PROP: {
            this.state = 602;
            this.timeValueSet();
          }
            break;
          default:
            throw new NoViableAltException(this);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public defnStatusToken(): DefnStatusTokenContext {
    let _localctx: DefnStatusTokenContext = new DefnStatusTokenContext(this._ctx, this.state);
    this.enterRule(_localctx, 134, SctExpressionConstraintGrammar.RULE_defnStatusToken);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 605;
        _la = this._input.LA(1);
        if (!(_la === SctExpressionConstraintGrammar.PRIMITIVE || _la === SctExpressionConstraintGrammar.DEFINED)) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public defnStatusTokenSet(): DefnStatusTokenSetContext {
    let _localctx: DefnStatusTokenSetContext = new DefnStatusTokenSetContext(this._ctx, this.state);
    this.enterRule(_localctx, 136, SctExpressionConstraintGrammar.RULE_defnStatusTokenSet);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 607;
        this.match(SctExpressionConstraintGrammar.OPEN_ROUND);
        this.state = 609;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 608;
              this.defnStatusToken();
            }
          }
          this.state = 611;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === SctExpressionConstraintGrammar.PRIMITIVE || _la === SctExpressionConstraintGrammar.DEFINED);
        this.state = 613;
        this.match(SctExpressionConstraintGrammar.CLOSE_ROUND);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public timeValue(): TimeValueContext {
    let _localctx: TimeValueContext = new TimeValueContext(this._ctx, this.state);
    this.enterRule(_localctx, 138, SctExpressionConstraintGrammar.RULE_timeValue);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 615;
        this.match(SctExpressionConstraintGrammar.TIMESTAMP);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public timeValueSet(): TimeValueSetContext {
    let _localctx: TimeValueSetContext = new TimeValueSetContext(this._ctx, this.state);
    this.enterRule(_localctx, 140, SctExpressionConstraintGrammar.RULE_timeValueSet);
    let _la: number;
    try {
      this.state = 626;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case SctExpressionConstraintGrammar.COMMA:
        case SctExpressionConstraintGrammar.CLOSE_PROP:
          this.enterOuterAlt(_localctx, 1);
          // tslint:disable-next-line:no-empty
        {
        }
          break;
        case SctExpressionConstraintGrammar.OPEN_ROUND:
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 618;
          this.match(SctExpressionConstraintGrammar.OPEN_ROUND);
          this.state = 620;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
          do {
            {
              {
                this.state = 619;
                this.timeValue();
              }
            }
            this.state = 622;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
          } while (_la === SctExpressionConstraintGrammar.TIMESTAMP);
          this.state = 624;
          this.match(SctExpressionConstraintGrammar.CLOSE_ROUND);
        }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public searchValue(): SearchValueContext {
    let _localctx: SearchValueContext = new SearchValueContext(this._ctx, this.state);
    this.enterRule(_localctx, 142, SctExpressionConstraintGrammar.RULE_searchValue);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 630;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (SctExpressionConstraintGrammar.F_REGEX - 62)) | (1 << (SctExpressionConstraintGrammar.F_WILD - 62)) | (1 << (SctExpressionConstraintGrammar.F_MATCH - 62)))) !== 0)) {
          {
            this.state = 628;
            _la = this._input.LA(1);
            if (!(((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (SctExpressionConstraintGrammar.F_REGEX - 62)) | (1 << (SctExpressionConstraintGrammar.F_WILD - 62)) | (1 << (SctExpressionConstraintGrammar.F_MATCH - 62)))) !== 0))) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 629;
            this.match(SctExpressionConstraintGrammar.COLON);
          }
        }

        this.state = 632;
        this.string_value();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public searchValueSet(): SearchValueSetContext {
    let _localctx: SearchValueSetContext = new SearchValueSetContext(this._ctx, this.state);
    this.enterRule(_localctx, 144, SctExpressionConstraintGrammar.RULE_searchValueSet);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 634;
        this.match(SctExpressionConstraintGrammar.OPEN_ROUND);
        this.state = 636;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 635;
              this.searchValue();
            }
          }
          this.state = 638;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === SctExpressionConstraintGrammar.TIMESTAMP || _la === SctExpressionConstraintGrammar.STRING_VALUE || ((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (SctExpressionConstraintGrammar.F_REGEX - 62)) | (1 << (SctExpressionConstraintGrammar.F_WILD - 62)) | (1 << (SctExpressionConstraintGrammar.F_MATCH - 62)))) !== 0));
        this.state = 640;
        this.match(SctExpressionConstraintGrammar.CLOSE_ROUND);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public string_value(): String_valueContext {
    let _localctx: String_valueContext = new String_valueContext(this._ctx, this.state);
    this.enterRule(_localctx, 146, SctExpressionConstraintGrammar.RULE_string_value);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 642;
        _la = this._input.LA(1);
        if (!(_la === SctExpressionConstraintGrammar.TIMESTAMP || _la === SctExpressionConstraintGrammar.STRING_VALUE)) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public conceptReferenceSet(): ConceptReferenceSetContext {
    let _localctx: ConceptReferenceSetContext = new ConceptReferenceSetContext(this._ctx, this.state);
    this.enterRule(_localctx, 148, SctExpressionConstraintGrammar.RULE_conceptReferenceSet);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 644;
        this.match(SctExpressionConstraintGrammar.OPEN_ROUND);
        this.state = 645;
        this.conceptReference();
        this.state = 647;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 646;
              this.conceptReference();
            }
          }
          this.state = 649;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === SctExpressionConstraintGrammar.URI || _la === SctExpressionConstraintGrammar.SCTID);
        this.state = 651;
        this.match(SctExpressionConstraintGrammar.CLOSE_ROUND);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public refinement(): RefinementContext {
    let _localctx: RefinementContext = new RefinementContext(this._ctx, this.state);
    this.enterRule(_localctx, 150, SctExpressionConstraintGrammar.RULE_refinement);
    try {
      this.state = 656;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 67, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 653;
          this.subRefinement();
        }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 654;
          this.conjunctionRefinement();
        }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
        {
          this.state = 655;
          this.disjunctionRefinement();
        }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public conjunctionRefinement(): ConjunctionRefinementContext {
    let _localctx: ConjunctionRefinementContext = new ConjunctionRefinementContext(this._ctx, this.state);
    this.enterRule(_localctx, 152, SctExpressionConstraintGrammar.RULE_conjunctionRefinement);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 658;
        this.subRefinement();
        this.state = 661;
        this._errHandler.sync(this);
        _alt = 1;
        do {
          switch (_alt) {
            case 1: {
              {
                this.state = 659;
                _la = this._input.LA(1);
                if (!(_la === SctExpressionConstraintGrammar.COMMA || _la === SctExpressionConstraintGrammar.AND)) {
                  this._errHandler.recoverInline(this);
                } else {
                  if (this._input.LA(1) === Token.EOF) {
                    this.matchedEOF = true;
                  }

                  this._errHandler.reportMatch(this);
                  this.consume();
                }
                this.state = 660;
                this.subRefinement();
              }
            }
              break;
            default:
              throw new NoViableAltException(this);
          }
          this.state = 663;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
        } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public disjunctionRefinement(): DisjunctionRefinementContext {
    let _localctx: DisjunctionRefinementContext = new DisjunctionRefinementContext(this._ctx, this.state);
    this.enterRule(_localctx, 154, SctExpressionConstraintGrammar.RULE_disjunctionRefinement);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 665;
        this.subRefinement();
        this.state = 668;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 666;
              this.match(SctExpressionConstraintGrammar.OR);
              this.state = 667;
              this.subRefinement();
            }
          }
          this.state = 670;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === SctExpressionConstraintGrammar.OR);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public subRefinement(): SubRefinementContext {
    let _localctx: SubRefinementContext = new SubRefinementContext(this._ctx, this.state);
    this.enterRule(_localctx, 156, SctExpressionConstraintGrammar.RULE_subRefinement);
    try {
      this.state = 678;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 70, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 672;
          this.attributeSet();
        }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 673;
          this.attributeGroup();
        }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
        {
          this.state = 674;
          this.match(SctExpressionConstraintGrammar.OPEN_ROUND);
          this.state = 675;
          this.refinement();
          this.state = 676;
          this.match(SctExpressionConstraintGrammar.CLOSE_ROUND);
        }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public attributeGroup(): AttributeGroupContext {
    let _localctx: AttributeGroupContext = new AttributeGroupContext(this._ctx, this.state);
    this.enterRule(_localctx, 158, SctExpressionConstraintGrammar.RULE_attributeGroup);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 681;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === SctExpressionConstraintGrammar.OPEN_SQUARE) {
          {
            this.state = 680;
            this.cardinality();
          }
        }

        this.state = 683;
        this.match(SctExpressionConstraintGrammar.OPEN_CURLY);
        this.state = 684;
        this.attributeSet();
        this.state = 685;
        this.match(SctExpressionConstraintGrammar.CLOSE_CURLY);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public attributeSet(): AttributeSetContext {
    let _localctx: AttributeSetContext = new AttributeSetContext(this._ctx, this.state);
    this.enterRule(_localctx, 160, SctExpressionConstraintGrammar.RULE_attributeSet);
    try {
      this.state = 690;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 72, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 687;
          this.subAttributeSet();
        }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 688;
          this.conjunctionAttribute();
        }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
        {
          this.state = 689;
          this.disjunctionAttribute();
        }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public conjunctionAttribute(): ConjunctionAttributeContext {
    let _localctx: ConjunctionAttributeContext = new ConjunctionAttributeContext(this._ctx, this.state);
    this.enterRule(_localctx, 162, SctExpressionConstraintGrammar.RULE_conjunctionAttribute);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 692;
        this.subAttributeSet();
        this.state = 695;
        this._errHandler.sync(this);
        _alt = 1;
        do {
          switch (_alt) {
            case 1: {
              {
                this.state = 693;
                _la = this._input.LA(1);
                if (!(_la === SctExpressionConstraintGrammar.COMMA || _la === SctExpressionConstraintGrammar.AND)) {
                  this._errHandler.recoverInline(this);
                } else {
                  if (this._input.LA(1) === Token.EOF) {
                    this.matchedEOF = true;
                  }

                  this._errHandler.reportMatch(this);
                  this.consume();
                }
                this.state = 694;
                this.subAttributeSet();
              }
            }
              break;
            default:
              throw new NoViableAltException(this);
          }
          this.state = 697;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
        } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public disjunctionAttribute(): DisjunctionAttributeContext {
    let _localctx: DisjunctionAttributeContext = new DisjunctionAttributeContext(this._ctx, this.state);
    this.enterRule(_localctx, 164, SctExpressionConstraintGrammar.RULE_disjunctionAttribute);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 699;
        this.subAttributeSet();
        this.state = 702;
        this._errHandler.sync(this);
        _alt = 1;
        do {
          switch (_alt) {
            case 1: {
              {
                this.state = 700;
                this.match(SctExpressionConstraintGrammar.OR);
                this.state = 701;
                this.subAttributeSet();
              }
            }
              break;
            default:
              throw new NoViableAltException(this);
          }
          this.state = 704;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
        } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public subAttributeSet(): SubAttributeSetContext {
    let _localctx: SubAttributeSetContext = new SubAttributeSetContext(this._ctx, this.state);
    this.enterRule(_localctx, 166, SctExpressionConstraintGrammar.RULE_subAttributeSet);
    try {
      this.state = 711;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 75, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 706;
          this.attribute();
        }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 707;
          this.match(SctExpressionConstraintGrammar.OPEN_ROUND);
          this.state = 708;
          this.attributeSet();
          this.state = 709;
          this.match(SctExpressionConstraintGrammar.CLOSE_ROUND);
        }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public attribute(): AttributeContext {
    let _localctx: AttributeContext = new AttributeContext(this._ctx, this.state);
    this.enterRule(_localctx, 168, SctExpressionConstraintGrammar.RULE_attribute);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 714;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 76, this._ctx)) {
          case 1: {
            this.state = 713;
            this.cardinality();
          }
            break;
        }
        this.state = 717;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 77, this._ctx)) {
          case 1: {
            this.state = 716;
            this.match(SctExpressionConstraintGrammar.REVERSE_FLAG);
          }
            break;
        }
        this.state = 720;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 78, this._ctx)) {
          case 1: {
            this.state = 719;
            this.attributeOperator();
          }
            break;
        }
        this.state = 722;
        this.attributeName();
        this.state = 729;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 79, this._ctx)) {
          case 1: {
            this.state = 723;
            this.concreteComparisonOperator();
            this.state = 724;
            this.concreteValue();
          }
            break;

          case 2: {
            this.state = 726;
            this.expressionComparisonOperator();
            this.state = 727;
            this.expressionConstraintValue();
          }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public cardinality(): CardinalityContext {
    let _localctx: CardinalityContext = new CardinalityContext(this._ctx, this.state);
    this.enterRule(_localctx, 170, SctExpressionConstraintGrammar.RULE_cardinality);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 731;
        this.match(SctExpressionConstraintGrammar.OPEN_SQUARE);
        this.state = 732;
        this.match(SctExpressionConstraintGrammar.NON_NEGATIVE_INTEGER);
        this.state = 733;
        this.match(SctExpressionConstraintGrammar.DOTDOT);
        this.state = 734;
        _la = this._input.LA(1);
        if (!(_la === SctExpressionConstraintGrammar.NON_NEGATIVE_INTEGER || _la === SctExpressionConstraintGrammar.MANY)) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
        this.state = 735;
        this.match(SctExpressionConstraintGrammar.CLOSE_SQUARE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public attributeOperator(): AttributeOperatorContext {
    let _localctx: AttributeOperatorContext = new AttributeOperatorContext(this._ctx, this.state);
    this.enterRule(_localctx, 172, SctExpressionConstraintGrammar.RULE_attributeOperator);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 737;
        this.constraintOperator();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public attributeName(): AttributeNameContext {
    let _localctx: AttributeNameContext = new AttributeNameContext(this._ctx, this.state);
    this.enterRule(_localctx, 174, SctExpressionConstraintGrammar.RULE_attributeName);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 739;
        this.simpleExpressionConstraint();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public expressionConstraintValue(): ExpressionConstraintValueContext {
    let _localctx: ExpressionConstraintValueContext = new ExpressionConstraintValueContext(this._ctx, this.state);
    this.enterRule(_localctx, 176, SctExpressionConstraintGrammar.RULE_expressionConstraintValue);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 741;
        this.simpleExpressionConstraint();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public booleanComparisonOperator(): BooleanComparisonOperatorContext {
    let _localctx: BooleanComparisonOperatorContext = new BooleanComparisonOperatorContext(this._ctx, this.state);
    this.enterRule(_localctx, 178, SctExpressionConstraintGrammar.RULE_booleanComparisonOperator);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 743;
        _la = this._input.LA(1);
        if (!(_la === SctExpressionConstraintGrammar.EQ || _la === SctExpressionConstraintGrammar.NE)) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public timeComparisonOperator(): TimeComparisonOperatorContext {
    let _localctx: TimeComparisonOperatorContext = new TimeComparisonOperatorContext(this._ctx, this.state);
    this.enterRule(_localctx, 180, SctExpressionConstraintGrammar.RULE_timeComparisonOperator);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 745;
        _la = this._input.LA(1);
        if (!(_la === SctExpressionConstraintGrammar.EQ || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (SctExpressionConstraintGrammar.LTE - 34)) | (1 << (SctExpressionConstraintGrammar.GTE - 34)) | (1 << (SctExpressionConstraintGrammar.NE - 34)) | (1 << (SctExpressionConstraintGrammar.LT - 34)) | (1 << (SctExpressionConstraintGrammar.GT - 34)))) !== 0))) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public concreteComparisonOperator(): ConcreteComparisonOperatorContext {
    let _localctx: ConcreteComparisonOperatorContext = new ConcreteComparisonOperatorContext(this._ctx, this.state);
    this.enterRule(_localctx, 182, SctExpressionConstraintGrammar.RULE_concreteComparisonOperator);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 747;
        _la = this._input.LA(1);
        if (!(_la === SctExpressionConstraintGrammar.EQ || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (SctExpressionConstraintGrammar.LTE - 34)) | (1 << (SctExpressionConstraintGrammar.GTE - 34)) | (1 << (SctExpressionConstraintGrammar.NE - 34)) | (1 << (SctExpressionConstraintGrammar.LT - 34)) | (1 << (SctExpressionConstraintGrammar.GT - 34)))) !== 0))) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public expressionComparisonOperator(): ExpressionComparisonOperatorContext {
    let _localctx: ExpressionComparisonOperatorContext = new ExpressionComparisonOperatorContext(this._ctx, this.state);
    this.enterRule(_localctx, 184, SctExpressionConstraintGrammar.RULE_expressionComparisonOperator);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 749;
        _la = this._input.LA(1);
        if (!(_la === SctExpressionConstraintGrammar.EQ || _la === SctExpressionConstraintGrammar.NE)) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  // @RuleVersion(0)
  public concreteValue(): ConcreteValueContext {
    let _localctx: ConcreteValueContext = new ConcreteValueContext(this._ctx, this.state);
    this.enterRule(_localctx, 186, SctExpressionConstraintGrammar.RULE_concreteValue);
    try {
      this.state = 753;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case SctExpressionConstraintGrammar.TIMESTAMP:
        case SctExpressionConstraintGrammar.STRING_VALUE:
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 751;
          this.string_value();
        }
          break;
        case SctExpressionConstraintGrammar.NUMBER:
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 752;
          this.match(SctExpressionConstraintGrammar.NUMBER);
        }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
    switch (ruleIndex) {
      case 16:
        return this.function_sempred(_localctx as FunctionContext, predIndex);
    }
    return true;
  }

  private function_sempred(_localctx: FunctionContext, predIndex: number): boolean {
    switch (predIndex) {
      case 0:
        // @ts-ignore
        return msgaMode;
    }
    return true;
  }

  // noinspection JSUnusedLocalSymbols
  private static readonly _serializedATNSegments: number = 2;
  private static readonly _serializedATNSegment0: string =
    "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\\\u02F6\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
    "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
    "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
    "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
    "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
    "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
    "\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
    "\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
    "\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
    "=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
    "F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
    "O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
    "X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x03\x02" +
    "\x03\x02\x03\x02\x03\x02\x05\x02\xC3\n\x02\x03\x02\x03\x02\x03\x02\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x05\x03\xCC\n\x03\x03\x04\x03\x04\x03\x04" +
    "\x07\x04\xD1\n\x04\f\x04\x0E\x04\xD4\v\x04\x03\x05\x03\x05\x03\x05\x03" +
    "\x05\x05\x05\xDA\n\x05\x03\x06\x03\x06\x03\x06\x05\x06\xDF\n\x06\x03\x06" +
    "\x06\x06\xE2\n\x06\r\x06\x0E\x06\xE3\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
    "\b\x03\b\x05\b\xEC\n\b\x03\t\x05\t\xEF\n\t\x03\t\x03\t\x03\t\x03\t\x03" +
    "\t\x05\t\xF6\n\t\x03\n\x03\n\x03\n\x05\n\xFB\n\n\x03\v\x03\v\x03\v\x06" +
    "\v\u0100\n\v\r\v\x0E\v\u0101\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x05\r" +
    "\u010A\n\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x05\x0F\u0110\n\x0F\x03\x10" +
    "\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u0117\n\x10\x03\x10\x05\x10\u011A" +
    "\n\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u0120\n\x10\x05\x10\u0122" +
    "\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u0128\n\x11\x03\x11\x05" +
    "\x11\u012B\n\x11\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u0131\n\x12\x03" +
    "\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03" +
    "\x15\x03\x15\x06\x15\u013E\n\x15\r\x15\x0E\x15\u013F\x03\x16\x03\x16\x07" +
    "\x16\u0144\n\x16\f\x16\x0E\x16\u0147\v\x16\x03\x16\x05\x16\u014A\n\x16" +
    "\x03\x17\x03\x17\x03\x17\x05\x17\u014F\n\x17\x03\x17\x03\x17\x03\x18\x03" +
    "\x18\x03\x18\x03\x18\x03\x18\x05\x18\u0158\n\x18\x03\x18\x03\x18\x03\x19" +
    "\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x05\x1B\u0163\n\x1B\x03" +
    "\x1B\x03\x1B\x03\x1B\x07\x1B\u0168\n\x1B\f\x1B\x0E\x1B\u016B\v\x1B\x03" +
    "\x1C\x03\x1C\x03\x1C\x03\x1C\x07\x1C\u0171\n\x1C\f\x1C\x0E\x1C\u0174\v" +
    "\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u017B\n\x1D\f\x1D" +
    "\x0E\x1D\u017E\v\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
    "\x1E\x03\x1E\x03\x1E\x05\x1E\u0189\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F" +
    "\x03\x1F\x05\x1F\u0190\n\x1F\x03 \x03 \x03 \x03 \x03 \x05 \u0197\n \x03" +
    "!\x03!\x03!\x03!\x03\"\x03\"\x03\"\x03\"\x03#\x03#\x03#\x03#\x05#\u01A5" +
    "\n#\x03$\x03$\x03$\x03$\x03%\x03%\x03%\x03%\x05%\u01AF\n%\x03&\x03&\x03" +
    "\'\x03\'\x03\'\x07\'\u01B6\n\'\f\'\x0E\'\u01B9\v\'\x03(\x03(\x03(\x03" +
    "(\x05(\u01BF\n(\x03)\x03)\x03)\x03)\x05)\u01C5\n)\x03*\x03*\x06*\u01C9" +
    "\n*\r*\x0E*\u01CA\x03*\x03*\x03+\x03+\x03,\x03,\x05,\u01D3\n,\x03-\x03" +
    "-\x03-\x03-\x05-\u01D9\n-\x03.\x03.\x03.\x03.\x05.\u01DF\n.\x03/\x03/" +
    "\x06/\u01E3\n/\r/\x0E/\u01E4\x03/\x03/\x030\x030\x031\x031\x051\u01ED" +
    "\n1\x031\x051\u01F0\n1\x032\x032\x032\x032\x052\u01F6\n2\x033\x033\x03" +
    "4\x034\x034\x054\u01FD\n4\x064\u01FF\n4\r4\x0E4\u0200\x034\x034\x035\x03" +
    "5\x035\x035\x055\u0209\n5\x036\x036\x036\x056\u020E\n6\x066\u0210\n6\r" +
    "6\x0E6\u0211\x036\x036\x037\x037\x057\u0218\n7\x038\x038\x068\u021C\n" +
    "8\r8\x0E8\u021D\x038\x038\x039\x039\x069\u0224\n9\r9\x0E9\u0225\x039\x03" +
    "9\x03:\x03:\x03;\x03;\x03;\x03;\x05;\u0230\n;\x03<\x03<\x03<\x03<\x05" +
    "<\u0236\n<\x03=\x03=\x03=\x03=\x05=\u023C\n=\x03>\x03>\x03>\x03>\x05>" +
    "\u0242\n>\x03?\x03?\x03@\x03@\x03A\x03A\x03A\x03A\x05A\u024C\nA\x03B\x03" +
    "B\x03B\x03B\x05B\u0252\nB\x03C\x03C\x03C\x03C\x05C\u0258\nC\x03D\x03D" +
    "\x03D\x03D\x05D\u025E\nD\x03E\x03E\x03F\x03F\x06F\u0264\nF\rF\x0EF\u0265" +
    "\x03F\x03F\x03G\x03G\x03H\x03H\x03H\x06H\u026F\nH\rH\x0EH\u0270\x03H\x03" +
    "H\x05H\u0275\nH\x03I\x03I\x05I\u0279\nI\x03I\x03I\x03J\x03J\x06J\u027F" +
    "\nJ\rJ\x0EJ\u0280\x03J\x03J\x03K\x03K\x03L\x03L\x03L\x06L\u028A\nL\rL" +
    "\x0EL\u028B\x03L\x03L\x03M\x03M\x03M\x05M\u0293\nM\x03N\x03N\x03N\x06" +
    "N\u0298\nN\rN\x0EN\u0299\x03O\x03O\x03O\x06O\u029F\nO\rO\x0EO\u02A0\x03" +
    "P\x03P\x03P\x03P\x03P\x03P\x05P\u02A9\nP\x03Q\x05Q\u02AC\nQ\x03Q\x03Q" +
    "\x03Q\x03Q\x03R\x03R\x03R\x05R\u02B5\nR\x03S\x03S\x03S\x06S\u02BA\nS\r" +
    "S\x0ES\u02BB\x03T\x03T\x03T\x06T\u02C1\nT\rT\x0ET\u02C2\x03U\x03U\x03" +
    "U\x03U\x03U\x05U\u02CA\nU\x03V\x05V\u02CD\nV\x03V\x05V\u02D0\nV\x03V\x05" +
    "V\u02D3\nV\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x05V\u02DC\nV\x03W\x03W" +
    "\x03W\x03W\x03W\x03W\x03X\x03X\x03Y\x03Y\x03Z\x03Z\x03[\x03[\x03\\\x03" +
    "\\\x03]\x03]\x03^\x03^\x03_\x03_\x05_\u02F4\n_\x03_\x02\x02\x02`\x02\x02" +
    "\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16" +
    "\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02" +
    ".\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02" +
    "J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02" +
    "f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80" +
    "\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92" +
    "\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4" +
    "\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6" +
    "\x02\xB8\x02\xBA\x02\xBC\x02\x02\x12\x03\x02FG\x05\x02\b\t\x15\x1A\'(" +
    "\x04\x02\r\r\x12\x12\x03\x02:<\x03\x02>?\x06\x02\"\"FFIIMM\x03\x02UW\x03" +
    "\x02[\\\x04\x02!!??\x04\x02  >>\x03\x0289\x03\x02@B\x03\x02\x1C\x1D\x04" +
    "\x02JJLL\x04\x02\x07\x07&&\x04\x02\x07\x07$(\x02\u02FD\x02\xC2\x03\x02" +
    "\x02\x02\x04\xC7\x03\x02\x02\x02\x06\xCD\x03\x02\x02\x02\b\xD9\x03\x02" +
    "\x02\x02\n\xDB\x03\x02\x02\x02\f\xE5\x03\x02\x02\x02\x0E\xEB\x03\x02\x02" +
    "\x02\x10\xEE\x03\x02\x02\x02\x12\xFA\x03\x02\x02\x02\x14\xFC\x03\x02\x02" +
    "\x02\x16\u0103\x03\x02\x02\x02\x18\u0107\x03\x02\x02\x02\x1A\u010B\x03" +
    "\x02\x02\x02\x1C\u010F\x03\x02\x02\x02\x1E\u0121\x03\x02\x02\x02 \u0123" +
    "\x03\x02\x02\x02\"\u012C\x03\x02\x02\x02$\u0132\x03\x02\x02\x02&\u0136" +
    "\x03\x02\x02\x02(\u013A\x03\x02\x02\x02*\u0141\x03\x02\x02\x02,\u014B" +
    "\x03\x02\x02\x02.\u0152\x03\x02\x02\x020\u015B\x03\x02\x02\x022\u015D" +
    "\x03\x02\x02\x024\u0162\x03\x02\x02\x026\u016C\x03\x02\x02\x028\u0175" +
    "\x03\x02\x02\x02:\u0188\x03\x02\x02\x02<\u018F\x03\x02\x02\x02>\u0196" +
    "\x03\x02\x02\x02@\u0198\x03\x02\x02\x02B\u019C\x03\x02\x02\x02D\u01A0" +
    "\x03\x02\x02\x02F\u01A6\x03\x02\x02\x02H\u01AA\x03\x02\x02\x02J\u01B0" +
    "\x03\x02\x02\x02L\u01B2\x03\x02\x02\x02N\u01BA\x03\x02\x02\x02P\u01C0" +
    "\x03\x02\x02\x02R\u01C6\x03\x02\x02\x02T\u01CE\x03\x02\x02\x02V\u01D2" +
    "\x03\x02\x02\x02X\u01D4\x03\x02\x02\x02Z\u01DA\x03\x02\x02\x02\\\u01E0" +
    "\x03\x02\x02\x02^\u01E8\x03\x02\x02\x02`\u01EC\x03\x02\x02\x02b\u01F1" +
    "\x03\x02\x02\x02d\u01F7\x03\x02\x02\x02f\u01F9\x03\x02\x02\x02h\u0204" +
    "\x03\x02\x02\x02j\u020A\x03\x02\x02\x02l\u0217\x03\x02\x02\x02n\u0219" +
    "\x03\x02\x02\x02p\u0221\x03\x02\x02\x02r\u0229\x03\x02\x02\x02t\u022B" +
    "\x03\x02\x02\x02v\u0231\x03\x02\x02\x02x\u0237\x03\x02\x02\x02z\u023D" +
    "\x03\x02\x02\x02|\u0243\x03\x02\x02\x02~\u0245\x03\x02\x02\x02\x80\u0247" +
    "\x03\x02\x02\x02\x82\u024D\x03\x02\x02\x02\x84\u0253\x03\x02\x02\x02\x86" +
    "\u0259\x03\x02\x02\x02\x88\u025F\x03\x02\x02\x02\x8A\u0261\x03\x02\x02" +
    "\x02\x8C\u0269\x03\x02\x02\x02\x8E\u0274\x03\x02\x02\x02\x90\u0278\x03" +
    "\x02\x02\x02\x92\u027C\x03\x02\x02\x02\x94\u0284\x03\x02\x02\x02\x96\u0286" +
    "\x03\x02\x02\x02\x98\u0292\x03\x02\x02\x02\x9A\u0294\x03\x02\x02\x02\x9C" +
    "\u029B\x03\x02\x02\x02\x9E\u02A8\x03\x02\x02\x02\xA0\u02AB\x03\x02\x02" +
    "\x02\xA2\u02B4\x03\x02\x02\x02\xA4\u02B6\x03\x02\x02\x02\xA6\u02BD\x03" +
    "\x02\x02\x02\xA8\u02C9\x03\x02\x02\x02\xAA\u02CC\x03\x02\x02\x02\xAC\u02DD" +
    "\x03\x02\x02\x02\xAE\u02E3\x03\x02\x02\x02\xB0\u02E5\x03\x02\x02\x02\xB2" +
    "\u02E7\x03\x02\x02\x02\xB4\u02E9\x03\x02\x02\x02\xB6\u02EB\x03\x02\x02" +
    "\x02\xB8\u02ED\x03\x02\x02\x02\xBA\u02EF\x03\x02\x02\x02\xBC\u02F3\x03" +
    "\x02\x02\x02\xBE\xBF\x07\x03\x02\x02\xBF\xC0\x05\x06\x04\x02\xC0\xC1\x07" +
    "\x04\x02\x02\xC1\xC3\x03\x02\x02\x02\xC2\xBE\x03\x02\x02\x02\xC2\xC3\x03" +
    "\x02\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4\xC5\x05\b\x05\x02\xC5\xC6\x07" +
    "\x02\x02\x03\xC6\x03\x03\x02\x02\x02\xC7\xC8\t\x02\x02\x02\xC8\xCB\x07" +
    "\x07\x02\x02\xC9\xCC\x07\x06\x02\x02\xCA\xCC\x05\b\x05\x02\xCB\xC9\x03" +
    "\x02\x02\x02\xCB\xCA\x03\x02\x02\x02\xCC\x05\x03\x02\x02\x02\xCD\xD2\x05" +
    "\x04\x03\x02\xCE\xCF\x07\r\x02\x02\xCF\xD1\x05\x04\x03\x02\xD0\xCE\x03" +
    "\x02\x02\x02\xD1\xD4\x03\x02\x02\x02\xD2\xD0\x03\x02\x02\x02\xD2\xD3\x03" +
    "\x02\x02\x02\xD3\x07\x03\x02\x02\x02\xD4\xD2\x03\x02\x02\x02\xD5\xDA\x05" +
    "\f\x07\x02\xD6\xDA\x05\x0E\b\x02\xD7\xDA\x05\n\x06\x02\xD8\xDA\x07G\x02" +
    "\x02\xD9\xD5\x03\x02\x02\x02\xD9\xD6\x03\x02\x02\x02\xD9\xD7\x03\x02\x02" +
    "\x02\xD9\xD8\x03\x02\x02\x02\xDA\t\x03\x02\x02\x02\xDB\xE1\x05*\x16\x02" +
    "\xDC\xDE\x07\x0E\x02\x02\xDD\xDF\x05\xAEX\x02\xDE\xDD\x03\x02\x02\x02" +
    "\xDE\xDF\x03\x02\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0\xE2\x05\xB0Y\x02" +
    "\xE1\xDC\x03\x02\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3\xE1\x03\x02\x02\x02" +
    "\xE3\xE4\x03\x02\x02\x02\xE4\v\x03\x02\x02\x02\xE5\xE6\x05\x0E\b\x02\xE6" +
    "\xE7\x07\f\x02\x02\xE7\xE8\x05\x98M\x02\xE8\r\x03\x02\x02\x02\xE9\xEC" +
    "\x05\x12\n\x02\xEA\xEC\x05*\x16\x02\xEB\xE9\x03\x02\x02\x02\xEB\xEA\x03" +
    "\x02\x02\x02\xEC\x0F\x03\x02\x02\x02\xED\xEF\x05\x1A\x0E\x02\xEE\xED\x03" +
    "\x02\x02\x02\xEE\xEF\x03\x02\x02\x02\xEF\xF5\x03\x02\x02\x02\xF0\xF6\x05" +
    "\x1E\x10\x02\xF1\xF2\x07\n\x02\x02\xF2\xF3\x05\b\x05\x02\xF3\xF4\x07\v" +
    "\x02\x02\xF4\xF6\x03\x02\x02\x02\xF5\xF0\x03\x02\x02\x02\xF5\xF1\x03\x02" +
    "\x02\x02\xF6\x11\x03\x02\x02\x02\xF7\xFB\x05(\x15\x02\xF8\xFB\x05\x14" +
    "\v\x02\xF9\xFB\x05\x16\f\x02\xFA\xF7\x03\x02\x02\x02\xFA\xF8\x03\x02\x02" +
    "\x02\xFA\xF9\x03\x02\x02\x02\xFB\x13\x03\x02\x02\x02\xFC\xFF\x05*\x16" +
    "\x02\xFD\xFE\x07\x13\x02\x02\xFE\u0100\x05*\x16\x02\xFF\xFD\x03\x02\x02" +
    "\x02\u0100\u0101\x03\x02\x02\x02\u0101\xFF\x03\x02\x02\x02\u0101\u0102" +
    "\x03\x02\x02\x02\u0102\x15\x03\x02\x02\x02\u0103\u0104\x05*\x16\x02\u0104" +
    "\u0105\x07\x14\x02\x02\u0105\u0106\x05*\x16\x02\u0106\x17\x03\x02\x02" +
    "\x02\u0107\u0109\x05\x1C\x0F\x02\u0108\u010A\x07\x0F\x02\x02\u0109\u0108" +
    "\x03\x02\x02\x02\u0109\u010A\x03\x02\x02\x02\u010A\x19\x03\x02\x02\x02" +
    "\u010B\u010C\t\x03\x02\x02\u010C\x1B\x03\x02\x02\x02\u010D\u0110\x07\"" +
    "\x02\x02\u010E\u0110\x07\x06\x02\x02\u010F\u010D\x03\x02\x02\x02\u010F" +
    "\u010E\x03\x02\x02\x02\u0110\x1D\x03\x02\x02\x02\u0111\u0116\x05 \x11" +
    "\x02\u0112\u0117\x05\x18\r\x02\u0113\u0117\x07\x1B\x02\x02\u0114\u0117" +
    "\x070\x02\x02\u0115\u0117\x05\"\x12\x02\u0116\u0112\x03\x02\x02\x02\u0116" +
    "\u0113\x03\x02\x02\x02\u0116\u0114\x03\x02\x02\x02\u0116\u0115\x03\x02" +
    "\x02\x02\u0117\u0119\x03\x02\x02\x02\u0118\u011A\x058\x1D\x02\u0119\u0118" +
    "\x03\x02\x02\x02\u0119\u011A\x03\x02\x02\x02\u011A\u0122\x03\x02\x02\x02" +
    "\u011B\u0120\x05\x18\r\x02\u011C\u0120\x07\x1B\x02\x02\u011D\u0120\x07" +
    "0\x02\x02\u011E\u0120\x05\"\x12\x02\u011F\u011B\x03\x02\x02\x02\u011F" +
    "\u011C\x03\x02\x02\x02\u011F\u011D\x03\x02\x02\x02\u011F\u011E\x03\x02" +
    "\x02\x02\u0120\u0122\x03\x02\x02\x02\u0121\u0111\x03\x02\x02\x02\u0121" +
    "\u011F\x03\x02\x02\x02\u0122\x1F\x03\x02\x02\x02\u0123\u012A\x07\x1F\x02" +
    "\x02\u0124\u0127\x071\x02\x02\u0125\u0128\x05L\'\x02\u0126\u0128\x07L" +
    "\x02\x02\u0127\u0125\x03\x02\x02\x02\u0127\u0126\x03\x02\x02\x02\u0128" +
    "\u0129\x03\x02\x02\x02\u0129\u012B\x07H\x02\x02\u012A\u0124\x03\x02\x02" +
    "\x02\u012A\u012B\x03\x02\x02\x02\u012B!\x03\x02\x02\x02\u012C\u012D\x06" +
    "\x12\x02\x02\u012D\u012E\x07\x1E\x02\x02\u012E\u0130\x05$\x13\x02\u012F" +
    "\u0131\x05&\x14\x02\u0130\u012F\x03\x02\x02\x02\u0130\u0131\x03\x02\x02" +
    "\x02\u0131#\x03\x02\x02\x02\u0132\u0133\x07\n\x02\x02\u0133\u0134\x05" +
    "\b\x05\x02\u0134\u0135\x07\v\x02\x02\u0135%\x03\x02\x02\x02\u0136\u0137" +
    "\x07\n\x02\x02\u0137\u0138\x05\b\x05\x02\u0138\u0139\x07\v\x02\x02\u0139" +
    "\'\x03\x02\x02\x02\u013A\u013D\x05*\x16\x02\u013B\u013C\t\x04\x02\x02" +
    "\u013C\u013E\x05*\x16\x02\u013D\u013B\x03\x02\x02\x02\u013E\u013F\x03" +
    "\x02\x02\x02\u013F\u013D\x03\x02\x02\x02\u013F\u0140\x03\x02\x02\x02\u0140" +
    ")\x03\x02\x02\x02\u0141\u0145\x05\x10\t\x02\u0142\u0144\x05,\x17\x02\u0143" +
    "\u0142\x03\x02\x02\x02\u0144\u0147\x03\x02\x02\x02\u0145\u0143\x03\x02" +
    "\x02\x02\u0145\u0146\x03\x02\x02\x02\u0146\u0149\x03\x02\x02\x02\u0147" +
    "\u0145\x03\x02\x02\x02\u0148\u014A\x05.\x18\x02\u0149\u0148\x03\x02\x02" +
    "\x02\u0149\u014A\x03\x02\x02\x02\u014A+\x03\x02\x02\x02\u014B\u014E\x07" +
    ")\x02\x02\u014C\u014F\x054\x1B\x02\u014D\u014F\x056\x1C\x02\u014E\u014C" +
    "\x03\x02\x02\x02\u014E\u014D\x03\x02\x02\x02\u014F\u0150\x03\x02\x02\x02" +
    "\u0150\u0151\x07*\x02\x02\u0151-\x03\x02\x02\x02\u0152\u0153\x07)\x02" +
    "\x02\u0153\u0157\x07-\x02\x02\u0154\u0158\x050\x19\x02\u0155\u0156\x07" +
    "=\x02\x02\u0156\u0158\x052\x1A\x02\u0157\u0154\x03\x02\x02\x02\u0157\u0155" +
    "\x03\x02\x02\x02\u0158\u0159\x03\x02\x02\x02\u0159\u015A\x07*\x02\x02" +
    "\u015A/\x03\x02\x02\x02\u015B\u015C\t\x05\x02\x02\u015C1\x03\x02\x02\x02" +
    "\u015D\u015E\x07\n\x02\x02\u015E\u015F\x05\b\x05\x02\u015F\u0160\x07\v" +
    "\x02\x02\u01603\x03\x02\x02\x02\u0161\u0163\x07C\x02\x02\u0162\u0161\x03" +
    "\x02\x02\x02\u0162\u0163\x03\x02\x02\x02\u0163\u0164\x03\x02\x02\x02\u0164" +
    "\u0169\x05:\x1E\x02\u0165\u0166\x07\r\x02\x02\u0166\u0168\x05:\x1E\x02" +
    "\u0167\u0165\x03\x02\x02\x02\u0168\u016B\x03\x02\x02\x02\u0169\u0167\x03" +
    "\x02\x02\x02\u0169\u016A\x03\x02\x02\x02\u016A5\x03\x02\x02\x02\u016B" +
    "\u0169\x03\x02\x02\x02\u016C\u016D\x07D\x02\x02\u016D\u0172\x05<\x1F\x02" +
    "\u016E\u016F\x07\r\x02\x02\u016F\u0171\x05<\x1F\x02\u0170\u016E\x03\x02" +
    "\x02\x02\u0171\u0174\x03\x02\x02\x02\u0172\u0170\x03\x02\x02\x02\u0172" +
    "\u0173\x03\x02\x02\x02\u01737\x03\x02\x02\x02\u0174\u0172\x03\x02\x02" +
    "\x02\u0175\u0176\x07)\x02\x02\u0176\u0177\x07E\x02\x02\u0177\u017C\x05" +
    "> \x02\u0178\u0179\x07\r\x02\x02\u0179\u017B\x05> \x02\u017A\u0178\x03" +
    "\x02\x02\x02\u017B\u017E\x03\x02\x02\x02\u017C\u017A\x03\x02\x02\x02\u017C" +
    "\u017D\x03\x02\x02\x02\u017D\u017F\x03\x02\x02\x02\u017E\u017C\x03\x02" +
    "\x02\x02\u017F\u0180\x07*\x02\x02\u01809\x03\x02\x02\x02\u0181\u0189\x05" +
    "N(\x02\u0182\u0189\x05P)\x02\u0183\u0189\x05V,\x02\u0184\u0189\x05`1\x02" +
    "\u0185\u0189\x05t;\x02\u0186\u0189\x05v<\x02\u0187\u0189\x05x=\x02\u0188" +
    "\u0181\x03\x02\x02\x02\u0188\u0182\x03\x02\x02\x02\u0188\u0183\x03\x02" +
    "\x02\x02\u0188\u0184\x03\x02\x02\x02\u0188\u0185\x03\x02\x02\x02\u0188" +
    "\u0186\x03\x02\x02\x02\u0188\u0187\x03\x02\x02\x02\u0189;\x03\x02\x02" +
    "\x02\u018A\u0190\x05z>\x02\u018B\u0190\x05\x80A\x02\u018C\u0190\x05\x82" +
    "B\x02\u018D\u0190\x05\x84C\x02\u018E\u0190\x05\x86D\x02\u018F\u018A\x03" +
    "\x02\x02\x02\u018F\u018B\x03\x02\x02\x02\u018F\u018C\x03\x02\x02\x02\u018F" +
    "\u018D\x03\x02\x02\x02\u018F\u018E\x03\x02\x02\x02\u0190=\x03\x02\x02" +
    "\x02\u0191\u0197\x05@!\x02\u0192\u0197\x05B\"\x02\u0193\u0197\x05D#\x02" +
    "\u0194\u0197\x05F$\x02\u0195\u0197\x05H%\x02\u0196\u0191\x03\x02\x02\x02" +
    "\u0196\u0192\x03\x02\x02\x02\u0196\u0193\x03\x02\x02\x02\u0196\u0194\x03" +
    "\x02\x02\x02\u0196\u0195\x03\x02\x02\x02\u0197?\x03\x02\x02\x02\u0198" +
    "\u0199\x05J&\x02\u0199\u019A\x05\xBA^\x02\u019A\u019B\x05*\x16\x02\u019B" +
    "A\x03\x02\x02\x02\u019C\u019D\x05J&\x02\u019D\u019E\x05\xB8]\x02\u019E" +
    "\u019F\x07/\x02\x02\u019FC\x03\x02\x02\x02\u01A0\u01A1\x05J&\x02\u01A1" +
    "\u01A4\x05\xB4[\x02\u01A2\u01A5\x05\x90I\x02\u01A3\u01A5\x05\x92J\x02" +
    "\u01A4\u01A2\x03\x02\x02\x02\u01A4\u01A3\x03\x02\x02\x02\u01A5E\x03\x02" +
    "\x02\x02\u01A6\u01A7\x05J&\x02\u01A7\u01A8\x05\xB4[\x02\u01A8\u01A9\t" +
    "\x06\x02\x02\u01A9G\x03\x02\x02\x02\u01AA\u01AB\x05J&\x02\u01AB\u01AE" +
    "\x05\xB6\\\x02\u01AC\u01AF\x05\x8CG\x02\u01AD\u01AF\x05\x8EH\x02\u01AE" +
    "\u01AC\x03\x02\x02\x02\u01AE\u01AD\x03\x02\x02\x02\u01AFI\x03\x02\x02" +
    "\x02\u01B0\u01B1\t\x07\x02\x02\u01B1K\x03\x02\x02\x02\u01B2\u01B7\x05" +
    "J&\x02\u01B3\u01B4\x07\r\x02\x02\u01B4\u01B6\x05J&\x02\u01B5\u01B3\x03" +
    "\x02\x02\x02\u01B6\u01B9\x03\x02\x02\x02\u01B7\u01B5\x03\x02\x02\x02\u01B7" +
    "\u01B8\x03\x02\x02\x02\u01B8M\x03\x02\x02\x02\u01B9\u01B7\x03\x02\x02" +
    "\x02\u01BA\u01BB\x072\x02\x02\u01BB\u01BE\x05\xB4[\x02\u01BC\u01BF\x05" +
    "\x90I\x02\u01BD\u01BF\x05\x92J\x02\u01BE\u01BC\x03\x02\x02\x02\u01BE\u01BD" +
    "\x03\x02\x02\x02\u01BFO\x03\x02\x02\x02\u01C0\u01C1\x07Q\x02\x02\u01C1" +
    "\u01C4\x05\xB4[\x02\u01C2\u01C5\x05T+\x02\u01C3\u01C5\x05R*\x02\u01C4" +
    "\u01C2\x03\x02\x02\x02\u01C4\u01C3\x03\x02\x02\x02\u01C5Q\x03\x02\x02" +
    "\x02\u01C6\u01C8\x07\n\x02\x02\u01C7\u01C9\x05T+\x02\u01C8\u01C7\x03\x02" +
    "\x02\x02\u01C9\u01CA\x03\x02\x02\x02\u01CA\u01C8\x03\x02\x02\x02\u01CA" +
    "\u01CB\x03\x02\x02\x02\u01CB\u01CC\x03\x02\x02\x02\u01CC\u01CD\x07\v\x02" +
    "\x02\u01CDS\x03\x02\x02\x02\u01CE\u01CF\x07R\x02\x02\u01CFU\x03\x02\x02" +
    "\x02\u01D0\u01D3\x05X-\x02\u01D1\u01D3\x05Z.\x02\u01D2\u01D0\x03\x02\x02" +
    "\x02\u01D2\u01D1\x03\x02\x02\x02\u01D3W\x03\x02\x02\x02\u01D4\u01D5\x07" +
    "S\x02\x02\u01D5\u01D8\x05\xB4[\x02\u01D6\u01D9\x05*\x16\x02\u01D7\u01D9" +
    "\x05\x96L\x02\u01D8\u01D6\x03\x02\x02\x02\u01D8\u01D7\x03\x02\x02\x02" +
    "\u01D9Y\x03\x02\x02\x02\u01DA\u01DB\x07T\x02\x02\u01DB\u01DE\x05\xB4[" +
    "\x02\u01DC\u01DF\x05^0\x02\u01DD\u01DF\x05\\/\x02\u01DE\u01DC\x03\x02" +
    "\x02\x02\u01DE\u01DD\x03\x02\x02\x02\u01DF[\x03\x02\x02\x02\u01E0\u01E2" +
    "\x07\n\x02\x02\u01E1\u01E3\x05^0\x02\u01E2\u01E1\x03\x02\x02\x02\u01E3" +
    "\u01E4\x03\x02\x02\x02\u01E4\u01E2\x03\x02\x02\x02\u01E4\u01E5\x03\x02" +
    "\x02\x02\u01E5\u01E6\x03\x02\x02\x02\u01E6\u01E7\x07\v\x02\x02\u01E7]" +
    "\x03\x02\x02\x02\u01E8\u01E9\t\b\x02\x02\u01E9_\x03\x02\x02\x02\u01EA" +
    "\u01ED\x05b2\x02\u01EB\u01ED\x05h5\x02\u01EC\u01EA\x03\x02\x02\x02\u01EC" +
    "\u01EB\x03\x02\x02\x02\u01ED\u01EF\x03\x02\x02\x02\u01EE\u01F0\x05l7\x02" +
    "\u01EF\u01EE\x03\x02\x02\x02\u01EF\u01F0\x03\x02\x02\x02\u01F0a\x03\x02" +
    "\x02\x02\u01F1\u01F2\x07X\x02\x02\u01F2\u01F5\x05\xB4[\x02\u01F3\u01F6" +
    "\x05d3\x02\u01F4\u01F6\x05f4\x02\u01F5\u01F3\x03\x02\x02\x02\u01F5\u01F4" +
    "\x03\x02\x02\x02\u01F6c\x03\x02\x02\x02\u01F7\u01F8\x07Y\x02\x02\u01F8" +
    "e\x03\x02\x02\x02\u01F9\u01FE\x07\n\x02\x02\u01FA\u01FC\x05d3\x02\u01FB" +
    "\u01FD\x05l7\x02\u01FC\u01FB\x03\x02\x02\x02\u01FC\u01FD\x03\x02\x02\x02" +
    "\u01FD\u01FF\x03\x02\x02\x02\u01FE\u01FA\x03\x02\x02\x02\u01FF\u0200\x03" +
    "\x02\x02\x02\u0200\u01FE\x03\x02\x02\x02\u0200\u0201\x03\x02\x02\x02\u0201" +
    "\u0202\x03\x02\x02\x02\u0202\u0203\x07\v\x02\x02\u0203g\x03\x02\x02\x02" +
    "\u0204\u0205\x07Z\x02\x02\u0205\u0208\x05\xB4[\x02\u0206\u0209\x05*\x16" +
    "\x02\u0207\u0209\x05j6\x02\u0208\u0206\x03\x02\x02\x02\u0208\u0207\x03" +
    "\x02\x02\x02\u0209i\x03\x02\x02\x02\u020A\u020F\x07\n\x02\x02\u020B\u020D" +
    "\x05\x18\r\x02\u020C\u020E\x05l7\x02\u020D\u020C\x03\x02\x02\x02\u020D" +
    "\u020E\x03\x02\x02\x02\u020E\u0210\x03\x02\x02\x02\u020F\u020B\x03\x02" +
    "\x02\x02\u0210\u0211\x03\x02\x02\x02\u0211\u020F\x03\x02\x02\x02\u0211" +
    "\u0212\x03\x02\x02\x02\u0212\u0213\x03\x02\x02\x02\u0213\u0214\x07\v\x02" +
    "\x02\u0214k\x03\x02\x02\x02\u0215\u0218\x05n8\x02\u0216\u0218\x05p9\x02" +
    "\u0217\u0215\x03\x02\x02\x02\u0217\u0216\x03\x02\x02\x02\u0218m\x03\x02" +
    "\x02\x02\u0219\u021B\x07\n\x02\x02\u021A\u021C\x05\x18\r\x02\u021B\u021A" +
    "\x03\x02\x02\x02\u021C\u021D\x03\x02\x02\x02\u021D\u021B\x03\x02\x02\x02";
  private static readonly _serializedATNSegment1: string =
    "\u021D\u021E\x03\x02\x02\x02\u021E\u021F\x03\x02\x02\x02\u021F\u0220\x07" +
    "\v\x02\x02\u0220o\x03\x02\x02\x02\u0221\u0223\x07\n\x02\x02\u0222\u0224" +
    "\x05r:\x02\u0223\u0222\x03\x02\x02\x02\u0224\u0225\x03\x02\x02\x02\u0225" +
    "\u0223\x03\x02\x02\x02\u0225\u0226\x03\x02\x02\x02\u0226\u0227\x03\x02" +
    "\x02\x02\u0227\u0228\x07\v\x02\x02\u0228q\x03\x02\x02\x02\u0229\u022A" +
    "\t\t\x02\x02\u022As\x03\x02\x02\x02\u022B\u022C\x076\x02\x02\u022C\u022F" +
    "\x05\xB4[\x02\u022D\u0230\x05*\x16\x02\u022E\u0230\x05\x96L\x02\u022F" +
    "\u022D\x03\x02\x02\x02\u022F\u022E\x03\x02\x02\x02\u0230u\x03\x02\x02" +
    "\x02\u0231\u0232\x077\x02\x02\u0232\u0235\x05\xB6\\\x02\u0233\u0236\x05" +
    "\x8CG\x02\u0234\u0236\x05\x8EH\x02\u0235\u0233\x03\x02\x02\x02\u0235\u0234" +
    "\x03\x02\x02\x02\u0236w\x03\x02\x02\x02\u0237\u0238\x073\x02\x02\u0238" +
    "\u023B\x05\xB4[\x02\u0239\u023C\x05|?\x02\u023A\u023C\x05~@\x02\u023B" +
    "\u0239\x03\x02\x02\x02\u023B\u023A\x03\x02\x02\x02\u023Cy\x03\x02\x02" +
    "\x02\u023D\u023E\x073\x02\x02\u023E\u0241\x05\xB4[\x02\u023F\u0242\x05" +
    "|?\x02\u0240\u0242\x05~@\x02\u0241\u023F\x03\x02\x02\x02\u0241\u0240\x03" +
    "\x02\x02\x02\u0242{\x03\x02\x02\x02\u0243\u0244\t\n\x02\x02\u0244}\x03" +
    "\x02\x02\x02\u0245\u0246\t\v\x02\x02\u0246\x7F\x03\x02\x02\x02\u0247\u0248" +
    "\x076\x02\x02\u0248\u024B\x05\xB4[\x02\u0249\u024C\x05*\x16\x02\u024A" +
    "\u024C\x05\x96L\x02\u024B\u0249\x03\x02\x02\x02\u024B\u024A\x03\x02\x02" +
    "\x02\u024C\x81\x03\x02\x02\x02\u024D\u024E\x075\x02\x02\u024E\u0251\x05" +
    "\xB4[\x02\u024F\u0252\x05\x88E\x02\u0250\u0252\x05\x8AF\x02\u0251\u024F" +
    "\x03\x02\x02\x02\u0251\u0250\x03\x02\x02\x02\u0252\x83\x03\x02\x02\x02" +
    "\u0253\u0254\x074\x02\x02\u0254\u0257\x05\xB4[\x02\u0255\u0258\x05*\x16" +
    "\x02\u0256\u0258\x05\x96L\x02\u0257\u0255\x03\x02\x02\x02\u0257\u0256" +
    "\x03\x02\x02\x02\u0258\x85\x03\x02\x02\x02\u0259\u025A\x077\x02\x02\u025A" +
    "\u025D\x05\xB6\\\x02\u025B\u025E\x05\x8CG\x02\u025C\u025E\x05\x8EH\x02" +
    "\u025D\u025B\x03\x02\x02\x02\u025D\u025C\x03\x02\x02\x02\u025E\x87\x03" +
    "\x02\x02\x02\u025F\u0260\t\f\x02\x02\u0260\x89\x03\x02\x02\x02\u0261\u0263" +
    "\x07\n\x02\x02\u0262\u0264\x05\x88E\x02\u0263\u0262\x03\x02\x02\x02\u0264" +
    "\u0265\x03\x02\x02\x02\u0265\u0263\x03\x02\x02\x02\u0265\u0266\x03\x02" +
    "\x02\x02\u0266\u0267\x03\x02\x02\x02\u0267\u0268\x07\v\x02\x02\u0268\x8B" +
    "\x03\x02\x02\x02\u0269\u026A\x07\x1C\x02\x02\u026A\x8D\x03\x02\x02\x02" +
    "\u026B\u0275\x03\x02\x02\x02\u026C\u026E\x07\n\x02\x02\u026D\u026F\x05" +
    "\x8CG\x02\u026E\u026D\x03\x02\x02\x02\u026F\u0270\x03\x02\x02\x02\u0270" +
    "\u026E\x03\x02\x02\x02\u0270\u0271\x03\x02\x02\x02\u0271\u0272\x03\x02" +
    "\x02\x02\u0272\u0273\x07\v\x02\x02\u0273\u0275\x03\x02\x02\x02\u0274\u026B" +
    "\x03\x02\x02\x02\u0274\u026C\x03\x02\x02\x02\u0275\x8F\x03\x02\x02\x02" +
    "\u0276\u0277\t\r\x02\x02\u0277\u0279\x07\f\x02\x02\u0278\u0276\x03\x02" +
    "\x02\x02\u0278\u0279\x03\x02\x02\x02\u0279\u027A\x03\x02\x02\x02\u027A" +
    "\u027B\x05\x94K\x02\u027B\x91\x03\x02\x02\x02\u027C\u027E\x07\n\x02\x02" +
    "\u027D\u027F\x05\x90I\x02\u027E\u027D\x03\x02\x02\x02\u027F\u0280\x03" +
    "\x02\x02\x02\u0280\u027E\x03\x02\x02\x02\u0280\u0281\x03\x02\x02\x02\u0281" +
    "\u0282\x03\x02\x02\x02\u0282\u0283\x07\v\x02\x02\u0283\x93\x03\x02\x02" +
    "\x02\u0284\u0285\t\x0E\x02\x02\u0285\x95\x03\x02\x02\x02\u0286\u0287\x07" +
    "\n\x02\x02\u0287\u0289\x05\x18\r\x02\u0288\u028A\x05\x18\r\x02\u0289\u0288" +
    "\x03\x02\x02\x02\u028A\u028B\x03\x02\x02\x02\u028B\u0289\x03\x02\x02\x02" +
    "\u028B\u028C\x03\x02\x02\x02\u028C\u028D\x03\x02\x02\x02\u028D\u028E\x07" +
    "\v\x02\x02\u028E\x97\x03\x02\x02\x02\u028F\u0293\x05\x9EP\x02\u0290\u0293" +
    "\x05\x9AN\x02\u0291\u0293\x05\x9CO\x02\u0292\u028F\x03\x02\x02\x02\u0292" +
    "\u0290\x03\x02\x02\x02\u0292\u0291\x03\x02\x02\x02\u0293\x99\x03\x02\x02" +
    "\x02\u0294\u0297\x05\x9EP\x02\u0295\u0296\t\x04\x02\x02\u0296\u0298\x05" +
    "\x9EP\x02\u0297\u0295\x03\x02\x02\x02\u0298\u0299\x03\x02\x02\x02\u0299" +
    "\u0297\x03\x02\x02\x02\u0299\u029A\x03\x02\x02\x02\u029A\x9B\x03\x02\x02" +
    "\x02\u029B\u029E\x05\x9EP\x02\u029C\u029D\x07\x13\x02\x02\u029D\u029F" +
    "\x05\x9EP\x02\u029E\u029C\x03\x02\x02\x02\u029F\u02A0\x03\x02\x02\x02" +
    "\u02A0\u029E\x03\x02\x02\x02\u02A0\u02A1\x03\x02\x02\x02\u02A1\x9D\x03" +
    "\x02\x02\x02\u02A2\u02A9\x05\xA2R\x02\u02A3\u02A9\x05\xA0Q\x02\u02A4\u02A5" +
    "\x07\n\x02\x02\u02A5\u02A6\x05\x98M\x02\u02A6\u02A7\x07\v\x02\x02\u02A7" +
    "\u02A9\x03\x02\x02\x02\u02A8\u02A2\x03\x02\x02\x02\u02A8\u02A3\x03\x02" +
    "\x02\x02\u02A8\u02A4\x03\x02\x02\x02\u02A9\x9F\x03\x02\x02\x02\u02AA\u02AC" +
    "\x05\xACW\x02\u02AB\u02AA\x03\x02\x02\x02\u02AB\u02AC\x03\x02\x02\x02" +
    "\u02AC\u02AD\x03\x02\x02\x02\u02AD\u02AE\x07+\x02\x02\u02AE\u02AF\x05" +
    "\xA2R\x02\u02AF\u02B0\x07,\x02\x02\u02B0\xA1\x03\x02\x02\x02\u02B1\u02B5" +
    "\x05\xA8U\x02\u02B2\u02B5\x05\xA4S\x02\u02B3\u02B5\x05\xA6T\x02\u02B4" +
    "\u02B1\x03\x02\x02\x02\u02B4\u02B2\x03\x02\x02\x02\u02B4\u02B3\x03\x02" +
    "\x02\x02\u02B5\xA3\x03\x02\x02\x02\u02B6\u02B9\x05\xA8U\x02\u02B7\u02B8" +
    "\t\x04\x02\x02\u02B8\u02BA\x05\xA8U\x02\u02B9\u02B7\x03\x02\x02\x02\u02BA" +
    "\u02BB\x03\x02\x02\x02\u02BB\u02B9\x03\x02\x02\x02\u02BB\u02BC\x03\x02" +
    "\x02\x02\u02BC\xA5\x03\x02\x02\x02\u02BD\u02C0\x05\xA8U\x02\u02BE\u02BF" +
    "\x07\x13\x02\x02\u02BF\u02C1\x05\xA8U\x02\u02C0\u02BE\x03\x02\x02\x02" +
    "\u02C1\u02C2\x03\x02\x02\x02\u02C2\u02C0\x03\x02\x02\x02\u02C2\u02C3\x03" +
    "\x02\x02\x02\u02C3\xA7\x03\x02\x02\x02\u02C4\u02CA\x05\xAAV\x02\u02C5" +
    "\u02C6\x07\n\x02\x02\u02C6\u02C7\x05\xA2R\x02\u02C7\u02C8\x07\v\x02\x02" +
    "\u02C8\u02CA\x03\x02\x02\x02\u02C9\u02C4\x03\x02\x02\x02\u02C9\u02C5\x03" +
    "\x02\x02\x02\u02CA\xA9\x03\x02\x02\x02\u02CB\u02CD\x05\xACW\x02\u02CC" +
    "\u02CB\x03\x02\x02\x02\u02CC\u02CD\x03\x02\x02\x02\u02CD\u02CF\x03\x02" +
    "\x02\x02\u02CE\u02D0\x07#\x02\x02\u02CF\u02CE\x03\x02\x02\x02\u02CF\u02D0" +
    "\x03\x02\x02\x02\u02D0\u02D2\x03\x02\x02\x02\u02D1\u02D3\x05\xAEX\x02" +
    "\u02D2\u02D1\x03\x02\x02\x02\u02D2\u02D3\x03\x02\x02\x02\u02D3\u02D4\x03" +
    "\x02\x02\x02\u02D4\u02DB\x05\xB0Y\x02\u02D5\u02D6\x05\xB8]\x02\u02D6\u02D7" +
    "\x05\xBC_\x02\u02D7\u02DC\x03\x02\x02\x02\u02D8\u02D9\x05\xBA^\x02\u02D9" +
    "\u02DA\x05\xB2Z\x02\u02DA\u02DC\x03\x02\x02\x02\u02DB\u02D5\x03\x02\x02" +
    "\x02\u02DB\u02D8\x03\x02\x02\x02\u02DC\xAB\x03\x02\x02\x02\u02DD\u02DE" +
    "\x071\x02\x02\u02DE\u02DF\x07J\x02\x02\u02DF\u02E0\x07K\x02\x02\u02E0" +
    "\u02E1\t\x0F\x02\x02\u02E1\u02E2\x07H\x02\x02\u02E2\xAD\x03\x02\x02\x02" +
    "\u02E3\u02E4\x05\x1A\x0E\x02\u02E4\xAF\x03\x02\x02\x02\u02E5\u02E6\x05" +
    "\x10\t\x02\u02E6\xB1\x03\x02\x02\x02\u02E7\u02E8\x05\x10\t\x02\u02E8\xB3" +
    "\x03\x02\x02\x02\u02E9\u02EA\t\x10\x02\x02\u02EA\xB5\x03\x02\x02\x02\u02EB" +
    "\u02EC\t\x11\x02\x02\u02EC\xB7\x03\x02\x02\x02\u02ED\u02EE\t\x11\x02\x02" +
    "\u02EE\xB9\x03\x02\x02\x02\u02EF\u02F0\t\x10\x02\x02\u02F0\xBB\x03\x02" +
    "\x02\x02\u02F1\u02F4\x05\x94K\x02\u02F2\u02F4\x07/\x02\x02\u02F3\u02F1" +
    "\x03\x02\x02\x02\u02F3\u02F2\x03\x02\x02\x02\u02F4\xBD\x03\x02\x02\x02" +
    "S\xC2\xCB\xD2\xD9\xDE\xE3\xEB\xEE\xF5\xFA\u0101\u0109\u010F\u0116\u0119" +
    "\u011F\u0121\u0127\u012A\u0130\u013F\u0145\u0149\u014E\u0157\u0162\u0169" +
    "\u0172\u017C\u0188\u018F\u0196\u01A4\u01AE\u01B7\u01BE\u01C4\u01CA\u01D2" +
    "\u01D8\u01DE\u01E4\u01EC\u01EF\u01F5\u01FC\u0200\u0208\u020D\u0211\u0217" +
    "\u021D\u0225\u022F\u0235\u023B\u0241\u024B\u0251\u0257\u025D\u0265\u0270" +
    "\u0274\u0278\u0280\u028B\u0292\u0299\u02A0\u02A8\u02AB\u02B4\u02BB\u02C2" +
    "\u02C9\u02CC\u02CF\u02D2\u02DB\u02F3";
  public static readonly _serializedATN: string = Utils.join(
    [
      SctExpressionConstraintGrammar._serializedATNSegment0,
      SctExpressionConstraintGrammar._serializedATNSegment1
    ],
    ""
  );
  public static __ATN: ATN;
  public static get _ATN(): ATN {
    if (!SctExpressionConstraintGrammar.__ATN) {
      SctExpressionConstraintGrammar.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SctExpressionConstraintGrammar._serializedATN));
    }

    return SctExpressionConstraintGrammar.__ATN;
  }

}

export class EQueryContext extends ParserRuleContext {
  public expressionConstraint(): ExpressionConstraintContext {
    return this.getRuleContext(0, ExpressionConstraintContext);
  }

  public EOF(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.EOF, 0);
  }

  public LET(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.LET, 0);
  }

  public eLets(): ELetsContext | undefined {
    return this.tryGetRuleContext(0, ELetsContext);
  }

  public IN(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.IN, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_eQuery;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterEQuery) {
      listener.enterEQuery(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitEQuery) {
      listener.exitEQuery(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitEQuery) {
      return visitor.visitEQuery(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class ELetContext extends ParserRuleContext {
  public _id!: Token;
  public _url!: Token;
  public _expr!: ExpressionConstraintContext;

  public EQ(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.EQ, 0);
  }

  public ALPHA_ID(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.ALPHA_ID, 0);
  }

  public ID(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.ID, 0);
  }

  public URI(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.URI, 0);
  }

  public expressionConstraint(): ExpressionConstraintContext | undefined {
    return this.tryGetRuleContext(0, ExpressionConstraintContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_eLet;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterELet) {
      listener.enterELet(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitELet) {
      listener.exitELet(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitELet) {
      return visitor.visitELet(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class ELetsContext extends ParserRuleContext {
  public eLet(): ELetContext[];
  public eLet(i: number): ELetContext;
  public eLet(i?: number): ELetContext | ELetContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ELetContext);
    } else {
      return this.getRuleContext(i, ELetContext);
    }
  }

  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(SctExpressionConstraintGrammar.COMMA);
    } else {
      return this.getToken(SctExpressionConstraintGrammar.COMMA, i);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_eLets;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterELets) {
      listener.enterELets(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitELets) {
      listener.exitELets(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitELets) {
      return visitor.visitELets(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class ExpressionConstraintContext extends ParserRuleContext {
  public refinedExpressionConstraint(): RefinedExpressionConstraintContext | undefined {
    return this.tryGetRuleContext(0, RefinedExpressionConstraintContext);
  }

  public unrefinedExpressionConstraint(): UnrefinedExpressionConstraintContext | undefined {
    return this.tryGetRuleContext(0, UnrefinedExpressionConstraintContext);
  }

  public dottedExpressionConstraint(): DottedExpressionConstraintContext | undefined {
    return this.tryGetRuleContext(0, DottedExpressionConstraintContext);
  }

  public ID(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.ID, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_expressionConstraint;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterExpressionConstraint) {
      listener.enterExpressionConstraint(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitExpressionConstraint) {
      listener.exitExpressionConstraint(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitExpressionConstraint) {
      return visitor.visitExpressionConstraint(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class DottedExpressionConstraintContext extends ParserRuleContext {
  public subExpressionConstraint(): SubExpressionConstraintContext {
    return this.getRuleContext(0, SubExpressionConstraintContext);
  }

  public DOT(): TerminalNode[];
  public DOT(i: number): TerminalNode;
  public DOT(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(SctExpressionConstraintGrammar.DOT);
    } else {
      return this.getToken(SctExpressionConstraintGrammar.DOT, i);
    }
  }

  public attributeName(): AttributeNameContext[];
  public attributeName(i: number): AttributeNameContext;
  public attributeName(i?: number): AttributeNameContext | AttributeNameContext[] {
    if (i === undefined) {
      return this.getRuleContexts(AttributeNameContext);
    } else {
      return this.getRuleContext(i, AttributeNameContext);
    }
  }

  public attributeOperator(): AttributeOperatorContext[];
  public attributeOperator(i: number): AttributeOperatorContext;
  public attributeOperator(i?: number): AttributeOperatorContext | AttributeOperatorContext[] {
    if (i === undefined) {
      return this.getRuleContexts(AttributeOperatorContext);
    } else {
      return this.getRuleContext(i, AttributeOperatorContext);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_dottedExpressionConstraint;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterDottedExpressionConstraint) {
      listener.enterDottedExpressionConstraint(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitDottedExpressionConstraint) {
      listener.exitDottedExpressionConstraint(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitDottedExpressionConstraint) {
      return visitor.visitDottedExpressionConstraint(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class RefinedExpressionConstraintContext extends ParserRuleContext {
  public unrefinedExpressionConstraint(): UnrefinedExpressionConstraintContext {
    return this.getRuleContext(0, UnrefinedExpressionConstraintContext);
  }

  public COLON(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.COLON, 0);
  }

  public refinement(): RefinementContext {
    return this.getRuleContext(0, RefinementContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_refinedExpressionConstraint;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterRefinedExpressionConstraint) {
      listener.enterRefinedExpressionConstraint(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitRefinedExpressionConstraint) {
      listener.exitRefinedExpressionConstraint(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitRefinedExpressionConstraint) {
      return visitor.visitRefinedExpressionConstraint(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class UnrefinedExpressionConstraintContext extends ParserRuleContext {
  public compoundExpressionConstraint(): CompoundExpressionConstraintContext | undefined {
    return this.tryGetRuleContext(0, CompoundExpressionConstraintContext);
  }

  public subExpressionConstraint(): SubExpressionConstraintContext | undefined {
    return this.tryGetRuleContext(0, SubExpressionConstraintContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_unrefinedExpressionConstraint;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterUnrefinedExpressionConstraint) {
      listener.enterUnrefinedExpressionConstraint(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitUnrefinedExpressionConstraint) {
      listener.exitUnrefinedExpressionConstraint(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitUnrefinedExpressionConstraint) {
      return visitor.visitUnrefinedExpressionConstraint(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class SimpleExpressionConstraintContext extends ParserRuleContext {
  public focusConcept(): FocusConceptContext | undefined {
    return this.tryGetRuleContext(0, FocusConceptContext);
  }

  public OPEN_ROUND(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.OPEN_ROUND, 0);
  }

  public expressionConstraint(): ExpressionConstraintContext | undefined {
    return this.tryGetRuleContext(0, ExpressionConstraintContext);
  }

  public CLOSE_ROUND(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.CLOSE_ROUND, 0);
  }

  public constraintOperator(): ConstraintOperatorContext | undefined {
    return this.tryGetRuleContext(0, ConstraintOperatorContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_simpleExpressionConstraint;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterSimpleExpressionConstraint) {
      listener.enterSimpleExpressionConstraint(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitSimpleExpressionConstraint) {
      listener.exitSimpleExpressionConstraint(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitSimpleExpressionConstraint) {
      return visitor.visitSimpleExpressionConstraint(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class CompoundExpressionConstraintContext extends ParserRuleContext {
  public conjunctionExpressionConstraint(): ConjunctionExpressionConstraintContext | undefined {
    return this.tryGetRuleContext(0, ConjunctionExpressionConstraintContext);
  }

  public disjunctionExpressionConstraint(): DisjunctionExpressionConstraintContext | undefined {
    return this.tryGetRuleContext(0, DisjunctionExpressionConstraintContext);
  }

  public exclusionExpressionConstraint(): ExclusionExpressionConstraintContext | undefined {
    return this.tryGetRuleContext(0, ExclusionExpressionConstraintContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_compoundExpressionConstraint;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterCompoundExpressionConstraint) {
      listener.enterCompoundExpressionConstraint(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitCompoundExpressionConstraint) {
      listener.exitCompoundExpressionConstraint(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitCompoundExpressionConstraint) {
      return visitor.visitCompoundExpressionConstraint(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class DisjunctionExpressionConstraintContext extends ParserRuleContext {
  public subExpressionConstraint(): SubExpressionConstraintContext[];
  public subExpressionConstraint(i: number): SubExpressionConstraintContext;
  public subExpressionConstraint(i?: number): SubExpressionConstraintContext | SubExpressionConstraintContext[] {
    if (i === undefined) {
      return this.getRuleContexts(SubExpressionConstraintContext);
    } else {
      return this.getRuleContext(i, SubExpressionConstraintContext);
    }
  }

  public OR(): TerminalNode[];
  public OR(i: number): TerminalNode;
  public OR(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(SctExpressionConstraintGrammar.OR);
    } else {
      return this.getToken(SctExpressionConstraintGrammar.OR, i);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_disjunctionExpressionConstraint;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterDisjunctionExpressionConstraint) {
      listener.enterDisjunctionExpressionConstraint(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitDisjunctionExpressionConstraint) {
      listener.exitDisjunctionExpressionConstraint(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitDisjunctionExpressionConstraint) {
      return visitor.visitDisjunctionExpressionConstraint(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class ExclusionExpressionConstraintContext extends ParserRuleContext {
  public subExpressionConstraint(): SubExpressionConstraintContext[];
  public subExpressionConstraint(i: number): SubExpressionConstraintContext;
  public subExpressionConstraint(i?: number): SubExpressionConstraintContext | SubExpressionConstraintContext[] {
    if (i === undefined) {
      return this.getRuleContexts(SubExpressionConstraintContext);
    } else {
      return this.getRuleContext(i, SubExpressionConstraintContext);
    }
  }

  public MINUS(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.MINUS, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_exclusionExpressionConstraint;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterExclusionExpressionConstraint) {
      listener.enterExclusionExpressionConstraint(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitExclusionExpressionConstraint) {
      listener.exitExclusionExpressionConstraint(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitExclusionExpressionConstraint) {
      return visitor.visitExclusionExpressionConstraint(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class ConceptReferenceContext extends ParserRuleContext {
  public conceptId(): ConceptIdContext {
    return this.getRuleContext(0, ConceptIdContext);
  }

  public TERM(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.TERM, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_conceptReference;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterConceptReference) {
      listener.enterConceptReference(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitConceptReference) {
      listener.exitConceptReference(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitConceptReference) {
      return visitor.visitConceptReference(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class ConstraintOperatorContext extends ParserRuleContext {
  public DESCENDANT_OR_SELF_OF(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.DESCENDANT_OR_SELF_OF, 0);
  }

  public LT(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.LT, 0);
  }

  public LONG_LT(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.LONG_LT, 0);
  }

  public ANCESTOR_OR_SELF_OF(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.ANCESTOR_OR_SELF_OF, 0);
  }

  public GT(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.GT, 0);
  }

  public LONG_GT(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.LONG_GT, 0);
  }

  public PARENT_OF(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.PARENT_OF, 0);
  }

  public CHILD_OF(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.CHILD_OF, 0);
  }

  public PARENT_OR_SELF_OF(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.PARENT_OR_SELF_OF, 0);
  }

  public CHILD_OR_SELF_OF(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.CHILD_OR_SELF_OF, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_constraintOperator;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterConstraintOperator) {
      listener.enterConstraintOperator(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitConstraintOperator) {
      listener.exitConstraintOperator(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitConstraintOperator) {
      return visitor.visitConstraintOperator(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class ConceptIdContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_conceptId;
  }

  public copyFrom(ctx: ConceptIdContext): void {
    super.copyFrom(ctx);
  }
}

export class SnomedIdContext extends ConceptIdContext {
  public SCTID(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.SCTID, 0);
  }

  constructor(ctx: ConceptIdContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterSnomedId) {
      listener.enterSnomedId(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitSnomedId) {
      listener.exitSnomedId(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitSnomedId) {
      return visitor.visitSnomedId(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class OtherIdContext extends ConceptIdContext {
  public URI(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.URI, 0);
  }

  constructor(ctx: ConceptIdContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterOtherId) {
      listener.enterOtherId(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitOtherId) {
      listener.exitOtherId(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitOtherId) {
      return visitor.visitOtherId(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class FocusConceptContext extends ParserRuleContext {
  public memberOf(): MemberOfContext | undefined {
    return this.tryGetRuleContext(0, MemberOfContext);
  }

  public conceptReference(): ConceptReferenceContext | undefined {
    return this.tryGetRuleContext(0, ConceptReferenceContext);
  }

  public STAR(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.STAR, 0);
  }

  public REFSETS(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.REFSETS, 0);
  }

  public function(): FunctionContext | undefined {
    return this.tryGetRuleContext(0, FunctionContext);
  }

  public memberFilterConstraint(): MemberFilterConstraintContext | undefined {
    return this.tryGetRuleContext(0, MemberFilterConstraintContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_focusConcept;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterFocusConcept) {
      listener.enterFocusConcept(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitFocusConcept) {
      listener.exitFocusConcept(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitFocusConcept) {
      return visitor.visitFocusConcept(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class MemberOfContext extends ParserRuleContext {
  public CARET(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.CARET, 0);
  }

  public OPEN_SQUARE(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.OPEN_SQUARE, 0);
  }

  public CLOSE_SQUARE(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.CLOSE_SQUARE, 0);
  }

  public refsetFieldNameSet(): RefsetFieldNameSetContext | undefined {
    return this.tryGetRuleContext(0, RefsetFieldNameSetContext);
  }

  public MANY(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.MANY, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_memberOf;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterMemberOf) {
      listener.enterMemberOf(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitMemberOf) {
      listener.exitMemberOf(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitMemberOf) {
      return visitor.visitMemberOf(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class FunctionContext extends ParserRuleContext {
  public MSGA(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.MSGA, 0);
  }

  public from(): FromContext {
    return this.getRuleContext(0, FromContext);
  }

  public scope(): ScopeContext | undefined {
    return this.tryGetRuleContext(0, ScopeContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_function;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterFunction) {
      listener.enterFunction(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitFunction) {
      listener.exitFunction(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitFunction) {
      return visitor.visitFunction(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class FromContext extends ParserRuleContext {
  public OPEN_ROUND(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.OPEN_ROUND, 0);
  }

  public expressionConstraint(): ExpressionConstraintContext {
    return this.getRuleContext(0, ExpressionConstraintContext);
  }

  public CLOSE_ROUND(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.CLOSE_ROUND, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_from;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterFrom) {
      listener.enterFrom(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitFrom) {
      listener.exitFrom(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitFrom) {
      return visitor.visitFrom(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class ScopeContext extends ParserRuleContext {
  public OPEN_ROUND(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.OPEN_ROUND, 0);
  }

  public expressionConstraint(): ExpressionConstraintContext {
    return this.getRuleContext(0, ExpressionConstraintContext);
  }

  public CLOSE_ROUND(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.CLOSE_ROUND, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_scope;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterScope) {
      listener.enterScope(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitScope) {
      listener.exitScope(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitScope) {
      return visitor.visitScope(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class ConjunctionExpressionConstraintContext extends ParserRuleContext {
  public subExpressionConstraint(): SubExpressionConstraintContext[];
  public subExpressionConstraint(i: number): SubExpressionConstraintContext;
  public subExpressionConstraint(i?: number): SubExpressionConstraintContext | SubExpressionConstraintContext[] {
    if (i === undefined) {
      return this.getRuleContexts(SubExpressionConstraintContext);
    } else {
      return this.getRuleContext(i, SubExpressionConstraintContext);
    }
  }

  public AND(): TerminalNode[];
  public AND(i: number): TerminalNode;
  public AND(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(SctExpressionConstraintGrammar.AND);
    } else {
      return this.getToken(SctExpressionConstraintGrammar.AND, i);
    }
  }

  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(SctExpressionConstraintGrammar.COMMA);
    } else {
      return this.getToken(SctExpressionConstraintGrammar.COMMA, i);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_conjunctionExpressionConstraint;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterConjunctionExpressionConstraint) {
      listener.enterConjunctionExpressionConstraint(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitConjunctionExpressionConstraint) {
      listener.exitConjunctionExpressionConstraint(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitConjunctionExpressionConstraint) {
      return visitor.visitConjunctionExpressionConstraint(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class SubExpressionConstraintContext extends ParserRuleContext {
  public simpleExpressionConstraint(): SimpleExpressionConstraintContext {
    return this.getRuleContext(0, SimpleExpressionConstraintContext);
  }

  public filterConstraint(): FilterConstraintContext[];
  public filterConstraint(i: number): FilterConstraintContext;
  public filterConstraint(i?: number): FilterConstraintContext | FilterConstraintContext[] {
    if (i === undefined) {
      return this.getRuleContexts(FilterConstraintContext);
    } else {
      return this.getRuleContext(i, FilterConstraintContext);
    }
  }

  public historySupplement(): HistorySupplementContext | undefined {
    return this.tryGetRuleContext(0, HistorySupplementContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_subExpressionConstraint;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterSubExpressionConstraint) {
      listener.enterSubExpressionConstraint(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitSubExpressionConstraint) {
      listener.exitSubExpressionConstraint(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitSubExpressionConstraint) {
      return visitor.visitSubExpressionConstraint(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class FilterConstraintContext extends ParserRuleContext {
  public OPEN_PROP(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.OPEN_PROP, 0);
  }

  public CLOSE_PROP(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.CLOSE_PROP, 0);
  }

  public descriptionFilterConstraint(): DescriptionFilterConstraintContext | undefined {
    return this.tryGetRuleContext(0, DescriptionFilterConstraintContext);
  }

  public conceptFilterConstraint(): ConceptFilterConstraintContext | undefined {
    return this.tryGetRuleContext(0, ConceptFilterConstraintContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_filterConstraint;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterFilterConstraint) {
      listener.enterFilterConstraint(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitFilterConstraint) {
      listener.exitFilterConstraint(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitFilterConstraint) {
      return visitor.visitFilterConstraint(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class HistorySupplementContext extends ParserRuleContext {
  public OPEN_PROP(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.OPEN_PROP, 0);
  }

  public PLUS(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.PLUS, 0);
  }

  public CLOSE_PROP(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.CLOSE_PROP, 0);
  }

  public historyProfile(): HistoryProfileContext | undefined {
    return this.tryGetRuleContext(0, HistoryProfileContext);
  }

  public HISTORY(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.HISTORY, 0);
  }

  public historySubset(): HistorySubsetContext | undefined {
    return this.tryGetRuleContext(0, HistorySubsetContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_historySupplement;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterHistorySupplement) {
      listener.enterHistorySupplement(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitHistorySupplement) {
      listener.exitHistorySupplement(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitHistorySupplement) {
      return visitor.visitHistorySupplement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class HistoryProfileContext extends ParserRuleContext {
  public HISTORY_MIN(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.HISTORY_MIN, 0);
  }

  public HISTORY_MOD(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.HISTORY_MOD, 0);
  }

  public HISTORY_MAX(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.HISTORY_MAX, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_historyProfile;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterHistoryProfile) {
      listener.enterHistoryProfile(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitHistoryProfile) {
      listener.exitHistoryProfile(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitHistoryProfile) {
      return visitor.visitHistoryProfile(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class HistorySubsetContext extends ParserRuleContext {
  public OPEN_ROUND(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.OPEN_ROUND, 0);
  }

  public expressionConstraint(): ExpressionConstraintContext {
    return this.getRuleContext(0, ExpressionConstraintContext);
  }

  public CLOSE_ROUND(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.CLOSE_ROUND, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_historySubset;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterHistorySubset) {
      listener.enterHistorySubset(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitHistorySubset) {
      listener.exitHistorySubset(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitHistorySubset) {
      return visitor.visitHistorySubset(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class DescriptionFilterConstraintContext extends ParserRuleContext {
  public descriptionFilter(): DescriptionFilterContext[];
  public descriptionFilter(i: number): DescriptionFilterContext;
  public descriptionFilter(i?: number): DescriptionFilterContext | DescriptionFilterContext[] {
    if (i === undefined) {
      return this.getRuleContexts(DescriptionFilterContext);
    } else {
      return this.getRuleContext(i, DescriptionFilterContext);
    }
  }

  public F_D(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.F_D, 0);
  }

  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(SctExpressionConstraintGrammar.COMMA);
    } else {
      return this.getToken(SctExpressionConstraintGrammar.COMMA, i);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_descriptionFilterConstraint;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterDescriptionFilterConstraint) {
      listener.enterDescriptionFilterConstraint(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitDescriptionFilterConstraint) {
      listener.exitDescriptionFilterConstraint(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitDescriptionFilterConstraint) {
      return visitor.visitDescriptionFilterConstraint(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class ConceptFilterConstraintContext extends ParserRuleContext {
  public F_C(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.F_C, 0);
  }

  public conceptFilter(): ConceptFilterContext[];
  public conceptFilter(i: number): ConceptFilterContext;
  public conceptFilter(i?: number): ConceptFilterContext | ConceptFilterContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ConceptFilterContext);
    } else {
      return this.getRuleContext(i, ConceptFilterContext);
    }
  }

  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(SctExpressionConstraintGrammar.COMMA);
    } else {
      return this.getToken(SctExpressionConstraintGrammar.COMMA, i);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_conceptFilterConstraint;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterConceptFilterConstraint) {
      listener.enterConceptFilterConstraint(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitConceptFilterConstraint) {
      listener.exitConceptFilterConstraint(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitConceptFilterConstraint) {
      return visitor.visitConceptFilterConstraint(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class MemberFilterConstraintContext extends ParserRuleContext {
  public OPEN_PROP(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.OPEN_PROP, 0);
  }

  public F_M(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.F_M, 0);
  }

  public memberFilter(): MemberFilterContext[];
  public memberFilter(i: number): MemberFilterContext;
  public memberFilter(i?: number): MemberFilterContext | MemberFilterContext[] {
    if (i === undefined) {
      return this.getRuleContexts(MemberFilterContext);
    } else {
      return this.getRuleContext(i, MemberFilterContext);
    }
  }

  public CLOSE_PROP(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.CLOSE_PROP, 0);
  }

  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(SctExpressionConstraintGrammar.COMMA);
    } else {
      return this.getToken(SctExpressionConstraintGrammar.COMMA, i);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_memberFilterConstraint;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterMemberFilterConstraint) {
      listener.enterMemberFilterConstraint(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitMemberFilterConstraint) {
      listener.exitMemberFilterConstraint(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitMemberFilterConstraint) {
      return visitor.visitMemberFilterConstraint(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class DescriptionFilterContext extends ParserRuleContext {
  public filterTerm(): FilterTermContext | undefined {
    return this.tryGetRuleContext(0, FilterTermContext);
  }

  public filterLanguageDesc(): FilterLanguageDescContext | undefined {
    return this.tryGetRuleContext(0, FilterLanguageDescContext);
  }

  public filterTypeDesc(): FilterTypeDescContext | undefined {
    return this.tryGetRuleContext(0, FilterTypeDescContext);
  }

  public filterDialectDesc(): FilterDialectDescContext | undefined {
    return this.tryGetRuleContext(0, FilterDialectDescContext);
  }

  public filterModuleDesc(): FilterModuleDescContext | undefined {
    return this.tryGetRuleContext(0, FilterModuleDescContext);
  }

  public filterEffectiveTimeDesc(): FilterEffectiveTimeDescContext | undefined {
    return this.tryGetRuleContext(0, FilterEffectiveTimeDescContext);
  }

  public filterActiveDesc(): FilterActiveDescContext | undefined {
    return this.tryGetRuleContext(0, FilterActiveDescContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_descriptionFilter;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterDescriptionFilter) {
      listener.enterDescriptionFilter(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitDescriptionFilter) {
      listener.exitDescriptionFilter(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitDescriptionFilter) {
      return visitor.visitDescriptionFilter(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class ConceptFilterContext extends ParserRuleContext {
  public filterActive(): FilterActiveContext | undefined {
    return this.tryGetRuleContext(0, FilterActiveContext);
  }

  public filterModule(): FilterModuleContext | undefined {
    return this.tryGetRuleContext(0, FilterModuleContext);
  }

  public filterDefnStatus(): FilterDefnStatusContext | undefined {
    return this.tryGetRuleContext(0, FilterDefnStatusContext);
  }

  public filterDefnStatusId(): FilterDefnStatusIdContext | undefined {
    return this.tryGetRuleContext(0, FilterDefnStatusIdContext);
  }

  public filterEffectiveTime(): FilterEffectiveTimeContext | undefined {
    return this.tryGetRuleContext(0, FilterEffectiveTimeContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_conceptFilter;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterConceptFilter) {
      listener.enterConceptFilter(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitConceptFilter) {
      listener.exitConceptFilter(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitConceptFilter) {
      return visitor.visitConceptFilter(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class MemberFilterContext extends ParserRuleContext {
  public memberExpressionFilter(): MemberExpressionFilterContext | undefined {
    return this.tryGetRuleContext(0, MemberExpressionFilterContext);
  }

  public memberNumericFilter(): MemberNumericFilterContext | undefined {
    return this.tryGetRuleContext(0, MemberNumericFilterContext);
  }

  public memberStringFilter(): MemberStringFilterContext | undefined {
    return this.tryGetRuleContext(0, MemberStringFilterContext);
  }

  public memberBooleanFilter(): MemberBooleanFilterContext | undefined {
    return this.tryGetRuleContext(0, MemberBooleanFilterContext);
  }

  public memberTimeFilter(): MemberTimeFilterContext | undefined {
    return this.tryGetRuleContext(0, MemberTimeFilterContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_memberFilter;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterMemberFilter) {
      listener.enterMemberFilter(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitMemberFilter) {
      listener.exitMemberFilter(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitMemberFilter) {
      return visitor.visitMemberFilter(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class MemberExpressionFilterContext extends ParserRuleContext {
  public refsetFieldName(): RefsetFieldNameContext {
    return this.getRuleContext(0, RefsetFieldNameContext);
  }

  public expressionComparisonOperator(): ExpressionComparisonOperatorContext {
    return this.getRuleContext(0, ExpressionComparisonOperatorContext);
  }

  public subExpressionConstraint(): SubExpressionConstraintContext {
    return this.getRuleContext(0, SubExpressionConstraintContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_memberExpressionFilter;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterMemberExpressionFilter) {
      listener.enterMemberExpressionFilter(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitMemberExpressionFilter) {
      listener.exitMemberExpressionFilter(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitMemberExpressionFilter) {
      return visitor.visitMemberExpressionFilter(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class MemberNumericFilterContext extends ParserRuleContext {
  public refsetFieldName(): RefsetFieldNameContext {
    return this.getRuleContext(0, RefsetFieldNameContext);
  }

  public concreteComparisonOperator(): ConcreteComparisonOperatorContext {
    return this.getRuleContext(0, ConcreteComparisonOperatorContext);
  }

  public NUMBER(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.NUMBER, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_memberNumericFilter;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterMemberNumericFilter) {
      listener.enterMemberNumericFilter(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitMemberNumericFilter) {
      listener.exitMemberNumericFilter(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitMemberNumericFilter) {
      return visitor.visitMemberNumericFilter(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class MemberStringFilterContext extends ParserRuleContext {
  public refsetFieldName(): RefsetFieldNameContext {
    return this.getRuleContext(0, RefsetFieldNameContext);
  }

  public booleanComparisonOperator(): BooleanComparisonOperatorContext {
    return this.getRuleContext(0, BooleanComparisonOperatorContext);
  }

  public searchValue(): SearchValueContext | undefined {
    return this.tryGetRuleContext(0, SearchValueContext);
  }

  public searchValueSet(): SearchValueSetContext | undefined {
    return this.tryGetRuleContext(0, SearchValueSetContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_memberStringFilter;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterMemberStringFilter) {
      listener.enterMemberStringFilter(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitMemberStringFilter) {
      listener.exitMemberStringFilter(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitMemberStringFilter) {
      return visitor.visitMemberStringFilter(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class MemberBooleanFilterContext extends ParserRuleContext {
  public refsetFieldName(): RefsetFieldNameContext {
    return this.getRuleContext(0, RefsetFieldNameContext);
  }

  public booleanComparisonOperator(): BooleanComparisonOperatorContext {
    return this.getRuleContext(0, BooleanComparisonOperatorContext);
  }

  public TRUE(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.TRUE, 0);
  }

  public FALSE(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.FALSE, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_memberBooleanFilter;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterMemberBooleanFilter) {
      listener.enterMemberBooleanFilter(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitMemberBooleanFilter) {
      listener.exitMemberBooleanFilter(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitMemberBooleanFilter) {
      return visitor.visitMemberBooleanFilter(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class MemberTimeFilterContext extends ParserRuleContext {
  public refsetFieldName(): RefsetFieldNameContext {
    return this.getRuleContext(0, RefsetFieldNameContext);
  }

  public timeComparisonOperator(): TimeComparisonOperatorContext {
    return this.getRuleContext(0, TimeComparisonOperatorContext);
  }

  public timeValue(): TimeValueContext | undefined {
    return this.tryGetRuleContext(0, TimeValueContext);
  }

  public timeValueSet(): TimeValueSetContext | undefined {
    return this.tryGetRuleContext(0, TimeValueSetContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_memberTimeFilter;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterMemberTimeFilter) {
      listener.enterMemberTimeFilter(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitMemberTimeFilter) {
      listener.exitMemberTimeFilter(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitMemberTimeFilter) {
      return visitor.visitMemberTimeFilter(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class RefsetFieldNameContext extends ParserRuleContext {
  public ALPHA_ID(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.ALPHA_ID, 0);
  }

  public SCTID(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.SCTID, 0);
  }

  public CARD_SCTID(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.CARD_SCTID, 0);
  }

  public CARD_ID(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.CARD_ID, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_refsetFieldName;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterRefsetFieldName) {
      listener.enterRefsetFieldName(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitRefsetFieldName) {
      listener.exitRefsetFieldName(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitRefsetFieldName) {
      return visitor.visitRefsetFieldName(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class RefsetFieldNameSetContext extends ParserRuleContext {
  public refsetFieldName(): RefsetFieldNameContext[];
  public refsetFieldName(i: number): RefsetFieldNameContext;
  public refsetFieldName(i?: number): RefsetFieldNameContext | RefsetFieldNameContext[] {
    if (i === undefined) {
      return this.getRuleContexts(RefsetFieldNameContext);
    } else {
      return this.getRuleContext(i, RefsetFieldNameContext);
    }
  }

  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(SctExpressionConstraintGrammar.COMMA);
    } else {
      return this.getToken(SctExpressionConstraintGrammar.COMMA, i);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_refsetFieldNameSet;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterRefsetFieldNameSet) {
      listener.enterRefsetFieldNameSet(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitRefsetFieldNameSet) {
      listener.exitRefsetFieldNameSet(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitRefsetFieldNameSet) {
      return visitor.visitRefsetFieldNameSet(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class FilterTermContext extends ParserRuleContext {
  public F_TERM(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.F_TERM, 0);
  }

  public booleanComparisonOperator(): BooleanComparisonOperatorContext {
    return this.getRuleContext(0, BooleanComparisonOperatorContext);
  }

  public searchValue(): SearchValueContext | undefined {
    return this.tryGetRuleContext(0, SearchValueContext);
  }

  public searchValueSet(): SearchValueSetContext | undefined {
    return this.tryGetRuleContext(0, SearchValueSetContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_filterTerm;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterFilterTerm) {
      listener.enterFilterTerm(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitFilterTerm) {
      listener.exitFilterTerm(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitFilterTerm) {
      return visitor.visitFilterTerm(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class FilterLanguageDescContext extends ParserRuleContext {
  public F_LANGUAGE(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.F_LANGUAGE, 0);
  }

  public booleanComparisonOperator(): BooleanComparisonOperatorContext {
    return this.getRuleContext(0, BooleanComparisonOperatorContext);
  }

  public languageCode(): LanguageCodeContext | undefined {
    return this.tryGetRuleContext(0, LanguageCodeContext);
  }

  public languageCodeSet(): LanguageCodeSetContext | undefined {
    return this.tryGetRuleContext(0, LanguageCodeSetContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_filterLanguageDesc;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterFilterLanguageDesc) {
      listener.enterFilterLanguageDesc(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitFilterLanguageDesc) {
      listener.exitFilterLanguageDesc(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitFilterLanguageDesc) {
      return visitor.visitFilterLanguageDesc(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class LanguageCodeSetContext extends ParserRuleContext {
  public OPEN_ROUND(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.OPEN_ROUND, 0);
  }

  public CLOSE_ROUND(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.CLOSE_ROUND, 0);
  }

  public languageCode(): LanguageCodeContext[];
  public languageCode(i: number): LanguageCodeContext;
  public languageCode(i?: number): LanguageCodeContext | LanguageCodeContext[] {
    if (i === undefined) {
      return this.getRuleContexts(LanguageCodeContext);
    } else {
      return this.getRuleContext(i, LanguageCodeContext);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_languageCodeSet;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterLanguageCodeSet) {
      listener.enterLanguageCodeSet(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitLanguageCodeSet) {
      listener.exitLanguageCodeSet(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitLanguageCodeSet) {
      return visitor.visitLanguageCodeSet(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class LanguageCodeContext extends ParserRuleContext {
  public ALPHA2(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.ALPHA2, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_languageCode;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterLanguageCode) {
      listener.enterLanguageCode(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitLanguageCode) {
      listener.exitLanguageCode(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitLanguageCode) {
      return visitor.visitLanguageCode(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class FilterTypeDescContext extends ParserRuleContext {
  public typeIdFilter(): TypeIdFilterContext | undefined {
    return this.tryGetRuleContext(0, TypeIdFilterContext);
  }

  public typeTokenFilter(): TypeTokenFilterContext | undefined {
    return this.tryGetRuleContext(0, TypeTokenFilterContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_filterTypeDesc;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterFilterTypeDesc) {
      listener.enterFilterTypeDesc(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitFilterTypeDesc) {
      listener.exitFilterTypeDesc(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitFilterTypeDesc) {
      return visitor.visitFilterTypeDesc(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class TypeIdFilterContext extends ParserRuleContext {
  public F_TYPE_ID(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.F_TYPE_ID, 0);
  }

  public booleanComparisonOperator(): BooleanComparisonOperatorContext {
    return this.getRuleContext(0, BooleanComparisonOperatorContext);
  }

  public subExpressionConstraint(): SubExpressionConstraintContext | undefined {
    return this.tryGetRuleContext(0, SubExpressionConstraintContext);
  }

  public conceptReferenceSet(): ConceptReferenceSetContext | undefined {
    return this.tryGetRuleContext(0, ConceptReferenceSetContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_typeIdFilter;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterTypeIdFilter) {
      listener.enterTypeIdFilter(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitTypeIdFilter) {
      listener.exitTypeIdFilter(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitTypeIdFilter) {
      return visitor.visitTypeIdFilter(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class TypeTokenFilterContext extends ParserRuleContext {
  public F_TYPE(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.F_TYPE, 0);
  }

  public booleanComparisonOperator(): BooleanComparisonOperatorContext {
    return this.getRuleContext(0, BooleanComparisonOperatorContext);
  }

  public typeToken(): TypeTokenContext | undefined {
    return this.tryGetRuleContext(0, TypeTokenContext);
  }

  public typeTokenSet(): TypeTokenSetContext | undefined {
    return this.tryGetRuleContext(0, TypeTokenSetContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_typeTokenFilter;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterTypeTokenFilter) {
      listener.enterTypeTokenFilter(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitTypeTokenFilter) {
      listener.exitTypeTokenFilter(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitTypeTokenFilter) {
      return visitor.visitTypeTokenFilter(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class TypeTokenSetContext extends ParserRuleContext {
  public OPEN_ROUND(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.OPEN_ROUND, 0);
  }

  public CLOSE_ROUND(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.CLOSE_ROUND, 0);
  }

  public typeToken(): TypeTokenContext[];
  public typeToken(i: number): TypeTokenContext;
  public typeToken(i?: number): TypeTokenContext | TypeTokenContext[] {
    if (i === undefined) {
      return this.getRuleContexts(TypeTokenContext);
    } else {
      return this.getRuleContext(i, TypeTokenContext);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_typeTokenSet;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterTypeTokenSet) {
      listener.enterTypeTokenSet(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitTypeTokenSet) {
      listener.exitTypeTokenSet(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitTypeTokenSet) {
      return visitor.visitTypeTokenSet(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class TypeTokenContext extends ParserRuleContext {
  public F_SYN(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.F_SYN, 0);
  }

  public F_FSN(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.F_FSN, 0);
  }

  public F_DEF(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.F_DEF, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_typeToken;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterTypeToken) {
      listener.enterTypeToken(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitTypeToken) {
      listener.exitTypeToken(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitTypeToken) {
      return visitor.visitTypeToken(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class FilterDialectDescContext extends ParserRuleContext {
  public dialectAliasFilter(): DialectAliasFilterContext | undefined {
    return this.tryGetRuleContext(0, DialectAliasFilterContext);
  }

  public dialectIdFilter(): DialectIdFilterContext | undefined {
    return this.tryGetRuleContext(0, DialectIdFilterContext);
  }

  public acceptabilitySet(): AcceptabilitySetContext | undefined {
    return this.tryGetRuleContext(0, AcceptabilitySetContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_filterDialectDesc;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterFilterDialectDesc) {
      listener.enterFilterDialectDesc(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitFilterDialectDesc) {
      listener.exitFilterDialectDesc(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitFilterDialectDesc) {
      return visitor.visitFilterDialectDesc(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class DialectAliasFilterContext extends ParserRuleContext {
  public F_DIALECT(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.F_DIALECT, 0);
  }

  public booleanComparisonOperator(): BooleanComparisonOperatorContext {
    return this.getRuleContext(0, BooleanComparisonOperatorContext);
  }

  public dialectAlias(): DialectAliasContext | undefined {
    return this.tryGetRuleContext(0, DialectAliasContext);
  }

  public dialectAliasSet(): DialectAliasSetContext | undefined {
    return this.tryGetRuleContext(0, DialectAliasSetContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_dialectAliasFilter;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterDialectAliasFilter) {
      listener.enterDialectAliasFilter(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitDialectAliasFilter) {
      listener.exitDialectAliasFilter(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitDialectAliasFilter) {
      return visitor.visitDialectAliasFilter(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class DialectAliasContext extends ParserRuleContext {
  public F_DIALECT_ALIAS(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.F_DIALECT_ALIAS, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_dialectAlias;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterDialectAlias) {
      listener.enterDialectAlias(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitDialectAlias) {
      listener.exitDialectAlias(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitDialectAlias) {
      return visitor.visitDialectAlias(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class DialectAliasSetContext extends ParserRuleContext {
  public OPEN_ROUND(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.OPEN_ROUND, 0);
  }

  public CLOSE_ROUND(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.CLOSE_ROUND, 0);
  }

  public dialectAlias(): DialectAliasContext[];
  public dialectAlias(i: number): DialectAliasContext;
  public dialectAlias(i?: number): DialectAliasContext | DialectAliasContext[] {
    if (i === undefined) {
      return this.getRuleContexts(DialectAliasContext);
    } else {
      return this.getRuleContext(i, DialectAliasContext);
    }
  }

  public acceptabilitySet(): AcceptabilitySetContext[];
  public acceptabilitySet(i: number): AcceptabilitySetContext;
  public acceptabilitySet(i?: number): AcceptabilitySetContext | AcceptabilitySetContext[] {
    if (i === undefined) {
      return this.getRuleContexts(AcceptabilitySetContext);
    } else {
      return this.getRuleContext(i, AcceptabilitySetContext);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_dialectAliasSet;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterDialectAliasSet) {
      listener.enterDialectAliasSet(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitDialectAliasSet) {
      listener.exitDialectAliasSet(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitDialectAliasSet) {
      return visitor.visitDialectAliasSet(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class DialectIdFilterContext extends ParserRuleContext {
  public F_DIALECT_ID(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.F_DIALECT_ID, 0);
  }

  public booleanComparisonOperator(): BooleanComparisonOperatorContext {
    return this.getRuleContext(0, BooleanComparisonOperatorContext);
  }

  public subExpressionConstraint(): SubExpressionConstraintContext | undefined {
    return this.tryGetRuleContext(0, SubExpressionConstraintContext);
  }

  public dialectIdSet(): DialectIdSetContext | undefined {
    return this.tryGetRuleContext(0, DialectIdSetContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_dialectIdFilter;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterDialectIdFilter) {
      listener.enterDialectIdFilter(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitDialectIdFilter) {
      listener.exitDialectIdFilter(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitDialectIdFilter) {
      return visitor.visitDialectIdFilter(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class DialectIdSetContext extends ParserRuleContext {
  public OPEN_ROUND(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.OPEN_ROUND, 0);
  }

  public CLOSE_ROUND(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.CLOSE_ROUND, 0);
  }

  public conceptReference(): ConceptReferenceContext[];
  public conceptReference(i: number): ConceptReferenceContext;
  public conceptReference(i?: number): ConceptReferenceContext | ConceptReferenceContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ConceptReferenceContext);
    } else {
      return this.getRuleContext(i, ConceptReferenceContext);
    }
  }

  public acceptabilitySet(): AcceptabilitySetContext[];
  public acceptabilitySet(i: number): AcceptabilitySetContext;
  public acceptabilitySet(i?: number): AcceptabilitySetContext | AcceptabilitySetContext[] {
    if (i === undefined) {
      return this.getRuleContexts(AcceptabilitySetContext);
    } else {
      return this.getRuleContext(i, AcceptabilitySetContext);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_dialectIdSet;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterDialectIdSet) {
      listener.enterDialectIdSet(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitDialectIdSet) {
      listener.exitDialectIdSet(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitDialectIdSet) {
      return visitor.visitDialectIdSet(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class AcceptabilitySetContext extends ParserRuleContext {
  public acceptabilityConceptReferenceSet(): AcceptabilityConceptReferenceSetContext | undefined {
    return this.tryGetRuleContext(0, AcceptabilityConceptReferenceSetContext);
  }

  public acceptabilityTokenSet(): AcceptabilityTokenSetContext | undefined {
    return this.tryGetRuleContext(0, AcceptabilityTokenSetContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_acceptabilitySet;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterAcceptabilitySet) {
      listener.enterAcceptabilitySet(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitAcceptabilitySet) {
      listener.exitAcceptabilitySet(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitAcceptabilitySet) {
      return visitor.visitAcceptabilitySet(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class AcceptabilityConceptReferenceSetContext extends ParserRuleContext {
  public OPEN_ROUND(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.OPEN_ROUND, 0);
  }

  public CLOSE_ROUND(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.CLOSE_ROUND, 0);
  }

  public conceptReference(): ConceptReferenceContext[];
  public conceptReference(i: number): ConceptReferenceContext;
  public conceptReference(i?: number): ConceptReferenceContext | ConceptReferenceContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ConceptReferenceContext);
    } else {
      return this.getRuleContext(i, ConceptReferenceContext);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_acceptabilityConceptReferenceSet;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterAcceptabilityConceptReferenceSet) {
      listener.enterAcceptabilityConceptReferenceSet(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitAcceptabilityConceptReferenceSet) {
      listener.exitAcceptabilityConceptReferenceSet(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitAcceptabilityConceptReferenceSet) {
      return visitor.visitAcceptabilityConceptReferenceSet(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class AcceptabilityTokenSetContext extends ParserRuleContext {
  public OPEN_ROUND(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.OPEN_ROUND, 0);
  }

  public CLOSE_ROUND(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.CLOSE_ROUND, 0);
  }

  public acceptabilityToken(): AcceptabilityTokenContext[];
  public acceptabilityToken(i: number): AcceptabilityTokenContext;
  public acceptabilityToken(i?: number): AcceptabilityTokenContext | AcceptabilityTokenContext[] {
    if (i === undefined) {
      return this.getRuleContexts(AcceptabilityTokenContext);
    } else {
      return this.getRuleContext(i, AcceptabilityTokenContext);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_acceptabilityTokenSet;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterAcceptabilityTokenSet) {
      listener.enterAcceptabilityTokenSet(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitAcceptabilityTokenSet) {
      listener.exitAcceptabilityTokenSet(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitAcceptabilityTokenSet) {
      return visitor.visitAcceptabilityTokenSet(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class AcceptabilityTokenContext extends ParserRuleContext {
  public F_ACCEPTABLE(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.F_ACCEPTABLE, 0);
  }

  public F_PREFERRED(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.F_PREFERRED, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_acceptabilityToken;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterAcceptabilityToken) {
      listener.enterAcceptabilityToken(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitAcceptabilityToken) {
      listener.exitAcceptabilityToken(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitAcceptabilityToken) {
      return visitor.visitAcceptabilityToken(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class FilterModuleDescContext extends ParserRuleContext {
  public F_MODULE(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.F_MODULE, 0);
  }

  public booleanComparisonOperator(): BooleanComparisonOperatorContext {
    return this.getRuleContext(0, BooleanComparisonOperatorContext);
  }

  public subExpressionConstraint(): SubExpressionConstraintContext | undefined {
    return this.tryGetRuleContext(0, SubExpressionConstraintContext);
  }

  public conceptReferenceSet(): ConceptReferenceSetContext | undefined {
    return this.tryGetRuleContext(0, ConceptReferenceSetContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_filterModuleDesc;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterFilterModuleDesc) {
      listener.enterFilterModuleDesc(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitFilterModuleDesc) {
      listener.exitFilterModuleDesc(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitFilterModuleDesc) {
      return visitor.visitFilterModuleDesc(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class FilterEffectiveTimeDescContext extends ParserRuleContext {
  public F_EFFECTIVETIME(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.F_EFFECTIVETIME, 0);
  }

  public timeComparisonOperator(): TimeComparisonOperatorContext {
    return this.getRuleContext(0, TimeComparisonOperatorContext);
  }

  public timeValue(): TimeValueContext | undefined {
    return this.tryGetRuleContext(0, TimeValueContext);
  }

  public timeValueSet(): TimeValueSetContext | undefined {
    return this.tryGetRuleContext(0, TimeValueSetContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_filterEffectiveTimeDesc;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterFilterEffectiveTimeDesc) {
      listener.enterFilterEffectiveTimeDesc(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitFilterEffectiveTimeDesc) {
      listener.exitFilterEffectiveTimeDesc(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitFilterEffectiveTimeDesc) {
      return visitor.visitFilterEffectiveTimeDesc(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class FilterActiveDescContext extends ParserRuleContext {
  public F_ACTIVE(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.F_ACTIVE, 0);
  }

  public booleanComparisonOperator(): BooleanComparisonOperatorContext {
    return this.getRuleContext(0, BooleanComparisonOperatorContext);
  }

  public activeTrue(): ActiveTrueContext | undefined {
    return this.tryGetRuleContext(0, ActiveTrueContext);
  }

  public activeFalse(): ActiveFalseContext | undefined {
    return this.tryGetRuleContext(0, ActiveFalseContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_filterActiveDesc;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterFilterActiveDesc) {
      listener.enterFilterActiveDesc(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitFilterActiveDesc) {
      listener.exitFilterActiveDesc(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitFilterActiveDesc) {
      return visitor.visitFilterActiveDesc(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class FilterActiveContext extends ParserRuleContext {
  public F_ACTIVE(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.F_ACTIVE, 0);
  }

  public booleanComparisonOperator(): BooleanComparisonOperatorContext {
    return this.getRuleContext(0, BooleanComparisonOperatorContext);
  }

  public activeTrue(): ActiveTrueContext | undefined {
    return this.tryGetRuleContext(0, ActiveTrueContext);
  }

  public activeFalse(): ActiveFalseContext | undefined {
    return this.tryGetRuleContext(0, ActiveFalseContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_filterActive;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterFilterActive) {
      listener.enterFilterActive(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitFilterActive) {
      listener.exitFilterActive(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitFilterActive) {
      return visitor.visitFilterActive(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class ActiveTrueContext extends ParserRuleContext {
  public TRUE(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.TRUE, 0);
  }

  public ONE(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.ONE, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_activeTrue;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterActiveTrue) {
      listener.enterActiveTrue(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitActiveTrue) {
      listener.exitActiveTrue(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitActiveTrue) {
      return visitor.visitActiveTrue(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class ActiveFalseContext extends ParserRuleContext {
  public FALSE(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.FALSE, 0);
  }

  public ZERO(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.ZERO, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_activeFalse;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterActiveFalse) {
      listener.enterActiveFalse(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitActiveFalse) {
      listener.exitActiveFalse(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitActiveFalse) {
      return visitor.visitActiveFalse(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class FilterModuleContext extends ParserRuleContext {
  public F_MODULE(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.F_MODULE, 0);
  }

  public booleanComparisonOperator(): BooleanComparisonOperatorContext {
    return this.getRuleContext(0, BooleanComparisonOperatorContext);
  }

  public subExpressionConstraint(): SubExpressionConstraintContext | undefined {
    return this.tryGetRuleContext(0, SubExpressionConstraintContext);
  }

  public conceptReferenceSet(): ConceptReferenceSetContext | undefined {
    return this.tryGetRuleContext(0, ConceptReferenceSetContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_filterModule;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterFilterModule) {
      listener.enterFilterModule(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitFilterModule) {
      listener.exitFilterModule(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitFilterModule) {
      return visitor.visitFilterModule(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class FilterDefnStatusContext extends ParserRuleContext {
  public F_DEFNSTATUS(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.F_DEFNSTATUS, 0);
  }

  public booleanComparisonOperator(): BooleanComparisonOperatorContext {
    return this.getRuleContext(0, BooleanComparisonOperatorContext);
  }

  public defnStatusToken(): DefnStatusTokenContext | undefined {
    return this.tryGetRuleContext(0, DefnStatusTokenContext);
  }

  public defnStatusTokenSet(): DefnStatusTokenSetContext | undefined {
    return this.tryGetRuleContext(0, DefnStatusTokenSetContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_filterDefnStatus;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterFilterDefnStatus) {
      listener.enterFilterDefnStatus(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitFilterDefnStatus) {
      listener.exitFilterDefnStatus(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitFilterDefnStatus) {
      return visitor.visitFilterDefnStatus(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class FilterDefnStatusIdContext extends ParserRuleContext {
  public F_DEFNSTATUSID(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.F_DEFNSTATUSID, 0);
  }

  public booleanComparisonOperator(): BooleanComparisonOperatorContext {
    return this.getRuleContext(0, BooleanComparisonOperatorContext);
  }

  public subExpressionConstraint(): SubExpressionConstraintContext | undefined {
    return this.tryGetRuleContext(0, SubExpressionConstraintContext);
  }

  public conceptReferenceSet(): ConceptReferenceSetContext | undefined {
    return this.tryGetRuleContext(0, ConceptReferenceSetContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_filterDefnStatusId;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterFilterDefnStatusId) {
      listener.enterFilterDefnStatusId(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitFilterDefnStatusId) {
      listener.exitFilterDefnStatusId(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitFilterDefnStatusId) {
      return visitor.visitFilterDefnStatusId(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class FilterEffectiveTimeContext extends ParserRuleContext {
  public F_EFFECTIVETIME(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.F_EFFECTIVETIME, 0);
  }

  public timeComparisonOperator(): TimeComparisonOperatorContext {
    return this.getRuleContext(0, TimeComparisonOperatorContext);
  }

  public timeValue(): TimeValueContext | undefined {
    return this.tryGetRuleContext(0, TimeValueContext);
  }

  public timeValueSet(): TimeValueSetContext | undefined {
    return this.tryGetRuleContext(0, TimeValueSetContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_filterEffectiveTime;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterFilterEffectiveTime) {
      listener.enterFilterEffectiveTime(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitFilterEffectiveTime) {
      listener.exitFilterEffectiveTime(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitFilterEffectiveTime) {
      return visitor.visitFilterEffectiveTime(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class DefnStatusTokenContext extends ParserRuleContext {
  public PRIMITIVE(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.PRIMITIVE, 0);
  }

  public DEFINED(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.DEFINED, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_defnStatusToken;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterDefnStatusToken) {
      listener.enterDefnStatusToken(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitDefnStatusToken) {
      listener.exitDefnStatusToken(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitDefnStatusToken) {
      return visitor.visitDefnStatusToken(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class DefnStatusTokenSetContext extends ParserRuleContext {
  public OPEN_ROUND(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.OPEN_ROUND, 0);
  }

  public CLOSE_ROUND(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.CLOSE_ROUND, 0);
  }

  public defnStatusToken(): DefnStatusTokenContext[];
  public defnStatusToken(i: number): DefnStatusTokenContext;
  public defnStatusToken(i?: number): DefnStatusTokenContext | DefnStatusTokenContext[] {
    if (i === undefined) {
      return this.getRuleContexts(DefnStatusTokenContext);
    } else {
      return this.getRuleContext(i, DefnStatusTokenContext);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_defnStatusTokenSet;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterDefnStatusTokenSet) {
      listener.enterDefnStatusTokenSet(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitDefnStatusTokenSet) {
      listener.exitDefnStatusTokenSet(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitDefnStatusTokenSet) {
      return visitor.visitDefnStatusTokenSet(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class TimeValueContext extends ParserRuleContext {
  public TIMESTAMP(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.TIMESTAMP, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_timeValue;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterTimeValue) {
      listener.enterTimeValue(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitTimeValue) {
      listener.exitTimeValue(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitTimeValue) {
      return visitor.visitTimeValue(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class TimeValueSetContext extends ParserRuleContext {
  public OPEN_ROUND(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.OPEN_ROUND, 0);
  }

  public CLOSE_ROUND(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.CLOSE_ROUND, 0);
  }

  public timeValue(): TimeValueContext[];
  public timeValue(i: number): TimeValueContext;
  public timeValue(i?: number): TimeValueContext | TimeValueContext[] {
    if (i === undefined) {
      return this.getRuleContexts(TimeValueContext);
    } else {
      return this.getRuleContext(i, TimeValueContext);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_timeValueSet;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterTimeValueSet) {
      listener.enterTimeValueSet(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitTimeValueSet) {
      listener.exitTimeValueSet(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitTimeValueSet) {
      return visitor.visitTimeValueSet(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class SearchValueContext extends ParserRuleContext {
  public string_value(): String_valueContext {
    return this.getRuleContext(0, String_valueContext);
  }

  public COLON(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.COLON, 0);
  }

  public F_MATCH(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.F_MATCH, 0);
  }

  public F_WILD(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.F_WILD, 0);
  }

  public F_REGEX(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.F_REGEX, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_searchValue;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterSearchValue) {
      listener.enterSearchValue(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitSearchValue) {
      listener.exitSearchValue(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitSearchValue) {
      return visitor.visitSearchValue(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class SearchValueSetContext extends ParserRuleContext {
  public OPEN_ROUND(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.OPEN_ROUND, 0);
  }

  public CLOSE_ROUND(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.CLOSE_ROUND, 0);
  }

  public searchValue(): SearchValueContext[];
  public searchValue(i: number): SearchValueContext;
  public searchValue(i?: number): SearchValueContext | SearchValueContext[] {
    if (i === undefined) {
      return this.getRuleContexts(SearchValueContext);
    } else {
      return this.getRuleContext(i, SearchValueContext);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_searchValueSet;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterSearchValueSet) {
      listener.enterSearchValueSet(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitSearchValueSet) {
      listener.exitSearchValueSet(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitSearchValueSet) {
      return visitor.visitSearchValueSet(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class String_valueContext extends ParserRuleContext {
  public STRING_VALUE(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.STRING_VALUE, 0);
  }

  public TIMESTAMP(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.TIMESTAMP, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_string_value;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterString_value) {
      listener.enterString_value(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitString_value) {
      listener.exitString_value(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitString_value) {
      return visitor.visitString_value(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class ConceptReferenceSetContext extends ParserRuleContext {
  public OPEN_ROUND(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.OPEN_ROUND, 0);
  }

  public conceptReference(): ConceptReferenceContext[];
  public conceptReference(i: number): ConceptReferenceContext;
  public conceptReference(i?: number): ConceptReferenceContext | ConceptReferenceContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ConceptReferenceContext);
    } else {
      return this.getRuleContext(i, ConceptReferenceContext);
    }
  }

  public CLOSE_ROUND(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.CLOSE_ROUND, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_conceptReferenceSet;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterConceptReferenceSet) {
      listener.enterConceptReferenceSet(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitConceptReferenceSet) {
      listener.exitConceptReferenceSet(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitConceptReferenceSet) {
      return visitor.visitConceptReferenceSet(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class RefinementContext extends ParserRuleContext {
  public subRefinement(): SubRefinementContext | undefined {
    return this.tryGetRuleContext(0, SubRefinementContext);
  }

  public conjunctionRefinement(): ConjunctionRefinementContext | undefined {
    return this.tryGetRuleContext(0, ConjunctionRefinementContext);
  }

  public disjunctionRefinement(): DisjunctionRefinementContext | undefined {
    return this.tryGetRuleContext(0, DisjunctionRefinementContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_refinement;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterRefinement) {
      listener.enterRefinement(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitRefinement) {
      listener.exitRefinement(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitRefinement) {
      return visitor.visitRefinement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class ConjunctionRefinementContext extends ParserRuleContext {
  public subRefinement(): SubRefinementContext[];
  public subRefinement(i: number): SubRefinementContext;
  public subRefinement(i?: number): SubRefinementContext | SubRefinementContext[] {
    if (i === undefined) {
      return this.getRuleContexts(SubRefinementContext);
    } else {
      return this.getRuleContext(i, SubRefinementContext);
    }
  }

  public AND(): TerminalNode[];
  public AND(i: number): TerminalNode;
  public AND(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(SctExpressionConstraintGrammar.AND);
    } else {
      return this.getToken(SctExpressionConstraintGrammar.AND, i);
    }
  }

  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(SctExpressionConstraintGrammar.COMMA);
    } else {
      return this.getToken(SctExpressionConstraintGrammar.COMMA, i);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_conjunctionRefinement;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterConjunctionRefinement) {
      listener.enterConjunctionRefinement(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitConjunctionRefinement) {
      listener.exitConjunctionRefinement(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitConjunctionRefinement) {
      return visitor.visitConjunctionRefinement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class DisjunctionRefinementContext extends ParserRuleContext {
  public subRefinement(): SubRefinementContext[];
  public subRefinement(i: number): SubRefinementContext;
  public subRefinement(i?: number): SubRefinementContext | SubRefinementContext[] {
    if (i === undefined) {
      return this.getRuleContexts(SubRefinementContext);
    } else {
      return this.getRuleContext(i, SubRefinementContext);
    }
  }

  public OR(): TerminalNode[];
  public OR(i: number): TerminalNode;
  public OR(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(SctExpressionConstraintGrammar.OR);
    } else {
      return this.getToken(SctExpressionConstraintGrammar.OR, i);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_disjunctionRefinement;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterDisjunctionRefinement) {
      listener.enterDisjunctionRefinement(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitDisjunctionRefinement) {
      listener.exitDisjunctionRefinement(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitDisjunctionRefinement) {
      return visitor.visitDisjunctionRefinement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class SubRefinementContext extends ParserRuleContext {
  public attributeSet(): AttributeSetContext | undefined {
    return this.tryGetRuleContext(0, AttributeSetContext);
  }

  public attributeGroup(): AttributeGroupContext | undefined {
    return this.tryGetRuleContext(0, AttributeGroupContext);
  }

  public OPEN_ROUND(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.OPEN_ROUND, 0);
  }

  public refinement(): RefinementContext | undefined {
    return this.tryGetRuleContext(0, RefinementContext);
  }

  public CLOSE_ROUND(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.CLOSE_ROUND, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_subRefinement;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterSubRefinement) {
      listener.enterSubRefinement(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitSubRefinement) {
      listener.exitSubRefinement(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitSubRefinement) {
      return visitor.visitSubRefinement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class AttributeGroupContext extends ParserRuleContext {
  public OPEN_CURLY(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.OPEN_CURLY, 0);
  }

  public attributeSet(): AttributeSetContext {
    return this.getRuleContext(0, AttributeSetContext);
  }

  public CLOSE_CURLY(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.CLOSE_CURLY, 0);
  }

  public cardinality(): CardinalityContext | undefined {
    return this.tryGetRuleContext(0, CardinalityContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_attributeGroup;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterAttributeGroup) {
      listener.enterAttributeGroup(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitAttributeGroup) {
      listener.exitAttributeGroup(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitAttributeGroup) {
      return visitor.visitAttributeGroup(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class AttributeSetContext extends ParserRuleContext {
  public subAttributeSet(): SubAttributeSetContext | undefined {
    return this.tryGetRuleContext(0, SubAttributeSetContext);
  }

  public conjunctionAttribute(): ConjunctionAttributeContext | undefined {
    return this.tryGetRuleContext(0, ConjunctionAttributeContext);
  }

  public disjunctionAttribute(): DisjunctionAttributeContext | undefined {
    return this.tryGetRuleContext(0, DisjunctionAttributeContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_attributeSet;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterAttributeSet) {
      listener.enterAttributeSet(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitAttributeSet) {
      listener.exitAttributeSet(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitAttributeSet) {
      return visitor.visitAttributeSet(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class ConjunctionAttributeContext extends ParserRuleContext {
  public subAttributeSet(): SubAttributeSetContext[];
  public subAttributeSet(i: number): SubAttributeSetContext;
  public subAttributeSet(i?: number): SubAttributeSetContext | SubAttributeSetContext[] {
    if (i === undefined) {
      return this.getRuleContexts(SubAttributeSetContext);
    } else {
      return this.getRuleContext(i, SubAttributeSetContext);
    }
  }

  public AND(): TerminalNode[];
  public AND(i: number): TerminalNode;
  public AND(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(SctExpressionConstraintGrammar.AND);
    } else {
      return this.getToken(SctExpressionConstraintGrammar.AND, i);
    }
  }

  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(SctExpressionConstraintGrammar.COMMA);
    } else {
      return this.getToken(SctExpressionConstraintGrammar.COMMA, i);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_conjunctionAttribute;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterConjunctionAttribute) {
      listener.enterConjunctionAttribute(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitConjunctionAttribute) {
      listener.exitConjunctionAttribute(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitConjunctionAttribute) {
      return visitor.visitConjunctionAttribute(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class DisjunctionAttributeContext extends ParserRuleContext {
  public subAttributeSet(): SubAttributeSetContext[];
  public subAttributeSet(i: number): SubAttributeSetContext;
  public subAttributeSet(i?: number): SubAttributeSetContext | SubAttributeSetContext[] {
    if (i === undefined) {
      return this.getRuleContexts(SubAttributeSetContext);
    } else {
      return this.getRuleContext(i, SubAttributeSetContext);
    }
  }

  public OR(): TerminalNode[];
  public OR(i: number): TerminalNode;
  public OR(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(SctExpressionConstraintGrammar.OR);
    } else {
      return this.getToken(SctExpressionConstraintGrammar.OR, i);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_disjunctionAttribute;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterDisjunctionAttribute) {
      listener.enterDisjunctionAttribute(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitDisjunctionAttribute) {
      listener.exitDisjunctionAttribute(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitDisjunctionAttribute) {
      return visitor.visitDisjunctionAttribute(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class SubAttributeSetContext extends ParserRuleContext {
  public attribute(): AttributeContext | undefined {
    return this.tryGetRuleContext(0, AttributeContext);
  }

  public OPEN_ROUND(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.OPEN_ROUND, 0);
  }

  public attributeSet(): AttributeSetContext | undefined {
    return this.tryGetRuleContext(0, AttributeSetContext);
  }

  public CLOSE_ROUND(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.CLOSE_ROUND, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_subAttributeSet;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterSubAttributeSet) {
      listener.enterSubAttributeSet(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitSubAttributeSet) {
      listener.exitSubAttributeSet(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitSubAttributeSet) {
      return visitor.visitSubAttributeSet(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class AttributeContext extends ParserRuleContext {
  public attributeName(): AttributeNameContext {
    return this.getRuleContext(0, AttributeNameContext);
  }

  public concreteComparisonOperator(): ConcreteComparisonOperatorContext | undefined {
    return this.tryGetRuleContext(0, ConcreteComparisonOperatorContext);
  }

  public concreteValue(): ConcreteValueContext | undefined {
    return this.tryGetRuleContext(0, ConcreteValueContext);
  }

  public expressionComparisonOperator(): ExpressionComparisonOperatorContext | undefined {
    return this.tryGetRuleContext(0, ExpressionComparisonOperatorContext);
  }

  public expressionConstraintValue(): ExpressionConstraintValueContext | undefined {
    return this.tryGetRuleContext(0, ExpressionConstraintValueContext);
  }

  public cardinality(): CardinalityContext | undefined {
    return this.tryGetRuleContext(0, CardinalityContext);
  }

  public REVERSE_FLAG(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.REVERSE_FLAG, 0);
  }

  public attributeOperator(): AttributeOperatorContext | undefined {
    return this.tryGetRuleContext(0, AttributeOperatorContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_attribute;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterAttribute) {
      listener.enterAttribute(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitAttribute) {
      listener.exitAttribute(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitAttribute) {
      return visitor.visitAttribute(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class CardinalityContext extends ParserRuleContext {
  public OPEN_SQUARE(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.OPEN_SQUARE, 0);
  }

  public NON_NEGATIVE_INTEGER(): TerminalNode[];
  public NON_NEGATIVE_INTEGER(i: number): TerminalNode;
  public NON_NEGATIVE_INTEGER(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(SctExpressionConstraintGrammar.NON_NEGATIVE_INTEGER);
    } else {
      return this.getToken(SctExpressionConstraintGrammar.NON_NEGATIVE_INTEGER, i);
    }
  }

  public DOTDOT(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.DOTDOT, 0);
  }

  public CLOSE_SQUARE(): TerminalNode {
    return this.getToken(SctExpressionConstraintGrammar.CLOSE_SQUARE, 0);
  }

  public MANY(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.MANY, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_cardinality;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterCardinality) {
      listener.enterCardinality(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitCardinality) {
      listener.exitCardinality(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitCardinality) {
      return visitor.visitCardinality(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class AttributeOperatorContext extends ParserRuleContext {
  public constraintOperator(): ConstraintOperatorContext {
    return this.getRuleContext(0, ConstraintOperatorContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_attributeOperator;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterAttributeOperator) {
      listener.enterAttributeOperator(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitAttributeOperator) {
      listener.exitAttributeOperator(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitAttributeOperator) {
      return visitor.visitAttributeOperator(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class AttributeNameContext extends ParserRuleContext {
  public simpleExpressionConstraint(): SimpleExpressionConstraintContext {
    return this.getRuleContext(0, SimpleExpressionConstraintContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_attributeName;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterAttributeName) {
      listener.enterAttributeName(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitAttributeName) {
      listener.exitAttributeName(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitAttributeName) {
      return visitor.visitAttributeName(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class ExpressionConstraintValueContext extends ParserRuleContext {
  public simpleExpressionConstraint(): SimpleExpressionConstraintContext {
    return this.getRuleContext(0, SimpleExpressionConstraintContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_expressionConstraintValue;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterExpressionConstraintValue) {
      listener.enterExpressionConstraintValue(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitExpressionConstraintValue) {
      listener.exitExpressionConstraintValue(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitExpressionConstraintValue) {
      return visitor.visitExpressionConstraintValue(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class BooleanComparisonOperatorContext extends ParserRuleContext {
  public EQ(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.EQ, 0);
  }

  public NE(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.NE, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_booleanComparisonOperator;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterBooleanComparisonOperator) {
      listener.enterBooleanComparisonOperator(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitBooleanComparisonOperator) {
      listener.exitBooleanComparisonOperator(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitBooleanComparisonOperator) {
      return visitor.visitBooleanComparisonOperator(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class TimeComparisonOperatorContext extends ParserRuleContext {
  public EQ(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.EQ, 0);
  }

  public NE(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.NE, 0);
  }

  public LTE(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.LTE, 0);
  }

  public LT(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.LT, 0);
  }

  public GTE(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.GTE, 0);
  }

  public GT(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.GT, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_timeComparisonOperator;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterTimeComparisonOperator) {
      listener.enterTimeComparisonOperator(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitTimeComparisonOperator) {
      listener.exitTimeComparisonOperator(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitTimeComparisonOperator) {
      return visitor.visitTimeComparisonOperator(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class ConcreteComparisonOperatorContext extends ParserRuleContext {
  public EQ(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.EQ, 0);
  }

  public NE(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.NE, 0);
  }

  public LTE(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.LTE, 0);
  }

  public LT(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.LT, 0);
  }

  public GTE(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.GTE, 0);
  }

  public GT(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.GT, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_concreteComparisonOperator;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterConcreteComparisonOperator) {
      listener.enterConcreteComparisonOperator(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitConcreteComparisonOperator) {
      listener.exitConcreteComparisonOperator(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitConcreteComparisonOperator) {
      return visitor.visitConcreteComparisonOperator(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class ExpressionComparisonOperatorContext extends ParserRuleContext {
  public EQ(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.EQ, 0);
  }

  public NE(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.NE, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_expressionComparisonOperator;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterExpressionComparisonOperator) {
      listener.enterExpressionComparisonOperator(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitExpressionComparisonOperator) {
      listener.exitExpressionComparisonOperator(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitExpressionComparisonOperator) {
      return visitor.visitExpressionComparisonOperator(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class ConcreteValueContext extends ParserRuleContext {
  public string_value(): String_valueContext | undefined {
    return this.tryGetRuleContext(0, String_valueContext);
  }

  public NUMBER(): TerminalNode | undefined {
    return this.tryGetToken(SctExpressionConstraintGrammar.NUMBER, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return SctExpressionConstraintGrammar.RULE_concreteValue;
  }

  // @Override
  public enterRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.enterConcreteValue) {
      listener.enterConcreteValue(this);
    }
  }

  // @Override
  public exitRule(listener: SctExpressionConstraintGrammarListener): void {
    if (listener.exitConcreteValue) {
      listener.exitConcreteValue(this);
    }
  }

  // @Override
  public accept<Result>(visitor: SctExpressionConstraintGrammarVisitor<Result>): Result {
    if (visitor.visitConcreteValue) {
      return visitor.visitConcreteValue(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}



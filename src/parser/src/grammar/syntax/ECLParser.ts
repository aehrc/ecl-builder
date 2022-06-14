// @ts-nocheck
// Generated from src/grammar/syntax/ECL.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";

import * as Utils from "antlr4ts/misc/Utils";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import { ECLListener } from "./ECLListener";
import { ECLVisitor } from "./ECLVisitor";


export class ECLParser extends Parser {
  public static readonly UTF8_LETTER = 1;
  public static readonly TAB = 2;
  public static readonly LF = 3;
  public static readonly CR = 4;
  public static readonly SPACE = 5;
  public static readonly EXCLAMATION = 6;
  public static readonly QUOTE = 7;
  public static readonly HASH = 8;
  public static readonly DOLLAR = 9;
  public static readonly PERCENT = 10;
  public static readonly AMPERSAND = 11;
  public static readonly APOSTROPHE = 12;
  public static readonly LEFT_PAREN = 13;
  public static readonly RIGHT_PAREN = 14;
  public static readonly ASTERISK = 15;
  public static readonly PLUS = 16;
  public static readonly COMMA = 17;
  public static readonly DASH = 18;
  public static readonly PERIOD = 19;
  public static readonly SLASH = 20;
  public static readonly ZERO = 21;
  public static readonly ONE = 22;
  public static readonly TWO = 23;
  public static readonly THREE = 24;
  public static readonly FOUR = 25;
  public static readonly FIVE = 26;
  public static readonly SIX = 27;
  public static readonly SEVEN = 28;
  public static readonly EIGHT = 29;
  public static readonly NINE = 30;
  public static readonly COLON = 31;
  public static readonly SEMICOLON = 32;
  public static readonly LESS_THAN = 33;
  public static readonly EQUALS = 34;
  public static readonly GREATER_THAN = 35;
  public static readonly QUESTION = 36;
  public static readonly AT = 37;
  public static readonly CAP_A = 38;
  public static readonly CAP_B = 39;
  public static readonly CAP_C = 40;
  public static readonly CAP_D = 41;
  public static readonly CAP_E = 42;
  public static readonly CAP_F = 43;
  public static readonly CAP_G = 44;
  public static readonly CAP_H = 45;
  public static readonly CAP_I = 46;
  public static readonly CAP_J = 47;
  public static readonly CAP_K = 48;
  public static readonly CAP_L = 49;
  public static readonly CAP_M = 50;
  public static readonly CAP_N = 51;
  public static readonly CAP_O = 52;
  public static readonly CAP_P = 53;
  public static readonly CAP_Q = 54;
  public static readonly CAP_R = 55;
  public static readonly CAP_S = 56;
  public static readonly CAP_T = 57;
  public static readonly CAP_U = 58;
  public static readonly CAP_V = 59;
  public static readonly CAP_W = 60;
  public static readonly CAP_X = 61;
  public static readonly CAP_Y = 62;
  public static readonly CAP_Z = 63;
  public static readonly LEFT_BRACE = 64;
  public static readonly BACKSLASH = 65;
  public static readonly RIGHT_BRACE = 66;
  public static readonly CARAT = 67;
  public static readonly UNDERSCORE = 68;
  public static readonly ACCENT = 69;
  public static readonly A = 70;
  public static readonly B = 71;
  public static readonly C = 72;
  public static readonly D = 73;
  public static readonly E = 74;
  public static readonly F = 75;
  public static readonly G = 76;
  public static readonly H = 77;
  public static readonly I = 78;
  public static readonly J = 79;
  public static readonly K = 80;
  public static readonly L = 81;
  public static readonly M = 82;
  public static readonly N = 83;
  public static readonly O = 84;
  public static readonly P = 85;
  public static readonly Q = 86;
  public static readonly R = 87;
  public static readonly S = 88;
  public static readonly T = 89;
  public static readonly U = 90;
  public static readonly V = 91;
  public static readonly W = 92;
  public static readonly X = 93;
  public static readonly Y = 94;
  public static readonly Z = 95;
  public static readonly LEFT_CURLY_BRACE = 96;
  public static readonly PIPE = 97;
  public static readonly RIGHT_CURLY_BRACE = 98;
  public static readonly TILDE = 99;
  public static readonly RULE_expressionconstraint = 0;
  public static readonly RULE_refinedexpressionconstraint = 1;
  public static readonly RULE_compoundexpressionconstraint = 2;
  public static readonly RULE_conjunctionexpressionconstraint = 3;
  public static readonly RULE_disjunctionexpressionconstraint = 4;
  public static readonly RULE_exclusionexpressionconstraint = 5;
  public static readonly RULE_dottedexpressionconstraint = 6;
  public static readonly RULE_dottedexpressionattribute = 7;
  public static readonly RULE_subexpressionconstraint = 8;
  public static readonly RULE_eclfocusconcept = 9;
  public static readonly RULE_dot = 10;
  public static readonly RULE_memberof = 11;
  public static readonly RULE_refsetfieldset = 12;
  public static readonly RULE_refsetfield = 13;
  public static readonly RULE_refsetfieldname = 14;
  public static readonly RULE_refsetfieldref = 15;
  public static readonly RULE_eclconceptreference = 16;
  public static readonly RULE_eclconceptreferenceset = 17;
  public static readonly RULE_conceptid = 18;
  public static readonly RULE_term = 19;
  public static readonly RULE_wildcard = 20;
  public static readonly RULE_constraintoperator = 21;
  public static readonly RULE_descendantof = 22;
  public static readonly RULE_descendantorselfof = 23;
  public static readonly RULE_childof = 24;
  public static readonly RULE_childorselfof = 25;
  public static readonly RULE_ancestorof = 26;
  public static readonly RULE_ancestororselfof = 27;
  public static readonly RULE_parentof = 28;
  public static readonly RULE_parentorselfof = 29;
  public static readonly RULE_conjunction = 30;
  public static readonly RULE_disjunction = 31;
  public static readonly RULE_exclusion = 32;
  public static readonly RULE_eclrefinement = 33;
  public static readonly RULE_conjunctionrefinementset = 34;
  public static readonly RULE_disjunctionrefinementset = 35;
  public static readonly RULE_subrefinement = 36;
  public static readonly RULE_eclattributeset = 37;
  public static readonly RULE_conjunctionattributeset = 38;
  public static readonly RULE_disjunctionattributeset = 39;
  public static readonly RULE_subattributeset = 40;
  public static readonly RULE_eclattributegroup = 41;
  public static readonly RULE_eclattribute = 42;
  public static readonly RULE_cardinality = 43;
  public static readonly RULE_minvalue = 44;
  public static readonly RULE_to = 45;
  public static readonly RULE_maxvalue = 46;
  public static readonly RULE_many = 47;
  public static readonly RULE_reverseflag = 48;
  public static readonly RULE_eclattributename = 49;
  public static readonly RULE_expressioncomparisonoperator = 50;
  public static readonly RULE_numericcomparisonoperator = 51;
  public static readonly RULE_timecomparisonoperator = 52;
  public static readonly RULE_stringcomparisonoperator = 53;
  public static readonly RULE_booleancomparisonoperator = 54;
  public static readonly RULE_descriptionfilterconstraint = 55;
  public static readonly RULE_descriptionfilter = 56;
  public static readonly RULE_termfilter = 57;
  public static readonly RULE_termkeyword = 58;
  public static readonly RULE_typedsearchterm = 59;
  public static readonly RULE_typedsearchtermset = 60;
  public static readonly RULE_wild = 61;
  public static readonly RULE_match = 62;
  public static readonly RULE_matchsearchterm = 63;
  public static readonly RULE_matchsearchtermset = 64;
  public static readonly RULE_wildsearchterm = 65;
  public static readonly RULE_wildsearchtermset = 66;
  public static readonly RULE_languagefilter = 67;
  public static readonly RULE_language = 68;
  public static readonly RULE_languagecode = 69;
  public static readonly RULE_languagecodeset = 70;
  public static readonly RULE_typefilter = 71;
  public static readonly RULE_typeidfilter = 72;
  public static readonly RULE_typeid = 73;
  public static readonly RULE_typetokenfilter = 74;
  public static readonly RULE_type = 75;
  public static readonly RULE_typetoken = 76;
  public static readonly RULE_typetokenset = 77;
  public static readonly RULE_synonym = 78;
  public static readonly RULE_fullyspecifiedname = 79;
  public static readonly RULE_definition = 80;
  public static readonly RULE_dialectfilter = 81;
  public static readonly RULE_dialectidfilter = 82;
  public static readonly RULE_dialectid = 83;
  public static readonly RULE_dialectaliasfilter = 84;
  public static readonly RULE_dialect = 85;
  public static readonly RULE_dialectalias = 86;
  public static readonly RULE_dialectaliasset = 87;
  public static readonly RULE_dialectidset = 88;
  public static readonly RULE_acceptabilityset = 89;
  public static readonly RULE_acceptabilityconceptreferenceset = 90;
  public static readonly RULE_acceptabilitytokenset = 91;
  public static readonly RULE_acceptabilitytoken = 92;
  public static readonly RULE_acceptable = 93;
  public static readonly RULE_preferred = 94;
  public static readonly RULE_conceptfilterconstraint = 95;
  public static readonly RULE_conceptfilter = 96;
  public static readonly RULE_definitionstatusfilter = 97;
  public static readonly RULE_definitionstatusidfilter = 98;
  public static readonly RULE_definitionstatusidkeyword = 99;
  public static readonly RULE_definitionstatustokenfilter = 100;
  public static readonly RULE_definitionstatuskeyword = 101;
  public static readonly RULE_definitionstatustoken = 102;
  public static readonly RULE_definitionstatustokenset = 103;
  public static readonly RULE_primitivetoken = 104;
  public static readonly RULE_definedtoken = 105;
  public static readonly RULE_modulefilter = 106;
  public static readonly RULE_moduleidkeyword = 107;
  public static readonly RULE_effectivetimefilter = 108;
  public static readonly RULE_effectivetimekeyword = 109;
  public static readonly RULE_timevalue = 110;
  public static readonly RULE_timevalueset = 111;
  public static readonly RULE_year = 112;
  public static readonly RULE_month = 113;
  public static readonly RULE_day = 114;
  public static readonly RULE_activefilter = 115;
  public static readonly RULE_activekeyword = 116;
  public static readonly RULE_activevalue = 117;
  public static readonly RULE_activetruevalue = 118;
  public static readonly RULE_activefalsevalue = 119;
  public static readonly RULE_memberfilterconstraint = 120;
  public static readonly RULE_memberfilter = 121;
  public static readonly RULE_memberfieldfilter = 122;
  public static readonly RULE_historysupplement = 123;
  public static readonly RULE_historykeyword = 124;
  public static readonly RULE_historyprofilesuffix = 125;
  public static readonly RULE_historyminimumsuffix = 126;
  public static readonly RULE_historymoderatesuffix = 127;
  public static readonly RULE_historymaximumsuffix = 128;
  public static readonly RULE_historysubset = 129;
  public static readonly RULE_numericvalue = 130;
  public static readonly RULE_stringvalue = 131;
  public static readonly RULE_integervalue = 132;
  public static readonly RULE_decimalvalue = 133;
  public static readonly RULE_booleanvalue = 134;
  public static readonly RULE_true_1 = 135;
  public static readonly RULE_false_1 = 136;
  public static readonly RULE_nonnegativeintegervalue = 137;
  public static readonly RULE_sctid = 138;
  public static readonly RULE_ws = 139;
  public static readonly RULE_mws = 140;
  public static readonly RULE_comment = 141;
  public static readonly RULE_nonstarchar = 142;
  public static readonly RULE_starwithnonfslash = 143;
  public static readonly RULE_nonfslash = 144;
  public static readonly RULE_sp = 145;
  public static readonly RULE_htab = 146;
  public static readonly RULE_cr = 147;
  public static readonly RULE_lf = 148;
  public static readonly RULE_qm = 149;
  public static readonly RULE_bs = 150;
  public static readonly RULE_star = 151;
  public static readonly RULE_digit = 152;
  public static readonly RULE_zero = 153;
  public static readonly RULE_digitnonzero = 154;
  public static readonly RULE_nonwsnonpipe = 155;
  public static readonly RULE_anynonescapedchar = 156;
  public static readonly RULE_escapedchar = 157;
  public static readonly RULE_escapedwildchar = 158;
  public static readonly RULE_nonwsnonescapedchar = 159;
  public static readonly RULE_alpha = 160;
  public static readonly RULE_dash = 161;
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    "expressionconstraint", "refinedexpressionconstraint", "compoundexpressionconstraint",
    "conjunctionexpressionconstraint", "disjunctionexpressionconstraint",
    "exclusionexpressionconstraint", "dottedexpressionconstraint", "dottedexpressionattribute",
    "subexpressionconstraint", "eclfocusconcept", "dot", "memberof", "refsetfieldset",
    "refsetfield", "refsetfieldname", "refsetfieldref", "eclconceptreference",
    "eclconceptreferenceset", "conceptid", "term", "wildcard", "constraintoperator",
    "descendantof", "descendantorselfof", "childof", "childorselfof", "ancestorof",
    "ancestororselfof", "parentof", "parentorselfof", "conjunction", "disjunction",
    "exclusion", "eclrefinement", "conjunctionrefinementset", "disjunctionrefinementset",
    "subrefinement", "eclattributeset", "conjunctionattributeset", "disjunctionattributeset",
    "subattributeset", "eclattributegroup", "eclattribute", "cardinality",
    "minvalue", "to", "maxvalue", "many", "reverseflag", "eclattributename",
    "expressioncomparisonoperator", "numericcomparisonoperator", "timecomparisonoperator",
    "stringcomparisonoperator", "booleancomparisonoperator", "descriptionfilterconstraint",
    "descriptionfilter", "termfilter", "termkeyword", "typedsearchterm", "typedsearchtermset",
    "wild", "match", "matchsearchterm", "matchsearchtermset", "wildsearchterm",
    "wildsearchtermset", "languagefilter", "language", "languagecode", "languagecodeset",
    "typefilter", "typeidfilter", "typeid", "typetokenfilter", "type", "typetoken",
    "typetokenset", "synonym", "fullyspecifiedname", "definition", "dialectfilter",
    "dialectidfilter", "dialectid", "dialectaliasfilter", "dialect", "dialectalias",
    "dialectaliasset", "dialectidset", "acceptabilityset", "acceptabilityconceptreferenceset",
    "acceptabilitytokenset", "acceptabilitytoken", "acceptable", "preferred",
    "conceptfilterconstraint", "conceptfilter", "definitionstatusfilter",
    "definitionstatusidfilter", "definitionstatusidkeyword", "definitionstatustokenfilter",
    "definitionstatuskeyword", "definitionstatustoken", "definitionstatustokenset",
    "primitivetoken", "definedtoken", "modulefilter", "moduleidkeyword", "effectivetimefilter",
    "effectivetimekeyword", "timevalue", "timevalueset", "year", "month",
    "day", "activefilter", "activekeyword", "activevalue", "activetruevalue",
    "activefalsevalue", "memberfilterconstraint", "memberfilter", "memberfieldfilter",
    "historysupplement", "historykeyword", "historyprofilesuffix", "historyminimumsuffix",
    "historymoderatesuffix", "historymaximumsuffix", "historysubset", "numericvalue",
    "stringvalue", "integervalue", "decimalvalue", "booleanvalue", "true_1",
    "false_1", "nonnegativeintegervalue", "sctid", "ws", "mws", "comment",
    "nonstarchar", "starwithnonfslash", "nonfslash", "sp", "htab", "cr", "lf",
    "qm", "bs", "star", "digit", "zero", "digitnonzero", "nonwsnonpipe", "anynonescapedchar",
    "escapedchar", "escapedwildchar", "nonwsnonescapedchar", "alpha", "dash"
  ];

  private static readonly _LITERAL_NAMES: Array<string | undefined> = [
    undefined, undefined, "'\u0009'", "'\u000A'", "'\u000D'", "' '", "'!'",
    "'\"'", "'#'", "'$'", "'%'", "'&'", "'''", "'('", "')'", "'*'", "'+'",
    "','", "'-'", "'.'", "'/'", "'0'", "'1'", "'2'", "'3'", "'4'", "'5'",
    "'6'", "'7'", "'8'", "'9'", "':'", "';'", "'<'", "'='", "'>'", "'?'",
    "'@'", "'A'", "'B'", "'C'", "'D'", "'E'", "'F'", "'G'", "'H'", "'I'",
    "'J'", "'K'", "'L'", "'M'", "'N'", "'O'", "'P'", "'Q'", "'R'", "'S'",
    "'T'", "'U'", "'V'", "'W'", "'X'", "'Y'", "'Z'", "'['", "'\\'", "']'",
    "'^'", "'_'", "'`'", "'a'", "'b'", "'c'", "'d'", "'e'", "'f'", "'g'",
    "'h'", "'i'", "'j'", "'k'", "'l'", "'m'", "'n'", "'o'", "'p'", "'q'",
    "'r'", "'s'", "'t'", "'u'", "'v'", "'w'", "'x'", "'y'", "'z'", "'{'",
    "'|'", "'}'", "'~'"
  ];
  private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
    undefined, "UTF8_LETTER", "TAB", "LF", "CR", "SPACE", "EXCLAMATION", "QUOTE",
    "HASH", "DOLLAR", "PERCENT", "AMPERSAND", "APOSTROPHE", "LEFT_PAREN",
    "RIGHT_PAREN", "ASTERISK", "PLUS", "COMMA", "DASH", "PERIOD", "SLASH",
    "ZERO", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT",
    "NINE", "COLON", "SEMICOLON", "LESS_THAN", "EQUALS", "GREATER_THAN", "QUESTION",
    "AT", "CAP_A", "CAP_B", "CAP_C", "CAP_D", "CAP_E", "CAP_F", "CAP_G", "CAP_H",
    "CAP_I", "CAP_J", "CAP_K", "CAP_L", "CAP_M", "CAP_N", "CAP_O", "CAP_P",
    "CAP_Q", "CAP_R", "CAP_S", "CAP_T", "CAP_U", "CAP_V", "CAP_W", "CAP_X",
    "CAP_Y", "CAP_Z", "LEFT_BRACE", "BACKSLASH", "RIGHT_BRACE", "CARAT", "UNDERSCORE",
    "ACCENT", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "LEFT_CURLY_BRACE", "PIPE", "RIGHT_CURLY_BRACE", "TILDE"
  ];
  public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ECLParser._LITERAL_NAMES, ECLParser._SYMBOLIC_NAMES, []);

  // @Override
  // @NotNull
  public get vocabulary(): Vocabulary {
    return ECLParser.VOCABULARY;
  }

  // tslint:enable:no-trailing-whitespace

  // @Override
  public get grammarFileName(): string {
    return "ECL.g4";
  }

  // @Override
  public get ruleNames(): string[] {
    return ECLParser.ruleNames;
  }

  // @Override
  public get serializedATN(): string {
    return ECLParser._serializedATN;
  }

  protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
    return new FailedPredicateException(this, predicate, message);
  }

  constructor(input: TokenStream) {
    super(input);
    this._interp = new ParserATNSimulator(ECLParser._ATN, this);
  }

  // @RuleVersion(0)
  public expressionconstraint(): ExpressionconstraintContext {
    let _localctx: ExpressionconstraintContext = new ExpressionconstraintContext(this._ctx, this.state);
    this.enterRule(_localctx, 0, ECLParser.RULE_expressionconstraint);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 324;
        this.ws();
        this.state = 329;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 0, this._ctx)) {
          case 1: {
            this.state = 325;
            this.refinedexpressionconstraint();
          }
            break;

          case 2: {
            this.state = 326;
            this.compoundexpressionconstraint();
          }
            break;

          case 3: {
            this.state = 327;
            this.dottedexpressionconstraint();
          }
            break;

          case 4: {
            this.state = 328;
            this.subexpressionconstraint();
          }
            break;
        }
        this.state = 331;
        this.ws();
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
  public refinedexpressionconstraint(): RefinedexpressionconstraintContext {
    let _localctx: RefinedexpressionconstraintContext = new RefinedexpressionconstraintContext(this._ctx, this.state);
    this.enterRule(_localctx, 2, ECLParser.RULE_refinedexpressionconstraint);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 333;
        this.subexpressionconstraint();
        this.state = 334;
        this.ws();
        this.state = 335;
        this.match(ECLParser.COLON);
        this.state = 336;
        this.ws();
        this.state = 337;
        this.eclrefinement();
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
  public compoundexpressionconstraint(): CompoundexpressionconstraintContext {
    let _localctx: CompoundexpressionconstraintContext = new CompoundexpressionconstraintContext(this._ctx, this.state);
    this.enterRule(_localctx, 4, ECLParser.RULE_compoundexpressionconstraint);
    try {
      this.state = 342;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 339;
          this.conjunctionexpressionconstraint();
        }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 340;
          this.disjunctionexpressionconstraint();
        }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
        {
          this.state = 341;
          this.exclusionexpressionconstraint();
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
  public conjunctionexpressionconstraint(): ConjunctionexpressionconstraintContext {
    let _localctx: ConjunctionexpressionconstraintContext = new ConjunctionexpressionconstraintContext(this._ctx, this.state);
    this.enterRule(_localctx, 6, ECLParser.RULE_conjunctionexpressionconstraint);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 344;
        this.subexpressionconstraint();
        this.state = 350;
        this._errHandler.sync(this);
        _alt = 1;
        do {
          switch (_alt) {
            case 1: {
              {
                this.state = 345;
                this.ws();
                this.state = 346;
                this.conjunction();
                this.state = 347;
                this.ws();
                this.state = 348;
                this.subexpressionconstraint();
              }
            }
              break;
            default:
              throw new NoViableAltException(this);
          }
          this.state = 352;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
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
  public disjunctionexpressionconstraint(): DisjunctionexpressionconstraintContext {
    let _localctx: DisjunctionexpressionconstraintContext = new DisjunctionexpressionconstraintContext(this._ctx, this.state);
    this.enterRule(_localctx, 8, ECLParser.RULE_disjunctionexpressionconstraint);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 354;
        this.subexpressionconstraint();
        this.state = 360;
        this._errHandler.sync(this);
        _alt = 1;
        do {
          switch (_alt) {
            case 1: {
              {
                this.state = 355;
                this.ws();
                this.state = 356;
                this.disjunction();
                this.state = 357;
                this.ws();
                this.state = 358;
                this.subexpressionconstraint();
              }
            }
              break;
            default:
              throw new NoViableAltException(this);
          }
          this.state = 362;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
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
  public exclusionexpressionconstraint(): ExclusionexpressionconstraintContext {
    let _localctx: ExclusionexpressionconstraintContext = new ExclusionexpressionconstraintContext(this._ctx, this.state);
    this.enterRule(_localctx, 10, ECLParser.RULE_exclusionexpressionconstraint);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 364;
        this.subexpressionconstraint();
        this.state = 365;
        this.ws();
        this.state = 366;
        this.exclusion();
        this.state = 367;
        this.ws();
        this.state = 368;
        this.subexpressionconstraint();
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
  public dottedexpressionconstraint(): DottedexpressionconstraintContext {
    let _localctx: DottedexpressionconstraintContext = new DottedexpressionconstraintContext(this._ctx, this.state);
    this.enterRule(_localctx, 12, ECLParser.RULE_dottedexpressionconstraint);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 370;
        this.subexpressionconstraint();
        this.state = 374;
        this._errHandler.sync(this);
        _alt = 1;
        do {
          switch (_alt) {
            case 1: {
              {
                this.state = 371;
                this.ws();
                this.state = 372;
                this.dottedexpressionattribute();
              }
            }
              break;
            default:
              throw new NoViableAltException(this);
          }
          this.state = 376;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
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
  public dottedexpressionattribute(): DottedexpressionattributeContext {
    let _localctx: DottedexpressionattributeContext = new DottedexpressionattributeContext(this._ctx, this.state);
    this.enterRule(_localctx, 14, ECLParser.RULE_dottedexpressionattribute);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 378;
        this.dot();
        this.state = 379;
        this.ws();
        this.state = 380;
        this.eclattributename();
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
  public subexpressionconstraint(): SubexpressionconstraintContext {
    let _localctx: SubexpressionconstraintContext = new SubexpressionconstraintContext(this._ctx, this.state);
    this.enterRule(_localctx, 16, ECLParser.RULE_subexpressionconstraint);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 385;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === ECLParser.LESS_THAN || _la === ECLParser.GREATER_THAN) {
          {
            this.state = 382;
            this.constraintoperator();
            this.state = 383;
            this.ws();
          }
        }

        this.state = 418;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
          case 1: {
            {
              this.state = 390;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === ECLParser.CARAT) {
                {
                  this.state = 387;
                  this.memberof();
                  this.state = 388;
                  this.ws();
                }
              }

              this.state = 399;
              this._errHandler.sync(this);
              switch (this._input.LA(1)) {
                case ECLParser.ASTERISK:
                case ECLParser.ONE:
                case ECLParser.TWO:
                case ECLParser.THREE:
                case ECLParser.FOUR:
                case ECLParser.FIVE:
                case ECLParser.SIX:
                case ECLParser.SEVEN:
                case ECLParser.EIGHT:
                case ECLParser.NINE: {
                  this.state = 392;
                  this.eclfocusconcept();
                }
                  break;
                case ECLParser.LEFT_PAREN: {
                  {
                    this.state = 393;
                    this.match(ECLParser.LEFT_PAREN);
                    this.state = 394;
                    this.ws();
                    this.state = 395;
                    this.expressionconstraint();
                    this.state = 396;
                    this.ws();
                    this.state = 397;
                    this.match(ECLParser.RIGHT_PAREN);
                  }
                }
                  break;
                default:
                  throw new NoViableAltException(this);
              }
              this.state = 406;
              this._errHandler.sync(this);
              _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
              while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                  {
                    {
                      this.state = 401;
                      this.ws();
                      this.state = 402;
                      this.memberfilterconstraint();
                    }
                  }
                }
                this.state = 408;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
              }
            }
          }
            break;

          case 2: {
            this.state = 416;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case ECLParser.ASTERISK:
              case ECLParser.ONE:
              case ECLParser.TWO:
              case ECLParser.THREE:
              case ECLParser.FOUR:
              case ECLParser.FIVE:
              case ECLParser.SIX:
              case ECLParser.SEVEN:
              case ECLParser.EIGHT:
              case ECLParser.NINE: {
                this.state = 409;
                this.eclfocusconcept();
              }
                break;
              case ECLParser.LEFT_PAREN: {
                {
                  this.state = 410;
                  this.match(ECLParser.LEFT_PAREN);
                  this.state = 411;
                  this.ws();
                  this.state = 412;
                  this.expressionconstraint();
                  this.state = 413;
                  this.ws();
                  this.state = 414;
                  this.match(ECLParser.RIGHT_PAREN);
                }
              }
                break;
              default:
                throw new NoViableAltException(this);
            }
          }
            break;
        }
        this.state = 427;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 420;
                this.ws();
                this.state = 423;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
                  case 1: {
                    this.state = 421;
                    this.descriptionfilterconstraint();
                  }
                    break;

                  case 2: {
                    this.state = 422;
                    this.conceptfilterconstraint();
                  }
                    break;
                }
              }
            }
          }
          this.state = 429;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
        }
        this.state = 433;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 13, this._ctx)) {
          case 1: {
            this.state = 430;
            this.ws();
            this.state = 431;
            this.historysupplement();
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
  public eclfocusconcept(): EclfocusconceptContext {
    let _localctx: EclfocusconceptContext = new EclfocusconceptContext(this._ctx, this.state);
    this.enterRule(_localctx, 18, ECLParser.RULE_eclfocusconcept);
    try {
      this.state = 437;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case ECLParser.ONE:
        case ECLParser.TWO:
        case ECLParser.THREE:
        case ECLParser.FOUR:
        case ECLParser.FIVE:
        case ECLParser.SIX:
        case ECLParser.SEVEN:
        case ECLParser.EIGHT:
        case ECLParser.NINE:
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 435;
          this.eclconceptreference();
        }
          break;
        case ECLParser.ASTERISK:
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 436;
          this.wildcard();
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
  public dot(): DotContext {
    let _localctx: DotContext = new DotContext(this._ctx, this.state);
    this.enterRule(_localctx, 20, ECLParser.RULE_dot);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 439;
        this.match(ECLParser.PERIOD);
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
  public memberof(): MemberofContext {
    let _localctx: MemberofContext = new MemberofContext(this._ctx, this.state);
    this.enterRule(_localctx, 22, ECLParser.RULE_memberof);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 441;
        this.match(ECLParser.CARAT);
        this.state = 452;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 16, this._ctx)) {
          case 1: {
            this.state = 442;
            this.ws();
            this.state = 443;
            this.match(ECLParser.LEFT_BRACE);
            this.state = 444;
            this.ws();
            this.state = 447;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case ECLParser.ONE:
              case ECLParser.TWO:
              case ECLParser.THREE:
              case ECLParser.FOUR:
              case ECLParser.FIVE:
              case ECLParser.SIX:
              case ECLParser.SEVEN:
              case ECLParser.EIGHT:
              case ECLParser.NINE:
              case ECLParser.CAP_A:
              case ECLParser.CAP_B:
              case ECLParser.CAP_C:
              case ECLParser.CAP_D:
              case ECLParser.CAP_E:
              case ECLParser.CAP_F:
              case ECLParser.CAP_G:
              case ECLParser.CAP_H:
              case ECLParser.CAP_I:
              case ECLParser.CAP_J:
              case ECLParser.CAP_K:
              case ECLParser.CAP_L:
              case ECLParser.CAP_M:
              case ECLParser.CAP_N:
              case ECLParser.CAP_O:
              case ECLParser.CAP_P:
              case ECLParser.CAP_Q:
              case ECLParser.CAP_R:
              case ECLParser.CAP_S:
              case ECLParser.CAP_T:
              case ECLParser.CAP_U:
              case ECLParser.CAP_V:
              case ECLParser.CAP_W:
              case ECLParser.CAP_X:
              case ECLParser.CAP_Y:
              case ECLParser.CAP_Z:
              case ECLParser.A:
              case ECLParser.B:
              case ECLParser.C:
              case ECLParser.D:
              case ECLParser.E:
              case ECLParser.F:
              case ECLParser.G:
              case ECLParser.H:
              case ECLParser.I:
              case ECLParser.J:
              case ECLParser.K:
              case ECLParser.L:
              case ECLParser.M:
              case ECLParser.N:
              case ECLParser.O:
              case ECLParser.P:
              case ECLParser.Q:
              case ECLParser.R:
              case ECLParser.S:
              case ECLParser.T:
              case ECLParser.U:
              case ECLParser.V:
              case ECLParser.W:
              case ECLParser.X:
              case ECLParser.Y:
              case ECLParser.Z: {
                this.state = 445;
                this.refsetfieldset();
              }
                break;
              case ECLParser.ASTERISK: {
                this.state = 446;
                this.wildcard();
              }
                break;
              default:
                throw new NoViableAltException(this);
            }
            this.state = 449;
            this.ws();
            this.state = 450;
            this.match(ECLParser.RIGHT_BRACE);
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
  public refsetfieldset(): RefsetfieldsetContext {
    let _localctx: RefsetfieldsetContext = new RefsetfieldsetContext(this._ctx, this.state);
    this.enterRule(_localctx, 24, ECLParser.RULE_refsetfieldset);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 454;
        this.refsetfield();
        this.state = 462;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 455;
                this.ws();
                this.state = 456;
                this.match(ECLParser.COMMA);
                this.state = 457;
                this.ws();
                this.state = 458;
                this.refsetfield();
              }
            }
          }
          this.state = 464;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
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
  public refsetfield(): RefsetfieldContext {
    let _localctx: RefsetfieldContext = new RefsetfieldContext(this._ctx, this.state);
    this.enterRule(_localctx, 26, ECLParser.RULE_refsetfield);
    try {
      this.state = 467;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case ECLParser.CAP_A:
        case ECLParser.CAP_B:
        case ECLParser.CAP_C:
        case ECLParser.CAP_D:
        case ECLParser.CAP_E:
        case ECLParser.CAP_F:
        case ECLParser.CAP_G:
        case ECLParser.CAP_H:
        case ECLParser.CAP_I:
        case ECLParser.CAP_J:
        case ECLParser.CAP_K:
        case ECLParser.CAP_L:
        case ECLParser.CAP_M:
        case ECLParser.CAP_N:
        case ECLParser.CAP_O:
        case ECLParser.CAP_P:
        case ECLParser.CAP_Q:
        case ECLParser.CAP_R:
        case ECLParser.CAP_S:
        case ECLParser.CAP_T:
        case ECLParser.CAP_U:
        case ECLParser.CAP_V:
        case ECLParser.CAP_W:
        case ECLParser.CAP_X:
        case ECLParser.CAP_Y:
        case ECLParser.CAP_Z:
        case ECLParser.A:
        case ECLParser.B:
        case ECLParser.C:
        case ECLParser.D:
        case ECLParser.E:
        case ECLParser.F:
        case ECLParser.G:
        case ECLParser.H:
        case ECLParser.I:
        case ECLParser.J:
        case ECLParser.K:
        case ECLParser.L:
        case ECLParser.M:
        case ECLParser.N:
        case ECLParser.O:
        case ECLParser.P:
        case ECLParser.Q:
        case ECLParser.R:
        case ECLParser.S:
        case ECLParser.T:
        case ECLParser.U:
        case ECLParser.V:
        case ECLParser.W:
        case ECLParser.X:
        case ECLParser.Y:
        case ECLParser.Z:
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 465;
          this.refsetfieldname();
        }
          break;
        case ECLParser.ONE:
        case ECLParser.TWO:
        case ECLParser.THREE:
        case ECLParser.FOUR:
        case ECLParser.FIVE:
        case ECLParser.SIX:
        case ECLParser.SEVEN:
        case ECLParser.EIGHT:
        case ECLParser.NINE:
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 466;
          this.refsetfieldref();
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
  public refsetfieldname(): RefsetfieldnameContext {
    let _localctx: RefsetfieldnameContext = new RefsetfieldnameContext(this._ctx, this.state);
    this.enterRule(_localctx, 28, ECLParser.RULE_refsetfieldname);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 470;
        this._errHandler.sync(this);
        _alt = 1;
        do {
          switch (_alt) {
            case 1: {
              {
                this.state = 469;
                this.alpha();
              }
            }
              break;
            default:
              throw new NoViableAltException(this);
          }
          this.state = 472;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
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
  public refsetfieldref(): RefsetfieldrefContext {
    let _localctx: RefsetfieldrefContext = new RefsetfieldrefContext(this._ctx, this.state);
    this.enterRule(_localctx, 30, ECLParser.RULE_refsetfieldref);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 474;
        this.eclconceptreference();
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
  public eclconceptreference(): EclconceptreferenceContext {
    let _localctx: EclconceptreferenceContext = new EclconceptreferenceContext(this._ctx, this.state);
    this.enterRule(_localctx, 32, ECLParser.RULE_eclconceptreference);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 476;
        this.conceptid();
        this.state = 484;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 20, this._ctx)) {
          case 1: {
            this.state = 477;
            this.ws();
            this.state = 478;
            this.match(ECLParser.PIPE);
            this.state = 479;
            this.ws();
            this.state = 480;
            this.term();
            this.state = 481;
            this.ws();
            this.state = 482;
            this.match(ECLParser.PIPE);
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
  public eclconceptreferenceset(): EclconceptreferencesetContext {
    let _localctx: EclconceptreferencesetContext = new EclconceptreferencesetContext(this._ctx, this.state);
    this.enterRule(_localctx, 34, ECLParser.RULE_eclconceptreferenceset);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 486;
        this.match(ECLParser.LEFT_PAREN);
        this.state = 487;
        this.ws();
        this.state = 488;
        this.eclconceptreference();
        this.state = 492;
        this._errHandler.sync(this);
        _alt = 1;
        do {
          switch (_alt) {
            case 1: {
              {
                this.state = 489;
                this.mws();
                this.state = 490;
                this.eclconceptreference();
              }
            }
              break;
            default:
              throw new NoViableAltException(this);
          }
          this.state = 494;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
        } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
        this.state = 496;
        this.ws();
        this.state = 497;
        this.match(ECLParser.RIGHT_PAREN);
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
  public conceptid(): ConceptidContext {
    let _localctx: ConceptidContext = new ConceptidContext(this._ctx, this.state);
    this.enterRule(_localctx, 36, ECLParser.RULE_conceptid);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 499;
        this.sctid();
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
  public term(): TermContext {
    let _localctx: TermContext = new TermContext(this._ctx, this.state);
    this.enterRule(_localctx, 38, ECLParser.RULE_term);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 502;
        this._errHandler.sync(this);
        _alt = 1;
        do {
          switch (_alt) {
            case 1: {
              {
                this.state = 501;
                this.nonwsnonpipe();
              }
            }
              break;
            default:
              throw new NoViableAltException(this);
          }
          this.state = 504;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
        } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
        this.state = 518;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 507;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                  {
                    {
                      this.state = 506;
                      this.sp();
                    }
                  }
                  this.state = 509;
                  this._errHandler.sync(this);
                  _la = this._input.LA(1);
                } while (_la === ECLParser.SPACE);
                this.state = 512;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                  switch (_alt) {
                    case 1: {
                      {
                        this.state = 511;
                        this.nonwsnonpipe();
                      }
                    }
                      break;
                    default:
                      throw new NoViableAltException(this);
                  }
                  this.state = 514;
                  this._errHandler.sync(this);
                  _alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
                } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
              }
            }
          }
          this.state = 520;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
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
  public wildcard(): WildcardContext {
    let _localctx: WildcardContext = new WildcardContext(this._ctx, this.state);
    this.enterRule(_localctx, 40, ECLParser.RULE_wildcard);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 521;
        this.match(ECLParser.ASTERISK);
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
  public constraintoperator(): ConstraintoperatorContext {
    let _localctx: ConstraintoperatorContext = new ConstraintoperatorContext(this._ctx, this.state);
    this.enterRule(_localctx, 42, ECLParser.RULE_constraintoperator);
    try {
      this.state = 531;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 26, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 523;
          this.childof();
        }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 524;
          this.childorselfof();
        }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
        {
          this.state = 525;
          this.descendantorselfof();
        }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
        {
          this.state = 526;
          this.descendantof();
        }
          break;

        case 5:
          this.enterOuterAlt(_localctx, 5);
        {
          this.state = 527;
          this.parentof();
        }
          break;

        case 6:
          this.enterOuterAlt(_localctx, 6);
        {
          this.state = 528;
          this.parentorselfof();
        }
          break;

        case 7:
          this.enterOuterAlt(_localctx, 7);
        {
          this.state = 529;
          this.ancestororselfof();
        }
          break;

        case 8:
          this.enterOuterAlt(_localctx, 8);
        {
          this.state = 530;
          this.ancestorof();
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
  public descendantof(): DescendantofContext {
    let _localctx: DescendantofContext = new DescendantofContext(this._ctx, this.state);
    this.enterRule(_localctx, 44, ECLParser.RULE_descendantof);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 533;
        this.match(ECLParser.LESS_THAN);
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
  public descendantorselfof(): DescendantorselfofContext {
    let _localctx: DescendantorselfofContext = new DescendantorselfofContext(this._ctx, this.state);
    this.enterRule(_localctx, 46, ECLParser.RULE_descendantorselfof);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        {
          this.state = 535;
          this.match(ECLParser.LESS_THAN);
          this.state = 536;
          this.match(ECLParser.LESS_THAN);
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
  public childof(): ChildofContext {
    let _localctx: ChildofContext = new ChildofContext(this._ctx, this.state);
    this.enterRule(_localctx, 48, ECLParser.RULE_childof);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        {
          this.state = 538;
          this.match(ECLParser.LESS_THAN);
          this.state = 539;
          this.match(ECLParser.EXCLAMATION);
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
  public childorselfof(): ChildorselfofContext {
    let _localctx: ChildorselfofContext = new ChildorselfofContext(this._ctx, this.state);
    this.enterRule(_localctx, 50, ECLParser.RULE_childorselfof);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        {
          this.state = 541;
          this.match(ECLParser.LESS_THAN);
          this.state = 542;
          this.match(ECLParser.LESS_THAN);
          this.state = 543;
          this.match(ECLParser.EXCLAMATION);
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
  public ancestorof(): AncestorofContext {
    let _localctx: AncestorofContext = new AncestorofContext(this._ctx, this.state);
    this.enterRule(_localctx, 52, ECLParser.RULE_ancestorof);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 545;
        this.match(ECLParser.GREATER_THAN);
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
  public ancestororselfof(): AncestororselfofContext {
    let _localctx: AncestororselfofContext = new AncestororselfofContext(this._ctx, this.state);
    this.enterRule(_localctx, 54, ECLParser.RULE_ancestororselfof);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        {
          this.state = 547;
          this.match(ECLParser.GREATER_THAN);
          this.state = 548;
          this.match(ECLParser.GREATER_THAN);
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
  public parentof(): ParentofContext {
    let _localctx: ParentofContext = new ParentofContext(this._ctx, this.state);
    this.enterRule(_localctx, 56, ECLParser.RULE_parentof);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        {
          this.state = 550;
          this.match(ECLParser.GREATER_THAN);
          this.state = 551;
          this.match(ECLParser.EXCLAMATION);
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
  public parentorselfof(): ParentorselfofContext {
    let _localctx: ParentorselfofContext = new ParentorselfofContext(this._ctx, this.state);
    this.enterRule(_localctx, 58, ECLParser.RULE_parentorselfof);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        {
          this.state = 553;
          this.match(ECLParser.GREATER_THAN);
          this.state = 554;
          this.match(ECLParser.GREATER_THAN);
          this.state = 555;
          this.match(ECLParser.EXCLAMATION);
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
  public conjunction(): ConjunctionContext {
    let _localctx: ConjunctionContext = new ConjunctionContext(this._ctx, this.state);
    this.enterRule(_localctx, 60, ECLParser.RULE_conjunction);
    let _la: number;
    try {
      this.state = 571;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case ECLParser.CAP_A:
        case ECLParser.A:
          this.enterOuterAlt(_localctx, 1);
        {
          {
            this.state = 559;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 27, this._ctx)) {
              case 1: {
                this.state = 557;
                _la = this._input.LA(1);
                if (!(_la === ECLParser.CAP_A || _la === ECLParser.A)) {
                  this._errHandler.recoverInline(this);
                } else {
                  if (this._input.LA(1) === Token.EOF) {
                    this.matchedEOF = true;
                  }

                  this._errHandler.reportMatch(this);
                  this.consume();
                }
              }
                break;

              case 2: {
                this.state = 558;
                _la = this._input.LA(1);
                if (!(_la === ECLParser.CAP_A || _la === ECLParser.A)) {
                  this._errHandler.recoverInline(this);
                } else {
                  if (this._input.LA(1) === Token.EOF) {
                    this.matchedEOF = true;
                  }

                  this._errHandler.reportMatch(this);
                  this.consume();
                }
              }
                break;
            }
            this.state = 563;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 28, this._ctx)) {
              case 1: {
                this.state = 561;
                _la = this._input.LA(1);
                if (!(_la === ECLParser.CAP_N || _la === ECLParser.N)) {
                  this._errHandler.recoverInline(this);
                } else {
                  if (this._input.LA(1) === Token.EOF) {
                    this.matchedEOF = true;
                  }

                  this._errHandler.reportMatch(this);
                  this.consume();
                }
              }
                break;

              case 2: {
                this.state = 562;
                _la = this._input.LA(1);
                if (!(_la === ECLParser.CAP_N || _la === ECLParser.N)) {
                  this._errHandler.recoverInline(this);
                } else {
                  if (this._input.LA(1) === Token.EOF) {
                    this.matchedEOF = true;
                  }

                  this._errHandler.reportMatch(this);
                  this.consume();
                }
              }
                break;
            }
            this.state = 567;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 29, this._ctx)) {
              case 1: {
                this.state = 565;
                _la = this._input.LA(1);
                if (!(_la === ECLParser.CAP_D || _la === ECLParser.D)) {
                  this._errHandler.recoverInline(this);
                } else {
                  if (this._input.LA(1) === Token.EOF) {
                    this.matchedEOF = true;
                  }

                  this._errHandler.reportMatch(this);
                  this.consume();
                }
              }
                break;

              case 2: {
                this.state = 566;
                _la = this._input.LA(1);
                if (!(_la === ECLParser.CAP_D || _la === ECLParser.D)) {
                  this._errHandler.recoverInline(this);
                } else {
                  if (this._input.LA(1) === Token.EOF) {
                    this.matchedEOF = true;
                  }

                  this._errHandler.reportMatch(this);
                  this.consume();
                }
              }
                break;
            }
            this.state = 569;
            this.mws();
          }
        }
          break;
        case ECLParser.COMMA:
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 570;
          this.match(ECLParser.COMMA);
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
  public disjunction(): DisjunctionContext {
    let _localctx: DisjunctionContext = new DisjunctionContext(this._ctx, this.state);
    this.enterRule(_localctx, 62, ECLParser.RULE_disjunction);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 575;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 31, this._ctx)) {
          case 1: {
            this.state = 573;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_O || _la === ECLParser.O)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 574;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_O || _la === ECLParser.O)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 579;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 32, this._ctx)) {
          case 1: {
            this.state = 577;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_R || _la === ECLParser.R)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 578;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_R || _la === ECLParser.R)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 581;
        this.mws();
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
  public exclusion(): ExclusionContext {
    let _localctx: ExclusionContext = new ExclusionContext(this._ctx, this.state);
    this.enterRule(_localctx, 64, ECLParser.RULE_exclusion);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 585;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 33, this._ctx)) {
          case 1: {
            this.state = 583;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_M || _la === ECLParser.M)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 584;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_M || _la === ECLParser.M)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 589;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 34, this._ctx)) {
          case 1: {
            this.state = 587;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_I || _la === ECLParser.I)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 588;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_I || _la === ECLParser.I)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 593;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 35, this._ctx)) {
          case 1: {
            this.state = 591;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_N || _la === ECLParser.N)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 592;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_N || _la === ECLParser.N)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 597;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 36, this._ctx)) {
          case 1: {
            this.state = 595;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_U || _la === ECLParser.U)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 596;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_U || _la === ECLParser.U)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 601;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 37, this._ctx)) {
          case 1: {
            this.state = 599;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_S || _la === ECLParser.S)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 600;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_S || _la === ECLParser.S)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 603;
        this.mws();
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
  public eclrefinement(): EclrefinementContext {
    let _localctx: EclrefinementContext = new EclrefinementContext(this._ctx, this.state);
    this.enterRule(_localctx, 66, ECLParser.RULE_eclrefinement);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 605;
        this.subrefinement();
        this.state = 606;
        this.ws();
        this.state = 609;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 38, this._ctx)) {
          case 1: {
            this.state = 607;
            this.conjunctionrefinementset();
          }
            break;

          case 2: {
            this.state = 608;
            this.disjunctionrefinementset();
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
  public conjunctionrefinementset(): ConjunctionrefinementsetContext {
    let _localctx: ConjunctionrefinementsetContext = new ConjunctionrefinementsetContext(this._ctx, this.state);
    this.enterRule(_localctx, 68, ECLParser.RULE_conjunctionrefinementset);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 616;
        this._errHandler.sync(this);
        _alt = 1;
        do {
          switch (_alt) {
            case 1: {
              {
                this.state = 611;
                this.ws();
                this.state = 612;
                this.conjunction();
                this.state = 613;
                this.ws();
                this.state = 614;
                this.subrefinement();
              }
            }
              break;
            default:
              throw new NoViableAltException(this);
          }
          this.state = 618;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
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
  public disjunctionrefinementset(): DisjunctionrefinementsetContext {
    let _localctx: DisjunctionrefinementsetContext = new DisjunctionrefinementsetContext(this._ctx, this.state);
    this.enterRule(_localctx, 70, ECLParser.RULE_disjunctionrefinementset);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 625;
        this._errHandler.sync(this);
        _alt = 1;
        do {
          switch (_alt) {
            case 1: {
              {
                this.state = 620;
                this.ws();
                this.state = 621;
                this.disjunction();
                this.state = 622;
                this.ws();
                this.state = 623;
                this.subrefinement();
              }
            }
              break;
            default:
              throw new NoViableAltException(this);
          }
          this.state = 627;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
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
  public subrefinement(): SubrefinementContext {
    let _localctx: SubrefinementContext = new SubrefinementContext(this._ctx, this.state);
    this.enterRule(_localctx, 72, ECLParser.RULE_subrefinement);
    try {
      this.state = 637;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 41, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 629;
          this.eclattributeset();
        }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 630;
          this.eclattributegroup();
        }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
        {
          {
            this.state = 631;
            this.match(ECLParser.LEFT_PAREN);
            this.state = 632;
            this.ws();
            this.state = 633;
            this.eclrefinement();
            this.state = 634;
            this.ws();
            this.state = 635;
            this.match(ECLParser.RIGHT_PAREN);
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
  public eclattributeset(): EclattributesetContext {
    let _localctx: EclattributesetContext = new EclattributesetContext(this._ctx, this.state);
    this.enterRule(_localctx, 74, ECLParser.RULE_eclattributeset);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 639;
        this.subattributeset();
        this.state = 640;
        this.ws();
        this.state = 643;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 42, this._ctx)) {
          case 1: {
            this.state = 641;
            this.conjunctionattributeset();
          }
            break;

          case 2: {
            this.state = 642;
            this.disjunctionattributeset();
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
  public conjunctionattributeset(): ConjunctionattributesetContext {
    let _localctx: ConjunctionattributesetContext = new ConjunctionattributesetContext(this._ctx, this.state);
    this.enterRule(_localctx, 76, ECLParser.RULE_conjunctionattributeset);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 650;
        this._errHandler.sync(this);
        _alt = 1;
        do {
          switch (_alt) {
            case 1: {
              {
                this.state = 645;
                this.ws();
                this.state = 646;
                this.conjunction();
                this.state = 647;
                this.ws();
                this.state = 648;
                this.subattributeset();
              }
            }
              break;
            default:
              throw new NoViableAltException(this);
          }
          this.state = 652;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
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
  public disjunctionattributeset(): DisjunctionattributesetContext {
    let _localctx: DisjunctionattributesetContext = new DisjunctionattributesetContext(this._ctx, this.state);
    this.enterRule(_localctx, 78, ECLParser.RULE_disjunctionattributeset);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 659;
        this._errHandler.sync(this);
        _alt = 1;
        do {
          switch (_alt) {
            case 1: {
              {
                this.state = 654;
                this.ws();
                this.state = 655;
                this.disjunction();
                this.state = 656;
                this.ws();
                this.state = 657;
                this.subattributeset();
              }
            }
              break;
            default:
              throw new NoViableAltException(this);
          }
          this.state = 661;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
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
  public subattributeset(): SubattributesetContext {
    let _localctx: SubattributesetContext = new SubattributesetContext(this._ctx, this.state);
    this.enterRule(_localctx, 80, ECLParser.RULE_subattributeset);
    try {
      this.state = 670;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 45, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 663;
          this.eclattribute();
        }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
        {
          {
            this.state = 664;
            this.match(ECLParser.LEFT_PAREN);
            this.state = 665;
            this.ws();
            this.state = 666;
            this.eclattributeset();
            this.state = 667;
            this.ws();
            this.state = 668;
            this.match(ECLParser.RIGHT_PAREN);
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
  public eclattributegroup(): EclattributegroupContext {
    let _localctx: EclattributegroupContext = new EclattributegroupContext(this._ctx, this.state);
    this.enterRule(_localctx, 82, ECLParser.RULE_eclattributegroup);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 677;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === ECLParser.LEFT_BRACE) {
          {
            this.state = 672;
            this.match(ECLParser.LEFT_BRACE);
            this.state = 673;
            this.cardinality();
            this.state = 674;
            this.match(ECLParser.RIGHT_BRACE);
            this.state = 675;
            this.ws();
          }
        }

        this.state = 679;
        this.match(ECLParser.LEFT_CURLY_BRACE);
        this.state = 680;
        this.ws();
        this.state = 681;
        this.eclattributeset();
        this.state = 682;
        this.ws();
        this.state = 683;
        this.match(ECLParser.RIGHT_CURLY_BRACE);
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
  public eclattribute(): EclattributeContext {
    let _localctx: EclattributeContext = new EclattributeContext(this._ctx, this.state);
    this.enterRule(_localctx, 84, ECLParser.RULE_eclattribute);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 690;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === ECLParser.LEFT_BRACE) {
          {
            this.state = 685;
            this.match(ECLParser.LEFT_BRACE);
            this.state = 686;
            this.cardinality();
            this.state = 687;
            this.match(ECLParser.RIGHT_BRACE);
            this.state = 688;
            this.ws();
          }
        }

        this.state = 695;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === ECLParser.CAP_R || _la === ECLParser.R) {
          {
            this.state = 692;
            this.reverseflag();
            this.state = 693;
            this.ws();
          }
        }

        this.state = 697;
        this.eclattributename();
        this.state = 698;
        this.ws();
        this.state = 718;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 50, this._ctx)) {
          case 1: {
            {
              this.state = 699;
              this.expressioncomparisonoperator();
              this.state = 700;
              this.ws();
              this.state = 701;
              this.subexpressionconstraint();
            }
          }
            break;

          case 2: {
            {
              this.state = 703;
              this.numericcomparisonoperator();
              this.state = 704;
              this.ws();
              this.state = 705;
              this.match(ECLParser.HASH);
              this.state = 706;
              this.numericvalue();
            }
          }
            break;

          case 3: {
            {
              this.state = 708;
              this.stringcomparisonoperator();
              this.state = 709;
              this.ws();
              this.state = 712;
              this._errHandler.sync(this);
              switch (this._input.LA(1)) {
                case ECLParser.QUOTE:
                case ECLParser.CAP_M:
                case ECLParser.CAP_W:
                case ECLParser.M:
                case ECLParser.W: {
                  this.state = 710;
                  this.typedsearchterm();
                }
                  break;
                case ECLParser.LEFT_PAREN: {
                  this.state = 711;
                  this.typedsearchtermset();
                }
                  break;
                default:
                  throw new NoViableAltException(this);
              }
            }
          }
            break;

          case 4: {
            {
              this.state = 714;
              this.booleancomparisonoperator();
              this.state = 715;
              this.ws();
              this.state = 716;
              this.booleanvalue();
            }
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
    this.enterRule(_localctx, 86, ECLParser.RULE_cardinality);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 720;
        this.minvalue();
        this.state = 721;
        this.to();
        this.state = 722;
        this.maxvalue();
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
  public minvalue(): MinvalueContext {
    let _localctx: MinvalueContext = new MinvalueContext(this._ctx, this.state);
    this.enterRule(_localctx, 88, ECLParser.RULE_minvalue);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 724;
        this.nonnegativeintegervalue();
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
  public to(): ToContext {
    let _localctx: ToContext = new ToContext(this._ctx, this.state);
    this.enterRule(_localctx, 90, ECLParser.RULE_to);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        {
          this.state = 726;
          this.match(ECLParser.PERIOD);
          this.state = 727;
          this.match(ECLParser.PERIOD);
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
  public maxvalue(): MaxvalueContext {
    let _localctx: MaxvalueContext = new MaxvalueContext(this._ctx, this.state);
    this.enterRule(_localctx, 92, ECLParser.RULE_maxvalue);
    try {
      this.state = 731;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case ECLParser.ZERO:
        case ECLParser.ONE:
        case ECLParser.TWO:
        case ECLParser.THREE:
        case ECLParser.FOUR:
        case ECLParser.FIVE:
        case ECLParser.SIX:
        case ECLParser.SEVEN:
        case ECLParser.EIGHT:
        case ECLParser.NINE:
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 729;
          this.nonnegativeintegervalue();
        }
          break;
        case ECLParser.ASTERISK:
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 730;
          this.many();
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
  public many(): ManyContext {
    let _localctx: ManyContext = new ManyContext(this._ctx, this.state);
    this.enterRule(_localctx, 94, ECLParser.RULE_many);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 733;
        this.match(ECLParser.ASTERISK);
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
  public reverseflag(): ReverseflagContext {
    let _localctx: ReverseflagContext = new ReverseflagContext(this._ctx, this.state);
    this.enterRule(_localctx, 96, ECLParser.RULE_reverseflag);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 735;
        _la = this._input.LA(1);
        if (!(_la === ECLParser.CAP_R || _la === ECLParser.R)) {
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
  public eclattributename(): EclattributenameContext {
    let _localctx: EclattributenameContext = new EclattributenameContext(this._ctx, this.state);
    this.enterRule(_localctx, 98, ECLParser.RULE_eclattributename);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 737;
        this.subexpressionconstraint();
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
  public expressioncomparisonoperator(): ExpressioncomparisonoperatorContext {
    let _localctx: ExpressioncomparisonoperatorContext = new ExpressioncomparisonoperatorContext(this._ctx, this.state);
    this.enterRule(_localctx, 100, ECLParser.RULE_expressioncomparisonoperator);
    try {
      this.state = 742;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case ECLParser.EQUALS:
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 739;
          this.match(ECLParser.EQUALS);
        }
          break;
        case ECLParser.EXCLAMATION:
          this.enterOuterAlt(_localctx, 2);
        {
          {
            this.state = 740;
            this.match(ECLParser.EXCLAMATION);
            this.state = 741;
            this.match(ECLParser.EQUALS);
          }
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
  public numericcomparisonoperator(): NumericcomparisonoperatorContext {
    let _localctx: NumericcomparisonoperatorContext = new NumericcomparisonoperatorContext(this._ctx, this.state);
    this.enterRule(_localctx, 102, ECLParser.RULE_numericcomparisonoperator);
    try {
      this.state = 753;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 53, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 744;
          this.match(ECLParser.EQUALS);
        }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
        {
          {
            this.state = 745;
            this.match(ECLParser.EXCLAMATION);
            this.state = 746;
            this.match(ECLParser.EQUALS);
          }
        }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
        {
          {
            this.state = 747;
            this.match(ECLParser.LESS_THAN);
            this.state = 748;
            this.match(ECLParser.EQUALS);
          }
        }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
        {
          this.state = 749;
          this.match(ECLParser.LESS_THAN);
        }
          break;

        case 5:
          this.enterOuterAlt(_localctx, 5);
        {
          {
            this.state = 750;
            this.match(ECLParser.GREATER_THAN);
            this.state = 751;
            this.match(ECLParser.EQUALS);
          }
        }
          break;

        case 6:
          this.enterOuterAlt(_localctx, 6);
        {
          this.state = 752;
          this.match(ECLParser.GREATER_THAN);
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
  public timecomparisonoperator(): TimecomparisonoperatorContext {
    let _localctx: TimecomparisonoperatorContext = new TimecomparisonoperatorContext(this._ctx, this.state);
    this.enterRule(_localctx, 104, ECLParser.RULE_timecomparisonoperator);
    try {
      this.state = 764;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 54, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 755;
          this.match(ECLParser.EQUALS);
        }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
        {
          {
            this.state = 756;
            this.match(ECLParser.EXCLAMATION);
            this.state = 757;
            this.match(ECLParser.EQUALS);
          }
        }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
        {
          {
            this.state = 758;
            this.match(ECLParser.LESS_THAN);
            this.state = 759;
            this.match(ECLParser.EQUALS);
          }
        }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
        {
          this.state = 760;
          this.match(ECLParser.LESS_THAN);
        }
          break;

        case 5:
          this.enterOuterAlt(_localctx, 5);
        {
          {
            this.state = 761;
            this.match(ECLParser.GREATER_THAN);
            this.state = 762;
            this.match(ECLParser.EQUALS);
          }
        }
          break;

        case 6:
          this.enterOuterAlt(_localctx, 6);
        {
          this.state = 763;
          this.match(ECLParser.GREATER_THAN);
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
  public stringcomparisonoperator(): StringcomparisonoperatorContext {
    let _localctx: StringcomparisonoperatorContext = new StringcomparisonoperatorContext(this._ctx, this.state);
    this.enterRule(_localctx, 106, ECLParser.RULE_stringcomparisonoperator);
    try {
      this.state = 769;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case ECLParser.EQUALS:
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 766;
          this.match(ECLParser.EQUALS);
        }
          break;
        case ECLParser.EXCLAMATION:
          this.enterOuterAlt(_localctx, 2);
        {
          {
            this.state = 767;
            this.match(ECLParser.EXCLAMATION);
            this.state = 768;
            this.match(ECLParser.EQUALS);
          }
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
  public booleancomparisonoperator(): BooleancomparisonoperatorContext {
    let _localctx: BooleancomparisonoperatorContext = new BooleancomparisonoperatorContext(this._ctx, this.state);
    this.enterRule(_localctx, 108, ECLParser.RULE_booleancomparisonoperator);
    try {
      this.state = 774;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case ECLParser.EQUALS:
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 771;
          this.match(ECLParser.EQUALS);
        }
          break;
        case ECLParser.EXCLAMATION:
          this.enterOuterAlt(_localctx, 2);
        {
          {
            this.state = 772;
            this.match(ECLParser.EXCLAMATION);
            this.state = 773;
            this.match(ECLParser.EQUALS);
          }
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
  public descriptionfilterconstraint(): DescriptionfilterconstraintContext {
    let _localctx: DescriptionfilterconstraintContext = new DescriptionfilterconstraintContext(this._ctx, this.state);
    this.enterRule(_localctx, 110, ECLParser.RULE_descriptionfilterconstraint);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        {
          this.state = 776;
          this.match(ECLParser.LEFT_CURLY_BRACE);
          this.state = 777;
          this.match(ECLParser.LEFT_CURLY_BRACE);
        }
        this.state = 779;
        this.ws();
        this.state = 782;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 57, this._ctx)) {
          case 1: {
            this.state = 780;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_D || _la === ECLParser.D)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 781;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_D || _la === ECLParser.D)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 784;
        this.ws();
        this.state = 785;
        this.descriptionfilter();
        this.state = 793;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 786;
                this.ws();
                this.state = 787;
                this.match(ECLParser.COMMA);
                this.state = 788;
                this.ws();
                this.state = 789;
                this.descriptionfilter();
              }
            }
          }
          this.state = 795;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
        }
        this.state = 796;
        this.ws();
        {
          this.state = 797;
          this.match(ECLParser.RIGHT_CURLY_BRACE);
          this.state = 798;
          this.match(ECLParser.RIGHT_CURLY_BRACE);
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
  public descriptionfilter(): DescriptionfilterContext {
    let _localctx: DescriptionfilterContext = new DescriptionfilterContext(this._ctx, this.state);
    this.enterRule(_localctx, 112, ECLParser.RULE_descriptionfilter);
    try {
      this.state = 807;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 59, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 800;
          this.termfilter();
        }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 801;
          this.languagefilter();
        }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
        {
          this.state = 802;
          this.typefilter();
        }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
        {
          this.state = 803;
          this.dialectfilter();
        }
          break;

        case 5:
          this.enterOuterAlt(_localctx, 5);
        {
          this.state = 804;
          this.modulefilter();
        }
          break;

        case 6:
          this.enterOuterAlt(_localctx, 6);
        {
          this.state = 805;
          this.effectivetimefilter();
        }
          break;

        case 7:
          this.enterOuterAlt(_localctx, 7);
        {
          this.state = 806;
          this.activefilter();
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
  public termfilter(): TermfilterContext {
    let _localctx: TermfilterContext = new TermfilterContext(this._ctx, this.state);
    this.enterRule(_localctx, 114, ECLParser.RULE_termfilter);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 809;
        this.termkeyword();
        this.state = 810;
        this.ws();
        this.state = 811;
        this.stringcomparisonoperator();
        this.state = 812;
        this.ws();
        this.state = 815;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case ECLParser.QUOTE:
          case ECLParser.CAP_M:
          case ECLParser.CAP_W:
          case ECLParser.M:
          case ECLParser.W: {
            this.state = 813;
            this.typedsearchterm();
          }
            break;
          case ECLParser.LEFT_PAREN: {
            this.state = 814;
            this.typedsearchtermset();
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
  public termkeyword(): TermkeywordContext {
    let _localctx: TermkeywordContext = new TermkeywordContext(this._ctx, this.state);
    this.enterRule(_localctx, 116, ECLParser.RULE_termkeyword);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 819;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 61, this._ctx)) {
          case 1: {
            this.state = 817;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_T || _la === ECLParser.T)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 818;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_T || _la === ECLParser.T)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 823;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 62, this._ctx)) {
          case 1: {
            this.state = 821;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_E || _la === ECLParser.E)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 822;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_E || _la === ECLParser.E)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 827;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 63, this._ctx)) {
          case 1: {
            this.state = 825;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_R || _la === ECLParser.R)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 826;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_R || _la === ECLParser.R)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 831;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 64, this._ctx)) {
          case 1: {
            this.state = 829;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_M || _la === ECLParser.M)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 830;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_M || _la === ECLParser.M)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
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
  public typedsearchterm(): TypedsearchtermContext {
    let _localctx: TypedsearchtermContext = new TypedsearchtermContext(this._ctx, this.state);
    this.enterRule(_localctx, 118, ECLParser.RULE_typedsearchterm);
    let _la: number;
    try {
      this.state = 847;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case ECLParser.QUOTE:
        case ECLParser.CAP_M:
        case ECLParser.M:
          this.enterOuterAlt(_localctx, 1);
        {
          {
            this.state = 838;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === ECLParser.CAP_M || _la === ECLParser.M) {
              {
                this.state = 833;
                this.match();
                this.state = 834;
                this.ws();
                this.state = 835;
                this.match(ECLParser.COLON);
                this.state = 836;
                this.ws();
              }
            }

            this.state = 840;
            this.matchsearchtermset();
          }
        }
          break;
        case ECLParser.CAP_W:
        case ECLParser.W:
          this.enterOuterAlt(_localctx, 2);
        {
          {
            this.state = 841;
            this.wild();
            this.state = 842;
            this.ws();
            this.state = 843;
            this.match(ECLParser.COLON);
            this.state = 844;
            this.ws();
            this.state = 845;
            this.wildsearchtermset();
          }
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
  public typedsearchtermset(): TypedsearchtermsetContext {
    let _localctx: TypedsearchtermsetContext = new TypedsearchtermsetContext(this._ctx, this.state);
    this.enterRule(_localctx, 120, ECLParser.RULE_typedsearchtermset);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 849;
        this.match(ECLParser.LEFT_PAREN);
        this.state = 850;
        this.ws();
        this.state = 851;
        this.typedsearchterm();
        this.state = 857;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 67, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 852;
                this.mws();
                this.state = 853;
                this.typedsearchterm();
              }
            }
          }
          this.state = 859;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 67, this._ctx);
        }
        this.state = 860;
        this.ws();
        this.state = 861;
        this.match(ECLParser.RIGHT_PAREN);
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
  public wild(): WildContext {
    let _localctx: WildContext = new WildContext(this._ctx, this.state);
    this.enterRule(_localctx, 122, ECLParser.RULE_wild);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 865;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 68, this._ctx)) {
          case 1: {
            this.state = 863;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_W || _la === ECLParser.W)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 864;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_W || _la === ECLParser.W)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 869;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 69, this._ctx)) {
          case 1: {
            this.state = 867;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_I || _la === ECLParser.I)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 868;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_I || _la === ECLParser.I)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 873;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 70, this._ctx)) {
          case 1: {
            this.state = 871;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_L || _la === ECLParser.L)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 872;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_L || _la === ECLParser.L)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 877;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 71, this._ctx)) {
          case 1: {
            this.state = 875;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_D || _la === ECLParser.D)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 876;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_D || _la === ECLParser.D)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
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
  public match(): MatchContext {
    let _localctx: MatchContext = new MatchContext(this._ctx, this.state);
    this.enterRule(_localctx, 124, ECLParser.RULE_match);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 881;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 72, this._ctx)) {
          case 1: {
            this.state = 879;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_M || _la === ECLParser.M)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 880;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_M || _la === ECLParser.M)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 885;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 73, this._ctx)) {
          case 1: {
            this.state = 883;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_A || _la === ECLParser.A)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 884;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_A || _la === ECLParser.A)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 889;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 74, this._ctx)) {
          case 1: {
            this.state = 887;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_T || _la === ECLParser.T)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 888;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_T || _la === ECLParser.T)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 893;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 75, this._ctx)) {
          case 1: {
            this.state = 891;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_C || _la === ECLParser.C)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 892;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_C || _la === ECLParser.C)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 897;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 76, this._ctx)) {
          case 1: {
            this.state = 895;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_H || _la === ECLParser.H)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 896;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_H || _la === ECLParser.H)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
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
  public matchsearchterm(): MatchsearchtermContext {
    let _localctx: MatchsearchtermContext = new MatchsearchtermContext(this._ctx, this.state);
    this.enterRule(_localctx, 126, ECLParser.RULE_matchsearchterm);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 901;
        this._errHandler.sync(this);
        _alt = 1;
        do {
          switch (_alt) {
            case 1: {
              this.state = 901;
              this._errHandler.sync(this);
              switch (this._input.LA(1)) {
                case ECLParser.UTF8_LETTER:
                case ECLParser.EXCLAMATION:
                case ECLParser.HASH:
                case ECLParser.DOLLAR:
                case ECLParser.PERCENT:
                case ECLParser.AMPERSAND:
                case ECLParser.APOSTROPHE:
                case ECLParser.LEFT_PAREN:
                case ECLParser.RIGHT_PAREN:
                case ECLParser.ASTERISK:
                case ECLParser.PLUS:
                case ECLParser.COMMA:
                case ECLParser.DASH:
                case ECLParser.PERIOD:
                case ECLParser.SLASH:
                case ECLParser.ZERO:
                case ECLParser.ONE:
                case ECLParser.TWO:
                case ECLParser.THREE:
                case ECLParser.FOUR:
                case ECLParser.FIVE:
                case ECLParser.SIX:
                case ECLParser.SEVEN:
                case ECLParser.EIGHT:
                case ECLParser.NINE:
                case ECLParser.COLON:
                case ECLParser.SEMICOLON:
                case ECLParser.LESS_THAN:
                case ECLParser.EQUALS:
                case ECLParser.GREATER_THAN:
                case ECLParser.QUESTION:
                case ECLParser.AT:
                case ECLParser.CAP_A:
                case ECLParser.CAP_B:
                case ECLParser.CAP_C:
                case ECLParser.CAP_D:
                case ECLParser.CAP_E:
                case ECLParser.CAP_F:
                case ECLParser.CAP_G:
                case ECLParser.CAP_H:
                case ECLParser.CAP_I:
                case ECLParser.CAP_J:
                case ECLParser.CAP_K:
                case ECLParser.CAP_L:
                case ECLParser.CAP_M:
                case ECLParser.CAP_N:
                case ECLParser.CAP_O:
                case ECLParser.CAP_P:
                case ECLParser.CAP_Q:
                case ECLParser.CAP_R:
                case ECLParser.CAP_S:
                case ECLParser.CAP_T:
                case ECLParser.CAP_U:
                case ECLParser.CAP_V:
                case ECLParser.CAP_W:
                case ECLParser.CAP_X:
                case ECLParser.CAP_Y:
                case ECLParser.CAP_Z:
                case ECLParser.LEFT_BRACE:
                case ECLParser.RIGHT_BRACE:
                case ECLParser.CARAT:
                case ECLParser.UNDERSCORE:
                case ECLParser.ACCENT:
                case ECLParser.A:
                case ECLParser.B:
                case ECLParser.C:
                case ECLParser.D:
                case ECLParser.E:
                case ECLParser.F:
                case ECLParser.G:
                case ECLParser.H:
                case ECLParser.I:
                case ECLParser.J:
                case ECLParser.K:
                case ECLParser.L:
                case ECLParser.M:
                case ECLParser.N:
                case ECLParser.O:
                case ECLParser.P:
                case ECLParser.Q:
                case ECLParser.R:
                case ECLParser.S:
                case ECLParser.T:
                case ECLParser.U:
                case ECLParser.V:
                case ECLParser.W:
                case ECLParser.X:
                case ECLParser.Y:
                case ECLParser.Z:
                case ECLParser.LEFT_CURLY_BRACE:
                case ECLParser.PIPE:
                case ECLParser.RIGHT_CURLY_BRACE:
                case ECLParser.TILDE: {
                  this.state = 899;
                  this.nonwsnonescapedchar();
                }
                  break;
                case ECLParser.BACKSLASH: {
                  this.state = 900;
                  this.escapedchar();
                }
                  break;
                default:
                  throw new NoViableAltException(this);
              }
            }
              break;
            default:
              throw new NoViableAltException(this);
          }
          this.state = 903;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
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
  public matchsearchtermset(): MatchsearchtermsetContext {
    let _localctx: MatchsearchtermsetContext = new MatchsearchtermsetContext(this._ctx, this.state);
    this.enterRule(_localctx, 128, ECLParser.RULE_matchsearchtermset);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 905;
        this.qm();
        this.state = 906;
        this.ws();
        this.state = 907;
        this.matchsearchterm();
        this.state = 913;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 908;
                this.mws();
                this.state = 909;
                this.matchsearchterm();
              }
            }
          }
          this.state = 915;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
        }
        this.state = 916;
        this.ws();
        this.state = 917;
        this.qm();
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
  public wildsearchterm(): WildsearchtermContext {
    let _localctx: WildsearchtermContext = new WildsearchtermContext(this._ctx, this.state);
    this.enterRule(_localctx, 130, ECLParser.RULE_wildsearchterm);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 921;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            this.state = 921;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case ECLParser.UTF8_LETTER:
              case ECLParser.TAB:
              case ECLParser.LF:
              case ECLParser.CR:
              case ECLParser.SPACE:
              case ECLParser.EXCLAMATION:
              case ECLParser.HASH:
              case ECLParser.DOLLAR:
              case ECLParser.PERCENT:
              case ECLParser.AMPERSAND:
              case ECLParser.APOSTROPHE:
              case ECLParser.LEFT_PAREN:
              case ECLParser.RIGHT_PAREN:
              case ECLParser.ASTERISK:
              case ECLParser.PLUS:
              case ECLParser.COMMA:
              case ECLParser.DASH:
              case ECLParser.PERIOD:
              case ECLParser.SLASH:
              case ECLParser.ZERO:
              case ECLParser.ONE:
              case ECLParser.TWO:
              case ECLParser.THREE:
              case ECLParser.FOUR:
              case ECLParser.FIVE:
              case ECLParser.SIX:
              case ECLParser.SEVEN:
              case ECLParser.EIGHT:
              case ECLParser.NINE:
              case ECLParser.COLON:
              case ECLParser.SEMICOLON:
              case ECLParser.LESS_THAN:
              case ECLParser.EQUALS:
              case ECLParser.GREATER_THAN:
              case ECLParser.QUESTION:
              case ECLParser.AT:
              case ECLParser.CAP_A:
              case ECLParser.CAP_B:
              case ECLParser.CAP_C:
              case ECLParser.CAP_D:
              case ECLParser.CAP_E:
              case ECLParser.CAP_F:
              case ECLParser.CAP_G:
              case ECLParser.CAP_H:
              case ECLParser.CAP_I:
              case ECLParser.CAP_J:
              case ECLParser.CAP_K:
              case ECLParser.CAP_L:
              case ECLParser.CAP_M:
              case ECLParser.CAP_N:
              case ECLParser.CAP_O:
              case ECLParser.CAP_P:
              case ECLParser.CAP_Q:
              case ECLParser.CAP_R:
              case ECLParser.CAP_S:
              case ECLParser.CAP_T:
              case ECLParser.CAP_U:
              case ECLParser.CAP_V:
              case ECLParser.CAP_W:
              case ECLParser.CAP_X:
              case ECLParser.CAP_Y:
              case ECLParser.CAP_Z:
              case ECLParser.LEFT_BRACE:
              case ECLParser.RIGHT_BRACE:
              case ECLParser.CARAT:
              case ECLParser.UNDERSCORE:
              case ECLParser.ACCENT:
              case ECLParser.A:
              case ECLParser.B:
              case ECLParser.C:
              case ECLParser.D:
              case ECLParser.E:
              case ECLParser.F:
              case ECLParser.G:
              case ECLParser.H:
              case ECLParser.I:
              case ECLParser.J:
              case ECLParser.K:
              case ECLParser.L:
              case ECLParser.M:
              case ECLParser.N:
              case ECLParser.O:
              case ECLParser.P:
              case ECLParser.Q:
              case ECLParser.R:
              case ECLParser.S:
              case ECLParser.T:
              case ECLParser.U:
              case ECLParser.V:
              case ECLParser.W:
              case ECLParser.X:
              case ECLParser.Y:
              case ECLParser.Z:
              case ECLParser.LEFT_CURLY_BRACE:
              case ECLParser.PIPE:
              case ECLParser.RIGHT_CURLY_BRACE:
              case ECLParser.TILDE: {
                this.state = 919;
                this.anynonescapedchar();
              }
                break;
              case ECLParser.BACKSLASH: {
                this.state = 920;
                this.escapedwildchar();
              }
                break;
              default:
                throw new NoViableAltException(this);
            }
          }
          this.state = 923;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ECLParser.UTF8_LETTER) | (1 << ECLParser.TAB) | (1 << ECLParser.LF) | (1 << ECLParser.CR) | (1 << ECLParser.SPACE) | (1 << ECLParser.EXCLAMATION) | (1 << ECLParser.HASH) | (1 << ECLParser.DOLLAR) | (1 << ECLParser.PERCENT) | (1 << ECLParser.AMPERSAND) | (1 << ECLParser.APOSTROPHE) | (1 << ECLParser.LEFT_PAREN) | (1 << ECLParser.RIGHT_PAREN) | (1 << ECLParser.ASTERISK) | (1 << ECLParser.PLUS) | (1 << ECLParser.COMMA) | (1 << ECLParser.DASH) | (1 << ECLParser.PERIOD) | (1 << ECLParser.SLASH) | (1 << ECLParser.ZERO) | (1 << ECLParser.ONE) | (1 << ECLParser.TWO) | (1 << ECLParser.THREE) | (1 << ECLParser.FOUR) | (1 << ECLParser.FIVE) | (1 << ECLParser.SIX) | (1 << ECLParser.SEVEN) | (1 << ECLParser.EIGHT) | (1 << ECLParser.NINE) | (1 << ECLParser.COLON))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ECLParser.SEMICOLON - 32)) | (1 << (ECLParser.LESS_THAN - 32)) | (1 << (ECLParser.EQUALS - 32)) | (1 << (ECLParser.GREATER_THAN - 32)) | (1 << (ECLParser.QUESTION - 32)) | (1 << (ECLParser.AT - 32)) | (1 << (ECLParser.CAP_A - 32)) | (1 << (ECLParser.CAP_B - 32)) | (1 << (ECLParser.CAP_C - 32)) | (1 << (ECLParser.CAP_D - 32)) | (1 << (ECLParser.CAP_E - 32)) | (1 << (ECLParser.CAP_F - 32)) | (1 << (ECLParser.CAP_G - 32)) | (1 << (ECLParser.CAP_H - 32)) | (1 << (ECLParser.CAP_I - 32)) | (1 << (ECLParser.CAP_J - 32)) | (1 << (ECLParser.CAP_K - 32)) | (1 << (ECLParser.CAP_L - 32)) | (1 << (ECLParser.CAP_M - 32)) | (1 << (ECLParser.CAP_N - 32)) | (1 << (ECLParser.CAP_O - 32)) | (1 << (ECLParser.CAP_P - 32)) | (1 << (ECLParser.CAP_Q - 32)) | (1 << (ECLParser.CAP_R - 32)) | (1 << (ECLParser.CAP_S - 32)) | (1 << (ECLParser.CAP_T - 32)) | (1 << (ECLParser.CAP_U - 32)) | (1 << (ECLParser.CAP_V - 32)) | (1 << (ECLParser.CAP_W - 32)) | (1 << (ECLParser.CAP_X - 32)) | (1 << (ECLParser.CAP_Y - 32)) | (1 << (ECLParser.CAP_Z - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (ECLParser.LEFT_BRACE - 64)) | (1 << (ECLParser.BACKSLASH - 64)) | (1 << (ECLParser.RIGHT_BRACE - 64)) | (1 << (ECLParser.CARAT - 64)) | (1 << (ECLParser.UNDERSCORE - 64)) | (1 << (ECLParser.ACCENT - 64)) | (1 << (ECLParser.A - 64)) | (1 << (ECLParser.B - 64)) | (1 << (ECLParser.C - 64)) | (1 << (ECLParser.D - 64)) | (1 << (ECLParser.E - 64)) | (1 << (ECLParser.F - 64)) | (1 << (ECLParser.G - 64)) | (1 << (ECLParser.H - 64)) | (1 << (ECLParser.I - 64)) | (1 << (ECLParser.J - 64)) | (1 << (ECLParser.K - 64)) | (1 << (ECLParser.L - 64)) | (1 << (ECLParser.M - 64)) | (1 << (ECLParser.N - 64)) | (1 << (ECLParser.O - 64)) | (1 << (ECLParser.P - 64)) | (1 << (ECLParser.Q - 64)) | (1 << (ECLParser.R - 64)) | (1 << (ECLParser.S - 64)) | (1 << (ECLParser.T - 64)) | (1 << (ECLParser.U - 64)) | (1 << (ECLParser.V - 64)) | (1 << (ECLParser.W - 64)) | (1 << (ECLParser.X - 64)) | (1 << (ECLParser.Y - 64)) | (1 << (ECLParser.Z - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (ECLParser.LEFT_CURLY_BRACE - 96)) | (1 << (ECLParser.PIPE - 96)) | (1 << (ECLParser.RIGHT_CURLY_BRACE - 96)) | (1 << (ECLParser.TILDE - 96)))) !== 0));
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
  public wildsearchtermset(): WildsearchtermsetContext {
    let _localctx: WildsearchtermsetContext = new WildsearchtermsetContext(this._ctx, this.state);
    this.enterRule(_localctx, 132, ECLParser.RULE_wildsearchtermset);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 925;
        this.qm();
        this.state = 926;
        this.wildsearchterm();
        this.state = 927;
        this.qm();
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
  public languagefilter(): LanguagefilterContext {
    let _localctx: LanguagefilterContext = new LanguagefilterContext(this._ctx, this.state);
    this.enterRule(_localctx, 134, ECLParser.RULE_languagefilter);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 929;
        this.language();
        this.state = 930;
        this.ws();
        this.state = 931;
        this.booleancomparisonoperator();
        this.state = 932;
        this.ws();
        this.state = 935;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case ECLParser.CAP_A:
          case ECLParser.CAP_B:
          case ECLParser.CAP_C:
          case ECLParser.CAP_D:
          case ECLParser.CAP_E:
          case ECLParser.CAP_F:
          case ECLParser.CAP_G:
          case ECLParser.CAP_H:
          case ECLParser.CAP_I:
          case ECLParser.CAP_J:
          case ECLParser.CAP_K:
          case ECLParser.CAP_L:
          case ECLParser.CAP_M:
          case ECLParser.CAP_N:
          case ECLParser.CAP_O:
          case ECLParser.CAP_P:
          case ECLParser.CAP_Q:
          case ECLParser.CAP_R:
          case ECLParser.CAP_S:
          case ECLParser.CAP_T:
          case ECLParser.CAP_U:
          case ECLParser.CAP_V:
          case ECLParser.CAP_W:
          case ECLParser.CAP_X:
          case ECLParser.CAP_Y:
          case ECLParser.CAP_Z:
          case ECLParser.A:
          case ECLParser.B:
          case ECLParser.C:
          case ECLParser.D:
          case ECLParser.E:
          case ECLParser.F:
          case ECLParser.G:
          case ECLParser.H:
          case ECLParser.I:
          case ECLParser.J:
          case ECLParser.K:
          case ECLParser.L:
          case ECLParser.M:
          case ECLParser.N:
          case ECLParser.O:
          case ECLParser.P:
          case ECLParser.Q:
          case ECLParser.R:
          case ECLParser.S:
          case ECLParser.T:
          case ECLParser.U:
          case ECLParser.V:
          case ECLParser.W:
          case ECLParser.X:
          case ECLParser.Y:
          case ECLParser.Z: {
            this.state = 933;
            this.languagecode();
          }
            break;
          case ECLParser.LEFT_PAREN: {
            this.state = 934;
            this.languagecodeset();
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
  public language(): LanguageContext {
    let _localctx: LanguageContext = new LanguageContext(this._ctx, this.state);
    this.enterRule(_localctx, 136, ECLParser.RULE_language);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 939;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 83, this._ctx)) {
          case 1: {
            this.state = 937;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_L || _la === ECLParser.L)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 938;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_L || _la === ECLParser.L)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 943;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 84, this._ctx)) {
          case 1: {
            this.state = 941;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_A || _la === ECLParser.A)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 942;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_A || _la === ECLParser.A)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 947;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 85, this._ctx)) {
          case 1: {
            this.state = 945;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_N || _la === ECLParser.N)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 946;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_N || _la === ECLParser.N)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 951;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 86, this._ctx)) {
          case 1: {
            this.state = 949;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_G || _la === ECLParser.G)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 950;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_G || _la === ECLParser.G)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 955;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 87, this._ctx)) {
          case 1: {
            this.state = 953;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_U || _la === ECLParser.U)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 954;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_U || _la === ECLParser.U)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 959;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 88, this._ctx)) {
          case 1: {
            this.state = 957;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_A || _la === ECLParser.A)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 958;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_A || _la === ECLParser.A)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 963;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 89, this._ctx)) {
          case 1: {
            this.state = 961;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_G || _la === ECLParser.G)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 962;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_G || _la === ECLParser.G)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 967;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 90, this._ctx)) {
          case 1: {
            this.state = 965;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_E || _la === ECLParser.E)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 966;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_E || _la === ECLParser.E)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
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
  public languagecode(): LanguagecodeContext {
    let _localctx: LanguagecodeContext = new LanguagecodeContext(this._ctx, this.state);
    this.enterRule(_localctx, 138, ECLParser.RULE_languagecode);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        {
          this.state = 969;
          this.alpha();
          this.state = 970;
          this.alpha();
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
  public languagecodeset(): LanguagecodesetContext {
    let _localctx: LanguagecodesetContext = new LanguagecodesetContext(this._ctx, this.state);
    this.enterRule(_localctx, 140, ECLParser.RULE_languagecodeset);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 972;
        this.match(ECLParser.LEFT_PAREN);
        this.state = 973;
        this.ws();
        this.state = 974;
        this.languagecode();
        this.state = 980;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 975;
                this.mws();
                this.state = 976;
                this.languagecode();
              }
            }
          }
          this.state = 982;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
        }
        this.state = 983;
        this.ws();
        this.state = 984;
        this.match(ECLParser.RIGHT_PAREN);
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
  public typefilter(): TypefilterContext {
    let _localctx: TypefilterContext = new TypefilterContext(this._ctx, this.state);
    this.enterRule(_localctx, 142, ECLParser.RULE_typefilter);
    try {
      this.state = 988;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 92, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 986;
          this.typeidfilter();
        }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 987;
          this.typetokenfilter();
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
  public typeidfilter(): TypeidfilterContext {
    let _localctx: TypeidfilterContext = new TypeidfilterContext(this._ctx, this.state);
    this.enterRule(_localctx, 144, ECLParser.RULE_typeidfilter);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 990;
        this.typeid();
        this.state = 991;
        this.ws();
        this.state = 992;
        this.booleancomparisonoperator();
        this.state = 993;
        this.ws();
        this.state = 996;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 93, this._ctx)) {
          case 1: {
            this.state = 994;
            this.subexpressionconstraint();
          }
            break;

          case 2: {
            this.state = 995;
            this.eclconceptreferenceset();
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
  public typeid(): TypeidContext {
    let _localctx: TypeidContext = new TypeidContext(this._ctx, this.state);
    this.enterRule(_localctx, 146, ECLParser.RULE_typeid);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1000;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 94, this._ctx)) {
          case 1: {
            this.state = 998;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_T || _la === ECLParser.T)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 999;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_T || _la === ECLParser.T)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1004;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 95, this._ctx)) {
          case 1: {
            this.state = 1002;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_Y || _la === ECLParser.Y)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1003;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_Y || _la === ECLParser.Y)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1008;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 96, this._ctx)) {
          case 1: {
            this.state = 1006;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_P || _la === ECLParser.P)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1007;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_P || _la === ECLParser.P)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1012;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 97, this._ctx)) {
          case 1: {
            this.state = 1010;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_E || _la === ECLParser.E)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1011;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_E || _la === ECLParser.E)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1016;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 98, this._ctx)) {
          case 1: {
            this.state = 1014;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_I || _la === ECLParser.I)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1015;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_I || _la === ECLParser.I)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1020;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 99, this._ctx)) {
          case 1: {
            this.state = 1018;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_D || _la === ECLParser.D)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1019;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_D || _la === ECLParser.D)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
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
  public typetokenfilter(): TypetokenfilterContext {
    let _localctx: TypetokenfilterContext = new TypetokenfilterContext(this._ctx, this.state);
    this.enterRule(_localctx, 148, ECLParser.RULE_typetokenfilter);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1022;
        this.type();
        this.state = 1023;
        this.ws();
        this.state = 1024;
        this.booleancomparisonoperator();
        this.state = 1025;
        this.ws();
        this.state = 1028;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case ECLParser.CAP_D:
          case ECLParser.CAP_F:
          case ECLParser.CAP_S:
          case ECLParser.D:
          case ECLParser.F:
          case ECLParser.S: {
            this.state = 1026;
            this.typetoken();
          }
            break;
          case ECLParser.LEFT_PAREN: {
            this.state = 1027;
            this.typetokenset();
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
  public type(): TypeContext {
    let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
    this.enterRule(_localctx, 150, ECLParser.RULE_type);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1032;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 101, this._ctx)) {
          case 1: {
            this.state = 1030;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_T || _la === ECLParser.T)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1031;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_T || _la === ECLParser.T)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1036;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 102, this._ctx)) {
          case 1: {
            this.state = 1034;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_Y || _la === ECLParser.Y)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1035;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_Y || _la === ECLParser.Y)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1040;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 103, this._ctx)) {
          case 1: {
            this.state = 1038;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_P || _la === ECLParser.P)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1039;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_P || _la === ECLParser.P)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1044;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 104, this._ctx)) {
          case 1: {
            this.state = 1042;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_E || _la === ECLParser.E)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1043;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_E || _la === ECLParser.E)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
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
  public typetoken(): TypetokenContext {
    let _localctx: TypetokenContext = new TypetokenContext(this._ctx, this.state);
    this.enterRule(_localctx, 152, ECLParser.RULE_typetoken);
    try {
      this.state = 1049;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case ECLParser.CAP_S:
        case ECLParser.S:
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 1046;
          this.synonym();
        }
          break;
        case ECLParser.CAP_F:
        case ECLParser.F:
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 1047;
          this.fullyspecifiedname();
        }
          break;
        case ECLParser.CAP_D:
        case ECLParser.D:
          this.enterOuterAlt(_localctx, 3);
        {
          this.state = 1048;
          this.definition();
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
  public typetokenset(): TypetokensetContext {
    let _localctx: TypetokensetContext = new TypetokensetContext(this._ctx, this.state);
    this.enterRule(_localctx, 154, ECLParser.RULE_typetokenset);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1051;
        this.match(ECLParser.LEFT_PAREN);
        this.state = 1052;
        this.ws();
        this.state = 1053;
        this.typetoken();
        this.state = 1059;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 106, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1054;
                this.mws();
                this.state = 1055;
                this.typetoken();
              }
            }
          }
          this.state = 1061;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 106, this._ctx);
        }
        this.state = 1062;
        this.ws();
        this.state = 1063;
        this.match(ECLParser.RIGHT_PAREN);
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
  public synonym(): SynonymContext {
    let _localctx: SynonymContext = new SynonymContext(this._ctx, this.state);
    this.enterRule(_localctx, 156, ECLParser.RULE_synonym);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1067;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 107, this._ctx)) {
          case 1: {
            this.state = 1065;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_S || _la === ECLParser.S)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1066;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_S || _la === ECLParser.S)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1071;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 108, this._ctx)) {
          case 1: {
            this.state = 1069;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_Y || _la === ECLParser.Y)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1070;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_Y || _la === ECLParser.Y)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1075;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 109, this._ctx)) {
          case 1: {
            this.state = 1073;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_N || _la === ECLParser.N)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1074;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_N || _la === ECLParser.N)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
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
  public fullyspecifiedname(): FullyspecifiednameContext {
    let _localctx: FullyspecifiednameContext = new FullyspecifiednameContext(this._ctx, this.state);
    this.enterRule(_localctx, 158, ECLParser.RULE_fullyspecifiedname);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1079;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 110, this._ctx)) {
          case 1: {
            this.state = 1077;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_F || _la === ECLParser.F)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1078;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_F || _la === ECLParser.F)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1083;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 111, this._ctx)) {
          case 1: {
            this.state = 1081;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_S || _la === ECLParser.S)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1082;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_S || _la === ECLParser.S)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1087;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 112, this._ctx)) {
          case 1: {
            this.state = 1085;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_N || _la === ECLParser.N)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1086;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_N || _la === ECLParser.N)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
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
  public definition(): DefinitionContext {
    let _localctx: DefinitionContext = new DefinitionContext(this._ctx, this.state);
    this.enterRule(_localctx, 160, ECLParser.RULE_definition);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1091;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 113, this._ctx)) {
          case 1: {
            this.state = 1089;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_D || _la === ECLParser.D)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1090;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_D || _la === ECLParser.D)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1095;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 114, this._ctx)) {
          case 1: {
            this.state = 1093;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_E || _la === ECLParser.E)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1094;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_E || _la === ECLParser.E)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1099;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 115, this._ctx)) {
          case 1: {
            this.state = 1097;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_F || _la === ECLParser.F)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1098;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_F || _la === ECLParser.F)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
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
  public dialectfilter(): DialectfilterContext {
    let _localctx: DialectfilterContext = new DialectfilterContext(this._ctx, this.state);
    this.enterRule(_localctx, 162, ECLParser.RULE_dialectfilter);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1103;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 116, this._ctx)) {
          case 1: {
            this.state = 1101;
            this.dialectidfilter();
          }
            break;

          case 2: {
            this.state = 1102;
            this.dialectaliasfilter();
          }
            break;
        }
        this.state = 1108;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 117, this._ctx)) {
          case 1: {
            this.state = 1105;
            this.ws();
            this.state = 1106;
            this.acceptabilityset();
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
  public dialectidfilter(): DialectidfilterContext {
    let _localctx: DialectidfilterContext = new DialectidfilterContext(this._ctx, this.state);
    this.enterRule(_localctx, 164, ECLParser.RULE_dialectidfilter);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1110;
        this.dialectid();
        this.state = 1111;
        this.ws();
        this.state = 1112;
        this.booleancomparisonoperator();
        this.state = 1113;
        this.ws();
        this.state = 1116;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 118, this._ctx)) {
          case 1: {
            this.state = 1114;
            this.subexpressionconstraint();
          }
            break;

          case 2: {
            this.state = 1115;
            this.dialectidset();
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
  public dialectid(): DialectidContext {
    let _localctx: DialectidContext = new DialectidContext(this._ctx, this.state);
    this.enterRule(_localctx, 166, ECLParser.RULE_dialectid);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1120;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 119, this._ctx)) {
          case 1: {
            this.state = 1118;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_D || _la === ECLParser.D)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1119;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_D || _la === ECLParser.D)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1124;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 120, this._ctx)) {
          case 1: {
            this.state = 1122;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_I || _la === ECLParser.I)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1123;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_I || _la === ECLParser.I)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1128;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 121, this._ctx)) {
          case 1: {
            this.state = 1126;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_A || _la === ECLParser.A)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1127;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_A || _la === ECLParser.A)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1132;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 122, this._ctx)) {
          case 1: {
            this.state = 1130;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_L || _la === ECLParser.L)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1131;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_L || _la === ECLParser.L)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1136;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 123, this._ctx)) {
          case 1: {
            this.state = 1134;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_E || _la === ECLParser.E)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1135;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_E || _la === ECLParser.E)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1140;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 124, this._ctx)) {
          case 1: {
            this.state = 1138;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_C || _la === ECLParser.C)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1139;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_C || _la === ECLParser.C)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1144;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 125, this._ctx)) {
          case 1: {
            this.state = 1142;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_T || _la === ECLParser.T)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1143;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_T || _la === ECLParser.T)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1148;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 126, this._ctx)) {
          case 1: {
            this.state = 1146;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_I || _la === ECLParser.I)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1147;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_I || _la === ECLParser.I)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1152;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 127, this._ctx)) {
          case 1: {
            this.state = 1150;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_D || _la === ECLParser.D)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1151;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_D || _la === ECLParser.D)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
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
  public dialectaliasfilter(): DialectaliasfilterContext {
    let _localctx: DialectaliasfilterContext = new DialectaliasfilterContext(this._ctx, this.state);
    this.enterRule(_localctx, 168, ECLParser.RULE_dialectaliasfilter);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1154;
        this.dialect();
        this.state = 1155;
        this.ws();
        this.state = 1156;
        this.booleancomparisonoperator();
        this.state = 1157;
        this.ws();
        this.state = 1160;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case ECLParser.CAP_A:
          case ECLParser.CAP_B:
          case ECLParser.CAP_C:
          case ECLParser.CAP_D:
          case ECLParser.CAP_E:
          case ECLParser.CAP_F:
          case ECLParser.CAP_G:
          case ECLParser.CAP_H:
          case ECLParser.CAP_I:
          case ECLParser.CAP_J:
          case ECLParser.CAP_K:
          case ECLParser.CAP_L:
          case ECLParser.CAP_M:
          case ECLParser.CAP_N:
          case ECLParser.CAP_O:
          case ECLParser.CAP_P:
          case ECLParser.CAP_Q:
          case ECLParser.CAP_R:
          case ECLParser.CAP_S:
          case ECLParser.CAP_T:
          case ECLParser.CAP_U:
          case ECLParser.CAP_V:
          case ECLParser.CAP_W:
          case ECLParser.CAP_X:
          case ECLParser.CAP_Y:
          case ECLParser.CAP_Z:
          case ECLParser.A:
          case ECLParser.B:
          case ECLParser.C:
          case ECLParser.D:
          case ECLParser.E:
          case ECLParser.F:
          case ECLParser.G:
          case ECLParser.H:
          case ECLParser.I:
          case ECLParser.J:
          case ECLParser.K:
          case ECLParser.L:
          case ECLParser.M:
          case ECLParser.N:
          case ECLParser.O:
          case ECLParser.P:
          case ECLParser.Q:
          case ECLParser.R:
          case ECLParser.S:
          case ECLParser.T:
          case ECLParser.U:
          case ECLParser.V:
          case ECLParser.W:
          case ECLParser.X:
          case ECLParser.Y:
          case ECLParser.Z: {
            this.state = 1158;
            this.dialectalias();
          }
            break;
          case ECLParser.LEFT_PAREN: {
            this.state = 1159;
            this.dialectaliasset();
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
  public dialect(): DialectContext {
    let _localctx: DialectContext = new DialectContext(this._ctx, this.state);
    this.enterRule(_localctx, 170, ECLParser.RULE_dialect);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1164;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 129, this._ctx)) {
          case 1: {
            this.state = 1162;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_D || _la === ECLParser.D)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1163;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_D || _la === ECLParser.D)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1168;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 130, this._ctx)) {
          case 1: {
            this.state = 1166;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_I || _la === ECLParser.I)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1167;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_I || _la === ECLParser.I)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1172;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 131, this._ctx)) {
          case 1: {
            this.state = 1170;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_A || _la === ECLParser.A)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1171;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_A || _la === ECLParser.A)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1176;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 132, this._ctx)) {
          case 1: {
            this.state = 1174;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_L || _la === ECLParser.L)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1175;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_L || _la === ECLParser.L)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1180;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 133, this._ctx)) {
          case 1: {
            this.state = 1178;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_E || _la === ECLParser.E)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1179;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_E || _la === ECLParser.E)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1184;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 134, this._ctx)) {
          case 1: {
            this.state = 1182;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_C || _la === ECLParser.C)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1183;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_C || _la === ECLParser.C)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1188;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 135, this._ctx)) {
          case 1: {
            this.state = 1186;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_T || _la === ECLParser.T)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1187;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_T || _la === ECLParser.T)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
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
  public dialectalias(): DialectaliasContext {
    let _localctx: DialectaliasContext = new DialectaliasContext(this._ctx, this.state);
    this.enterRule(_localctx, 172, ECLParser.RULE_dialectalias);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1190;
        this.alpha();
        this.state = 1196;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              this.state = 1194;
              this._errHandler.sync(this);
              switch (this._input.LA(1)) {
                case ECLParser.DASH: {
                  this.state = 1191;
                  this.dash();
                }
                  break;
                case ECLParser.CAP_A:
                case ECLParser.CAP_B:
                case ECLParser.CAP_C:
                case ECLParser.CAP_D:
                case ECLParser.CAP_E:
                case ECLParser.CAP_F:
                case ECLParser.CAP_G:
                case ECLParser.CAP_H:
                case ECLParser.CAP_I:
                case ECLParser.CAP_J:
                case ECLParser.CAP_K:
                case ECLParser.CAP_L:
                case ECLParser.CAP_M:
                case ECLParser.CAP_N:
                case ECLParser.CAP_O:
                case ECLParser.CAP_P:
                case ECLParser.CAP_Q:
                case ECLParser.CAP_R:
                case ECLParser.CAP_S:
                case ECLParser.CAP_T:
                case ECLParser.CAP_U:
                case ECLParser.CAP_V:
                case ECLParser.CAP_W:
                case ECLParser.CAP_X:
                case ECLParser.CAP_Y:
                case ECLParser.CAP_Z:
                case ECLParser.A:
                case ECLParser.B:
                case ECLParser.C:
                case ECLParser.D:
                case ECLParser.E:
                case ECLParser.F:
                case ECLParser.G:
                case ECLParser.H:
                case ECLParser.I:
                case ECLParser.J:
                case ECLParser.K:
                case ECLParser.L:
                case ECLParser.M:
                case ECLParser.N:
                case ECLParser.O:
                case ECLParser.P:
                case ECLParser.Q:
                case ECLParser.R:
                case ECLParser.S:
                case ECLParser.T:
                case ECLParser.U:
                case ECLParser.V:
                case ECLParser.W:
                case ECLParser.X:
                case ECLParser.Y:
                case ECLParser.Z: {
                  this.state = 1192;
                  this.alpha();
                }
                  break;
                case ECLParser.ZERO:
                case ECLParser.ONE:
                case ECLParser.TWO:
                case ECLParser.THREE:
                case ECLParser.FOUR:
                case ECLParser.FIVE:
                case ECLParser.SIX:
                case ECLParser.SEVEN:
                case ECLParser.EIGHT:
                case ECLParser.NINE: {
                  this.state = 1193;
                  this.integervalue();
                }
                  break;
                default:
                  throw new NoViableAltException(this);
              }
            }
          }
          this.state = 1198;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
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
  public dialectaliasset(): DialectaliassetContext {
    let _localctx: DialectaliassetContext = new DialectaliassetContext(this._ctx, this.state);
    this.enterRule(_localctx, 174, ECLParser.RULE_dialectaliasset);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1199;
        this.match(ECLParser.LEFT_PAREN);
        this.state = 1200;
        this.ws();
        this.state = 1201;
        this.dialectalias();
        this.state = 1205;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 138, this._ctx)) {
          case 1: {
            this.state = 1202;
            this.ws();
            this.state = 1203;
            this.acceptabilityset();
          }
            break;
        }
        this.state = 1216;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 140, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1207;
                this.mws();
                this.state = 1208;
                this.dialectalias();
                this.state = 1212;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 139, this._ctx)) {
                  case 1: {
                    this.state = 1209;
                    this.ws();
                    this.state = 1210;
                    this.acceptabilityset();
                  }
                    break;
                }
              }
            }
          }
          this.state = 1218;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 140, this._ctx);
        }
        this.state = 1219;
        this.ws();
        this.state = 1220;
        this.match(ECLParser.RIGHT_PAREN);
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
  public dialectidset(): DialectidsetContext {
    let _localctx: DialectidsetContext = new DialectidsetContext(this._ctx, this.state);
    this.enterRule(_localctx, 176, ECLParser.RULE_dialectidset);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1222;
        this.match(ECLParser.LEFT_PAREN);
        this.state = 1223;
        this.ws();
        this.state = 1224;
        this.eclconceptreference();
        this.state = 1228;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 141, this._ctx)) {
          case 1: {
            this.state = 1225;
            this.ws();
            this.state = 1226;
            this.acceptabilityset();
          }
            break;
        }
        this.state = 1239;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 143, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1230;
                this.mws();
                this.state = 1231;
                this.eclconceptreference();
                this.state = 1235;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 142, this._ctx)) {
                  case 1: {
                    this.state = 1232;
                    this.ws();
                    this.state = 1233;
                    this.acceptabilityset();
                  }
                    break;
                }
              }
            }
          }
          this.state = 1241;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 143, this._ctx);
        }
        this.state = 1242;
        this.ws();
        this.state = 1243;
        this.match(ECLParser.RIGHT_PAREN);
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
  public acceptabilityset(): AcceptabilitysetContext {
    let _localctx: AcceptabilitysetContext = new AcceptabilitysetContext(this._ctx, this.state);
    this.enterRule(_localctx, 178, ECLParser.RULE_acceptabilityset);
    try {
      this.state = 1247;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 144, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 1245;
          this.acceptabilityconceptreferenceset();
        }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 1246;
          this.acceptabilitytokenset();
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
  public acceptabilityconceptreferenceset(): AcceptabilityconceptreferencesetContext {
    let _localctx: AcceptabilityconceptreferencesetContext = new AcceptabilityconceptreferencesetContext(this._ctx, this.state);
    this.enterRule(_localctx, 180, ECLParser.RULE_acceptabilityconceptreferenceset);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1249;
        this.match(ECLParser.LEFT_PAREN);
        this.state = 1250;
        this.ws();
        this.state = 1251;
        this.eclconceptreference();
        this.state = 1257;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 145, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1252;
                this.mws();
                this.state = 1253;
                this.eclconceptreference();
              }
            }
          }
          this.state = 1259;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 145, this._ctx);
        }
        this.state = 1260;
        this.ws();
        this.state = 1261;
        this.match(ECLParser.RIGHT_PAREN);
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
  public acceptabilitytokenset(): AcceptabilitytokensetContext {
    let _localctx: AcceptabilitytokensetContext = new AcceptabilitytokensetContext(this._ctx, this.state);
    this.enterRule(_localctx, 182, ECLParser.RULE_acceptabilitytokenset);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1263;
        this.match(ECLParser.LEFT_PAREN);
        this.state = 1264;
        this.ws();
        this.state = 1265;
        this.acceptabilitytoken();
        this.state = 1271;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 146, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1266;
                this.mws();
                this.state = 1267;
                this.acceptabilitytoken();
              }
            }
          }
          this.state = 1273;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 146, this._ctx);
        }
        this.state = 1274;
        this.ws();
        this.state = 1275;
        this.match(ECLParser.RIGHT_PAREN);
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
  public acceptabilitytoken(): AcceptabilitytokenContext {
    let _localctx: AcceptabilitytokenContext = new AcceptabilitytokenContext(this._ctx, this.state);
    this.enterRule(_localctx, 184, ECLParser.RULE_acceptabilitytoken);
    try {
      this.state = 1279;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case ECLParser.CAP_A:
        case ECLParser.A:
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 1277;
          this.acceptable();
        }
          break;
        case ECLParser.CAP_P:
        case ECLParser.P:
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 1278;
          this.preferred();
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
  public acceptable(): AcceptableContext {
    let _localctx: AcceptableContext = new AcceptableContext(this._ctx, this.state);
    this.enterRule(_localctx, 186, ECLParser.RULE_acceptable);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1283;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 148, this._ctx)) {
          case 1: {
            this.state = 1281;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_A || _la === ECLParser.A)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1282;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_A || _la === ECLParser.A)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1287;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 149, this._ctx)) {
          case 1: {
            this.state = 1285;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_C || _la === ECLParser.C)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1286;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_C || _la === ECLParser.C)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1291;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 150, this._ctx)) {
          case 1: {
            this.state = 1289;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_C || _la === ECLParser.C)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1290;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_C || _la === ECLParser.C)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1295;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 151, this._ctx)) {
          case 1: {
            this.state = 1293;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_E || _la === ECLParser.E)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1294;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_E || _la === ECLParser.E)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1299;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 152, this._ctx)) {
          case 1: {
            this.state = 1297;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_P || _la === ECLParser.P)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1298;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_P || _la === ECLParser.P)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1303;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 153, this._ctx)) {
          case 1: {
            this.state = 1301;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_T || _la === ECLParser.T)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1302;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_T || _la === ECLParser.T)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
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
  public preferred(): PreferredContext {
    let _localctx: PreferredContext = new PreferredContext(this._ctx, this.state);
    this.enterRule(_localctx, 188, ECLParser.RULE_preferred);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1307;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 154, this._ctx)) {
          case 1: {
            this.state = 1305;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_P || _la === ECLParser.P)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1306;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_P || _la === ECLParser.P)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1311;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 155, this._ctx)) {
          case 1: {
            this.state = 1309;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_R || _la === ECLParser.R)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1310;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_R || _la === ECLParser.R)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1315;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 156, this._ctx)) {
          case 1: {
            this.state = 1313;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_E || _la === ECLParser.E)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1314;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_E || _la === ECLParser.E)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1319;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 157, this._ctx)) {
          case 1: {
            this.state = 1317;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_F || _la === ECLParser.F)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1318;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_F || _la === ECLParser.F)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1323;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 158, this._ctx)) {
          case 1: {
            this.state = 1321;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_E || _la === ECLParser.E)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1322;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_E || _la === ECLParser.E)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1327;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 159, this._ctx)) {
          case 1: {
            this.state = 1325;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_R || _la === ECLParser.R)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1326;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_R || _la === ECLParser.R)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
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
  public conceptfilterconstraint(): ConceptfilterconstraintContext {
    let _localctx: ConceptfilterconstraintContext = new ConceptfilterconstraintContext(this._ctx, this.state);
    this.enterRule(_localctx, 190, ECLParser.RULE_conceptfilterconstraint);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        {
          this.state = 1329;
          this.match(ECLParser.LEFT_CURLY_BRACE);
          this.state = 1330;
          this.match(ECLParser.LEFT_CURLY_BRACE);
        }
        this.state = 1332;
        this.ws();
        this.state = 1335;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 160, this._ctx)) {
          case 1: {
            this.state = 1333;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_C || _la === ECLParser.C)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1334;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_C || _la === ECLParser.C)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1337;
        this.ws();
        this.state = 1338;
        this.conceptfilter();
        this.state = 1346;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 161, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1339;
                this.ws();
                this.state = 1340;
                this.match(ECLParser.COMMA);
                this.state = 1341;
                this.ws();
                this.state = 1342;
                this.conceptfilter();
              }
            }
          }
          this.state = 1348;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 161, this._ctx);
        }
        this.state = 1349;
        this.ws();
        {
          this.state = 1350;
          this.match(ECLParser.RIGHT_CURLY_BRACE);
          this.state = 1351;
          this.match(ECLParser.RIGHT_CURLY_BRACE);
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
  public conceptfilter(): ConceptfilterContext {
    let _localctx: ConceptfilterContext = new ConceptfilterContext(this._ctx, this.state);
    this.enterRule(_localctx, 192, ECLParser.RULE_conceptfilter);
    try {
      this.state = 1357;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case ECLParser.CAP_D:
        case ECLParser.D:
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 1353;
          this.definitionstatusfilter();
        }
          break;
        case ECLParser.CAP_M:
        case ECLParser.M:
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 1354;
          this.modulefilter();
        }
          break;
        case ECLParser.CAP_E:
        case ECLParser.E:
          this.enterOuterAlt(_localctx, 3);
        {
          this.state = 1355;
          this.effectivetimefilter();
        }
          break;
        case ECLParser.CAP_A:
        case ECLParser.A:
          this.enterOuterAlt(_localctx, 4);
        {
          this.state = 1356;
          this.activefilter();
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
  public definitionstatusfilter(): DefinitionstatusfilterContext {
    let _localctx: DefinitionstatusfilterContext = new DefinitionstatusfilterContext(this._ctx, this.state);
    this.enterRule(_localctx, 194, ECLParser.RULE_definitionstatusfilter);
    try {
      this.state = 1361;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 163, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 1359;
          this.definitionstatusidfilter();
        }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 1360;
          this.definitionstatustokenfilter();
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
  public definitionstatusidfilter(): DefinitionstatusidfilterContext {
    let _localctx: DefinitionstatusidfilterContext = new DefinitionstatusidfilterContext(this._ctx, this.state);
    this.enterRule(_localctx, 196, ECLParser.RULE_definitionstatusidfilter);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1363;
        this.definitionstatusidkeyword();
        this.state = 1364;
        this.ws();
        this.state = 1365;
        this.booleancomparisonoperator();
        this.state = 1366;
        this.ws();
        this.state = 1369;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 164, this._ctx)) {
          case 1: {
            this.state = 1367;
            this.subexpressionconstraint();
          }
            break;

          case 2: {
            this.state = 1368;
            this.eclconceptreferenceset();
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
  public definitionstatusidkeyword(): DefinitionstatusidkeywordContext {
    let _localctx: DefinitionstatusidkeywordContext = new DefinitionstatusidkeywordContext(this._ctx, this.state);
    this.enterRule(_localctx, 198, ECLParser.RULE_definitionstatusidkeyword);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1373;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 165, this._ctx)) {
          case 1: {
            this.state = 1371;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_D || _la === ECLParser.D)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1372;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_D || _la === ECLParser.D)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1377;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 166, this._ctx)) {
          case 1: {
            this.state = 1375;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_E || _la === ECLParser.E)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1376;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_E || _la === ECLParser.E)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1381;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 167, this._ctx)) {
          case 1: {
            this.state = 1379;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_F || _la === ECLParser.F)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1380;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_F || _la === ECLParser.F)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1385;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 168, this._ctx)) {
          case 1: {
            this.state = 1383;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_I || _la === ECLParser.I)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1384;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_I || _la === ECLParser.I)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1389;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 169, this._ctx)) {
          case 1: {
            this.state = 1387;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_N || _la === ECLParser.N)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1388;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_N || _la === ECLParser.N)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1393;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 170, this._ctx)) {
          case 1: {
            this.state = 1391;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_I || _la === ECLParser.I)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1392;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_I || _la === ECLParser.I)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1397;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 171, this._ctx)) {
          case 1: {
            this.state = 1395;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_T || _la === ECLParser.T)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1396;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_T || _la === ECLParser.T)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1401;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 172, this._ctx)) {
          case 1: {
            this.state = 1399;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_I || _la === ECLParser.I)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1400;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_I || _la === ECLParser.I)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1405;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 173, this._ctx)) {
          case 1: {
            this.state = 1403;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_O || _la === ECLParser.O)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1404;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_O || _la === ECLParser.O)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1409;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 174, this._ctx)) {
          case 1: {
            this.state = 1407;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_N || _la === ECLParser.N)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1408;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_N || _la === ECLParser.N)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1413;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 175, this._ctx)) {
          case 1: {
            this.state = 1411;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_S || _la === ECLParser.S)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1412;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_S || _la === ECLParser.S)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1417;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 176, this._ctx)) {
          case 1: {
            this.state = 1415;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_T || _la === ECLParser.T)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1416;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_T || _la === ECLParser.T)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1421;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 177, this._ctx)) {
          case 1: {
            this.state = 1419;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_A || _la === ECLParser.A)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1420;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_A || _la === ECLParser.A)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1425;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 178, this._ctx)) {
          case 1: {
            this.state = 1423;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_T || _la === ECLParser.T)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1424;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_T || _la === ECLParser.T)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1429;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 179, this._ctx)) {
          case 1: {
            this.state = 1427;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_U || _la === ECLParser.U)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1428;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_U || _la === ECLParser.U)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1433;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 180, this._ctx)) {
          case 1: {
            this.state = 1431;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_S || _la === ECLParser.S)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1432;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_S || _la === ECLParser.S)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1437;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 181, this._ctx)) {
          case 1: {
            this.state = 1435;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_I || _la === ECLParser.I)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1436;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_I || _la === ECLParser.I)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1441;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 182, this._ctx)) {
          case 1: {
            this.state = 1439;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_D || _la === ECLParser.D)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1440;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_D || _la === ECLParser.D)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
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
  public definitionstatustokenfilter(): DefinitionstatustokenfilterContext {
    let _localctx: DefinitionstatustokenfilterContext = new DefinitionstatustokenfilterContext(this._ctx, this.state);
    this.enterRule(_localctx, 200, ECLParser.RULE_definitionstatustokenfilter);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1443;
        this.definitionstatuskeyword();
        this.state = 1444;
        this.ws();
        this.state = 1445;
        this.booleancomparisonoperator();
        this.state = 1446;
        this.ws();
        this.state = 1449;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case ECLParser.CAP_D:
          case ECLParser.CAP_P:
          case ECLParser.D:
          case ECLParser.P: {
            this.state = 1447;
            this.definitionstatustoken();
          }
            break;
          case ECLParser.LEFT_PAREN: {
            this.state = 1448;
            this.definitionstatustokenset();
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
  public definitionstatuskeyword(): DefinitionstatuskeywordContext {
    let _localctx: DefinitionstatuskeywordContext = new DefinitionstatuskeywordContext(this._ctx, this.state);
    this.enterRule(_localctx, 202, ECLParser.RULE_definitionstatuskeyword);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1453;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 184, this._ctx)) {
          case 1: {
            this.state = 1451;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_D || _la === ECLParser.D)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1452;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_D || _la === ECLParser.D)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1457;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 185, this._ctx)) {
          case 1: {
            this.state = 1455;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_E || _la === ECLParser.E)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1456;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_E || _la === ECLParser.E)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1461;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 186, this._ctx)) {
          case 1: {
            this.state = 1459;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_F || _la === ECLParser.F)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1460;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_F || _la === ECLParser.F)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1465;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 187, this._ctx)) {
          case 1: {
            this.state = 1463;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_I || _la === ECLParser.I)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1464;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_I || _la === ECLParser.I)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1469;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 188, this._ctx)) {
          case 1: {
            this.state = 1467;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_N || _la === ECLParser.N)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1468;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_N || _la === ECLParser.N)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1473;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 189, this._ctx)) {
          case 1: {
            this.state = 1471;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_I || _la === ECLParser.I)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1472;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_I || _la === ECLParser.I)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1477;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 190, this._ctx)) {
          case 1: {
            this.state = 1475;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_T || _la === ECLParser.T)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1476;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_T || _la === ECLParser.T)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1481;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 191, this._ctx)) {
          case 1: {
            this.state = 1479;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_I || _la === ECLParser.I)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1480;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_I || _la === ECLParser.I)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1485;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 192, this._ctx)) {
          case 1: {
            this.state = 1483;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_O || _la === ECLParser.O)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1484;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_O || _la === ECLParser.O)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1489;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 193, this._ctx)) {
          case 1: {
            this.state = 1487;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_N || _la === ECLParser.N)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1488;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_N || _la === ECLParser.N)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1493;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 194, this._ctx)) {
          case 1: {
            this.state = 1491;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_S || _la === ECLParser.S)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1492;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_S || _la === ECLParser.S)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1497;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 195, this._ctx)) {
          case 1: {
            this.state = 1495;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_T || _la === ECLParser.T)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1496;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_T || _la === ECLParser.T)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1501;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 196, this._ctx)) {
          case 1: {
            this.state = 1499;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_A || _la === ECLParser.A)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1500;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_A || _la === ECLParser.A)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1505;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 197, this._ctx)) {
          case 1: {
            this.state = 1503;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_T || _la === ECLParser.T)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1504;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_T || _la === ECLParser.T)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1509;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 198, this._ctx)) {
          case 1: {
            this.state = 1507;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_U || _la === ECLParser.U)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1508;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_U || _la === ECLParser.U)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1513;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 199, this._ctx)) {
          case 1: {
            this.state = 1511;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_S || _la === ECLParser.S)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1512;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_S || _la === ECLParser.S)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
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
  public definitionstatustoken(): DefinitionstatustokenContext {
    let _localctx: DefinitionstatustokenContext = new DefinitionstatustokenContext(this._ctx, this.state);
    this.enterRule(_localctx, 204, ECLParser.RULE_definitionstatustoken);
    try {
      this.state = 1517;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case ECLParser.CAP_P:
        case ECLParser.P:
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 1515;
          this.primitivetoken();
        }
          break;
        case ECLParser.CAP_D:
        case ECLParser.D:
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 1516;
          this.definedtoken();
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
  public definitionstatustokenset(): DefinitionstatustokensetContext {
    let _localctx: DefinitionstatustokensetContext = new DefinitionstatustokensetContext(this._ctx, this.state);
    this.enterRule(_localctx, 206, ECLParser.RULE_definitionstatustokenset);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1519;
        this.match(ECLParser.LEFT_PAREN);
        this.state = 1520;
        this.ws();
        this.state = 1521;
        this.definitionstatustoken();
        this.state = 1527;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 201, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1522;
                this.mws();
                this.state = 1523;
                this.definitionstatustoken();
              }
            }
          }
          this.state = 1529;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 201, this._ctx);
        }
        this.state = 1530;
        this.ws();
        this.state = 1531;
        this.match(ECLParser.RIGHT_PAREN);
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
  public primitivetoken(): PrimitivetokenContext {
    let _localctx: PrimitivetokenContext = new PrimitivetokenContext(this._ctx, this.state);
    this.enterRule(_localctx, 208, ECLParser.RULE_primitivetoken);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1535;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 202, this._ctx)) {
          case 1: {
            this.state = 1533;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_P || _la === ECLParser.P)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1534;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_P || _la === ECLParser.P)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1539;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 203, this._ctx)) {
          case 1: {
            this.state = 1537;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_R || _la === ECLParser.R)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1538;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_R || _la === ECLParser.R)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1543;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 204, this._ctx)) {
          case 1: {
            this.state = 1541;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_I || _la === ECLParser.I)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1542;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_I || _la === ECLParser.I)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1547;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 205, this._ctx)) {
          case 1: {
            this.state = 1545;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_M || _la === ECLParser.M)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1546;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_M || _la === ECLParser.M)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1551;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 206, this._ctx)) {
          case 1: {
            this.state = 1549;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_I || _la === ECLParser.I)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1550;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_I || _la === ECLParser.I)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1555;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 207, this._ctx)) {
          case 1: {
            this.state = 1553;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_T || _la === ECLParser.T)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1554;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_T || _la === ECLParser.T)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1559;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 208, this._ctx)) {
          case 1: {
            this.state = 1557;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_I || _la === ECLParser.I)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1558;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_I || _la === ECLParser.I)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1563;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 209, this._ctx)) {
          case 1: {
            this.state = 1561;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_V || _la === ECLParser.V)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1562;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_V || _la === ECLParser.V)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1567;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 210, this._ctx)) {
          case 1: {
            this.state = 1565;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_E || _la === ECLParser.E)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1566;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_E || _la === ECLParser.E)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
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
  public definedtoken(): DefinedtokenContext {
    let _localctx: DefinedtokenContext = new DefinedtokenContext(this._ctx, this.state);
    this.enterRule(_localctx, 210, ECLParser.RULE_definedtoken);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1571;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 211, this._ctx)) {
          case 1: {
            this.state = 1569;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_D || _la === ECLParser.D)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1570;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_D || _la === ECLParser.D)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1575;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 212, this._ctx)) {
          case 1: {
            this.state = 1573;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_E || _la === ECLParser.E)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1574;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_E || _la === ECLParser.E)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1579;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 213, this._ctx)) {
          case 1: {
            this.state = 1577;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_F || _la === ECLParser.F)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1578;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_F || _la === ECLParser.F)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1583;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 214, this._ctx)) {
          case 1: {
            this.state = 1581;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_I || _la === ECLParser.I)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1582;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_I || _la === ECLParser.I)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1587;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 215, this._ctx)) {
          case 1: {
            this.state = 1585;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_N || _la === ECLParser.N)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1586;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_N || _la === ECLParser.N)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1591;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 216, this._ctx)) {
          case 1: {
            this.state = 1589;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_E || _la === ECLParser.E)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1590;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_E || _la === ECLParser.E)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1595;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 217, this._ctx)) {
          case 1: {
            this.state = 1593;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_D || _la === ECLParser.D)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1594;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_D || _la === ECLParser.D)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
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
  public modulefilter(): ModulefilterContext {
    let _localctx: ModulefilterContext = new ModulefilterContext(this._ctx, this.state);
    this.enterRule(_localctx, 212, ECLParser.RULE_modulefilter);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1597;
        this.moduleidkeyword();
        this.state = 1598;
        this.ws();
        this.state = 1599;
        this.booleancomparisonoperator();
        this.state = 1600;
        this.ws();
        this.state = 1603;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 218, this._ctx)) {
          case 1: {
            this.state = 1601;
            this.subexpressionconstraint();
          }
            break;

          case 2: {
            this.state = 1602;
            this.eclconceptreferenceset();
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
  public moduleidkeyword(): ModuleidkeywordContext {
    let _localctx: ModuleidkeywordContext = new ModuleidkeywordContext(this._ctx, this.state);
    this.enterRule(_localctx, 214, ECLParser.RULE_moduleidkeyword);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1607;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 219, this._ctx)) {
          case 1: {
            this.state = 1605;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_M || _la === ECLParser.M)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1606;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_M || _la === ECLParser.M)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1611;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 220, this._ctx)) {
          case 1: {
            this.state = 1609;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_O || _la === ECLParser.O)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1610;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_O || _la === ECLParser.O)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1615;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 221, this._ctx)) {
          case 1: {
            this.state = 1613;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_D || _la === ECLParser.D)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1614;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_D || _la === ECLParser.D)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1619;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 222, this._ctx)) {
          case 1: {
            this.state = 1617;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_U || _la === ECLParser.U)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1618;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_U || _la === ECLParser.U)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1623;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 223, this._ctx)) {
          case 1: {
            this.state = 1621;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_L || _la === ECLParser.L)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1622;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_L || _la === ECLParser.L)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1627;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 224, this._ctx)) {
          case 1: {
            this.state = 1625;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_E || _la === ECLParser.E)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1626;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_E || _la === ECLParser.E)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1631;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 225, this._ctx)) {
          case 1: {
            this.state = 1629;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_I || _la === ECLParser.I)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1630;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_I || _la === ECLParser.I)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1635;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 226, this._ctx)) {
          case 1: {
            this.state = 1633;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_D || _la === ECLParser.D)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1634;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_D || _la === ECLParser.D)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
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
  public effectivetimefilter(): EffectivetimefilterContext {
    let _localctx: EffectivetimefilterContext = new EffectivetimefilterContext(this._ctx, this.state);
    this.enterRule(_localctx, 216, ECLParser.RULE_effectivetimefilter);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1637;
        this.effectivetimekeyword();
        this.state = 1638;
        this.ws();
        this.state = 1639;
        this.timecomparisonoperator();
        this.state = 1640;
        this.ws();
        this.state = 1643;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case ECLParser.QUOTE: {
            this.state = 1641;
            this.timevalue();
          }
            break;
          case ECLParser.LEFT_PAREN: {
            this.state = 1642;
            this.timevalueset();
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
  public effectivetimekeyword(): EffectivetimekeywordContext {
    let _localctx: EffectivetimekeywordContext = new EffectivetimekeywordContext(this._ctx, this.state);
    this.enterRule(_localctx, 218, ECLParser.RULE_effectivetimekeyword);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1647;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 228, this._ctx)) {
          case 1: {
            this.state = 1645;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_E || _la === ECLParser.E)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1646;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_E || _la === ECLParser.E)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1651;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 229, this._ctx)) {
          case 1: {
            this.state = 1649;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_F || _la === ECLParser.F)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1650;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_F || _la === ECLParser.F)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1655;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 230, this._ctx)) {
          case 1: {
            this.state = 1653;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_F || _la === ECLParser.F)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1654;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_F || _la === ECLParser.F)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1659;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 231, this._ctx)) {
          case 1: {
            this.state = 1657;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_E || _la === ECLParser.E)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1658;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_E || _la === ECLParser.E)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1663;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 232, this._ctx)) {
          case 1: {
            this.state = 1661;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_C || _la === ECLParser.C)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1662;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_C || _la === ECLParser.C)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1667;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 233, this._ctx)) {
          case 1: {
            this.state = 1665;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_T || _la === ECLParser.T)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1666;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_T || _la === ECLParser.T)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1671;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 234, this._ctx)) {
          case 1: {
            this.state = 1669;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_I || _la === ECLParser.I)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1670;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_I || _la === ECLParser.I)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1675;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 235, this._ctx)) {
          case 1: {
            this.state = 1673;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_V || _la === ECLParser.V)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1674;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_V || _la === ECLParser.V)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1679;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 236, this._ctx)) {
          case 1: {
            this.state = 1677;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_E || _la === ECLParser.E)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1678;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_E || _la === ECLParser.E)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1683;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 237, this._ctx)) {
          case 1: {
            this.state = 1681;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_T || _la === ECLParser.T)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1682;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_T || _la === ECLParser.T)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1687;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 238, this._ctx)) {
          case 1: {
            this.state = 1685;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_I || _la === ECLParser.I)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1686;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_I || _la === ECLParser.I)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1691;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 239, this._ctx)) {
          case 1: {
            this.state = 1689;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_M || _la === ECLParser.M)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1690;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_M || _la === ECLParser.M)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1695;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 240, this._ctx)) {
          case 1: {
            this.state = 1693;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_E || _la === ECLParser.E)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1694;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_E || _la === ECLParser.E)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
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
  public timevalue(): TimevalueContext {
    let _localctx: TimevalueContext = new TimevalueContext(this._ctx, this.state);
    this.enterRule(_localctx, 220, ECLParser.RULE_timevalue);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1697;
        this.qm();
        this.state = 1702;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ECLParser.ONE) | (1 << ECLParser.TWO) | (1 << ECLParser.THREE) | (1 << ECLParser.FOUR) | (1 << ECLParser.FIVE) | (1 << ECLParser.SIX) | (1 << ECLParser.SEVEN) | (1 << ECLParser.EIGHT) | (1 << ECLParser.NINE))) !== 0)) {
          {
            this.state = 1698;
            this.year();
            this.state = 1699;
            this.month();
            this.state = 1700;
            this.day();
          }
        }

        this.state = 1704;
        this.qm();
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
  public timevalueset(): TimevaluesetContext {
    let _localctx: TimevaluesetContext = new TimevaluesetContext(this._ctx, this.state);
    this.enterRule(_localctx, 222, ECLParser.RULE_timevalueset);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1706;
        this.match(ECLParser.LEFT_PAREN);
        this.state = 1707;
        this.ws();
        this.state = 1708;
        this.timevalue();
        this.state = 1714;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 242, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1709;
                this.mws();
                this.state = 1710;
                this.timevalue();
              }
            }
          }
          this.state = 1716;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 242, this._ctx);
        }
        this.state = 1717;
        this.ws();
        this.state = 1718;
        this.match(ECLParser.RIGHT_PAREN);
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
  public year(): YearContext {
    let _localctx: YearContext = new YearContext(this._ctx, this.state);
    this.enterRule(_localctx, 224, ECLParser.RULE_year);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1720;
        this.digitnonzero();
        this.state = 1721;
        this.digit();
        this.state = 1722;
        this.digit();
        this.state = 1723;
        this.digit();
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
  public month(): MonthContext {
    let _localctx: MonthContext = new MonthContext(this._ctx, this.state);
    this.enterRule(_localctx, 226, ECLParser.RULE_month);
    try {
      this.state = 1749;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 243, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
        {
          {
            this.state = 1725;
            this.match(ECLParser.ZERO);
            this.state = 1726;
            this.match(ECLParser.ONE);
          }
        }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
        {
          {
            this.state = 1727;
            this.match(ECLParser.ZERO);
            this.state = 1728;
            this.match(ECLParser.TWO);
          }
        }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
        {
          {
            this.state = 1729;
            this.match(ECLParser.ZERO);
            this.state = 1730;
            this.match(ECLParser.THREE);
          }
        }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
        {
          {
            this.state = 1731;
            this.match(ECLParser.ZERO);
            this.state = 1732;
            this.match(ECLParser.FOUR);
          }
        }
          break;

        case 5:
          this.enterOuterAlt(_localctx, 5);
        {
          {
            this.state = 1733;
            this.match(ECLParser.ZERO);
            this.state = 1734;
            this.match(ECLParser.FIVE);
          }
        }
          break;

        case 6:
          this.enterOuterAlt(_localctx, 6);
        {
          {
            this.state = 1735;
            this.match(ECLParser.ZERO);
            this.state = 1736;
            this.match(ECLParser.SIX);
          }
        }
          break;

        case 7:
          this.enterOuterAlt(_localctx, 7);
        {
          {
            this.state = 1737;
            this.match(ECLParser.ZERO);
            this.state = 1738;
            this.match(ECLParser.SEVEN);
          }
        }
          break;

        case 8:
          this.enterOuterAlt(_localctx, 8);
        {
          {
            this.state = 1739;
            this.match(ECLParser.ZERO);
            this.state = 1740;
            this.match(ECLParser.EIGHT);
          }
        }
          break;

        case 9:
          this.enterOuterAlt(_localctx, 9);
        {
          {
            this.state = 1741;
            this.match(ECLParser.ZERO);
            this.state = 1742;
            this.match(ECLParser.NINE);
          }
        }
          break;

        case 10:
          this.enterOuterAlt(_localctx, 10);
        {
          {
            this.state = 1743;
            this.match(ECLParser.ONE);
            this.state = 1744;
            this.match(ECLParser.ZERO);
          }
        }
          break;

        case 11:
          this.enterOuterAlt(_localctx, 11);
        {
          {
            this.state = 1745;
            this.match(ECLParser.ONE);
            this.state = 1746;
            this.match(ECLParser.ONE);
          }
        }
          break;

        case 12:
          this.enterOuterAlt(_localctx, 12);
        {
          {
            this.state = 1747;
            this.match(ECLParser.ONE);
            this.state = 1748;
            this.match(ECLParser.TWO);
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
  public day(): DayContext {
    let _localctx: DayContext = new DayContext(this._ctx, this.state);
    this.enterRule(_localctx, 228, ECLParser.RULE_day);
    try {
      this.state = 1813;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 244, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
        {
          {
            this.state = 1751;
            this.match(ECLParser.ZERO);
            this.state = 1752;
            this.match(ECLParser.ONE);
          }
        }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
        {
          {
            this.state = 1753;
            this.match(ECLParser.ZERO);
            this.state = 1754;
            this.match(ECLParser.TWO);
          }
        }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
        {
          {
            this.state = 1755;
            this.match(ECLParser.ZERO);
            this.state = 1756;
            this.match(ECLParser.THREE);
          }
        }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
        {
          {
            this.state = 1757;
            this.match(ECLParser.ZERO);
            this.state = 1758;
            this.match(ECLParser.FOUR);
          }
        }
          break;

        case 5:
          this.enterOuterAlt(_localctx, 5);
        {
          {
            this.state = 1759;
            this.match(ECLParser.ZERO);
            this.state = 1760;
            this.match(ECLParser.FIVE);
          }
        }
          break;

        case 6:
          this.enterOuterAlt(_localctx, 6);
        {
          {
            this.state = 1761;
            this.match(ECLParser.ZERO);
            this.state = 1762;
            this.match(ECLParser.SIX);
          }
        }
          break;

        case 7:
          this.enterOuterAlt(_localctx, 7);
        {
          {
            this.state = 1763;
            this.match(ECLParser.ZERO);
            this.state = 1764;
            this.match(ECLParser.SEVEN);
          }
        }
          break;

        case 8:
          this.enterOuterAlt(_localctx, 8);
        {
          {
            this.state = 1765;
            this.match(ECLParser.ZERO);
            this.state = 1766;
            this.match(ECLParser.EIGHT);
          }
        }
          break;

        case 9:
          this.enterOuterAlt(_localctx, 9);
        {
          {
            this.state = 1767;
            this.match(ECLParser.ZERO);
            this.state = 1768;
            this.match(ECLParser.NINE);
          }
        }
          break;

        case 10:
          this.enterOuterAlt(_localctx, 10);
        {
          {
            this.state = 1769;
            this.match(ECLParser.ONE);
            this.state = 1770;
            this.match(ECLParser.ZERO);
          }
        }
          break;

        case 11:
          this.enterOuterAlt(_localctx, 11);
        {
          {
            this.state = 1771;
            this.match(ECLParser.ONE);
            this.state = 1772;
            this.match(ECLParser.ONE);
          }
        }
          break;

        case 12:
          this.enterOuterAlt(_localctx, 12);
        {
          {
            this.state = 1773;
            this.match(ECLParser.ONE);
            this.state = 1774;
            this.match(ECLParser.TWO);
          }
        }
          break;

        case 13:
          this.enterOuterAlt(_localctx, 13);
        {
          {
            this.state = 1775;
            this.match(ECLParser.ONE);
            this.state = 1776;
            this.match(ECLParser.THREE);
          }
        }
          break;

        case 14:
          this.enterOuterAlt(_localctx, 14);
        {
          {
            this.state = 1777;
            this.match(ECLParser.ONE);
            this.state = 1778;
            this.match(ECLParser.FOUR);
          }
        }
          break;

        case 15:
          this.enterOuterAlt(_localctx, 15);
        {
          {
            this.state = 1779;
            this.match(ECLParser.ONE);
            this.state = 1780;
            this.match(ECLParser.FIVE);
          }
        }
          break;

        case 16:
          this.enterOuterAlt(_localctx, 16);
        {
          {
            this.state = 1781;
            this.match(ECLParser.ONE);
            this.state = 1782;
            this.match(ECLParser.SIX);
          }
        }
          break;

        case 17:
          this.enterOuterAlt(_localctx, 17);
        {
          {
            this.state = 1783;
            this.match(ECLParser.ONE);
            this.state = 1784;
            this.match(ECLParser.SEVEN);
          }
        }
          break;

        case 18:
          this.enterOuterAlt(_localctx, 18);
        {
          {
            this.state = 1785;
            this.match(ECLParser.ONE);
            this.state = 1786;
            this.match(ECLParser.EIGHT);
          }
        }
          break;

        case 19:
          this.enterOuterAlt(_localctx, 19);
        {
          {
            this.state = 1787;
            this.match(ECLParser.ONE);
            this.state = 1788;
            this.match(ECLParser.NINE);
          }
        }
          break;

        case 20:
          this.enterOuterAlt(_localctx, 20);
        {
          {
            this.state = 1789;
            this.match(ECLParser.TWO);
            this.state = 1790;
            this.match(ECLParser.ZERO);
          }
        }
          break;

        case 21:
          this.enterOuterAlt(_localctx, 21);
        {
          {
            this.state = 1791;
            this.match(ECLParser.TWO);
            this.state = 1792;
            this.match(ECLParser.ONE);
          }
        }
          break;

        case 22:
          this.enterOuterAlt(_localctx, 22);
        {
          {
            this.state = 1793;
            this.match(ECLParser.TWO);
            this.state = 1794;
            this.match(ECLParser.TWO);
          }
        }
          break;

        case 23:
          this.enterOuterAlt(_localctx, 23);
        {
          {
            this.state = 1795;
            this.match(ECLParser.TWO);
            this.state = 1796;
            this.match(ECLParser.THREE);
          }
        }
          break;

        case 24:
          this.enterOuterAlt(_localctx, 24);
        {
          {
            this.state = 1797;
            this.match(ECLParser.TWO);
            this.state = 1798;
            this.match(ECLParser.FOUR);
          }
        }
          break;

        case 25:
          this.enterOuterAlt(_localctx, 25);
        {
          {
            this.state = 1799;
            this.match(ECLParser.TWO);
            this.state = 1800;
            this.match(ECLParser.FIVE);
          }
        }
          break;

        case 26:
          this.enterOuterAlt(_localctx, 26);
        {
          {
            this.state = 1801;
            this.match(ECLParser.TWO);
            this.state = 1802;
            this.match(ECLParser.SIX);
          }
        }
          break;

        case 27:
          this.enterOuterAlt(_localctx, 27);
        {
          {
            this.state = 1803;
            this.match(ECLParser.TWO);
            this.state = 1804;
            this.match(ECLParser.SEVEN);
          }
        }
          break;

        case 28:
          this.enterOuterAlt(_localctx, 28);
        {
          {
            this.state = 1805;
            this.match(ECLParser.TWO);
            this.state = 1806;
            this.match(ECLParser.EIGHT);
          }
        }
          break;

        case 29:
          this.enterOuterAlt(_localctx, 29);
        {
          {
            this.state = 1807;
            this.match(ECLParser.TWO);
            this.state = 1808;
            this.match(ECLParser.NINE);
          }
        }
          break;

        case 30:
          this.enterOuterAlt(_localctx, 30);
        {
          {
            this.state = 1809;
            this.match(ECLParser.THREE);
            this.state = 1810;
            this.match(ECLParser.ZERO);
          }
        }
          break;

        case 31:
          this.enterOuterAlt(_localctx, 31);
        {
          {
            this.state = 1811;
            this.match(ECLParser.THREE);
            this.state = 1812;
            this.match(ECLParser.ONE);
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
  public activefilter(): ActivefilterContext {
    let _localctx: ActivefilterContext = new ActivefilterContext(this._ctx, this.state);
    this.enterRule(_localctx, 230, ECLParser.RULE_activefilter);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1815;
        this.activekeyword();
        this.state = 1816;
        this.ws();
        this.state = 1817;
        this.booleancomparisonoperator();
        this.state = 1818;
        this.ws();
        this.state = 1819;
        this.activevalue();
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
  public activekeyword(): ActivekeywordContext {
    let _localctx: ActivekeywordContext = new ActivekeywordContext(this._ctx, this.state);
    this.enterRule(_localctx, 232, ECLParser.RULE_activekeyword);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1823;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 245, this._ctx)) {
          case 1: {
            this.state = 1821;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_A || _la === ECLParser.A)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1822;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_A || _la === ECLParser.A)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1827;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 246, this._ctx)) {
          case 1: {
            this.state = 1825;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_C || _la === ECLParser.C)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1826;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_C || _la === ECLParser.C)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1831;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 247, this._ctx)) {
          case 1: {
            this.state = 1829;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_T || _la === ECLParser.T)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1830;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_T || _la === ECLParser.T)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1835;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 248, this._ctx)) {
          case 1: {
            this.state = 1833;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_I || _la === ECLParser.I)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1834;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_I || _la === ECLParser.I)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1839;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 249, this._ctx)) {
          case 1: {
            this.state = 1837;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_V || _la === ECLParser.V)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1838;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_V || _la === ECLParser.V)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1843;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 250, this._ctx)) {
          case 1: {
            this.state = 1841;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_E || _la === ECLParser.E)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1842;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_E || _la === ECLParser.E)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
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
  public activevalue(): ActivevalueContext {
    let _localctx: ActivevalueContext = new ActivevalueContext(this._ctx, this.state);
    this.enterRule(_localctx, 234, ECLParser.RULE_activevalue);
    try {
      this.state = 1847;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case ECLParser.ONE:
        case ECLParser.CAP_T:
        case ECLParser.T:
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 1845;
          this.activetruevalue();
        }
          break;
        case ECLParser.ZERO:
        case ECLParser.CAP_F:
        case ECLParser.F:
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 1846;
          this.activefalsevalue();
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
  public activetruevalue(): ActivetruevalueContext {
    let _localctx: ActivetruevalueContext = new ActivetruevalueContext(this._ctx, this.state);
    this.enterRule(_localctx, 236, ECLParser.RULE_activetruevalue);
    let _la: number;
    try {
      this.state = 1854;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case ECLParser.ONE:
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 1849;
          this.match(ECLParser.ONE);
        }
          break;
        case ECLParser.CAP_T:
        case ECLParser.T:
          this.enterOuterAlt(_localctx, 2);
        {
          {
            this.state = 1850;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_T || _la === ECLParser.T)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 1851;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_R || _la === ECLParser.R)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 1852;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_U || _la === ECLParser.U)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 1853;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_E || _la === ECLParser.E)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
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
  public activefalsevalue(): ActivefalsevalueContext {
    let _localctx: ActivefalsevalueContext = new ActivefalsevalueContext(this._ctx, this.state);
    this.enterRule(_localctx, 238, ECLParser.RULE_activefalsevalue);
    let _la: number;
    try {
      this.state = 1862;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case ECLParser.ZERO:
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 1856;
          this.match(ECLParser.ZERO);
        }
          break;
        case ECLParser.CAP_F:
        case ECLParser.F:
          this.enterOuterAlt(_localctx, 2);
        {
          {
            this.state = 1857;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_F || _la === ECLParser.F)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 1858;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_A || _la === ECLParser.A)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 1859;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_L || _la === ECLParser.L)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 1860;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_S || _la === ECLParser.S)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 1861;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_E || _la === ECLParser.E)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
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
  public memberfilterconstraint(): MemberfilterconstraintContext {
    let _localctx: MemberfilterconstraintContext = new MemberfilterconstraintContext(this._ctx, this.state);
    this.enterRule(_localctx, 240, ECLParser.RULE_memberfilterconstraint);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        {
          this.state = 1864;
          this.match(ECLParser.LEFT_CURLY_BRACE);
          this.state = 1865;
          this.match(ECLParser.LEFT_CURLY_BRACE);
        }
        this.state = 1867;
        this.ws();
        this.state = 1870;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 254, this._ctx)) {
          case 1: {
            this.state = 1868;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_M || _la === ECLParser.M)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1869;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_M || _la === ECLParser.M)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1872;
        this.ws();
        this.state = 1873;
        this.memberfilter();
        this.state = 1881;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 255, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1874;
                this.ws();
                this.state = 1875;
                this.match(ECLParser.COMMA);
                this.state = 1876;
                this.ws();
                this.state = 1877;
                this.memberfilter();
              }
            }
          }
          this.state = 1883;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 255, this._ctx);
        }
        this.state = 1884;
        this.ws();
        {
          this.state = 1885;
          this.match(ECLParser.RIGHT_CURLY_BRACE);
          this.state = 1886;
          this.match(ECLParser.RIGHT_CURLY_BRACE);
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
  public memberfilter(): MemberfilterContext {
    let _localctx: MemberfilterContext = new MemberfilterContext(this._ctx, this.state);
    this.enterRule(_localctx, 242, ECLParser.RULE_memberfilter);
    try {
      this.state = 1892;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 256, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 1888;
          this.memberfieldfilter();
        }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 1889;
          this.modulefilter();
        }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
        {
          this.state = 1890;
          this.effectivetimefilter();
        }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
        {
          this.state = 1891;
          this.activefilter();
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
  public memberfieldfilter(): MemberfieldfilterContext {
    let _localctx: MemberfieldfilterContext = new MemberfieldfilterContext(this._ctx, this.state);
    this.enterRule(_localctx, 244, ECLParser.RULE_memberfieldfilter);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1894;
        this.refsetfieldname();
        this.state = 1895;
        this.ws();
        this.state = 1922;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 259, this._ctx)) {
          case 1: {
            {
              this.state = 1896;
              this.expressioncomparisonoperator();
              this.state = 1897;
              this.ws();
              this.state = 1898;
              this.subexpressionconstraint();
            }
          }
            break;

          case 2: {
            {
              this.state = 1900;
              this.numericcomparisonoperator();
              this.state = 1901;
              this.ws();
              this.state = 1902;
              this.match(ECLParser.HASH);
              this.state = 1903;
              this.numericvalue();
            }
          }
            break;

          case 3: {
            {
              this.state = 1905;
              this.stringcomparisonoperator();
              this.state = 1906;
              this.ws();
              this.state = 1909;
              this._errHandler.sync(this);
              switch (this._input.LA(1)) {
                case ECLParser.QUOTE:
                case ECLParser.CAP_M:
                case ECLParser.CAP_W:
                case ECLParser.M:
                case ECLParser.W: {
                  this.state = 1907;
                  this.typedsearchterm();
                }
                  break;
                case ECLParser.LEFT_PAREN: {
                  this.state = 1908;
                  this.typedsearchtermset();
                }
                  break;
                default:
                  throw new NoViableAltException(this);
              }
            }
          }
            break;

          case 4: {
            {
              this.state = 1911;
              this.booleancomparisonoperator();
              this.state = 1912;
              this.ws();
              this.state = 1913;
              this.booleanvalue();
            }
          }
            break;

          case 5: {
            {
              this.state = 1915;
              this.ws();
              this.state = 1916;
              this.timecomparisonoperator();
              this.state = 1917;
              this.ws();
              this.state = 1920;
              this._errHandler.sync(this);
              switch (this._input.LA(1)) {
                case ECLParser.QUOTE: {
                  this.state = 1918;
                  this.timevalue();
                }
                  break;
                case ECLParser.LEFT_PAREN: {
                  this.state = 1919;
                  this.timevalueset();
                }
                  break;
                default:
                  throw new NoViableAltException(this);
              }
            }
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
  public historysupplement(): HistorysupplementContext {
    let _localctx: HistorysupplementContext = new HistorysupplementContext(this._ctx, this.state);
    this.enterRule(_localctx, 246, ECLParser.RULE_historysupplement);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        {
          this.state = 1924;
          this.match(ECLParser.LEFT_CURLY_BRACE);
          this.state = 1925;
          this.match(ECLParser.LEFT_CURLY_BRACE);
        }
        this.state = 1927;
        this.ws();
        this.state = 1928;
        this.match(ECLParser.PLUS);
        this.state = 1929;
        this.ws();
        this.state = 1930;
        this.historykeyword();
        this.state = 1935;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 260, this._ctx)) {
          case 1: {
            this.state = 1931;
            this.historyprofilesuffix();
          }
            break;

          case 2: {
            {
              this.state = 1932;
              this.ws();
              this.state = 1933;
              this.historysubset();
            }
          }
            break;
        }
        this.state = 1937;
        this.ws();
        {
          this.state = 1938;
          this.match(ECLParser.RIGHT_CURLY_BRACE);
          this.state = 1939;
          this.match(ECLParser.RIGHT_CURLY_BRACE);
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
  public historykeyword(): HistorykeywordContext {
    let _localctx: HistorykeywordContext = new HistorykeywordContext(this._ctx, this.state);
    this.enterRule(_localctx, 248, ECLParser.RULE_historykeyword);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1943;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 261, this._ctx)) {
          case 1: {
            this.state = 1941;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_H || _la === ECLParser.H)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1942;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_H || _la === ECLParser.H)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1947;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 262, this._ctx)) {
          case 1: {
            this.state = 1945;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_I || _la === ECLParser.I)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1946;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_I || _la === ECLParser.I)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1951;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 263, this._ctx)) {
          case 1: {
            this.state = 1949;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_S || _la === ECLParser.S)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1950;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_S || _la === ECLParser.S)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1955;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 264, this._ctx)) {
          case 1: {
            this.state = 1953;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_T || _la === ECLParser.T)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1954;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_T || _la === ECLParser.T)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1959;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 265, this._ctx)) {
          case 1: {
            this.state = 1957;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_O || _la === ECLParser.O)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1958;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_O || _la === ECLParser.O)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1963;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 266, this._ctx)) {
          case 1: {
            this.state = 1961;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_R || _la === ECLParser.R)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1962;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_R || _la === ECLParser.R)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1967;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 267, this._ctx)) {
          case 1: {
            this.state = 1965;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_Y || _la === ECLParser.Y)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1966;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_Y || _la === ECLParser.Y)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
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
  public historyprofilesuffix(): HistoryprofilesuffixContext {
    let _localctx: HistoryprofilesuffixContext = new HistoryprofilesuffixContext(this._ctx, this.state);
    this.enterRule(_localctx, 250, ECLParser.RULE_historyprofilesuffix);
    try {
      this.state = 1972;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 268, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 1969;
          this.historyminimumsuffix();
        }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 1970;
          this.historymoderatesuffix();
        }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
        {
          this.state = 1971;
          this.historymaximumsuffix();
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
  public historyminimumsuffix(): HistoryminimumsuffixContext {
    let _localctx: HistoryminimumsuffixContext = new HistoryminimumsuffixContext(this._ctx, this.state);
    this.enterRule(_localctx, 252, ECLParser.RULE_historyminimumsuffix);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1974;
        _la = this._input.LA(1);
        if (!(_la === ECLParser.DASH || _la === ECLParser.UNDERSCORE)) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
        this.state = 1977;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 269, this._ctx)) {
          case 1: {
            this.state = 1975;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_M || _la === ECLParser.M)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1976;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_M || _la === ECLParser.M)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1981;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 270, this._ctx)) {
          case 1: {
            this.state = 1979;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_I || _la === ECLParser.I)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1980;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_I || _la === ECLParser.I)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1985;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 271, this._ctx)) {
          case 1: {
            this.state = 1983;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_N || _la === ECLParser.N)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1984;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_N || _la === ECLParser.N)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
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
  public historymoderatesuffix(): HistorymoderatesuffixContext {
    let _localctx: HistorymoderatesuffixContext = new HistorymoderatesuffixContext(this._ctx, this.state);
    this.enterRule(_localctx, 254, ECLParser.RULE_historymoderatesuffix);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1987;
        _la = this._input.LA(1);
        if (!(_la === ECLParser.DASH || _la === ECLParser.UNDERSCORE)) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
        this.state = 1990;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 272, this._ctx)) {
          case 1: {
            this.state = 1988;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_M || _la === ECLParser.M)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1989;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_M || _la === ECLParser.M)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1994;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 273, this._ctx)) {
          case 1: {
            this.state = 1992;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_O || _la === ECLParser.O)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1993;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_O || _la === ECLParser.O)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 1998;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 274, this._ctx)) {
          case 1: {
            this.state = 1996;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_D || _la === ECLParser.D)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 1997;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_D || _la === ECLParser.D)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
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
  public historymaximumsuffix(): HistorymaximumsuffixContext {
    let _localctx: HistorymaximumsuffixContext = new HistorymaximumsuffixContext(this._ctx, this.state);
    this.enterRule(_localctx, 256, ECLParser.RULE_historymaximumsuffix);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2000;
        _la = this._input.LA(1);
        if (!(_la === ECLParser.DASH || _la === ECLParser.UNDERSCORE)) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
        this.state = 2003;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 275, this._ctx)) {
          case 1: {
            this.state = 2001;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_M || _la === ECLParser.M)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 2002;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_M || _la === ECLParser.M)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 2007;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 276, this._ctx)) {
          case 1: {
            this.state = 2005;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_A || _la === ECLParser.A)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 2006;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_A || _la === ECLParser.A)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 2011;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 277, this._ctx)) {
          case 1: {
            this.state = 2009;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_X || _la === ECLParser.X)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 2010;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_X || _la === ECLParser.X)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
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
  public historysubset(): HistorysubsetContext {
    let _localctx: HistorysubsetContext = new HistorysubsetContext(this._ctx, this.state);
    this.enterRule(_localctx, 258, ECLParser.RULE_historysubset);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2013;
        this.match(ECLParser.LEFT_PAREN);
        this.state = 2014;
        this.ws();
        this.state = 2015;
        this.expressionconstraint();
        this.state = 2016;
        this.ws();
        this.state = 2017;
        this.match(ECLParser.RIGHT_PAREN);
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
  public numericvalue(): NumericvalueContext {
    let _localctx: NumericvalueContext = new NumericvalueContext(this._ctx, this.state);
    this.enterRule(_localctx, 260, ECLParser.RULE_numericvalue);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2020;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === ECLParser.PLUS || _la === ECLParser.DASH) {
          {
            this.state = 2019;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.PLUS || _la === ECLParser.DASH)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
        }

        this.state = 2024;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 279, this._ctx)) {
          case 1: {
            this.state = 2022;
            this.decimalvalue();
          }
            break;

          case 2: {
            this.state = 2023;
            this.integervalue();
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
  public stringvalue(): StringvalueContext {
    let _localctx: StringvalueContext = new StringvalueContext(this._ctx, this.state);
    this.enterRule(_localctx, 262, ECLParser.RULE_stringvalue);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2028;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            this.state = 2028;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case ECLParser.UTF8_LETTER:
              case ECLParser.TAB:
              case ECLParser.LF:
              case ECLParser.CR:
              case ECLParser.SPACE:
              case ECLParser.EXCLAMATION:
              case ECLParser.HASH:
              case ECLParser.DOLLAR:
              case ECLParser.PERCENT:
              case ECLParser.AMPERSAND:
              case ECLParser.APOSTROPHE:
              case ECLParser.LEFT_PAREN:
              case ECLParser.RIGHT_PAREN:
              case ECLParser.ASTERISK:
              case ECLParser.PLUS:
              case ECLParser.COMMA:
              case ECLParser.DASH:
              case ECLParser.PERIOD:
              case ECLParser.SLASH:
              case ECLParser.ZERO:
              case ECLParser.ONE:
              case ECLParser.TWO:
              case ECLParser.THREE:
              case ECLParser.FOUR:
              case ECLParser.FIVE:
              case ECLParser.SIX:
              case ECLParser.SEVEN:
              case ECLParser.EIGHT:
              case ECLParser.NINE:
              case ECLParser.COLON:
              case ECLParser.SEMICOLON:
              case ECLParser.LESS_THAN:
              case ECLParser.EQUALS:
              case ECLParser.GREATER_THAN:
              case ECLParser.QUESTION:
              case ECLParser.AT:
              case ECLParser.CAP_A:
              case ECLParser.CAP_B:
              case ECLParser.CAP_C:
              case ECLParser.CAP_D:
              case ECLParser.CAP_E:
              case ECLParser.CAP_F:
              case ECLParser.CAP_G:
              case ECLParser.CAP_H:
              case ECLParser.CAP_I:
              case ECLParser.CAP_J:
              case ECLParser.CAP_K:
              case ECLParser.CAP_L:
              case ECLParser.CAP_M:
              case ECLParser.CAP_N:
              case ECLParser.CAP_O:
              case ECLParser.CAP_P:
              case ECLParser.CAP_Q:
              case ECLParser.CAP_R:
              case ECLParser.CAP_S:
              case ECLParser.CAP_T:
              case ECLParser.CAP_U:
              case ECLParser.CAP_V:
              case ECLParser.CAP_W:
              case ECLParser.CAP_X:
              case ECLParser.CAP_Y:
              case ECLParser.CAP_Z:
              case ECLParser.LEFT_BRACE:
              case ECLParser.RIGHT_BRACE:
              case ECLParser.CARAT:
              case ECLParser.UNDERSCORE:
              case ECLParser.ACCENT:
              case ECLParser.A:
              case ECLParser.B:
              case ECLParser.C:
              case ECLParser.D:
              case ECLParser.E:
              case ECLParser.F:
              case ECLParser.G:
              case ECLParser.H:
              case ECLParser.I:
              case ECLParser.J:
              case ECLParser.K:
              case ECLParser.L:
              case ECLParser.M:
              case ECLParser.N:
              case ECLParser.O:
              case ECLParser.P:
              case ECLParser.Q:
              case ECLParser.R:
              case ECLParser.S:
              case ECLParser.T:
              case ECLParser.U:
              case ECLParser.V:
              case ECLParser.W:
              case ECLParser.X:
              case ECLParser.Y:
              case ECLParser.Z:
              case ECLParser.LEFT_CURLY_BRACE:
              case ECLParser.PIPE:
              case ECLParser.RIGHT_CURLY_BRACE:
              case ECLParser.TILDE: {
                this.state = 2026;
                this.anynonescapedchar();
              }
                break;
              case ECLParser.BACKSLASH: {
                this.state = 2027;
                this.escapedchar();
              }
                break;
              default:
                throw new NoViableAltException(this);
            }
          }
          this.state = 2030;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ECLParser.UTF8_LETTER) | (1 << ECLParser.TAB) | (1 << ECLParser.LF) | (1 << ECLParser.CR) | (1 << ECLParser.SPACE) | (1 << ECLParser.EXCLAMATION) | (1 << ECLParser.HASH) | (1 << ECLParser.DOLLAR) | (1 << ECLParser.PERCENT) | (1 << ECLParser.AMPERSAND) | (1 << ECLParser.APOSTROPHE) | (1 << ECLParser.LEFT_PAREN) | (1 << ECLParser.RIGHT_PAREN) | (1 << ECLParser.ASTERISK) | (1 << ECLParser.PLUS) | (1 << ECLParser.COMMA) | (1 << ECLParser.DASH) | (1 << ECLParser.PERIOD) | (1 << ECLParser.SLASH) | (1 << ECLParser.ZERO) | (1 << ECLParser.ONE) | (1 << ECLParser.TWO) | (1 << ECLParser.THREE) | (1 << ECLParser.FOUR) | (1 << ECLParser.FIVE) | (1 << ECLParser.SIX) | (1 << ECLParser.SEVEN) | (1 << ECLParser.EIGHT) | (1 << ECLParser.NINE) | (1 << ECLParser.COLON))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ECLParser.SEMICOLON - 32)) | (1 << (ECLParser.LESS_THAN - 32)) | (1 << (ECLParser.EQUALS - 32)) | (1 << (ECLParser.GREATER_THAN - 32)) | (1 << (ECLParser.QUESTION - 32)) | (1 << (ECLParser.AT - 32)) | (1 << (ECLParser.CAP_A - 32)) | (1 << (ECLParser.CAP_B - 32)) | (1 << (ECLParser.CAP_C - 32)) | (1 << (ECLParser.CAP_D - 32)) | (1 << (ECLParser.CAP_E - 32)) | (1 << (ECLParser.CAP_F - 32)) | (1 << (ECLParser.CAP_G - 32)) | (1 << (ECLParser.CAP_H - 32)) | (1 << (ECLParser.CAP_I - 32)) | (1 << (ECLParser.CAP_J - 32)) | (1 << (ECLParser.CAP_K - 32)) | (1 << (ECLParser.CAP_L - 32)) | (1 << (ECLParser.CAP_M - 32)) | (1 << (ECLParser.CAP_N - 32)) | (1 << (ECLParser.CAP_O - 32)) | (1 << (ECLParser.CAP_P - 32)) | (1 << (ECLParser.CAP_Q - 32)) | (1 << (ECLParser.CAP_R - 32)) | (1 << (ECLParser.CAP_S - 32)) | (1 << (ECLParser.CAP_T - 32)) | (1 << (ECLParser.CAP_U - 32)) | (1 << (ECLParser.CAP_V - 32)) | (1 << (ECLParser.CAP_W - 32)) | (1 << (ECLParser.CAP_X - 32)) | (1 << (ECLParser.CAP_Y - 32)) | (1 << (ECLParser.CAP_Z - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (ECLParser.LEFT_BRACE - 64)) | (1 << (ECLParser.BACKSLASH - 64)) | (1 << (ECLParser.RIGHT_BRACE - 64)) | (1 << (ECLParser.CARAT - 64)) | (1 << (ECLParser.UNDERSCORE - 64)) | (1 << (ECLParser.ACCENT - 64)) | (1 << (ECLParser.A - 64)) | (1 << (ECLParser.B - 64)) | (1 << (ECLParser.C - 64)) | (1 << (ECLParser.D - 64)) | (1 << (ECLParser.E - 64)) | (1 << (ECLParser.F - 64)) | (1 << (ECLParser.G - 64)) | (1 << (ECLParser.H - 64)) | (1 << (ECLParser.I - 64)) | (1 << (ECLParser.J - 64)) | (1 << (ECLParser.K - 64)) | (1 << (ECLParser.L - 64)) | (1 << (ECLParser.M - 64)) | (1 << (ECLParser.N - 64)) | (1 << (ECLParser.O - 64)) | (1 << (ECLParser.P - 64)) | (1 << (ECLParser.Q - 64)) | (1 << (ECLParser.R - 64)) | (1 << (ECLParser.S - 64)) | (1 << (ECLParser.T - 64)) | (1 << (ECLParser.U - 64)) | (1 << (ECLParser.V - 64)) | (1 << (ECLParser.W - 64)) | (1 << (ECLParser.X - 64)) | (1 << (ECLParser.Y - 64)) | (1 << (ECLParser.Z - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (ECLParser.LEFT_CURLY_BRACE - 96)) | (1 << (ECLParser.PIPE - 96)) | (1 << (ECLParser.RIGHT_CURLY_BRACE - 96)) | (1 << (ECLParser.TILDE - 96)))) !== 0));
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
  public integervalue(): IntegervalueContext {
    let _localctx: IntegervalueContext = new IntegervalueContext(this._ctx, this.state);
    this.enterRule(_localctx, 264, ECLParser.RULE_integervalue);
    try {
      let _alt: number;
      this.state = 2040;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case ECLParser.ONE:
        case ECLParser.TWO:
        case ECLParser.THREE:
        case ECLParser.FOUR:
        case ECLParser.FIVE:
        case ECLParser.SIX:
        case ECLParser.SEVEN:
        case ECLParser.EIGHT:
        case ECLParser.NINE:
          this.enterOuterAlt(_localctx, 1);
        {
          {
            this.state = 2032;
            this.digitnonzero();
            this.state = 2036;
            this._errHandler.sync(this);
            _alt = this.interpreter.adaptivePredict(this._input, 282, this._ctx);
            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
              if (_alt === 1) {
                {
                  {
                    this.state = 2033;
                    this.digit();
                  }
                }
              }
              this.state = 2038;
              this._errHandler.sync(this);
              _alt = this.interpreter.adaptivePredict(this._input, 282, this._ctx);
            }
          }
        }
          break;
        case ECLParser.ZERO:
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 2039;
          this.zero();
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
  public decimalvalue(): DecimalvalueContext {
    let _localctx: DecimalvalueContext = new DecimalvalueContext(this._ctx, this.state);
    this.enterRule(_localctx, 266, ECLParser.RULE_decimalvalue);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2042;
        this.integervalue();
        this.state = 2043;
        this.match(ECLParser.PERIOD);
        this.state = 2045;
        this._errHandler.sync(this);
        _alt = 1;
        do {
          switch (_alt) {
            case 1: {
              {
                this.state = 2044;
                this.digit();
              }
            }
              break;
            default:
              throw new NoViableAltException(this);
          }
          this.state = 2047;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 284, this._ctx);
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
  public booleanvalue(): BooleanvalueContext {
    let _localctx: BooleanvalueContext = new BooleanvalueContext(this._ctx, this.state);
    this.enterRule(_localctx, 268, ECLParser.RULE_booleanvalue);
    try {
      this.state = 2051;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case ECLParser.CAP_T:
        case ECLParser.T:
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 2049;
          this.true_1();
        }
          break;
        case ECLParser.CAP_F:
        case ECLParser.F:
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 2050;
          this.false_1();
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
  public true_1(): True_1Context {
    let _localctx: True_1Context = new True_1Context(this._ctx, this.state);
    this.enterRule(_localctx, 270, ECLParser.RULE_true_1);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2055;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 286, this._ctx)) {
          case 1: {
            this.state = 2053;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_T || _la === ECLParser.T)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 2054;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_T || _la === ECLParser.T)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 2059;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 287, this._ctx)) {
          case 1: {
            this.state = 2057;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_R || _la === ECLParser.R)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 2058;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_R || _la === ECLParser.R)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 2063;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 288, this._ctx)) {
          case 1: {
            this.state = 2061;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_U || _la === ECLParser.U)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 2062;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_U || _la === ECLParser.U)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 2067;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 289, this._ctx)) {
          case 1: {
            this.state = 2065;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_E || _la === ECLParser.E)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 2066;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_E || _la === ECLParser.E)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
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
  public false_1(): False_1Context {
    let _localctx: False_1Context = new False_1Context(this._ctx, this.state);
    this.enterRule(_localctx, 272, ECLParser.RULE_false_1);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2071;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 290, this._ctx)) {
          case 1: {
            this.state = 2069;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_F || _la === ECLParser.F)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 2070;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_F || _la === ECLParser.F)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 2075;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 291, this._ctx)) {
          case 1: {
            this.state = 2073;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_A || _la === ECLParser.A)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 2074;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_A || _la === ECLParser.A)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 2079;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 292, this._ctx)) {
          case 1: {
            this.state = 2077;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_L || _la === ECLParser.L)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 2078;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_L || _la === ECLParser.L)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 2083;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 293, this._ctx)) {
          case 1: {
            this.state = 2081;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_S || _la === ECLParser.S)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 2082;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_S || _la === ECLParser.S)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;
        }
        this.state = 2087;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 294, this._ctx)) {
          case 1: {
            this.state = 2085;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_E || _la === ECLParser.E)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
            break;

          case 2: {
            this.state = 2086;
            _la = this._input.LA(1);
            if (!(_la === ECLParser.CAP_E || _la === ECLParser.E)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
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
  public nonnegativeintegervalue(): NonnegativeintegervalueContext {
    let _localctx: NonnegativeintegervalueContext = new NonnegativeintegervalueContext(this._ctx, this.state);
    this.enterRule(_localctx, 274, ECLParser.RULE_nonnegativeintegervalue);
    let _la: number;
    try {
      this.state = 2097;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case ECLParser.ONE:
        case ECLParser.TWO:
        case ECLParser.THREE:
        case ECLParser.FOUR:
        case ECLParser.FIVE:
        case ECLParser.SIX:
        case ECLParser.SEVEN:
        case ECLParser.EIGHT:
        case ECLParser.NINE:
          this.enterOuterAlt(_localctx, 1);
        {
          {
            this.state = 2089;
            this.digitnonzero();
            this.state = 2093;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ECLParser.ZERO) | (1 << ECLParser.ONE) | (1 << ECLParser.TWO) | (1 << ECLParser.THREE) | (1 << ECLParser.FOUR) | (1 << ECLParser.FIVE) | (1 << ECLParser.SIX) | (1 << ECLParser.SEVEN) | (1 << ECLParser.EIGHT) | (1 << ECLParser.NINE))) !== 0)) {
              {
                {
                  this.state = 2090;
                  this.digit();
                }
              }
              this.state = 2095;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
          }
        }
          break;
        case ECLParser.ZERO:
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 2096;
          this.zero();
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
  public sctid(): SctidContext {
    let _localctx: SctidContext = new SctidContext(this._ctx, this.state);
    this.enterRule(_localctx, 276, ECLParser.RULE_sctid);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2099;
        this.digitnonzero();
        {
          {
            this.state = 2100;
            this.digit();
          }
          {
            this.state = 2101;
            this.digit();
          }
          {
            this.state = 2102;
            this.digit();
          }
          {
            this.state = 2103;
            this.digit();
          }
          {
            this.state = 2104;
            this.digit();
          }
          this.state = 2196;
          this._errHandler.sync(this);
          switch (this.interpreter.adaptivePredict(this._input, 298, this._ctx)) {
            case 1: {
              {
                {
                  this.state = 2105;
                  this.digit();
                }
                {
                  this.state = 2106;
                  this.digit();
                }
                {
                  this.state = 2107;
                  this.digit();
                }
                {
                  this.state = 2108;
                  this.digit();
                }
                {
                  this.state = 2109;
                  this.digit();
                }
                {
                  this.state = 2110;
                  this.digit();
                }
                {
                  this.state = 2111;
                  this.digit();
                }
                {
                  this.state = 2112;
                  this.digit();
                }
                {
                  this.state = 2113;
                  this.digit();
                }
                {
                  this.state = 2114;
                  this.digit();
                }
                {
                  this.state = 2115;
                  this.digit();
                }
                {
                  this.state = 2116;
                  this.digit();
                }
              }
            }
              break;

            case 2: {
              {
                {
                  this.state = 2118;
                  this.digit();
                }
                {
                  this.state = 2119;
                  this.digit();
                }
                {
                  this.state = 2120;
                  this.digit();
                }
                {
                  this.state = 2121;
                  this.digit();
                }
                {
                  this.state = 2122;
                  this.digit();
                }
                {
                  this.state = 2123;
                  this.digit();
                }
                {
                  this.state = 2124;
                  this.digit();
                }
                {
                  this.state = 2125;
                  this.digit();
                }
                {
                  this.state = 2126;
                  this.digit();
                }
                {
                  this.state = 2127;
                  this.digit();
                }
                {
                  this.state = 2128;
                  this.digit();
                }
              }
            }
              break;

            case 3: {
              {
                {
                  this.state = 2130;
                  this.digit();
                }
                {
                  this.state = 2131;
                  this.digit();
                }
                {
                  this.state = 2132;
                  this.digit();
                }
                {
                  this.state = 2133;
                  this.digit();
                }
                {
                  this.state = 2134;
                  this.digit();
                }
                {
                  this.state = 2135;
                  this.digit();
                }
                {
                  this.state = 2136;
                  this.digit();
                }
                {
                  this.state = 2137;
                  this.digit();
                }
                {
                  this.state = 2138;
                  this.digit();
                }
                {
                  this.state = 2139;
                  this.digit();
                }
              }
            }
              break;

            case 4: {
              {
                {
                  this.state = 2141;
                  this.digit();
                }
                {
                  this.state = 2142;
                  this.digit();
                }
                {
                  this.state = 2143;
                  this.digit();
                }
                {
                  this.state = 2144;
                  this.digit();
                }
                {
                  this.state = 2145;
                  this.digit();
                }
                {
                  this.state = 2146;
                  this.digit();
                }
                {
                  this.state = 2147;
                  this.digit();
                }
                {
                  this.state = 2148;
                  this.digit();
                }
                {
                  this.state = 2149;
                  this.digit();
                }
              }
            }
              break;

            case 5: {
              {
                {
                  this.state = 2151;
                  this.digit();
                }
                {
                  this.state = 2152;
                  this.digit();
                }
                {
                  this.state = 2153;
                  this.digit();
                }
                {
                  this.state = 2154;
                  this.digit();
                }
                {
                  this.state = 2155;
                  this.digit();
                }
                {
                  this.state = 2156;
                  this.digit();
                }
                {
                  this.state = 2157;
                  this.digit();
                }
                {
                  this.state = 2158;
                  this.digit();
                }
              }
            }
              break;

            case 6: {
              {
                {
                  this.state = 2160;
                  this.digit();
                }
                {
                  this.state = 2161;
                  this.digit();
                }
                {
                  this.state = 2162;
                  this.digit();
                }
                {
                  this.state = 2163;
                  this.digit();
                }
                {
                  this.state = 2164;
                  this.digit();
                }
                {
                  this.state = 2165;
                  this.digit();
                }
                {
                  this.state = 2166;
                  this.digit();
                }
              }
            }
              break;

            case 7: {
              {
                {
                  this.state = 2168;
                  this.digit();
                }
                {
                  this.state = 2169;
                  this.digit();
                }
                {
                  this.state = 2170;
                  this.digit();
                }
                {
                  this.state = 2171;
                  this.digit();
                }
                {
                  this.state = 2172;
                  this.digit();
                }
                {
                  this.state = 2173;
                  this.digit();
                }
              }
            }
              break;

            case 8: {
              {
                {
                  this.state = 2175;
                  this.digit();
                }
                {
                  this.state = 2176;
                  this.digit();
                }
                {
                  this.state = 2177;
                  this.digit();
                }
                {
                  this.state = 2178;
                  this.digit();
                }
                {
                  this.state = 2179;
                  this.digit();
                }
              }
            }
              break;

            case 9: {
              {
                {
                  this.state = 2181;
                  this.digit();
                }
                {
                  this.state = 2182;
                  this.digit();
                }
                {
                  this.state = 2183;
                  this.digit();
                }
                {
                  this.state = 2184;
                  this.digit();
                }
              }
            }
              break;

            case 10: {
              {
                {
                  this.state = 2186;
                  this.digit();
                }
                {
                  this.state = 2187;
                  this.digit();
                }
                {
                  this.state = 2188;
                  this.digit();
                }
              }
            }
              break;

            case 11: {
              {
                {
                  this.state = 2190;
                  this.digit();
                }
                {
                  this.state = 2191;
                  this.digit();
                }
              }
            }
              break;

            case 12: {
              this.state = 2194;
              this._errHandler.sync(this);
              switch (this.interpreter.adaptivePredict(this._input, 297, this._ctx)) {
                case 1: {
                  this.state = 2193;
                  this.digit();
                }
                  break;
              }
            }
              break;
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
  public ws(): WsContext {
    let _localctx: WsContext = new WsContext(this._ctx, this.state);
    this.enterRule(_localctx, 278, ECLParser.RULE_ws);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2205;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 300, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              this.state = 2203;
              this._errHandler.sync(this);
              switch (this._input.LA(1)) {
                case ECLParser.SPACE: {
                  this.state = 2198;
                  this.sp();
                }
                  break;
                case ECLParser.TAB: {
                  this.state = 2199;
                  this.htab();
                }
                  break;
                case ECLParser.CR: {
                  this.state = 2200;
                  this.cr();
                }
                  break;
                case ECLParser.LF: {
                  this.state = 2201;
                  this.lf();
                }
                  break;
                case ECLParser.SLASH: {
                  this.state = 2202;
                  this.comment();
                }
                  break;
                default:
                  throw new NoViableAltException(this);
              }
            }
          }
          this.state = 2207;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 300, this._ctx);
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
  public mws(): MwsContext {
    let _localctx: MwsContext = new MwsContext(this._ctx, this.state);
    this.enterRule(_localctx, 280, ECLParser.RULE_mws);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2213;
        this._errHandler.sync(this);
        _alt = 1;
        do {
          switch (_alt) {
            case 1: {
              this.state = 2213;
              this._errHandler.sync(this);
              switch (this._input.LA(1)) {
                case ECLParser.SPACE: {
                  this.state = 2208;
                  this.sp();
                }
                  break;
                case ECLParser.TAB: {
                  this.state = 2209;
                  this.htab();
                }
                  break;
                case ECLParser.CR: {
                  this.state = 2210;
                  this.cr();
                }
                  break;
                case ECLParser.LF: {
                  this.state = 2211;
                  this.lf();
                }
                  break;
                case ECLParser.SLASH: {
                  this.state = 2212;
                  this.comment();
                }
                  break;
                default:
                  throw new NoViableAltException(this);
              }
            }
              break;
            default:
              throw new NoViableAltException(this);
          }
          this.state = 2215;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 302, this._ctx);
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
  public comment(): CommentContext {
    let _localctx: CommentContext = new CommentContext(this._ctx, this.state);
    this.enterRule(_localctx, 282, ECLParser.RULE_comment);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        {
          this.state = 2217;
          this.match(ECLParser.SLASH);
          this.state = 2218;
          this.match(ECLParser.ASTERISK);
        }
        this.state = 2224;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 304, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              this.state = 2222;
              this._errHandler.sync(this);
              switch (this._input.LA(1)) {
                case ECLParser.UTF8_LETTER:
                case ECLParser.TAB:
                case ECLParser.LF:
                case ECLParser.CR:
                case ECLParser.SPACE:
                case ECLParser.EXCLAMATION:
                case ECLParser.QUOTE:
                case ECLParser.HASH:
                case ECLParser.DOLLAR:
                case ECLParser.PERCENT:
                case ECLParser.AMPERSAND:
                case ECLParser.APOSTROPHE:
                case ECLParser.LEFT_PAREN:
                case ECLParser.RIGHT_PAREN:
                case ECLParser.PLUS:
                case ECLParser.COMMA:
                case ECLParser.DASH:
                case ECLParser.PERIOD:
                case ECLParser.SLASH:
                case ECLParser.ZERO:
                case ECLParser.ONE:
                case ECLParser.TWO:
                case ECLParser.THREE:
                case ECLParser.FOUR:
                case ECLParser.FIVE:
                case ECLParser.SIX:
                case ECLParser.SEVEN:
                case ECLParser.EIGHT:
                case ECLParser.NINE:
                case ECLParser.COLON:
                case ECLParser.SEMICOLON:
                case ECLParser.LESS_THAN:
                case ECLParser.EQUALS:
                case ECLParser.GREATER_THAN:
                case ECLParser.QUESTION:
                case ECLParser.AT:
                case ECLParser.CAP_A:
                case ECLParser.CAP_B:
                case ECLParser.CAP_C:
                case ECLParser.CAP_D:
                case ECLParser.CAP_E:
                case ECLParser.CAP_F:
                case ECLParser.CAP_G:
                case ECLParser.CAP_H:
                case ECLParser.CAP_I:
                case ECLParser.CAP_J:
                case ECLParser.CAP_K:
                case ECLParser.CAP_L:
                case ECLParser.CAP_M:
                case ECLParser.CAP_N:
                case ECLParser.CAP_O:
                case ECLParser.CAP_P:
                case ECLParser.CAP_Q:
                case ECLParser.CAP_R:
                case ECLParser.CAP_S:
                case ECLParser.CAP_T:
                case ECLParser.CAP_U:
                case ECLParser.CAP_V:
                case ECLParser.CAP_W:
                case ECLParser.CAP_X:
                case ECLParser.CAP_Y:
                case ECLParser.CAP_Z:
                case ECLParser.LEFT_BRACE:
                case ECLParser.BACKSLASH:
                case ECLParser.RIGHT_BRACE:
                case ECLParser.CARAT:
                case ECLParser.UNDERSCORE:
                case ECLParser.ACCENT:
                case ECLParser.A:
                case ECLParser.B:
                case ECLParser.C:
                case ECLParser.D:
                case ECLParser.E:
                case ECLParser.F:
                case ECLParser.G:
                case ECLParser.H:
                case ECLParser.I:
                case ECLParser.J:
                case ECLParser.K:
                case ECLParser.L:
                case ECLParser.M:
                case ECLParser.N:
                case ECLParser.O:
                case ECLParser.P:
                case ECLParser.Q:
                case ECLParser.R:
                case ECLParser.S:
                case ECLParser.T:
                case ECLParser.U:
                case ECLParser.V:
                case ECLParser.W:
                case ECLParser.X:
                case ECLParser.Y:
                case ECLParser.Z:
                case ECLParser.LEFT_CURLY_BRACE:
                case ECLParser.PIPE:
                case ECLParser.RIGHT_CURLY_BRACE:
                case ECLParser.TILDE: {
                  this.state = 2220;
                  this.nonstarchar();
                }
                  break;
                case ECLParser.ASTERISK: {
                  this.state = 2221;
                  this.starwithnonfslash();
                }
                  break;
                default:
                  throw new NoViableAltException(this);
              }
            }
          }
          this.state = 2226;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 304, this._ctx);
        }
        {
          this.state = 2227;
          this.match(ECLParser.ASTERISK);
          this.state = 2228;
          this.match(ECLParser.SLASH);
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
  public nonstarchar(): NonstarcharContext {
    let _localctx: NonstarcharContext = new NonstarcharContext(this._ctx, this.state);
    this.enterRule(_localctx, 284, ECLParser.RULE_nonstarchar);
    let _la: number;
    try {
      this.state = 2237;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case ECLParser.SPACE:
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 2230;
          this.sp();
        }
          break;
        case ECLParser.TAB:
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 2231;
          this.htab();
        }
          break;
        case ECLParser.CR:
          this.enterOuterAlt(_localctx, 3);
        {
          this.state = 2232;
          this.cr();
        }
          break;
        case ECLParser.LF:
          this.enterOuterAlt(_localctx, 4);
        {
          this.state = 2233;
          this.lf();
        }
          break;
        case ECLParser.EXCLAMATION:
        case ECLParser.QUOTE:
        case ECLParser.HASH:
        case ECLParser.DOLLAR:
        case ECLParser.PERCENT:
        case ECLParser.AMPERSAND:
        case ECLParser.APOSTROPHE:
        case ECLParser.LEFT_PAREN:
        case ECLParser.RIGHT_PAREN:
          this.enterOuterAlt(_localctx, 5);
        {
          this.state = 2234;
          _la = this._input.LA(1);
          if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ECLParser.EXCLAMATION) | (1 << ECLParser.QUOTE) | (1 << ECLParser.HASH) | (1 << ECLParser.DOLLAR) | (1 << ECLParser.PERCENT) | (1 << ECLParser.AMPERSAND) | (1 << ECLParser.APOSTROPHE) | (1 << ECLParser.LEFT_PAREN) | (1 << ECLParser.RIGHT_PAREN))) !== 0))) {
            this._errHandler.recoverInline(this);
          } else {
            if (this._input.LA(1) === Token.EOF) {
              this.matchedEOF = true;
            }

            this._errHandler.reportMatch(this);
            this.consume();
          }
        }
          break;
        case ECLParser.PLUS:
        case ECLParser.COMMA:
        case ECLParser.DASH:
        case ECLParser.PERIOD:
        case ECLParser.SLASH:
        case ECLParser.ZERO:
        case ECLParser.ONE:
        case ECLParser.TWO:
        case ECLParser.THREE:
        case ECLParser.FOUR:
        case ECLParser.FIVE:
        case ECLParser.SIX:
        case ECLParser.SEVEN:
        case ECLParser.EIGHT:
        case ECLParser.NINE:
        case ECLParser.COLON:
        case ECLParser.SEMICOLON:
        case ECLParser.LESS_THAN:
        case ECLParser.EQUALS:
        case ECLParser.GREATER_THAN:
        case ECLParser.QUESTION:
        case ECLParser.AT:
        case ECLParser.CAP_A:
        case ECLParser.CAP_B:
        case ECLParser.CAP_C:
        case ECLParser.CAP_D:
        case ECLParser.CAP_E:
        case ECLParser.CAP_F:
        case ECLParser.CAP_G:
        case ECLParser.CAP_H:
        case ECLParser.CAP_I:
        case ECLParser.CAP_J:
        case ECLParser.CAP_K:
        case ECLParser.CAP_L:
        case ECLParser.CAP_M:
        case ECLParser.CAP_N:
        case ECLParser.CAP_O:
        case ECLParser.CAP_P:
        case ECLParser.CAP_Q:
        case ECLParser.CAP_R:
        case ECLParser.CAP_S:
        case ECLParser.CAP_T:
        case ECLParser.CAP_U:
        case ECLParser.CAP_V:
        case ECLParser.CAP_W:
        case ECLParser.CAP_X:
        case ECLParser.CAP_Y:
        case ECLParser.CAP_Z:
        case ECLParser.LEFT_BRACE:
        case ECLParser.BACKSLASH:
        case ECLParser.RIGHT_BRACE:
        case ECLParser.CARAT:
        case ECLParser.UNDERSCORE:
        case ECLParser.ACCENT:
        case ECLParser.A:
        case ECLParser.B:
        case ECLParser.C:
        case ECLParser.D:
        case ECLParser.E:
        case ECLParser.F:
        case ECLParser.G:
        case ECLParser.H:
        case ECLParser.I:
        case ECLParser.J:
        case ECLParser.K:
        case ECLParser.L:
        case ECLParser.M:
        case ECLParser.N:
        case ECLParser.O:
        case ECLParser.P:
        case ECLParser.Q:
        case ECLParser.R:
        case ECLParser.S:
        case ECLParser.T:
        case ECLParser.U:
        case ECLParser.V:
        case ECLParser.W:
        case ECLParser.X:
        case ECLParser.Y:
        case ECLParser.Z:
        case ECLParser.LEFT_CURLY_BRACE:
        case ECLParser.PIPE:
        case ECLParser.RIGHT_CURLY_BRACE:
        case ECLParser.TILDE:
          this.enterOuterAlt(_localctx, 6);
        {
          this.state = 2235;
          _la = this._input.LA(1);
          if (!(((((_la - 16)) & ~0x1F) === 0 && ((1 << (_la - 16)) & ((1 << (ECLParser.PLUS - 16)) | (1 << (ECLParser.COMMA - 16)) | (1 << (ECLParser.DASH - 16)) | (1 << (ECLParser.PERIOD - 16)) | (1 << (ECLParser.SLASH - 16)) | (1 << (ECLParser.ZERO - 16)) | (1 << (ECLParser.ONE - 16)) | (1 << (ECLParser.TWO - 16)) | (1 << (ECLParser.THREE - 16)) | (1 << (ECLParser.FOUR - 16)) | (1 << (ECLParser.FIVE - 16)) | (1 << (ECLParser.SIX - 16)) | (1 << (ECLParser.SEVEN - 16)) | (1 << (ECLParser.EIGHT - 16)) | (1 << (ECLParser.NINE - 16)) | (1 << (ECLParser.COLON - 16)) | (1 << (ECLParser.SEMICOLON - 16)) | (1 << (ECLParser.LESS_THAN - 16)) | (1 << (ECLParser.EQUALS - 16)) | (1 << (ECLParser.GREATER_THAN - 16)) | (1 << (ECLParser.QUESTION - 16)) | (1 << (ECLParser.AT - 16)) | (1 << (ECLParser.CAP_A - 16)) | (1 << (ECLParser.CAP_B - 16)) | (1 << (ECLParser.CAP_C - 16)) | (1 << (ECLParser.CAP_D - 16)) | (1 << (ECLParser.CAP_E - 16)) | (1 << (ECLParser.CAP_F - 16)) | (1 << (ECLParser.CAP_G - 16)) | (1 << (ECLParser.CAP_H - 16)) | (1 << (ECLParser.CAP_I - 16)) | (1 << (ECLParser.CAP_J - 16)))) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (ECLParser.CAP_K - 48)) | (1 << (ECLParser.CAP_L - 48)) | (1 << (ECLParser.CAP_M - 48)) | (1 << (ECLParser.CAP_N - 48)) | (1 << (ECLParser.CAP_O - 48)) | (1 << (ECLParser.CAP_P - 48)) | (1 << (ECLParser.CAP_Q - 48)) | (1 << (ECLParser.CAP_R - 48)) | (1 << (ECLParser.CAP_S - 48)) | (1 << (ECLParser.CAP_T - 48)) | (1 << (ECLParser.CAP_U - 48)) | (1 << (ECLParser.CAP_V - 48)) | (1 << (ECLParser.CAP_W - 48)) | (1 << (ECLParser.CAP_X - 48)) | (1 << (ECLParser.CAP_Y - 48)) | (1 << (ECLParser.CAP_Z - 48)) | (1 << (ECLParser.LEFT_BRACE - 48)) | (1 << (ECLParser.BACKSLASH - 48)) | (1 << (ECLParser.RIGHT_BRACE - 48)) | (1 << (ECLParser.CARAT - 48)) | (1 << (ECLParser.UNDERSCORE - 48)) | (1 << (ECLParser.ACCENT - 48)) | (1 << (ECLParser.A - 48)) | (1 << (ECLParser.B - 48)) | (1 << (ECLParser.C - 48)) | (1 << (ECLParser.D - 48)) | (1 << (ECLParser.E - 48)) | (1 << (ECLParser.F - 48)) | (1 << (ECLParser.G - 48)) | (1 << (ECLParser.H - 48)) | (1 << (ECLParser.I - 48)) | (1 << (ECLParser.J - 48)))) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & ((1 << (ECLParser.K - 80)) | (1 << (ECLParser.L - 80)) | (1 << (ECLParser.M - 80)) | (1 << (ECLParser.N - 80)) | (1 << (ECLParser.O - 80)) | (1 << (ECLParser.P - 80)) | (1 << (ECLParser.Q - 80)) | (1 << (ECLParser.R - 80)) | (1 << (ECLParser.S - 80)) | (1 << (ECLParser.T - 80)) | (1 << (ECLParser.U - 80)) | (1 << (ECLParser.V - 80)) | (1 << (ECLParser.W - 80)) | (1 << (ECLParser.X - 80)) | (1 << (ECLParser.Y - 80)) | (1 << (ECLParser.Z - 80)) | (1 << (ECLParser.LEFT_CURLY_BRACE - 80)) | (1 << (ECLParser.PIPE - 80)) | (1 << (ECLParser.RIGHT_CURLY_BRACE - 80)) | (1 << (ECLParser.TILDE - 80)))) !== 0))) {
            this._errHandler.recoverInline(this);
          } else {
            if (this._input.LA(1) === Token.EOF) {
              this.matchedEOF = true;
            }

            this._errHandler.reportMatch(this);
            this.consume();
          }
        }
          break;
        case ECLParser.UTF8_LETTER:
          this.enterOuterAlt(_localctx, 7);
        {
          this.state = 2236;
          this.match(ECLParser.UTF8_LETTER);
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
  public starwithnonfslash(): StarwithnonfslashContext {
    let _localctx: StarwithnonfslashContext = new StarwithnonfslashContext(this._ctx, this.state);
    this.enterRule(_localctx, 286, ECLParser.RULE_starwithnonfslash);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2239;
        this.match(ECLParser.ASTERISK);
        this.state = 2240;
        this.nonfslash();
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
  public nonfslash(): NonfslashContext {
    let _localctx: NonfslashContext = new NonfslashContext(this._ctx, this.state);
    this.enterRule(_localctx, 288, ECLParser.RULE_nonfslash);
    let _la: number;
    try {
      this.state = 2249;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case ECLParser.SPACE:
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 2242;
          this.sp();
        }
          break;
        case ECLParser.TAB:
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 2243;
          this.htab();
        }
          break;
        case ECLParser.CR:
          this.enterOuterAlt(_localctx, 3);
        {
          this.state = 2244;
          this.cr();
        }
          break;
        case ECLParser.LF:
          this.enterOuterAlt(_localctx, 4);
        {
          this.state = 2245;
          this.lf();
        }
          break;
        case ECLParser.EXCLAMATION:
        case ECLParser.QUOTE:
        case ECLParser.HASH:
        case ECLParser.DOLLAR:
        case ECLParser.PERCENT:
        case ECLParser.AMPERSAND:
        case ECLParser.APOSTROPHE:
        case ECLParser.LEFT_PAREN:
        case ECLParser.RIGHT_PAREN:
        case ECLParser.ASTERISK:
        case ECLParser.PLUS:
        case ECLParser.COMMA:
        case ECLParser.DASH:
        case ECLParser.PERIOD:
          this.enterOuterAlt(_localctx, 5);
        {
          this.state = 2246;
          _la = this._input.LA(1);
          if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ECLParser.EXCLAMATION) | (1 << ECLParser.QUOTE) | (1 << ECLParser.HASH) | (1 << ECLParser.DOLLAR) | (1 << ECLParser.PERCENT) | (1 << ECLParser.AMPERSAND) | (1 << ECLParser.APOSTROPHE) | (1 << ECLParser.LEFT_PAREN) | (1 << ECLParser.RIGHT_PAREN) | (1 << ECLParser.ASTERISK) | (1 << ECLParser.PLUS) | (1 << ECLParser.COMMA) | (1 << ECLParser.DASH) | (1 << ECLParser.PERIOD))) !== 0))) {
            this._errHandler.recoverInline(this);
          } else {
            if (this._input.LA(1) === Token.EOF) {
              this.matchedEOF = true;
            }

            this._errHandler.reportMatch(this);
            this.consume();
          }
        }
          break;
        case ECLParser.ZERO:
        case ECLParser.ONE:
        case ECLParser.TWO:
        case ECLParser.THREE:
        case ECLParser.FOUR:
        case ECLParser.FIVE:
        case ECLParser.SIX:
        case ECLParser.SEVEN:
        case ECLParser.EIGHT:
        case ECLParser.NINE:
        case ECLParser.COLON:
        case ECLParser.SEMICOLON:
        case ECLParser.LESS_THAN:
        case ECLParser.EQUALS:
        case ECLParser.GREATER_THAN:
        case ECLParser.QUESTION:
        case ECLParser.AT:
        case ECLParser.CAP_A:
        case ECLParser.CAP_B:
        case ECLParser.CAP_C:
        case ECLParser.CAP_D:
        case ECLParser.CAP_E:
        case ECLParser.CAP_F:
        case ECLParser.CAP_G:
        case ECLParser.CAP_H:
        case ECLParser.CAP_I:
        case ECLParser.CAP_J:
        case ECLParser.CAP_K:
        case ECLParser.CAP_L:
        case ECLParser.CAP_M:
        case ECLParser.CAP_N:
        case ECLParser.CAP_O:
        case ECLParser.CAP_P:
        case ECLParser.CAP_Q:
        case ECLParser.CAP_R:
        case ECLParser.CAP_S:
        case ECLParser.CAP_T:
        case ECLParser.CAP_U:
        case ECLParser.CAP_V:
        case ECLParser.CAP_W:
        case ECLParser.CAP_X:
        case ECLParser.CAP_Y:
        case ECLParser.CAP_Z:
        case ECLParser.LEFT_BRACE:
        case ECLParser.BACKSLASH:
        case ECLParser.RIGHT_BRACE:
        case ECLParser.CARAT:
        case ECLParser.UNDERSCORE:
        case ECLParser.ACCENT:
        case ECLParser.A:
        case ECLParser.B:
        case ECLParser.C:
        case ECLParser.D:
        case ECLParser.E:
        case ECLParser.F:
        case ECLParser.G:
        case ECLParser.H:
        case ECLParser.I:
        case ECLParser.J:
        case ECLParser.K:
        case ECLParser.L:
        case ECLParser.M:
        case ECLParser.N:
        case ECLParser.O:
        case ECLParser.P:
        case ECLParser.Q:
        case ECLParser.R:
        case ECLParser.S:
        case ECLParser.T:
        case ECLParser.U:
        case ECLParser.V:
        case ECLParser.W:
        case ECLParser.X:
        case ECLParser.Y:
        case ECLParser.Z:
        case ECLParser.LEFT_CURLY_BRACE:
        case ECLParser.PIPE:
        case ECLParser.RIGHT_CURLY_BRACE:
        case ECLParser.TILDE:
          this.enterOuterAlt(_localctx, 6);
        {
          this.state = 2247;
          _la = this._input.LA(1);
          if (!(((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (ECLParser.ZERO - 21)) | (1 << (ECLParser.ONE - 21)) | (1 << (ECLParser.TWO - 21)) | (1 << (ECLParser.THREE - 21)) | (1 << (ECLParser.FOUR - 21)) | (1 << (ECLParser.FIVE - 21)) | (1 << (ECLParser.SIX - 21)) | (1 << (ECLParser.SEVEN - 21)) | (1 << (ECLParser.EIGHT - 21)) | (1 << (ECLParser.NINE - 21)) | (1 << (ECLParser.COLON - 21)) | (1 << (ECLParser.SEMICOLON - 21)) | (1 << (ECLParser.LESS_THAN - 21)) | (1 << (ECLParser.EQUALS - 21)) | (1 << (ECLParser.GREATER_THAN - 21)) | (1 << (ECLParser.QUESTION - 21)) | (1 << (ECLParser.AT - 21)) | (1 << (ECLParser.CAP_A - 21)) | (1 << (ECLParser.CAP_B - 21)) | (1 << (ECLParser.CAP_C - 21)) | (1 << (ECLParser.CAP_D - 21)) | (1 << (ECLParser.CAP_E - 21)) | (1 << (ECLParser.CAP_F - 21)) | (1 << (ECLParser.CAP_G - 21)) | (1 << (ECLParser.CAP_H - 21)) | (1 << (ECLParser.CAP_I - 21)) | (1 << (ECLParser.CAP_J - 21)) | (1 << (ECLParser.CAP_K - 21)) | (1 << (ECLParser.CAP_L - 21)) | (1 << (ECLParser.CAP_M - 21)) | (1 << (ECLParser.CAP_N - 21)) | (1 << (ECLParser.CAP_O - 21)))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (ECLParser.CAP_P - 53)) | (1 << (ECLParser.CAP_Q - 53)) | (1 << (ECLParser.CAP_R - 53)) | (1 << (ECLParser.CAP_S - 53)) | (1 << (ECLParser.CAP_T - 53)) | (1 << (ECLParser.CAP_U - 53)) | (1 << (ECLParser.CAP_V - 53)) | (1 << (ECLParser.CAP_W - 53)) | (1 << (ECLParser.CAP_X - 53)) | (1 << (ECLParser.CAP_Y - 53)) | (1 << (ECLParser.CAP_Z - 53)) | (1 << (ECLParser.LEFT_BRACE - 53)) | (1 << (ECLParser.BACKSLASH - 53)) | (1 << (ECLParser.RIGHT_BRACE - 53)) | (1 << (ECLParser.CARAT - 53)) | (1 << (ECLParser.UNDERSCORE - 53)) | (1 << (ECLParser.ACCENT - 53)) | (1 << (ECLParser.A - 53)) | (1 << (ECLParser.B - 53)) | (1 << (ECLParser.C - 53)) | (1 << (ECLParser.D - 53)) | (1 << (ECLParser.E - 53)) | (1 << (ECLParser.F - 53)) | (1 << (ECLParser.G - 53)) | (1 << (ECLParser.H - 53)) | (1 << (ECLParser.I - 53)) | (1 << (ECLParser.J - 53)) | (1 << (ECLParser.K - 53)) | (1 << (ECLParser.L - 53)) | (1 << (ECLParser.M - 53)) | (1 << (ECLParser.N - 53)) | (1 << (ECLParser.O - 53)))) !== 0) || ((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & ((1 << (ECLParser.P - 85)) | (1 << (ECLParser.Q - 85)) | (1 << (ECLParser.R - 85)) | (1 << (ECLParser.S - 85)) | (1 << (ECLParser.T - 85)) | (1 << (ECLParser.U - 85)) | (1 << (ECLParser.V - 85)) | (1 << (ECLParser.W - 85)) | (1 << (ECLParser.X - 85)) | (1 << (ECLParser.Y - 85)) | (1 << (ECLParser.Z - 85)) | (1 << (ECLParser.LEFT_CURLY_BRACE - 85)) | (1 << (ECLParser.PIPE - 85)) | (1 << (ECLParser.RIGHT_CURLY_BRACE - 85)) | (1 << (ECLParser.TILDE - 85)))) !== 0))) {
            this._errHandler.recoverInline(this);
          } else {
            if (this._input.LA(1) === Token.EOF) {
              this.matchedEOF = true;
            }

            this._errHandler.reportMatch(this);
            this.consume();
          }
        }
          break;
        case ECLParser.UTF8_LETTER:
          this.enterOuterAlt(_localctx, 7);
        {
          this.state = 2248;
          this.match(ECLParser.UTF8_LETTER);
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
  public sp(): SpContext {
    let _localctx: SpContext = new SpContext(this._ctx, this.state);
    this.enterRule(_localctx, 290, ECLParser.RULE_sp);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2251;
        this.match(ECLParser.SPACE);
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
  public htab(): HtabContext {
    let _localctx: HtabContext = new HtabContext(this._ctx, this.state);
    this.enterRule(_localctx, 292, ECLParser.RULE_htab);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2253;
        this.match(ECLParser.TAB);
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
  public cr(): CrContext {
    let _localctx: CrContext = new CrContext(this._ctx, this.state);
    this.enterRule(_localctx, 294, ECLParser.RULE_cr);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2255;
        this.match(ECLParser.CR);
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
  public lf(): LfContext {
    let _localctx: LfContext = new LfContext(this._ctx, this.state);
    this.enterRule(_localctx, 296, ECLParser.RULE_lf);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2257;
        this.match(ECLParser.LF);
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
  public qm(): QmContext {
    let _localctx: QmContext = new QmContext(this._ctx, this.state);
    this.enterRule(_localctx, 298, ECLParser.RULE_qm);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2259;
        this.match(ECLParser.QUOTE);
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
  public bs(): BsContext {
    let _localctx: BsContext = new BsContext(this._ctx, this.state);
    this.enterRule(_localctx, 300, ECLParser.RULE_bs);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2261;
        this.match(ECLParser.BACKSLASH);
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
  public star(): StarContext {
    let _localctx: StarContext = new StarContext(this._ctx, this.state);
    this.enterRule(_localctx, 302, ECLParser.RULE_star);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2263;
        this.match(ECLParser.ASTERISK);
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
  public digit(): DigitContext {
    let _localctx: DigitContext = new DigitContext(this._ctx, this.state);
    this.enterRule(_localctx, 304, ECLParser.RULE_digit);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2265;
        _la = this._input.LA(1);
        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ECLParser.ZERO) | (1 << ECLParser.ONE) | (1 << ECLParser.TWO) | (1 << ECLParser.THREE) | (1 << ECLParser.FOUR) | (1 << ECLParser.FIVE) | (1 << ECLParser.SIX) | (1 << ECLParser.SEVEN) | (1 << ECLParser.EIGHT) | (1 << ECLParser.NINE))) !== 0))) {
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
  public zero(): ZeroContext {
    let _localctx: ZeroContext = new ZeroContext(this._ctx, this.state);
    this.enterRule(_localctx, 306, ECLParser.RULE_zero);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2267;
        this.match(ECLParser.ZERO);
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
  public digitnonzero(): DigitnonzeroContext {
    let _localctx: DigitnonzeroContext = new DigitnonzeroContext(this._ctx, this.state);
    this.enterRule(_localctx, 308, ECLParser.RULE_digitnonzero);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2269;
        _la = this._input.LA(1);
        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ECLParser.ONE) | (1 << ECLParser.TWO) | (1 << ECLParser.THREE) | (1 << ECLParser.FOUR) | (1 << ECLParser.FIVE) | (1 << ECLParser.SIX) | (1 << ECLParser.SEVEN) | (1 << ECLParser.EIGHT) | (1 << ECLParser.NINE))) !== 0))) {
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
  public nonwsnonpipe(): NonwsnonpipeContext {
    let _localctx: NonwsnonpipeContext = new NonwsnonpipeContext(this._ctx, this.state);
    this.enterRule(_localctx, 310, ECLParser.RULE_nonwsnonpipe);
    let _la: number;
    try {
      this.state = 2274;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case ECLParser.EXCLAMATION:
        case ECLParser.QUOTE:
        case ECLParser.HASH:
        case ECLParser.DOLLAR:
        case ECLParser.PERCENT:
        case ECLParser.AMPERSAND:
        case ECLParser.APOSTROPHE:
        case ECLParser.LEFT_PAREN:
        case ECLParser.RIGHT_PAREN:
        case ECLParser.ASTERISK:
        case ECLParser.PLUS:
        case ECLParser.COMMA:
        case ECLParser.DASH:
        case ECLParser.PERIOD:
        case ECLParser.SLASH:
        case ECLParser.ZERO:
        case ECLParser.ONE:
        case ECLParser.TWO:
        case ECLParser.THREE:
        case ECLParser.FOUR:
        case ECLParser.FIVE:
        case ECLParser.SIX:
        case ECLParser.SEVEN:
        case ECLParser.EIGHT:
        case ECLParser.NINE:
        case ECLParser.COLON:
        case ECLParser.SEMICOLON:
        case ECLParser.LESS_THAN:
        case ECLParser.EQUALS:
        case ECLParser.GREATER_THAN:
        case ECLParser.QUESTION:
        case ECLParser.AT:
        case ECLParser.CAP_A:
        case ECLParser.CAP_B:
        case ECLParser.CAP_C:
        case ECLParser.CAP_D:
        case ECLParser.CAP_E:
        case ECLParser.CAP_F:
        case ECLParser.CAP_G:
        case ECLParser.CAP_H:
        case ECLParser.CAP_I:
        case ECLParser.CAP_J:
        case ECLParser.CAP_K:
        case ECLParser.CAP_L:
        case ECLParser.CAP_M:
        case ECLParser.CAP_N:
        case ECLParser.CAP_O:
        case ECLParser.CAP_P:
        case ECLParser.CAP_Q:
        case ECLParser.CAP_R:
        case ECLParser.CAP_S:
        case ECLParser.CAP_T:
        case ECLParser.CAP_U:
        case ECLParser.CAP_V:
        case ECLParser.CAP_W:
        case ECLParser.CAP_X:
        case ECLParser.CAP_Y:
        case ECLParser.CAP_Z:
        case ECLParser.LEFT_BRACE:
        case ECLParser.BACKSLASH:
        case ECLParser.RIGHT_BRACE:
        case ECLParser.CARAT:
        case ECLParser.UNDERSCORE:
        case ECLParser.ACCENT:
        case ECLParser.A:
        case ECLParser.B:
        case ECLParser.C:
        case ECLParser.D:
        case ECLParser.E:
        case ECLParser.F:
        case ECLParser.G:
        case ECLParser.H:
        case ECLParser.I:
        case ECLParser.J:
        case ECLParser.K:
        case ECLParser.L:
        case ECLParser.M:
        case ECLParser.N:
        case ECLParser.O:
        case ECLParser.P:
        case ECLParser.Q:
        case ECLParser.R:
        case ECLParser.S:
        case ECLParser.T:
        case ECLParser.U:
        case ECLParser.V:
        case ECLParser.W:
        case ECLParser.X:
        case ECLParser.Y:
        case ECLParser.Z:
        case ECLParser.LEFT_CURLY_BRACE:
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 2271;
          _la = this._input.LA(1);
          if (!(((((_la - 6)) & ~0x1F) === 0 && ((1 << (_la - 6)) & ((1 << (ECLParser.EXCLAMATION - 6)) | (1 << (ECLParser.QUOTE - 6)) | (1 << (ECLParser.HASH - 6)) | (1 << (ECLParser.DOLLAR - 6)) | (1 << (ECLParser.PERCENT - 6)) | (1 << (ECLParser.AMPERSAND - 6)) | (1 << (ECLParser.APOSTROPHE - 6)) | (1 << (ECLParser.LEFT_PAREN - 6)) | (1 << (ECLParser.RIGHT_PAREN - 6)) | (1 << (ECLParser.ASTERISK - 6)) | (1 << (ECLParser.PLUS - 6)) | (1 << (ECLParser.COMMA - 6)) | (1 << (ECLParser.DASH - 6)) | (1 << (ECLParser.PERIOD - 6)) | (1 << (ECLParser.SLASH - 6)) | (1 << (ECLParser.ZERO - 6)) | (1 << (ECLParser.ONE - 6)) | (1 << (ECLParser.TWO - 6)) | (1 << (ECLParser.THREE - 6)) | (1 << (ECLParser.FOUR - 6)) | (1 << (ECLParser.FIVE - 6)) | (1 << (ECLParser.SIX - 6)) | (1 << (ECLParser.SEVEN - 6)) | (1 << (ECLParser.EIGHT - 6)) | (1 << (ECLParser.NINE - 6)) | (1 << (ECLParser.COLON - 6)) | (1 << (ECLParser.SEMICOLON - 6)) | (1 << (ECLParser.LESS_THAN - 6)) | (1 << (ECLParser.EQUALS - 6)) | (1 << (ECLParser.GREATER_THAN - 6)) | (1 << (ECLParser.QUESTION - 6)) | (1 << (ECLParser.AT - 6)))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (ECLParser.CAP_A - 38)) | (1 << (ECLParser.CAP_B - 38)) | (1 << (ECLParser.CAP_C - 38)) | (1 << (ECLParser.CAP_D - 38)) | (1 << (ECLParser.CAP_E - 38)) | (1 << (ECLParser.CAP_F - 38)) | (1 << (ECLParser.CAP_G - 38)) | (1 << (ECLParser.CAP_H - 38)) | (1 << (ECLParser.CAP_I - 38)) | (1 << (ECLParser.CAP_J - 38)) | (1 << (ECLParser.CAP_K - 38)) | (1 << (ECLParser.CAP_L - 38)) | (1 << (ECLParser.CAP_M - 38)) | (1 << (ECLParser.CAP_N - 38)) | (1 << (ECLParser.CAP_O - 38)) | (1 << (ECLParser.CAP_P - 38)) | (1 << (ECLParser.CAP_Q - 38)) | (1 << (ECLParser.CAP_R - 38)) | (1 << (ECLParser.CAP_S - 38)) | (1 << (ECLParser.CAP_T - 38)) | (1 << (ECLParser.CAP_U - 38)) | (1 << (ECLParser.CAP_V - 38)) | (1 << (ECLParser.CAP_W - 38)) | (1 << (ECLParser.CAP_X - 38)) | (1 << (ECLParser.CAP_Y - 38)) | (1 << (ECLParser.CAP_Z - 38)) | (1 << (ECLParser.LEFT_BRACE - 38)) | (1 << (ECLParser.BACKSLASH - 38)) | (1 << (ECLParser.RIGHT_BRACE - 38)) | (1 << (ECLParser.CARAT - 38)) | (1 << (ECLParser.UNDERSCORE - 38)) | (1 << (ECLParser.ACCENT - 38)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (ECLParser.A - 70)) | (1 << (ECLParser.B - 70)) | (1 << (ECLParser.C - 70)) | (1 << (ECLParser.D - 70)) | (1 << (ECLParser.E - 70)) | (1 << (ECLParser.F - 70)) | (1 << (ECLParser.G - 70)) | (1 << (ECLParser.H - 70)) | (1 << (ECLParser.I - 70)) | (1 << (ECLParser.J - 70)) | (1 << (ECLParser.K - 70)) | (1 << (ECLParser.L - 70)) | (1 << (ECLParser.M - 70)) | (1 << (ECLParser.N - 70)) | (1 << (ECLParser.O - 70)) | (1 << (ECLParser.P - 70)) | (1 << (ECLParser.Q - 70)) | (1 << (ECLParser.R - 70)) | (1 << (ECLParser.S - 70)) | (1 << (ECLParser.T - 70)) | (1 << (ECLParser.U - 70)) | (1 << (ECLParser.V - 70)) | (1 << (ECLParser.W - 70)) | (1 << (ECLParser.X - 70)) | (1 << (ECLParser.Y - 70)) | (1 << (ECLParser.Z - 70)) | (1 << (ECLParser.LEFT_CURLY_BRACE - 70)))) !== 0))) {
            this._errHandler.recoverInline(this);
          } else {
            if (this._input.LA(1) === Token.EOF) {
              this.matchedEOF = true;
            }

            this._errHandler.reportMatch(this);
            this.consume();
          }
        }
          break;
        case ECLParser.RIGHT_CURLY_BRACE:
        case ECLParser.TILDE:
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 2272;
          _la = this._input.LA(1);
          if (!(_la === ECLParser.RIGHT_CURLY_BRACE || _la === ECLParser.TILDE)) {
            this._errHandler.recoverInline(this);
          } else {
            if (this._input.LA(1) === Token.EOF) {
              this.matchedEOF = true;
            }

            this._errHandler.reportMatch(this);
            this.consume();
          }
        }
          break;
        case ECLParser.UTF8_LETTER:
          this.enterOuterAlt(_localctx, 3);
        {
          this.state = 2273;
          this.match(ECLParser.UTF8_LETTER);
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
  public anynonescapedchar(): AnynonescapedcharContext {
    let _localctx: AnynonescapedcharContext = new AnynonescapedcharContext(this._ctx, this.state);
    this.enterRule(_localctx, 312, ECLParser.RULE_anynonescapedchar);
    let _la: number;
    try {
      this.state = 2284;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 308, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 2276;
          this.sp();
        }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 2277;
          this.htab();
        }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
        {
          this.state = 2278;
          this.cr();
        }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
        {
          this.state = 2279;
          this.lf();
        }
          break;

        case 5:
          this.enterOuterAlt(_localctx, 5);
        {
          this.state = 2280;
          _la = this._input.LA(1);
          if (!(_la === ECLParser.SPACE || _la === ECLParser.EXCLAMATION)) {
            this._errHandler.recoverInline(this);
          } else {
            if (this._input.LA(1) === Token.EOF) {
              this.matchedEOF = true;
            }

            this._errHandler.reportMatch(this);
            this.consume();
          }
        }
          break;

        case 6:
          this.enterOuterAlt(_localctx, 6);
        {
          this.state = 2281;
          _la = this._input.LA(1);
          if (!(((((_la - 8)) & ~0x1F) === 0 && ((1 << (_la - 8)) & ((1 << (ECLParser.HASH - 8)) | (1 << (ECLParser.DOLLAR - 8)) | (1 << (ECLParser.PERCENT - 8)) | (1 << (ECLParser.AMPERSAND - 8)) | (1 << (ECLParser.APOSTROPHE - 8)) | (1 << (ECLParser.LEFT_PAREN - 8)) | (1 << (ECLParser.RIGHT_PAREN - 8)) | (1 << (ECLParser.ASTERISK - 8)) | (1 << (ECLParser.PLUS - 8)) | (1 << (ECLParser.COMMA - 8)) | (1 << (ECLParser.DASH - 8)) | (1 << (ECLParser.PERIOD - 8)) | (1 << (ECLParser.SLASH - 8)) | (1 << (ECLParser.ZERO - 8)) | (1 << (ECLParser.ONE - 8)) | (1 << (ECLParser.TWO - 8)) | (1 << (ECLParser.THREE - 8)) | (1 << (ECLParser.FOUR - 8)) | (1 << (ECLParser.FIVE - 8)) | (1 << (ECLParser.SIX - 8)) | (1 << (ECLParser.SEVEN - 8)) | (1 << (ECLParser.EIGHT - 8)) | (1 << (ECLParser.NINE - 8)) | (1 << (ECLParser.COLON - 8)) | (1 << (ECLParser.SEMICOLON - 8)) | (1 << (ECLParser.LESS_THAN - 8)) | (1 << (ECLParser.EQUALS - 8)) | (1 << (ECLParser.GREATER_THAN - 8)) | (1 << (ECLParser.QUESTION - 8)) | (1 << (ECLParser.AT - 8)) | (1 << (ECLParser.CAP_A - 8)) | (1 << (ECLParser.CAP_B - 8)))) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (ECLParser.CAP_C - 40)) | (1 << (ECLParser.CAP_D - 40)) | (1 << (ECLParser.CAP_E - 40)) | (1 << (ECLParser.CAP_F - 40)) | (1 << (ECLParser.CAP_G - 40)) | (1 << (ECLParser.CAP_H - 40)) | (1 << (ECLParser.CAP_I - 40)) | (1 << (ECLParser.CAP_J - 40)) | (1 << (ECLParser.CAP_K - 40)) | (1 << (ECLParser.CAP_L - 40)) | (1 << (ECLParser.CAP_M - 40)) | (1 << (ECLParser.CAP_N - 40)) | (1 << (ECLParser.CAP_O - 40)) | (1 << (ECLParser.CAP_P - 40)) | (1 << (ECLParser.CAP_Q - 40)) | (1 << (ECLParser.CAP_R - 40)) | (1 << (ECLParser.CAP_S - 40)) | (1 << (ECLParser.CAP_T - 40)) | (1 << (ECLParser.CAP_U - 40)) | (1 << (ECLParser.CAP_V - 40)) | (1 << (ECLParser.CAP_W - 40)) | (1 << (ECLParser.CAP_X - 40)) | (1 << (ECLParser.CAP_Y - 40)) | (1 << (ECLParser.CAP_Z - 40)) | (1 << (ECLParser.LEFT_BRACE - 40)))) !== 0))) {
            this._errHandler.recoverInline(this);
          } else {
            if (this._input.LA(1) === Token.EOF) {
              this.matchedEOF = true;
            }

            this._errHandler.reportMatch(this);
            this.consume();
          }
        }
          break;

        case 7:
          this.enterOuterAlt(_localctx, 7);
        {
          this.state = 2282;
          _la = this._input.LA(1);
          if (!(((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ECLParser.RIGHT_BRACE - 66)) | (1 << (ECLParser.CARAT - 66)) | (1 << (ECLParser.UNDERSCORE - 66)) | (1 << (ECLParser.ACCENT - 66)) | (1 << (ECLParser.A - 66)) | (1 << (ECLParser.B - 66)) | (1 << (ECLParser.C - 66)) | (1 << (ECLParser.D - 66)) | (1 << (ECLParser.E - 66)) | (1 << (ECLParser.F - 66)) | (1 << (ECLParser.G - 66)) | (1 << (ECLParser.H - 66)) | (1 << (ECLParser.I - 66)) | (1 << (ECLParser.J - 66)) | (1 << (ECLParser.K - 66)) | (1 << (ECLParser.L - 66)) | (1 << (ECLParser.M - 66)) | (1 << (ECLParser.N - 66)) | (1 << (ECLParser.O - 66)) | (1 << (ECLParser.P - 66)) | (1 << (ECLParser.Q - 66)) | (1 << (ECLParser.R - 66)) | (1 << (ECLParser.S - 66)) | (1 << (ECLParser.T - 66)) | (1 << (ECLParser.U - 66)) | (1 << (ECLParser.V - 66)) | (1 << (ECLParser.W - 66)) | (1 << (ECLParser.X - 66)) | (1 << (ECLParser.Y - 66)) | (1 << (ECLParser.Z - 66)) | (1 << (ECLParser.LEFT_CURLY_BRACE - 66)) | (1 << (ECLParser.PIPE - 66)))) !== 0) || _la === ECLParser.RIGHT_CURLY_BRACE || _la === ECLParser.TILDE)) {
            this._errHandler.recoverInline(this);
          } else {
            if (this._input.LA(1) === Token.EOF) {
              this.matchedEOF = true;
            }

            this._errHandler.reportMatch(this);
            this.consume();
          }
        }
          break;

        case 8:
          this.enterOuterAlt(_localctx, 8);
        {
          this.state = 2283;
          this.match(ECLParser.UTF8_LETTER);
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
  public escapedchar(): EscapedcharContext {
    let _localctx: EscapedcharContext = new EscapedcharContext(this._ctx, this.state);
    this.enterRule(_localctx, 314, ECLParser.RULE_escapedchar);
    try {
      this.state = 2292;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 309, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
        {
          {
            this.state = 2286;
            this.bs();
            this.state = 2287;
            this.qm();
          }
        }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
        {
          {
            this.state = 2289;
            this.bs();
            this.state = 2290;
            this.bs();
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
  public escapedwildchar(): EscapedwildcharContext {
    let _localctx: EscapedwildcharContext = new EscapedwildcharContext(this._ctx, this.state);
    this.enterRule(_localctx, 316, ECLParser.RULE_escapedwildchar);
    try {
      this.state = 2303;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 310, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
        {
          {
            this.state = 2294;
            this.bs();
            this.state = 2295;
            this.qm();
          }
        }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
        {
          {
            this.state = 2297;
            this.bs();
            this.state = 2298;
            this.bs();
          }
        }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
        {
          {
            this.state = 2300;
            this.bs();
            this.state = 2301;
            this.star();
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
  public nonwsnonescapedchar(): NonwsnonescapedcharContext {
    let _localctx: NonwsnonescapedcharContext = new NonwsnonescapedcharContext(this._ctx, this.state);
    this.enterRule(_localctx, 318, ECLParser.RULE_nonwsnonescapedchar);
    let _la: number;
    try {
      this.state = 2309;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case ECLParser.EXCLAMATION:
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 2305;
          this.match(ECLParser.EXCLAMATION);
        }
          break;
        case ECLParser.HASH:
        case ECLParser.DOLLAR:
        case ECLParser.PERCENT:
        case ECLParser.AMPERSAND:
        case ECLParser.APOSTROPHE:
        case ECLParser.LEFT_PAREN:
        case ECLParser.RIGHT_PAREN:
        case ECLParser.ASTERISK:
        case ECLParser.PLUS:
        case ECLParser.COMMA:
        case ECLParser.DASH:
        case ECLParser.PERIOD:
        case ECLParser.SLASH:
        case ECLParser.ZERO:
        case ECLParser.ONE:
        case ECLParser.TWO:
        case ECLParser.THREE:
        case ECLParser.FOUR:
        case ECLParser.FIVE:
        case ECLParser.SIX:
        case ECLParser.SEVEN:
        case ECLParser.EIGHT:
        case ECLParser.NINE:
        case ECLParser.COLON:
        case ECLParser.SEMICOLON:
        case ECLParser.LESS_THAN:
        case ECLParser.EQUALS:
        case ECLParser.GREATER_THAN:
        case ECLParser.QUESTION:
        case ECLParser.AT:
        case ECLParser.CAP_A:
        case ECLParser.CAP_B:
        case ECLParser.CAP_C:
        case ECLParser.CAP_D:
        case ECLParser.CAP_E:
        case ECLParser.CAP_F:
        case ECLParser.CAP_G:
        case ECLParser.CAP_H:
        case ECLParser.CAP_I:
        case ECLParser.CAP_J:
        case ECLParser.CAP_K:
        case ECLParser.CAP_L:
        case ECLParser.CAP_M:
        case ECLParser.CAP_N:
        case ECLParser.CAP_O:
        case ECLParser.CAP_P:
        case ECLParser.CAP_Q:
        case ECLParser.CAP_R:
        case ECLParser.CAP_S:
        case ECLParser.CAP_T:
        case ECLParser.CAP_U:
        case ECLParser.CAP_V:
        case ECLParser.CAP_W:
        case ECLParser.CAP_X:
        case ECLParser.CAP_Y:
        case ECLParser.CAP_Z:
        case ECLParser.LEFT_BRACE:
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 2306;
          _la = this._input.LA(1);
          if (!(((((_la - 8)) & ~0x1F) === 0 && ((1 << (_la - 8)) & ((1 << (ECLParser.HASH - 8)) | (1 << (ECLParser.DOLLAR - 8)) | (1 << (ECLParser.PERCENT - 8)) | (1 << (ECLParser.AMPERSAND - 8)) | (1 << (ECLParser.APOSTROPHE - 8)) | (1 << (ECLParser.LEFT_PAREN - 8)) | (1 << (ECLParser.RIGHT_PAREN - 8)) | (1 << (ECLParser.ASTERISK - 8)) | (1 << (ECLParser.PLUS - 8)) | (1 << (ECLParser.COMMA - 8)) | (1 << (ECLParser.DASH - 8)) | (1 << (ECLParser.PERIOD - 8)) | (1 << (ECLParser.SLASH - 8)) | (1 << (ECLParser.ZERO - 8)) | (1 << (ECLParser.ONE - 8)) | (1 << (ECLParser.TWO - 8)) | (1 << (ECLParser.THREE - 8)) | (1 << (ECLParser.FOUR - 8)) | (1 << (ECLParser.FIVE - 8)) | (1 << (ECLParser.SIX - 8)) | (1 << (ECLParser.SEVEN - 8)) | (1 << (ECLParser.EIGHT - 8)) | (1 << (ECLParser.NINE - 8)) | (1 << (ECLParser.COLON - 8)) | (1 << (ECLParser.SEMICOLON - 8)) | (1 << (ECLParser.LESS_THAN - 8)) | (1 << (ECLParser.EQUALS - 8)) | (1 << (ECLParser.GREATER_THAN - 8)) | (1 << (ECLParser.QUESTION - 8)) | (1 << (ECLParser.AT - 8)) | (1 << (ECLParser.CAP_A - 8)) | (1 << (ECLParser.CAP_B - 8)))) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (ECLParser.CAP_C - 40)) | (1 << (ECLParser.CAP_D - 40)) | (1 << (ECLParser.CAP_E - 40)) | (1 << (ECLParser.CAP_F - 40)) | (1 << (ECLParser.CAP_G - 40)) | (1 << (ECLParser.CAP_H - 40)) | (1 << (ECLParser.CAP_I - 40)) | (1 << (ECLParser.CAP_J - 40)) | (1 << (ECLParser.CAP_K - 40)) | (1 << (ECLParser.CAP_L - 40)) | (1 << (ECLParser.CAP_M - 40)) | (1 << (ECLParser.CAP_N - 40)) | (1 << (ECLParser.CAP_O - 40)) | (1 << (ECLParser.CAP_P - 40)) | (1 << (ECLParser.CAP_Q - 40)) | (1 << (ECLParser.CAP_R - 40)) | (1 << (ECLParser.CAP_S - 40)) | (1 << (ECLParser.CAP_T - 40)) | (1 << (ECLParser.CAP_U - 40)) | (1 << (ECLParser.CAP_V - 40)) | (1 << (ECLParser.CAP_W - 40)) | (1 << (ECLParser.CAP_X - 40)) | (1 << (ECLParser.CAP_Y - 40)) | (1 << (ECLParser.CAP_Z - 40)) | (1 << (ECLParser.LEFT_BRACE - 40)))) !== 0))) {
            this._errHandler.recoverInline(this);
          } else {
            if (this._input.LA(1) === Token.EOF) {
              this.matchedEOF = true;
            }

            this._errHandler.reportMatch(this);
            this.consume();
          }
        }
          break;
        case ECLParser.RIGHT_BRACE:
        case ECLParser.CARAT:
        case ECLParser.UNDERSCORE:
        case ECLParser.ACCENT:
        case ECLParser.A:
        case ECLParser.B:
        case ECLParser.C:
        case ECLParser.D:
        case ECLParser.E:
        case ECLParser.F:
        case ECLParser.G:
        case ECLParser.H:
        case ECLParser.I:
        case ECLParser.J:
        case ECLParser.K:
        case ECLParser.L:
        case ECLParser.M:
        case ECLParser.N:
        case ECLParser.O:
        case ECLParser.P:
        case ECLParser.Q:
        case ECLParser.R:
        case ECLParser.S:
        case ECLParser.T:
        case ECLParser.U:
        case ECLParser.V:
        case ECLParser.W:
        case ECLParser.X:
        case ECLParser.Y:
        case ECLParser.Z:
        case ECLParser.LEFT_CURLY_BRACE:
        case ECLParser.PIPE:
        case ECLParser.RIGHT_CURLY_BRACE:
        case ECLParser.TILDE:
          this.enterOuterAlt(_localctx, 3);
        {
          this.state = 2307;
          _la = this._input.LA(1);
          if (!(((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ECLParser.RIGHT_BRACE - 66)) | (1 << (ECLParser.CARAT - 66)) | (1 << (ECLParser.UNDERSCORE - 66)) | (1 << (ECLParser.ACCENT - 66)) | (1 << (ECLParser.A - 66)) | (1 << (ECLParser.B - 66)) | (1 << (ECLParser.C - 66)) | (1 << (ECLParser.D - 66)) | (1 << (ECLParser.E - 66)) | (1 << (ECLParser.F - 66)) | (1 << (ECLParser.G - 66)) | (1 << (ECLParser.H - 66)) | (1 << (ECLParser.I - 66)) | (1 << (ECLParser.J - 66)) | (1 << (ECLParser.K - 66)) | (1 << (ECLParser.L - 66)) | (1 << (ECLParser.M - 66)) | (1 << (ECLParser.N - 66)) | (1 << (ECLParser.O - 66)) | (1 << (ECLParser.P - 66)) | (1 << (ECLParser.Q - 66)) | (1 << (ECLParser.R - 66)) | (1 << (ECLParser.S - 66)) | (1 << (ECLParser.T - 66)) | (1 << (ECLParser.U - 66)) | (1 << (ECLParser.V - 66)) | (1 << (ECLParser.W - 66)) | (1 << (ECLParser.X - 66)) | (1 << (ECLParser.Y - 66)) | (1 << (ECLParser.Z - 66)) | (1 << (ECLParser.LEFT_CURLY_BRACE - 66)) | (1 << (ECLParser.PIPE - 66)))) !== 0) || _la === ECLParser.RIGHT_CURLY_BRACE || _la === ECLParser.TILDE)) {
            this._errHandler.recoverInline(this);
          } else {
            if (this._input.LA(1) === Token.EOF) {
              this.matchedEOF = true;
            }

            this._errHandler.reportMatch(this);
            this.consume();
          }
        }
          break;
        case ECLParser.UTF8_LETTER:
          this.enterOuterAlt(_localctx, 4);
        {
          this.state = 2308;
          this.match(ECLParser.UTF8_LETTER);
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
  public alpha(): AlphaContext {
    let _localctx: AlphaContext = new AlphaContext(this._ctx, this.state);
    this.enterRule(_localctx, 320, ECLParser.RULE_alpha);
    let _la: number;
    try {
      this.state = 2313;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case ECLParser.CAP_A:
        case ECLParser.CAP_B:
        case ECLParser.CAP_C:
        case ECLParser.CAP_D:
        case ECLParser.CAP_E:
        case ECLParser.CAP_F:
        case ECLParser.CAP_G:
        case ECLParser.CAP_H:
        case ECLParser.CAP_I:
        case ECLParser.CAP_J:
        case ECLParser.CAP_K:
        case ECLParser.CAP_L:
        case ECLParser.CAP_M:
        case ECLParser.CAP_N:
        case ECLParser.CAP_O:
        case ECLParser.CAP_P:
        case ECLParser.CAP_Q:
        case ECLParser.CAP_R:
        case ECLParser.CAP_S:
        case ECLParser.CAP_T:
        case ECLParser.CAP_U:
        case ECLParser.CAP_V:
        case ECLParser.CAP_W:
        case ECLParser.CAP_X:
        case ECLParser.CAP_Y:
        case ECLParser.CAP_Z:
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 2311;
          _la = this._input.LA(1);
          if (!(((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (ECLParser.CAP_A - 38)) | (1 << (ECLParser.CAP_B - 38)) | (1 << (ECLParser.CAP_C - 38)) | (1 << (ECLParser.CAP_D - 38)) | (1 << (ECLParser.CAP_E - 38)) | (1 << (ECLParser.CAP_F - 38)) | (1 << (ECLParser.CAP_G - 38)) | (1 << (ECLParser.CAP_H - 38)) | (1 << (ECLParser.CAP_I - 38)) | (1 << (ECLParser.CAP_J - 38)) | (1 << (ECLParser.CAP_K - 38)) | (1 << (ECLParser.CAP_L - 38)) | (1 << (ECLParser.CAP_M - 38)) | (1 << (ECLParser.CAP_N - 38)) | (1 << (ECLParser.CAP_O - 38)) | (1 << (ECLParser.CAP_P - 38)) | (1 << (ECLParser.CAP_Q - 38)) | (1 << (ECLParser.CAP_R - 38)) | (1 << (ECLParser.CAP_S - 38)) | (1 << (ECLParser.CAP_T - 38)) | (1 << (ECLParser.CAP_U - 38)) | (1 << (ECLParser.CAP_V - 38)) | (1 << (ECLParser.CAP_W - 38)) | (1 << (ECLParser.CAP_X - 38)) | (1 << (ECLParser.CAP_Y - 38)) | (1 << (ECLParser.CAP_Z - 38)))) !== 0))) {
            this._errHandler.recoverInline(this);
          } else {
            if (this._input.LA(1) === Token.EOF) {
              this.matchedEOF = true;
            }

            this._errHandler.reportMatch(this);
            this.consume();
          }
        }
          break;
        case ECLParser.A:
        case ECLParser.B:
        case ECLParser.C:
        case ECLParser.D:
        case ECLParser.E:
        case ECLParser.F:
        case ECLParser.G:
        case ECLParser.H:
        case ECLParser.I:
        case ECLParser.J:
        case ECLParser.K:
        case ECLParser.L:
        case ECLParser.M:
        case ECLParser.N:
        case ECLParser.O:
        case ECLParser.P:
        case ECLParser.Q:
        case ECLParser.R:
        case ECLParser.S:
        case ECLParser.T:
        case ECLParser.U:
        case ECLParser.V:
        case ECLParser.W:
        case ECLParser.X:
        case ECLParser.Y:
        case ECLParser.Z:
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 2312;
          _la = this._input.LA(1);
          if (!(((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (ECLParser.A - 70)) | (1 << (ECLParser.B - 70)) | (1 << (ECLParser.C - 70)) | (1 << (ECLParser.D - 70)) | (1 << (ECLParser.E - 70)) | (1 << (ECLParser.F - 70)) | (1 << (ECLParser.G - 70)) | (1 << (ECLParser.H - 70)) | (1 << (ECLParser.I - 70)) | (1 << (ECLParser.J - 70)) | (1 << (ECLParser.K - 70)) | (1 << (ECLParser.L - 70)) | (1 << (ECLParser.M - 70)) | (1 << (ECLParser.N - 70)) | (1 << (ECLParser.O - 70)) | (1 << (ECLParser.P - 70)) | (1 << (ECLParser.Q - 70)) | (1 << (ECLParser.R - 70)) | (1 << (ECLParser.S - 70)) | (1 << (ECLParser.T - 70)) | (1 << (ECLParser.U - 70)) | (1 << (ECLParser.V - 70)) | (1 << (ECLParser.W - 70)) | (1 << (ECLParser.X - 70)) | (1 << (ECLParser.Y - 70)) | (1 << (ECLParser.Z - 70)))) !== 0))) {
            this._errHandler.recoverInline(this);
          } else {
            if (this._input.LA(1) === Token.EOF) {
              this.matchedEOF = true;
            }

            this._errHandler.reportMatch(this);
            this.consume();
          }
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
  public dash(): DashContext {
    let _localctx: DashContext = new DashContext(this._ctx, this.state);
    this.enterRule(_localctx, 322, ECLParser.RULE_dash);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 2315;
        this.match(ECLParser.DASH);
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

  private static readonly _serializedATNSegments: number = 5;
  private static readonly _serializedATNSegment0: string =
    "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03e\u0910\x04\x02" +
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
    "X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
    "`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
    "i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04" +
    "r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04" +
    "{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x04\x81\t\x81" +
    "\x04\x82\t\x82\x04\x83\t\x83\x04\x84\t\x84\x04\x85\t\x85\x04\x86\t\x86" +
    "\x04\x87\t\x87\x04\x88\t\x88\x04\x89\t\x89\x04\x8A\t\x8A\x04\x8B\t\x8B" +
    "\x04\x8C\t\x8C\x04\x8D\t\x8D\x04\x8E\t\x8E\x04\x8F\t\x8F\x04\x90\t\x90" +
    "\x04\x91\t\x91\x04\x92\t\x92\x04\x93\t\x93\x04\x94\t\x94\x04\x95\t\x95" +
    "\x04\x96\t\x96\x04\x97\t\x97\x04\x98\t\x98\x04\x99\t\x99\x04\x9A\t\x9A" +
    "\x04\x9B\t\x9B\x04\x9C\t\x9C\x04\x9D\t\x9D\x04\x9E\t\x9E\x04\x9F\t\x9F" +
    "\x04\xA0\t\xA0\x04\xA1\t\xA1\x04\xA2\t\xA2\x04\xA3\t\xA3\x03\x02\x03\x02" +
    "\x03\x02\x03\x02\x03\x02\x05\x02\u014C\n\x02\x03\x02\x03\x02\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x05\x04\u0159" +
    "\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x06\x05\u0161\n" +
    "\x05\r\x05\x0E\x05\u0162\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
    "\x06\x06\u016B\n\x06\r\x06\x0E\x06\u016C\x03\x07\x03\x07\x03\x07\x03\x07" +
    "\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x06\b\u0179\n\b\r\b\x0E\b\u017A" +
    "\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x05\n\u0184\n\n\x03\n\x03\n" +
    "\x03\n\x05\n\u0189\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n" +
    "\u0192\n\n\x03\n\x03\n\x03\n\x07\n\u0197\n\n\f\n\x0E\n\u019A\v\n\x03\n" +
    "\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\u01A3\n\n\x05\n\u01A5\n\n\x03" +
    "\n\x03\n\x03\n\x05\n\u01AA\n\n\x07\n\u01AC\n\n\f\n\x0E\n\u01AF\v\n\x03" +
    "\n\x03\n\x03\n\x05\n\u01B4\n\n\x03\v\x03\v\x05\v\u01B8\n\v\x03\f\x03\f" +
    "\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\u01C2\n\r\x03\r\x03\r\x03\r" +
    "\x05\r\u01C7\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E" +
    "\u01CF\n\x0E\f\x0E\x0E\x0E\u01D2\v\x0E\x03\x0F\x03\x0F\x05\x0F\u01D6\n" +
    "\x0F\x03\x10\x06\x10\u01D9\n\x10\r\x10\x0E\x10\u01DA\x03\x11\x03\x11\x03" +
    "\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u01E7" +
    "\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x06\x13\u01EF\n" +
    "\x13\r\x13\x0E\x13\u01F0\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15" +
    "\x06\x15\u01F9\n\x15\r\x15\x0E\x15\u01FA\x03\x15\x06\x15\u01FE\n\x15\r" +
    "\x15\x0E\x15\u01FF\x03\x15\x06\x15\u0203\n\x15\r\x15\x0E\x15\u0204\x07" +
    "\x15\u0207\n\x15\f\x15\x0E\x15\u020A\v\x15\x03\x16\x03\x16\x03\x17\x03" +
    "\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u0216\n\x17" +
    "\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1B" +
    "\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1E" +
    "\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x05 \u0232" +
    "\n \x03 \x03 \x05 \u0236\n \x03 \x03 \x05 \u023A\n \x03 \x03 \x05 \u023E" +
    "\n \x03!\x03!\x05!\u0242\n!\x03!\x03!\x05!\u0246\n!\x03!\x03!\x03\"\x03" +
    "\"\x05\"\u024C\n\"\x03\"\x03\"\x05\"\u0250\n\"\x03\"\x03\"\x05\"\u0254" +
    "\n\"\x03\"\x03\"\x05\"\u0258\n\"\x03\"\x03\"\x05\"\u025C\n\"\x03\"\x03" +
    "\"\x03#\x03#\x03#\x03#\x05#\u0264\n#\x03$\x03$\x03$\x03$\x03$\x06$\u026B" +
    "\n$\r$\x0E$\u026C\x03%\x03%\x03%\x03%\x03%\x06%\u0274\n%\r%\x0E%\u0275" +
    "\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x05&\u0280\n&\x03\'\x03\'\x03" +
    "\'\x03\'\x05\'\u0286\n\'\x03(\x03(\x03(\x03(\x03(\x06(\u028D\n(\r(\x0E" +
    "(\u028E\x03)\x03)\x03)\x03)\x03)\x06)\u0296\n)\r)\x0E)\u0297\x03*\x03" +
    "*\x03*\x03*\x03*\x03*\x03*\x05*\u02A1\n*\x03+\x03+\x03+\x03+\x03+\x05" +
    "+\u02A8\n+\x03+\x03+\x03+\x03+\x03+\x03+\x03,\x03,\x03,\x03,\x03,\x05" +
    ",\u02B5\n,\x03,\x03,\x03,\x05,\u02BA\n,\x03,\x03,\x03,\x03,\x03,\x03," +
    "\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x05,\u02CB\n,\x03,\x03," +
    "\x03,\x03,\x05,\u02D1\n,\x03-\x03-\x03-\x03-\x03.\x03.\x03/\x03/\x03/" +
    "\x030\x030\x050\u02DE\n0\x031\x031\x032\x032\x033\x033\x034\x034\x034" +
    "\x054\u02E9\n4\x035\x035\x035\x035\x035\x035\x035\x035\x035\x055\u02F4" +
    "\n5\x036\x036\x036\x036\x036\x036\x036\x036\x036\x056\u02FF\n6\x037\x03" +
    "7\x037\x057\u0304\n7\x038\x038\x038\x058\u0309\n8\x039\x039\x039\x039" +
    "\x039\x039\x059\u0311\n9\x039\x039\x039\x039\x039\x039\x039\x079\u031A" +
    "\n9\f9\x0E9\u031D\v9\x039\x039\x039\x039\x03:\x03:\x03:\x03:\x03:\x03" +
    ":\x03:\x05:\u032A\n:\x03;\x03;\x03;\x03;\x03;\x03;\x05;\u0332\n;\x03<" +
    "\x03<\x05<\u0336\n<\x03<\x03<\x05<\u033A\n<\x03<\x03<\x05<\u033E\n<\x03" +
    "<\x03<\x05<\u0342\n<\x03=\x03=\x03=\x03=\x03=\x05=\u0349\n=\x03=\x03=" +
    "\x03=\x03=\x03=\x03=\x03=\x05=\u0352\n=\x03>\x03>\x03>\x03>\x03>\x03>" +
    "\x07>\u035A\n>\f>\x0E>\u035D\v>\x03>\x03>\x03>\x03?\x03?\x05?\u0364\n" +
    "?\x03?\x03?\x05?\u0368\n?\x03?\x03?\x05?\u036C\n?\x03?\x03?\x05?\u0370" +
    "\n?\x03@\x03@\x05@\u0374\n@\x03@\x03@\x05@\u0378\n@\x03@\x03@\x05@\u037C" +
    "\n@\x03@\x03@\x05@\u0380\n@\x03@\x03@\x05@\u0384\n@\x03A\x03A\x06A\u0388" +
    "\nA\rA\x0EA\u0389\x03B\x03B\x03B\x03B\x03B\x03B\x07B\u0392\nB\fB\x0EB" +
    "\u0395\vB\x03B\x03B\x03B\x03C\x03C\x06C\u039C\nC\rC\x0EC\u039D\x03D\x03" +
    "D\x03D\x03D\x03E\x03E\x03E\x03E\x03E\x03E\x05E\u03AA\nE\x03F\x03F\x05" +
    "F\u03AE\nF\x03F\x03F\x05F\u03B2\nF\x03F\x03F\x05F\u03B6\nF\x03F\x03F\x05" +
    "F\u03BA\nF\x03F\x03F\x05F\u03BE\nF\x03F\x03F\x05F\u03C2\nF\x03F\x03F\x05" +
    "F\u03C6\nF\x03F\x03F\x05F\u03CA\nF\x03G\x03G\x03G\x03H\x03H\x03H\x03H" +
    "\x03H\x03H\x07H\u03D5\nH\fH\x0EH\u03D8\vH\x03H\x03H\x03H\x03I\x03I\x05" +
    "I\u03DF\nI\x03J\x03J\x03J\x03J\x03J\x03J\x05J\u03E7\nJ\x03K\x03K\x05K" +
    "\u03EB\nK\x03K\x03K\x05K\u03EF\nK\x03K\x03K\x05K\u03F3\nK\x03K\x03K\x05" +
    "K\u03F7\nK\x03K\x03K\x05K\u03FB\nK\x03K\x03K\x05K\u03FF\nK\x03L\x03L\x03" +
    "L\x03L\x03L\x03L\x05L\u0407\nL\x03M\x03M\x05M\u040B\nM\x03M\x03M\x05M" +
    "\u040F\nM\x03M\x03M\x05M\u0413\nM\x03M\x03M\x05M\u0417\nM\x03N\x03N\x03" +
    "N\x05N\u041C\nN\x03O\x03O\x03O\x03O\x03O\x03O\x07O\u0424\nO\fO\x0EO\u0427" +
    "\vO\x03O\x03O\x03O\x03P\x03P\x05P\u042E\nP\x03P\x03P\x05P\u0432\nP\x03" +
    "P\x03P\x05P\u0436\nP\x03Q\x03Q\x05Q\u043A\nQ\x03Q\x03Q\x05Q\u043E\nQ\x03" +
    "Q\x03Q\x05Q\u0442\nQ\x03R\x03R\x05R\u0446\nR\x03R\x03R\x05R\u044A\nR\x03" +
    "R\x03R\x05R\u044E\nR\x03S\x03S\x05S\u0452\nS\x03S\x03S\x03S\x05S\u0457" +
    "\nS\x03T\x03T\x03T\x03T\x03T\x03T\x05T\u045F\nT\x03U\x03U\x05U\u0463\n" +
    "U\x03U\x03U\x05U\u0467\nU\x03U\x03U\x05U\u046B\nU\x03U\x03U\x05U\u046F" +
    "\nU\x03U\x03U\x05U\u0473\nU\x03U\x03U\x05U\u0477\nU\x03U\x03U\x05U\u047B" +
    "\nU\x03U\x03U\x05U\u047F\nU\x03U\x03U\x05U\u0483\nU\x03V\x03V\x03V\x03" +
    "V\x03V\x03V\x05V\u048B\nV\x03W\x03W\x05W\u048F\nW\x03W\x03W\x05W\u0493" +
    "\nW\x03W\x03W\x05W\u0497\nW\x03W\x03W\x05W\u049B\nW\x03W\x03W\x05W\u049F" +
    "\nW\x03W\x03W\x05W\u04A3\nW\x03W\x03W\x05W\u04A7\nW\x03X\x03X\x03X\x03" +
    "X\x07X\u04AD\nX\fX\x0EX\u04B0\vX\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x05Y\u04B8" +
    "\nY\x03Y\x03Y\x03Y\x03Y\x03Y\x05Y\u04BF\nY\x07Y\u04C1\nY\fY\x0EY\u04C4" +
    "\vY\x03Y\x03Y\x03Y\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x05Z\u04CF\nZ\x03Z\x03" +
    "Z\x03Z\x03Z\x03Z\x05Z\u04D6\nZ\x07Z\u04D8\nZ\fZ\x0EZ\u04DB\vZ\x03Z\x03" +
    "Z\x03Z\x03[\x03[\x05[\u04E2\n[\x03\\\x03\\\x03\\\x03\\\x03\\\x03\\\x07" +
    "\\\u04EA\n\\\f\\\x0E\\\u04ED\v\\\x03\\\x03\\\x03\\\x03]\x03]\x03]\x03" +
    "]\x03]\x03]\x07]\u04F8\n]\f]\x0E]\u04FB\v]\x03]\x03]\x03]\x03^\x03^\x05" +
    "^\u0502\n^\x03_\x03_\x05_\u0506\n_\x03_\x03_\x05_\u050A\n_\x03_\x03_\x05" +
    "_\u050E\n_\x03_\x03_\x05_\u0512\n_\x03_\x03_\x05_\u0516\n_\x03_\x03_\x05" +
    "_\u051A\n_\x03`\x03`\x05`\u051E\n`\x03`\x03`\x05`\u0522\n`\x03`\x03`\x05" +
    "`\u0526\n`\x03`\x03`\x05`\u052A\n`\x03`\x03`\x05`\u052E\n`\x03`\x03`\x05" +
    "`\u0532\n`\x03a\x03a\x03a\x03a\x03a\x03a\x05a\u053A\na\x03a\x03a\x03a" +
    "\x03a\x03a\x03a\x03a\x07a\u0543\na\fa\x0Ea\u0546\va\x03a\x03a\x03a\x03" +
    "a\x03b\x03b\x03b\x03b\x05b\u0550\nb\x03c\x03c\x05c\u0554\nc\x03d\x03d" +
    "\x03d\x03d\x03d\x03d\x05d\u055C\nd\x03e\x03e\x05e\u0560\ne\x03e\x03e\x05" +
    "e\u0564\ne\x03e\x03e\x05e\u0568\ne\x03e\x03e\x05e\u056C\ne\x03e\x03e\x05" +
    "e\u0570\ne\x03e\x03e\x05e\u0574\ne\x03e\x03e\x05e\u0578\ne\x03e\x03e\x05" +
    "e\u057C\ne\x03e\x03e\x05e\u0580\ne\x03e\x03e\x05e\u0584\ne\x03e\x03e\x05" +
    "e\u0588\ne\x03e\x03e\x05e\u058C\ne\x03e\x03e\x05e\u0590\ne\x03e\x03e\x05" +
    "e\u0594\ne\x03e\x03e\x05e\u0598\ne\x03e\x03e\x05e\u059C\ne\x03e\x03e\x05" +
    "e\u05A0\ne\x03e\x03e\x05e\u05A4\ne\x03f\x03f\x03f\x03f\x03f\x03f\x05f" +
    "\u05AC\nf\x03g\x03g\x05g\u05B0\ng\x03g\x03g\x05g\u05B4\ng\x03g\x03g\x05" +
    "g\u05B8\ng\x03g\x03g\x05g\u05BC\ng\x03g\x03g\x05g\u05C0\ng\x03g\x03g\x05" +
    "g\u05C4\ng\x03g\x03g\x05g\u05C8\ng\x03g\x03g\x05g\u05CC\ng\x03g\x03g\x05" +
    "g\u05D0\ng\x03g\x03g\x05g\u05D4\ng\x03g\x03g\x05g\u05D8\ng\x03g\x03g\x05" +
    "g\u05DC\ng\x03g\x03g\x05g\u05E0\ng\x03g\x03g\x05g\u05E4\ng\x03g\x03g\x05" +
    "g\u05E8\ng\x03g\x03g\x05g\u05EC\ng\x03h\x03h\x05h\u05F0\nh\x03i\x03i\x03" +
    "i\x03i\x03i\x03i\x07i\u05F8\ni\fi\x0Ei\u05FB\vi\x03i\x03i\x03i\x03j\x03" +
    "j\x05j\u0602\nj\x03j\x03j\x05j\u0606\nj\x03j\x03j\x05j\u060A\nj\x03j\x03" +
    "j\x05j\u060E\nj\x03j\x03j\x05j\u0612\nj\x03j\x03j\x05j\u0616\nj\x03j\x03" +
    "j\x05j\u061A\nj\x03j\x03j\x05j\u061E\nj\x03j\x03j\x05j\u0622\nj\x03k\x03" +
    "k\x05k\u0626\nk\x03k\x03k\x05k\u062A\nk\x03k\x03k\x05k\u062E\nk\x03k\x03" +
    "k\x05k\u0632\nk\x03k\x03k\x05k\u0636\nk\x03k\x03k\x05k\u063A\nk\x03k\x03" +
    "k\x05k\u063E\nk\x03l\x03l\x03l\x03l\x03l\x03l\x05l\u0646\nl\x03m\x03m" +
    "\x05m\u064A\nm\x03m\x03m\x05m\u064E\nm\x03m\x03m\x05m\u0652\nm\x03m\x03" +
    "m\x05m\u0656\nm\x03m\x03m\x05m\u065A\nm\x03m\x03m\x05m\u065E\nm\x03m\x03" +
    "m\x05m\u0662\nm\x03m\x03m\x05m\u0666\nm\x03n\x03n\x03n\x03n\x03n\x03n" +
    "\x05n\u066E\nn\x03o\x03o\x05o\u0672\no\x03o\x03o\x05o\u0676\no\x03o\x03" +
    "o\x05o\u067A\no\x03o\x03o\x05o\u067E\no\x03o\x03o\x05o\u0682\no\x03o\x03" +
    "o\x05o\u0686\no\x03o\x03o\x05o\u068A\no\x03o\x03o\x05o\u068E\no\x03o\x03" +
    "o\x05o\u0692\no\x03o\x03o\x05o\u0696\no\x03o\x03o\x05o\u069A\no\x03o\x03" +
    "o\x05o\u069E\no\x03o\x03o\x05o\u06A2\no\x03p\x03p\x03p\x03p\x03p\x05p" +
    "\u06A9\np\x03p\x03p\x03q\x03q\x03q\x03q\x03q\x03q\x07q\u06B3\nq\fq\x0E" +
    "q\u06B6\vq\x03q\x03q\x03q\x03r\x03r\x03r\x03r\x03r\x03s\x03s\x03s\x03" +
    "s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03" +
    "s\x03s\x03s\x03s\x03s\x03s\x03s\x05s\u06D8\ns\x03t\x03t\x03t\x03t\x03" +
    "t\x03t\x03t\x03t\x03t\x03t\x03t\x03t\x03t\x03t\x03t\x03t\x03t\x03t\x03" +
    "t\x03t\x03t\x03t\x03t\x03t\x03t\x03t\x03t\x03t\x03t\x03t\x03t\x03t\x03" +
    "t\x03t\x03t\x03t\x03t\x03t\x03t\x03t\x03t\x03t\x03t\x03t\x03t\x03t\x03" +
    "t\x03t\x03t\x03t\x03t\x03t\x03t\x03t\x03t\x03t\x03t\x03t\x03t\x03t\x03" +
    "t\x03t\x05t\u0718\nt\x03u\x03u\x03u\x03u\x03u\x03u\x03v\x03v\x05v\u0722" +
    "\nv\x03v\x03v\x05v\u0726\nv\x03v\x03v\x05v\u072A\nv\x03v\x03v\x05v\u072E" +
    "\nv\x03v\x03v\x05v\u0732\nv\x03v\x03v\x05v\u0736\nv\x03w\x03w\x05w\u073A" +
    "\nw\x03x\x03x\x03x\x03x\x03x\x05x\u0741\nx\x03y\x03y\x03y\x03y\x03y\x03" +
    "y\x05y\u0749\ny\x03z\x03z\x03z\x03z\x03z\x03z\x05z\u0751\nz\x03z\x03z" +
    "\x03z\x03z\x03z\x03z\x03z\x07z\u075A\nz\fz\x0Ez\u075D\vz\x03z\x03z\x03" +
    "z\x03z\x03{\x03{\x03{\x03{\x05{\u0767\n{\x03|\x03|\x03|\x03|\x03|\x03" +
    "|\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x05|\u0778\n|\x03|\x03" +
    "|\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x05|\u0783\n|\x05|\u0785\n|\x03}" +
    "\x03}\x03}\x03}\x03}\x03}\x03}\x03}\x03}\x03}\x03}\x05}\u0792\n}\x03}" +
    "\x03}\x03}\x03}\x03~\x03~\x05~\u079A\n~\x03~\x03~\x05~\u079E\n~\x03~\x03" +
    "~\x05~\u07A2\n~\x03~\x03~\x05~\u07A6\n~\x03~\x03~\x05~\u07AA\n~\x03~\x03" +
    "~\x05~\u07AE\n~\x03~\x03~\x05~\u07B2\n~\x03\x7F\x03\x7F\x03\x7F\x05\x7F" +
    "\u07B7\n\x7F\x03\x80\x03\x80\x03\x80\x05\x80\u07BC\n\x80\x03\x80\x03\x80" +
    "\x05\x80\u07C0\n\x80\x03\x80\x03\x80\x05\x80\u07C4\n\x80\x03\x81\x03\x81" +
    "\x03\x81\x05\x81\u07C9\n\x81\x03\x81\x03\x81\x05\x81\u07CD\n\x81\x03\x81" +
    "\x03\x81\x05\x81\u07D1\n\x81\x03\x82\x03\x82\x03\x82\x05\x82\u07D6\n\x82" +
    "\x03\x82\x03\x82\x05\x82\u07DA\n\x82\x03\x82\x03\x82\x05\x82\u07DE\n\x82" +
    "\x03\x83\x03\x83\x03\x83\x03\x83\x03\x83\x03\x83\x03\x84\x05\x84\u07E7" +
    "\n\x84\x03\x84\x03\x84\x05\x84\u07EB\n\x84\x03\x85\x03\x85\x06\x85\u07EF" +
    "\n\x85\r\x85\x0E\x85\u07F0\x03\x86\x03\x86\x07\x86\u07F5\n\x86\f\x86\x0E" +
    "\x86\u07F8\v\x86\x03\x86\x05\x86\u07FB\n\x86\x03\x87\x03\x87\x03\x87\x06" +
    "\x87\u0800\n\x87\r\x87\x0E\x87\u0801\x03\x88\x03\x88\x05\x88\u0806\n\x88" +
    "\x03\x89\x03\x89\x05\x89\u080A\n\x89\x03\x89\x03\x89\x05\x89\u080E\n\x89" +
    "\x03\x89\x03\x89\x05\x89\u0812\n\x89\x03\x89\x03\x89\x05\x89\u0816\n\x89" +
    "\x03\x8A\x03\x8A\x05\x8A\u081A\n\x8A\x03\x8A\x03\x8A\x05\x8A\u081E\n\x8A" +
    "\x03\x8A\x03\x8A\x05\x8A\u0822\n\x8A\x03\x8A\x03\x8A\x05\x8A\u0826\n\x8A" +
    "\x03\x8A\x03\x8A\x05\x8A\u082A\n\x8A\x03\x8B\x03\x8B\x07\x8B\u082E\n\x8B" +
    "\f\x8B\x0E\x8B\u0831\v\x8B\x03\x8B\x05\x8B\u0834\n\x8B\x03\x8C\x03\x8C" +
    "\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C" +
    "\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C" +
    "\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C" +
    "\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C" +
    "\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C" +
    "\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C" +
    "\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C" +
    "\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C" +
    "\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C" +
    "\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C" +
    "\x03\x8C\x03\x8C\x03\x8C\x05\x8C\u0895\n\x8C\x05\x8C\u0897\n\x8C\x03\x8D" +
    "\x03\x8D\x03\x8D\x03\x8D\x03\x8D\x07\x8D\u089E\n\x8D\f\x8D\x0E\x8D\u08A1" +
    "\v\x8D\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x06\x8E\u08A8\n\x8E\r\x8E" +
    "\x0E\x8E\u08A9\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x07\x8F\u08B1\n" +
    "\x8F\f\x8F\x0E\x8F\u08B4\v\x8F\x03\x8F\x03\x8F\x03\x8F\x03\x90\x03\x90" +
    "\x03\x90\x03\x90\x03\x90\x03\x90\x03\x90\x05\x90\u08C0\n\x90\x03\x91\x03" +
    "\x91\x03\x91\x03\x92\x03\x92\x03\x92\x03\x92\x03\x92\x03\x92\x03\x92\x05" +
    "\x92\u08CC\n\x92\x03\x93\x03\x93\x03\x94\x03\x94\x03\x95\x03\x95\x03\x96" +
    "\x03\x96\x03\x97\x03\x97\x03\x98\x03\x98\x03\x99\x03\x99\x03\x9A\x03\x9A" +
    "\x03\x9B\x03\x9B\x03\x9C\x03\x9C\x03\x9D\x03\x9D\x03\x9D\x05\x9D\u08E5" +
    "\n\x9D\x03\x9E\x03\x9E\x03\x9E\x03\x9E\x03\x9E\x03\x9E\x03\x9E\x03\x9E" +
    "\x05\x9E\u08EF\n\x9E\x03\x9F\x03\x9F\x03\x9F\x03\x9F\x03\x9F\x03\x9F\x05" +
    "\x9F\u08F7\n\x9F\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0" +
    "\x03\xA0\x03\xA0\x05\xA0\u0902\n\xA0\x03\xA1\x03\xA1\x03\xA1\x03\xA1\x05" +
    "\xA1\u0908\n\xA1\x03\xA2\x03\xA2\x05\xA2\u090C\n\xA2\x03\xA3\x03\xA3\x03" +
    "\xA3\x02\x02\x02\xA4\x02\x02\x04";
  private static readonly _serializedATNSegment1: string =
    "\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02" +
    "\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02." +
    "\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02" +
    "J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02" +
    "f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80" +
    "\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92" +
    "\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4" +
    "\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6" +
    "\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8" +
    "\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4\x02\xD6\x02\xD8\x02\xDA" +
    "\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02\xE4\x02\xE6\x02\xE8\x02\xEA\x02\xEC" +
    "\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02\xF6\x02\xF8\x02\xFA\x02\xFC\x02\xFE" +
    "\x02\u0100\x02\u0102\x02\u0104\x02\u0106\x02\u0108\x02\u010A\x02\u010C" +
    "\x02\u010E\x02\u0110\x02\u0112\x02\u0114\x02\u0116\x02\u0118\x02\u011A" +
    "\x02\u011C\x02\u011E\x02\u0120\x02\u0122\x02\u0124\x02\u0126\x02\u0128" +
    "\x02\u012A\x02\u012C\x02\u012E\x02\u0130\x02\u0132\x02\u0134\x02\u0136" +
    "\x02\u0138\x02\u013A\x02\u013C\x02\u013E\x02\u0140\x02\u0142\x02\u0144" +
    "\x02\x02&\x04\x02((HH\x04\x0255UU\x04\x02++KK\x04\x0266VV\x04\x0299YY" +
    "\x04\x0244TT\x04\x0200PP\x04\x02<<\\\\\x04\x02::ZZ\x04\x02;;[[\x04\x02" +
    ",,LL\x04\x02>>^^\x04\x0233SS\x04\x02**JJ\x04\x02//OO\x04\x02..NN\x04\x02" +
    "@@``\x04\x0277WW\x04\x02--MM\x04\x02==]]\x04\x02\x14\x14FF\x04\x02??_" +
    "_\x04\x02\x12\x12\x14\x14\x03\x02\b\x10\x03\x02\x12e\x03\x02\b\x15\x03" +
    "\x02\x17e\x03\x02\x17 \x03\x02\x18 \x03\x02\bb\x03\x02de\x03\x02\x07\b" +
    "\x03\x02\nB\x03\x02De\x03\x02(A\x03\x02Ha\x02\u0A18\x02\u0146\x03\x02" +
    "\x02\x02\x04\u014F\x03\x02\x02\x02\x06\u0158\x03\x02\x02\x02\b\u015A\x03" +
    "\x02\x02\x02\n\u0164\x03\x02\x02\x02\f\u016E\x03\x02\x02\x02\x0E\u0174" +
    "\x03\x02\x02\x02\x10\u017C\x03\x02\x02\x02\x12\u0183\x03\x02\x02\x02\x14" +
    "\u01B7\x03\x02\x02\x02\x16\u01B9\x03\x02\x02\x02\x18\u01BB\x03\x02\x02" +
    "\x02\x1A\u01C8\x03\x02\x02\x02\x1C\u01D5\x03\x02\x02\x02\x1E\u01D8\x03" +
    "\x02\x02\x02 \u01DC\x03\x02\x02\x02\"\u01DE\x03\x02\x02\x02$\u01E8\x03" +
    "\x02\x02\x02&\u01F5\x03\x02\x02\x02(\u01F8\x03\x02\x02\x02*\u020B\x03" +
    "\x02\x02\x02,\u0215\x03\x02\x02\x02.\u0217\x03\x02\x02\x020\u0219\x03" +
    "\x02\x02\x022\u021C\x03\x02\x02\x024\u021F\x03\x02\x02\x026\u0223\x03" +
    "\x02\x02\x028\u0225\x03\x02\x02\x02:\u0228\x03\x02\x02\x02<\u022B\x03" +
    "\x02\x02\x02>\u023D\x03\x02\x02\x02@\u0241\x03\x02\x02\x02B\u024B\x03" +
    "\x02\x02\x02D\u025F\x03\x02\x02\x02F\u026A\x03\x02\x02\x02H\u0273\x03" +
    "\x02\x02\x02J\u027F\x03\x02\x02\x02L\u0281\x03\x02\x02\x02N\u028C\x03" +
    "\x02\x02\x02P\u0295\x03\x02\x02\x02R\u02A0\x03\x02\x02\x02T\u02A7\x03" +
    "\x02\x02\x02V\u02B4\x03\x02\x02\x02X\u02D2\x03\x02\x02\x02Z\u02D6\x03" +
    "\x02\x02\x02\\\u02D8\x03\x02\x02\x02^\u02DD\x03\x02\x02\x02`\u02DF\x03" +
    "\x02\x02\x02b\u02E1\x03\x02\x02\x02d\u02E3\x03\x02\x02\x02f\u02E8\x03" +
    "\x02\x02\x02h\u02F3\x03\x02\x02\x02j\u02FE\x03\x02\x02\x02l\u0303\x03" +
    "\x02\x02\x02n\u0308\x03\x02\x02\x02p\u030A\x03\x02\x02\x02r\u0329\x03" +
    "\x02\x02\x02t\u032B\x03\x02\x02\x02v\u0335\x03\x02\x02\x02x\u0351\x03" +
    "\x02\x02\x02z\u0353\x03\x02\x02\x02|\u0363\x03\x02\x02\x02~\u0373\x03" +
    "\x02\x02\x02\x80\u0387\x03\x02\x02\x02\x82\u038B\x03\x02\x02\x02\x84\u039B" +
    "\x03\x02\x02\x02\x86\u039F\x03\x02\x02\x02\x88\u03A3\x03\x02\x02\x02\x8A" +
    "\u03AD\x03\x02\x02\x02\x8C\u03CB\x03\x02\x02\x02\x8E\u03CE\x03\x02\x02" +
    "\x02\x90\u03DE\x03\x02\x02\x02\x92\u03E0\x03\x02\x02\x02\x94\u03EA\x03" +
    "\x02\x02\x02\x96\u0400\x03\x02\x02\x02\x98\u040A\x03\x02\x02\x02\x9A\u041B" +
    "\x03\x02\x02\x02\x9C\u041D\x03\x02\x02\x02\x9E\u042D\x03\x02\x02\x02\xA0" +
    "\u0439\x03\x02\x02\x02\xA2\u0445\x03\x02\x02\x02\xA4\u0451\x03\x02\x02" +
    "\x02\xA6\u0458\x03\x02\x02\x02\xA8\u0462\x03\x02\x02\x02\xAA\u0484\x03" +
    "\x02\x02\x02\xAC\u048E\x03\x02\x02\x02\xAE\u04A8\x03\x02\x02\x02\xB0\u04B1" +
    "\x03\x02\x02\x02\xB2\u04C8\x03\x02\x02\x02\xB4\u04E1\x03\x02\x02\x02\xB6" +
    "\u04E3\x03\x02\x02\x02\xB8\u04F1\x03\x02\x02\x02\xBA\u0501\x03\x02\x02" +
    "\x02\xBC\u0505\x03\x02\x02\x02\xBE\u051D\x03\x02\x02\x02\xC0\u0533\x03" +
    "\x02\x02\x02\xC2\u054F\x03\x02\x02\x02\xC4\u0553\x03\x02\x02\x02\xC6\u0555" +
    "\x03\x02\x02\x02\xC8\u055F\x03\x02\x02\x02\xCA\u05A5\x03\x02\x02\x02\xCC" +
    "\u05AF\x03\x02\x02\x02\xCE\u05EF\x03\x02\x02\x02\xD0\u05F1\x03\x02\x02" +
    "\x02\xD2\u0601\x03\x02\x02\x02\xD4\u0625\x03\x02\x02\x02\xD6\u063F\x03" +
    "\x02\x02\x02\xD8\u0649\x03\x02\x02\x02\xDA\u0667\x03\x02\x02\x02\xDC\u0671" +
    "\x03\x02\x02\x02\xDE\u06A3\x03\x02\x02\x02\xE0\u06AC\x03\x02\x02\x02\xE2" +
    "\u06BA\x03\x02\x02\x02\xE4\u06D7\x03\x02\x02\x02\xE6\u0717\x03\x02\x02" +
    "\x02\xE8\u0719\x03\x02\x02\x02\xEA\u0721\x03\x02\x02\x02\xEC\u0739\x03" +
    "\x02\x02\x02\xEE\u0740\x03\x02\x02\x02\xF0\u0748\x03\x02\x02\x02\xF2\u074A" +
    "\x03\x02\x02\x02\xF4\u0766\x03\x02\x02\x02\xF6\u0768\x03\x02\x02\x02\xF8" +
    "\u0786\x03\x02\x02\x02\xFA\u0799\x03\x02\x02\x02\xFC\u07B6\x03\x02\x02" +
    "\x02\xFE\u07B8\x03\x02\x02\x02\u0100\u07C5\x03\x02\x02\x02\u0102\u07D2" +
    "\x03\x02\x02\x02\u0104\u07DF\x03\x02\x02\x02\u0106\u07E6\x03\x02\x02\x02" +
    "\u0108\u07EE\x03\x02\x02\x02\u010A\u07FA\x03\x02\x02\x02\u010C\u07FC\x03" +
    "\x02\x02\x02\u010E\u0805\x03\x02\x02\x02\u0110\u0809\x03\x02\x02\x02\u0112" +
    "\u0819\x03\x02\x02\x02\u0114\u0833\x03\x02\x02\x02\u0116\u0835\x03\x02" +
    "\x02\x02\u0118\u089F\x03\x02\x02\x02\u011A\u08A7\x03\x02\x02\x02\u011C" +
    "\u08AB\x03\x02\x02\x02\u011E\u08BF\x03\x02\x02\x02\u0120\u08C1\x03\x02" +
    "\x02\x02\u0122\u08CB\x03\x02\x02\x02\u0124\u08CD\x03\x02\x02\x02\u0126" +
    "\u08CF\x03\x02\x02\x02\u0128\u08D1\x03\x02\x02\x02\u012A\u08D3\x03\x02" +
    "\x02\x02\u012C\u08D5\x03\x02\x02\x02\u012E\u08D7\x03\x02\x02\x02\u0130" +
    "\u08D9\x03\x02\x02\x02\u0132\u08DB\x03\x02\x02\x02\u0134\u08DD\x03\x02" +
    "\x02\x02\u0136\u08DF\x03\x02\x02\x02\u0138\u08E4\x03\x02\x02\x02\u013A" +
    "\u08EE\x03\x02\x02\x02\u013C\u08F6\x03\x02\x02\x02\u013E\u0901\x03\x02" +
    "\x02\x02\u0140\u0907\x03\x02\x02\x02\u0142\u090B\x03\x02\x02\x02\u0144" +
    "\u090D\x03\x02\x02\x02\u0146\u014B\x05\u0118\x8D\x02\u0147\u014C\x05\x04" +
    "\x03\x02\u0148\u014C\x05\x06\x04\x02\u0149\u014C\x05\x0E\b\x02\u014A\u014C" +
    "\x05\x12\n\x02\u014B\u0147\x03\x02\x02\x02\u014B\u0148\x03\x02\x02\x02" +
    "\u014B\u0149\x03\x02\x02\x02\u014B\u014A\x03\x02\x02\x02\u014C\u014D\x03" +
    "\x02\x02\x02\u014D\u014E\x05\u0118\x8D\x02\u014E\x03\x03\x02\x02\x02\u014F" +
    "\u0150\x05\x12\n\x02\u0150\u0151\x05\u0118\x8D\x02\u0151\u0152\x07!\x02" +
    "\x02\u0152\u0153\x05\u0118\x8D\x02\u0153\u0154\x05D#\x02\u0154\x05\x03" +
    "\x02\x02\x02\u0155\u0159\x05\b\x05\x02\u0156\u0159\x05\n\x06\x02\u0157" +
    "\u0159\x05\f\x07\x02\u0158\u0155\x03\x02\x02\x02\u0158\u0156\x03\x02\x02" +
    "\x02\u0158\u0157\x03\x02\x02\x02\u0159\x07\x03\x02\x02\x02\u015A\u0160" +
    "\x05\x12\n\x02\u015B\u015C\x05\u0118\x8D\x02\u015C\u015D\x05> \x02\u015D" +
    "\u015E\x05\u0118\x8D\x02\u015E\u015F\x05\x12\n\x02\u015F\u0161\x03\x02" +
    "\x02\x02\u0160\u015B\x03\x02\x02\x02\u0161\u0162\x03\x02\x02\x02\u0162" +
    "\u0160\x03\x02\x02\x02\u0162\u0163\x03\x02\x02\x02\u0163\t\x03\x02\x02" +
    "\x02\u0164\u016A\x05\x12\n\x02\u0165\u0166\x05\u0118\x8D\x02\u0166\u0167" +
    "\x05@!\x02\u0167\u0168\x05\u0118\x8D\x02\u0168\u0169\x05\x12\n\x02\u0169" +
    "\u016B\x03\x02\x02\x02\u016A\u0165\x03\x02\x02\x02\u016B\u016C\x03\x02" +
    "\x02\x02\u016C\u016A\x03\x02\x02\x02\u016C\u016D\x03\x02\x02\x02\u016D" +
    "\v\x03\x02\x02\x02\u016E\u016F\x05\x12\n\x02\u016F\u0170\x05\u0118\x8D" +
    "\x02\u0170\u0171\x05B\"\x02\u0171\u0172\x05\u0118\x8D\x02\u0172\u0173" +
    "\x05\x12\n\x02\u0173\r\x03\x02\x02\x02\u0174\u0178\x05\x12\n\x02\u0175" +
    "\u0176\x05\u0118\x8D\x02\u0176\u0177\x05\x10\t\x02\u0177\u0179\x03\x02" +
    "\x02\x02\u0178\u0175\x03\x02\x02\x02\u0179\u017A\x03\x02\x02\x02\u017A" +
    "\u0178\x03\x02\x02\x02\u017A\u017B\x03\x02\x02\x02\u017B\x0F\x03\x02\x02" +
    "\x02\u017C\u017D\x05\x16\f\x02\u017D\u017E\x05\u0118\x8D\x02\u017E\u017F" +
    "\x05d3\x02\u017F\x11\x03\x02\x02\x02\u0180\u0181\x05,\x17\x02\u0181\u0182" +
    "\x05\u0118\x8D\x02\u0182\u0184\x03\x02\x02\x02\u0183\u0180\x03\x02\x02" +
    "\x02\u0183\u0184\x03\x02\x02\x02\u0184\u01A4\x03\x02\x02\x02\u0185\u0186" +
    "\x05\x18\r\x02\u0186\u0187\x05\u0118\x8D\x02\u0187\u0189\x03\x02\x02\x02" +
    "\u0188\u0185\x03\x02\x02\x02\u0188\u0189\x03\x02\x02\x02\u0189\u0191\x03" +
    "\x02\x02\x02\u018A\u0192\x05\x14\v\x02\u018B\u018C\x07\x0F\x02\x02\u018C" +
    "\u018D\x05\u0118\x8D\x02\u018D\u018E\x05\x02\x02\x02\u018E\u018F\x05\u0118" +
    "\x8D\x02\u018F\u0190\x07\x10\x02\x02\u0190\u0192\x03\x02\x02\x02\u0191" +
    "\u018A\x03\x02\x02\x02\u0191\u018B\x03\x02\x02\x02\u0192\u0198\x03\x02" +
    "\x02\x02\u0193\u0194\x05\u0118\x8D\x02\u0194\u0195\x05\xF2z\x02\u0195" +
    "\u0197\x03\x02\x02\x02\u0196\u0193\x03\x02\x02\x02\u0197\u019A\x03\x02" +
    "\x02\x02\u0198\u0196\x03\x02\x02\x02\u0198\u0199\x03\x02\x02\x02\u0199" +
    "\u01A5\x03\x02\x02\x02\u019A\u0198\x03\x02\x02\x02\u019B\u01A3\x05\x14" +
    "\v\x02\u019C\u019D\x07\x0F\x02\x02\u019D\u019E\x05\u0118\x8D\x02\u019E" +
    "\u019F\x05\x02\x02\x02\u019F\u01A0\x05\u0118\x8D\x02\u01A0\u01A1\x07\x10" +
    "\x02\x02\u01A1\u01A3\x03\x02\x02\x02\u01A2\u019B\x03\x02\x02\x02\u01A2" +
    "\u019C\x03\x02\x02\x02\u01A3\u01A5\x03\x02\x02\x02\u01A4\u0188\x03\x02" +
    "\x02\x02\u01A4\u01A2\x03\x02\x02\x02\u01A5\u01AD\x03\x02\x02\x02\u01A6" +
    "\u01A9\x05\u0118\x8D\x02\u01A7\u01AA\x05p9\x02\u01A8\u01AA\x05\xC0a\x02" +
    "\u01A9\u01A7\x03\x02\x02\x02\u01A9\u01A8\x03\x02\x02\x02\u01AA\u01AC\x03" +
    "\x02\x02\x02\u01AB\u01A6\x03\x02\x02\x02\u01AC\u01AF\x03\x02\x02\x02\u01AD" +
    "\u01AB\x03\x02\x02\x02\u01AD\u01AE\x03\x02\x02\x02\u01AE\u01B3\x03\x02" +
    "\x02\x02\u01AF\u01AD\x03\x02\x02\x02\u01B0\u01B1\x05\u0118\x8D\x02\u01B1" +
    "\u01B2\x05\xF8}\x02\u01B2\u01B4\x03\x02\x02\x02\u01B3\u01B0\x03\x02\x02" +
    "\x02\u01B3\u01B4\x03\x02\x02\x02\u01B4\x13\x03\x02\x02\x02\u01B5\u01B8" +
    "\x05\"\x12\x02\u01B6\u01B8\x05*\x16\x02\u01B7\u01B5\x03\x02\x02\x02\u01B7" +
    "\u01B6\x03\x02\x02\x02\u01B8\x15\x03\x02\x02\x02\u01B9\u01BA\x07\x15\x02" +
    "\x02\u01BA\x17\x03\x02\x02\x02\u01BB\u01C6\x07E\x02\x02\u01BC\u01BD\x05" +
    "\u0118\x8D\x02\u01BD\u01BE\x07B\x02\x02\u01BE\u01C1\x05\u0118\x8D\x02" +
    "\u01BF\u01C2\x05\x1A\x0E\x02\u01C0\u01C2\x05*\x16\x02\u01C1\u01BF\x03" +
    "\x02\x02\x02\u01C1\u01C0\x03\x02\x02\x02\u01C2\u01C3\x03\x02\x02\x02\u01C3" +
    "\u01C4\x05\u0118\x8D\x02\u01C4\u01C5\x07D\x02\x02\u01C5\u01C7\x03\x02" +
    "\x02\x02\u01C6\u01BC\x03\x02\x02\x02\u01C6\u01C7\x03\x02\x02\x02\u01C7" +
    "\x19\x03\x02\x02\x02\u01C8\u01D0\x05\x1C\x0F\x02\u01C9\u01CA\x05\u0118" +
    "\x8D\x02\u01CA\u01CB\x07\x13\x02\x02\u01CB\u01CC\x05\u0118\x8D\x02\u01CC" +
    "\u01CD\x05\x1C\x0F\x02\u01CD\u01CF\x03\x02\x02\x02\u01CE\u01C9\x03\x02" +
    "\x02\x02\u01CF\u01D2\x03\x02\x02\x02\u01D0\u01CE\x03\x02\x02\x02\u01D0" +
    "\u01D1\x03\x02\x02\x02\u01D1\x1B\x03\x02\x02\x02\u01D2\u01D0\x03\x02\x02" +
    "\x02\u01D3\u01D6\x05\x1E\x10\x02\u01D4\u01D6\x05 \x11\x02\u01D5\u01D3" +
    "\x03\x02\x02\x02\u01D5\u01D4\x03\x02\x02\x02\u01D6\x1D\x03\x02\x02\x02" +
    "\u01D7\u01D9\x05\u0142\xA2\x02\u01D8\u01D7\x03\x02\x02\x02\u01D9\u01DA" +
    "\x03\x02\x02\x02\u01DA\u01D8\x03\x02\x02\x02\u01DA\u01DB\x03\x02\x02\x02" +
    "\u01DB\x1F\x03\x02\x02\x02\u01DC\u01DD\x05\"\x12\x02\u01DD!\x03\x02\x02" +
    "\x02\u01DE\u01E6\x05&\x14\x02\u01DF\u01E0\x05\u0118\x8D\x02\u01E0\u01E1" +
    "\x07c\x02\x02\u01E1\u01E2\x05\u0118\x8D\x02\u01E2\u01E3\x05(\x15\x02\u01E3" +
    "\u01E4\x05\u0118\x8D\x02\u01E4\u01E5\x07c\x02\x02\u01E5\u01E7\x03\x02" +
    "\x02\x02\u01E6\u01DF\x03\x02\x02\x02\u01E6\u01E7\x03\x02\x02\x02\u01E7" +
    "#\x03\x02\x02\x02\u01E8\u01E9\x07\x0F\x02\x02\u01E9\u01EA\x05\u0118\x8D" +
    "\x02\u01EA\u01EE\x05\"\x12\x02\u01EB\u01EC\x05\u011A\x8E\x02\u01EC\u01ED" +
    "\x05\"\x12\x02\u01ED\u01EF\x03\x02\x02\x02\u01EE\u01EB\x03\x02\x02\x02" +
    "\u01EF\u01F0\x03\x02\x02\x02\u01F0\u01EE\x03\x02\x02\x02\u01F0\u01F1\x03" +
    "\x02\x02\x02\u01F1\u01F2\x03\x02\x02\x02\u01F2\u01F3\x05\u0118\x8D\x02" +
    "\u01F3\u01F4\x07\x10\x02\x02\u01F4%\x03\x02\x02\x02\u01F5\u01F6\x05\u0116" +
    "\x8C\x02\u01F6\'\x03\x02\x02\x02\u01F7\u01F9\x05\u0138\x9D\x02\u01F8\u01F7" +
    "\x03\x02\x02\x02\u01F9\u01FA\x03\x02\x02\x02\u01FA\u01F8\x03\x02\x02\x02" +
    "\u01FA\u01FB\x03\x02\x02\x02\u01FB\u0208\x03\x02\x02\x02\u01FC\u01FE\x05" +
    "\u0124\x93\x02\u01FD\u01FC\x03\x02\x02\x02\u01FE\u01FF\x03\x02\x02\x02" +
    "\u01FF\u01FD\x03\x02\x02\x02\u01FF\u0200\x03\x02\x02\x02\u0200\u0202\x03" +
    "\x02\x02\x02\u0201\u0203\x05\u0138\x9D\x02\u0202\u0201\x03\x02\x02\x02" +
    "\u0203\u0204\x03\x02\x02\x02\u0204\u0202\x03\x02\x02\x02\u0204\u0205\x03" +
    "\x02\x02\x02\u0205\u0207\x03\x02\x02\x02\u0206\u01FD\x03\x02\x02\x02\u0207" +
    "\u020A\x03\x02\x02\x02\u0208\u0206\x03\x02\x02\x02\u0208\u0209\x03\x02" +
    "\x02\x02\u0209)\x03\x02\x02\x02\u020A\u0208\x03\x02\x02\x02\u020B\u020C" +
    "\x07\x11\x02\x02\u020C+\x03\x02\x02\x02\u020D\u0216\x052\x1A\x02\u020E" +
    "\u0216\x054\x1B\x02\u020F\u0216\x050\x19\x02\u0210\u0216\x05.\x18\x02" +
    "\u0211\u0216\x05:\x1E\x02\u0212\u0216\x05<\x1F\x02\u0213\u0216\x058\x1D" +
    "\x02\u0214\u0216\x056\x1C\x02\u0215\u020D\x03\x02\x02\x02\u0215\u020E" +
    "\x03\x02\x02\x02\u0215\u020F\x03\x02\x02\x02\u0215\u0210\x03\x02\x02\x02" +
    "\u0215\u0211\x03\x02\x02\x02\u0215\u0212\x03\x02\x02\x02\u0215\u0213\x03" +
    "\x02\x02\x02\u0215\u0214\x03\x02\x02\x02\u0216-\x03\x02\x02\x02\u0217" +
    "\u0218\x07#\x02\x02\u0218/\x03\x02\x02\x02\u0219\u021A\x07#\x02\x02\u021A" +
    "\u021B\x07#\x02\x02\u021B1\x03\x02\x02\x02\u021C\u021D\x07#\x02\x02\u021D" +
    "\u021E\x07\b\x02\x02\u021E3\x03\x02\x02\x02\u021F\u0220\x07#\x02\x02\u0220" +
    "\u0221\x07#\x02\x02\u0221\u0222\x07\b\x02\x02\u02225\x03\x02\x02\x02\u0223" +
    "\u0224\x07%\x02\x02\u02247\x03\x02\x02\x02\u0225\u0226\x07%\x02\x02\u0226" +
    "\u0227\x07%\x02\x02\u02279\x03\x02\x02\x02\u0228\u0229\x07%\x02\x02\u0229" +
    "\u022A\x07\b\x02\x02\u022A;\x03\x02\x02\x02\u022B\u022C\x07%\x02\x02\u022C" +
    "\u022D\x07%\x02\x02\u022D\u022E\x07\b\x02\x02\u022E=\x03\x02\x02\x02\u022F" +
    "\u0232\t\x02\x02\x02\u0230\u0232\t\x02\x02\x02\u0231\u022F\x03\x02\x02" +
    "\x02\u0231\u0230\x03\x02\x02\x02\u0232\u0235\x03\x02\x02\x02\u0233\u0236" +
    "\t\x03\x02\x02\u0234\u0236\t\x03\x02\x02\u0235\u0233\x03\x02\x02\x02\u0235" +
    "\u0234\x03\x02\x02\x02\u0236\u0239\x03\x02\x02\x02\u0237\u023A\t\x04\x02" +
    "\x02\u0238\u023A\t\x04\x02\x02\u0239\u0237\x03\x02\x02\x02\u0239\u0238" +
    "\x03\x02\x02\x02\u023A\u023B\x03\x02\x02\x02\u023B\u023E\x05\u011A\x8E" +
    "\x02\u023C\u023E\x07\x13\x02\x02\u023D\u0231\x03\x02\x02\x02\u023D\u023C" +
    "\x03\x02\x02\x02\u023E?\x03\x02\x02\x02\u023F\u0242\t\x05\x02\x02\u0240" +
    "\u0242\t\x05\x02\x02\u0241\u023F\x03\x02\x02\x02\u0241\u0240\x03\x02\x02" +
    "\x02\u0242\u0245\x03\x02\x02\x02\u0243\u0246\t\x06\x02\x02\u0244\u0246" +
    "\t\x06\x02\x02\u0245\u0243\x03\x02\x02\x02\u0245\u0244\x03\x02\x02\x02" +
    "\u0246\u0247\x03\x02\x02\x02\u0247\u0248\x05\u011A\x8E\x02\u0248A\x03" +
    "\x02\x02\x02\u0249\u024C\t\x07\x02\x02\u024A\u024C\t\x07\x02\x02\u024B" +
    "\u0249\x03\x02\x02\x02\u024B\u024A\x03\x02\x02\x02\u024C\u024F\x03\x02" +
    "\x02\x02\u024D\u0250\t\b\x02\x02\u024E\u0250\t\b\x02\x02\u024F\u024D\x03" +
    "\x02\x02\x02\u024F\u024E\x03\x02\x02\x02\u0250\u0253\x03\x02\x02\x02\u0251" +
    "\u0254\t\x03\x02\x02\u0252\u0254\t\x03\x02\x02\u0253\u0251\x03\x02\x02" +
    "\x02\u0253\u0252\x03\x02\x02\x02\u0254\u0257\x03\x02\x02\x02\u0255\u0258" +
    "\t\t\x02\x02\u0256\u0258\t\t\x02\x02\u0257\u0255\x03\x02\x02\x02\u0257" +
    "\u0256\x03\x02\x02\x02\u0258\u025B\x03\x02\x02\x02\u0259\u025C\t\n\x02" +
    "\x02\u025A\u025C\t\n\x02\x02\u025B\u0259\x03\x02\x02\x02\u025B\u025A\x03" +
    "\x02\x02\x02\u025C\u025D\x03\x02\x02\x02\u025D\u025E\x05\u011A\x8E\x02" +
    "\u025EC\x03\x02\x02\x02\u025F\u0260\x05J&\x02\u0260\u0263\x05\u0118\x8D" +
    "\x02\u0261\u0264\x05F$\x02\u0262\u0264\x05H%\x02\u0263\u0261\x03\x02\x02" +
    "\x02\u0263\u0262\x03\x02\x02\x02\u0263\u0264\x03\x02\x02\x02\u0264E\x03" +
    "\x02\x02\x02\u0265\u0266\x05\u0118\x8D\x02\u0266\u0267\x05> \x02\u0267" +
    "\u0268\x05\u0118\x8D\x02\u0268\u0269\x05J&\x02\u0269\u026B\x03\x02\x02" +
    "\x02\u026A\u0265\x03\x02\x02\x02\u026B\u026C\x03\x02\x02\x02\u026C\u026A" +
    "\x03\x02\x02\x02\u026C\u026D\x03\x02\x02\x02\u026DG\x03\x02\x02\x02\u026E" +
    "\u026F\x05\u0118\x8D\x02\u026F\u0270\x05@!\x02\u0270\u0271\x05\u0118\x8D" +
    "\x02\u0271\u0272\x05J&\x02\u0272\u0274\x03\x02\x02\x02\u0273\u026E\x03" +
    "\x02\x02\x02\u0274\u0275\x03\x02\x02\x02\u0275\u0273\x03\x02\x02\x02\u0275" +
    "\u0276\x03\x02\x02\x02\u0276I\x03\x02\x02\x02\u0277\u0280\x05L\'\x02\u0278" +
    "\u0280\x05T+\x02\u0279\u027A\x07\x0F\x02\x02\u027A\u027B\x05\u0118\x8D" +
    "\x02\u027B\u027C\x05D#\x02\u027C\u027D\x05\u0118\x8D\x02\u027D\u027E\x07" +
    "\x10\x02\x02\u027E\u0280\x03\x02\x02\x02\u027F\u0277\x03\x02\x02\x02\u027F" +
    "\u0278\x03\x02\x02\x02\u027F\u0279\x03\x02\x02\x02\u0280K\x03\x02\x02" +
    "\x02\u0281\u0282\x05R*\x02\u0282\u0285\x05\u0118\x8D\x02\u0283\u0286\x05" +
    "N(\x02\u0284\u0286\x05P)\x02\u0285\u0283\x03\x02\x02\x02\u0285\u0284\x03" +
    "\x02\x02\x02\u0285\u0286\x03\x02\x02\x02\u0286M\x03\x02\x02\x02\u0287" +
    "\u0288\x05\u0118\x8D\x02\u0288\u0289\x05> \x02\u0289\u028A\x05\u0118\x8D" +
    "\x02\u028A\u028B\x05R*\x02\u028B\u028D\x03\x02\x02\x02\u028C\u0287\x03" +
    "\x02\x02\x02\u028D\u028E\x03\x02\x02\x02\u028E\u028C\x03\x02\x02\x02\u028E" +
    "\u028F\x03\x02\x02\x02\u028FO\x03\x02\x02\x02\u0290\u0291\x05\u0118\x8D" +
    "\x02\u0291\u0292\x05@!\x02\u0292\u0293\x05\u0118\x8D\x02\u0293\u0294\x05" +
    "R*\x02\u0294\u0296\x03\x02\x02\x02\u0295\u0290\x03\x02\x02\x02\u0296\u0297" +
    "\x03\x02\x02\x02\u0297\u0295\x03\x02\x02\x02\u0297\u0298\x03\x02\x02\x02" +
    "\u0298Q\x03\x02\x02\x02\u0299\u02A1\x05V,\x02\u029A\u029B\x07\x0F\x02" +
    "\x02\u029B\u029C\x05\u0118\x8D\x02\u029C\u029D\x05L\'\x02\u029D\u029E" +
    "\x05\u0118\x8D\x02\u029E\u029F\x07\x10\x02\x02\u029F\u02A1\x03\x02\x02" +
    "\x02\u02A0\u0299\x03\x02\x02\x02\u02A0\u029A\x03\x02\x02\x02\u02A1S\x03" +
    "\x02\x02\x02\u02A2\u02A3\x07B\x02\x02\u02A3\u02A4\x05X-\x02\u02A4\u02A5" +
    "\x07D\x02\x02\u02A5\u02A6\x05\u0118\x8D\x02\u02A6\u02A8\x03\x02\x02\x02" +
    "\u02A7\u02A2\x03\x02\x02\x02\u02A7\u02A8\x03\x02\x02\x02\u02A8\u02A9\x03" +
    "\x02\x02\x02\u02A9\u02AA\x07b\x02\x02\u02AA\u02AB\x05\u0118\x8D\x02\u02AB" +
    "\u02AC\x05L\'\x02\u02AC\u02AD\x05\u0118\x8D\x02\u02AD\u02AE\x07d\x02\x02" +
    "\u02AEU\x03\x02\x02\x02\u02AF\u02B0\x07B\x02\x02\u02B0\u02B1\x05X-\x02" +
    "\u02B1\u02B2\x07D\x02\x02\u02B2\u02B3\x05\u0118\x8D\x02\u02B3\u02B5\x03" +
    "\x02\x02\x02\u02B4\u02AF\x03\x02\x02\x02\u02B4\u02B5\x03\x02\x02\x02\u02B5" +
    "\u02B9\x03\x02\x02\x02\u02B6\u02B7\x05b2\x02\u02B7\u02B8\x05\u0118\x8D" +
    "\x02\u02B8\u02BA\x03\x02\x02\x02\u02B9\u02B6\x03\x02\x02\x02\u02B9\u02BA" +
    "\x03\x02\x02\x02\u02BA\u02BB\x03\x02\x02\x02\u02BB\u02BC\x05d3\x02\u02BC" +
    "\u02D0\x05\u0118\x8D\x02\u02BD\u02BE\x05f4\x02\u02BE\u02BF\x05\u0118\x8D" +
    "\x02\u02BF\u02C0\x05\x12\n\x02\u02C0\u02D1\x03\x02\x02\x02\u02C1\u02C2" +
    "\x05h5\x02\u02C2\u02C3\x05\u0118\x8D\x02\u02C3\u02C4\x07\n\x02\x02\u02C4" +
    "\u02C5\x05\u0106\x84\x02\u02C5\u02D1\x03\x02\x02\x02\u02C6\u02C7\x05l" +
    "7\x02\u02C7\u02CA\x05\u0118\x8D\x02\u02C8\u02CB\x05x=\x02\u02C9\u02CB" +
    "\x05z>\x02\u02CA\u02C8\x03\x02\x02\x02\u02CA\u02C9\x03\x02\x02\x02\u02CB" +
    "\u02D1\x03\x02\x02\x02\u02CC\u02CD\x05n8\x02\u02CD\u02CE\x05\u0118\x8D" +
    "\x02\u02CE\u02CF\x05\u010E\x88\x02\u02CF\u02D1\x03\x02\x02\x02\u02D0\u02BD" +
    "\x03\x02\x02\x02\u02D0\u02C1\x03\x02\x02\x02\u02D0\u02C6\x03\x02\x02\x02" +
    "\u02D0\u02CC\x03\x02\x02\x02\u02D1W\x03\x02\x02\x02\u02D2\u02D3\x05Z." +
    "\x02\u02D3\u02D4\x05\\/\x02\u02D4\u02D5\x05^0\x02\u02D5Y\x03\x02\x02\x02" +
    "\u02D6\u02D7\x05\u0114\x8B\x02\u02D7[\x03\x02\x02\x02\u02D8\u02D9\x07" +
    "\x15\x02\x02\u02D9\u02DA\x07\x15\x02\x02\u02DA]\x03\x02\x02\x02\u02DB" +
    "\u02DE\x05\u0114\x8B\x02\u02DC\u02DE\x05`1\x02\u02DD\u02DB\x03\x02\x02" +
    "\x02\u02DD\u02DC\x03\x02\x02\x02\u02DE_\x03\x02\x02\x02\u02DF\u02E0\x07" +
    "\x11\x02\x02\u02E0a\x03\x02\x02\x02\u02E1\u02E2\t\x06\x02\x02\u02E2c\x03" +
    "\x02\x02\x02\u02E3\u02E4\x05\x12\n\x02\u02E4e\x03\x02\x02\x02\u02E5\u02E9" +
    "\x07$\x02\x02\u02E6\u02E7\x07\b\x02\x02\u02E7\u02E9\x07$\x02\x02\u02E8" +
    "\u02E5\x03\x02\x02\x02\u02E8\u02E6\x03\x02\x02\x02\u02E9g\x03\x02\x02" +
    "\x02\u02EA\u02F4\x07$\x02\x02\u02EB\u02EC\x07\b\x02\x02\u02EC\u02F4\x07" +
    "$\x02\x02\u02ED\u02EE\x07#\x02\x02\u02EE\u02F4\x07$\x02\x02\u02EF\u02F4" +
    "\x07#\x02\x02\u02F0\u02F1\x07%\x02\x02\u02F1\u02F4\x07$\x02\x02\u02F2" +
    "\u02F4\x07%\x02\x02\u02F3\u02EA\x03\x02\x02\x02\u02F3\u02EB\x03\x02\x02" +
    "\x02\u02F3\u02ED\x03\x02\x02\x02\u02F3\u02EF\x03\x02\x02\x02\u02F3\u02F0" +
    "\x03\x02\x02\x02\u02F3\u02F2\x03\x02\x02\x02\u02F4i\x03\x02\x02\x02\u02F5" +
    "\u02FF\x07$\x02\x02\u02F6\u02F7\x07\b\x02\x02\u02F7\u02FF\x07$\x02\x02" +
    "\u02F8\u02F9\x07#\x02\x02\u02F9\u02FF\x07$\x02\x02\u02FA\u02FF\x07#\x02" +
    "\x02\u02FB\u02FC\x07%\x02\x02\u02FC\u02FF\x07$\x02\x02\u02FD\u02FF\x07" +
    "%\x02\x02\u02FE\u02F5\x03\x02\x02\x02\u02FE\u02F6\x03\x02\x02\x02\u02FE" +
    "\u02F8\x03\x02\x02\x02\u02FE\u02FA\x03\x02\x02\x02\u02FE\u02FB\x03\x02" +
    "\x02\x02\u02FE\u02FD\x03\x02\x02\x02\u02FFk\x03\x02\x02\x02\u0300\u0304" +
    "\x07$\x02\x02\u0301\u0302\x07\b\x02\x02\u0302\u0304\x07$\x02\x02\u0303" +
    "\u0300\x03\x02\x02\x02\u0303\u0301\x03\x02\x02\x02\u0304m\x03\x02\x02" +
    "\x02\u0305\u0309\x07$\x02\x02\u0306\u0307\x07\b\x02\x02\u0307\u0309\x07" +
    "$\x02\x02\u0308\u0305\x03\x02\x02\x02\u0308\u0306\x03\x02\x02\x02\u0309" +
    "o\x03\x02\x02\x02\u030A\u030B\x07b\x02\x02\u030B\u030C\x07b\x02\x02\u030C" +
    "\u030D\x03\x02\x02\x02\u030D\u0310\x05\u0118\x8D\x02\u030E\u0311\t\x04" +
    "\x02\x02\u030F\u0311\t\x04\x02\x02\u0310\u030E\x03\x02\x02\x02\u0310\u030F" +
    "\x03\x02\x02\x02\u0310\u0311\x03\x02\x02\x02\u0311\u0312\x03\x02\x02\x02" +
    "\u0312\u0313\x05\u0118\x8D\x02\u0313\u031B\x05r:\x02\u0314\u0315\x05\u0118" +
    "\x8D\x02\u0315\u0316\x07\x13\x02\x02\u0316\u0317\x05\u0118\x8D\x02\u0317" +
    "\u0318\x05r:\x02\u0318\u031A\x03\x02\x02\x02\u0319\u0314\x03\x02\x02\x02" +
    "\u031A\u031D\x03\x02\x02\x02\u031B\u0319\x03\x02\x02\x02\u031B\u031C\x03" +
    "\x02\x02\x02\u031C\u031E\x03\x02\x02\x02\u031D\u031B\x03\x02\x02\x02\u031E" +
    "\u031F\x05\u0118\x8D\x02\u031F\u0320\x07d\x02\x02\u0320\u0321\x07d\x02" +
    "\x02\u0321q\x03\x02\x02\x02\u0322\u032A\x05t;\x02\u0323\u032A\x05\x88" +
    "E\x02\u0324\u032A\x05\x90I\x02\u0325\u032A\x05\xA4S\x02\u0326\u032A\x05" +
    "\xD6l\x02\u0327\u032A\x05\xDAn\x02\u0328\u032A\x05\xE8u\x02\u0329\u0322" +
    "\x03\x02\x02\x02\u0329\u0323\x03\x02\x02\x02\u0329\u0324\x03\x02\x02\x02" +
    "\u0329\u0325\x03\x02\x02\x02\u0329\u0326\x03\x02\x02\x02\u0329\u0327\x03" +
    "\x02\x02\x02\u0329\u0328\x03\x02\x02\x02\u032As\x03\x02\x02\x02\u032B" +
    "\u032C\x05v<\x02\u032C\u032D\x05\u0118\x8D\x02\u032D\u032E\x05l7\x02\u032E" +
    "\u0331\x05\u0118\x8D\x02\u032F\u0332\x05x=\x02\u0330\u0332\x05z>\x02\u0331" +
    "\u032F\x03\x02\x02\x02\u0331\u0330\x03\x02\x02\x02\u0332u\x03\x02\x02" +
    "\x02\u0333\u0336\t\v\x02\x02\u0334\u0336\t\v\x02\x02\u0335\u0333\x03\x02" +
    "\x02\x02\u0335\u0334\x03";
  private static readonly _serializedATNSegment2: string =
    "\x02\x02\x02\u0336\u0339\x03\x02\x02\x02\u0337\u033A\t\f\x02\x02\u0338" +
    "\u033A\t\f\x02\x02\u0339\u0337\x03\x02\x02\x02\u0339\u0338\x03\x02\x02" +
    "\x02\u033A\u033D\x03\x02\x02\x02\u033B\u033E\t\x06\x02\x02\u033C\u033E" +
    "\t\x06\x02\x02\u033D\u033B\x03\x02\x02\x02\u033D\u033C\x03\x02\x02\x02" +
    "\u033E\u0341\x03\x02\x02\x02\u033F\u0342\t\x07\x02\x02\u0340\u0342\t\x07" +
    "\x02\x02\u0341\u033F\x03\x02\x02\x02\u0341\u0340\x03\x02\x02\x02\u0342" +
    "w\x03\x02\x02\x02\u0343\u0344\x05~@\x02\u0344\u0345\x05\u0118\x8D\x02" +
    "\u0345\u0346\x07!\x02\x02\u0346\u0347\x05\u0118\x8D\x02\u0347\u0349\x03" +
    "\x02\x02\x02\u0348\u0343\x03\x02\x02\x02\u0348\u0349\x03\x02\x02\x02\u0349" +
    "\u034A\x03\x02\x02\x02\u034A\u0352\x05\x82B\x02\u034B\u034C\x05|?\x02" +
    "\u034C\u034D\x05\u0118\x8D\x02\u034D\u034E\x07!\x02\x02\u034E\u034F\x05" +
    "\u0118\x8D\x02\u034F\u0350\x05\x86D\x02\u0350\u0352\x03\x02\x02\x02\u0351" +
    "\u0348\x03\x02\x02\x02\u0351\u034B\x03\x02\x02\x02\u0352y\x03\x02\x02" +
    "\x02\u0353\u0354\x07\x0F\x02\x02\u0354\u0355\x05\u0118\x8D\x02\u0355\u035B" +
    "\x05x=\x02\u0356\u0357\x05\u011A\x8E\x02\u0357\u0358\x05x=\x02\u0358\u035A" +
    "\x03\x02\x02\x02\u0359\u0356\x03\x02\x02\x02\u035A\u035D\x03\x02\x02\x02" +
    "\u035B\u0359\x03\x02\x02\x02\u035B\u035C\x03\x02\x02\x02\u035C\u035E\x03" +
    "\x02\x02\x02\u035D\u035B\x03\x02\x02\x02\u035E\u035F\x05\u0118\x8D\x02" +
    "\u035F\u0360\x07\x10\x02\x02\u0360{\x03\x02\x02\x02\u0361\u0364\t\r\x02" +
    "\x02\u0362\u0364\t\r\x02\x02\u0363\u0361\x03\x02\x02\x02\u0363\u0362\x03" +
    "\x02\x02\x02\u0364\u0367\x03\x02\x02\x02\u0365\u0368\t\b\x02\x02\u0366" +
    "\u0368\t\b\x02\x02\u0367\u0365\x03\x02\x02\x02\u0367\u0366\x03\x02\x02" +
    "\x02\u0368\u036B\x03\x02\x02\x02\u0369\u036C\t\x0E\x02\x02\u036A\u036C" +
    "\t\x0E\x02\x02\u036B\u0369\x03\x02\x02\x02\u036B\u036A\x03\x02\x02\x02" +
    "\u036C\u036F\x03\x02\x02\x02\u036D\u0370\t\x04\x02\x02\u036E\u0370\t\x04" +
    "\x02\x02\u036F\u036D\x03\x02\x02\x02\u036F\u036E\x03\x02\x02\x02\u0370" +
    "}\x03\x02\x02\x02\u0371\u0374\t\x07\x02\x02\u0372\u0374\t\x07\x02\x02" +
    "\u0373\u0371\x03\x02\x02\x02\u0373\u0372\x03\x02\x02\x02\u0374\u0377\x03" +
    "\x02\x02\x02\u0375\u0378\t\x02\x02\x02\u0376\u0378\t\x02\x02\x02\u0377" +
    "\u0375\x03\x02\x02\x02\u0377\u0376\x03\x02\x02\x02\u0378\u037B\x03\x02" +
    "\x02\x02\u0379\u037C\t\v\x02\x02\u037A\u037C\t\v\x02\x02\u037B\u0379\x03" +
    "\x02\x02\x02\u037B\u037A\x03\x02\x02\x02\u037C\u037F\x03\x02\x02\x02\u037D" +
    "\u0380\t\x0F\x02\x02\u037E\u0380\t\x0F\x02\x02\u037F\u037D\x03\x02\x02" +
    "\x02\u037F\u037E\x03\x02\x02\x02\u0380\u0383\x03\x02\x02\x02\u0381\u0384" +
    "\t\x10\x02\x02\u0382\u0384\t\x10\x02\x02\u0383\u0381\x03\x02\x02\x02\u0383" +
    "\u0382\x03\x02\x02\x02\u0384\x7F\x03\x02\x02\x02\u0385\u0388\x05\u0140" +
    "\xA1\x02\u0386\u0388\x05\u013C\x9F\x02\u0387\u0385\x03\x02\x02\x02\u0387" +
    "\u0386\x03\x02\x02\x02\u0388\u0389\x03\x02\x02\x02\u0389\u0387\x03\x02" +
    "\x02\x02\u0389\u038A\x03\x02\x02\x02\u038A\x81\x03\x02\x02\x02\u038B\u038C" +
    "\x05\u012C\x97\x02\u038C\u038D\x05\u0118\x8D\x02\u038D\u0393\x05\x80A" +
    "\x02\u038E\u038F\x05\u011A\x8E\x02\u038F\u0390\x05\x80A\x02\u0390\u0392" +
    "\x03\x02\x02\x02\u0391\u038E\x03\x02\x02\x02\u0392\u0395\x03\x02\x02\x02" +
    "\u0393\u0391\x03\x02\x02\x02\u0393\u0394\x03\x02\x02\x02\u0394\u0396\x03" +
    "\x02\x02\x02\u0395\u0393\x03\x02\x02\x02\u0396\u0397\x05\u0118\x8D\x02" +
    "\u0397\u0398\x05\u012C\x97\x02\u0398\x83\x03\x02\x02\x02\u0399\u039C\x05" +
    "\u013A\x9E\x02\u039A\u039C\x05\u013E\xA0\x02\u039B\u0399\x03\x02\x02\x02" +
    "\u039B\u039A\x03\x02\x02\x02\u039C\u039D\x03\x02\x02\x02\u039D\u039B\x03" +
    "\x02\x02\x02\u039D\u039E\x03\x02\x02\x02\u039E\x85\x03\x02\x02\x02\u039F" +
    "\u03A0\x05\u012C\x97\x02\u03A0\u03A1\x05\x84C\x02\u03A1\u03A2\x05\u012C" +
    "\x97\x02\u03A2\x87\x03\x02\x02\x02\u03A3\u03A4\x05\x8AF\x02\u03A4\u03A5" +
    "\x05\u0118\x8D\x02\u03A5\u03A6\x05n8\x02\u03A6\u03A9\x05\u0118\x8D\x02" +
    "\u03A7\u03AA\x05\x8CG\x02\u03A8\u03AA\x05\x8EH\x02\u03A9\u03A7\x03\x02" +
    "\x02\x02\u03A9\u03A8\x03\x02\x02\x02\u03AA\x89\x03\x02\x02\x02\u03AB\u03AE" +
    "\t\x0E\x02\x02\u03AC\u03AE\t\x0E\x02\x02\u03AD\u03AB\x03\x02\x02\x02\u03AD" +
    "\u03AC\x03\x02\x02\x02\u03AE\u03B1\x03\x02\x02\x02\u03AF\u03B2\t\x02\x02" +
    "\x02\u03B0\u03B2\t\x02\x02\x02\u03B1\u03AF\x03\x02\x02\x02\u03B1\u03B0" +
    "\x03\x02\x02\x02\u03B2\u03B5\x03\x02\x02\x02\u03B3\u03B6\t\x03\x02\x02" +
    "\u03B4\u03B6\t\x03\x02\x02\u03B5\u03B3\x03\x02\x02\x02\u03B5\u03B4\x03" +
    "\x02\x02\x02\u03B6\u03B9\x03\x02\x02\x02\u03B7\u03BA\t\x11\x02\x02\u03B8" +
    "\u03BA\t\x11\x02\x02\u03B9\u03B7\x03\x02\x02\x02\u03B9\u03B8\x03\x02\x02" +
    "\x02\u03BA\u03BD\x03\x02\x02\x02\u03BB\u03BE\t\t\x02\x02\u03BC\u03BE\t" +
    "\t\x02\x02\u03BD\u03BB\x03\x02\x02\x02\u03BD\u03BC\x03\x02\x02\x02\u03BE" +
    "\u03C1\x03\x02\x02\x02\u03BF\u03C2\t\x02\x02\x02\u03C0\u03C2\t\x02\x02" +
    "\x02\u03C1\u03BF\x03\x02\x02\x02\u03C1\u03C0\x03\x02\x02\x02\u03C2\u03C5" +
    "\x03\x02\x02\x02\u03C3\u03C6\t\x11\x02\x02\u03C4\u03C6\t\x11\x02\x02\u03C5" +
    "\u03C3\x03\x02\x02\x02\u03C5\u03C4\x03\x02\x02\x02\u03C6\u03C9\x03\x02" +
    "\x02\x02\u03C7\u03CA\t\f\x02\x02\u03C8\u03CA\t\f\x02\x02\u03C9\u03C7\x03" +
    "\x02\x02\x02\u03C9\u03C8\x03\x02\x02\x02\u03CA\x8B\x03\x02\x02\x02\u03CB" +
    "\u03CC\x05\u0142\xA2\x02\u03CC\u03CD\x05\u0142\xA2\x02\u03CD\x8D\x03\x02" +
    "\x02\x02\u03CE\u03CF\x07\x0F\x02\x02\u03CF\u03D0\x05\u0118\x8D\x02\u03D0" +
    "\u03D6\x05\x8CG\x02\u03D1\u03D2\x05\u011A\x8E\x02\u03D2\u03D3\x05\x8C" +
    "G\x02\u03D3\u03D5\x03\x02\x02\x02\u03D4\u03D1\x03\x02\x02\x02\u03D5\u03D8" +
    "\x03\x02\x02\x02\u03D6\u03D4\x03\x02\x02\x02\u03D6\u03D7\x03\x02\x02\x02" +
    "\u03D7\u03D9\x03\x02\x02\x02\u03D8\u03D6\x03\x02\x02\x02\u03D9\u03DA\x05" +
    "\u0118\x8D\x02\u03DA\u03DB\x07\x10\x02\x02\u03DB\x8F\x03\x02\x02\x02\u03DC" +
    "\u03DF\x05\x92J\x02\u03DD\u03DF\x05\x96L\x02\u03DE\u03DC\x03\x02\x02\x02" +
    "\u03DE\u03DD\x03\x02\x02\x02\u03DF\x91\x03\x02\x02\x02\u03E0\u03E1\x05" +
    "\x94K\x02\u03E1\u03E2\x05\u0118\x8D\x02\u03E2\u03E3\x05n8\x02\u03E3\u03E6" +
    "\x05\u0118\x8D\x02\u03E4\u03E7\x05\x12\n\x02\u03E5\u03E7\x05$\x13\x02" +
    "\u03E6\u03E4\x03\x02\x02\x02\u03E6\u03E5\x03\x02\x02\x02\u03E7\x93\x03" +
    "\x02\x02\x02\u03E8\u03EB\t\v\x02\x02\u03E9\u03EB\t\v\x02\x02\u03EA\u03E8" +
    "\x03\x02\x02\x02\u03EA\u03E9\x03\x02\x02\x02\u03EB\u03EE\x03\x02\x02\x02" +
    "\u03EC\u03EF\t\x12\x02\x02\u03ED\u03EF\t\x12\x02\x02\u03EE\u03EC\x03\x02" +
    "\x02\x02\u03EE\u03ED\x03\x02\x02\x02\u03EF\u03F2\x03\x02\x02\x02\u03F0" +
    "\u03F3\t\x13\x02\x02\u03F1\u03F3\t\x13\x02\x02\u03F2\u03F0\x03\x02\x02" +
    "\x02\u03F2\u03F1\x03\x02\x02\x02\u03F3\u03F6\x03\x02\x02\x02\u03F4\u03F7" +
    "\t\f\x02\x02\u03F5\u03F7\t\f\x02\x02\u03F6\u03F4\x03\x02\x02\x02\u03F6" +
    "\u03F5\x03\x02\x02\x02\u03F7\u03FA\x03\x02\x02\x02\u03F8\u03FB\t\b\x02" +
    "\x02\u03F9\u03FB\t\b\x02\x02\u03FA\u03F8\x03\x02\x02\x02\u03FA\u03F9\x03" +
    "\x02\x02\x02\u03FB\u03FE\x03\x02\x02\x02\u03FC\u03FF\t\x04\x02\x02\u03FD" +
    "\u03FF\t\x04\x02\x02\u03FE\u03FC\x03\x02\x02\x02\u03FE\u03FD\x03\x02\x02" +
    "\x02\u03FF\x95\x03\x02\x02\x02\u0400\u0401\x05\x98M\x02\u0401\u0402\x05" +
    "\u0118\x8D\x02\u0402\u0403\x05n8\x02\u0403\u0406\x05\u0118\x8D\x02\u0404" +
    "\u0407\x05\x9AN\x02\u0405\u0407\x05\x9CO\x02\u0406\u0404\x03\x02\x02\x02" +
    "\u0406\u0405\x03\x02\x02\x02\u0407\x97\x03\x02\x02\x02\u0408\u040B\t\v" +
    "\x02\x02\u0409\u040B\t\v\x02\x02\u040A\u0408\x03\x02\x02\x02\u040A\u0409" +
    "\x03\x02\x02\x02\u040B\u040E\x03\x02\x02\x02\u040C\u040F\t\x12\x02\x02" +
    "\u040D\u040F\t\x12\x02\x02\u040E\u040C\x03\x02\x02\x02\u040E\u040D\x03" +
    "\x02\x02\x02\u040F\u0412\x03\x02\x02\x02\u0410\u0413\t\x13\x02\x02\u0411" +
    "\u0413\t\x13\x02\x02\u0412\u0410\x03\x02\x02\x02\u0412\u0411\x03\x02\x02" +
    "\x02\u0413\u0416\x03\x02\x02\x02\u0414\u0417\t\f\x02\x02\u0415\u0417\t" +
    "\f\x02\x02\u0416\u0414\x03\x02\x02\x02\u0416\u0415\x03\x02\x02\x02\u0417" +
    "\x99\x03\x02\x02\x02\u0418\u041C\x05\x9EP\x02\u0419\u041C\x05\xA0Q\x02" +
    "\u041A\u041C\x05\xA2R\x02\u041B\u0418\x03\x02\x02\x02\u041B\u0419\x03" +
    "\x02\x02\x02\u041B\u041A\x03\x02\x02\x02\u041C\x9B\x03\x02\x02\x02\u041D" +
    "\u041E\x07\x0F\x02\x02\u041E\u041F\x05\u0118\x8D\x02\u041F\u0425\x05\x9A" +
    "N\x02\u0420\u0421\x05\u011A\x8E\x02\u0421\u0422\x05\x9AN\x02\u0422\u0424" +
    "\x03\x02\x02\x02\u0423\u0420\x03\x02\x02\x02\u0424\u0427\x03\x02\x02\x02" +
    "\u0425\u0423\x03\x02\x02\x02\u0425\u0426\x03\x02\x02\x02\u0426\u0428\x03" +
    "\x02\x02\x02\u0427\u0425\x03\x02\x02\x02\u0428\u0429\x05\u0118\x8D\x02" +
    "\u0429\u042A\x07\x10\x02\x02\u042A\x9D\x03\x02\x02\x02\u042B\u042E\t\n" +
    "\x02\x02\u042C\u042E\t\n\x02\x02\u042D\u042B\x03\x02\x02\x02\u042D\u042C" +
    "\x03\x02\x02\x02\u042E\u0431\x03\x02\x02\x02\u042F\u0432\t\x12\x02\x02" +
    "\u0430\u0432\t\x12\x02\x02\u0431\u042F\x03\x02\x02\x02\u0431\u0430\x03" +
    "\x02\x02\x02\u0432\u0435\x03\x02\x02\x02\u0433\u0436\t\x03\x02\x02\u0434" +
    "\u0436\t\x03\x02\x02\u0435\u0433\x03\x02\x02\x02\u0435\u0434\x03\x02\x02" +
    "\x02\u0436\x9F\x03\x02\x02\x02\u0437\u043A\t\x14\x02\x02\u0438\u043A\t" +
    "\x14\x02\x02\u0439\u0437\x03\x02\x02\x02\u0439\u0438\x03\x02\x02\x02\u043A" +
    "\u043D\x03\x02\x02\x02\u043B\u043E\t\n\x02\x02\u043C\u043E\t\n\x02\x02" +
    "\u043D\u043B\x03\x02\x02\x02\u043D\u043C\x03\x02\x02\x02\u043E\u0441\x03" +
    "\x02\x02\x02\u043F\u0442\t\x03\x02\x02\u0440\u0442\t\x03\x02\x02\u0441" +
    "\u043F\x03\x02\x02\x02\u0441\u0440\x03\x02\x02\x02\u0442\xA1\x03\x02\x02" +
    "\x02\u0443\u0446\t\x04\x02\x02\u0444\u0446\t\x04\x02\x02\u0445\u0443\x03" +
    "\x02\x02\x02\u0445\u0444\x03\x02\x02\x02\u0446\u0449\x03\x02\x02\x02\u0447" +
    "\u044A\t\f\x02\x02\u0448\u044A\t\f\x02\x02\u0449\u0447\x03\x02\x02\x02" +
    "\u0449\u0448\x03\x02\x02\x02\u044A\u044D\x03\x02\x02\x02\u044B\u044E\t" +
    "\x14\x02\x02\u044C\u044E\t\x14\x02\x02\u044D\u044B\x03\x02\x02\x02\u044D" +
    "\u044C\x03\x02\x02\x02\u044E\xA3\x03\x02\x02\x02\u044F\u0452\x05\xA6T" +
    "\x02\u0450\u0452\x05\xAAV\x02\u0451\u044F\x03\x02\x02\x02\u0451\u0450" +
    "\x03\x02\x02\x02\u0452\u0456\x03\x02\x02\x02\u0453\u0454\x05\u0118\x8D" +
    "\x02\u0454\u0455\x05\xB4[\x02\u0455\u0457\x03\x02\x02\x02\u0456\u0453" +
    "\x03\x02\x02\x02\u0456\u0457\x03\x02\x02\x02\u0457\xA5\x03\x02\x02\x02" +
    "\u0458\u0459\x05\xA8U\x02\u0459\u045A\x05\u0118\x8D\x02\u045A\u045B\x05" +
    "n8\x02\u045B\u045E\x05\u0118\x8D\x02\u045C\u045F\x05\x12\n\x02\u045D\u045F" +
    "\x05\xB2Z\x02\u045E\u045C\x03\x02\x02\x02\u045E\u045D\x03\x02\x02\x02" +
    "\u045F\xA7\x03\x02\x02\x02\u0460\u0463\t\x04\x02\x02\u0461\u0463\t\x04" +
    "\x02\x02\u0462\u0460\x03\x02\x02\x02\u0462\u0461\x03\x02\x02\x02\u0463" +
    "\u0466\x03\x02\x02\x02\u0464\u0467\t\b\x02\x02\u0465\u0467\t\b\x02\x02" +
    "\u0466\u0464\x03\x02\x02\x02\u0466\u0465\x03\x02\x02\x02\u0467\u046A\x03" +
    "\x02\x02\x02\u0468\u046B\t\x02\x02\x02\u0469\u046B\t\x02\x02\x02\u046A" +
    "\u0468\x03\x02\x02\x02\u046A\u0469\x03\x02\x02\x02\u046B\u046E\x03\x02" +
    "\x02\x02\u046C\u046F\t\x0E\x02\x02\u046D\u046F\t\x0E\x02\x02\u046E\u046C" +
    "\x03\x02\x02\x02\u046E\u046D\x03\x02\x02\x02\u046F\u0472\x03\x02\x02\x02" +
    "\u0470\u0473\t\f\x02\x02\u0471\u0473\t\f\x02\x02\u0472\u0470\x03\x02\x02" +
    "\x02\u0472\u0471\x03\x02\x02\x02\u0473\u0476\x03\x02\x02\x02\u0474\u0477" +
    "\t\x0F\x02\x02\u0475\u0477\t\x0F\x02\x02\u0476\u0474\x03\x02\x02\x02\u0476" +
    "\u0475\x03\x02\x02\x02\u0477\u047A\x03\x02\x02\x02\u0478\u047B\t\v\x02" +
    "\x02\u0479\u047B\t\v\x02\x02\u047A\u0478\x03\x02\x02\x02\u047A\u0479\x03" +
    "\x02\x02\x02\u047B\u047E\x03\x02\x02\x02\u047C\u047F\t\b\x02\x02\u047D" +
    "\u047F\t\b\x02\x02\u047E\u047C\x03\x02\x02\x02\u047E\u047D\x03\x02\x02" +
    "\x02\u047F\u0482\x03\x02\x02\x02\u0480\u0483\t\x04\x02\x02\u0481\u0483" +
    "\t\x04\x02\x02\u0482\u0480\x03\x02\x02\x02\u0482\u0481\x03\x02\x02\x02" +
    "\u0483\xA9\x03\x02\x02\x02\u0484\u0485\x05\xACW\x02\u0485\u0486\x05\u0118" +
    "\x8D\x02\u0486\u0487\x05n8\x02\u0487\u048A\x05\u0118\x8D\x02\u0488\u048B" +
    "\x05\xAEX\x02\u0489\u048B\x05\xB0Y\x02\u048A\u0488\x03\x02\x02\x02\u048A" +
    "\u0489\x03\x02\x02\x02\u048B\xAB\x03\x02\x02\x02\u048C\u048F\t\x04\x02" +
    "\x02\u048D\u048F\t\x04\x02\x02\u048E\u048C\x03\x02\x02\x02\u048E\u048D" +
    "\x03\x02\x02\x02\u048F\u0492\x03\x02\x02\x02\u0490\u0493\t\b\x02\x02\u0491" +
    "\u0493\t\b\x02\x02\u0492\u0490\x03\x02\x02\x02\u0492\u0491\x03\x02\x02" +
    "\x02\u0493\u0496\x03\x02\x02\x02\u0494\u0497\t\x02\x02\x02\u0495\u0497" +
    "\t\x02\x02\x02\u0496\u0494\x03\x02\x02\x02\u0496\u0495\x03\x02\x02\x02" +
    "\u0497\u049A\x03\x02\x02\x02\u0498\u049B\t\x0E\x02\x02\u0499\u049B\t\x0E" +
    "\x02\x02\u049A\u0498\x03\x02\x02\x02\u049A\u0499\x03\x02\x02\x02\u049B" +
    "\u049E\x03\x02\x02\x02\u049C\u049F\t\f\x02\x02\u049D\u049F\t\f\x02\x02" +
    "\u049E\u049C\x03\x02\x02\x02\u049E\u049D\x03\x02\x02\x02\u049F\u04A2\x03" +
    "\x02\x02\x02\u04A0\u04A3\t\x0F\x02\x02\u04A1\u04A3\t\x0F\x02\x02\u04A2" +
    "\u04A0\x03\x02\x02\x02\u04A2\u04A1\x03\x02\x02\x02\u04A3\u04A6\x03\x02" +
    "\x02\x02\u04A4\u04A7\t\v\x02\x02\u04A5\u04A7\t\v\x02\x02\u04A6\u04A4\x03" +
    "\x02\x02\x02\u04A6\u04A5\x03\x02\x02\x02\u04A7\xAD\x03\x02\x02\x02\u04A8" +
    "\u04AE\x05\u0142\xA2\x02\u04A9\u04AD\x05\u0144\xA3\x02\u04AA\u04AD\x05" +
    "\u0142\xA2\x02\u04AB\u04AD\x05\u010A\x86\x02\u04AC\u04A9\x03\x02\x02\x02" +
    "\u04AC\u04AA\x03\x02\x02\x02\u04AC\u04AB\x03\x02\x02\x02\u04AD\u04B0\x03" +
    "\x02\x02\x02\u04AE\u04AC\x03\x02\x02\x02\u04AE\u04AF\x03\x02\x02\x02\u04AF" +
    "\xAF\x03\x02\x02\x02\u04B0\u04AE\x03\x02\x02\x02\u04B1\u04B2\x07\x0F\x02" +
    "\x02\u04B2\u04B3\x05\u0118\x8D\x02\u04B3\u04B7\x05\xAEX\x02\u04B4\u04B5" +
    "\x05\u0118\x8D\x02\u04B5\u04B6\x05\xB4[\x02\u04B6\u04B8\x03\x02\x02\x02" +
    "\u04B7\u04B4\x03\x02\x02\x02\u04B7\u04B8\x03\x02\x02\x02\u04B8\u04C2\x03" +
    "\x02\x02\x02\u04B9\u04BA\x05\u011A\x8E\x02\u04BA\u04BE\x05\xAEX\x02\u04BB" +
    "\u04BC\x05\u0118\x8D\x02\u04BC\u04BD\x05\xB4[\x02\u04BD\u04BF\x03\x02" +
    "\x02\x02\u04BE\u04BB\x03\x02\x02\x02\u04BE\u04BF\x03\x02\x02\x02\u04BF" +
    "\u04C1\x03\x02\x02\x02\u04C0\u04B9\x03\x02\x02\x02\u04C1\u04C4\x03\x02" +
    "\x02\x02\u04C2\u04C0\x03\x02\x02\x02\u04C2\u04C3\x03\x02\x02\x02\u04C3" +
    "\u04C5\x03\x02\x02\x02\u04C4\u04C2\x03\x02\x02\x02\u04C5\u04C6\x05\u0118" +
    "\x8D\x02\u04C6\u04C7\x07\x10\x02\x02\u04C7\xB1\x03\x02\x02\x02\u04C8\u04C9" +
    "\x07\x0F\x02\x02\u04C9\u04CA\x05\u0118\x8D\x02\u04CA\u04CE\x05\"\x12\x02" +
    "\u04CB\u04CC\x05\u0118\x8D\x02\u04CC\u04CD\x05\xB4[\x02\u04CD\u04CF\x03" +
    "\x02\x02\x02\u04CE\u04CB\x03\x02\x02\x02\u04CE\u04CF\x03\x02\x02\x02\u04CF" +
    "\u04D9\x03\x02\x02\x02\u04D0\u04D1\x05\u011A\x8E\x02\u04D1\u04D5\x05\"" +
    "\x12\x02\u04D2\u04D3\x05\u0118\x8D\x02\u04D3\u04D4\x05\xB4[\x02\u04D4" +
    "\u04D6\x03\x02\x02\x02\u04D5\u04D2\x03\x02\x02\x02\u04D5\u04D6\x03\x02" +
    "\x02\x02\u04D6\u04D8\x03\x02\x02\x02\u04D7\u04D0\x03\x02\x02\x02\u04D8" +
    "\u04DB\x03\x02\x02\x02\u04D9\u04D7\x03\x02\x02\x02\u04D9\u04DA\x03\x02" +
    "\x02\x02\u04DA\u04DC\x03\x02\x02\x02\u04DB\u04D9\x03\x02\x02\x02\u04DC" +
    "\u04DD\x05\u0118\x8D\x02\u04DD\u04DE\x07\x10\x02\x02\u04DE\xB3\x03\x02" +
    "\x02\x02\u04DF\u04E2\x05\xB6\\\x02\u04E0\u04E2\x05\xB8]\x02\u04E1\u04DF" +
    "\x03\x02\x02\x02\u04E1\u04E0\x03\x02\x02\x02\u04E2\xB5\x03\x02\x02\x02" +
    "\u04E3\u04E4\x07\x0F\x02\x02\u04E4\u04E5\x05\u0118\x8D\x02\u04E5\u04EB" +
    "\x05\"\x12\x02\u04E6\u04E7\x05\u011A\x8E\x02\u04E7\u04E8\x05\"\x12\x02" +
    "\u04E8\u04EA\x03\x02\x02\x02\u04E9\u04E6\x03\x02\x02\x02\u04EA\u04ED\x03" +
    "\x02\x02\x02\u04EB\u04E9\x03\x02\x02\x02\u04EB\u04EC\x03\x02\x02\x02\u04EC" +
    "\u04EE\x03\x02\x02\x02\u04ED\u04EB\x03\x02\x02\x02\u04EE\u04EF\x05\u0118" +
    "\x8D\x02\u04EF\u04F0\x07\x10\x02\x02\u04F0\xB7\x03\x02\x02\x02\u04F1\u04F2" +
    "\x07\x0F\x02\x02\u04F2\u04F3\x05\u0118\x8D\x02\u04F3\u04F9\x05\xBA^\x02" +
    "\u04F4\u04F5\x05\u011A\x8E\x02\u04F5\u04F6\x05\xBA^\x02\u04F6\u04F8\x03" +
    "\x02\x02\x02\u04F7\u04F4\x03\x02\x02\x02\u04F8\u04FB\x03\x02\x02\x02\u04F9" +
    "\u04F7\x03\x02\x02\x02\u04F9\u04FA\x03\x02\x02\x02\u04FA\u04FC\x03\x02" +
    "\x02\x02\u04FB\u04F9\x03\x02\x02\x02\u04FC\u04FD\x05\u0118\x8D\x02\u04FD" +
    "\u04FE\x07\x10\x02\x02\u04FE\xB9\x03\x02\x02\x02\u04FF\u0502\x05\xBC_" +
    "\x02\u0500\u0502\x05\xBE`\x02\u0501\u04FF\x03\x02\x02\x02\u0501\u0500" +
    "\x03\x02\x02\x02\u0502\xBB\x03\x02\x02\x02\u0503\u0506\t\x02\x02\x02\u0504" +
    "\u0506\t\x02\x02\x02\u0505\u0503\x03\x02\x02\x02\u0505\u0504\x03\x02\x02" +
    "\x02\u0506\u0509\x03\x02\x02\x02\u0507\u050A\t\x0F\x02\x02\u0508\u050A" +
    "\t\x0F\x02\x02\u0509\u0507\x03\x02\x02\x02\u0509\u0508\x03\x02\x02\x02" +
    "\u050A\u050D\x03\x02\x02\x02\u050B\u050E\t\x0F\x02\x02\u050C\u050E\t\x0F" +
    "\x02\x02\u050D\u050B\x03\x02\x02\x02\u050D\u050C\x03\x02\x02\x02\u050E" +
    "\u0511\x03\x02\x02\x02\u050F\u0512\t\f\x02\x02\u0510\u0512\t\f\x02\x02" +
    "\u0511\u050F\x03\x02\x02\x02\u0511\u0510\x03\x02\x02\x02\u0512\u0515\x03" +
    "\x02\x02\x02\u0513\u0516\t\x13\x02\x02\u0514\u0516\t\x13\x02\x02\u0515" +
    "\u0513\x03\x02\x02\x02\u0515\u0514\x03\x02\x02\x02\u0516\u0519\x03\x02" +
    "\x02\x02\u0517\u051A\t\v\x02\x02\u0518\u051A\t\v\x02\x02\u0519\u0517\x03" +
    "\x02\x02\x02\u0519\u0518\x03\x02\x02\x02\u051A\xBD\x03\x02\x02\x02\u051B" +
    "\u051E\t\x13\x02\x02\u051C\u051E\t\x13\x02\x02\u051D\u051B\x03\x02\x02" +
    "\x02\u051D\u051C\x03\x02\x02\x02\u051E\u0521\x03\x02\x02\x02\u051F\u0522" +
    "\t\x06\x02\x02\u0520\u0522\t\x06\x02\x02\u0521\u051F\x03\x02\x02\x02\u0521" +
    "\u0520\x03\x02\x02\x02\u0522\u0525\x03\x02\x02\x02\u0523\u0526\t\f\x02" +
    "\x02\u0524\u0526\t\f\x02\x02\u0525\u0523\x03\x02\x02\x02\u0525\u0524\x03" +
    "\x02\x02\x02\u0526\u0529\x03\x02\x02\x02\u0527\u052A\t\x14\x02\x02\u0528" +
    "\u052A\t\x14\x02\x02\u0529\u0527\x03\x02\x02\x02\u0529\u0528\x03\x02\x02" +
    "\x02\u052A\u052D\x03\x02\x02\x02\u052B\u052E\t\f\x02\x02\u052C\u052E\t" +
    "\f\x02\x02\u052D\u052B\x03\x02\x02\x02\u052D\u052C\x03\x02\x02\x02\u052E" +
    "\u0531\x03\x02\x02\x02\u052F\u0532\t\x06\x02\x02\u0530\u0532\t\x06\x02" +
    "\x02\u0531\u052F\x03\x02\x02\x02\u0531\u0530\x03\x02\x02\x02\u0532\xBF" +
    "\x03\x02\x02\x02\u0533\u0534\x07b\x02\x02\u0534\u0535\x07b\x02\x02\u0535" +
    "\u0536\x03\x02\x02\x02\u0536\u0539\x05\u0118\x8D\x02\u0537\u053A\t\x0F" +
    "\x02\x02\u0538\u053A\t\x0F\x02\x02\u0539\u0537\x03\x02\x02\x02\u0539\u0538" +
    "\x03\x02\x02\x02\u053A\u053B\x03\x02\x02\x02\u053B\u053C\x05\u0118\x8D" +
    "\x02\u053C\u0544\x05\xC2b\x02\u053D\u053E\x05\u0118\x8D\x02\u053E\u053F" +
    "\x07\x13\x02\x02\u053F\u0540\x05\u0118\x8D\x02\u0540\u0541\x05\xC2b\x02" +
    "\u0541\u0543\x03\x02\x02\x02\u0542\u053D\x03\x02\x02\x02\u0543\u0546\x03" +
    "\x02\x02\x02\u0544\u0542\x03\x02\x02\x02\u0544\u0545\x03\x02\x02\x02\u0545" +
    "\u0547\x03\x02\x02\x02\u0546\u0544\x03\x02\x02\x02\u0547\u0548\x05\u0118" +
    "\x8D\x02\u0548\u0549\x07d\x02\x02\u0549\u054A\x07d\x02\x02\u054A\xC1\x03" +
    "\x02\x02\x02\u054B\u0550\x05\xC4c\x02\u054C\u0550\x05\xD6l\x02\u054D\u0550" +
    "\x05\xDAn\x02\u054E\u0550\x05\xE8u\x02\u054F\u054B\x03\x02\x02\x02\u054F" +
    "\u054C\x03\x02\x02\x02\u054F\u054D\x03\x02\x02\x02\u054F\u054E\x03\x02" +
    "\x02\x02\u0550\xC3\x03\x02\x02\x02\u0551\u0554\x05\xC6d\x02\u0552\u0554" +
    "\x05\xCAf\x02\u0553\u0551\x03\x02\x02\x02\u0553\u0552\x03\x02\x02\x02" +
    "\u0554\xC5\x03\x02\x02\x02\u0555\u0556\x05\xC8e\x02\u0556\u0557\x05\u0118" +
    "\x8D\x02\u0557\u0558\x05n8\x02\u0558\u055B\x05\u0118\x8D\x02\u0559\u055C" +
    "\x05\x12\n\x02\u055A\u055C\x05$\x13\x02\u055B\u0559\x03\x02\x02\x02\u055B" +
    "\u055A\x03\x02\x02\x02\u055C\xC7\x03\x02\x02\x02\u055D\u0560\t\x04\x02" +
    "\x02\u055E\u0560\t\x04\x02\x02\u055F\u055D\x03\x02\x02\x02\u055F\u055E" +
    "\x03\x02\x02\x02\u0560\u0563\x03\x02\x02\x02\u0561\u0564\t\f\x02\x02\u0562" +
    "\u0564\t\f\x02\x02\u0563\u0561\x03\x02\x02\x02\u0563\u0562\x03\x02\x02" +
    "\x02\u0564\u0567\x03\x02\x02\x02\u0565\u0568\t\x14\x02\x02\u0566\u0568" +
    "\t\x14\x02\x02\u0567\u0565\x03\x02\x02\x02\u0567\u0566\x03\x02\x02\x02" +
    "\u0568\u056B\x03\x02\x02\x02\u0569\u056C\t\b\x02\x02\u056A\u056C\t\b\x02" +
    "\x02\u056B\u0569\x03\x02\x02\x02\u056B\u056A\x03\x02\x02\x02\u056C\u056F" +
    "\x03\x02\x02\x02\u056D\u0570\t\x03\x02\x02\u056E\u0570\t\x03\x02\x02\u056F" +
    "\u056D\x03\x02\x02\x02\u056F\u056E\x03\x02\x02\x02\u0570\u0573\x03\x02" +
    "\x02\x02\u0571\u0574\t\b\x02\x02\u0572\u0574\t\b\x02\x02\u0573\u0571\x03" +
    "\x02\x02\x02\u0573\u0572\x03\x02\x02\x02\u0574\u0577\x03\x02\x02\x02\u0575" +
    "\u0578\t\v\x02\x02\u0576\u0578\t\v\x02\x02\u0577\u0575\x03\x02\x02\x02" +
    "\u0577\u0576\x03\x02\x02\x02\u0578\u057B\x03\x02\x02\x02\u0579\u057C\t" +
    "\b\x02\x02\u057A\u057C\t\b\x02\x02\u057B\u0579\x03\x02\x02\x02\u057B\u057A" +
    "\x03\x02\x02\x02\u057C\u057F\x03\x02\x02\x02\u057D\u0580\t\x05\x02\x02" +
    "\u057E\u0580\t\x05\x02\x02\u057F\u057D\x03\x02\x02\x02\u057F\u057E\x03" +
    "\x02\x02\x02\u0580\u0583\x03\x02\x02\x02\u0581\u0584\t\x03\x02\x02\u0582" +
    "\u0584\t\x03\x02\x02\u0583\u0581\x03\x02\x02\x02\u0583\u0582\x03\x02\x02" +
    "\x02\u0584\u0587\x03\x02\x02\x02\u0585\u0588\t\n\x02\x02\u0586\u0588\t" +
    "\n\x02\x02\u0587\u0585\x03\x02\x02\x02\u0587\u0586\x03\x02\x02\x02\u0588" +
    "\u058B\x03\x02\x02\x02\u0589\u058C\t\v\x02\x02\u058A\u058C\t\v\x02\x02" +
    "\u058B\u0589\x03\x02\x02\x02\u058B\u058A\x03\x02\x02\x02\u058C\u058F\x03" +
    "\x02\x02\x02\u058D\u0590\t\x02\x02\x02\u058E\u0590\t\x02\x02\x02\u058F" +
    "\u058D\x03\x02\x02\x02\u058F\u058E\x03\x02\x02\x02\u0590\u0593\x03\x02" +
    "\x02\x02\u0591\u0594\t\v\x02\x02\u0592\u0594\t\v\x02\x02\u0593\u0591\x03" +
    "\x02\x02\x02\u0593\u0592\x03\x02\x02\x02\u0594\u0597\x03\x02\x02\x02\u0595" +
    "\u0598\t\t\x02\x02\u0596\u0598\t\t\x02\x02\u0597\u0595\x03\x02\x02\x02" +
    "\u0597\u0596\x03\x02\x02\x02\u0598\u059B\x03\x02\x02\x02\u0599\u059C\t" +
    "\n\x02\x02\u059A\u059C\t\n\x02\x02\u059B\u0599\x03\x02\x02\x02\u059B\u059A" +
    "\x03\x02\x02\x02\u059C\u059F\x03\x02\x02\x02\u059D\u05A0\t\b\x02\x02\u059E" +
    "\u05A0\t\b\x02\x02\u059F\u059D\x03\x02\x02\x02\u059F\u059E\x03\x02\x02" +
    "\x02\u05A0\u05A3\x03\x02\x02\x02\u05A1\u05A4\t\x04\x02\x02\u05A2\u05A4" +
    "\t\x04\x02\x02\u05A3\u05A1\x03\x02\x02\x02\u05A3\u05A2\x03\x02\x02\x02" +
    "\u05A4\xC9\x03\x02\x02\x02\u05A5\u05A6\x05\xCCg\x02\u05A6\u05A7\x05\u0118" +
    "\x8D\x02\u05A7\u05A8\x05n8\x02\u05A8\u05AB\x05\u0118\x8D\x02\u05A9\u05AC" +
    "\x05\xCEh\x02\u05AA\u05AC\x05\xD0i\x02\u05AB\u05A9\x03\x02\x02\x02\u05AB" +
    "\u05AA\x03\x02\x02\x02\u05AC\xCB\x03\x02\x02\x02\u05AD\u05B0\t\x04\x02" +
    "\x02\u05AE\u05B0\t\x04\x02\x02\u05AF\u05AD\x03\x02\x02\x02\u05AF\u05AE" +
    "\x03\x02\x02\x02\u05B0\u05B3\x03\x02\x02\x02\u05B1\u05B4\t\f\x02\x02\u05B2" +
    "\u05B4\t\f\x02\x02\u05B3\u05B1\x03\x02\x02\x02\u05B3\u05B2\x03\x02\x02" +
    "\x02\u05B4\u05B7\x03\x02\x02\x02\u05B5\u05B8\t\x14\x02\x02\u05B6\u05B8" +
    "\t\x14\x02\x02\u05B7\u05B5\x03\x02\x02\x02\u05B7\u05B6\x03\x02\x02\x02" +
    "\u05B8\u05BB\x03\x02\x02\x02\u05B9\u05BC\t\b\x02\x02\u05BA\u05BC\t\b\x02" +
    "\x02\u05BB\u05B9\x03\x02\x02\x02\u05BB\u05BA\x03\x02\x02\x02\u05BC\u05BF" +
    "\x03\x02\x02\x02\u05BD\u05C0\t\x03\x02\x02\u05BE\u05C0\t\x03\x02\x02\u05BF" +
    "\u05BD\x03\x02\x02\x02\u05BF\u05BE\x03\x02\x02\x02\u05C0\u05C3\x03\x02" +
    "\x02\x02\u05C1\u05C4\t\b\x02\x02\u05C2\u05C4\t\b\x02\x02\u05C3\u05C1\x03" +
    "\x02\x02\x02\u05C3\u05C2\x03\x02\x02\x02\u05C4\u05C7\x03\x02\x02\x02\u05C5" +
    "\u05C8\t\v\x02\x02\u05C6\u05C8\t\v\x02\x02\u05C7\u05C5\x03\x02\x02\x02" +
    "\u05C7\u05C6\x03\x02\x02\x02\u05C8\u05CB\x03\x02\x02\x02\u05C9\u05CC\t" +
    "\b\x02\x02\u05CA\u05CC\t\b\x02\x02\u05CB\u05C9\x03\x02\x02\x02\u05CB\u05CA" +
    "\x03\x02\x02\x02\u05CC\u05CF\x03\x02\x02\x02\u05CD\u05D0\t\x05\x02\x02" +
    "\u05CE\u05D0\t\x05\x02\x02\u05CF\u05CD\x03\x02\x02\x02\u05CF\u05CE\x03" +
    "\x02\x02\x02\u05D0\u05D3\x03\x02\x02\x02\u05D1\u05D4\t\x03\x02\x02\u05D2" +
    "\u05D4\t\x03\x02\x02\u05D3\u05D1\x03\x02\x02\x02\u05D3\u05D2\x03\x02\x02" +
    "\x02\u05D4\u05D7\x03\x02\x02\x02\u05D5\u05D8\t\n\x02\x02\u05D6\u05D8\t" +
    "\n\x02\x02\u05D7\u05D5\x03\x02\x02\x02\u05D7\u05D6\x03\x02\x02\x02\u05D8" +
    "\u05DB\x03\x02\x02\x02\u05D9\u05DC\t\v\x02\x02\u05DA\u05DC\t\v\x02\x02" +
    "\u05DB\u05D9\x03\x02\x02\x02\u05DB\u05DA\x03\x02\x02\x02\u05DC\u05DF\x03" +
    "\x02\x02\x02\u05DD\u05E0\t\x02\x02\x02\u05DE\u05E0\t\x02\x02\x02\u05DF" +
    "\u05DD\x03\x02\x02\x02\u05DF\u05DE\x03\x02\x02\x02\u05E0\u05E3\x03\x02" +
    "\x02\x02\u05E1\u05E4\t\v\x02\x02\u05E2\u05E4\t\v\x02\x02\u05E3\u05E1\x03" +
    "\x02\x02\x02\u05E3\u05E2\x03\x02\x02\x02\u05E4\u05E7\x03\x02\x02\x02\u05E5" +
    "\u05E8\t\t\x02\x02\u05E6\u05E8\t\t\x02\x02\u05E7\u05E5\x03\x02\x02\x02" +
    "\u05E7\u05E6\x03\x02\x02\x02\u05E8\u05EB\x03\x02\x02\x02\u05E9\u05EC\t" +
    "\n\x02";
  private static readonly _serializedATNSegment3: string =
    "\x02\u05EA\u05EC\t\n\x02\x02\u05EB\u05E9\x03\x02\x02\x02\u05EB\u05EA\x03" +
    "\x02\x02\x02\u05EC\xCD\x03\x02\x02\x02\u05ED\u05F0\x05\xD2j\x02\u05EE" +
    "\u05F0\x05\xD4k\x02\u05EF\u05ED\x03\x02\x02\x02\u05EF\u05EE\x03\x02\x02" +
    "\x02\u05F0\xCF\x03\x02\x02\x02\u05F1\u05F2\x07\x0F\x02\x02\u05F2\u05F3" +
    "\x05\u0118\x8D\x02\u05F3\u05F9\x05\xCEh\x02\u05F4\u05F5\x05\u011A\x8E" +
    "\x02\u05F5\u05F6\x05\xCEh\x02\u05F6\u05F8\x03\x02\x02\x02\u05F7\u05F4" +
    "\x03\x02\x02\x02\u05F8\u05FB\x03\x02\x02\x02\u05F9\u05F7\x03\x02\x02\x02" +
    "\u05F9\u05FA\x03\x02\x02\x02\u05FA\u05FC\x03\x02\x02\x02\u05FB\u05F9\x03" +
    "\x02\x02\x02\u05FC\u05FD\x05\u0118\x8D\x02\u05FD\u05FE\x07\x10\x02\x02" +
    "\u05FE\xD1\x03\x02\x02\x02\u05FF\u0602\t\x13\x02\x02\u0600\u0602\t\x13" +
    "\x02\x02\u0601\u05FF\x03\x02\x02\x02\u0601\u0600\x03\x02\x02\x02\u0602" +
    "\u0605\x03\x02\x02\x02\u0603\u0606\t\x06\x02\x02\u0604\u0606\t\x06\x02" +
    "\x02\u0605\u0603\x03\x02\x02\x02\u0605\u0604\x03\x02\x02\x02\u0606\u0609" +
    "\x03\x02\x02\x02\u0607\u060A\t\b\x02\x02\u0608\u060A\t\b\x02\x02\u0609" +
    "\u0607\x03\x02\x02\x02\u0609\u0608\x03\x02\x02\x02\u060A\u060D\x03\x02" +
    "\x02\x02\u060B\u060E\t\x07\x02\x02\u060C\u060E\t\x07\x02\x02\u060D\u060B" +
    "\x03\x02\x02\x02\u060D\u060C\x03\x02\x02\x02\u060E\u0611\x03\x02\x02\x02" +
    "\u060F\u0612\t\b\x02\x02\u0610\u0612\t\b\x02\x02\u0611\u060F\x03\x02\x02" +
    "\x02\u0611\u0610\x03\x02\x02\x02\u0612\u0615\x03\x02\x02\x02\u0613\u0616" +
    "\t\v\x02\x02\u0614\u0616\t\v\x02\x02\u0615\u0613\x03\x02\x02\x02\u0615" +
    "\u0614\x03\x02\x02\x02\u0616\u0619\x03\x02\x02\x02\u0617\u061A\t\b\x02" +
    "\x02\u0618\u061A\t\b\x02\x02\u0619\u0617\x03\x02\x02\x02\u0619\u0618\x03" +
    "\x02\x02\x02\u061A\u061D\x03\x02\x02\x02\u061B\u061E\t\x15\x02\x02\u061C" +
    "\u061E\t\x15\x02\x02\u061D\u061B\x03\x02\x02\x02\u061D\u061C\x03\x02\x02" +
    "\x02\u061E\u0621\x03\x02\x02\x02\u061F\u0622\t\f\x02\x02\u0620\u0622\t" +
    "\f\x02\x02\u0621\u061F\x03\x02\x02\x02\u0621\u0620\x03\x02\x02\x02\u0622" +
    "\xD3\x03\x02\x02\x02\u0623\u0626\t\x04\x02\x02\u0624\u0626\t\x04\x02\x02" +
    "\u0625\u0623\x03\x02\x02\x02\u0625\u0624\x03\x02\x02\x02\u0626\u0629\x03" +
    "\x02\x02\x02\u0627\u062A\t\f\x02\x02\u0628\u062A\t\f\x02\x02\u0629\u0627" +
    "\x03\x02\x02\x02\u0629\u0628\x03\x02\x02\x02\u062A\u062D\x03\x02\x02\x02" +
    "\u062B\u062E\t\x14\x02\x02\u062C\u062E\t\x14\x02\x02\u062D\u062B\x03\x02" +
    "\x02\x02\u062D\u062C\x03\x02\x02\x02\u062E\u0631\x03\x02\x02\x02\u062F" +
    "\u0632\t\b\x02\x02\u0630\u0632\t\b\x02\x02\u0631\u062F\x03\x02\x02\x02" +
    "\u0631\u0630\x03\x02\x02\x02\u0632\u0635\x03\x02\x02\x02\u0633\u0636\t" +
    "\x03\x02\x02\u0634\u0636\t\x03\x02\x02\u0635\u0633\x03\x02\x02\x02\u0635" +
    "\u0634\x03\x02\x02\x02\u0636\u0639\x03\x02\x02\x02\u0637\u063A\t\f\x02" +
    "\x02\u0638\u063A\t\f\x02\x02\u0639\u0637\x03\x02\x02\x02\u0639\u0638\x03" +
    "\x02\x02\x02\u063A\u063D\x03\x02\x02\x02\u063B\u063E\t\x04\x02\x02\u063C" +
    "\u063E\t\x04\x02\x02\u063D\u063B\x03\x02\x02\x02\u063D\u063C\x03\x02\x02" +
    "\x02\u063E\xD5\x03\x02\x02\x02\u063F\u0640\x05\xD8m\x02\u0640\u0641\x05" +
    "\u0118\x8D\x02\u0641\u0642\x05n8\x02\u0642\u0645\x05\u0118\x8D\x02\u0643" +
    "\u0646\x05\x12\n\x02\u0644\u0646\x05$\x13\x02\u0645\u0643\x03\x02\x02" +
    "\x02\u0645\u0644\x03\x02\x02\x02\u0646\xD7\x03\x02\x02\x02\u0647\u064A" +
    "\t\x07\x02\x02\u0648\u064A\t\x07\x02\x02\u0649\u0647\x03\x02\x02\x02\u0649" +
    "\u0648\x03\x02\x02\x02\u064A\u064D\x03\x02\x02\x02\u064B\u064E\t\x05\x02" +
    "\x02\u064C\u064E\t\x05\x02\x02\u064D\u064B\x03\x02\x02\x02\u064D\u064C" +
    "\x03\x02\x02\x02\u064E\u0651\x03\x02\x02\x02\u064F\u0652\t\x04\x02\x02" +
    "\u0650\u0652\t\x04\x02\x02\u0651\u064F\x03\x02\x02\x02\u0651\u0650\x03" +
    "\x02\x02\x02\u0652\u0655\x03\x02\x02\x02\u0653\u0656\t\t\x02\x02\u0654" +
    "\u0656\t\t\x02\x02\u0655\u0653\x03\x02\x02\x02\u0655\u0654\x03\x02\x02" +
    "\x02\u0656\u0659\x03\x02\x02\x02\u0657\u065A\t\x0E\x02\x02\u0658\u065A" +
    "\t\x0E\x02\x02\u0659\u0657\x03\x02\x02\x02\u0659\u0658\x03\x02\x02\x02" +
    "\u065A\u065D\x03\x02\x02\x02\u065B\u065E\t\f\x02\x02\u065C\u065E\t\f\x02" +
    "\x02\u065D\u065B\x03\x02\x02\x02\u065D\u065C\x03\x02\x02\x02\u065E\u0661" +
    "\x03\x02\x02\x02\u065F\u0662\t\b\x02\x02\u0660\u0662\t\b\x02\x02\u0661" +
    "\u065F\x03\x02\x02\x02\u0661\u0660\x03\x02\x02\x02\u0662\u0665\x03\x02" +
    "\x02\x02\u0663\u0666\t\x04\x02\x02\u0664\u0666\t\x04\x02\x02\u0665\u0663" +
    "\x03\x02\x02\x02\u0665\u0664\x03\x02\x02\x02\u0666\xD9\x03\x02\x02\x02" +
    "\u0667\u0668\x05\xDCo\x02\u0668\u0669\x05\u0118\x8D\x02\u0669\u066A\x05" +
    "j6\x02\u066A\u066D\x05\u0118\x8D\x02\u066B\u066E\x05\xDEp\x02\u066C\u066E" +
    "\x05\xE0q\x02\u066D\u066B\x03\x02\x02\x02\u066D\u066C\x03\x02\x02\x02" +
    "\u066E\xDB\x03\x02\x02\x02\u066F\u0672\t\f\x02\x02\u0670\u0672\t\f\x02" +
    "\x02\u0671\u066F\x03\x02\x02\x02\u0671\u0670\x03\x02\x02\x02\u0672\u0675" +
    "\x03\x02\x02\x02\u0673\u0676\t\x14\x02\x02\u0674\u0676\t\x14\x02\x02\u0675" +
    "\u0673\x03\x02\x02\x02\u0675\u0674\x03\x02\x02\x02\u0676\u0679\x03\x02" +
    "\x02\x02\u0677\u067A\t\x14\x02\x02\u0678\u067A\t\x14\x02\x02\u0679\u0677" +
    "\x03\x02\x02\x02\u0679\u0678\x03\x02\x02\x02\u067A\u067D\x03\x02\x02\x02" +
    "\u067B\u067E\t\f\x02\x02\u067C\u067E\t\f\x02\x02\u067D\u067B\x03\x02\x02" +
    "\x02\u067D\u067C\x03\x02\x02\x02\u067E\u0681\x03\x02\x02\x02\u067F\u0682" +
    "\t\x0F\x02\x02\u0680\u0682\t\x0F\x02\x02\u0681\u067F\x03\x02\x02\x02\u0681" +
    "\u0680\x03\x02\x02\x02\u0682\u0685\x03\x02\x02\x02\u0683\u0686\t\v\x02" +
    "\x02\u0684\u0686\t\v\x02\x02\u0685\u0683\x03\x02\x02\x02\u0685\u0684\x03" +
    "\x02\x02\x02\u0686\u0689\x03\x02\x02\x02\u0687\u068A\t\b\x02\x02\u0688" +
    "\u068A\t\b\x02\x02\u0689\u0687\x03\x02\x02\x02\u0689\u0688\x03\x02\x02" +
    "\x02\u068A\u068D\x03\x02\x02\x02\u068B\u068E\t\x15\x02\x02\u068C\u068E" +
    "\t\x15\x02\x02\u068D\u068B\x03\x02\x02\x02\u068D\u068C\x03\x02\x02\x02" +
    "\u068E\u0691\x03\x02\x02\x02\u068F\u0692\t\f\x02\x02\u0690\u0692\t\f\x02" +
    "\x02\u0691\u068F\x03\x02\x02\x02\u0691\u0690\x03\x02\x02\x02\u0692\u0695" +
    "\x03\x02\x02\x02\u0693\u0696\t\v\x02\x02\u0694\u0696\t\v\x02\x02\u0695" +
    "\u0693\x03\x02\x02\x02\u0695\u0694\x03\x02\x02\x02\u0696\u0699\x03\x02" +
    "\x02\x02\u0697\u069A\t\b\x02\x02\u0698\u069A\t\b\x02\x02\u0699\u0697\x03" +
    "\x02\x02\x02\u0699\u0698\x03\x02\x02\x02\u069A\u069D\x03\x02\x02\x02\u069B" +
    "\u069E\t\x07\x02\x02\u069C\u069E\t\x07\x02\x02\u069D\u069B\x03\x02\x02" +
    "\x02\u069D\u069C\x03\x02\x02\x02\u069E\u06A1\x03\x02\x02\x02\u069F\u06A2" +
    "\t\f\x02\x02\u06A0\u06A2\t\f\x02\x02\u06A1\u069F\x03\x02\x02\x02\u06A1" +
    "\u06A0\x03\x02\x02\x02\u06A2\xDD\x03\x02\x02\x02\u06A3\u06A8\x05\u012C" +
    "\x97\x02\u06A4\u06A5\x05\xE2r\x02\u06A5\u06A6\x05\xE4s\x02\u06A6\u06A7" +
    "\x05\xE6t\x02\u06A7\u06A9\x03\x02\x02\x02\u06A8\u06A4\x03\x02\x02\x02" +
    "\u06A8\u06A9\x03\x02\x02\x02\u06A9\u06AA\x03\x02\x02\x02\u06AA\u06AB\x05" +
    "\u012C\x97\x02\u06AB\xDF\x03\x02\x02\x02\u06AC\u06AD\x07\x0F\x02\x02\u06AD" +
    "\u06AE\x05\u0118\x8D\x02\u06AE\u06B4\x05\xDEp\x02\u06AF\u06B0\x05\u011A" +
    "\x8E\x02\u06B0\u06B1\x05\xDEp\x02\u06B1\u06B3\x03\x02\x02\x02\u06B2\u06AF" +
    "\x03\x02\x02\x02\u06B3\u06B6\x03\x02\x02\x02\u06B4\u06B2\x03\x02\x02\x02" +
    "\u06B4\u06B5\x03\x02\x02\x02\u06B5\u06B7\x03\x02\x02\x02\u06B6\u06B4\x03" +
    "\x02\x02\x02\u06B7\u06B8\x05\u0118\x8D\x02\u06B8\u06B9\x07\x10\x02\x02" +
    "\u06B9\xE1\x03\x02\x02\x02\u06BA\u06BB\x05\u0136\x9C\x02\u06BB\u06BC\x05" +
    "\u0132\x9A\x02\u06BC\u06BD\x05\u0132\x9A\x02\u06BD\u06BE\x05\u0132\x9A" +
    "\x02\u06BE\xE3\x03\x02\x02\x02\u06BF\u06C0\x07\x17\x02\x02\u06C0\u06D8" +
    "\x07\x18\x02\x02\u06C1\u06C2\x07\x17\x02\x02\u06C2\u06D8\x07\x19\x02\x02" +
    "\u06C3\u06C4\x07\x17\x02\x02\u06C4\u06D8\x07\x1A\x02\x02\u06C5\u06C6\x07" +
    "\x17\x02\x02\u06C6\u06D8\x07\x1B\x02\x02\u06C7\u06C8\x07\x17\x02\x02\u06C8" +
    "\u06D8\x07\x1C\x02\x02\u06C9\u06CA\x07\x17\x02\x02\u06CA\u06D8\x07\x1D" +
    "\x02\x02\u06CB\u06CC\x07\x17\x02\x02\u06CC\u06D8\x07\x1E\x02\x02\u06CD" +
    "\u06CE\x07\x17\x02\x02\u06CE\u06D8\x07\x1F\x02\x02\u06CF\u06D0\x07\x17" +
    "\x02\x02\u06D0\u06D8\x07 \x02\x02\u06D1\u06D2\x07\x18\x02\x02\u06D2\u06D8" +
    "\x07\x17\x02\x02\u06D3\u06D4\x07\x18\x02\x02\u06D4\u06D8\x07\x18\x02\x02" +
    "\u06D5\u06D6\x07\x18\x02\x02\u06D6\u06D8\x07\x19\x02\x02\u06D7\u06BF\x03" +
    "\x02\x02\x02\u06D7\u06C1\x03\x02\x02\x02\u06D7\u06C3\x03\x02\x02\x02\u06D7" +
    "\u06C5\x03\x02\x02\x02\u06D7\u06C7\x03\x02\x02\x02\u06D7\u06C9\x03\x02" +
    "\x02\x02\u06D7\u06CB\x03\x02\x02\x02\u06D7\u06CD\x03\x02\x02\x02\u06D7" +
    "\u06CF\x03\x02\x02\x02\u06D7\u06D1\x03\x02\x02\x02\u06D7\u06D3\x03\x02" +
    "\x02\x02\u06D7\u06D5\x03\x02\x02\x02\u06D8\xE5\x03\x02\x02\x02\u06D9\u06DA" +
    "\x07\x17\x02\x02\u06DA\u0718\x07\x18\x02\x02\u06DB\u06DC\x07\x17\x02\x02" +
    "\u06DC\u0718\x07\x19\x02\x02\u06DD\u06DE\x07\x17\x02\x02\u06DE\u0718\x07" +
    "\x1A\x02\x02\u06DF\u06E0\x07\x17\x02\x02\u06E0\u0718\x07\x1B\x02\x02\u06E1" +
    "\u06E2\x07\x17\x02\x02\u06E2\u0718\x07\x1C\x02\x02\u06E3\u06E4\x07\x17" +
    "\x02\x02\u06E4\u0718\x07\x1D\x02\x02\u06E5\u06E6\x07\x17\x02\x02\u06E6" +
    "\u0718\x07\x1E\x02\x02\u06E7\u06E8\x07\x17\x02\x02\u06E8\u0718\x07\x1F" +
    "\x02\x02\u06E9\u06EA\x07\x17\x02\x02\u06EA\u0718\x07 \x02\x02\u06EB\u06EC" +
    "\x07\x18\x02\x02\u06EC\u0718\x07\x17\x02\x02\u06ED\u06EE\x07\x18\x02\x02" +
    "\u06EE\u0718\x07\x18\x02\x02\u06EF\u06F0\x07\x18\x02\x02\u06F0\u0718\x07" +
    "\x19\x02\x02\u06F1\u06F2\x07\x18\x02\x02\u06F2\u0718\x07\x1A\x02\x02\u06F3" +
    "\u06F4\x07\x18\x02\x02\u06F4\u0718\x07\x1B\x02\x02\u06F5\u06F6\x07\x18" +
    "\x02\x02\u06F6\u0718\x07\x1C\x02\x02\u06F7\u06F8\x07\x18\x02\x02\u06F8" +
    "\u0718\x07\x1D\x02\x02\u06F9\u06FA\x07\x18\x02\x02\u06FA\u0718\x07\x1E" +
    "\x02\x02\u06FB\u06FC\x07\x18\x02\x02\u06FC\u0718\x07\x1F\x02\x02\u06FD" +
    "\u06FE\x07\x18\x02\x02\u06FE\u0718\x07 \x02\x02\u06FF\u0700\x07\x19\x02" +
    "\x02\u0700\u0718\x07\x17\x02\x02\u0701\u0702\x07\x19\x02\x02\u0702\u0718" +
    "\x07\x18\x02\x02\u0703\u0704\x07\x19\x02\x02\u0704\u0718\x07\x19\x02\x02" +
    "\u0705\u0706\x07\x19\x02\x02\u0706\u0718\x07\x1A\x02\x02\u0707\u0708\x07" +
    "\x19\x02\x02\u0708\u0718\x07\x1B\x02\x02\u0709\u070A\x07\x19\x02\x02\u070A" +
    "\u0718\x07\x1C\x02\x02\u070B\u070C\x07\x19\x02\x02\u070C\u0718\x07\x1D" +
    "\x02\x02\u070D\u070E\x07\x19\x02\x02\u070E\u0718\x07\x1E\x02\x02\u070F" +
    "\u0710\x07\x19\x02\x02\u0710\u0718\x07\x1F\x02\x02\u0711\u0712\x07\x19" +
    "\x02\x02\u0712\u0718\x07 \x02\x02\u0713\u0714\x07\x1A\x02\x02\u0714\u0718" +
    "\x07\x17\x02\x02\u0715\u0716\x07\x1A\x02\x02\u0716\u0718\x07\x18\x02\x02" +
    "\u0717\u06D9\x03\x02\x02\x02\u0717\u06DB\x03\x02\x02\x02\u0717\u06DD\x03" +
    "\x02\x02\x02\u0717\u06DF\x03\x02\x02\x02\u0717\u06E1\x03\x02\x02\x02\u0717" +
    "\u06E3\x03\x02\x02\x02\u0717\u06E5\x03\x02\x02\x02\u0717\u06E7\x03\x02" +
    "\x02\x02\u0717\u06E9\x03\x02\x02\x02\u0717\u06EB\x03\x02\x02\x02\u0717" +
    "\u06ED\x03\x02\x02\x02\u0717\u06EF\x03\x02\x02\x02\u0717\u06F1\x03\x02" +
    "\x02\x02\u0717\u06F3\x03\x02\x02\x02\u0717\u06F5\x03\x02\x02\x02\u0717" +
    "\u06F7\x03\x02\x02\x02\u0717\u06F9\x03\x02\x02\x02\u0717\u06FB\x03\x02" +
    "\x02\x02\u0717\u06FD\x03\x02\x02\x02\u0717\u06FF\x03\x02\x02\x02\u0717" +
    "\u0701\x03\x02\x02\x02\u0717\u0703\x03\x02\x02\x02\u0717\u0705\x03\x02" +
    "\x02\x02\u0717\u0707\x03\x02\x02\x02\u0717\u0709\x03\x02\x02\x02\u0717" +
    "\u070B\x03\x02\x02\x02\u0717\u070D\x03\x02\x02\x02\u0717\u070F\x03\x02" +
    "\x02\x02\u0717\u0711\x03\x02\x02\x02\u0717\u0713\x03\x02\x02\x02\u0717" +
    "\u0715\x03\x02\x02\x02\u0718\xE7\x03\x02\x02\x02\u0719\u071A\x05\xEAv" +
    "\x02\u071A\u071B\x05\u0118\x8D\x02\u071B\u071C\x05n8\x02\u071C\u071D\x05" +
    "\u0118\x8D\x02\u071D\u071E\x05\xECw\x02\u071E\xE9\x03\x02\x02\x02\u071F" +
    "\u0722\t\x02\x02\x02\u0720\u0722\t\x02\x02\x02\u0721\u071F\x03\x02\x02" +
    "\x02\u0721\u0720\x03\x02\x02\x02\u0722\u0725\x03\x02\x02\x02\u0723\u0726" +
    "\t\x0F\x02\x02\u0724\u0726\t\x0F\x02\x02\u0725\u0723\x03\x02\x02\x02\u0725" +
    "\u0724\x03\x02\x02\x02\u0726\u0729\x03\x02\x02\x02\u0727\u072A\t\v\x02" +
    "\x02\u0728\u072A\t\v\x02\x02\u0729\u0727\x03\x02\x02\x02\u0729\u0728\x03" +
    "\x02\x02\x02\u072A\u072D\x03\x02\x02\x02\u072B\u072E\t\b\x02\x02\u072C" +
    "\u072E\t\b\x02\x02\u072D\u072B\x03\x02\x02\x02\u072D\u072C\x03\x02\x02" +
    "\x02\u072E\u0731\x03\x02\x02\x02\u072F\u0732\t\x15\x02\x02\u0730\u0732" +
    "\t\x15\x02\x02\u0731\u072F\x03\x02\x02\x02\u0731\u0730\x03\x02\x02\x02" +
    "\u0732\u0735\x03\x02\x02\x02\u0733\u0736\t\f\x02\x02\u0734\u0736\t\f\x02" +
    "\x02\u0735\u0733\x03\x02\x02\x02\u0735\u0734\x03\x02\x02\x02\u0736\xEB" +
    "\x03\x02\x02\x02\u0737\u073A\x05\xEEx\x02\u0738\u073A\x05\xF0y\x02\u0739" +
    "\u0737\x03\x02\x02\x02\u0739\u0738\x03\x02\x02\x02\u073A\xED\x03\x02\x02" +
    "\x02\u073B\u0741\x07\x18\x02\x02\u073C\u073D\t\v\x02\x02\u073D\u073E\t" +
    "\x06\x02\x02\u073E\u073F\t\t\x02\x02\u073F\u0741\t\f\x02\x02\u0740\u073B" +
    "\x03\x02\x02\x02\u0740\u073C\x03\x02\x02\x02\u0741\xEF\x03\x02\x02\x02" +
    "\u0742\u0749\x07\x17\x02\x02\u0743\u0744\t\x14\x02\x02\u0744\u0745\t\x02" +
    "\x02\x02\u0745\u0746\t\x0E\x02\x02\u0746\u0747\t\n\x02\x02\u0747\u0749" +
    "\t\f\x02\x02\u0748\u0742\x03\x02\x02\x02\u0748\u0743\x03\x02\x02\x02\u0749" +
    "\xF1\x03\x02\x02\x02\u074A\u074B\x07b\x02\x02\u074B\u074C\x07b\x02\x02" +
    "\u074C\u074D\x03\x02\x02\x02\u074D\u0750\x05\u0118\x8D\x02\u074E\u0751" +
    "\t\x07\x02\x02\u074F\u0751\t\x07\x02\x02\u0750\u074E\x03\x02\x02\x02\u0750" +
    "\u074F\x03\x02\x02\x02\u0751\u0752\x03\x02\x02\x02\u0752\u0753\x05\u0118" +
    "\x8D\x02\u0753\u075B\x05\xF4{\x02\u0754\u0755\x05\u0118\x8D\x02\u0755" +
    "\u0756\x07\x13\x02\x02\u0756\u0757\x05\u0118\x8D\x02\u0757\u0758\x05\xF4" +
    "{\x02\u0758\u075A\x03\x02\x02\x02\u0759\u0754\x03\x02\x02\x02\u075A\u075D" +
    "\x03\x02\x02\x02\u075B\u0759\x03\x02\x02\x02\u075B\u075C\x03\x02\x02\x02" +
    "\u075C\u075E\x03\x02\x02\x02\u075D\u075B\x03\x02\x02\x02\u075E\u075F\x05" +
    "\u0118\x8D\x02\u075F\u0760\x07d\x02\x02\u0760\u0761\x07d\x02\x02\u0761" +
    "\xF3\x03\x02\x02\x02\u0762\u0767\x05\xF6|\x02\u0763\u0767\x05\xD6l\x02" +
    "\u0764\u0767\x05\xDAn\x02\u0765\u0767\x05\xE8u\x02\u0766\u0762\x03\x02" +
    "\x02\x02\u0766\u0763\x03\x02\x02\x02\u0766\u0764\x03\x02\x02\x02\u0766" +
    "\u0765\x03\x02\x02\x02\u0767\xF5\x03\x02\x02\x02\u0768\u0769\x05\x1E\x10" +
    "\x02\u0769\u0784\x05\u0118\x8D\x02\u076A\u076B\x05f4\x02\u076B\u076C\x05" +
    "\u0118\x8D\x02\u076C\u076D\x05\x12\n\x02\u076D\u0785\x03\x02\x02\x02\u076E" +
    "\u076F\x05h5\x02\u076F\u0770\x05\u0118\x8D\x02\u0770\u0771\x07\n\x02\x02" +
    "\u0771\u0772\x05\u0106\x84\x02\u0772\u0785\x03\x02\x02\x02\u0773\u0774" +
    "\x05l7\x02\u0774\u0777\x05\u0118\x8D\x02\u0775\u0778\x05x=\x02\u0776\u0778" +
    "\x05z>\x02\u0777\u0775\x03\x02\x02\x02\u0777\u0776\x03\x02\x02\x02\u0778" +
    "\u0785\x03\x02\x02\x02\u0779\u077A\x05n8\x02\u077A\u077B\x05\u0118\x8D" +
    "\x02\u077B\u077C\x05\u010E\x88\x02\u077C\u0785\x03\x02\x02\x02\u077D\u077E" +
    "\x05\u0118\x8D\x02\u077E\u077F\x05j6\x02\u077F\u0782\x05\u0118\x8D\x02" +
    "\u0780\u0783\x05\xDEp\x02\u0781\u0783\x05\xE0q\x02\u0782\u0780\x03\x02" +
    "\x02\x02\u0782\u0781\x03\x02\x02\x02\u0783\u0785\x03\x02\x02\x02\u0784" +
    "\u076A\x03\x02\x02\x02\u0784\u076E\x03\x02\x02\x02\u0784\u0773\x03\x02" +
    "\x02\x02\u0784\u0779\x03\x02\x02\x02\u0784\u077D\x03\x02\x02\x02\u0785" +
    "\xF7\x03\x02\x02\x02\u0786\u0787\x07b\x02\x02\u0787\u0788\x07b\x02\x02" +
    "\u0788\u0789\x03\x02\x02\x02\u0789\u078A\x05\u0118\x8D\x02\u078A\u078B" +
    "\x07\x12\x02\x02\u078B\u078C\x05\u0118\x8D\x02\u078C\u0791\x05\xFA~\x02" +
    "\u078D\u0792\x05\xFC\x7F\x02\u078E\u078F\x05\u0118\x8D\x02\u078F\u0790" +
    "\x05\u0104\x83\x02\u0790\u0792\x03\x02\x02\x02\u0791\u078D\x03\x02\x02" +
    "\x02\u0791\u078E\x03\x02\x02\x02\u0791\u0792\x03\x02\x02\x02\u0792\u0793" +
    "\x03\x02\x02\x02\u0793\u0794\x05\u0118\x8D\x02\u0794\u0795\x07d\x02\x02" +
    "\u0795\u0796\x07d\x02\x02\u0796\xF9\x03\x02\x02\x02\u0797\u079A\t\x10" +
    "\x02\x02\u0798\u079A\t\x10\x02\x02\u0799\u0797\x03\x02\x02\x02\u0799\u0798" +
    "\x03\x02\x02\x02\u079A\u079D\x03\x02\x02\x02\u079B\u079E\t\b\x02\x02\u079C" +
    "\u079E\t\b\x02\x02\u079D\u079B\x03\x02\x02\x02\u079D\u079C\x03\x02\x02" +
    "\x02\u079E\u07A1\x03\x02\x02\x02\u079F\u07A2\t\n\x02\x02\u07A0\u07A2\t" +
    "\n\x02\x02\u07A1\u079F\x03\x02\x02\x02\u07A1\u07A0\x03\x02\x02\x02\u07A2" +
    "\u07A5\x03\x02\x02\x02\u07A3\u07A6\t\v\x02\x02\u07A4\u07A6\t\v\x02\x02" +
    "\u07A5\u07A3\x03\x02\x02\x02\u07A5\u07A4\x03\x02\x02\x02\u07A6\u07A9\x03" +
    "\x02\x02\x02\u07A7\u07AA\t\x05\x02\x02\u07A8\u07AA\t\x05\x02\x02\u07A9" +
    "\u07A7\x03\x02\x02\x02\u07A9\u07A8\x03\x02\x02\x02\u07AA\u07AD\x03\x02" +
    "\x02\x02\u07AB\u07AE\t\x06\x02\x02\u07AC\u07AE\t\x06\x02\x02\u07AD\u07AB" +
    "\x03\x02\x02\x02\u07AD\u07AC\x03\x02\x02\x02\u07AE\u07B1\x03\x02\x02\x02" +
    "\u07AF\u07B2\t\x12\x02\x02\u07B0\u07B2\t\x12\x02\x02\u07B1\u07AF\x03\x02" +
    "\x02\x02\u07B1\u07B0\x03\x02\x02\x02\u07B2\xFB\x03\x02\x02\x02\u07B3\u07B7" +
    "\x05\xFE\x80\x02\u07B4\u07B7\x05\u0100\x81\x02\u07B5\u07B7\x05\u0102\x82" +
    "\x02\u07B6\u07B3\x03\x02\x02\x02\u07B6\u07B4\x03\x02\x02\x02\u07B6\u07B5" +
    "\x03\x02\x02\x02\u07B7\xFD\x03\x02\x02\x02\u07B8\u07BB\t\x16\x02\x02\u07B9" +
    "\u07BC\t\x07\x02\x02\u07BA\u07BC\t\x07\x02\x02\u07BB\u07B9\x03\x02\x02" +
    "\x02\u07BB\u07BA\x03\x02\x02\x02\u07BC\u07BF\x03\x02\x02\x02\u07BD\u07C0" +
    "\t\b\x02\x02\u07BE\u07C0\t\b\x02\x02\u07BF\u07BD\x03\x02\x02\x02\u07BF" +
    "\u07BE\x03\x02\x02\x02\u07C0\u07C3\x03\x02\x02\x02\u07C1\u07C4\t\x03\x02" +
    "\x02\u07C2\u07C4\t\x03\x02\x02\u07C3\u07C1\x03\x02\x02\x02\u07C3\u07C2" +
    "\x03\x02\x02\x02\u07C4\xFF\x03\x02\x02\x02\u07C5\u07C8\t\x16\x02\x02\u07C6" +
    "\u07C9\t\x07\x02\x02\u07C7\u07C9\t\x07\x02\x02\u07C8\u07C6\x03\x02\x02" +
    "\x02\u07C8\u07C7\x03\x02\x02\x02\u07C9\u07CC\x03\x02\x02\x02\u07CA\u07CD" +
    "\t\x05\x02\x02\u07CB\u07CD\t\x05\x02\x02\u07CC\u07CA\x03\x02\x02\x02\u07CC" +
    "\u07CB\x03\x02\x02\x02\u07CD\u07D0\x03\x02\x02\x02\u07CE\u07D1\t\x04\x02" +
    "\x02\u07CF\u07D1\t\x04\x02\x02\u07D0\u07CE\x03\x02\x02\x02\u07D0\u07CF" +
    "\x03\x02\x02\x02\u07D1\u0101\x03\x02\x02\x02\u07D2\u07D5\t\x16\x02\x02" +
    "\u07D3\u07D6\t\x07\x02\x02\u07D4\u07D6\t\x07\x02\x02\u07D5\u07D3\x03\x02" +
    "\x02\x02\u07D5\u07D4\x03\x02\x02\x02\u07D6\u07D9\x03\x02\x02\x02\u07D7" +
    "\u07DA\t\x02\x02\x02\u07D8\u07DA\t\x02\x02\x02\u07D9\u07D7\x03\x02\x02" +
    "\x02\u07D9\u07D8\x03\x02\x02\x02\u07DA\u07DD\x03\x02\x02\x02\u07DB\u07DE" +
    "\t\x17\x02\x02\u07DC\u07DE\t\x17\x02\x02\u07DD\u07DB\x03\x02\x02\x02\u07DD" +
    "\u07DC\x03\x02\x02\x02\u07DE\u0103\x03\x02\x02\x02\u07DF\u07E0\x07\x0F" +
    "\x02\x02\u07E0\u07E1\x05\u0118\x8D\x02\u07E1\u07E2\x05\x02\x02\x02\u07E2" +
    "\u07E3\x05\u0118\x8D\x02\u07E3\u07E4\x07\x10\x02\x02\u07E4\u0105\x03\x02" +
    "\x02\x02\u07E5\u07E7\t\x18\x02\x02\u07E6\u07E5\x03\x02\x02\x02\u07E6\u07E7" +
    "\x03\x02\x02\x02\u07E7\u07EA\x03\x02\x02\x02\u07E8\u07EB\x05\u010C\x87" +
    "\x02\u07E9\u07EB\x05\u010A\x86\x02\u07EA\u07E8\x03\x02\x02\x02\u07EA\u07E9" +
    "\x03\x02\x02\x02\u07EB\u0107\x03\x02\x02\x02\u07EC\u07EF\x05\u013A\x9E" +
    "\x02\u07ED\u07EF\x05\u013C\x9F\x02\u07EE\u07EC\x03\x02\x02\x02\u07EE\u07ED" +
    "\x03\x02\x02\x02\u07EF\u07F0\x03\x02\x02\x02\u07F0\u07EE\x03\x02\x02\x02" +
    "\u07F0\u07F1\x03\x02\x02\x02\u07F1\u0109\x03\x02\x02\x02\u07F2\u07F6\x05" +
    "\u0136\x9C\x02\u07F3\u07F5\x05\u0132\x9A\x02\u07F4\u07F3\x03\x02\x02\x02" +
    "\u07F5\u07F8\x03\x02\x02\x02\u07F6\u07F4\x03\x02\x02\x02\u07F6\u07F7\x03" +
    "\x02\x02\x02\u07F7\u07FB\x03\x02\x02\x02\u07F8\u07F6\x03\x02\x02\x02\u07F9" +
    "\u07FB\x05\u0134\x9B\x02\u07FA\u07F2\x03\x02\x02\x02\u07FA\u07F9\x03\x02" +
    "\x02\x02\u07FB\u010B\x03\x02\x02\x02\u07FC\u07FD\x05\u010A\x86\x02\u07FD" +
    "\u07FF\x07\x15\x02\x02\u07FE\u0800\x05\u0132\x9A\x02\u07FF\u07FE\x03\x02" +
    "\x02\x02\u0800\u0801\x03\x02\x02\x02\u0801\u07FF\x03\x02\x02\x02\u0801" +
    "\u0802\x03\x02\x02\x02\u0802\u010D\x03\x02\x02\x02\u0803\u0806\x05\u0110" +
    "\x89\x02\u0804\u0806\x05\u0112\x8A\x02\u0805\u0803\x03\x02\x02\x02\u0805" +
    "\u0804\x03\x02\x02\x02\u0806\u010F\x03\x02\x02\x02\u0807\u080A\t\v\x02" +
    "\x02\u0808\u080A\t\v\x02\x02\u0809\u0807\x03\x02\x02\x02\u0809\u0808\x03" +
    "\x02\x02\x02\u080A\u080D\x03\x02\x02\x02\u080B\u080E\t\x06\x02\x02\u080C" +
    "\u080E\t\x06\x02\x02\u080D\u080B\x03\x02\x02\x02\u080D\u080C\x03\x02\x02" +
    "\x02\u080E\u0811\x03\x02\x02\x02\u080F\u0812\t\t\x02\x02\u0810\u0812\t" +
    "\t\x02\x02\u0811\u080F\x03\x02\x02\x02\u0811\u0810\x03\x02\x02\x02\u0812" +
    "\u0815\x03\x02\x02\x02\u0813\u0816\t\f\x02\x02\u0814\u0816\t\f\x02\x02" +
    "\u0815\u0813\x03\x02\x02\x02\u0815\u0814\x03\x02\x02\x02\u0816\u0111\x03" +
    "\x02\x02\x02\u0817\u081A\t\x14\x02\x02\u0818\u081A\t\x14\x02\x02\u0819" +
    "\u0817\x03\x02\x02\x02\u0819\u0818\x03\x02\x02\x02\u081A\u081D\x03\x02" +
    "\x02\x02\u081B\u081E\t\x02\x02\x02\u081C\u081E\t\x02\x02\x02\u081D\u081B" +
    "\x03\x02\x02\x02\u081D\u081C\x03\x02\x02\x02\u081E\u0821\x03\x02\x02\x02" +
    "\u081F\u0822\t\x0E\x02\x02\u0820\u0822\t\x0E\x02\x02\u0821\u081F\x03\x02" +
    "\x02\x02\u0821\u0820\x03\x02\x02\x02\u0822\u0825\x03\x02\x02\x02\u0823" +
    "\u0826\t\n\x02\x02\u0824\u0826\t\n\x02\x02\u0825\u0823\x03\x02\x02\x02" +
    "\u0825\u0824\x03\x02\x02\x02\u0826\u0829\x03\x02\x02\x02\u0827\u082A\t" +
    "\f\x02\x02\u0828\u082A\t\f\x02\x02\u0829\u0827\x03\x02\x02\x02\u0829\u0828" +
    "\x03\x02\x02\x02\u082A\u0113\x03\x02\x02\x02\u082B\u082F\x05\u0136\x9C" +
    "\x02\u082C\u082E\x05\u0132\x9A\x02\u082D\u082C\x03\x02\x02\x02\u082E\u0831" +
    "\x03\x02\x02\x02\u082F\u082D\x03\x02\x02\x02\u082F\u0830\x03\x02\x02\x02" +
    "\u0830\u0834\x03\x02\x02\x02\u0831\u082F\x03\x02\x02\x02\u0832\u0834\x05" +
    "\u0134\x9B\x02\u0833\u082B\x03\x02\x02\x02\u0833\u0832\x03\x02\x02\x02" +
    "\u0834\u0115\x03\x02\x02\x02\u0835\u0836\x05\u0136\x9C\x02\u0836\u0837" +
    "\x05\u0132\x9A\x02\u0837\u0838\x05\u0132\x9A\x02\u0838\u0839\x05\u0132" +
    "\x9A\x02\u0839\u083A\x05\u0132\x9A\x02\u083A\u0896\x05\u0132\x9A\x02\u083B" +
    "\u083C\x05\u0132\x9A\x02\u083C\u083D\x05\u0132\x9A\x02\u083D\u083E\x05" +
    "\u0132\x9A\x02\u083E\u083F\x05\u0132\x9A\x02\u083F\u0840\x05\u0132\x9A" +
    "\x02\u0840\u0841\x05\u0132\x9A\x02\u0841\u0842\x05\u0132\x9A\x02\u0842" +
    "\u0843\x05\u0132\x9A\x02\u0843\u0844\x05\u0132\x9A\x02\u0844\u0845\x05" +
    "\u0132\x9A\x02\u0845\u0846\x05\u0132\x9A\x02\u0846\u0847\x05\u0132\x9A" +
    "\x02\u0847\u0897\x03\x02\x02\x02\u0848\u0849\x05\u0132\x9A\x02\u0849\u084A" +
    "\x05\u0132\x9A\x02\u084A\u084B\x05\u0132\x9A\x02\u084B\u084C\x05\u0132" +
    "\x9A\x02\u084C\u084D\x05\u0132\x9A\x02\u084D\u084E\x05\u0132\x9A\x02\u084E" +
    "\u084F\x05\u0132\x9A\x02\u084F\u0850\x05\u0132\x9A\x02\u0850\u0851\x05" +
    "\u0132\x9A\x02\u0851\u0852\x05\u0132\x9A\x02\u0852\u0853\x05\u0132\x9A" +
    "\x02\u0853\u0897\x03\x02\x02\x02\u0854\u0855\x05\u0132\x9A\x02\u0855\u0856" +
    "\x05\u0132\x9A\x02\u0856\u0857\x05\u0132\x9A\x02\u0857\u0858\x05\u0132" +
    "\x9A\x02\u0858\u0859\x05\u0132\x9A\x02\u0859\u085A\x05\u0132\x9A\x02\u085A" +
    "\u085B\x05\u0132\x9A\x02\u085B\u085C\x05\u0132\x9A\x02\u085C\u085D\x05" +
    "\u0132\x9A\x02\u085D\u085E\x05\u0132\x9A\x02\u085E\u0897\x03\x02\x02\x02" +
    "\u085F\u0860\x05\u0132\x9A\x02\u0860\u0861\x05\u0132\x9A\x02\u0861\u0862" +
    "\x05\u0132\x9A\x02\u0862\u0863\x05\u0132\x9A\x02\u0863\u0864\x05\u0132" +
    "\x9A\x02\u0864\u0865\x05\u0132\x9A\x02\u0865\u0866\x05\u0132\x9A\x02\u0866" +
    "\u0867\x05\u0132\x9A\x02\u0867\u0868\x05\u0132\x9A\x02\u0868\u0897\x03" +
    "\x02\x02\x02\u0869\u086A\x05\u0132\x9A\x02\u086A\u086B\x05\u0132\x9A\x02" +
    "\u086B\u086C\x05\u0132\x9A\x02\u086C\u086D\x05\u0132\x9A\x02\u086D\u086E" +
    "\x05\u0132\x9A\x02\u086E\u086F\x05\u0132\x9A\x02\u086F\u0870\x05\u0132" +
    "\x9A\x02\u0870\u0871\x05\u0132\x9A\x02\u0871\u0897\x03\x02\x02\x02\u0872" +
    "\u0873\x05\u0132\x9A\x02\u0873\u0874\x05\u0132\x9A\x02\u0874\u0875\x05" +
    "\u0132\x9A\x02\u0875\u0876\x05\u0132\x9A\x02\u0876\u0877\x05\u0132\x9A" +
    "\x02\u0877\u0878\x05\u0132\x9A\x02\u0878\u0879\x05\u0132\x9A\x02\u0879" +
    "\u0897\x03\x02\x02\x02\u087A\u087B\x05\u0132\x9A\x02\u087B\u087C\x05\u0132" +
    "\x9A\x02\u087C\u087D\x05\u0132\x9A\x02\u087D\u087E\x05\u0132\x9A\x02\u087E" +
    "\u087F\x05\u0132\x9A\x02\u087F\u0880\x05\u0132\x9A\x02\u0880\u0897\x03" +
    "\x02\x02\x02\u0881\u0882\x05\u0132\x9A\x02\u0882\u0883\x05\u0132\x9A\x02" +
    "\u0883\u0884\x05\u0132\x9A\x02\u0884\u0885\x05\u0132\x9A\x02\u0885\u0886" +
    "\x05\u0132\x9A\x02\u0886\u0897\x03\x02\x02\x02\u0887\u0888\x05\u0132\x9A" +
    "\x02\u0888\u0889\x05\u0132\x9A\x02\u0889\u088A\x05\u0132\x9A\x02\u088A" +
    "\u088B\x05\u0132\x9A\x02\u088B\u0897\x03\x02\x02\x02\u088C\u088D\x05\u0132" +
    "\x9A\x02\u088D\u088E\x05\u0132\x9A\x02\u088E\u088F\x05\u0132\x9A\x02\u088F" +
    "\u0897\x03\x02\x02\x02\u0890\u0891\x05\u0132\x9A\x02\u0891\u0892\x05\u0132" +
    "\x9A\x02\u0892\u0897\x03\x02\x02\x02\u0893\u0895\x05\u0132\x9A\x02\u0894" +
    "\u0893\x03\x02\x02\x02\u0894\u0895\x03\x02\x02\x02\u0895\u0897\x03\x02" +
    "\x02\x02\u0896\u083B\x03\x02\x02\x02\u0896\u0848\x03\x02\x02\x02\u0896" +
    "\u0854\x03\x02\x02\x02\u0896\u085F\x03\x02\x02\x02\u0896";
  private static readonly _serializedATNSegment4: string =
    "\u0869\x03\x02\x02\x02\u0896\u0872\x03\x02\x02\x02\u0896\u087A\x03\x02" +
    "\x02\x02\u0896\u0881\x03\x02\x02\x02\u0896\u0887\x03\x02\x02\x02\u0896" +
    "\u088C\x03\x02\x02\x02\u0896\u0890\x03\x02\x02\x02\u0896\u0894\x03\x02" +
    "\x02\x02\u0897\u0117\x03\x02\x02\x02\u0898\u089E\x05\u0124\x93\x02\u0899" +
    "\u089E\x05\u0126\x94\x02\u089A\u089E\x05\u0128\x95\x02\u089B\u089E\x05" +
    "\u012A\x96\x02\u089C\u089E\x05\u011C\x8F\x02\u089D\u0898\x03\x02\x02\x02" +
    "\u089D\u0899\x03\x02\x02\x02\u089D\u089A\x03\x02\x02\x02\u089D\u089B\x03" +
    "\x02\x02\x02\u089D\u089C\x03\x02\x02\x02\u089E\u08A1\x03\x02\x02\x02\u089F" +
    "\u089D\x03\x02\x02\x02\u089F\u08A0\x03\x02\x02\x02\u08A0\u0119\x03\x02" +
    "\x02\x02\u08A1\u089F\x03\x02\x02\x02\u08A2\u08A8\x05\u0124\x93\x02\u08A3" +
    "\u08A8\x05\u0126\x94\x02\u08A4\u08A8\x05\u0128\x95\x02\u08A5\u08A8\x05" +
    "\u012A\x96\x02\u08A6\u08A8\x05\u011C\x8F\x02\u08A7\u08A2\x03\x02\x02\x02" +
    "\u08A7\u08A3\x03\x02\x02\x02\u08A7\u08A4\x03\x02\x02\x02\u08A7\u08A5\x03" +
    "\x02\x02\x02\u08A7\u08A6\x03\x02\x02\x02\u08A8\u08A9\x03\x02\x02\x02\u08A9" +
    "\u08A7\x03\x02\x02\x02\u08A9\u08AA\x03\x02\x02\x02\u08AA\u011B\x03\x02" +
    "\x02\x02\u08AB\u08AC\x07\x16\x02\x02\u08AC\u08AD\x07\x11\x02\x02\u08AD" +
    "\u08B2\x03\x02\x02\x02\u08AE\u08B1\x05\u011E\x90\x02\u08AF\u08B1\x05\u0120" +
    "\x91\x02\u08B0\u08AE\x03\x02\x02\x02\u08B0\u08AF\x03\x02\x02\x02\u08B1" +
    "\u08B4\x03\x02\x02\x02\u08B2\u08B0\x03\x02\x02\x02\u08B2\u08B3\x03\x02" +
    "\x02\x02\u08B3\u08B5\x03\x02\x02\x02\u08B4\u08B2\x03\x02\x02\x02\u08B5" +
    "\u08B6\x07\x11\x02\x02\u08B6\u08B7\x07\x16\x02\x02\u08B7\u011D\x03\x02" +
    "\x02\x02\u08B8\u08C0\x05\u0124\x93\x02\u08B9\u08C0\x05\u0126\x94\x02\u08BA" +
    "\u08C0\x05\u0128\x95\x02\u08BB\u08C0\x05\u012A\x96\x02\u08BC\u08C0\t\x19" +
    "\x02\x02\u08BD\u08C0\t\x1A\x02\x02\u08BE\u08C0\x07\x03\x02\x02\u08BF\u08B8" +
    "\x03\x02\x02\x02\u08BF\u08B9\x03\x02\x02\x02\u08BF\u08BA\x03\x02\x02\x02" +
    "\u08BF\u08BB\x03\x02\x02\x02\u08BF\u08BC\x03\x02\x02\x02\u08BF\u08BD\x03" +
    "\x02\x02\x02\u08BF\u08BE\x03\x02\x02\x02\u08C0\u011F\x03\x02\x02\x02\u08C1" +
    "\u08C2\x07\x11\x02\x02\u08C2\u08C3\x05\u0122\x92\x02\u08C3\u0121\x03\x02" +
    "\x02\x02\u08C4\u08CC\x05\u0124\x93\x02\u08C5\u08CC\x05\u0126\x94\x02\u08C6" +
    "\u08CC\x05\u0128\x95\x02\u08C7\u08CC\x05\u012A\x96\x02\u08C8\u08CC\t\x1B" +
    "\x02\x02\u08C9\u08CC\t\x1C\x02\x02\u08CA\u08CC\x07\x03\x02\x02\u08CB\u08C4" +
    "\x03\x02\x02\x02\u08CB\u08C5\x03\x02\x02\x02\u08CB\u08C6\x03\x02\x02\x02" +
    "\u08CB\u08C7\x03\x02\x02\x02\u08CB\u08C8\x03\x02\x02\x02\u08CB\u08C9\x03" +
    "\x02\x02\x02\u08CB\u08CA\x03\x02\x02\x02\u08CC\u0123\x03\x02\x02\x02\u08CD" +
    "\u08CE\x07\x07\x02\x02\u08CE\u0125\x03\x02\x02\x02\u08CF\u08D0\x07\x04" +
    "\x02\x02\u08D0\u0127\x03\x02\x02\x02\u08D1\u08D2\x07\x06\x02\x02\u08D2" +
    "\u0129\x03\x02\x02\x02\u08D3\u08D4\x07\x05\x02\x02\u08D4\u012B\x03\x02" +
    "\x02\x02\u08D5\u08D6\x07\t\x02\x02\u08D6\u012D\x03\x02\x02\x02\u08D7\u08D8" +
    "\x07C\x02\x02\u08D8\u012F\x03\x02\x02\x02\u08D9\u08DA\x07\x11\x02\x02" +
    "\u08DA\u0131\x03\x02\x02\x02\u08DB\u08DC\t\x1D\x02\x02\u08DC\u0133\x03" +
    "\x02\x02\x02\u08DD\u08DE\x07\x17\x02\x02\u08DE\u0135\x03\x02\x02\x02\u08DF" +
    "\u08E0\t\x1E\x02\x02\u08E0\u0137\x03\x02\x02\x02\u08E1\u08E5\t\x1F\x02" +
    "\x02\u08E2\u08E5\t \x02\x02\u08E3\u08E5\x07\x03\x02\x02\u08E4\u08E1\x03" +
    "\x02\x02\x02\u08E4\u08E2\x03\x02\x02\x02\u08E4\u08E3\x03\x02\x02\x02\u08E5" +
    "\u0139\x03\x02\x02\x02\u08E6\u08EF\x05\u0124\x93\x02\u08E7\u08EF\x05\u0126" +
    "\x94\x02\u08E8\u08EF\x05\u0128\x95\x02\u08E9\u08EF\x05\u012A\x96\x02\u08EA" +
    "\u08EF\t!\x02\x02\u08EB\u08EF\t\"\x02\x02\u08EC\u08EF\t#\x02\x02\u08ED" +
    "\u08EF\x07\x03\x02\x02\u08EE\u08E6\x03\x02\x02\x02\u08EE\u08E7\x03\x02" +
    "\x02\x02\u08EE\u08E8\x03\x02\x02\x02\u08EE\u08E9\x03\x02\x02\x02\u08EE" +
    "\u08EA\x03\x02\x02\x02\u08EE\u08EB\x03\x02\x02\x02\u08EE\u08EC\x03\x02" +
    "\x02\x02\u08EE\u08ED\x03\x02\x02\x02\u08EF\u013B\x03\x02\x02\x02\u08F0" +
    "\u08F1\x05\u012E\x98\x02\u08F1\u08F2\x05\u012C\x97\x02\u08F2\u08F7\x03" +
    "\x02\x02\x02\u08F3\u08F4\x05\u012E\x98\x02\u08F4\u08F5\x05\u012E\x98\x02" +
    "\u08F5\u08F7\x03\x02\x02\x02\u08F6\u08F0\x03\x02\x02\x02\u08F6\u08F3\x03" +
    "\x02\x02\x02\u08F7\u013D\x03\x02\x02\x02\u08F8\u08F9\x05\u012E\x98\x02" +
    "\u08F9\u08FA\x05\u012C\x97\x02\u08FA\u0902\x03\x02\x02\x02\u08FB\u08FC" +
    "\x05\u012E\x98\x02\u08FC\u08FD\x05\u012E\x98\x02\u08FD\u0902\x03\x02\x02" +
    "\x02\u08FE\u08FF\x05\u012E\x98\x02\u08FF\u0900\x05\u0130\x99\x02\u0900" +
    "\u0902\x03\x02\x02\x02\u0901\u08F8\x03\x02\x02\x02\u0901\u08FB\x03\x02" +
    "\x02\x02\u0901\u08FE\x03\x02\x02\x02\u0902\u013F\x03\x02\x02\x02\u0903" +
    "\u0908\x07\b\x02\x02\u0904\u0908\t\"\x02\x02\u0905\u0908\t#\x02\x02\u0906" +
    "\u0908\x07\x03\x02\x02\u0907\u0903\x03\x02\x02\x02\u0907\u0904\x03\x02" +
    "\x02\x02\u0907\u0905\x03\x02\x02\x02\u0907\u0906\x03\x02\x02\x02\u0908" +
    "\u0141\x03\x02\x02\x02\u0909\u090C\t$\x02\x02\u090A\u090C\t%\x02\x02\u090B" +
    "\u0909\x03\x02\x02\x02\u090B\u090A\x03\x02\x02\x02\u090C\u0143\x03\x02" +
    "\x02\x02\u090D\u090E\x07\x14\x02\x02\u090E\u0145\x03\x02\x02\x02\u013B" +
    "\u014B\u0158\u0162\u016C\u017A\u0183\u0188\u0191\u0198\u01A2\u01A4\u01A9" +
    "\u01AD\u01B3\u01B7\u01C1\u01C6\u01D0\u01D5\u01DA\u01E6\u01F0\u01FA\u01FF" +
    "\u0204\u0208\u0215\u0231\u0235\u0239\u023D\u0241\u0245\u024B\u024F\u0253" +
    "\u0257\u025B\u0263\u026C\u0275\u027F\u0285\u028E\u0297\u02A0\u02A7\u02B4" +
    "\u02B9\u02CA\u02D0\u02DD\u02E8\u02F3\u02FE\u0303\u0308\u0310\u031B\u0329" +
    "\u0331\u0335\u0339\u033D\u0341\u0348\u0351\u035B\u0363\u0367\u036B\u036F" +
    "\u0373\u0377\u037B\u037F\u0383\u0387\u0389\u0393\u039B\u039D\u03A9\u03AD" +
    "\u03B1\u03B5\u03B9\u03BD\u03C1\u03C5\u03C9\u03D6\u03DE\u03E6\u03EA\u03EE" +
    "\u03F2\u03F6\u03FA\u03FE\u0406\u040A\u040E\u0412\u0416\u041B\u0425\u042D" +
    "\u0431\u0435\u0439\u043D\u0441\u0445\u0449\u044D\u0451\u0456\u045E\u0462" +
    "\u0466\u046A\u046E\u0472\u0476\u047A\u047E\u0482\u048A\u048E\u0492\u0496" +
    "\u049A\u049E\u04A2\u04A6\u04AC\u04AE\u04B7\u04BE\u04C2\u04CE\u04D5\u04D9" +
    "\u04E1\u04EB\u04F9\u0501\u0505\u0509\u050D\u0511\u0515\u0519\u051D\u0521" +
    "\u0525\u0529\u052D\u0531\u0539\u0544\u054F\u0553\u055B\u055F\u0563\u0567" +
    "\u056B\u056F\u0573\u0577\u057B\u057F\u0583\u0587\u058B\u058F\u0593\u0597" +
    "\u059B\u059F\u05A3\u05AB\u05AF\u05B3\u05B7\u05BB\u05BF\u05C3\u05C7\u05CB" +
    "\u05CF\u05D3\u05D7\u05DB\u05DF\u05E3\u05E7\u05EB\u05EF\u05F9\u0601\u0605" +
    "\u0609\u060D\u0611\u0615\u0619\u061D\u0621\u0625\u0629\u062D\u0631\u0635" +
    "\u0639\u063D\u0645\u0649\u064D\u0651\u0655\u0659\u065D\u0661\u0665\u066D" +
    "\u0671\u0675\u0679\u067D\u0681\u0685\u0689\u068D\u0691\u0695\u0699\u069D" +
    "\u06A1\u06A8\u06B4\u06D7\u0717\u0721\u0725\u0729\u072D\u0731\u0735\u0739" +
    "\u0740\u0748\u0750\u075B\u0766\u0777\u0782\u0784\u0791\u0799\u079D\u07A1" +
    "\u07A5\u07A9\u07AD\u07B1\u07B6\u07BB\u07BF\u07C3\u07C8\u07CC\u07D0\u07D5" +
    "\u07D9\u07DD\u07E6\u07EA\u07EE\u07F0\u07F6\u07FA\u0801\u0805\u0809\u080D" +
    "\u0811\u0815\u0819\u081D\u0821\u0825\u0829\u082F\u0833\u0894\u0896\u089D" +
    "\u089F\u08A7\u08A9\u08B0\u08B2\u08BF\u08CB\u08E4\u08EE\u08F6\u0901\u0907" +
    "\u090B";
  public static readonly _serializedATN: string = Utils.join(
    [
      ECLParser._serializedATNSegment0,
      ECLParser._serializedATNSegment1,
      ECLParser._serializedATNSegment2,
      ECLParser._serializedATNSegment3,
      ECLParser._serializedATNSegment4
    ],
    ""
  );
  public static __ATN: ATN;
  public static get _ATN(): ATN {
    if (!ECLParser.__ATN) {
      ECLParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ECLParser._serializedATN));
    }

    return ECLParser.__ATN;
  }

}

export class ExpressionconstraintContext extends ParserRuleContext {
  public ws(): WsContext[];
  public ws(i: number): WsContext;
  public ws(i?: number): WsContext | WsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(WsContext);
    } else {
      return this.getRuleContext(i, WsContext);
    }
  }

  public refinedexpressionconstraint(): RefinedexpressionconstraintContext | undefined {
    return this.tryGetRuleContext(0, RefinedexpressionconstraintContext);
  }

  public compoundexpressionconstraint(): CompoundexpressionconstraintContext | undefined {
    return this.tryGetRuleContext(0, CompoundexpressionconstraintContext);
  }

  public dottedexpressionconstraint(): DottedexpressionconstraintContext | undefined {
    return this.tryGetRuleContext(0, DottedexpressionconstraintContext);
  }

  public subexpressionconstraint(): SubexpressionconstraintContext | undefined {
    return this.tryGetRuleContext(0, SubexpressionconstraintContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_expressionconstraint;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterExpressionconstraint) {
      listener.enterExpressionconstraint(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitExpressionconstraint) {
      listener.exitExpressionconstraint(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitExpressionconstraint) {
      return visitor.visitExpressionconstraint(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class RefinedexpressionconstraintContext extends ParserRuleContext {
  public subexpressionconstraint(): SubexpressionconstraintContext {
    return this.getRuleContext(0, SubexpressionconstraintContext);
  }

  public ws(): WsContext[];
  public ws(i: number): WsContext;
  public ws(i?: number): WsContext | WsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(WsContext);
    } else {
      return this.getRuleContext(i, WsContext);
    }
  }

  public COLON(): TerminalNode {
    return this.getToken(ECLParser.COLON, 0);
  }

  public eclrefinement(): EclrefinementContext {
    return this.getRuleContext(0, EclrefinementContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_refinedexpressionconstraint;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterRefinedexpressionconstraint) {
      listener.enterRefinedexpressionconstraint(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitRefinedexpressionconstraint) {
      listener.exitRefinedexpressionconstraint(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitRefinedexpressionconstraint) {
      return visitor.visitRefinedexpressionconstraint(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class CompoundexpressionconstraintContext extends ParserRuleContext {
  public conjunctionexpressionconstraint(): ConjunctionexpressionconstraintContext | undefined {
    return this.tryGetRuleContext(0, ConjunctionexpressionconstraintContext);
  }

  public disjunctionexpressionconstraint(): DisjunctionexpressionconstraintContext | undefined {
    return this.tryGetRuleContext(0, DisjunctionexpressionconstraintContext);
  }

  public exclusionexpressionconstraint(): ExclusionexpressionconstraintContext | undefined {
    return this.tryGetRuleContext(0, ExclusionexpressionconstraintContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_compoundexpressionconstraint;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterCompoundexpressionconstraint) {
      listener.enterCompoundexpressionconstraint(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitCompoundexpressionconstraint) {
      listener.exitCompoundexpressionconstraint(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitCompoundexpressionconstraint) {
      return visitor.visitCompoundexpressionconstraint(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class ConjunctionexpressionconstraintContext extends ParserRuleContext {
  public subexpressionconstraint(): SubexpressionconstraintContext[];
  public subexpressionconstraint(i: number): SubexpressionconstraintContext;
  public subexpressionconstraint(i?: number): SubexpressionconstraintContext | SubexpressionconstraintContext[] {
    if (i === undefined) {
      return this.getRuleContexts(SubexpressionconstraintContext);
    } else {
      return this.getRuleContext(i, SubexpressionconstraintContext);
    }
  }

  public ws(): WsContext[];
  public ws(i: number): WsContext;
  public ws(i?: number): WsContext | WsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(WsContext);
    } else {
      return this.getRuleContext(i, WsContext);
    }
  }

  public conjunction(): ConjunctionContext[];
  public conjunction(i: number): ConjunctionContext;
  public conjunction(i?: number): ConjunctionContext | ConjunctionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ConjunctionContext);
    } else {
      return this.getRuleContext(i, ConjunctionContext);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_conjunctionexpressionconstraint;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterConjunctionexpressionconstraint) {
      listener.enterConjunctionexpressionconstraint(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitConjunctionexpressionconstraint) {
      listener.exitConjunctionexpressionconstraint(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitConjunctionexpressionconstraint) {
      return visitor.visitConjunctionexpressionconstraint(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class DisjunctionexpressionconstraintContext extends ParserRuleContext {
  public subexpressionconstraint(): SubexpressionconstraintContext[];
  public subexpressionconstraint(i: number): SubexpressionconstraintContext;
  public subexpressionconstraint(i?: number): SubexpressionconstraintContext | SubexpressionconstraintContext[] {
    if (i === undefined) {
      return this.getRuleContexts(SubexpressionconstraintContext);
    } else {
      return this.getRuleContext(i, SubexpressionconstraintContext);
    }
  }

  public ws(): WsContext[];
  public ws(i: number): WsContext;
  public ws(i?: number): WsContext | WsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(WsContext);
    } else {
      return this.getRuleContext(i, WsContext);
    }
  }

  public disjunction(): DisjunctionContext[];
  public disjunction(i: number): DisjunctionContext;
  public disjunction(i?: number): DisjunctionContext | DisjunctionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(DisjunctionContext);
    } else {
      return this.getRuleContext(i, DisjunctionContext);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_disjunctionexpressionconstraint;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterDisjunctionexpressionconstraint) {
      listener.enterDisjunctionexpressionconstraint(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitDisjunctionexpressionconstraint) {
      listener.exitDisjunctionexpressionconstraint(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitDisjunctionexpressionconstraint) {
      return visitor.visitDisjunctionexpressionconstraint(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class ExclusionexpressionconstraintContext extends ParserRuleContext {
  public subexpressionconstraint(): SubexpressionconstraintContext[];
  public subexpressionconstraint(i: number): SubexpressionconstraintContext;
  public subexpressionconstraint(i?: number): SubexpressionconstraintContext | SubexpressionconstraintContext[] {
    if (i === undefined) {
      return this.getRuleContexts(SubexpressionconstraintContext);
    } else {
      return this.getRuleContext(i, SubexpressionconstraintContext);
    }
  }

  public ws(): WsContext[];
  public ws(i: number): WsContext;
  public ws(i?: number): WsContext | WsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(WsContext);
    } else {
      return this.getRuleContext(i, WsContext);
    }
  }

  public exclusion(): ExclusionContext {
    return this.getRuleContext(0, ExclusionContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_exclusionexpressionconstraint;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterExclusionexpressionconstraint) {
      listener.enterExclusionexpressionconstraint(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitExclusionexpressionconstraint) {
      listener.exitExclusionexpressionconstraint(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitExclusionexpressionconstraint) {
      return visitor.visitExclusionexpressionconstraint(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class DottedexpressionconstraintContext extends ParserRuleContext {
  public subexpressionconstraint(): SubexpressionconstraintContext {
    return this.getRuleContext(0, SubexpressionconstraintContext);
  }

  public ws(): WsContext[];
  public ws(i: number): WsContext;
  public ws(i?: number): WsContext | WsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(WsContext);
    } else {
      return this.getRuleContext(i, WsContext);
    }
  }

  public dottedexpressionattribute(): DottedexpressionattributeContext[];
  public dottedexpressionattribute(i: number): DottedexpressionattributeContext;
  public dottedexpressionattribute(i?: number): DottedexpressionattributeContext | DottedexpressionattributeContext[] {
    if (i === undefined) {
      return this.getRuleContexts(DottedexpressionattributeContext);
    } else {
      return this.getRuleContext(i, DottedexpressionattributeContext);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_dottedexpressionconstraint;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterDottedexpressionconstraint) {
      listener.enterDottedexpressionconstraint(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitDottedexpressionconstraint) {
      listener.exitDottedexpressionconstraint(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitDottedexpressionconstraint) {
      return visitor.visitDottedexpressionconstraint(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class DottedexpressionattributeContext extends ParserRuleContext {
  public dot(): DotContext {
    return this.getRuleContext(0, DotContext);
  }

  public ws(): WsContext {
    return this.getRuleContext(0, WsContext);
  }

  public eclattributename(): EclattributenameContext {
    return this.getRuleContext(0, EclattributenameContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_dottedexpressionattribute;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterDottedexpressionattribute) {
      listener.enterDottedexpressionattribute(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitDottedexpressionattribute) {
      listener.exitDottedexpressionattribute(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitDottedexpressionattribute) {
      return visitor.visitDottedexpressionattribute(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class SubexpressionconstraintContext extends ParserRuleContext {
  public constraintoperator(): ConstraintoperatorContext | undefined {
    return this.tryGetRuleContext(0, ConstraintoperatorContext);
  }

  public ws(): WsContext[];
  public ws(i: number): WsContext;
  public ws(i?: number): WsContext | WsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(WsContext);
    } else {
      return this.getRuleContext(i, WsContext);
    }
  }

  public historysupplement(): HistorysupplementContext | undefined {
    return this.tryGetRuleContext(0, HistorysupplementContext);
  }

  public eclfocusconcept(): EclfocusconceptContext | undefined {
    return this.tryGetRuleContext(0, EclfocusconceptContext);
  }

  public descriptionfilterconstraint(): DescriptionfilterconstraintContext[];
  public descriptionfilterconstraint(i: number): DescriptionfilterconstraintContext;
  public descriptionfilterconstraint(i?: number): DescriptionfilterconstraintContext | DescriptionfilterconstraintContext[] {
    if (i === undefined) {
      return this.getRuleContexts(DescriptionfilterconstraintContext);
    } else {
      return this.getRuleContext(i, DescriptionfilterconstraintContext);
    }
  }

  public conceptfilterconstraint(): ConceptfilterconstraintContext[];
  public conceptfilterconstraint(i: number): ConceptfilterconstraintContext;
  public conceptfilterconstraint(i?: number): ConceptfilterconstraintContext | ConceptfilterconstraintContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ConceptfilterconstraintContext);
    } else {
      return this.getRuleContext(i, ConceptfilterconstraintContext);
    }
  }

  public LEFT_PAREN(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.LEFT_PAREN, 0);
  }

  public expressionconstraint(): ExpressionconstraintContext | undefined {
    return this.tryGetRuleContext(0, ExpressionconstraintContext);
  }

  public RIGHT_PAREN(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.RIGHT_PAREN, 0);
  }

  public memberof(): MemberofContext | undefined {
    return this.tryGetRuleContext(0, MemberofContext);
  }

  public memberfilterconstraint(): MemberfilterconstraintContext[];
  public memberfilterconstraint(i: number): MemberfilterconstraintContext;
  public memberfilterconstraint(i?: number): MemberfilterconstraintContext | MemberfilterconstraintContext[] {
    if (i === undefined) {
      return this.getRuleContexts(MemberfilterconstraintContext);
    } else {
      return this.getRuleContext(i, MemberfilterconstraintContext);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_subexpressionconstraint;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterSubexpressionconstraint) {
      listener.enterSubexpressionconstraint(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitSubexpressionconstraint) {
      listener.exitSubexpressionconstraint(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitSubexpressionconstraint) {
      return visitor.visitSubexpressionconstraint(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class EclfocusconceptContext extends ParserRuleContext {
  public eclconceptreference(): EclconceptreferenceContext | undefined {
    return this.tryGetRuleContext(0, EclconceptreferenceContext);
  }

  public wildcard(): WildcardContext | undefined {
    return this.tryGetRuleContext(0, WildcardContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_eclfocusconcept;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterEclfocusconcept) {
      listener.enterEclfocusconcept(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitEclfocusconcept) {
      listener.exitEclfocusconcept(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitEclfocusconcept) {
      return visitor.visitEclfocusconcept(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class DotContext extends ParserRuleContext {
  public PERIOD(): TerminalNode {
    return this.getToken(ECLParser.PERIOD, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_dot;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterDot) {
      listener.enterDot(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitDot) {
      listener.exitDot(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitDot) {
      return visitor.visitDot(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class MemberofContext extends ParserRuleContext {
  public CARAT(): TerminalNode {
    return this.getToken(ECLParser.CARAT, 0);
  }

  public ws(): WsContext[];
  public ws(i: number): WsContext;
  public ws(i?: number): WsContext | WsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(WsContext);
    } else {
      return this.getRuleContext(i, WsContext);
    }
  }

  public LEFT_BRACE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.LEFT_BRACE, 0);
  }

  public RIGHT_BRACE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.RIGHT_BRACE, 0);
  }

  public refsetfieldset(): RefsetfieldsetContext | undefined {
    return this.tryGetRuleContext(0, RefsetfieldsetContext);
  }

  public wildcard(): WildcardContext | undefined {
    return this.tryGetRuleContext(0, WildcardContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_memberof;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterMemberof) {
      listener.enterMemberof(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitMemberof) {
      listener.exitMemberof(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitMemberof) {
      return visitor.visitMemberof(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class RefsetfieldsetContext extends ParserRuleContext {
  public refsetfield(): RefsetfieldContext[];
  public refsetfield(i: number): RefsetfieldContext;
  public refsetfield(i?: number): RefsetfieldContext | RefsetfieldContext[] {
    if (i === undefined) {
      return this.getRuleContexts(RefsetfieldContext);
    } else {
      return this.getRuleContext(i, RefsetfieldContext);
    }
  }

  public ws(): WsContext[];
  public ws(i: number): WsContext;
  public ws(i?: number): WsContext | WsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(WsContext);
    } else {
      return this.getRuleContext(i, WsContext);
    }
  }

  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.COMMA);
    } else {
      return this.getToken(ECLParser.COMMA, i);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_refsetfieldset;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterRefsetfieldset) {
      listener.enterRefsetfieldset(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitRefsetfieldset) {
      listener.exitRefsetfieldset(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitRefsetfieldset) {
      return visitor.visitRefsetfieldset(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class RefsetfieldContext extends ParserRuleContext {
  public refsetfieldname(): RefsetfieldnameContext | undefined {
    return this.tryGetRuleContext(0, RefsetfieldnameContext);
  }

  public refsetfieldref(): RefsetfieldrefContext | undefined {
    return this.tryGetRuleContext(0, RefsetfieldrefContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_refsetfield;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterRefsetfield) {
      listener.enterRefsetfield(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitRefsetfield) {
      listener.exitRefsetfield(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitRefsetfield) {
      return visitor.visitRefsetfield(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class RefsetfieldnameContext extends ParserRuleContext {
  public alpha(): AlphaContext[];
  public alpha(i: number): AlphaContext;
  public alpha(i?: number): AlphaContext | AlphaContext[] {
    if (i === undefined) {
      return this.getRuleContexts(AlphaContext);
    } else {
      return this.getRuleContext(i, AlphaContext);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_refsetfieldname;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterRefsetfieldname) {
      listener.enterRefsetfieldname(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitRefsetfieldname) {
      listener.exitRefsetfieldname(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitRefsetfieldname) {
      return visitor.visitRefsetfieldname(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class RefsetfieldrefContext extends ParserRuleContext {
  public eclconceptreference(): EclconceptreferenceContext {
    return this.getRuleContext(0, EclconceptreferenceContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_refsetfieldref;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterRefsetfieldref) {
      listener.enterRefsetfieldref(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitRefsetfieldref) {
      listener.exitRefsetfieldref(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitRefsetfieldref) {
      return visitor.visitRefsetfieldref(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class EclconceptreferenceContext extends ParserRuleContext {
  public conceptid(): ConceptidContext {
    return this.getRuleContext(0, ConceptidContext);
  }

  public ws(): WsContext[];
  public ws(i: number): WsContext;
  public ws(i?: number): WsContext | WsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(WsContext);
    } else {
      return this.getRuleContext(i, WsContext);
    }
  }

  public PIPE(): TerminalNode[];
  public PIPE(i: number): TerminalNode;
  public PIPE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.PIPE);
    } else {
      return this.getToken(ECLParser.PIPE, i);
    }
  }

  public term(): TermContext | undefined {
    return this.tryGetRuleContext(0, TermContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_eclconceptreference;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterEclconceptreference) {
      listener.enterEclconceptreference(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitEclconceptreference) {
      listener.exitEclconceptreference(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitEclconceptreference) {
      return visitor.visitEclconceptreference(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class EclconceptreferencesetContext extends ParserRuleContext {
  public LEFT_PAREN(): TerminalNode {
    return this.getToken(ECLParser.LEFT_PAREN, 0);
  }

  public ws(): WsContext[];
  public ws(i: number): WsContext;
  public ws(i?: number): WsContext | WsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(WsContext);
    } else {
      return this.getRuleContext(i, WsContext);
    }
  }

  public eclconceptreference(): EclconceptreferenceContext[];
  public eclconceptreference(i: number): EclconceptreferenceContext;
  public eclconceptreference(i?: number): EclconceptreferenceContext | EclconceptreferenceContext[] {
    if (i === undefined) {
      return this.getRuleContexts(EclconceptreferenceContext);
    } else {
      return this.getRuleContext(i, EclconceptreferenceContext);
    }
  }

  public RIGHT_PAREN(): TerminalNode {
    return this.getToken(ECLParser.RIGHT_PAREN, 0);
  }

  public mws(): MwsContext[];
  public mws(i: number): MwsContext;
  public mws(i?: number): MwsContext | MwsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(MwsContext);
    } else {
      return this.getRuleContext(i, MwsContext);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_eclconceptreferenceset;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterEclconceptreferenceset) {
      listener.enterEclconceptreferenceset(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitEclconceptreferenceset) {
      listener.exitEclconceptreferenceset(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitEclconceptreferenceset) {
      return visitor.visitEclconceptreferenceset(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class ConceptidContext extends ParserRuleContext {
  public sctid(): SctidContext {
    return this.getRuleContext(0, SctidContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_conceptid;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterConceptid) {
      listener.enterConceptid(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitConceptid) {
      listener.exitConceptid(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitConceptid) {
      return visitor.visitConceptid(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class TermContext extends ParserRuleContext {
  public nonwsnonpipe(): NonwsnonpipeContext[];
  public nonwsnonpipe(i: number): NonwsnonpipeContext;
  public nonwsnonpipe(i?: number): NonwsnonpipeContext | NonwsnonpipeContext[] {
    if (i === undefined) {
      return this.getRuleContexts(NonwsnonpipeContext);
    } else {
      return this.getRuleContext(i, NonwsnonpipeContext);
    }
  }

  public sp(): SpContext[];
  public sp(i: number): SpContext;
  public sp(i?: number): SpContext | SpContext[] {
    if (i === undefined) {
      return this.getRuleContexts(SpContext);
    } else {
      return this.getRuleContext(i, SpContext);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_term;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterTerm) {
      listener.enterTerm(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitTerm) {
      listener.exitTerm(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitTerm) {
      return visitor.visitTerm(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class WildcardContext extends ParserRuleContext {
  public ASTERISK(): TerminalNode {
    return this.getToken(ECLParser.ASTERISK, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_wildcard;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterWildcard) {
      listener.enterWildcard(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitWildcard) {
      listener.exitWildcard(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitWildcard) {
      return visitor.visitWildcard(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class ConstraintoperatorContext extends ParserRuleContext {
  public childof(): ChildofContext | undefined {
    return this.tryGetRuleContext(0, ChildofContext);
  }

  public childorselfof(): ChildorselfofContext | undefined {
    return this.tryGetRuleContext(0, ChildorselfofContext);
  }

  public descendantorselfof(): DescendantorselfofContext | undefined {
    return this.tryGetRuleContext(0, DescendantorselfofContext);
  }

  public descendantof(): DescendantofContext | undefined {
    return this.tryGetRuleContext(0, DescendantofContext);
  }

  public parentof(): ParentofContext | undefined {
    return this.tryGetRuleContext(0, ParentofContext);
  }

  public parentorselfof(): ParentorselfofContext | undefined {
    return this.tryGetRuleContext(0, ParentorselfofContext);
  }

  public ancestororselfof(): AncestororselfofContext | undefined {
    return this.tryGetRuleContext(0, AncestororselfofContext);
  }

  public ancestorof(): AncestorofContext | undefined {
    return this.tryGetRuleContext(0, AncestorofContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_constraintoperator;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterConstraintoperator) {
      listener.enterConstraintoperator(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitConstraintoperator) {
      listener.exitConstraintoperator(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitConstraintoperator) {
      return visitor.visitConstraintoperator(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class DescendantofContext extends ParserRuleContext {
  public LESS_THAN(): TerminalNode {
    return this.getToken(ECLParser.LESS_THAN, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_descendantof;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterDescendantof) {
      listener.enterDescendantof(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitDescendantof) {
      listener.exitDescendantof(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitDescendantof) {
      return visitor.visitDescendantof(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class DescendantorselfofContext extends ParserRuleContext {
  public LESS_THAN(): TerminalNode[];
  public LESS_THAN(i: number): TerminalNode;
  public LESS_THAN(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.LESS_THAN);
    } else {
      return this.getToken(ECLParser.LESS_THAN, i);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_descendantorselfof;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterDescendantorselfof) {
      listener.enterDescendantorselfof(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitDescendantorselfof) {
      listener.exitDescendantorselfof(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitDescendantorselfof) {
      return visitor.visitDescendantorselfof(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class ChildofContext extends ParserRuleContext {
  public LESS_THAN(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.LESS_THAN, 0);
  }

  public EXCLAMATION(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.EXCLAMATION, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_childof;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterChildof) {
      listener.enterChildof(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitChildof) {
      listener.exitChildof(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitChildof) {
      return visitor.visitChildof(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class ChildorselfofContext extends ParserRuleContext {
  public LESS_THAN(): TerminalNode[];
  public LESS_THAN(i: number): TerminalNode;
  public LESS_THAN(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.LESS_THAN);
    } else {
      return this.getToken(ECLParser.LESS_THAN, i);
    }
  }

  public EXCLAMATION(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.EXCLAMATION, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_childorselfof;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterChildorselfof) {
      listener.enterChildorselfof(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitChildorselfof) {
      listener.exitChildorselfof(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitChildorselfof) {
      return visitor.visitChildorselfof(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class AncestorofContext extends ParserRuleContext {
  public GREATER_THAN(): TerminalNode {
    return this.getToken(ECLParser.GREATER_THAN, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_ancestorof;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterAncestorof) {
      listener.enterAncestorof(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitAncestorof) {
      listener.exitAncestorof(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitAncestorof) {
      return visitor.visitAncestorof(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class AncestororselfofContext extends ParserRuleContext {
  public GREATER_THAN(): TerminalNode[];
  public GREATER_THAN(i: number): TerminalNode;
  public GREATER_THAN(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.GREATER_THAN);
    } else {
      return this.getToken(ECLParser.GREATER_THAN, i);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_ancestororselfof;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterAncestororselfof) {
      listener.enterAncestororselfof(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitAncestororselfof) {
      listener.exitAncestororselfof(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitAncestororselfof) {
      return visitor.visitAncestororselfof(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class ParentofContext extends ParserRuleContext {
  public GREATER_THAN(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.GREATER_THAN, 0);
  }

  public EXCLAMATION(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.EXCLAMATION, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_parentof;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterParentof) {
      listener.enterParentof(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitParentof) {
      listener.exitParentof(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitParentof) {
      return visitor.visitParentof(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class ParentorselfofContext extends ParserRuleContext {
  public GREATER_THAN(): TerminalNode[];
  public GREATER_THAN(i: number): TerminalNode;
  public GREATER_THAN(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.GREATER_THAN);
    } else {
      return this.getToken(ECLParser.GREATER_THAN, i);
    }
  }

  public EXCLAMATION(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.EXCLAMATION, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_parentorselfof;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterParentorselfof) {
      listener.enterParentorselfof(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitParentorselfof) {
      listener.exitParentorselfof(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitParentorselfof) {
      return visitor.visitParentorselfof(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class ConjunctionContext extends ParserRuleContext {
  public mws(): MwsContext | undefined {
    return this.tryGetRuleContext(0, MwsContext);
  }

  public CAP_A(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_A, 0);
  }

  public A(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.A, 0);
  }

  public CAP_N(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_N, 0);
  }

  public N(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.N, 0);
  }

  public CAP_D(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_D, 0);
  }

  public D(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.D, 0);
  }

  public COMMA(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.COMMA, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_conjunction;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterConjunction) {
      listener.enterConjunction(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitConjunction) {
      listener.exitConjunction(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitConjunction) {
      return visitor.visitConjunction(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class DisjunctionContext extends ParserRuleContext {
  public mws(): MwsContext {
    return this.getRuleContext(0, MwsContext);
  }

  public CAP_O(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_O, 0);
  }

  public O(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.O, 0);
  }

  public CAP_R(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_R, 0);
  }

  public R(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.R, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_disjunction;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterDisjunction) {
      listener.enterDisjunction(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitDisjunction) {
      listener.exitDisjunction(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitDisjunction) {
      return visitor.visitDisjunction(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class ExclusionContext extends ParserRuleContext {
  public mws(): MwsContext {
    return this.getRuleContext(0, MwsContext);
  }

  public CAP_M(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_M, 0);
  }

  public M(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.M, 0);
  }

  public CAP_I(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_I, 0);
  }

  public I(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.I, 0);
  }

  public CAP_N(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_N, 0);
  }

  public N(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.N, 0);
  }

  public CAP_U(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_U, 0);
  }

  public U(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.U, 0);
  }

  public CAP_S(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_S, 0);
  }

  public S(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.S, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_exclusion;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterExclusion) {
      listener.enterExclusion(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitExclusion) {
      listener.exitExclusion(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitExclusion) {
      return visitor.visitExclusion(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class EclrefinementContext extends ParserRuleContext {
  public subrefinement(): SubrefinementContext {
    return this.getRuleContext(0, SubrefinementContext);
  }

  public ws(): WsContext {
    return this.getRuleContext(0, WsContext);
  }

  public conjunctionrefinementset(): ConjunctionrefinementsetContext | undefined {
    return this.tryGetRuleContext(0, ConjunctionrefinementsetContext);
  }

  public disjunctionrefinementset(): DisjunctionrefinementsetContext | undefined {
    return this.tryGetRuleContext(0, DisjunctionrefinementsetContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_eclrefinement;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterEclrefinement) {
      listener.enterEclrefinement(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitEclrefinement) {
      listener.exitEclrefinement(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitEclrefinement) {
      return visitor.visitEclrefinement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class ConjunctionrefinementsetContext extends ParserRuleContext {
  public ws(): WsContext[];
  public ws(i: number): WsContext;
  public ws(i?: number): WsContext | WsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(WsContext);
    } else {
      return this.getRuleContext(i, WsContext);
    }
  }

  public conjunction(): ConjunctionContext[];
  public conjunction(i: number): ConjunctionContext;
  public conjunction(i?: number): ConjunctionContext | ConjunctionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ConjunctionContext);
    } else {
      return this.getRuleContext(i, ConjunctionContext);
    }
  }

  public subrefinement(): SubrefinementContext[];
  public subrefinement(i: number): SubrefinementContext;
  public subrefinement(i?: number): SubrefinementContext | SubrefinementContext[] {
    if (i === undefined) {
      return this.getRuleContexts(SubrefinementContext);
    } else {
      return this.getRuleContext(i, SubrefinementContext);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_conjunctionrefinementset;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterConjunctionrefinementset) {
      listener.enterConjunctionrefinementset(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitConjunctionrefinementset) {
      listener.exitConjunctionrefinementset(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitConjunctionrefinementset) {
      return visitor.visitConjunctionrefinementset(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class DisjunctionrefinementsetContext extends ParserRuleContext {
  public ws(): WsContext[];
  public ws(i: number): WsContext;
  public ws(i?: number): WsContext | WsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(WsContext);
    } else {
      return this.getRuleContext(i, WsContext);
    }
  }

  public disjunction(): DisjunctionContext[];
  public disjunction(i: number): DisjunctionContext;
  public disjunction(i?: number): DisjunctionContext | DisjunctionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(DisjunctionContext);
    } else {
      return this.getRuleContext(i, DisjunctionContext);
    }
  }

  public subrefinement(): SubrefinementContext[];
  public subrefinement(i: number): SubrefinementContext;
  public subrefinement(i?: number): SubrefinementContext | SubrefinementContext[] {
    if (i === undefined) {
      return this.getRuleContexts(SubrefinementContext);
    } else {
      return this.getRuleContext(i, SubrefinementContext);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_disjunctionrefinementset;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterDisjunctionrefinementset) {
      listener.enterDisjunctionrefinementset(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitDisjunctionrefinementset) {
      listener.exitDisjunctionrefinementset(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitDisjunctionrefinementset) {
      return visitor.visitDisjunctionrefinementset(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class SubrefinementContext extends ParserRuleContext {
  public eclattributeset(): EclattributesetContext | undefined {
    return this.tryGetRuleContext(0, EclattributesetContext);
  }

  public eclattributegroup(): EclattributegroupContext | undefined {
    return this.tryGetRuleContext(0, EclattributegroupContext);
  }

  public LEFT_PAREN(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.LEFT_PAREN, 0);
  }

  public ws(): WsContext[];
  public ws(i: number): WsContext;
  public ws(i?: number): WsContext | WsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(WsContext);
    } else {
      return this.getRuleContext(i, WsContext);
    }
  }

  public eclrefinement(): EclrefinementContext | undefined {
    return this.tryGetRuleContext(0, EclrefinementContext);
  }

  public RIGHT_PAREN(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.RIGHT_PAREN, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_subrefinement;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterSubrefinement) {
      listener.enterSubrefinement(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitSubrefinement) {
      listener.exitSubrefinement(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitSubrefinement) {
      return visitor.visitSubrefinement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class EclattributesetContext extends ParserRuleContext {
  public subattributeset(): SubattributesetContext {
    return this.getRuleContext(0, SubattributesetContext);
  }

  public ws(): WsContext {
    return this.getRuleContext(0, WsContext);
  }

  public conjunctionattributeset(): ConjunctionattributesetContext | undefined {
    return this.tryGetRuleContext(0, ConjunctionattributesetContext);
  }

  public disjunctionattributeset(): DisjunctionattributesetContext | undefined {
    return this.tryGetRuleContext(0, DisjunctionattributesetContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_eclattributeset;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterEclattributeset) {
      listener.enterEclattributeset(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitEclattributeset) {
      listener.exitEclattributeset(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitEclattributeset) {
      return visitor.visitEclattributeset(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class ConjunctionattributesetContext extends ParserRuleContext {
  public ws(): WsContext[];
  public ws(i: number): WsContext;
  public ws(i?: number): WsContext | WsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(WsContext);
    } else {
      return this.getRuleContext(i, WsContext);
    }
  }

  public conjunction(): ConjunctionContext[];
  public conjunction(i: number): ConjunctionContext;
  public conjunction(i?: number): ConjunctionContext | ConjunctionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ConjunctionContext);
    } else {
      return this.getRuleContext(i, ConjunctionContext);
    }
  }

  public subattributeset(): SubattributesetContext[];
  public subattributeset(i: number): SubattributesetContext;
  public subattributeset(i?: number): SubattributesetContext | SubattributesetContext[] {
    if (i === undefined) {
      return this.getRuleContexts(SubattributesetContext);
    } else {
      return this.getRuleContext(i, SubattributesetContext);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_conjunctionattributeset;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterConjunctionattributeset) {
      listener.enterConjunctionattributeset(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitConjunctionattributeset) {
      listener.exitConjunctionattributeset(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitConjunctionattributeset) {
      return visitor.visitConjunctionattributeset(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class DisjunctionattributesetContext extends ParserRuleContext {
  public ws(): WsContext[];
  public ws(i: number): WsContext;
  public ws(i?: number): WsContext | WsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(WsContext);
    } else {
      return this.getRuleContext(i, WsContext);
    }
  }

  public disjunction(): DisjunctionContext[];
  public disjunction(i: number): DisjunctionContext;
  public disjunction(i?: number): DisjunctionContext | DisjunctionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(DisjunctionContext);
    } else {
      return this.getRuleContext(i, DisjunctionContext);
    }
  }

  public subattributeset(): SubattributesetContext[];
  public subattributeset(i: number): SubattributesetContext;
  public subattributeset(i?: number): SubattributesetContext | SubattributesetContext[] {
    if (i === undefined) {
      return this.getRuleContexts(SubattributesetContext);
    } else {
      return this.getRuleContext(i, SubattributesetContext);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_disjunctionattributeset;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterDisjunctionattributeset) {
      listener.enterDisjunctionattributeset(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitDisjunctionattributeset) {
      listener.exitDisjunctionattributeset(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitDisjunctionattributeset) {
      return visitor.visitDisjunctionattributeset(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class SubattributesetContext extends ParserRuleContext {
  public eclattribute(): EclattributeContext | undefined {
    return this.tryGetRuleContext(0, EclattributeContext);
  }

  public LEFT_PAREN(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.LEFT_PAREN, 0);
  }

  public ws(): WsContext[];
  public ws(i: number): WsContext;
  public ws(i?: number): WsContext | WsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(WsContext);
    } else {
      return this.getRuleContext(i, WsContext);
    }
  }

  public eclattributeset(): EclattributesetContext | undefined {
    return this.tryGetRuleContext(0, EclattributesetContext);
  }

  public RIGHT_PAREN(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.RIGHT_PAREN, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_subattributeset;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterSubattributeset) {
      listener.enterSubattributeset(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitSubattributeset) {
      listener.exitSubattributeset(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitSubattributeset) {
      return visitor.visitSubattributeset(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class EclattributegroupContext extends ParserRuleContext {
  public LEFT_CURLY_BRACE(): TerminalNode {
    return this.getToken(ECLParser.LEFT_CURLY_BRACE, 0);
  }

  public ws(): WsContext[];
  public ws(i: number): WsContext;
  public ws(i?: number): WsContext | WsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(WsContext);
    } else {
      return this.getRuleContext(i, WsContext);
    }
  }

  public eclattributeset(): EclattributesetContext {
    return this.getRuleContext(0, EclattributesetContext);
  }

  public RIGHT_CURLY_BRACE(): TerminalNode {
    return this.getToken(ECLParser.RIGHT_CURLY_BRACE, 0);
  }

  public LEFT_BRACE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.LEFT_BRACE, 0);
  }

  public cardinality(): CardinalityContext | undefined {
    return this.tryGetRuleContext(0, CardinalityContext);
  }

  public RIGHT_BRACE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.RIGHT_BRACE, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_eclattributegroup;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterEclattributegroup) {
      listener.enterEclattributegroup(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitEclattributegroup) {
      listener.exitEclattributegroup(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitEclattributegroup) {
      return visitor.visitEclattributegroup(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class EclattributeContext extends ParserRuleContext {
  public eclattributename(): EclattributenameContext {
    return this.getRuleContext(0, EclattributenameContext);
  }

  public ws(): WsContext[];
  public ws(i: number): WsContext;
  public ws(i?: number): WsContext | WsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(WsContext);
    } else {
      return this.getRuleContext(i, WsContext);
    }
  }

  public LEFT_BRACE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.LEFT_BRACE, 0);
  }

  public cardinality(): CardinalityContext | undefined {
    return this.tryGetRuleContext(0, CardinalityContext);
  }

  public RIGHT_BRACE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.RIGHT_BRACE, 0);
  }

  public reverseflag(): ReverseflagContext | undefined {
    return this.tryGetRuleContext(0, ReverseflagContext);
  }

  public expressioncomparisonoperator(): ExpressioncomparisonoperatorContext | undefined {
    return this.tryGetRuleContext(0, ExpressioncomparisonoperatorContext);
  }

  public subexpressionconstraint(): SubexpressionconstraintContext | undefined {
    return this.tryGetRuleContext(0, SubexpressionconstraintContext);
  }

  public numericcomparisonoperator(): NumericcomparisonoperatorContext | undefined {
    return this.tryGetRuleContext(0, NumericcomparisonoperatorContext);
  }

  public HASH(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.HASH, 0);
  }

  public numericvalue(): NumericvalueContext | undefined {
    return this.tryGetRuleContext(0, NumericvalueContext);
  }

  public stringcomparisonoperator(): StringcomparisonoperatorContext | undefined {
    return this.tryGetRuleContext(0, StringcomparisonoperatorContext);
  }

  public booleancomparisonoperator(): BooleancomparisonoperatorContext | undefined {
    return this.tryGetRuleContext(0, BooleancomparisonoperatorContext);
  }

  public booleanvalue(): BooleanvalueContext | undefined {
    return this.tryGetRuleContext(0, BooleanvalueContext);
  }

  public typedsearchterm(): TypedsearchtermContext | undefined {
    return this.tryGetRuleContext(0, TypedsearchtermContext);
  }

  public typedsearchtermset(): TypedsearchtermsetContext | undefined {
    return this.tryGetRuleContext(0, TypedsearchtermsetContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_eclattribute;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterEclattribute) {
      listener.enterEclattribute(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitEclattribute) {
      listener.exitEclattribute(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitEclattribute) {
      return visitor.visitEclattribute(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class CardinalityContext extends ParserRuleContext {
  public minvalue(): MinvalueContext {
    return this.getRuleContext(0, MinvalueContext);
  }

  public to(): ToContext {
    return this.getRuleContext(0, ToContext);
  }

  public maxvalue(): MaxvalueContext {
    return this.getRuleContext(0, MaxvalueContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_cardinality;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterCardinality) {
      listener.enterCardinality(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitCardinality) {
      listener.exitCardinality(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitCardinality) {
      return visitor.visitCardinality(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class MinvalueContext extends ParserRuleContext {
  public nonnegativeintegervalue(): NonnegativeintegervalueContext {
    return this.getRuleContext(0, NonnegativeintegervalueContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_minvalue;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterMinvalue) {
      listener.enterMinvalue(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitMinvalue) {
      listener.exitMinvalue(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitMinvalue) {
      return visitor.visitMinvalue(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class ToContext extends ParserRuleContext {
  public PERIOD(): TerminalNode[];
  public PERIOD(i: number): TerminalNode;
  public PERIOD(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.PERIOD);
    } else {
      return this.getToken(ECLParser.PERIOD, i);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_to;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterTo) {
      listener.enterTo(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitTo) {
      listener.exitTo(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitTo) {
      return visitor.visitTo(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class MaxvalueContext extends ParserRuleContext {
  public nonnegativeintegervalue(): NonnegativeintegervalueContext | undefined {
    return this.tryGetRuleContext(0, NonnegativeintegervalueContext);
  }

  public many(): ManyContext | undefined {
    return this.tryGetRuleContext(0, ManyContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_maxvalue;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterMaxvalue) {
      listener.enterMaxvalue(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitMaxvalue) {
      listener.exitMaxvalue(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitMaxvalue) {
      return visitor.visitMaxvalue(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class ManyContext extends ParserRuleContext {
  public ASTERISK(): TerminalNode {
    return this.getToken(ECLParser.ASTERISK, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_many;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterMany) {
      listener.enterMany(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitMany) {
      listener.exitMany(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitMany) {
      return visitor.visitMany(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class ReverseflagContext extends ParserRuleContext {
  public CAP_R(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_R, 0);
  }

  public R(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.R, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_reverseflag;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterReverseflag) {
      listener.enterReverseflag(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitReverseflag) {
      listener.exitReverseflag(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitReverseflag) {
      return visitor.visitReverseflag(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class EclattributenameContext extends ParserRuleContext {
  public subexpressionconstraint(): SubexpressionconstraintContext {
    return this.getRuleContext(0, SubexpressionconstraintContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_eclattributename;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterEclattributename) {
      listener.enterEclattributename(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitEclattributename) {
      listener.exitEclattributename(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitEclattributename) {
      return visitor.visitEclattributename(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class ExpressioncomparisonoperatorContext extends ParserRuleContext {
  public EQUALS(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.EQUALS, 0);
  }

  public EXCLAMATION(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.EXCLAMATION, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_expressioncomparisonoperator;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterExpressioncomparisonoperator) {
      listener.enterExpressioncomparisonoperator(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitExpressioncomparisonoperator) {
      listener.exitExpressioncomparisonoperator(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitExpressioncomparisonoperator) {
      return visitor.visitExpressioncomparisonoperator(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class NumericcomparisonoperatorContext extends ParserRuleContext {
  public EQUALS(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.EQUALS, 0);
  }

  public EXCLAMATION(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.EXCLAMATION, 0);
  }

  public LESS_THAN(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.LESS_THAN, 0);
  }

  public GREATER_THAN(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.GREATER_THAN, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_numericcomparisonoperator;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterNumericcomparisonoperator) {
      listener.enterNumericcomparisonoperator(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitNumericcomparisonoperator) {
      listener.exitNumericcomparisonoperator(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitNumericcomparisonoperator) {
      return visitor.visitNumericcomparisonoperator(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class TimecomparisonoperatorContext extends ParserRuleContext {
  public EQUALS(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.EQUALS, 0);
  }

  public EXCLAMATION(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.EXCLAMATION, 0);
  }

  public LESS_THAN(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.LESS_THAN, 0);
  }

  public GREATER_THAN(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.GREATER_THAN, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_timecomparisonoperator;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterTimecomparisonoperator) {
      listener.enterTimecomparisonoperator(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitTimecomparisonoperator) {
      listener.exitTimecomparisonoperator(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitTimecomparisonoperator) {
      return visitor.visitTimecomparisonoperator(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class StringcomparisonoperatorContext extends ParserRuleContext {
  public EQUALS(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.EQUALS, 0);
  }

  public EXCLAMATION(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.EXCLAMATION, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_stringcomparisonoperator;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterStringcomparisonoperator) {
      listener.enterStringcomparisonoperator(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitStringcomparisonoperator) {
      listener.exitStringcomparisonoperator(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitStringcomparisonoperator) {
      return visitor.visitStringcomparisonoperator(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class BooleancomparisonoperatorContext extends ParserRuleContext {
  public EQUALS(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.EQUALS, 0);
  }

  public EXCLAMATION(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.EXCLAMATION, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_booleancomparisonoperator;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterBooleancomparisonoperator) {
      listener.enterBooleancomparisonoperator(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitBooleancomparisonoperator) {
      listener.exitBooleancomparisonoperator(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitBooleancomparisonoperator) {
      return visitor.visitBooleancomparisonoperator(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class DescriptionfilterconstraintContext extends ParserRuleContext {
  public ws(): WsContext[];
  public ws(i: number): WsContext;
  public ws(i?: number): WsContext | WsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(WsContext);
    } else {
      return this.getRuleContext(i, WsContext);
    }
  }

  public descriptionfilter(): DescriptionfilterContext[];
  public descriptionfilter(i: number): DescriptionfilterContext;
  public descriptionfilter(i?: number): DescriptionfilterContext | DescriptionfilterContext[] {
    if (i === undefined) {
      return this.getRuleContexts(DescriptionfilterContext);
    } else {
      return this.getRuleContext(i, DescriptionfilterContext);
    }
  }

  public LEFT_CURLY_BRACE(): TerminalNode[];
  public LEFT_CURLY_BRACE(i: number): TerminalNode;
  public LEFT_CURLY_BRACE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.LEFT_CURLY_BRACE);
    } else {
      return this.getToken(ECLParser.LEFT_CURLY_BRACE, i);
    }
  }

  public RIGHT_CURLY_BRACE(): TerminalNode[];
  public RIGHT_CURLY_BRACE(i: number): TerminalNode;
  public RIGHT_CURLY_BRACE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.RIGHT_CURLY_BRACE);
    } else {
      return this.getToken(ECLParser.RIGHT_CURLY_BRACE, i);
    }
  }

  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.COMMA);
    } else {
      return this.getToken(ECLParser.COMMA, i);
    }
  }

  public CAP_D(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_D, 0);
  }

  public D(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.D, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_descriptionfilterconstraint;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterDescriptionfilterconstraint) {
      listener.enterDescriptionfilterconstraint(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitDescriptionfilterconstraint) {
      listener.exitDescriptionfilterconstraint(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitDescriptionfilterconstraint) {
      return visitor.visitDescriptionfilterconstraint(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class DescriptionfilterContext extends ParserRuleContext {
  public termfilter(): TermfilterContext | undefined {
    return this.tryGetRuleContext(0, TermfilterContext);
  }

  public languagefilter(): LanguagefilterContext | undefined {
    return this.tryGetRuleContext(0, LanguagefilterContext);
  }

  public typefilter(): TypefilterContext | undefined {
    return this.tryGetRuleContext(0, TypefilterContext);
  }

  public dialectfilter(): DialectfilterContext | undefined {
    return this.tryGetRuleContext(0, DialectfilterContext);
  }

  public modulefilter(): ModulefilterContext | undefined {
    return this.tryGetRuleContext(0, ModulefilterContext);
  }

  public effectivetimefilter(): EffectivetimefilterContext | undefined {
    return this.tryGetRuleContext(0, EffectivetimefilterContext);
  }

  public activefilter(): ActivefilterContext | undefined {
    return this.tryGetRuleContext(0, ActivefilterContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_descriptionfilter;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterDescriptionfilter) {
      listener.enterDescriptionfilter(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitDescriptionfilter) {
      listener.exitDescriptionfilter(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitDescriptionfilter) {
      return visitor.visitDescriptionfilter(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class TermfilterContext extends ParserRuleContext {
  public termkeyword(): TermkeywordContext {
    return this.getRuleContext(0, TermkeywordContext);
  }

  public ws(): WsContext[];
  public ws(i: number): WsContext;
  public ws(i?: number): WsContext | WsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(WsContext);
    } else {
      return this.getRuleContext(i, WsContext);
    }
  }

  public stringcomparisonoperator(): StringcomparisonoperatorContext {
    return this.getRuleContext(0, StringcomparisonoperatorContext);
  }

  public typedsearchterm(): TypedsearchtermContext | undefined {
    return this.tryGetRuleContext(0, TypedsearchtermContext);
  }

  public typedsearchtermset(): TypedsearchtermsetContext | undefined {
    return this.tryGetRuleContext(0, TypedsearchtermsetContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_termfilter;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterTermfilter) {
      listener.enterTermfilter(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitTermfilter) {
      listener.exitTermfilter(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitTermfilter) {
      return visitor.visitTermfilter(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class TermkeywordContext extends ParserRuleContext {
  public CAP_T(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_T, 0);
  }

  public T(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.T, 0);
  }

  public CAP_E(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_E, 0);
  }

  public E(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.E, 0);
  }

  public CAP_R(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_R, 0);
  }

  public R(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.R, 0);
  }

  public CAP_M(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_M, 0);
  }

  public M(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.M, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_termkeyword;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterTermkeyword) {
      listener.enterTermkeyword(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitTermkeyword) {
      listener.exitTermkeyword(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitTermkeyword) {
      return visitor.visitTermkeyword(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class TypedsearchtermContext extends ParserRuleContext {
  public matchsearchtermset(): MatchsearchtermsetContext | undefined {
    return this.tryGetRuleContext(0, MatchsearchtermsetContext);
  }

  public match(): MatchContext | undefined {
    return this.tryGetRuleContext(0, MatchContext);
  }

  public ws(): WsContext[];
  public ws(i: number): WsContext;
  public ws(i?: number): WsContext | WsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(WsContext);
    } else {
      return this.getRuleContext(i, WsContext);
    }
  }

  public COLON(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.COLON, 0);
  }

  public wild(): WildContext | undefined {
    return this.tryGetRuleContext(0, WildContext);
  }

  public wildsearchtermset(): WildsearchtermsetContext | undefined {
    return this.tryGetRuleContext(0, WildsearchtermsetContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_typedsearchterm;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterTypedsearchterm) {
      listener.enterTypedsearchterm(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitTypedsearchterm) {
      listener.exitTypedsearchterm(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitTypedsearchterm) {
      return visitor.visitTypedsearchterm(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class TypedsearchtermsetContext extends ParserRuleContext {
  public LEFT_PAREN(): TerminalNode {
    return this.getToken(ECLParser.LEFT_PAREN, 0);
  }

  public ws(): WsContext[];
  public ws(i: number): WsContext;
  public ws(i?: number): WsContext | WsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(WsContext);
    } else {
      return this.getRuleContext(i, WsContext);
    }
  }

  public typedsearchterm(): TypedsearchtermContext[];
  public typedsearchterm(i: number): TypedsearchtermContext;
  public typedsearchterm(i?: number): TypedsearchtermContext | TypedsearchtermContext[] {
    if (i === undefined) {
      return this.getRuleContexts(TypedsearchtermContext);
    } else {
      return this.getRuleContext(i, TypedsearchtermContext);
    }
  }

  public RIGHT_PAREN(): TerminalNode {
    return this.getToken(ECLParser.RIGHT_PAREN, 0);
  }

  public mws(): MwsContext[];
  public mws(i: number): MwsContext;
  public mws(i?: number): MwsContext | MwsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(MwsContext);
    } else {
      return this.getRuleContext(i, MwsContext);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_typedsearchtermset;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterTypedsearchtermset) {
      listener.enterTypedsearchtermset(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitTypedsearchtermset) {
      listener.exitTypedsearchtermset(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitTypedsearchtermset) {
      return visitor.visitTypedsearchtermset(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class WildContext extends ParserRuleContext {
  public CAP_W(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_W, 0);
  }

  public W(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.W, 0);
  }

  public CAP_I(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_I, 0);
  }

  public I(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.I, 0);
  }

  public CAP_L(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_L, 0);
  }

  public L(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.L, 0);
  }

  public CAP_D(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_D, 0);
  }

  public D(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.D, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_wild;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterWild) {
      listener.enterWild(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitWild) {
      listener.exitWild(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitWild) {
      return visitor.visitWild(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class MatchContext extends ParserRuleContext {
  public CAP_M(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_M, 0);
  }

  public M(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.M, 0);
  }

  public CAP_A(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_A, 0);
  }

  public A(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.A, 0);
  }

  public CAP_T(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_T, 0);
  }

  public T(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.T, 0);
  }

  public CAP_C(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_C, 0);
  }

  public C(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.C, 0);
  }

  public CAP_H(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_H, 0);
  }

  public H(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.H, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_match;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterMatch) {
      listener.enterMatch(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitMatch) {
      listener.exitMatch(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitMatch) {
      return visitor.visitMatch(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class MatchsearchtermContext extends ParserRuleContext {
  public nonwsnonescapedchar(): NonwsnonescapedcharContext[];
  public nonwsnonescapedchar(i: number): NonwsnonescapedcharContext;
  public nonwsnonescapedchar(i?: number): NonwsnonescapedcharContext | NonwsnonescapedcharContext[] {
    if (i === undefined) {
      return this.getRuleContexts(NonwsnonescapedcharContext);
    } else {
      return this.getRuleContext(i, NonwsnonescapedcharContext);
    }
  }

  public escapedchar(): EscapedcharContext[];
  public escapedchar(i: number): EscapedcharContext;
  public escapedchar(i?: number): EscapedcharContext | EscapedcharContext[] {
    if (i === undefined) {
      return this.getRuleContexts(EscapedcharContext);
    } else {
      return this.getRuleContext(i, EscapedcharContext);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_matchsearchterm;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterMatchsearchterm) {
      listener.enterMatchsearchterm(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitMatchsearchterm) {
      listener.exitMatchsearchterm(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitMatchsearchterm) {
      return visitor.visitMatchsearchterm(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class MatchsearchtermsetContext extends ParserRuleContext {
  public qm(): QmContext[];
  public qm(i: number): QmContext;
  public qm(i?: number): QmContext | QmContext[] {
    if (i === undefined) {
      return this.getRuleContexts(QmContext);
    } else {
      return this.getRuleContext(i, QmContext);
    }
  }

  public ws(): WsContext[];
  public ws(i: number): WsContext;
  public ws(i?: number): WsContext | WsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(WsContext);
    } else {
      return this.getRuleContext(i, WsContext);
    }
  }

  public matchsearchterm(): MatchsearchtermContext[];
  public matchsearchterm(i: number): MatchsearchtermContext;
  public matchsearchterm(i?: number): MatchsearchtermContext | MatchsearchtermContext[] {
    if (i === undefined) {
      return this.getRuleContexts(MatchsearchtermContext);
    } else {
      return this.getRuleContext(i, MatchsearchtermContext);
    }
  }

  public mws(): MwsContext[];
  public mws(i: number): MwsContext;
  public mws(i?: number): MwsContext | MwsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(MwsContext);
    } else {
      return this.getRuleContext(i, MwsContext);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_matchsearchtermset;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterMatchsearchtermset) {
      listener.enterMatchsearchtermset(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitMatchsearchtermset) {
      listener.exitMatchsearchtermset(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitMatchsearchtermset) {
      return visitor.visitMatchsearchtermset(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class WildsearchtermContext extends ParserRuleContext {
  public anynonescapedchar(): AnynonescapedcharContext[];
  public anynonescapedchar(i: number): AnynonescapedcharContext;
  public anynonescapedchar(i?: number): AnynonescapedcharContext | AnynonescapedcharContext[] {
    if (i === undefined) {
      return this.getRuleContexts(AnynonescapedcharContext);
    } else {
      return this.getRuleContext(i, AnynonescapedcharContext);
    }
  }

  public escapedwildchar(): EscapedwildcharContext[];
  public escapedwildchar(i: number): EscapedwildcharContext;
  public escapedwildchar(i?: number): EscapedwildcharContext | EscapedwildcharContext[] {
    if (i === undefined) {
      return this.getRuleContexts(EscapedwildcharContext);
    } else {
      return this.getRuleContext(i, EscapedwildcharContext);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_wildsearchterm;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterWildsearchterm) {
      listener.enterWildsearchterm(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitWildsearchterm) {
      listener.exitWildsearchterm(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitWildsearchterm) {
      return visitor.visitWildsearchterm(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class WildsearchtermsetContext extends ParserRuleContext {
  public qm(): QmContext[];
  public qm(i: number): QmContext;
  public qm(i?: number): QmContext | QmContext[] {
    if (i === undefined) {
      return this.getRuleContexts(QmContext);
    } else {
      return this.getRuleContext(i, QmContext);
    }
  }

  public wildsearchterm(): WildsearchtermContext {
    return this.getRuleContext(0, WildsearchtermContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_wildsearchtermset;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterWildsearchtermset) {
      listener.enterWildsearchtermset(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitWildsearchtermset) {
      listener.exitWildsearchtermset(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitWildsearchtermset) {
      return visitor.visitWildsearchtermset(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class LanguagefilterContext extends ParserRuleContext {
  public language(): LanguageContext {
    return this.getRuleContext(0, LanguageContext);
  }

  public ws(): WsContext[];
  public ws(i: number): WsContext;
  public ws(i?: number): WsContext | WsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(WsContext);
    } else {
      return this.getRuleContext(i, WsContext);
    }
  }

  public booleancomparisonoperator(): BooleancomparisonoperatorContext {
    return this.getRuleContext(0, BooleancomparisonoperatorContext);
  }

  public languagecode(): LanguagecodeContext | undefined {
    return this.tryGetRuleContext(0, LanguagecodeContext);
  }

  public languagecodeset(): LanguagecodesetContext | undefined {
    return this.tryGetRuleContext(0, LanguagecodesetContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_languagefilter;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterLanguagefilter) {
      listener.enterLanguagefilter(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitLanguagefilter) {
      listener.exitLanguagefilter(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitLanguagefilter) {
      return visitor.visitLanguagefilter(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class LanguageContext extends ParserRuleContext {
  public CAP_L(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_L, 0);
  }

  public L(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.L, 0);
  }

  public CAP_A(): TerminalNode[];
  public CAP_A(i: number): TerminalNode;
  public CAP_A(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.CAP_A);
    } else {
      return this.getToken(ECLParser.CAP_A, i);
    }
  }

  public A(): TerminalNode[];
  public A(i: number): TerminalNode;
  public A(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.A);
    } else {
      return this.getToken(ECLParser.A, i);
    }
  }

  public CAP_N(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_N, 0);
  }

  public N(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.N, 0);
  }

  public CAP_G(): TerminalNode[];
  public CAP_G(i: number): TerminalNode;
  public CAP_G(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.CAP_G);
    } else {
      return this.getToken(ECLParser.CAP_G, i);
    }
  }

  public G(): TerminalNode[];
  public G(i: number): TerminalNode;
  public G(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.G);
    } else {
      return this.getToken(ECLParser.G, i);
    }
  }

  public CAP_U(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_U, 0);
  }

  public U(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.U, 0);
  }

  public CAP_E(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_E, 0);
  }

  public E(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.E, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_language;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterLanguage) {
      listener.enterLanguage(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitLanguage) {
      listener.exitLanguage(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitLanguage) {
      return visitor.visitLanguage(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class LanguagecodeContext extends ParserRuleContext {
  public alpha(): AlphaContext[];
  public alpha(i: number): AlphaContext;
  public alpha(i?: number): AlphaContext | AlphaContext[] {
    if (i === undefined) {
      return this.getRuleContexts(AlphaContext);
    } else {
      return this.getRuleContext(i, AlphaContext);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_languagecode;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterLanguagecode) {
      listener.enterLanguagecode(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitLanguagecode) {
      listener.exitLanguagecode(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitLanguagecode) {
      return visitor.visitLanguagecode(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class LanguagecodesetContext extends ParserRuleContext {
  public LEFT_PAREN(): TerminalNode {
    return this.getToken(ECLParser.LEFT_PAREN, 0);
  }

  public ws(): WsContext[];
  public ws(i: number): WsContext;
  public ws(i?: number): WsContext | WsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(WsContext);
    } else {
      return this.getRuleContext(i, WsContext);
    }
  }

  public languagecode(): LanguagecodeContext[];
  public languagecode(i: number): LanguagecodeContext;
  public languagecode(i?: number): LanguagecodeContext | LanguagecodeContext[] {
    if (i === undefined) {
      return this.getRuleContexts(LanguagecodeContext);
    } else {
      return this.getRuleContext(i, LanguagecodeContext);
    }
  }

  public RIGHT_PAREN(): TerminalNode {
    return this.getToken(ECLParser.RIGHT_PAREN, 0);
  }

  public mws(): MwsContext[];
  public mws(i: number): MwsContext;
  public mws(i?: number): MwsContext | MwsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(MwsContext);
    } else {
      return this.getRuleContext(i, MwsContext);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_languagecodeset;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterLanguagecodeset) {
      listener.enterLanguagecodeset(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitLanguagecodeset) {
      listener.exitLanguagecodeset(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitLanguagecodeset) {
      return visitor.visitLanguagecodeset(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class TypefilterContext extends ParserRuleContext {
  public typeidfilter(): TypeidfilterContext | undefined {
    return this.tryGetRuleContext(0, TypeidfilterContext);
  }

  public typetokenfilter(): TypetokenfilterContext | undefined {
    return this.tryGetRuleContext(0, TypetokenfilterContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_typefilter;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterTypefilter) {
      listener.enterTypefilter(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitTypefilter) {
      listener.exitTypefilter(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitTypefilter) {
      return visitor.visitTypefilter(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class TypeidfilterContext extends ParserRuleContext {
  public typeid(): TypeidContext {
    return this.getRuleContext(0, TypeidContext);
  }

  public ws(): WsContext[];
  public ws(i: number): WsContext;
  public ws(i?: number): WsContext | WsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(WsContext);
    } else {
      return this.getRuleContext(i, WsContext);
    }
  }

  public booleancomparisonoperator(): BooleancomparisonoperatorContext {
    return this.getRuleContext(0, BooleancomparisonoperatorContext);
  }

  public subexpressionconstraint(): SubexpressionconstraintContext | undefined {
    return this.tryGetRuleContext(0, SubexpressionconstraintContext);
  }

  public eclconceptreferenceset(): EclconceptreferencesetContext | undefined {
    return this.tryGetRuleContext(0, EclconceptreferencesetContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_typeidfilter;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterTypeidfilter) {
      listener.enterTypeidfilter(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitTypeidfilter) {
      listener.exitTypeidfilter(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitTypeidfilter) {
      return visitor.visitTypeidfilter(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class TypeidContext extends ParserRuleContext {
  public CAP_T(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_T, 0);
  }

  public T(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.T, 0);
  }

  public CAP_Y(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_Y, 0);
  }

  public Y(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.Y, 0);
  }

  public CAP_P(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_P, 0);
  }

  public P(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.P, 0);
  }

  public CAP_E(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_E, 0);
  }

  public E(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.E, 0);
  }

  public CAP_I(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_I, 0);
  }

  public I(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.I, 0);
  }

  public CAP_D(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_D, 0);
  }

  public D(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.D, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_typeid;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterTypeid) {
      listener.enterTypeid(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitTypeid) {
      listener.exitTypeid(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitTypeid) {
      return visitor.visitTypeid(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class TypetokenfilterContext extends ParserRuleContext {
  public type(): TypeContext {
    return this.getRuleContext(0, TypeContext);
  }

  public ws(): WsContext[];
  public ws(i: number): WsContext;
  public ws(i?: number): WsContext | WsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(WsContext);
    } else {
      return this.getRuleContext(i, WsContext);
    }
  }

  public booleancomparisonoperator(): BooleancomparisonoperatorContext {
    return this.getRuleContext(0, BooleancomparisonoperatorContext);
  }

  public typetoken(): TypetokenContext | undefined {
    return this.tryGetRuleContext(0, TypetokenContext);
  }

  public typetokenset(): TypetokensetContext | undefined {
    return this.tryGetRuleContext(0, TypetokensetContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_typetokenfilter;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterTypetokenfilter) {
      listener.enterTypetokenfilter(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitTypetokenfilter) {
      listener.exitTypetokenfilter(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitTypetokenfilter) {
      return visitor.visitTypetokenfilter(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class TypeContext extends ParserRuleContext {
  public CAP_T(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_T, 0);
  }

  public T(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.T, 0);
  }

  public CAP_Y(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_Y, 0);
  }

  public Y(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.Y, 0);
  }

  public CAP_P(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_P, 0);
  }

  public P(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.P, 0);
  }

  public CAP_E(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_E, 0);
  }

  public E(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.E, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_type;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterType) {
      listener.enterType(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitType) {
      listener.exitType(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitType) {
      return visitor.visitType(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class TypetokenContext extends ParserRuleContext {
  public synonym(): SynonymContext | undefined {
    return this.tryGetRuleContext(0, SynonymContext);
  }

  public fullyspecifiedname(): FullyspecifiednameContext | undefined {
    return this.tryGetRuleContext(0, FullyspecifiednameContext);
  }

  public definition(): DefinitionContext | undefined {
    return this.tryGetRuleContext(0, DefinitionContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_typetoken;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterTypetoken) {
      listener.enterTypetoken(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitTypetoken) {
      listener.exitTypetoken(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitTypetoken) {
      return visitor.visitTypetoken(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class TypetokensetContext extends ParserRuleContext {
  public LEFT_PAREN(): TerminalNode {
    return this.getToken(ECLParser.LEFT_PAREN, 0);
  }

  public ws(): WsContext[];
  public ws(i: number): WsContext;
  public ws(i?: number): WsContext | WsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(WsContext);
    } else {
      return this.getRuleContext(i, WsContext);
    }
  }

  public typetoken(): TypetokenContext[];
  public typetoken(i: number): TypetokenContext;
  public typetoken(i?: number): TypetokenContext | TypetokenContext[] {
    if (i === undefined) {
      return this.getRuleContexts(TypetokenContext);
    } else {
      return this.getRuleContext(i, TypetokenContext);
    }
  }

  public RIGHT_PAREN(): TerminalNode {
    return this.getToken(ECLParser.RIGHT_PAREN, 0);
  }

  public mws(): MwsContext[];
  public mws(i: number): MwsContext;
  public mws(i?: number): MwsContext | MwsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(MwsContext);
    } else {
      return this.getRuleContext(i, MwsContext);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_typetokenset;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterTypetokenset) {
      listener.enterTypetokenset(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitTypetokenset) {
      listener.exitTypetokenset(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitTypetokenset) {
      return visitor.visitTypetokenset(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class SynonymContext extends ParserRuleContext {
  public CAP_S(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_S, 0);
  }

  public S(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.S, 0);
  }

  public CAP_Y(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_Y, 0);
  }

  public Y(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.Y, 0);
  }

  public CAP_N(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_N, 0);
  }

  public N(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.N, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_synonym;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterSynonym) {
      listener.enterSynonym(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitSynonym) {
      listener.exitSynonym(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitSynonym) {
      return visitor.visitSynonym(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class FullyspecifiednameContext extends ParserRuleContext {
  public CAP_F(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_F, 0);
  }

  public F(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.F, 0);
  }

  public CAP_S(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_S, 0);
  }

  public S(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.S, 0);
  }

  public CAP_N(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_N, 0);
  }

  public N(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.N, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_fullyspecifiedname;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterFullyspecifiedname) {
      listener.enterFullyspecifiedname(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitFullyspecifiedname) {
      listener.exitFullyspecifiedname(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitFullyspecifiedname) {
      return visitor.visitFullyspecifiedname(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class DefinitionContext extends ParserRuleContext {
  public CAP_D(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_D, 0);
  }

  public D(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.D, 0);
  }

  public CAP_E(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_E, 0);
  }

  public E(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.E, 0);
  }

  public CAP_F(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_F, 0);
  }

  public F(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.F, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_definition;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterDefinition) {
      listener.enterDefinition(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitDefinition) {
      listener.exitDefinition(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitDefinition) {
      return visitor.visitDefinition(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class DialectfilterContext extends ParserRuleContext {
  public dialectidfilter(): DialectidfilterContext | undefined {
    return this.tryGetRuleContext(0, DialectidfilterContext);
  }

  public dialectaliasfilter(): DialectaliasfilterContext | undefined {
    return this.tryGetRuleContext(0, DialectaliasfilterContext);
  }

  public ws(): WsContext | undefined {
    return this.tryGetRuleContext(0, WsContext);
  }

  public acceptabilityset(): AcceptabilitysetContext | undefined {
    return this.tryGetRuleContext(0, AcceptabilitysetContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_dialectfilter;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterDialectfilter) {
      listener.enterDialectfilter(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitDialectfilter) {
      listener.exitDialectfilter(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitDialectfilter) {
      return visitor.visitDialectfilter(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class DialectidfilterContext extends ParserRuleContext {
  public dialectid(): DialectidContext {
    return this.getRuleContext(0, DialectidContext);
  }

  public ws(): WsContext[];
  public ws(i: number): WsContext;
  public ws(i?: number): WsContext | WsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(WsContext);
    } else {
      return this.getRuleContext(i, WsContext);
    }
  }

  public booleancomparisonoperator(): BooleancomparisonoperatorContext {
    return this.getRuleContext(0, BooleancomparisonoperatorContext);
  }

  public subexpressionconstraint(): SubexpressionconstraintContext | undefined {
    return this.tryGetRuleContext(0, SubexpressionconstraintContext);
  }

  public dialectidset(): DialectidsetContext | undefined {
    return this.tryGetRuleContext(0, DialectidsetContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_dialectidfilter;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterDialectidfilter) {
      listener.enterDialectidfilter(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitDialectidfilter) {
      listener.exitDialectidfilter(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitDialectidfilter) {
      return visitor.visitDialectidfilter(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class DialectidContext extends ParserRuleContext {
  public CAP_D(): TerminalNode[];
  public CAP_D(i: number): TerminalNode;
  public CAP_D(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.CAP_D);
    } else {
      return this.getToken(ECLParser.CAP_D, i);
    }
  }

  public D(): TerminalNode[];
  public D(i: number): TerminalNode;
  public D(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.D);
    } else {
      return this.getToken(ECLParser.D, i);
    }
  }

  public CAP_I(): TerminalNode[];
  public CAP_I(i: number): TerminalNode;
  public CAP_I(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.CAP_I);
    } else {
      return this.getToken(ECLParser.CAP_I, i);
    }
  }

  public I(): TerminalNode[];
  public I(i: number): TerminalNode;
  public I(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.I);
    } else {
      return this.getToken(ECLParser.I, i);
    }
  }

  public CAP_A(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_A, 0);
  }

  public A(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.A, 0);
  }

  public CAP_L(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_L, 0);
  }

  public L(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.L, 0);
  }

  public CAP_E(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_E, 0);
  }

  public E(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.E, 0);
  }

  public CAP_C(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_C, 0);
  }

  public C(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.C, 0);
  }

  public CAP_T(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_T, 0);
  }

  public T(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.T, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_dialectid;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterDialectid) {
      listener.enterDialectid(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitDialectid) {
      listener.exitDialectid(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitDialectid) {
      return visitor.visitDialectid(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class DialectaliasfilterContext extends ParserRuleContext {
  public dialect(): DialectContext {
    return this.getRuleContext(0, DialectContext);
  }

  public ws(): WsContext[];
  public ws(i: number): WsContext;
  public ws(i?: number): WsContext | WsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(WsContext);
    } else {
      return this.getRuleContext(i, WsContext);
    }
  }

  public booleancomparisonoperator(): BooleancomparisonoperatorContext {
    return this.getRuleContext(0, BooleancomparisonoperatorContext);
  }

  public dialectalias(): DialectaliasContext | undefined {
    return this.tryGetRuleContext(0, DialectaliasContext);
  }

  public dialectaliasset(): DialectaliassetContext | undefined {
    return this.tryGetRuleContext(0, DialectaliassetContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_dialectaliasfilter;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterDialectaliasfilter) {
      listener.enterDialectaliasfilter(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitDialectaliasfilter) {
      listener.exitDialectaliasfilter(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitDialectaliasfilter) {
      return visitor.visitDialectaliasfilter(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class DialectContext extends ParserRuleContext {
  public CAP_D(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_D, 0);
  }

  public D(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.D, 0);
  }

  public CAP_I(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_I, 0);
  }

  public I(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.I, 0);
  }

  public CAP_A(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_A, 0);
  }

  public A(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.A, 0);
  }

  public CAP_L(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_L, 0);
  }

  public L(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.L, 0);
  }

  public CAP_E(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_E, 0);
  }

  public E(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.E, 0);
  }

  public CAP_C(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_C, 0);
  }

  public C(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.C, 0);
  }

  public CAP_T(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_T, 0);
  }

  public T(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.T, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_dialect;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterDialect) {
      listener.enterDialect(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitDialect) {
      listener.exitDialect(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitDialect) {
      return visitor.visitDialect(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class DialectaliasContext extends ParserRuleContext {
  public alpha(): AlphaContext[];
  public alpha(i: number): AlphaContext;
  public alpha(i?: number): AlphaContext | AlphaContext[] {
    if (i === undefined) {
      return this.getRuleContexts(AlphaContext);
    } else {
      return this.getRuleContext(i, AlphaContext);
    }
  }

  public dash(): DashContext[];
  public dash(i: number): DashContext;
  public dash(i?: number): DashContext | DashContext[] {
    if (i === undefined) {
      return this.getRuleContexts(DashContext);
    } else {
      return this.getRuleContext(i, DashContext);
    }
  }

  public integervalue(): IntegervalueContext[];
  public integervalue(i: number): IntegervalueContext;
  public integervalue(i?: number): IntegervalueContext | IntegervalueContext[] {
    if (i === undefined) {
      return this.getRuleContexts(IntegervalueContext);
    } else {
      return this.getRuleContext(i, IntegervalueContext);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_dialectalias;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterDialectalias) {
      listener.enterDialectalias(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitDialectalias) {
      listener.exitDialectalias(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitDialectalias) {
      return visitor.visitDialectalias(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class DialectaliassetContext extends ParserRuleContext {
  public LEFT_PAREN(): TerminalNode {
    return this.getToken(ECLParser.LEFT_PAREN, 0);
  }

  public ws(): WsContext[];
  public ws(i: number): WsContext;
  public ws(i?: number): WsContext | WsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(WsContext);
    } else {
      return this.getRuleContext(i, WsContext);
    }
  }

  public dialectalias(): DialectaliasContext[];
  public dialectalias(i: number): DialectaliasContext;
  public dialectalias(i?: number): DialectaliasContext | DialectaliasContext[] {
    if (i === undefined) {
      return this.getRuleContexts(DialectaliasContext);
    } else {
      return this.getRuleContext(i, DialectaliasContext);
    }
  }

  public RIGHT_PAREN(): TerminalNode {
    return this.getToken(ECLParser.RIGHT_PAREN, 0);
  }

  public acceptabilityset(): AcceptabilitysetContext[];
  public acceptabilityset(i: number): AcceptabilitysetContext;
  public acceptabilityset(i?: number): AcceptabilitysetContext | AcceptabilitysetContext[] {
    if (i === undefined) {
      return this.getRuleContexts(AcceptabilitysetContext);
    } else {
      return this.getRuleContext(i, AcceptabilitysetContext);
    }
  }

  public mws(): MwsContext[];
  public mws(i: number): MwsContext;
  public mws(i?: number): MwsContext | MwsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(MwsContext);
    } else {
      return this.getRuleContext(i, MwsContext);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_dialectaliasset;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterDialectaliasset) {
      listener.enterDialectaliasset(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitDialectaliasset) {
      listener.exitDialectaliasset(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitDialectaliasset) {
      return visitor.visitDialectaliasset(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class DialectidsetContext extends ParserRuleContext {
  public LEFT_PAREN(): TerminalNode {
    return this.getToken(ECLParser.LEFT_PAREN, 0);
  }

  public ws(): WsContext[];
  public ws(i: number): WsContext;
  public ws(i?: number): WsContext | WsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(WsContext);
    } else {
      return this.getRuleContext(i, WsContext);
    }
  }

  public eclconceptreference(): EclconceptreferenceContext[];
  public eclconceptreference(i: number): EclconceptreferenceContext;
  public eclconceptreference(i?: number): EclconceptreferenceContext | EclconceptreferenceContext[] {
    if (i === undefined) {
      return this.getRuleContexts(EclconceptreferenceContext);
    } else {
      return this.getRuleContext(i, EclconceptreferenceContext);
    }
  }

  public RIGHT_PAREN(): TerminalNode {
    return this.getToken(ECLParser.RIGHT_PAREN, 0);
  }

  public acceptabilityset(): AcceptabilitysetContext[];
  public acceptabilityset(i: number): AcceptabilitysetContext;
  public acceptabilityset(i?: number): AcceptabilitysetContext | AcceptabilitysetContext[] {
    if (i === undefined) {
      return this.getRuleContexts(AcceptabilitysetContext);
    } else {
      return this.getRuleContext(i, AcceptabilitysetContext);
    }
  }

  public mws(): MwsContext[];
  public mws(i: number): MwsContext;
  public mws(i?: number): MwsContext | MwsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(MwsContext);
    } else {
      return this.getRuleContext(i, MwsContext);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_dialectidset;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterDialectidset) {
      listener.enterDialectidset(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitDialectidset) {
      listener.exitDialectidset(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitDialectidset) {
      return visitor.visitDialectidset(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class AcceptabilitysetContext extends ParserRuleContext {
  public acceptabilityconceptreferenceset(): AcceptabilityconceptreferencesetContext | undefined {
    return this.tryGetRuleContext(0, AcceptabilityconceptreferencesetContext);
  }

  public acceptabilitytokenset(): AcceptabilitytokensetContext | undefined {
    return this.tryGetRuleContext(0, AcceptabilitytokensetContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_acceptabilityset;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterAcceptabilityset) {
      listener.enterAcceptabilityset(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitAcceptabilityset) {
      listener.exitAcceptabilityset(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitAcceptabilityset) {
      return visitor.visitAcceptabilityset(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class AcceptabilityconceptreferencesetContext extends ParserRuleContext {
  public LEFT_PAREN(): TerminalNode {
    return this.getToken(ECLParser.LEFT_PAREN, 0);
  }

  public ws(): WsContext[];
  public ws(i: number): WsContext;
  public ws(i?: number): WsContext | WsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(WsContext);
    } else {
      return this.getRuleContext(i, WsContext);
    }
  }

  public eclconceptreference(): EclconceptreferenceContext[];
  public eclconceptreference(i: number): EclconceptreferenceContext;
  public eclconceptreference(i?: number): EclconceptreferenceContext | EclconceptreferenceContext[] {
    if (i === undefined) {
      return this.getRuleContexts(EclconceptreferenceContext);
    } else {
      return this.getRuleContext(i, EclconceptreferenceContext);
    }
  }

  public RIGHT_PAREN(): TerminalNode {
    return this.getToken(ECLParser.RIGHT_PAREN, 0);
  }

  public mws(): MwsContext[];
  public mws(i: number): MwsContext;
  public mws(i?: number): MwsContext | MwsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(MwsContext);
    } else {
      return this.getRuleContext(i, MwsContext);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_acceptabilityconceptreferenceset;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterAcceptabilityconceptreferenceset) {
      listener.enterAcceptabilityconceptreferenceset(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitAcceptabilityconceptreferenceset) {
      listener.exitAcceptabilityconceptreferenceset(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitAcceptabilityconceptreferenceset) {
      return visitor.visitAcceptabilityconceptreferenceset(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class AcceptabilitytokensetContext extends ParserRuleContext {
  public LEFT_PAREN(): TerminalNode {
    return this.getToken(ECLParser.LEFT_PAREN, 0);
  }

  public ws(): WsContext[];
  public ws(i: number): WsContext;
  public ws(i?: number): WsContext | WsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(WsContext);
    } else {
      return this.getRuleContext(i, WsContext);
    }
  }

  public acceptabilitytoken(): AcceptabilitytokenContext[];
  public acceptabilitytoken(i: number): AcceptabilitytokenContext;
  public acceptabilitytoken(i?: number): AcceptabilitytokenContext | AcceptabilitytokenContext[] {
    if (i === undefined) {
      return this.getRuleContexts(AcceptabilitytokenContext);
    } else {
      return this.getRuleContext(i, AcceptabilitytokenContext);
    }
  }

  public RIGHT_PAREN(): TerminalNode {
    return this.getToken(ECLParser.RIGHT_PAREN, 0);
  }

  public mws(): MwsContext[];
  public mws(i: number): MwsContext;
  public mws(i?: number): MwsContext | MwsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(MwsContext);
    } else {
      return this.getRuleContext(i, MwsContext);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_acceptabilitytokenset;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterAcceptabilitytokenset) {
      listener.enterAcceptabilitytokenset(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitAcceptabilitytokenset) {
      listener.exitAcceptabilitytokenset(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitAcceptabilitytokenset) {
      return visitor.visitAcceptabilitytokenset(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class AcceptabilitytokenContext extends ParserRuleContext {
  public acceptable(): AcceptableContext | undefined {
    return this.tryGetRuleContext(0, AcceptableContext);
  }

  public preferred(): PreferredContext | undefined {
    return this.tryGetRuleContext(0, PreferredContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_acceptabilitytoken;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterAcceptabilitytoken) {
      listener.enterAcceptabilitytoken(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitAcceptabilitytoken) {
      listener.exitAcceptabilitytoken(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitAcceptabilitytoken) {
      return visitor.visitAcceptabilitytoken(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class AcceptableContext extends ParserRuleContext {
  public CAP_A(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_A, 0);
  }

  public A(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.A, 0);
  }

  public CAP_C(): TerminalNode[];
  public CAP_C(i: number): TerminalNode;
  public CAP_C(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.CAP_C);
    } else {
      return this.getToken(ECLParser.CAP_C, i);
    }
  }

  public C(): TerminalNode[];
  public C(i: number): TerminalNode;
  public C(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.C);
    } else {
      return this.getToken(ECLParser.C, i);
    }
  }

  public CAP_E(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_E, 0);
  }

  public E(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.E, 0);
  }

  public CAP_P(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_P, 0);
  }

  public P(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.P, 0);
  }

  public CAP_T(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_T, 0);
  }

  public T(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.T, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_acceptable;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterAcceptable) {
      listener.enterAcceptable(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitAcceptable) {
      listener.exitAcceptable(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitAcceptable) {
      return visitor.visitAcceptable(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class PreferredContext extends ParserRuleContext {
  public CAP_P(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_P, 0);
  }

  public P(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.P, 0);
  }

  public CAP_R(): TerminalNode[];
  public CAP_R(i: number): TerminalNode;
  public CAP_R(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.CAP_R);
    } else {
      return this.getToken(ECLParser.CAP_R, i);
    }
  }

  public R(): TerminalNode[];
  public R(i: number): TerminalNode;
  public R(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.R);
    } else {
      return this.getToken(ECLParser.R, i);
    }
  }

  public CAP_E(): TerminalNode[];
  public CAP_E(i: number): TerminalNode;
  public CAP_E(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.CAP_E);
    } else {
      return this.getToken(ECLParser.CAP_E, i);
    }
  }

  public E(): TerminalNode[];
  public E(i: number): TerminalNode;
  public E(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.E);
    } else {
      return this.getToken(ECLParser.E, i);
    }
  }

  public CAP_F(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_F, 0);
  }

  public F(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.F, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_preferred;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterPreferred) {
      listener.enterPreferred(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitPreferred) {
      listener.exitPreferred(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitPreferred) {
      return visitor.visitPreferred(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class ConceptfilterconstraintContext extends ParserRuleContext {
  public ws(): WsContext[];
  public ws(i: number): WsContext;
  public ws(i?: number): WsContext | WsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(WsContext);
    } else {
      return this.getRuleContext(i, WsContext);
    }
  }

  public conceptfilter(): ConceptfilterContext[];
  public conceptfilter(i: number): ConceptfilterContext;
  public conceptfilter(i?: number): ConceptfilterContext | ConceptfilterContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ConceptfilterContext);
    } else {
      return this.getRuleContext(i, ConceptfilterContext);
    }
  }

  public LEFT_CURLY_BRACE(): TerminalNode[];
  public LEFT_CURLY_BRACE(i: number): TerminalNode;
  public LEFT_CURLY_BRACE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.LEFT_CURLY_BRACE);
    } else {
      return this.getToken(ECLParser.LEFT_CURLY_BRACE, i);
    }
  }

  public RIGHT_CURLY_BRACE(): TerminalNode[];
  public RIGHT_CURLY_BRACE(i: number): TerminalNode;
  public RIGHT_CURLY_BRACE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.RIGHT_CURLY_BRACE);
    } else {
      return this.getToken(ECLParser.RIGHT_CURLY_BRACE, i);
    }
  }

  public CAP_C(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_C, 0);
  }

  public C(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.C, 0);
  }

  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.COMMA);
    } else {
      return this.getToken(ECLParser.COMMA, i);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_conceptfilterconstraint;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterConceptfilterconstraint) {
      listener.enterConceptfilterconstraint(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitConceptfilterconstraint) {
      listener.exitConceptfilterconstraint(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitConceptfilterconstraint) {
      return visitor.visitConceptfilterconstraint(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class ConceptfilterContext extends ParserRuleContext {
  public definitionstatusfilter(): DefinitionstatusfilterContext | undefined {
    return this.tryGetRuleContext(0, DefinitionstatusfilterContext);
  }

  public modulefilter(): ModulefilterContext | undefined {
    return this.tryGetRuleContext(0, ModulefilterContext);
  }

  public effectivetimefilter(): EffectivetimefilterContext | undefined {
    return this.tryGetRuleContext(0, EffectivetimefilterContext);
  }

  public activefilter(): ActivefilterContext | undefined {
    return this.tryGetRuleContext(0, ActivefilterContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_conceptfilter;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterConceptfilter) {
      listener.enterConceptfilter(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitConceptfilter) {
      listener.exitConceptfilter(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitConceptfilter) {
      return visitor.visitConceptfilter(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class DefinitionstatusfilterContext extends ParserRuleContext {
  public definitionstatusidfilter(): DefinitionstatusidfilterContext | undefined {
    return this.tryGetRuleContext(0, DefinitionstatusidfilterContext);
  }

  public definitionstatustokenfilter(): DefinitionstatustokenfilterContext | undefined {
    return this.tryGetRuleContext(0, DefinitionstatustokenfilterContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_definitionstatusfilter;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterDefinitionstatusfilter) {
      listener.enterDefinitionstatusfilter(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitDefinitionstatusfilter) {
      listener.exitDefinitionstatusfilter(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitDefinitionstatusfilter) {
      return visitor.visitDefinitionstatusfilter(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class DefinitionstatusidfilterContext extends ParserRuleContext {
  public definitionstatusidkeyword(): DefinitionstatusidkeywordContext {
    return this.getRuleContext(0, DefinitionstatusidkeywordContext);
  }

  public ws(): WsContext[];
  public ws(i: number): WsContext;
  public ws(i?: number): WsContext | WsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(WsContext);
    } else {
      return this.getRuleContext(i, WsContext);
    }
  }

  public booleancomparisonoperator(): BooleancomparisonoperatorContext {
    return this.getRuleContext(0, BooleancomparisonoperatorContext);
  }

  public subexpressionconstraint(): SubexpressionconstraintContext | undefined {
    return this.tryGetRuleContext(0, SubexpressionconstraintContext);
  }

  public eclconceptreferenceset(): EclconceptreferencesetContext | undefined {
    return this.tryGetRuleContext(0, EclconceptreferencesetContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_definitionstatusidfilter;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterDefinitionstatusidfilter) {
      listener.enterDefinitionstatusidfilter(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitDefinitionstatusidfilter) {
      listener.exitDefinitionstatusidfilter(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitDefinitionstatusidfilter) {
      return visitor.visitDefinitionstatusidfilter(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class DefinitionstatusidkeywordContext extends ParserRuleContext {
  public CAP_D(): TerminalNode[];
  public CAP_D(i: number): TerminalNode;
  public CAP_D(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.CAP_D);
    } else {
      return this.getToken(ECLParser.CAP_D, i);
    }
  }

  public D(): TerminalNode[];
  public D(i: number): TerminalNode;
  public D(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.D);
    } else {
      return this.getToken(ECLParser.D, i);
    }
  }

  public CAP_E(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_E, 0);
  }

  public E(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.E, 0);
  }

  public CAP_F(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_F, 0);
  }

  public F(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.F, 0);
  }

  public CAP_I(): TerminalNode[];
  public CAP_I(i: number): TerminalNode;
  public CAP_I(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.CAP_I);
    } else {
      return this.getToken(ECLParser.CAP_I, i);
    }
  }

  public I(): TerminalNode[];
  public I(i: number): TerminalNode;
  public I(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.I);
    } else {
      return this.getToken(ECLParser.I, i);
    }
  }

  public CAP_N(): TerminalNode[];
  public CAP_N(i: number): TerminalNode;
  public CAP_N(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.CAP_N);
    } else {
      return this.getToken(ECLParser.CAP_N, i);
    }
  }

  public N(): TerminalNode[];
  public N(i: number): TerminalNode;
  public N(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.N);
    } else {
      return this.getToken(ECLParser.N, i);
    }
  }

  public CAP_T(): TerminalNode[];
  public CAP_T(i: number): TerminalNode;
  public CAP_T(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.CAP_T);
    } else {
      return this.getToken(ECLParser.CAP_T, i);
    }
  }

  public T(): TerminalNode[];
  public T(i: number): TerminalNode;
  public T(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.T);
    } else {
      return this.getToken(ECLParser.T, i);
    }
  }

  public CAP_O(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_O, 0);
  }

  public O(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.O, 0);
  }

  public CAP_S(): TerminalNode[];
  public CAP_S(i: number): TerminalNode;
  public CAP_S(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.CAP_S);
    } else {
      return this.getToken(ECLParser.CAP_S, i);
    }
  }

  public S(): TerminalNode[];
  public S(i: number): TerminalNode;
  public S(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.S);
    } else {
      return this.getToken(ECLParser.S, i);
    }
  }

  public CAP_A(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_A, 0);
  }

  public A(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.A, 0);
  }

  public CAP_U(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_U, 0);
  }

  public U(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.U, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_definitionstatusidkeyword;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterDefinitionstatusidkeyword) {
      listener.enterDefinitionstatusidkeyword(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitDefinitionstatusidkeyword) {
      listener.exitDefinitionstatusidkeyword(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitDefinitionstatusidkeyword) {
      return visitor.visitDefinitionstatusidkeyword(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class DefinitionstatustokenfilterContext extends ParserRuleContext {
  public definitionstatuskeyword(): DefinitionstatuskeywordContext {
    return this.getRuleContext(0, DefinitionstatuskeywordContext);
  }

  public ws(): WsContext[];
  public ws(i: number): WsContext;
  public ws(i?: number): WsContext | WsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(WsContext);
    } else {
      return this.getRuleContext(i, WsContext);
    }
  }

  public booleancomparisonoperator(): BooleancomparisonoperatorContext {
    return this.getRuleContext(0, BooleancomparisonoperatorContext);
  }

  public definitionstatustoken(): DefinitionstatustokenContext | undefined {
    return this.tryGetRuleContext(0, DefinitionstatustokenContext);
  }

  public definitionstatustokenset(): DefinitionstatustokensetContext | undefined {
    return this.tryGetRuleContext(0, DefinitionstatustokensetContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_definitionstatustokenfilter;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterDefinitionstatustokenfilter) {
      listener.enterDefinitionstatustokenfilter(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitDefinitionstatustokenfilter) {
      listener.exitDefinitionstatustokenfilter(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitDefinitionstatustokenfilter) {
      return visitor.visitDefinitionstatustokenfilter(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class DefinitionstatuskeywordContext extends ParserRuleContext {
  public CAP_D(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_D, 0);
  }

  public D(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.D, 0);
  }

  public CAP_E(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_E, 0);
  }

  public E(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.E, 0);
  }

  public CAP_F(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_F, 0);
  }

  public F(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.F, 0);
  }

  public CAP_I(): TerminalNode[];
  public CAP_I(i: number): TerminalNode;
  public CAP_I(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.CAP_I);
    } else {
      return this.getToken(ECLParser.CAP_I, i);
    }
  }

  public I(): TerminalNode[];
  public I(i: number): TerminalNode;
  public I(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.I);
    } else {
      return this.getToken(ECLParser.I, i);
    }
  }

  public CAP_N(): TerminalNode[];
  public CAP_N(i: number): TerminalNode;
  public CAP_N(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.CAP_N);
    } else {
      return this.getToken(ECLParser.CAP_N, i);
    }
  }

  public N(): TerminalNode[];
  public N(i: number): TerminalNode;
  public N(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.N);
    } else {
      return this.getToken(ECLParser.N, i);
    }
  }

  public CAP_T(): TerminalNode[];
  public CAP_T(i: number): TerminalNode;
  public CAP_T(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.CAP_T);
    } else {
      return this.getToken(ECLParser.CAP_T, i);
    }
  }

  public T(): TerminalNode[];
  public T(i: number): TerminalNode;
  public T(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.T);
    } else {
      return this.getToken(ECLParser.T, i);
    }
  }

  public CAP_O(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_O, 0);
  }

  public O(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.O, 0);
  }

  public CAP_S(): TerminalNode[];
  public CAP_S(i: number): TerminalNode;
  public CAP_S(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.CAP_S);
    } else {
      return this.getToken(ECLParser.CAP_S, i);
    }
  }

  public S(): TerminalNode[];
  public S(i: number): TerminalNode;
  public S(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.S);
    } else {
      return this.getToken(ECLParser.S, i);
    }
  }

  public CAP_A(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_A, 0);
  }

  public A(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.A, 0);
  }

  public CAP_U(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_U, 0);
  }

  public U(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.U, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_definitionstatuskeyword;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterDefinitionstatuskeyword) {
      listener.enterDefinitionstatuskeyword(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitDefinitionstatuskeyword) {
      listener.exitDefinitionstatuskeyword(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitDefinitionstatuskeyword) {
      return visitor.visitDefinitionstatuskeyword(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class DefinitionstatustokenContext extends ParserRuleContext {
  public primitivetoken(): PrimitivetokenContext | undefined {
    return this.tryGetRuleContext(0, PrimitivetokenContext);
  }

  public definedtoken(): DefinedtokenContext | undefined {
    return this.tryGetRuleContext(0, DefinedtokenContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_definitionstatustoken;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterDefinitionstatustoken) {
      listener.enterDefinitionstatustoken(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitDefinitionstatustoken) {
      listener.exitDefinitionstatustoken(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitDefinitionstatustoken) {
      return visitor.visitDefinitionstatustoken(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class DefinitionstatustokensetContext extends ParserRuleContext {
  public LEFT_PAREN(): TerminalNode {
    return this.getToken(ECLParser.LEFT_PAREN, 0);
  }

  public ws(): WsContext[];
  public ws(i: number): WsContext;
  public ws(i?: number): WsContext | WsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(WsContext);
    } else {
      return this.getRuleContext(i, WsContext);
    }
  }

  public definitionstatustoken(): DefinitionstatustokenContext[];
  public definitionstatustoken(i: number): DefinitionstatustokenContext;
  public definitionstatustoken(i?: number): DefinitionstatustokenContext | DefinitionstatustokenContext[] {
    if (i === undefined) {
      return this.getRuleContexts(DefinitionstatustokenContext);
    } else {
      return this.getRuleContext(i, DefinitionstatustokenContext);
    }
  }

  public RIGHT_PAREN(): TerminalNode {
    return this.getToken(ECLParser.RIGHT_PAREN, 0);
  }

  public mws(): MwsContext[];
  public mws(i: number): MwsContext;
  public mws(i?: number): MwsContext | MwsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(MwsContext);
    } else {
      return this.getRuleContext(i, MwsContext);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_definitionstatustokenset;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterDefinitionstatustokenset) {
      listener.enterDefinitionstatustokenset(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitDefinitionstatustokenset) {
      listener.exitDefinitionstatustokenset(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitDefinitionstatustokenset) {
      return visitor.visitDefinitionstatustokenset(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class PrimitivetokenContext extends ParserRuleContext {
  public CAP_P(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_P, 0);
  }

  public P(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.P, 0);
  }

  public CAP_R(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_R, 0);
  }

  public R(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.R, 0);
  }

  public CAP_I(): TerminalNode[];
  public CAP_I(i: number): TerminalNode;
  public CAP_I(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.CAP_I);
    } else {
      return this.getToken(ECLParser.CAP_I, i);
    }
  }

  public I(): TerminalNode[];
  public I(i: number): TerminalNode;
  public I(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.I);
    } else {
      return this.getToken(ECLParser.I, i);
    }
  }

  public CAP_M(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_M, 0);
  }

  public M(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.M, 0);
  }

  public CAP_T(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_T, 0);
  }

  public T(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.T, 0);
  }

  public CAP_V(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_V, 0);
  }

  public V(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.V, 0);
  }

  public CAP_E(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_E, 0);
  }

  public E(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.E, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_primitivetoken;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterPrimitivetoken) {
      listener.enterPrimitivetoken(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitPrimitivetoken) {
      listener.exitPrimitivetoken(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitPrimitivetoken) {
      return visitor.visitPrimitivetoken(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class DefinedtokenContext extends ParserRuleContext {
  public CAP_D(): TerminalNode[];
  public CAP_D(i: number): TerminalNode;
  public CAP_D(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.CAP_D);
    } else {
      return this.getToken(ECLParser.CAP_D, i);
    }
  }

  public D(): TerminalNode[];
  public D(i: number): TerminalNode;
  public D(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.D);
    } else {
      return this.getToken(ECLParser.D, i);
    }
  }

  public CAP_E(): TerminalNode[];
  public CAP_E(i: number): TerminalNode;
  public CAP_E(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.CAP_E);
    } else {
      return this.getToken(ECLParser.CAP_E, i);
    }
  }

  public E(): TerminalNode[];
  public E(i: number): TerminalNode;
  public E(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.E);
    } else {
      return this.getToken(ECLParser.E, i);
    }
  }

  public CAP_F(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_F, 0);
  }

  public F(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.F, 0);
  }

  public CAP_I(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_I, 0);
  }

  public I(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.I, 0);
  }

  public CAP_N(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_N, 0);
  }

  public N(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.N, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_definedtoken;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterDefinedtoken) {
      listener.enterDefinedtoken(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitDefinedtoken) {
      listener.exitDefinedtoken(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitDefinedtoken) {
      return visitor.visitDefinedtoken(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class ModulefilterContext extends ParserRuleContext {
  public moduleidkeyword(): ModuleidkeywordContext {
    return this.getRuleContext(0, ModuleidkeywordContext);
  }

  public ws(): WsContext[];
  public ws(i: number): WsContext;
  public ws(i?: number): WsContext | WsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(WsContext);
    } else {
      return this.getRuleContext(i, WsContext);
    }
  }

  public booleancomparisonoperator(): BooleancomparisonoperatorContext {
    return this.getRuleContext(0, BooleancomparisonoperatorContext);
  }

  public subexpressionconstraint(): SubexpressionconstraintContext | undefined {
    return this.tryGetRuleContext(0, SubexpressionconstraintContext);
  }

  public eclconceptreferenceset(): EclconceptreferencesetContext | undefined {
    return this.tryGetRuleContext(0, EclconceptreferencesetContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_modulefilter;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterModulefilter) {
      listener.enterModulefilter(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitModulefilter) {
      listener.exitModulefilter(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitModulefilter) {
      return visitor.visitModulefilter(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class ModuleidkeywordContext extends ParserRuleContext {
  public CAP_M(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_M, 0);
  }

  public M(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.M, 0);
  }

  public CAP_O(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_O, 0);
  }

  public O(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.O, 0);
  }

  public CAP_D(): TerminalNode[];
  public CAP_D(i: number): TerminalNode;
  public CAP_D(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.CAP_D);
    } else {
      return this.getToken(ECLParser.CAP_D, i);
    }
  }

  public D(): TerminalNode[];
  public D(i: number): TerminalNode;
  public D(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.D);
    } else {
      return this.getToken(ECLParser.D, i);
    }
  }

  public CAP_U(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_U, 0);
  }

  public U(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.U, 0);
  }

  public CAP_L(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_L, 0);
  }

  public L(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.L, 0);
  }

  public CAP_E(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_E, 0);
  }

  public E(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.E, 0);
  }

  public CAP_I(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_I, 0);
  }

  public I(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.I, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_moduleidkeyword;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterModuleidkeyword) {
      listener.enterModuleidkeyword(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitModuleidkeyword) {
      listener.exitModuleidkeyword(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitModuleidkeyword) {
      return visitor.visitModuleidkeyword(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class EffectivetimefilterContext extends ParserRuleContext {
  public effectivetimekeyword(): EffectivetimekeywordContext {
    return this.getRuleContext(0, EffectivetimekeywordContext);
  }

  public ws(): WsContext[];
  public ws(i: number): WsContext;
  public ws(i?: number): WsContext | WsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(WsContext);
    } else {
      return this.getRuleContext(i, WsContext);
    }
  }

  public timecomparisonoperator(): TimecomparisonoperatorContext {
    return this.getRuleContext(0, TimecomparisonoperatorContext);
  }

  public timevalue(): TimevalueContext | undefined {
    return this.tryGetRuleContext(0, TimevalueContext);
  }

  public timevalueset(): TimevaluesetContext | undefined {
    return this.tryGetRuleContext(0, TimevaluesetContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_effectivetimefilter;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterEffectivetimefilter) {
      listener.enterEffectivetimefilter(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitEffectivetimefilter) {
      listener.exitEffectivetimefilter(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitEffectivetimefilter) {
      return visitor.visitEffectivetimefilter(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class EffectivetimekeywordContext extends ParserRuleContext {
  public CAP_E(): TerminalNode[];
  public CAP_E(i: number): TerminalNode;
  public CAP_E(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.CAP_E);
    } else {
      return this.getToken(ECLParser.CAP_E, i);
    }
  }

  public E(): TerminalNode[];
  public E(i: number): TerminalNode;
  public E(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.E);
    } else {
      return this.getToken(ECLParser.E, i);
    }
  }

  public CAP_F(): TerminalNode[];
  public CAP_F(i: number): TerminalNode;
  public CAP_F(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.CAP_F);
    } else {
      return this.getToken(ECLParser.CAP_F, i);
    }
  }

  public F(): TerminalNode[];
  public F(i: number): TerminalNode;
  public F(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.F);
    } else {
      return this.getToken(ECLParser.F, i);
    }
  }

  public CAP_C(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_C, 0);
  }

  public C(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.C, 0);
  }

  public CAP_T(): TerminalNode[];
  public CAP_T(i: number): TerminalNode;
  public CAP_T(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.CAP_T);
    } else {
      return this.getToken(ECLParser.CAP_T, i);
    }
  }

  public T(): TerminalNode[];
  public T(i: number): TerminalNode;
  public T(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.T);
    } else {
      return this.getToken(ECLParser.T, i);
    }
  }

  public CAP_I(): TerminalNode[];
  public CAP_I(i: number): TerminalNode;
  public CAP_I(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.CAP_I);
    } else {
      return this.getToken(ECLParser.CAP_I, i);
    }
  }

  public I(): TerminalNode[];
  public I(i: number): TerminalNode;
  public I(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.I);
    } else {
      return this.getToken(ECLParser.I, i);
    }
  }

  public CAP_V(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_V, 0);
  }

  public V(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.V, 0);
  }

  public CAP_M(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_M, 0);
  }

  public M(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.M, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_effectivetimekeyword;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterEffectivetimekeyword) {
      listener.enterEffectivetimekeyword(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitEffectivetimekeyword) {
      listener.exitEffectivetimekeyword(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitEffectivetimekeyword) {
      return visitor.visitEffectivetimekeyword(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class TimevalueContext extends ParserRuleContext {
  public qm(): QmContext[];
  public qm(i: number): QmContext;
  public qm(i?: number): QmContext | QmContext[] {
    if (i === undefined) {
      return this.getRuleContexts(QmContext);
    } else {
      return this.getRuleContext(i, QmContext);
    }
  }

  public year(): YearContext | undefined {
    return this.tryGetRuleContext(0, YearContext);
  }

  public month(): MonthContext | undefined {
    return this.tryGetRuleContext(0, MonthContext);
  }

  public day(): DayContext | undefined {
    return this.tryGetRuleContext(0, DayContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_timevalue;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterTimevalue) {
      listener.enterTimevalue(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitTimevalue) {
      listener.exitTimevalue(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitTimevalue) {
      return visitor.visitTimevalue(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class TimevaluesetContext extends ParserRuleContext {
  public LEFT_PAREN(): TerminalNode {
    return this.getToken(ECLParser.LEFT_PAREN, 0);
  }

  public ws(): WsContext[];
  public ws(i: number): WsContext;
  public ws(i?: number): WsContext | WsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(WsContext);
    } else {
      return this.getRuleContext(i, WsContext);
    }
  }

  public timevalue(): TimevalueContext[];
  public timevalue(i: number): TimevalueContext;
  public timevalue(i?: number): TimevalueContext | TimevalueContext[] {
    if (i === undefined) {
      return this.getRuleContexts(TimevalueContext);
    } else {
      return this.getRuleContext(i, TimevalueContext);
    }
  }

  public RIGHT_PAREN(): TerminalNode {
    return this.getToken(ECLParser.RIGHT_PAREN, 0);
  }

  public mws(): MwsContext[];
  public mws(i: number): MwsContext;
  public mws(i?: number): MwsContext | MwsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(MwsContext);
    } else {
      return this.getRuleContext(i, MwsContext);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_timevalueset;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterTimevalueset) {
      listener.enterTimevalueset(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitTimevalueset) {
      listener.exitTimevalueset(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitTimevalueset) {
      return visitor.visitTimevalueset(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class YearContext extends ParserRuleContext {
  public digitnonzero(): DigitnonzeroContext {
    return this.getRuleContext(0, DigitnonzeroContext);
  }

  public digit(): DigitContext[];
  public digit(i: number): DigitContext;
  public digit(i?: number): DigitContext | DigitContext[] {
    if (i === undefined) {
      return this.getRuleContexts(DigitContext);
    } else {
      return this.getRuleContext(i, DigitContext);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_year;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterYear) {
      listener.enterYear(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitYear) {
      listener.exitYear(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitYear) {
      return visitor.visitYear(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class MonthContext extends ParserRuleContext {
  public ZERO(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.ZERO, 0);
  }

  public ONE(): TerminalNode[];
  public ONE(i: number): TerminalNode;
  public ONE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.ONE);
    } else {
      return this.getToken(ECLParser.ONE, i);
    }
  }

  public TWO(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.TWO, 0);
  }

  public THREE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.THREE, 0);
  }

  public FOUR(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.FOUR, 0);
  }

  public FIVE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.FIVE, 0);
  }

  public SIX(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.SIX, 0);
  }

  public SEVEN(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.SEVEN, 0);
  }

  public EIGHT(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.EIGHT, 0);
  }

  public NINE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.NINE, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_month;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterMonth) {
      listener.enterMonth(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitMonth) {
      listener.exitMonth(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitMonth) {
      return visitor.visitMonth(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class DayContext extends ParserRuleContext {
  public ZERO(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.ZERO, 0);
  }

  public ONE(): TerminalNode[];
  public ONE(i: number): TerminalNode;
  public ONE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.ONE);
    } else {
      return this.getToken(ECLParser.ONE, i);
    }
  }

  public TWO(): TerminalNode[];
  public TWO(i: number): TerminalNode;
  public TWO(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.TWO);
    } else {
      return this.getToken(ECLParser.TWO, i);
    }
  }

  public THREE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.THREE, 0);
  }

  public FOUR(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.FOUR, 0);
  }

  public FIVE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.FIVE, 0);
  }

  public SIX(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.SIX, 0);
  }

  public SEVEN(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.SEVEN, 0);
  }

  public EIGHT(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.EIGHT, 0);
  }

  public NINE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.NINE, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_day;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterDay) {
      listener.enterDay(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitDay) {
      listener.exitDay(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitDay) {
      return visitor.visitDay(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class ActivefilterContext extends ParserRuleContext {
  public activekeyword(): ActivekeywordContext {
    return this.getRuleContext(0, ActivekeywordContext);
  }

  public ws(): WsContext[];
  public ws(i: number): WsContext;
  public ws(i?: number): WsContext | WsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(WsContext);
    } else {
      return this.getRuleContext(i, WsContext);
    }
  }

  public booleancomparisonoperator(): BooleancomparisonoperatorContext {
    return this.getRuleContext(0, BooleancomparisonoperatorContext);
  }

  public activevalue(): ActivevalueContext {
    return this.getRuleContext(0, ActivevalueContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_activefilter;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterActivefilter) {
      listener.enterActivefilter(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitActivefilter) {
      listener.exitActivefilter(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitActivefilter) {
      return visitor.visitActivefilter(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class ActivekeywordContext extends ParserRuleContext {
  public CAP_A(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_A, 0);
  }

  public A(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.A, 0);
  }

  public CAP_C(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_C, 0);
  }

  public C(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.C, 0);
  }

  public CAP_T(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_T, 0);
  }

  public T(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.T, 0);
  }

  public CAP_I(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_I, 0);
  }

  public I(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.I, 0);
  }

  public CAP_V(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_V, 0);
  }

  public V(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.V, 0);
  }

  public CAP_E(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_E, 0);
  }

  public E(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.E, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_activekeyword;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterActivekeyword) {
      listener.enterActivekeyword(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitActivekeyword) {
      listener.exitActivekeyword(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitActivekeyword) {
      return visitor.visitActivekeyword(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class ActivevalueContext extends ParserRuleContext {
  public activetruevalue(): ActivetruevalueContext | undefined {
    return this.tryGetRuleContext(0, ActivetruevalueContext);
  }

  public activefalsevalue(): ActivefalsevalueContext | undefined {
    return this.tryGetRuleContext(0, ActivefalsevalueContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_activevalue;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterActivevalue) {
      listener.enterActivevalue(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitActivevalue) {
      listener.exitActivevalue(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitActivevalue) {
      return visitor.visitActivevalue(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class ActivetruevalueContext extends ParserRuleContext {
  public ONE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.ONE, 0);
  }

  public CAP_T(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_T, 0);
  }

  public T(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.T, 0);
  }

  public CAP_R(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_R, 0);
  }

  public R(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.R, 0);
  }

  public CAP_U(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_U, 0);
  }

  public U(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.U, 0);
  }

  public CAP_E(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_E, 0);
  }

  public E(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.E, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_activetruevalue;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterActivetruevalue) {
      listener.enterActivetruevalue(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitActivetruevalue) {
      listener.exitActivetruevalue(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitActivetruevalue) {
      return visitor.visitActivetruevalue(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class ActivefalsevalueContext extends ParserRuleContext {
  public ZERO(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.ZERO, 0);
  }

  public CAP_F(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_F, 0);
  }

  public F(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.F, 0);
  }

  public CAP_A(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_A, 0);
  }

  public A(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.A, 0);
  }

  public CAP_L(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_L, 0);
  }

  public L(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.L, 0);
  }

  public CAP_S(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_S, 0);
  }

  public S(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.S, 0);
  }

  public CAP_E(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_E, 0);
  }

  public E(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.E, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_activefalsevalue;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterActivefalsevalue) {
      listener.enterActivefalsevalue(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitActivefalsevalue) {
      listener.exitActivefalsevalue(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitActivefalsevalue) {
      return visitor.visitActivefalsevalue(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class MemberfilterconstraintContext extends ParserRuleContext {
  public ws(): WsContext[];
  public ws(i: number): WsContext;
  public ws(i?: number): WsContext | WsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(WsContext);
    } else {
      return this.getRuleContext(i, WsContext);
    }
  }

  public memberfilter(): MemberfilterContext[];
  public memberfilter(i: number): MemberfilterContext;
  public memberfilter(i?: number): MemberfilterContext | MemberfilterContext[] {
    if (i === undefined) {
      return this.getRuleContexts(MemberfilterContext);
    } else {
      return this.getRuleContext(i, MemberfilterContext);
    }
  }

  public LEFT_CURLY_BRACE(): TerminalNode[];
  public LEFT_CURLY_BRACE(i: number): TerminalNode;
  public LEFT_CURLY_BRACE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.LEFT_CURLY_BRACE);
    } else {
      return this.getToken(ECLParser.LEFT_CURLY_BRACE, i);
    }
  }

  public RIGHT_CURLY_BRACE(): TerminalNode[];
  public RIGHT_CURLY_BRACE(i: number): TerminalNode;
  public RIGHT_CURLY_BRACE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.RIGHT_CURLY_BRACE);
    } else {
      return this.getToken(ECLParser.RIGHT_CURLY_BRACE, i);
    }
  }

  public CAP_M(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_M, 0);
  }

  public M(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.M, 0);
  }

  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.COMMA);
    } else {
      return this.getToken(ECLParser.COMMA, i);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_memberfilterconstraint;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterMemberfilterconstraint) {
      listener.enterMemberfilterconstraint(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitMemberfilterconstraint) {
      listener.exitMemberfilterconstraint(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitMemberfilterconstraint) {
      return visitor.visitMemberfilterconstraint(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class MemberfilterContext extends ParserRuleContext {
  public memberfieldfilter(): MemberfieldfilterContext | undefined {
    return this.tryGetRuleContext(0, MemberfieldfilterContext);
  }

  public modulefilter(): ModulefilterContext | undefined {
    return this.tryGetRuleContext(0, ModulefilterContext);
  }

  public effectivetimefilter(): EffectivetimefilterContext | undefined {
    return this.tryGetRuleContext(0, EffectivetimefilterContext);
  }

  public activefilter(): ActivefilterContext | undefined {
    return this.tryGetRuleContext(0, ActivefilterContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_memberfilter;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterMemberfilter) {
      listener.enterMemberfilter(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitMemberfilter) {
      listener.exitMemberfilter(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitMemberfilter) {
      return visitor.visitMemberfilter(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class MemberfieldfilterContext extends ParserRuleContext {
  public refsetfieldname(): RefsetfieldnameContext {
    return this.getRuleContext(0, RefsetfieldnameContext);
  }

  public ws(): WsContext[];
  public ws(i: number): WsContext;
  public ws(i?: number): WsContext | WsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(WsContext);
    } else {
      return this.getRuleContext(i, WsContext);
    }
  }

  public expressioncomparisonoperator(): ExpressioncomparisonoperatorContext | undefined {
    return this.tryGetRuleContext(0, ExpressioncomparisonoperatorContext);
  }

  public subexpressionconstraint(): SubexpressionconstraintContext | undefined {
    return this.tryGetRuleContext(0, SubexpressionconstraintContext);
  }

  public numericcomparisonoperator(): NumericcomparisonoperatorContext | undefined {
    return this.tryGetRuleContext(0, NumericcomparisonoperatorContext);
  }

  public HASH(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.HASH, 0);
  }

  public numericvalue(): NumericvalueContext | undefined {
    return this.tryGetRuleContext(0, NumericvalueContext);
  }

  public stringcomparisonoperator(): StringcomparisonoperatorContext | undefined {
    return this.tryGetRuleContext(0, StringcomparisonoperatorContext);
  }

  public booleancomparisonoperator(): BooleancomparisonoperatorContext | undefined {
    return this.tryGetRuleContext(0, BooleancomparisonoperatorContext);
  }

  public booleanvalue(): BooleanvalueContext | undefined {
    return this.tryGetRuleContext(0, BooleanvalueContext);
  }

  public timecomparisonoperator(): TimecomparisonoperatorContext | undefined {
    return this.tryGetRuleContext(0, TimecomparisonoperatorContext);
  }

  public typedsearchterm(): TypedsearchtermContext | undefined {
    return this.tryGetRuleContext(0, TypedsearchtermContext);
  }

  public typedsearchtermset(): TypedsearchtermsetContext | undefined {
    return this.tryGetRuleContext(0, TypedsearchtermsetContext);
  }

  public timevalue(): TimevalueContext | undefined {
    return this.tryGetRuleContext(0, TimevalueContext);
  }

  public timevalueset(): TimevaluesetContext | undefined {
    return this.tryGetRuleContext(0, TimevaluesetContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_memberfieldfilter;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterMemberfieldfilter) {
      listener.enterMemberfieldfilter(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitMemberfieldfilter) {
      listener.exitMemberfieldfilter(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitMemberfieldfilter) {
      return visitor.visitMemberfieldfilter(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class HistorysupplementContext extends ParserRuleContext {
  public ws(): WsContext[];
  public ws(i: number): WsContext;
  public ws(i?: number): WsContext | WsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(WsContext);
    } else {
      return this.getRuleContext(i, WsContext);
    }
  }

  public PLUS(): TerminalNode {
    return this.getToken(ECLParser.PLUS, 0);
  }

  public historykeyword(): HistorykeywordContext {
    return this.getRuleContext(0, HistorykeywordContext);
  }

  public LEFT_CURLY_BRACE(): TerminalNode[];
  public LEFT_CURLY_BRACE(i: number): TerminalNode;
  public LEFT_CURLY_BRACE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.LEFT_CURLY_BRACE);
    } else {
      return this.getToken(ECLParser.LEFT_CURLY_BRACE, i);
    }
  }

  public RIGHT_CURLY_BRACE(): TerminalNode[];
  public RIGHT_CURLY_BRACE(i: number): TerminalNode;
  public RIGHT_CURLY_BRACE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.RIGHT_CURLY_BRACE);
    } else {
      return this.getToken(ECLParser.RIGHT_CURLY_BRACE, i);
    }
  }

  public historyprofilesuffix(): HistoryprofilesuffixContext | undefined {
    return this.tryGetRuleContext(0, HistoryprofilesuffixContext);
  }

  public historysubset(): HistorysubsetContext | undefined {
    return this.tryGetRuleContext(0, HistorysubsetContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_historysupplement;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterHistorysupplement) {
      listener.enterHistorysupplement(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitHistorysupplement) {
      listener.exitHistorysupplement(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitHistorysupplement) {
      return visitor.visitHistorysupplement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class HistorykeywordContext extends ParserRuleContext {
  public CAP_H(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_H, 0);
  }

  public H(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.H, 0);
  }

  public CAP_I(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_I, 0);
  }

  public I(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.I, 0);
  }

  public CAP_S(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_S, 0);
  }

  public S(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.S, 0);
  }

  public CAP_T(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_T, 0);
  }

  public T(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.T, 0);
  }

  public CAP_O(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_O, 0);
  }

  public O(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.O, 0);
  }

  public CAP_R(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_R, 0);
  }

  public R(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.R, 0);
  }

  public CAP_Y(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_Y, 0);
  }

  public Y(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.Y, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_historykeyword;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterHistorykeyword) {
      listener.enterHistorykeyword(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitHistorykeyword) {
      listener.exitHistorykeyword(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitHistorykeyword) {
      return visitor.visitHistorykeyword(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class HistoryprofilesuffixContext extends ParserRuleContext {
  public historyminimumsuffix(): HistoryminimumsuffixContext | undefined {
    return this.tryGetRuleContext(0, HistoryminimumsuffixContext);
  }

  public historymoderatesuffix(): HistorymoderatesuffixContext | undefined {
    return this.tryGetRuleContext(0, HistorymoderatesuffixContext);
  }

  public historymaximumsuffix(): HistorymaximumsuffixContext | undefined {
    return this.tryGetRuleContext(0, HistorymaximumsuffixContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_historyprofilesuffix;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterHistoryprofilesuffix) {
      listener.enterHistoryprofilesuffix(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitHistoryprofilesuffix) {
      listener.exitHistoryprofilesuffix(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitHistoryprofilesuffix) {
      return visitor.visitHistoryprofilesuffix(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class HistoryminimumsuffixContext extends ParserRuleContext {
  public DASH(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.DASH, 0);
  }

  public UNDERSCORE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.UNDERSCORE, 0);
  }

  public CAP_M(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_M, 0);
  }

  public M(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.M, 0);
  }

  public CAP_I(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_I, 0);
  }

  public I(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.I, 0);
  }

  public CAP_N(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_N, 0);
  }

  public N(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.N, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_historyminimumsuffix;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterHistoryminimumsuffix) {
      listener.enterHistoryminimumsuffix(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitHistoryminimumsuffix) {
      listener.exitHistoryminimumsuffix(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitHistoryminimumsuffix) {
      return visitor.visitHistoryminimumsuffix(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class HistorymoderatesuffixContext extends ParserRuleContext {
  public DASH(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.DASH, 0);
  }

  public UNDERSCORE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.UNDERSCORE, 0);
  }

  public CAP_M(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_M, 0);
  }

  public M(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.M, 0);
  }

  public CAP_O(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_O, 0);
  }

  public O(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.O, 0);
  }

  public CAP_D(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_D, 0);
  }

  public D(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.D, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_historymoderatesuffix;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterHistorymoderatesuffix) {
      listener.enterHistorymoderatesuffix(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitHistorymoderatesuffix) {
      listener.exitHistorymoderatesuffix(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitHistorymoderatesuffix) {
      return visitor.visitHistorymoderatesuffix(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class HistorymaximumsuffixContext extends ParserRuleContext {
  public DASH(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.DASH, 0);
  }

  public UNDERSCORE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.UNDERSCORE, 0);
  }

  public CAP_M(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_M, 0);
  }

  public M(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.M, 0);
  }

  public CAP_A(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_A, 0);
  }

  public A(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.A, 0);
  }

  public CAP_X(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_X, 0);
  }

  public X(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.X, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_historymaximumsuffix;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterHistorymaximumsuffix) {
      listener.enterHistorymaximumsuffix(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitHistorymaximumsuffix) {
      listener.exitHistorymaximumsuffix(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitHistorymaximumsuffix) {
      return visitor.visitHistorymaximumsuffix(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class HistorysubsetContext extends ParserRuleContext {
  public LEFT_PAREN(): TerminalNode {
    return this.getToken(ECLParser.LEFT_PAREN, 0);
  }

  public ws(): WsContext[];
  public ws(i: number): WsContext;
  public ws(i?: number): WsContext | WsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(WsContext);
    } else {
      return this.getRuleContext(i, WsContext);
    }
  }

  public expressionconstraint(): ExpressionconstraintContext {
    return this.getRuleContext(0, ExpressionconstraintContext);
  }

  public RIGHT_PAREN(): TerminalNode {
    return this.getToken(ECLParser.RIGHT_PAREN, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_historysubset;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterHistorysubset) {
      listener.enterHistorysubset(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitHistorysubset) {
      listener.exitHistorysubset(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitHistorysubset) {
      return visitor.visitHistorysubset(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class NumericvalueContext extends ParserRuleContext {
  public decimalvalue(): DecimalvalueContext | undefined {
    return this.tryGetRuleContext(0, DecimalvalueContext);
  }

  public integervalue(): IntegervalueContext | undefined {
    return this.tryGetRuleContext(0, IntegervalueContext);
  }

  public DASH(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.DASH, 0);
  }

  public PLUS(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.PLUS, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_numericvalue;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterNumericvalue) {
      listener.enterNumericvalue(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitNumericvalue) {
      listener.exitNumericvalue(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitNumericvalue) {
      return visitor.visitNumericvalue(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class StringvalueContext extends ParserRuleContext {
  public anynonescapedchar(): AnynonescapedcharContext[];
  public anynonescapedchar(i: number): AnynonescapedcharContext;
  public anynonescapedchar(i?: number): AnynonescapedcharContext | AnynonescapedcharContext[] {
    if (i === undefined) {
      return this.getRuleContexts(AnynonescapedcharContext);
    } else {
      return this.getRuleContext(i, AnynonescapedcharContext);
    }
  }

  public escapedchar(): EscapedcharContext[];
  public escapedchar(i: number): EscapedcharContext;
  public escapedchar(i?: number): EscapedcharContext | EscapedcharContext[] {
    if (i === undefined) {
      return this.getRuleContexts(EscapedcharContext);
    } else {
      return this.getRuleContext(i, EscapedcharContext);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_stringvalue;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterStringvalue) {
      listener.enterStringvalue(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitStringvalue) {
      listener.exitStringvalue(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitStringvalue) {
      return visitor.visitStringvalue(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class IntegervalueContext extends ParserRuleContext {
  public digitnonzero(): DigitnonzeroContext | undefined {
    return this.tryGetRuleContext(0, DigitnonzeroContext);
  }

  public digit(): DigitContext[];
  public digit(i: number): DigitContext;
  public digit(i?: number): DigitContext | DigitContext[] {
    if (i === undefined) {
      return this.getRuleContexts(DigitContext);
    } else {
      return this.getRuleContext(i, DigitContext);
    }
  }

  public zero(): ZeroContext | undefined {
    return this.tryGetRuleContext(0, ZeroContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_integervalue;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterIntegervalue) {
      listener.enterIntegervalue(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitIntegervalue) {
      listener.exitIntegervalue(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitIntegervalue) {
      return visitor.visitIntegervalue(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class DecimalvalueContext extends ParserRuleContext {
  public integervalue(): IntegervalueContext {
    return this.getRuleContext(0, IntegervalueContext);
  }

  public PERIOD(): TerminalNode {
    return this.getToken(ECLParser.PERIOD, 0);
  }

  public digit(): DigitContext[];
  public digit(i: number): DigitContext;
  public digit(i?: number): DigitContext | DigitContext[] {
    if (i === undefined) {
      return this.getRuleContexts(DigitContext);
    } else {
      return this.getRuleContext(i, DigitContext);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_decimalvalue;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterDecimalvalue) {
      listener.enterDecimalvalue(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitDecimalvalue) {
      listener.exitDecimalvalue(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitDecimalvalue) {
      return visitor.visitDecimalvalue(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class BooleanvalueContext extends ParserRuleContext {
  public true_1(): True_1Context | undefined {
    return this.tryGetRuleContext(0, True_1Context);
  }

  public false_1(): False_1Context | undefined {
    return this.tryGetRuleContext(0, False_1Context);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_booleanvalue;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterBooleanvalue) {
      listener.enterBooleanvalue(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitBooleanvalue) {
      listener.exitBooleanvalue(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitBooleanvalue) {
      return visitor.visitBooleanvalue(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class True_1Context extends ParserRuleContext {
  public CAP_T(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_T, 0);
  }

  public T(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.T, 0);
  }

  public CAP_R(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_R, 0);
  }

  public R(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.R, 0);
  }

  public CAP_U(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_U, 0);
  }

  public U(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.U, 0);
  }

  public CAP_E(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_E, 0);
  }

  public E(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.E, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_true_1;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterTrue_1) {
      listener.enterTrue_1(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitTrue_1) {
      listener.exitTrue_1(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitTrue_1) {
      return visitor.visitTrue_1(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class False_1Context extends ParserRuleContext {
  public CAP_F(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_F, 0);
  }

  public F(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.F, 0);
  }

  public CAP_A(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_A, 0);
  }

  public A(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.A, 0);
  }

  public CAP_L(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_L, 0);
  }

  public L(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.L, 0);
  }

  public CAP_S(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_S, 0);
  }

  public S(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.S, 0);
  }

  public CAP_E(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_E, 0);
  }

  public E(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.E, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_false_1;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterFalse_1) {
      listener.enterFalse_1(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitFalse_1) {
      listener.exitFalse_1(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitFalse_1) {
      return visitor.visitFalse_1(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class NonnegativeintegervalueContext extends ParserRuleContext {
  public digitnonzero(): DigitnonzeroContext | undefined {
    return this.tryGetRuleContext(0, DigitnonzeroContext);
  }

  public digit(): DigitContext[];
  public digit(i: number): DigitContext;
  public digit(i?: number): DigitContext | DigitContext[] {
    if (i === undefined) {
      return this.getRuleContexts(DigitContext);
    } else {
      return this.getRuleContext(i, DigitContext);
    }
  }

  public zero(): ZeroContext | undefined {
    return this.tryGetRuleContext(0, ZeroContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_nonnegativeintegervalue;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterNonnegativeintegervalue) {
      listener.enterNonnegativeintegervalue(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitNonnegativeintegervalue) {
      listener.exitNonnegativeintegervalue(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitNonnegativeintegervalue) {
      return visitor.visitNonnegativeintegervalue(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class SctidContext extends ParserRuleContext {
  public digitnonzero(): DigitnonzeroContext {
    return this.getRuleContext(0, DigitnonzeroContext);
  }

  public digit(): DigitContext[];
  public digit(i: number): DigitContext;
  public digit(i?: number): DigitContext | DigitContext[] {
    if (i === undefined) {
      return this.getRuleContexts(DigitContext);
    } else {
      return this.getRuleContext(i, DigitContext);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_sctid;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterSctid) {
      listener.enterSctid(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitSctid) {
      listener.exitSctid(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitSctid) {
      return visitor.visitSctid(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class WsContext extends ParserRuleContext {
  public sp(): SpContext[];
  public sp(i: number): SpContext;
  public sp(i?: number): SpContext | SpContext[] {
    if (i === undefined) {
      return this.getRuleContexts(SpContext);
    } else {
      return this.getRuleContext(i, SpContext);
    }
  }

  public htab(): HtabContext[];
  public htab(i: number): HtabContext;
  public htab(i?: number): HtabContext | HtabContext[] {
    if (i === undefined) {
      return this.getRuleContexts(HtabContext);
    } else {
      return this.getRuleContext(i, HtabContext);
    }
  }

  public cr(): CrContext[];
  public cr(i: number): CrContext;
  public cr(i?: number): CrContext | CrContext[] {
    if (i === undefined) {
      return this.getRuleContexts(CrContext);
    } else {
      return this.getRuleContext(i, CrContext);
    }
  }

  public lf(): LfContext[];
  public lf(i: number): LfContext;
  public lf(i?: number): LfContext | LfContext[] {
    if (i === undefined) {
      return this.getRuleContexts(LfContext);
    } else {
      return this.getRuleContext(i, LfContext);
    }
  }

  public comment(): CommentContext[];
  public comment(i: number): CommentContext;
  public comment(i?: number): CommentContext | CommentContext[] {
    if (i === undefined) {
      return this.getRuleContexts(CommentContext);
    } else {
      return this.getRuleContext(i, CommentContext);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_ws;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterWs) {
      listener.enterWs(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitWs) {
      listener.exitWs(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitWs) {
      return visitor.visitWs(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class MwsContext extends ParserRuleContext {
  public sp(): SpContext[];
  public sp(i: number): SpContext;
  public sp(i?: number): SpContext | SpContext[] {
    if (i === undefined) {
      return this.getRuleContexts(SpContext);
    } else {
      return this.getRuleContext(i, SpContext);
    }
  }

  public htab(): HtabContext[];
  public htab(i: number): HtabContext;
  public htab(i?: number): HtabContext | HtabContext[] {
    if (i === undefined) {
      return this.getRuleContexts(HtabContext);
    } else {
      return this.getRuleContext(i, HtabContext);
    }
  }

  public cr(): CrContext[];
  public cr(i: number): CrContext;
  public cr(i?: number): CrContext | CrContext[] {
    if (i === undefined) {
      return this.getRuleContexts(CrContext);
    } else {
      return this.getRuleContext(i, CrContext);
    }
  }

  public lf(): LfContext[];
  public lf(i: number): LfContext;
  public lf(i?: number): LfContext | LfContext[] {
    if (i === undefined) {
      return this.getRuleContexts(LfContext);
    } else {
      return this.getRuleContext(i, LfContext);
    }
  }

  public comment(): CommentContext[];
  public comment(i: number): CommentContext;
  public comment(i?: number): CommentContext | CommentContext[] {
    if (i === undefined) {
      return this.getRuleContexts(CommentContext);
    } else {
      return this.getRuleContext(i, CommentContext);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_mws;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterMws) {
      listener.enterMws(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitMws) {
      listener.exitMws(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitMws) {
      return visitor.visitMws(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class CommentContext extends ParserRuleContext {
  public SLASH(): TerminalNode[];
  public SLASH(i: number): TerminalNode;
  public SLASH(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.SLASH);
    } else {
      return this.getToken(ECLParser.SLASH, i);
    }
  }

  public ASTERISK(): TerminalNode[];
  public ASTERISK(i: number): TerminalNode;
  public ASTERISK(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ECLParser.ASTERISK);
    } else {
      return this.getToken(ECLParser.ASTERISK, i);
    }
  }

  public nonstarchar(): NonstarcharContext[];
  public nonstarchar(i: number): NonstarcharContext;
  public nonstarchar(i?: number): NonstarcharContext | NonstarcharContext[] {
    if (i === undefined) {
      return this.getRuleContexts(NonstarcharContext);
    } else {
      return this.getRuleContext(i, NonstarcharContext);
    }
  }

  public starwithnonfslash(): StarwithnonfslashContext[];
  public starwithnonfslash(i: number): StarwithnonfslashContext;
  public starwithnonfslash(i?: number): StarwithnonfslashContext | StarwithnonfslashContext[] {
    if (i === undefined) {
      return this.getRuleContexts(StarwithnonfslashContext);
    } else {
      return this.getRuleContext(i, StarwithnonfslashContext);
    }
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_comment;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterComment) {
      listener.enterComment(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitComment) {
      listener.exitComment(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitComment) {
      return visitor.visitComment(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class NonstarcharContext extends ParserRuleContext {
  public sp(): SpContext | undefined {
    return this.tryGetRuleContext(0, SpContext);
  }

  public htab(): HtabContext | undefined {
    return this.tryGetRuleContext(0, HtabContext);
  }

  public cr(): CrContext | undefined {
    return this.tryGetRuleContext(0, CrContext);
  }

  public lf(): LfContext | undefined {
    return this.tryGetRuleContext(0, LfContext);
  }

  public EXCLAMATION(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.EXCLAMATION, 0);
  }

  public QUOTE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.QUOTE, 0);
  }

  public HASH(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.HASH, 0);
  }

  public DOLLAR(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.DOLLAR, 0);
  }

  public PERCENT(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.PERCENT, 0);
  }

  public AMPERSAND(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.AMPERSAND, 0);
  }

  public APOSTROPHE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.APOSTROPHE, 0);
  }

  public LEFT_PAREN(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.LEFT_PAREN, 0);
  }

  public RIGHT_PAREN(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.RIGHT_PAREN, 0);
  }

  public PLUS(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.PLUS, 0);
  }

  public COMMA(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.COMMA, 0);
  }

  public DASH(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.DASH, 0);
  }

  public PERIOD(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.PERIOD, 0);
  }

  public SLASH(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.SLASH, 0);
  }

  public ZERO(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.ZERO, 0);
  }

  public ONE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.ONE, 0);
  }

  public TWO(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.TWO, 0);
  }

  public THREE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.THREE, 0);
  }

  public FOUR(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.FOUR, 0);
  }

  public FIVE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.FIVE, 0);
  }

  public SIX(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.SIX, 0);
  }

  public SEVEN(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.SEVEN, 0);
  }

  public EIGHT(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.EIGHT, 0);
  }

  public NINE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.NINE, 0);
  }

  public COLON(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.COLON, 0);
  }

  public SEMICOLON(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.SEMICOLON, 0);
  }

  public LESS_THAN(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.LESS_THAN, 0);
  }

  public EQUALS(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.EQUALS, 0);
  }

  public GREATER_THAN(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.GREATER_THAN, 0);
  }

  public QUESTION(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.QUESTION, 0);
  }

  public AT(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.AT, 0);
  }

  public CAP_A(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_A, 0);
  }

  public CAP_B(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_B, 0);
  }

  public CAP_C(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_C, 0);
  }

  public CAP_D(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_D, 0);
  }

  public CAP_E(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_E, 0);
  }

  public CAP_F(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_F, 0);
  }

  public CAP_G(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_G, 0);
  }

  public CAP_H(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_H, 0);
  }

  public CAP_I(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_I, 0);
  }

  public CAP_J(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_J, 0);
  }

  public CAP_K(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_K, 0);
  }

  public CAP_L(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_L, 0);
  }

  public CAP_M(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_M, 0);
  }

  public CAP_N(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_N, 0);
  }

  public CAP_O(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_O, 0);
  }

  public CAP_P(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_P, 0);
  }

  public CAP_Q(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_Q, 0);
  }

  public CAP_R(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_R, 0);
  }

  public CAP_S(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_S, 0);
  }

  public CAP_T(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_T, 0);
  }

  public CAP_U(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_U, 0);
  }

  public CAP_V(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_V, 0);
  }

  public CAP_W(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_W, 0);
  }

  public CAP_X(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_X, 0);
  }

  public CAP_Y(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_Y, 0);
  }

  public CAP_Z(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_Z, 0);
  }

  public LEFT_BRACE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.LEFT_BRACE, 0);
  }

  public BACKSLASH(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.BACKSLASH, 0);
  }

  public RIGHT_BRACE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.RIGHT_BRACE, 0);
  }

  public CARAT(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CARAT, 0);
  }

  public UNDERSCORE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.UNDERSCORE, 0);
  }

  public ACCENT(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.ACCENT, 0);
  }

  public A(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.A, 0);
  }

  public B(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.B, 0);
  }

  public C(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.C, 0);
  }

  public D(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.D, 0);
  }

  public E(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.E, 0);
  }

  public F(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.F, 0);
  }

  public G(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.G, 0);
  }

  public H(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.H, 0);
  }

  public I(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.I, 0);
  }

  public J(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.J, 0);
  }

  public K(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.K, 0);
  }

  public L(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.L, 0);
  }

  public M(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.M, 0);
  }

  public N(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.N, 0);
  }

  public O(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.O, 0);
  }

  public P(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.P, 0);
  }

  public Q(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.Q, 0);
  }

  public R(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.R, 0);
  }

  public S(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.S, 0);
  }

  public T(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.T, 0);
  }

  public U(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.U, 0);
  }

  public V(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.V, 0);
  }

  public W(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.W, 0);
  }

  public X(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.X, 0);
  }

  public Y(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.Y, 0);
  }

  public Z(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.Z, 0);
  }

  public LEFT_CURLY_BRACE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.LEFT_CURLY_BRACE, 0);
  }

  public PIPE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.PIPE, 0);
  }

  public RIGHT_CURLY_BRACE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.RIGHT_CURLY_BRACE, 0);
  }

  public TILDE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.TILDE, 0);
  }

  public UTF8_LETTER(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.UTF8_LETTER, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_nonstarchar;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterNonstarchar) {
      listener.enterNonstarchar(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitNonstarchar) {
      listener.exitNonstarchar(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitNonstarchar) {
      return visitor.visitNonstarchar(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class StarwithnonfslashContext extends ParserRuleContext {
  public ASTERISK(): TerminalNode {
    return this.getToken(ECLParser.ASTERISK, 0);
  }

  public nonfslash(): NonfslashContext {
    return this.getRuleContext(0, NonfslashContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_starwithnonfslash;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterStarwithnonfslash) {
      listener.enterStarwithnonfslash(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitStarwithnonfslash) {
      listener.exitStarwithnonfslash(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitStarwithnonfslash) {
      return visitor.visitStarwithnonfslash(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class NonfslashContext extends ParserRuleContext {
  public sp(): SpContext | undefined {
    return this.tryGetRuleContext(0, SpContext);
  }

  public htab(): HtabContext | undefined {
    return this.tryGetRuleContext(0, HtabContext);
  }

  public cr(): CrContext | undefined {
    return this.tryGetRuleContext(0, CrContext);
  }

  public lf(): LfContext | undefined {
    return this.tryGetRuleContext(0, LfContext);
  }

  public EXCLAMATION(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.EXCLAMATION, 0);
  }

  public QUOTE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.QUOTE, 0);
  }

  public HASH(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.HASH, 0);
  }

  public DOLLAR(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.DOLLAR, 0);
  }

  public PERCENT(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.PERCENT, 0);
  }

  public AMPERSAND(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.AMPERSAND, 0);
  }

  public APOSTROPHE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.APOSTROPHE, 0);
  }

  public LEFT_PAREN(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.LEFT_PAREN, 0);
  }

  public RIGHT_PAREN(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.RIGHT_PAREN, 0);
  }

  public ASTERISK(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.ASTERISK, 0);
  }

  public PLUS(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.PLUS, 0);
  }

  public COMMA(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.COMMA, 0);
  }

  public DASH(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.DASH, 0);
  }

  public PERIOD(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.PERIOD, 0);
  }

  public ZERO(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.ZERO, 0);
  }

  public ONE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.ONE, 0);
  }

  public TWO(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.TWO, 0);
  }

  public THREE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.THREE, 0);
  }

  public FOUR(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.FOUR, 0);
  }

  public FIVE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.FIVE, 0);
  }

  public SIX(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.SIX, 0);
  }

  public SEVEN(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.SEVEN, 0);
  }

  public EIGHT(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.EIGHT, 0);
  }

  public NINE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.NINE, 0);
  }

  public COLON(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.COLON, 0);
  }

  public SEMICOLON(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.SEMICOLON, 0);
  }

  public LESS_THAN(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.LESS_THAN, 0);
  }

  public EQUALS(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.EQUALS, 0);
  }

  public GREATER_THAN(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.GREATER_THAN, 0);
  }

  public QUESTION(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.QUESTION, 0);
  }

  public AT(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.AT, 0);
  }

  public CAP_A(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_A, 0);
  }

  public CAP_B(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_B, 0);
  }

  public CAP_C(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_C, 0);
  }

  public CAP_D(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_D, 0);
  }

  public CAP_E(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_E, 0);
  }

  public CAP_F(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_F, 0);
  }

  public CAP_G(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_G, 0);
  }

  public CAP_H(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_H, 0);
  }

  public CAP_I(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_I, 0);
  }

  public CAP_J(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_J, 0);
  }

  public CAP_K(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_K, 0);
  }

  public CAP_L(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_L, 0);
  }

  public CAP_M(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_M, 0);
  }

  public CAP_N(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_N, 0);
  }

  public CAP_O(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_O, 0);
  }

  public CAP_P(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_P, 0);
  }

  public CAP_Q(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_Q, 0);
  }

  public CAP_R(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_R, 0);
  }

  public CAP_S(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_S, 0);
  }

  public CAP_T(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_T, 0);
  }

  public CAP_U(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_U, 0);
  }

  public CAP_V(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_V, 0);
  }

  public CAP_W(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_W, 0);
  }

  public CAP_X(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_X, 0);
  }

  public CAP_Y(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_Y, 0);
  }

  public CAP_Z(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_Z, 0);
  }

  public LEFT_BRACE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.LEFT_BRACE, 0);
  }

  public BACKSLASH(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.BACKSLASH, 0);
  }

  public RIGHT_BRACE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.RIGHT_BRACE, 0);
  }

  public CARAT(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CARAT, 0);
  }

  public UNDERSCORE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.UNDERSCORE, 0);
  }

  public ACCENT(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.ACCENT, 0);
  }

  public A(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.A, 0);
  }

  public B(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.B, 0);
  }

  public C(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.C, 0);
  }

  public D(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.D, 0);
  }

  public E(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.E, 0);
  }

  public F(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.F, 0);
  }

  public G(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.G, 0);
  }

  public H(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.H, 0);
  }

  public I(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.I, 0);
  }

  public J(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.J, 0);
  }

  public K(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.K, 0);
  }

  public L(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.L, 0);
  }

  public M(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.M, 0);
  }

  public N(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.N, 0);
  }

  public O(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.O, 0);
  }

  public P(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.P, 0);
  }

  public Q(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.Q, 0);
  }

  public R(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.R, 0);
  }

  public S(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.S, 0);
  }

  public T(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.T, 0);
  }

  public U(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.U, 0);
  }

  public V(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.V, 0);
  }

  public W(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.W, 0);
  }

  public X(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.X, 0);
  }

  public Y(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.Y, 0);
  }

  public Z(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.Z, 0);
  }

  public LEFT_CURLY_BRACE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.LEFT_CURLY_BRACE, 0);
  }

  public PIPE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.PIPE, 0);
  }

  public RIGHT_CURLY_BRACE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.RIGHT_CURLY_BRACE, 0);
  }

  public TILDE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.TILDE, 0);
  }

  public UTF8_LETTER(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.UTF8_LETTER, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_nonfslash;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterNonfslash) {
      listener.enterNonfslash(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitNonfslash) {
      listener.exitNonfslash(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitNonfslash) {
      return visitor.visitNonfslash(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class SpContext extends ParserRuleContext {
  public SPACE(): TerminalNode {
    return this.getToken(ECLParser.SPACE, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_sp;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterSp) {
      listener.enterSp(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitSp) {
      listener.exitSp(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitSp) {
      return visitor.visitSp(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class HtabContext extends ParserRuleContext {
  public TAB(): TerminalNode {
    return this.getToken(ECLParser.TAB, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_htab;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterHtab) {
      listener.enterHtab(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitHtab) {
      listener.exitHtab(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitHtab) {
      return visitor.visitHtab(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class CrContext extends ParserRuleContext {
  public CR(): TerminalNode {
    return this.getToken(ECLParser.CR, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_cr;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterCr) {
      listener.enterCr(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitCr) {
      listener.exitCr(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitCr) {
      return visitor.visitCr(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class LfContext extends ParserRuleContext {
  public LF(): TerminalNode {
    return this.getToken(ECLParser.LF, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_lf;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterLf) {
      listener.enterLf(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitLf) {
      listener.exitLf(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitLf) {
      return visitor.visitLf(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class QmContext extends ParserRuleContext {
  public QUOTE(): TerminalNode {
    return this.getToken(ECLParser.QUOTE, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_qm;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterQm) {
      listener.enterQm(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitQm) {
      listener.exitQm(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitQm) {
      return visitor.visitQm(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class BsContext extends ParserRuleContext {
  public BACKSLASH(): TerminalNode {
    return this.getToken(ECLParser.BACKSLASH, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_bs;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterBs) {
      listener.enterBs(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitBs) {
      listener.exitBs(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitBs) {
      return visitor.visitBs(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class StarContext extends ParserRuleContext {
  public ASTERISK(): TerminalNode {
    return this.getToken(ECLParser.ASTERISK, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_star;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterStar) {
      listener.enterStar(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitStar) {
      listener.exitStar(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitStar) {
      return visitor.visitStar(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class DigitContext extends ParserRuleContext {
  public ZERO(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.ZERO, 0);
  }

  public ONE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.ONE, 0);
  }

  public TWO(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.TWO, 0);
  }

  public THREE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.THREE, 0);
  }

  public FOUR(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.FOUR, 0);
  }

  public FIVE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.FIVE, 0);
  }

  public SIX(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.SIX, 0);
  }

  public SEVEN(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.SEVEN, 0);
  }

  public EIGHT(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.EIGHT, 0);
  }

  public NINE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.NINE, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_digit;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterDigit) {
      listener.enterDigit(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitDigit) {
      listener.exitDigit(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitDigit) {
      return visitor.visitDigit(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class ZeroContext extends ParserRuleContext {
  public ZERO(): TerminalNode {
    return this.getToken(ECLParser.ZERO, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_zero;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterZero) {
      listener.enterZero(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitZero) {
      listener.exitZero(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitZero) {
      return visitor.visitZero(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class DigitnonzeroContext extends ParserRuleContext {
  public ONE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.ONE, 0);
  }

  public TWO(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.TWO, 0);
  }

  public THREE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.THREE, 0);
  }

  public FOUR(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.FOUR, 0);
  }

  public FIVE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.FIVE, 0);
  }

  public SIX(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.SIX, 0);
  }

  public SEVEN(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.SEVEN, 0);
  }

  public EIGHT(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.EIGHT, 0);
  }

  public NINE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.NINE, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_digitnonzero;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterDigitnonzero) {
      listener.enterDigitnonzero(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitDigitnonzero) {
      listener.exitDigitnonzero(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitDigitnonzero) {
      return visitor.visitDigitnonzero(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class NonwsnonpipeContext extends ParserRuleContext {
  public EXCLAMATION(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.EXCLAMATION, 0);
  }

  public QUOTE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.QUOTE, 0);
  }

  public HASH(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.HASH, 0);
  }

  public DOLLAR(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.DOLLAR, 0);
  }

  public PERCENT(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.PERCENT, 0);
  }

  public AMPERSAND(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.AMPERSAND, 0);
  }

  public APOSTROPHE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.APOSTROPHE, 0);
  }

  public LEFT_PAREN(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.LEFT_PAREN, 0);
  }

  public RIGHT_PAREN(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.RIGHT_PAREN, 0);
  }

  public ASTERISK(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.ASTERISK, 0);
  }

  public PLUS(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.PLUS, 0);
  }

  public COMMA(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.COMMA, 0);
  }

  public DASH(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.DASH, 0);
  }

  public PERIOD(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.PERIOD, 0);
  }

  public SLASH(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.SLASH, 0);
  }

  public ZERO(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.ZERO, 0);
  }

  public ONE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.ONE, 0);
  }

  public TWO(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.TWO, 0);
  }

  public THREE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.THREE, 0);
  }

  public FOUR(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.FOUR, 0);
  }

  public FIVE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.FIVE, 0);
  }

  public SIX(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.SIX, 0);
  }

  public SEVEN(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.SEVEN, 0);
  }

  public EIGHT(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.EIGHT, 0);
  }

  public NINE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.NINE, 0);
  }

  public COLON(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.COLON, 0);
  }

  public SEMICOLON(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.SEMICOLON, 0);
  }

  public LESS_THAN(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.LESS_THAN, 0);
  }

  public EQUALS(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.EQUALS, 0);
  }

  public GREATER_THAN(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.GREATER_THAN, 0);
  }

  public QUESTION(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.QUESTION, 0);
  }

  public AT(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.AT, 0);
  }

  public CAP_A(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_A, 0);
  }

  public CAP_B(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_B, 0);
  }

  public CAP_C(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_C, 0);
  }

  public CAP_D(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_D, 0);
  }

  public CAP_E(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_E, 0);
  }

  public CAP_F(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_F, 0);
  }

  public CAP_G(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_G, 0);
  }

  public CAP_H(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_H, 0);
  }

  public CAP_I(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_I, 0);
  }

  public CAP_J(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_J, 0);
  }

  public CAP_K(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_K, 0);
  }

  public CAP_L(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_L, 0);
  }

  public CAP_M(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_M, 0);
  }

  public CAP_N(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_N, 0);
  }

  public CAP_O(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_O, 0);
  }

  public CAP_P(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_P, 0);
  }

  public CAP_Q(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_Q, 0);
  }

  public CAP_R(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_R, 0);
  }

  public CAP_S(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_S, 0);
  }

  public CAP_T(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_T, 0);
  }

  public CAP_U(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_U, 0);
  }

  public CAP_V(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_V, 0);
  }

  public CAP_W(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_W, 0);
  }

  public CAP_X(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_X, 0);
  }

  public CAP_Y(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_Y, 0);
  }

  public CAP_Z(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_Z, 0);
  }

  public LEFT_BRACE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.LEFT_BRACE, 0);
  }

  public BACKSLASH(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.BACKSLASH, 0);
  }

  public RIGHT_BRACE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.RIGHT_BRACE, 0);
  }

  public CARAT(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CARAT, 0);
  }

  public UNDERSCORE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.UNDERSCORE, 0);
  }

  public ACCENT(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.ACCENT, 0);
  }

  public A(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.A, 0);
  }

  public B(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.B, 0);
  }

  public C(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.C, 0);
  }

  public D(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.D, 0);
  }

  public E(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.E, 0);
  }

  public F(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.F, 0);
  }

  public G(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.G, 0);
  }

  public H(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.H, 0);
  }

  public I(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.I, 0);
  }

  public J(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.J, 0);
  }

  public K(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.K, 0);
  }

  public L(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.L, 0);
  }

  public M(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.M, 0);
  }

  public N(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.N, 0);
  }

  public O(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.O, 0);
  }

  public P(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.P, 0);
  }

  public Q(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.Q, 0);
  }

  public R(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.R, 0);
  }

  public S(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.S, 0);
  }

  public T(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.T, 0);
  }

  public U(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.U, 0);
  }

  public V(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.V, 0);
  }

  public W(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.W, 0);
  }

  public X(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.X, 0);
  }

  public Y(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.Y, 0);
  }

  public Z(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.Z, 0);
  }

  public LEFT_CURLY_BRACE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.LEFT_CURLY_BRACE, 0);
  }

  public RIGHT_CURLY_BRACE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.RIGHT_CURLY_BRACE, 0);
  }

  public TILDE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.TILDE, 0);
  }

  public UTF8_LETTER(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.UTF8_LETTER, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_nonwsnonpipe;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterNonwsnonpipe) {
      listener.enterNonwsnonpipe(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitNonwsnonpipe) {
      listener.exitNonwsnonpipe(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitNonwsnonpipe) {
      return visitor.visitNonwsnonpipe(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class AnynonescapedcharContext extends ParserRuleContext {
  public sp(): SpContext | undefined {
    return this.tryGetRuleContext(0, SpContext);
  }

  public htab(): HtabContext | undefined {
    return this.tryGetRuleContext(0, HtabContext);
  }

  public cr(): CrContext | undefined {
    return this.tryGetRuleContext(0, CrContext);
  }

  public lf(): LfContext | undefined {
    return this.tryGetRuleContext(0, LfContext);
  }

  public SPACE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.SPACE, 0);
  }

  public EXCLAMATION(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.EXCLAMATION, 0);
  }

  public HASH(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.HASH, 0);
  }

  public DOLLAR(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.DOLLAR, 0);
  }

  public PERCENT(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.PERCENT, 0);
  }

  public AMPERSAND(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.AMPERSAND, 0);
  }

  public APOSTROPHE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.APOSTROPHE, 0);
  }

  public LEFT_PAREN(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.LEFT_PAREN, 0);
  }

  public RIGHT_PAREN(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.RIGHT_PAREN, 0);
  }

  public ASTERISK(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.ASTERISK, 0);
  }

  public PLUS(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.PLUS, 0);
  }

  public COMMA(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.COMMA, 0);
  }

  public DASH(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.DASH, 0);
  }

  public PERIOD(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.PERIOD, 0);
  }

  public SLASH(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.SLASH, 0);
  }

  public ZERO(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.ZERO, 0);
  }

  public ONE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.ONE, 0);
  }

  public TWO(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.TWO, 0);
  }

  public THREE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.THREE, 0);
  }

  public FOUR(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.FOUR, 0);
  }

  public FIVE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.FIVE, 0);
  }

  public SIX(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.SIX, 0);
  }

  public SEVEN(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.SEVEN, 0);
  }

  public EIGHT(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.EIGHT, 0);
  }

  public NINE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.NINE, 0);
  }

  public COLON(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.COLON, 0);
  }

  public SEMICOLON(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.SEMICOLON, 0);
  }

  public LESS_THAN(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.LESS_THAN, 0);
  }

  public EQUALS(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.EQUALS, 0);
  }

  public GREATER_THAN(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.GREATER_THAN, 0);
  }

  public QUESTION(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.QUESTION, 0);
  }

  public AT(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.AT, 0);
  }

  public CAP_A(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_A, 0);
  }

  public CAP_B(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_B, 0);
  }

  public CAP_C(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_C, 0);
  }

  public CAP_D(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_D, 0);
  }

  public CAP_E(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_E, 0);
  }

  public CAP_F(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_F, 0);
  }

  public CAP_G(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_G, 0);
  }

  public CAP_H(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_H, 0);
  }

  public CAP_I(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_I, 0);
  }

  public CAP_J(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_J, 0);
  }

  public CAP_K(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_K, 0);
  }

  public CAP_L(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_L, 0);
  }

  public CAP_M(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_M, 0);
  }

  public CAP_N(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_N, 0);
  }

  public CAP_O(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_O, 0);
  }

  public CAP_P(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_P, 0);
  }

  public CAP_Q(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_Q, 0);
  }

  public CAP_R(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_R, 0);
  }

  public CAP_S(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_S, 0);
  }

  public CAP_T(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_T, 0);
  }

  public CAP_U(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_U, 0);
  }

  public CAP_V(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_V, 0);
  }

  public CAP_W(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_W, 0);
  }

  public CAP_X(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_X, 0);
  }

  public CAP_Y(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_Y, 0);
  }

  public CAP_Z(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_Z, 0);
  }

  public LEFT_BRACE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.LEFT_BRACE, 0);
  }

  public RIGHT_BRACE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.RIGHT_BRACE, 0);
  }

  public CARAT(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CARAT, 0);
  }

  public UNDERSCORE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.UNDERSCORE, 0);
  }

  public ACCENT(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.ACCENT, 0);
  }

  public A(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.A, 0);
  }

  public B(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.B, 0);
  }

  public C(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.C, 0);
  }

  public D(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.D, 0);
  }

  public E(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.E, 0);
  }

  public F(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.F, 0);
  }

  public G(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.G, 0);
  }

  public H(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.H, 0);
  }

  public I(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.I, 0);
  }

  public J(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.J, 0);
  }

  public K(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.K, 0);
  }

  public L(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.L, 0);
  }

  public M(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.M, 0);
  }

  public N(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.N, 0);
  }

  public O(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.O, 0);
  }

  public P(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.P, 0);
  }

  public Q(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.Q, 0);
  }

  public R(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.R, 0);
  }

  public S(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.S, 0);
  }

  public T(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.T, 0);
  }

  public U(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.U, 0);
  }

  public V(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.V, 0);
  }

  public W(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.W, 0);
  }

  public X(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.X, 0);
  }

  public Y(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.Y, 0);
  }

  public Z(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.Z, 0);
  }

  public LEFT_CURLY_BRACE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.LEFT_CURLY_BRACE, 0);
  }

  public PIPE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.PIPE, 0);
  }

  public RIGHT_CURLY_BRACE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.RIGHT_CURLY_BRACE, 0);
  }

  public TILDE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.TILDE, 0);
  }

  public UTF8_LETTER(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.UTF8_LETTER, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_anynonescapedchar;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterAnynonescapedchar) {
      listener.enterAnynonescapedchar(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitAnynonescapedchar) {
      listener.exitAnynonescapedchar(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitAnynonescapedchar) {
      return visitor.visitAnynonescapedchar(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class EscapedcharContext extends ParserRuleContext {
  public bs(): BsContext[];
  public bs(i: number): BsContext;
  public bs(i?: number): BsContext | BsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(BsContext);
    } else {
      return this.getRuleContext(i, BsContext);
    }
  }

  public qm(): QmContext | undefined {
    return this.tryGetRuleContext(0, QmContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_escapedchar;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterEscapedchar) {
      listener.enterEscapedchar(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitEscapedchar) {
      listener.exitEscapedchar(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitEscapedchar) {
      return visitor.visitEscapedchar(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class EscapedwildcharContext extends ParserRuleContext {
  public bs(): BsContext[];
  public bs(i: number): BsContext;
  public bs(i?: number): BsContext | BsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(BsContext);
    } else {
      return this.getRuleContext(i, BsContext);
    }
  }

  public qm(): QmContext | undefined {
    return this.tryGetRuleContext(0, QmContext);
  }

  public star(): StarContext | undefined {
    return this.tryGetRuleContext(0, StarContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_escapedwildchar;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterEscapedwildchar) {
      listener.enterEscapedwildchar(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitEscapedwildchar) {
      listener.exitEscapedwildchar(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitEscapedwildchar) {
      return visitor.visitEscapedwildchar(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class NonwsnonescapedcharContext extends ParserRuleContext {
  public EXCLAMATION(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.EXCLAMATION, 0);
  }

  public HASH(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.HASH, 0);
  }

  public DOLLAR(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.DOLLAR, 0);
  }

  public PERCENT(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.PERCENT, 0);
  }

  public AMPERSAND(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.AMPERSAND, 0);
  }

  public APOSTROPHE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.APOSTROPHE, 0);
  }

  public LEFT_PAREN(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.LEFT_PAREN, 0);
  }

  public RIGHT_PAREN(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.RIGHT_PAREN, 0);
  }

  public ASTERISK(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.ASTERISK, 0);
  }

  public PLUS(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.PLUS, 0);
  }

  public COMMA(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.COMMA, 0);
  }

  public DASH(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.DASH, 0);
  }

  public PERIOD(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.PERIOD, 0);
  }

  public SLASH(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.SLASH, 0);
  }

  public ZERO(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.ZERO, 0);
  }

  public ONE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.ONE, 0);
  }

  public TWO(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.TWO, 0);
  }

  public THREE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.THREE, 0);
  }

  public FOUR(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.FOUR, 0);
  }

  public FIVE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.FIVE, 0);
  }

  public SIX(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.SIX, 0);
  }

  public SEVEN(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.SEVEN, 0);
  }

  public EIGHT(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.EIGHT, 0);
  }

  public NINE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.NINE, 0);
  }

  public COLON(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.COLON, 0);
  }

  public SEMICOLON(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.SEMICOLON, 0);
  }

  public LESS_THAN(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.LESS_THAN, 0);
  }

  public EQUALS(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.EQUALS, 0);
  }

  public GREATER_THAN(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.GREATER_THAN, 0);
  }

  public QUESTION(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.QUESTION, 0);
  }

  public AT(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.AT, 0);
  }

  public CAP_A(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_A, 0);
  }

  public CAP_B(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_B, 0);
  }

  public CAP_C(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_C, 0);
  }

  public CAP_D(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_D, 0);
  }

  public CAP_E(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_E, 0);
  }

  public CAP_F(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_F, 0);
  }

  public CAP_G(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_G, 0);
  }

  public CAP_H(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_H, 0);
  }

  public CAP_I(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_I, 0);
  }

  public CAP_J(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_J, 0);
  }

  public CAP_K(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_K, 0);
  }

  public CAP_L(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_L, 0);
  }

  public CAP_M(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_M, 0);
  }

  public CAP_N(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_N, 0);
  }

  public CAP_O(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_O, 0);
  }

  public CAP_P(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_P, 0);
  }

  public CAP_Q(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_Q, 0);
  }

  public CAP_R(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_R, 0);
  }

  public CAP_S(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_S, 0);
  }

  public CAP_T(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_T, 0);
  }

  public CAP_U(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_U, 0);
  }

  public CAP_V(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_V, 0);
  }

  public CAP_W(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_W, 0);
  }

  public CAP_X(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_X, 0);
  }

  public CAP_Y(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_Y, 0);
  }

  public CAP_Z(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_Z, 0);
  }

  public LEFT_BRACE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.LEFT_BRACE, 0);
  }

  public RIGHT_BRACE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.RIGHT_BRACE, 0);
  }

  public CARAT(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CARAT, 0);
  }

  public UNDERSCORE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.UNDERSCORE, 0);
  }

  public ACCENT(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.ACCENT, 0);
  }

  public A(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.A, 0);
  }

  public B(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.B, 0);
  }

  public C(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.C, 0);
  }

  public D(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.D, 0);
  }

  public E(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.E, 0);
  }

  public F(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.F, 0);
  }

  public G(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.G, 0);
  }

  public H(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.H, 0);
  }

  public I(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.I, 0);
  }

  public J(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.J, 0);
  }

  public K(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.K, 0);
  }

  public L(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.L, 0);
  }

  public M(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.M, 0);
  }

  public N(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.N, 0);
  }

  public O(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.O, 0);
  }

  public P(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.P, 0);
  }

  public Q(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.Q, 0);
  }

  public R(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.R, 0);
  }

  public S(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.S, 0);
  }

  public T(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.T, 0);
  }

  public U(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.U, 0);
  }

  public V(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.V, 0);
  }

  public W(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.W, 0);
  }

  public X(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.X, 0);
  }

  public Y(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.Y, 0);
  }

  public Z(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.Z, 0);
  }

  public LEFT_CURLY_BRACE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.LEFT_CURLY_BRACE, 0);
  }

  public PIPE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.PIPE, 0);
  }

  public RIGHT_CURLY_BRACE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.RIGHT_CURLY_BRACE, 0);
  }

  public TILDE(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.TILDE, 0);
  }

  public UTF8_LETTER(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.UTF8_LETTER, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_nonwsnonescapedchar;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterNonwsnonescapedchar) {
      listener.enterNonwsnonescapedchar(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitNonwsnonescapedchar) {
      listener.exitNonwsnonescapedchar(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitNonwsnonescapedchar) {
      return visitor.visitNonwsnonescapedchar(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class AlphaContext extends ParserRuleContext {
  public CAP_A(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_A, 0);
  }

  public CAP_B(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_B, 0);
  }

  public CAP_C(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_C, 0);
  }

  public CAP_D(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_D, 0);
  }

  public CAP_E(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_E, 0);
  }

  public CAP_F(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_F, 0);
  }

  public CAP_G(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_G, 0);
  }

  public CAP_H(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_H, 0);
  }

  public CAP_I(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_I, 0);
  }

  public CAP_J(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_J, 0);
  }

  public CAP_K(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_K, 0);
  }

  public CAP_L(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_L, 0);
  }

  public CAP_M(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_M, 0);
  }

  public CAP_N(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_N, 0);
  }

  public CAP_O(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_O, 0);
  }

  public CAP_P(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_P, 0);
  }

  public CAP_Q(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_Q, 0);
  }

  public CAP_R(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_R, 0);
  }

  public CAP_S(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_S, 0);
  }

  public CAP_T(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_T, 0);
  }

  public CAP_U(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_U, 0);
  }

  public CAP_V(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_V, 0);
  }

  public CAP_W(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_W, 0);
  }

  public CAP_X(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_X, 0);
  }

  public CAP_Y(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_Y, 0);
  }

  public CAP_Z(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.CAP_Z, 0);
  }

  public A(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.A, 0);
  }

  public B(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.B, 0);
  }

  public C(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.C, 0);
  }

  public D(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.D, 0);
  }

  public E(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.E, 0);
  }

  public F(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.F, 0);
  }

  public G(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.G, 0);
  }

  public H(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.H, 0);
  }

  public I(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.I, 0);
  }

  public J(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.J, 0);
  }

  public K(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.K, 0);
  }

  public L(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.L, 0);
  }

  public M(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.M, 0);
  }

  public N(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.N, 0);
  }

  public O(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.O, 0);
  }

  public P(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.P, 0);
  }

  public Q(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.Q, 0);
  }

  public R(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.R, 0);
  }

  public S(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.S, 0);
  }

  public T(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.T, 0);
  }

  public U(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.U, 0);
  }

  public V(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.V, 0);
  }

  public W(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.W, 0);
  }

  public X(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.X, 0);
  }

  public Y(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.Y, 0);
  }

  public Z(): TerminalNode | undefined {
    return this.tryGetToken(ECLParser.Z, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_alpha;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterAlpha) {
      listener.enterAlpha(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitAlpha) {
      listener.exitAlpha(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitAlpha) {
      return visitor.visitAlpha(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}


export class DashContext extends ParserRuleContext {
  public DASH(): TerminalNode {
    return this.getToken(ECLParser.DASH, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return ECLParser.RULE_dash;
  }

  // @Override
  public enterRule(listener: ECLListener): void {
    if (listener.enterDash) {
      listener.enterDash(this);
    }
  }

  // @Override
  public exitRule(listener: ECLListener): void {
    if (listener.exitDash) {
      listener.exitDash(this);
    }
  }

  // @Override
  public accept<Result>(visitor: ECLVisitor<Result>): Result {
    if (visitor.visitDash) {
      return visitor.visitDash(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}



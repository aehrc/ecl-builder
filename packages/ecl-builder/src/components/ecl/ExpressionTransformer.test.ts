/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { ParserRuleContext } from "antlr4";
import ExpressionTransformer from "./ExpressionTransformer";

describe("applyUpdates", () => {
  it("should apply a single update", (done) => {
    const transformer = new ExpressionTransformer(
      "< 19829001 |disorder of lung| AND < 301867009 |edema of trunk|\n",
      (expression) => {
        expect(expression).toEqual(
          "< 19829001 |disorder of lung| OR < 301867009 |edema of trunk|\n"
        );
        done();
      }
    );
    const contexts: ParserRuleContext[] = [
      {
        start: { start: 30 },
        stop: { stop: 33 },
      } as ParserRuleContext,
    ];
    transformer.applyUpdates(contexts, "OR ");
  });

  it("should collapse on the right correctly in absence of whitespace", (done) => {
    const transformer = new ExpressionTransformer(
      "<404684003",
      (expression) => {
        expect(expression).toEqual("404684003");
        done();
      }
    );
    const contexts: ParserRuleContext[] = [
      {
        start: { start: 0 },
        stop: { stop: 0 },
      } as ParserRuleContext,
    ];
    transformer.applyUpdates(contexts, "", { collapseWhiteSpaceRight: true });
  });

  it("should collapse on the right correctly with whitespace", (done) => {
    const transformer = new ExpressionTransformer(
      "< 404684003",
      (expression) => {
        expect(expression).toEqual("404684003");
        done();
      }
    );
    const contexts: ParserRuleContext[] = [
      {
        start: { start: 0 },
        stop: { stop: 0 },
      } as ParserRuleContext,
    ];
    transformer.applyUpdates(contexts, "", { collapseWhiteSpaceRight: true });
  });

  it("should collapse on the left correctly in absence of whitespace", (done) => {
    const transformer = new ExpressionTransformer(
      "<<  195967001 |Asthma|{{ + HISTORY-MOD }}",
      (expression) => {
        expect(expression).toEqual("<<  195967001 |Asthma|");
        done();
      }
    );
    const contexts: ParserRuleContext[] = [
      {
        start: { start: 22 },
        stop: { stop: 40 },
      } as ParserRuleContext,
    ];
    transformer.applyUpdates(contexts, "", { collapseWhiteSpaceLeft: true });
  });

  it("should collapse on the left correctly with whitespace", (done) => {
    const transformer = new ExpressionTransformer(
      "<<  195967001 |Asthma|  {{ + HISTORY-MOD }}",
      (expression) => {
        expect(expression).toEqual("<<  195967001 |Asthma|");
        done();
      }
    );
    const contexts: ParserRuleContext[] = [
      {
        start: { start: 24 },
        stop: { stop: 42 },
      } as ParserRuleContext,
    ];
    transformer.applyUpdates(contexts, "", { collapseWhiteSpaceLeft: true });
  });

  it("should apply multiple updates", (done) => {
    const transformer = new ExpressionTransformer(
      "< 19829001 |disorder of lung| AND  < 301867009 |edema of trunk| AND < 40733004 |Infection| ",
      (expression) => {
        expect(expression).toEqual(
          "< 19829001 |disorder of lung| OR  < 301867009 |edema of trunk| OR < 40733004 |Infection| "
        );
        done();
      }
    );
    const contexts: ParserRuleContext[] = [
      {
        start: { start: 30 },
        stop: { stop: 33 },
      } as ParserRuleContext,
      {
        start: { start: 64 },
        stop: { stop: 67 },
      } as ParserRuleContext,
    ];
    transformer.applyUpdates(contexts, "OR ");
  });
});

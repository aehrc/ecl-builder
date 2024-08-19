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
          "< 19829001 |disorder of lung| OR < 301867009 |edema of trunk|\n",
        );
        done();
      },
      () => undefined,
    );
    const contexts: ParserRuleContext[] = [
      {
        start: { start: 30 },
        stop: { stop: 33 },
        getText: () => "AND",
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
      },
      () => undefined,
    );
    const contexts: ParserRuleContext[] = [
      {
        start: { start: 0 },
        stop: { stop: 0 },
        getText: () => "<",
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
      },
      () => undefined,
    );
    const contexts: ParserRuleContext[] = [
      {
        start: { start: 0 },
        stop: { stop: 0 },
        getText: () => "<",
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
      },
      () => undefined,
    );
    const contexts: ParserRuleContext[] = [
      {
        start: { start: 22 },
        stop: { stop: 40 },
        getText: () => "{{ + HISTORY-MOD }}",
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
      },
      () => undefined,
    );
    const contexts: ParserRuleContext[] = [
      {
        start: { start: 24 },
        stop: { stop: 42 },
        getText: () => "{{ + HISTORY-MOD }}",
      } as ParserRuleContext,
    ];
    transformer.applyUpdates(contexts, "", { collapseWhiteSpaceLeft: true });
  });

  it("should apply multiple updates", (done) => {
    const transformer = new ExpressionTransformer(
      "< 19829001 |disorder of lung| AND  < 301867009 |edema of trunk| AND < 40733004 |Infection| ",
      (expression) => {
        expect(expression).toEqual(
          "< 19829001 |disorder of lung| OR  < 301867009 |edema of trunk| OR < 40733004 |Infection| ",
        );
        done();
      },
      () => undefined,
    );
    const contexts: ParserRuleContext[] = [
      {
        start: { start: 30 },
        stop: { stop: 33 },
        getText: () => "AND",
      } as ParserRuleContext,
      {
        start: { start: 64 },
        stop: { stop: 67 },
        getText: () => "AND",
      } as ParserRuleContext,
    ];
    transformer.applyUpdates(contexts, "OR ");
  });

  it("should collapse on the left but maintain the first whitespace", (done) => {
    const transformer = new ExpressionTransformer(
      "(<< 195967001 |Asthma| OR (< 19829001 |Pulmonary disease| AND < 40733004 |Infection|))",
      (expression) => {
        expect(expression).toEqual(
          "(<< 195967001 |Asthma| OR < 40733004 |Infection|)",
        );
        done();
      },
      () => undefined,
    );
    const contexts: ParserRuleContext[] = [
      {
        start: { start: 26 },
        stop: { stop: 26 },
        getText: () => "(",
      } as ParserRuleContext,
      {
        start: { start: 27 },
        stop: { stop: 56 },
        getText: () => "< 19829001 |Pulmonary disease|",
      } as ParserRuleContext,
      {
        start: { start: 58 },
        stop: { stop: 61 },
        getText: () => "AND ",
      } as ParserRuleContext,
      {
        start: { start: 84 },
        stop: { stop: 84 },
        getText: () => ")",
      } as ParserRuleContext,
    ];
    transformer.applyUpdates(contexts, "", {
      collapseWhiteSpaceLeft: true,
      preserveFirstWhiteSpace: true,
    });
  });
});

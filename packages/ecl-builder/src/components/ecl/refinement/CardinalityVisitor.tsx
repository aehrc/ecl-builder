/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import React from "react";
import {
  MinvalueContext,
  NonnegativeintegervalueContext,
} from "../../../parser/src/grammar/syntax/ECLParser";
import BaseEclVisitor from "../BaseEclVisitor";
import { VisualExpressionType } from "../ExpressionVisitor";
import { isFocused } from "../FocusProvider";
import Many from "./Many";
import NonNegativeIntegerValue from "./NonNegativeIntegerValue";
import { RefinementVisitorOptions } from "./RefinementVisitor";
import To from "./To";

export interface CardinalityVisitorOptions extends RefinementVisitorOptions {
  align: "left" | "right";
}

export default class CardinalityVisitor extends BaseEclVisitor {
  readonly options: CardinalityVisitorOptions;

  constructor(options: CardinalityVisitorOptions) {
    super(options);
    this.options = options;
  }

  visitMinvalue(ctx: MinvalueContext): VisualExpressionType {
    return new CardinalityVisitor({
      ...this.options,
      align: "right",
    }).visitChildren(ctx);
  }

  visitTo(): VisualExpressionType {
    return <To />;
  }

  visitMany(): VisualExpressionType {
    return <Many />;
  }

  visitNonnegativeintegervalue(
    ctx: NonnegativeintegervalueContext,
  ): VisualExpressionType {
    return (
      <NonNegativeIntegerValue
        value={ctx.getText()}
        align={this.options.align}
        focus={isFocused(ctx, this.options.focusPosition)}
        onChange={(e) => this.transformer.applyUpdate(ctx, e)}
      />
    );
  }
}

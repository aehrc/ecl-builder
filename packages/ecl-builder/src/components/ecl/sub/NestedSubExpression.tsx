/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import React, { Children } from "react";
import ExpressionGrouping from "../ExpressionGrouping";
import InlineExpressionGrouping from "../InlineExpressionGrouping";
import NeatRow from "../NeatRow";
import { SubExpressionProps, useSubExpression } from "./SubExpression";

export interface NestedSubExpressionProps extends SubExpressionProps {
  // Components to render within the heading of the expression grouping.
  heading?: React.ReactNode;
}

export default function NestedSubExpression(props: NestedSubExpressionProps) {
  const { heading, children } = props,
    { SubExpressionActions } = useSubExpression(props);

  function renderHeading() {
    const result = Children.toArray(heading).concat(
      <InlineExpressionGrouping>
        matching the following expression
      </InlineExpressionGrouping>,
      <SubExpressionActions key="actions" />,
    );
    return (
      <NeatRow className="sub-expression-heading">
        {Children.toArray(result)}
      </NeatRow>
    );
  }

  return (
    <ExpressionGrouping className="sub-expression" heading={renderHeading()}>
      {children}
    </ExpressionGrouping>
  );
}

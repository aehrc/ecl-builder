/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import React, { Children } from "react";
import ComponentLabel from "../ComponentLabel";
import ExpressionGrouping from "../ExpressionGrouping";
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
    return (
      <NeatRow className="sub-expression-heading">
        {Children.toArray(heading).concat(
          <ComponentLabel>matching the following expression</ComponentLabel>,
          <SubExpressionActions key="actions" />
        )}
      </NeatRow>
    );
  }

  return (
    <ExpressionGrouping className="sub-expression" heading={renderHeading()}>
      {children}
    </ExpressionGrouping>
  );
}

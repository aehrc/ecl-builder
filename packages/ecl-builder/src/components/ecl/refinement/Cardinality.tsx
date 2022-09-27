/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Typography } from "@mui/material";
import React, {
  Children,
  cloneElement,
  isValidElement,
  PropsWithChildren,
  ReactElement,
} from "react";
import Actions from "../Actions";
import {
  ChangeReporterProps,
  FocusManagementProps,
} from "../ExpressionVisitor";
import InlineExpressionGrouping from "../InlineExpressionGrouping";
import NeatRow from "../NeatRow";

export interface CardinalityProps
  extends ChangeReporterProps,
    PropsWithChildren {
  many: boolean;
}

export default function Cardinality({
  many,
  focus,
  onChange,
  children,
}: CardinalityProps) {
  return (
    <NeatRow className="cardinality" sx={{ flexGrow: 0 }}>
      <InlineExpressionGrouping>
        {Children.map(children, (child) =>
          isValidElement(child)
            ? cloneElement(child as ReactElement<FocusManagementProps>, {
                focus,
              })
            : null
        )}
      </InlineExpressionGrouping>
      <Actions
        actions={[
          {
            type: "item",
            label: "Toggle max of many",
            onClick: () => onChange(many ? "1" : "*"),
          },
        ]}
        title="Toggle max of many"
      >
        <Typography
          sx={(theme) => ({
            fontSize: "26px",
            position: "relative",
            top: "3px",
            width: "20px",
            color: many
              ? theme.palette.primary.main
              : theme.palette.text.primary,
          })}
        >
          *
        </Typography>
      </Actions>
    </NeatRow>
  );
}

/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Stack, useTheme } from "@mui/material";
import React, { Children, cloneElement, PropsWithChildren } from "react";
import { interleave } from "../../../array";
import HorizontalLink from "../HorizontalLink";
import RemoveExpression from "../RemoveExpression";
import Actions, { Action } from "../Actions";
import { Done, Tune } from "@mui/icons-material";
import { grey } from "../../../themes/color";

export type AttributeComparisonType =
  | "expression"
  | "numeric"
  | "string"
  | "boolean";

export interface AttributeProps extends PropsWithChildren {
  onRemove?: () => unknown;
  cardinality?: boolean;
  onAddCardinality?: () => unknown;
  onRemoveCardinality?: () => unknown;
  comparisonType: AttributeComparisonType;
  onSelectComparisonType: (
    newComparisonType: AttributeComparisonType,
  ) => unknown;
  onAddTypedSearchTerm: () => unknown;
}

export default function Attribute({
  children,
  onRemove,
  cardinality,
  onAddCardinality,
  onRemoveCardinality,
  comparisonType,
  onSelectComparisonType,
  onAddTypedSearchTerm,
}: AttributeProps) {
  const theme = useTheme();
  const childrenArray = Children.toArray(children),
    interleavedChildren = interleave(
      childrenArray,
      new Array(childrenArray.length - 1)
        .fill(
          <HorizontalLink
            style={{ marginTop: "28px", alignSelf: "flex-start" }}
          />,
        )
        .map((child, i) =>
          cloneElement(child, { key: `horizontal-link-${i}` }),
        ),
    );

  function handleClickCardinality() {
    if (cardinality && onRemoveCardinality) {
      onRemoveCardinality();
    } else if (onAddCardinality) {
      onAddCardinality();
    }
  }

  return (
    <Stack className="attribute" direction="row" spacing={1}>
      <RemoveExpression
        enabled={!!onRemove}
        tooltip="Remove this attribute from the refinement"
        onClick={onRemove}
        sx={{
          display: "flex",
          flexGrow: 1,
          flexDirection: "row",
          alignItems: "flex-start",
          "& > .actions": {
            display: "none",
          },
          "&:focus-within, &:hover": {
            "& > .actions": {
              display: "inline-flex",
            },
          },
        }}
      >
        {interleavedChildren}

        <Stack direction="row" className="actions" height="57px">
          <HorizontalLink
            style={{ marginTop: "28px", alignSelf: "flex-start" }}
          />
          <Actions
            actions={[
              {
                type: "heading",
                label: "Toggle:",
              },
              {
                type: "item",
                label: "Cardinality",
                onClick: handleClickCardinality,
                icon: cardinality ? <Done /> : null,
              },
              {
                type: "item",
                label: "Reverse flag",
                disabled: true,
              },
              {
                type: "heading",
                label: "Comparison:",
              },
              {
                type: "item",
                label: "Expression",
                onClick: () => onSelectComparisonType("expression"),
                icon: comparisonType === "expression" ? <Done /> : null,
              },
              {
                type: "item",
                label: "Numeric",
                onClick: () => onSelectComparisonType("numeric"),
                icon: comparisonType === "numeric" ? <Done /> : null,
              },
              {
                type: "item",
                label: "Search term",
                onClick: () => onSelectComparisonType("string"),
                icon: comparisonType === "string" ? <Done /> : null,
              },
              {
                type: "item",
                label: "Boolean",
                onClick: () => onSelectComparisonType("boolean"),
                icon: comparisonType === "boolean" ? <Done /> : null,
              },
              ...(comparisonType !== "string"
                ? []
                : ([
                    {
                      type: "heading",
                      label: "Add:",
                    },
                    {
                      type: "item",
                      label: "Search term",
                      onClick: () => onAddTypedSearchTerm(),
                    },
                  ] as Action[])),
            ]}
            icon={Tune}
            title="Open menu with options to change this attribute"
            sx={{
              borderWidth: 1,
              borderColor: grey(theme, 4),
              borderStyle: "solid",
              borderRadius: 1,
            }}
          />
        </Stack>
      </RemoveExpression>
    </Stack>
  );
}

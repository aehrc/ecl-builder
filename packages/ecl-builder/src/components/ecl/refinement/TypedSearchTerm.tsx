/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { IconButton, InputAdornment, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import RemoveExpression from "../RemoveExpression";
import ConcreteValue, { ConcreteValueProps } from "./ConcreteValue";

type TypedSearchTermType = "match" | "wild";

export interface TypedSearchTermProps {
  type: TypedSearchTermType;
  onChangeType: (type: TypedSearchTermType) => unknown;
  onRemove?: () => unknown;
  ConcreteValueProps: ConcreteValueProps;
}

export default function TypedSearchTerm({
  type,
  onChangeType,
  onRemove,
  ConcreteValueProps,
}: TypedSearchTermProps) {
  const theme = useTheme();

  return (
    <Stack
      className="typed-search-term"
      direction="row"
      spacing={1}
    >
      <RemoveExpression
        enabled={!!onRemove}
        tooltip="Remove this search term from the set"
        onClick={onRemove}
        sx={{
          display: "flex",
          flexDirection: "row",
          "& .typed-search-term__toggle": {
            display: type === "wild" ? "flex" : "none",
            color: theme.palette.text.primary,
          },
          "&:focus-within, &:hover": {
            "& .typed-search-term__toggle": {
              display: "flex",
              color: type === "wild" 
                ? theme.palette.text.primary
                : theme.palette.grey[500],
            }
          }
        }}
      >
        <ConcreteValue
          {...ConcreteValueProps}
          props={{
            InputProps: {
              endAdornment: (
                <InputAdornment
                  position="end"
                  sx={{
                    paddingRight: "4px",
                  }}
                >
                  <IconButton
                    className="typed-search-term__toggle"
                    title="Toggle wild search term"
                    onClick={() => onChangeType(type === "wild" ? "match" : "wild")}
                    edge="end"
                    sx={{ height: "1.15em" }}
                  >
                    <Typography
                      sx={{
                        fontSize: "26px",
                        position: "relative",
                        top: "4px",
                        lineHeight: 1,
                      }}
                    >
                      *
                    </Typography>
                  </IconButton>
                </InputAdornment>
              )
            },
            ...ConcreteValueProps.props
          }}
        />
      </RemoveExpression>
    </Stack>
  );
}

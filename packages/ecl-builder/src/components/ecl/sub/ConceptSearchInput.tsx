/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { TextField, TextFieldProps } from "@mui/material";
import React, { ForwardedRef, forwardRef } from "react";
import { FocusRefElementType } from "../FocusProvider";
import { ConceptReferenceOptionType } from "./ConceptReference";

export interface ConceptSearchInputProps {
  // Props that get set on the inner text field.
  props: TextFieldProps;
  // The currently selected concept.
  selectedConcept?: ConceptReferenceOptionType;
  // The label displayed on the text field.
  label: string;
  // A callback that is invoked when the text field is focused.
  onFocus?: () => unknown;
}

/**
 * Renders the text field that is used to search for concepts.
 *
 * @author John Grimes
 */
function ConceptSearchInput(
  { props, selectedConcept, label, onFocus }: ConceptSearchInputProps,
  ref: ForwardedRef<FocusRefElementType>,
) {
  const resolvedLabel =
    selectedConcept?.type === "ANY_CONCEPT"
      ? "*"
      : (selectedConcept?.id ?? label);

  /**
   * Provides a way of forwarding the focus to the inner text field, without discarding the
   * behaviour already required of it by the parent component.
   */
  function handleFocus(
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>,
  ) {
    // eslint-disable-next-line react/prop-types
    const forwardedOnFocus = props.inputProps?.onFocus;
    if (forwardedOnFocus) {
      forwardedOnFocus(event);
    }
    if (onFocus) {
      onFocus();
    }
  }

  return (
    <TextField
      {...props}
      inputProps={{
        // eslint-disable-next-line react/prop-types
        ...props.inputProps,
        onFocus: handleFocus,
      }}
      inputRef={ref}
      variant="filled"
      label={resolvedLabel}
      sx={(theme) => ({
        "& .MuiInputBase-root, & .MuiInputBase-root.MuiFilledInput-root.Mui-focused, & .MuiAutocomplete-inputFocused":
          {
            border: 0,
            borderRadius: 0,
            backgroundColor: theme.palette.background.paper,
            fontSize: "0.95rem",
            "&:hover": {
              backgroundColor: theme.palette.background.paper,
            },
          },
        "& .MuiFilledInput-root::before": { border: 0 },
      })}
    />
  );
}

export default forwardRef(ConceptSearchInput);

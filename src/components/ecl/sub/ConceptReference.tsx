/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Autocomplete, ListItem, TextField, Typography } from "@mui/material";
import React, { ReactNode, SyntheticEvent, useContext, useState } from "react";
import useConceptSearch from "../../../hooks/useConceptSearch";
import { Concept } from "../../../hooks/useValueSetExpansion";
import { theme } from "../../../themes/expressionBuilderTheme";
import { OptionsContext } from "../../ExpressionBuilder";
import { ChangeReporterProps } from "../ExpressionVisitor";
import ConceptSearchScope from "./ConceptSearchScope";

export interface ConceptReferenceProps extends ChangeReporterProps {
  // The currently selected concept.
  concept?: ConceptReferenceOptionType;
}

export interface BaseOptionType {
  type: string;
}

export interface ConceptSearchOption extends Concept, BaseOptionType {
  type: "SPECIFIC_CONCEPT";
}

export interface AnyConceptOption extends BaseOptionType {
  type: "ANY_CONCEPT";
}

export type ConceptReferenceOptionType = ConceptSearchOption | AnyConceptOption;

/**
 * A component that allows the user to select a concept for inclusion within an
 * expression.
 *
 * @author John Grimes
 */
export default function ConceptReference({
  concept,
  onChange,
}: ConceptReferenceProps) {
  const { terminologyServerUrl, maxSearchResults, minQueryLength } =
      useContext(OptionsContext),
    { valueSet, label } = useContext(ConceptSearchScope),
    [selectedConcept, setSelectedConcept] =
      useState<ConceptReferenceOptionType | undefined>(concept),
    [searchQuery, setSearchQuery] = useState(""),
    { data, isLoading, remove } = useConceptSearch(
      terminologyServerUrl,
      valueSet,
      searchQuery,
      maxSearchResults,
      minQueryLength
    ),
    anyConcept: AnyConceptOption = { type: "ANY_CONCEPT" },
    options: ConceptReferenceOptionType[] = selectedConcept
      ? // If a concept is selected, is it the only option until such time as the search is cleared.
        [selectedConcept]
      : // If no concept is selected, the results from the search are displayed along with
        // "any concept".
        [
          ...(data?.concepts ?? []).map(
            (c) =>
              ({
                ...c,
                type: "SPECIFIC_CONCEPT",
              } as ConceptReferenceOptionType)
          ),
          anyConcept,
        ];

  function handleInputChange(
    event: SyntheticEvent<Element, Event>,
    value: string
  ): void {
    // A change to the value of the input updates the query sent to the
    // terminology server.
    setSearchQuery(selectedConcept?.type === "ANY_CONCEPT" ? "" : value);
  }

  function handleSelectConcept(
    event: SyntheticEvent,
    newConcept: ConceptReferenceOptionType | null
  ): void {
    setSelectedConcept(newConcept ?? undefined);
    // Selection of a result sends a notification to the parent component, which
    // will update the overall expression being built.
    if (newConcept) {
      setSearchQuery(
        newConcept.type === "ANY_CONCEPT"
          ? ""
          : newConcept.display ?? newConcept.id
      );
      onChange(buildExpression(newConcept));
    }
  }

  function buildExpression(concept: ConceptReferenceOptionType): string {
    return concept.type === "ANY_CONCEPT"
      ? "*"
      : `${concept.id}${concept.display ? ` |${concept.display}|` : ""}`;
  }

  function renderOption(
    // eslint-disable-next-line @typescript-eslint/ban-types
    props: Object,
    option: ConceptReferenceOptionType
  ): ReactNode {
    let key: string,
      display: ReactNode,
      semanticTag: ReactNode,
      backgroundColor: string | null = null;
    if (option.type === "ANY_CONCEPT") {
      key = "*";
      display = "any concept";
      backgroundColor = theme.palette.grey[200];
    } else {
      key = option.id;
      display = option.display ?? option.id;
      semanticTag = option.semanticTag;
    }
    return (
      <ListItem
        {...props}
        key={key}
        sx={{ backgroundColor: backgroundColor ?? undefined }}
      >
        <Typography sx={{ fontSize: "0.95em" }} flexGrow={1}>
          {display}
        </Typography>
        {semanticTag ? (
          <Typography
            flexShrink={0}
            variant="body2"
            sx={{
              marginLeft: 1,
              fontStyle: "italic",
              lineHeight: 1.83,
              alignSelf: "flex-start",
            }}
          >
            {semanticTag}
          </Typography>
        ) : null}
      </ListItem>
    );
  }

  function getOptionLabel(option: ConceptReferenceOptionType) {
    if (option.type === "ANY_CONCEPT") {
      return "any concept";
    } else {
      return option.display ?? option.id;
    }
  }

  function isOptionEqualToValue(
    option: ConceptReferenceOptionType,
    value: ConceptReferenceOptionType
  ) {
    if (option.type === "ANY_CONCEPT" && value.type === "ANY_CONCEPT") {
      return true;
    } else if (
      option.type === "SPECIFIC_CONCEPT" &&
      value.type === "SPECIFIC_CONCEPT"
    ) {
      return option.id === value.id;
    } else {
      return false;
    }
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  function renderInput(params: Object): ReactNode {
    const resolvedLabel =
      selectedConcept?.type === "ANY_CONCEPT"
        ? "*"
        : selectedConcept?.id ?? label;
    return (
      <TextField
        {...params}
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

  return (
    <Autocomplete
      className="concept-reference"
      sx={{ flexGrow: 1 }}
      renderInput={renderInput}
      options={options}
      value={selectedConcept ?? null}
      getOptionLabel={getOptionLabel}
      isOptionEqualToValue={isOptionEqualToValue}
      onInputChange={handleInputChange}
      renderOption={renderOption}
      filterOptions={(options) => options}
      onChange={handleSelectConcept}
      onClose={remove}
      loading={isLoading}
    />
  );
}

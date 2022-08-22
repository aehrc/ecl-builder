/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Autocomplete, ListItem, TextField, Typography } from "@mui/material";
import React, { SyntheticEvent, useContext, useState } from "react";
import useConceptSearch from "../../hooks/useConceptSearch";
import { Concept } from "../../hooks/useValueSetExpansion";
import { OptionsContext } from "../ExpressionBuilder";
import ConceptSearchScope from "./ConceptSearchScope";
import { ChangeReporterProps } from "./ExpressionVisitor";

export interface ConceptReferenceProps extends ChangeReporterProps {
  // The currently selected concept.
  concept?: Concept;
}

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
      useState<Concept | undefined>(concept),
    [searchQuery, setSearchQuery] = useState(""),
    { data, isLoading, remove } = useConceptSearch(
      terminologyServerUrl,
      valueSet,
      searchQuery,
      maxSearchResults,
      minQueryLength
    );

  function handleInputChange(
    event: SyntheticEvent<Element, Event>,
    value: string
  ): void {
    // A change to the value of the input updates the query sent to the
    // terminology server.
    setSearchQuery(value);
  }

  function handleSelectConcept(
    event: SyntheticEvent,
    newConcept: Concept | null
  ) {
    setSelectedConcept(newConcept ?? undefined);
    // Selection of a result sends a notification to the parent component, which
    // will update the overall expression being built.
    if (newConcept) {
      setSearchQuery(newConcept.display || newConcept.id);
      onChange(buildExpression(newConcept));
    }
  }

  function buildExpression(concept: Concept): string {
    return `${concept.id}${concept.display ? ` |${concept.display}|` : ""}`;
  }

  return (
    <Autocomplete
      className="concept-reference"
      sx={{ flexGrow: 1 }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="filled"
          label={selectedConcept?.id || label}
          sx={(theme) => ({
            "& .MuiInputBase-root, & .MuiAutocomplete-inputFocused": {
              border: 0,
              borderRadius: 0,
              backgroundColor: theme.palette.background.paper,
              fontSize: "1.05rem",
              "&:hover": {
                backgroundColor: theme.palette.background.paper,
              },
            },
            "& .MuiFilledInput-root::before": { border: 0 },
          })}
        />
      )}
      options={data?.concepts || []}
      value={selectedConcept ?? null}
      getOptionLabel={(concept) => concept.display || concept.id}
      isOptionEqualToValue={(a, b) => a.id === b.id}
      onInputChange={handleInputChange}
      renderOption={(props, concept) => (
        <ListItem {...props} key={concept.id}>
          <Typography sx={{ fontSize: "0.95em" }} flexGrow={1}>
            {concept.display || concept.id}
          </Typography>
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
            {concept.semanticTag}
          </Typography>
        </ListItem>
      )}
      filterOptions={(options) => options}
      onChange={handleSelectConcept}
      onClose={remove}
      loading={isLoading}
    />
  );
}

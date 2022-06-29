/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Autocomplete, ListItem, ListItemText, TextField } from "@mui/material";
import React, { SyntheticEvent, useContext, useState } from "react";
import useConceptSearch, { Concept } from "../../hooks/useConceptSearch";
import { OptionsContext } from "../ExpressionBuilder";

export interface ConceptReferenceProps {
  // The currently selected concept.
  concept?: Concept;
  // Invoke when the selected concept is changed.
  onChange: (expression: string) => unknown;
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
  const { terminologyServerUrl } = useContext(OptionsContext),
    [query, setQuery] = useState(""),
    {
      data: concepts,
      isLoading,
      remove,
    } = useConceptSearch(terminologyServerUrl, query);

  function handleInputChange(
    event: SyntheticEvent<Element, Event>,
    value: string
  ) {
    // A change to the value of the input updates the query sent to the
    // terminology server.
    setQuery(value);
  }

  function handleChange(event: SyntheticEvent, newConcept: Concept | null) {
    // Selection of a result sends a notification to the parent component, which
    // will update the overall expression being built.
    if (newConcept) {
      setQuery(newConcept.display || newConcept.id);
      onChange(
        `${newConcept.id}${
          newConcept.display ? ` |${newConcept.display}|` : ""
        }`
      );
    }
  }

  return (
    <Autocomplete
      renderInput={(params) => (
        <TextField {...params} label={concept?.id || "Search for a concept"} />
      )}
      options={concepts || []}
      value={concept}
      getOptionLabel={(concept) => concept.display || concept.id}
      isOptionEqualToValue={(a, b) => a.id === b.id}
      onInputChange={handleInputChange}
      renderOption={(props, concept) => (
        <ListItem {...props} key={concept.id}>
          <ListItemText>{concept.display || concept.id}</ListItemText>
        </ListItem>
      )}
      filterOptions={(options, params) => options}
      onChange={handleChange}
      onClose={remove}
      loading={isLoading}
    />
  );
}

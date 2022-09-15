/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Autocomplete, TextFieldProps } from "@mui/material";
import React, {
  HTMLAttributes,
  Key,
  ReactNode,
  SyntheticEvent,
  useContext,
  useState,
} from "react";
import useConceptSearch from "../../../hooks/useConceptSearch";
import { Concept } from "../../../hooks/useValueSetExpansion";
import { OptionsContext } from "../../ExpressionBuilder";
import { ChangeReporterProps } from "../ExpressionVisitor";
import { useFocus } from "../FocusProvider";
import AnyConcept from "./AnyConcept";
import ConceptSearchInput from "./ConceptSearchInput";
import ConceptSearchScope from "./ConceptSearchScope";
import SelectedConcept from "./SelectedConcept";
import SuggestedConcept from "./SuggestedConcept";

export interface ConceptReferenceProps extends ChangeReporterProps {
  // The currently selected concept.
  concept?: ConceptReferenceOptionType;
}

export interface BaseOptionType {
  type: string;
}

// Represents a concept that has been returned from a search on the terminology server.
export interface ConceptSearchOption extends Concept, BaseOptionType {
  type: "SPECIFIC_CONCEPT";
}

// Represents the special "Any concept" option.
export interface AnyConceptOption extends BaseOptionType {
  type: "ANY_CONCEPT";
}

// An option displayed as part of the autocomplete.
export type ConceptReferenceOptionType = ConceptSearchOption | AnyConceptOption;

const ANY_CONCEPT: AnyConceptOption = { type: "ANY_CONCEPT" };

/**
 * A component that allows the user to select a concept for inclusion within an
 * expression.
 *
 * @author John Grimes
 */
export default function ConceptReference({
  concept,
  focus,
  onChange,
  onFocus,
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
    focusRef = useFocus(focus),
    searchResults = getSearchResults(),
    options = getOptions();

  /**
   * Map the raw search results into a set of options for the autocomplete.
   */
  function getSearchResults(): ConceptReferenceOptionType[] {
    if (searchQuery.length >= minQueryLength && data?.concepts) {
      const map: ConceptReferenceOptionType[] = data.concepts.map((c) => ({
        ...c,
        type: "SPECIFIC_CONCEPT",
      }));
      return map.filter(
        (c) => !selectedConcept || !isOptionEqualToValue(c, selectedConcept)
      );
    } else {
      return [];
    }
  }

  /**
   * Get the full set of options, including "any concept" and the currently selected concept.
   */
  function getOptions(): ConceptReferenceOptionType[] {
    return [
      ...(selectedConcept ? [selectedConcept] : []),
      ...(searchQuery.length >= minQueryLength ? searchResults : []),
      ...(selectedConcept?.type === "ANY_CONCEPT" ? [] : [ANY_CONCEPT]),
    ];
  }

  function handleInputChange(
    event: SyntheticEvent<Element, Event> | null,
    value: string
  ): void {
    // A change to the value of the input updates the query sent to the
    // terminology server.
    if (event && event.type === "change") {
      setSearchQuery(value);
    } else if (event && event.type === "click" && value === "") {
      // A click on the clear button resets the search query, and deselects the concept.
      setSearchQuery("");
      setSelectedConcept(undefined);
    }
  }

  function handleSelectConcept(
    event: SyntheticEvent,
    newConcept: ConceptReferenceOptionType | null
  ): void {
    setSelectedConcept(newConcept ?? undefined);
    setSearchQuery("");
    // Selection of a result sends a notification to the parent component, which
    // will update the overall expression being built.
    if (newConcept) {
      onChange(buildExpression(newConcept));
    }
  }

  function renderOption(
    // eslint-disable-next-line @typescript-eslint/ban-types
    props: HTMLAttributes<HTMLLIElement> & { key?: Key },
    option: ConceptReferenceOptionType,
    { selected }: { selected?: boolean }
  ): ReactNode {
    const key = option.type === "ANY_CONCEPT" ? option.type : option.id;
    if (selected) {
      return (
        <SelectedConcept
          key={key}
          props={props}
          option={option}
          separator={options.length > 2}
        />
      );
    } else if (option.type === "ANY_CONCEPT") {
      return (
        <AnyConcept key={key} props={props} separator={options.length > 1} />
      );
    } else {
      return <SuggestedConcept key={key} props={props} option={option} />;
    }
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  function renderInput(params: Object): ReactNode {
    return (
      <ConceptSearchInput
        ref={focusRef}
        props={params as TextFieldProps}
        label={
          selectedConcept ? getInputLabelForOption(selectedConcept) : label
        }
        onFocus={onFocus}
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

/**
 * Builds the new expression that would result, should the given concept be selected.
 */
function buildExpression(concept: ConceptReferenceOptionType): string {
  return concept.type === "ANY_CONCEPT"
    ? "*"
    : `${concept.id}${concept.display ? ` |${concept.display}|` : ""}`;
}

/**
 * Determine the label for each item within the autocomplete.
 */
function getOptionLabel(option: ConceptReferenceOptionType) {
  if (option.type === "ANY_CONCEPT") {
    return "any concept";
  } else {
    return option.display ?? option.id;
  }
}

/**
 * Determine the label within the input field, based on the concept that has been selected.
 */
function getInputLabelForOption(option: ConceptReferenceOptionType): string {
  if (option.type === "ANY_CONCEPT") {
    return "*";
  } else {
    return option.id;
  }
}

/**
 * Used for determining equality between options.
 */
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

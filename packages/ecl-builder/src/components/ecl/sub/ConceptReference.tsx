/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Autocomplete } from "@mui/material";
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

export interface ConceptSearchOption extends Concept, BaseOptionType {
  type: "SPECIFIC_CONCEPT";
}

export interface AnyConceptOption extends BaseOptionType {
  type: "ANY_CONCEPT";
}

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
    searchResults = getSearchResults(),
    options = getOptions();

  function getSearchResults(): ConceptReferenceOptionType[] {
    return searchQuery.length >= minQueryLength && data?.concepts
      ? data.concepts
          .map(
            (c) =>
              ({
                ...c,
                type: "SPECIFIC_CONCEPT",
              } as ConceptReferenceOptionType)
          )
          .filter(
            (c) => !selectedConcept || !isOptionEqualToValue(c, selectedConcept)
          )
      : [];
  }

  function getOptions(): ConceptReferenceOptionType[] {
    return [
      ...(selectedConcept ? [selectedConcept] : []),
      ...(searchResults.length >= minQueryLength ? searchResults : []),
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
    props: HTMLAttributes<HTMLLIElement>,
    option: ConceptReferenceOptionType,
    { selected }: { selected?: boolean }
  ): ReactNode {
    const key = (props as { key?: Key }).key;
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
        props={params as Record<string, unknown>}
        label={label}
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

function buildExpression(concept: ConceptReferenceOptionType): string {
  return concept.type === "ANY_CONCEPT"
    ? "*"
    : `${concept.id}${concept.display ? ` |${concept.display}|` : ""}`;
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

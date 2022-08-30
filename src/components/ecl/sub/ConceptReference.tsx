/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { PushPin } from "@mui/icons-material";
import {
  Autocomplete,
  Chip,
  ListItem,
  SxProps,
  TextField,
  Theme,
  Typography,
} from "@mui/material";
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
    options = getOptions(),
    commonSemanticTagStyles = {
      marginLeft: 1,
      lineHeight: 1.83,
      alignSelf: "flex-start",
    };

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
    if (selectedConcept && selectedConcept.type === "ANY_CONCEPT") {
      return [selectedConcept];
    } else if (selectedConcept && searchQuery.length < minQueryLength) {
      // If a concept is selected, is it the only option until such time as the search is cleared.
      return [selectedConcept, ANY_CONCEPT];
    } else {
      return selectedConcept
        ? // If a concept is selected, it should be the first option, followed by the search results
          // and then "any concept".
          [selectedConcept, ...searchResults, ANY_CONCEPT]
        : // If there is no concept selected, show the search results and then "any concept".
          [...searchResults, ANY_CONCEPT];
    }
  }

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
    setSearchQuery("");
    // Selection of a result sends a notification to the parent component, which
    // will update the overall expression being built.
    if (newConcept) {
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
    if (option.type === "ANY_CONCEPT") {
      return renderAnyConceptOption(props);
    } else if (
      selectedConcept &&
      isOptionEqualToValue(option, selectedConcept)
    ) {
      return renderSelectedConceptOption(props, option);
    } else {
      return renderSearchResultOption(props, option);
    }
  }

  function renderAnyConceptOption(
    // eslint-disable-next-line @typescript-eslint/ban-types
    props: Object
  ) {
    const display = "any concept",
      semanticTag = (
        <PushPin
          sx={{
            ...commonSemanticTagStyles,
            fontSize: "1.2em",
            color: theme.palette.grey[500],
            position: "relative",
            top: "0.2em",
          }}
        />
      ),
      listItemStyles =
        options.length > 1
          ? {
              borderTopColor: theme.palette.grey[300],
              borderTopWidth: 1,
              borderTopStyle: "solid",
            }
          : {};
    return (
      <Option
        props={props as Record<string, unknown>}
        listItemStyles={listItemStyles}
        display={display}
        semanticTag={semanticTag}
      />
    );
  }

  function renderSelectedConceptOption(
    // eslint-disable-next-line @typescript-eslint/ban-types
    props: Object,
    option: ConceptSearchOption
  ) {
    const display = option.display ?? option.id,
      semanticTag = (
        <Chip
          label="selected"
          size="small"
          sx={{ ...commonSemanticTagStyles, mr: 0 }}
        />
      ),
      listItemStyles = {
        "&.MuiAutocomplete-option": { pr: 1 },
        ...(options.length > 2
          ? {
              borderBottomColor: theme.palette.grey[300],
              borderBottomWidth: 1,
              borderBottomStyle: "solid",
            }
          : {}),
      };
    return (
      <Option
        props={props as Record<string, unknown>}
        listItemStyles={listItemStyles}
        display={display}
        semanticTag={semanticTag}
      />
    );
  }

  function renderSearchResultOption(
    // eslint-disable-next-line @typescript-eslint/ban-types
    props: Object,
    option: ConceptSearchOption
  ) {
    const display = option.display ?? option.id,
      semanticTag = (
        <Typography
          flexShrink={0}
          variant="body2"
          sx={{
            ...commonSemanticTagStyles,
            fontStyle: "italic",
          }}
        >
          {option.semanticTag}
        </Typography>
      );
    return (
      <Option
        props={props as Record<string, unknown>}
        display={display}
        semanticTag={semanticTag}
      />
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

interface OptionProps {
  props: Record<string, unknown>;
  listItemStyles?: SxProps<Theme>;
  display: ReactNode;
  semanticTag: ReactNode;
}

function Option({
  props,
  listItemStyles = {},
  display,
  semanticTag,
}: OptionProps) {
  return (
    <ListItem {...props} sx={listItemStyles}>
      <Typography sx={{ fontSize: "0.95em" }} flexGrow={1}>
        {display}
      </Typography>
      {semanticTag ?? null}
    </ListItem>
  );
}

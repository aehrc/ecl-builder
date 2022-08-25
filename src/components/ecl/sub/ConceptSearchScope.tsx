/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { createContext } from "react";
import { SCT_URI } from "../../../constants";

export interface ConceptSearchScopeType {
  valueSet: string;
  label: string;
}

export const DEFAULT_SEARCH_SCOPE = {
  valueSet: `${SCT_URI}?fhir_vs`,
  label: "Search for a concept",
};

const ConceptSearchScope =
  createContext<ConceptSearchScopeType>(DEFAULT_SEARCH_SCOPE);
export default ConceptSearchScope;

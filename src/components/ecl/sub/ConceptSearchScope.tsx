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

const ConceptSearchScope = createContext<ConceptSearchScopeType>({
  valueSet: `${SCT_URI}?fhir_vs`,
  label: "Search for a concept",
});
export default ConceptSearchScope;

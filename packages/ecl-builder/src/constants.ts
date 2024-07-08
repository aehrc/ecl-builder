/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

export const SCT_URI = "http://snomed.info/sct";
export const FULLY_SPECIFIED_NAME_ID = "900000000000003001";
export const DEFAULT_CONCEPT = "138875005 |SNOMED CT Concept|";
export const DEFAULT_REFINEMENT = `47429007 |associated with| = << ${DEFAULT_CONCEPT}`;
export const DEFAULT_CARDINALITY = "1..1";

export const REFERENCE_SET_VALUE_SET_URI = `${SCT_URI}?fhir_vs=ecl/%3C%20446609009%20`;
export const ATTRIBUTE_VALUE_SET_URI = `${SCT_URI}?fhir_vs=ecl/%3C%20246061005%20`;

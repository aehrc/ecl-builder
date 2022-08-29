/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import Stack from "@mui/material/Stack/Stack";
import React, { PropsWithChildren } from "react";
import ConceptReference from "../sub/ConceptReference";
import ConceptSearchScope, {
  DEFAULT_SEARCH_SCOPE,
} from "../sub/ConceptSearchScope";
import LogicOperator from "./LogicOperator";
import LogicStatement, { LogicStatementType } from "./LogicStatement";

export interface BlankLogicStatementProps extends PropsWithChildren {
  // The type of logic statement to be added.
  type: LogicStatementType;
  // Called when the logic statement type is changed.
  onChangeType: (type: LogicStatementType) => unknown;
  // Called when the statement is updated.
  onSave: (type: LogicStatementType, expression: string) => unknown;
}

export default function BlankLogicStatement({
  type,
  onChangeType,
  onSave,
  children,
}: BlankLogicStatementProps) {
  return (
    <LogicStatement
      type={type}
      onChangeType={onChangeType}
      onAddCondition={(e) => onSave(type, e)}
    >
      <Stack className="logic-statement-sub-expression" direction="row">
        {children}
      </Stack>
      <LogicOperator type={type} />
      <ConceptSearchScope.Provider value={DEFAULT_SEARCH_SCOPE}>
        <ConceptReference onChange={(e) => onSave(type, e)} />
      </ConceptSearchScope.Provider>
    </LogicStatement>
  );
}

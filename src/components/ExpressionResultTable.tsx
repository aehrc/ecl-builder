/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { ConceptSearchResult } from "../hooks/useValueSetExpansion";

export interface ExpressionResultTableProps {
  results: ConceptSearchResult;
}

export default function ExpressionResultTable({
  results,
}: ExpressionResultTableProps) {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Preferred term</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {results.concepts?.map((concept) => (
            <TableRow key={concept.id}>
              <TableCell>{concept.id}</TableCell>
              <TableCell>{concept.display}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

/*
 * Copyright © 2026, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { EclEditor } from "@aehrc/ecl-editor-react";
import { useTheme } from "@mui/material";
import React, { useContext } from "react";
import type { CodeEditorProps } from "./CodeEditor";
import { OptionsContext } from "./ExpressionBuilder";
import type { ExpressionDiagnostic } from "../types";

interface EclCodeEditorProps extends CodeEditorProps {
  onDiagnosticsChange?: (diagnostics: ExpressionDiagnostic[]) => void;
}

/**
 * An advanced editor for manipulating the expression in its raw ECL form,
 * powered by @aehrc/ecl-editor-react with Monaco for syntax highlighting,
 * autocompletion, and validation.
 *
 * Requires @aehrc/ecl-editor-react (which requires React >= 18),
 * @monaco-editor/react, and monaco-editor to be installed.
 *
 * @param props.expression - The current ECL expression string.
 * @param props.onChange - Callback invoked when the expression changes.
 * @param props.onDiagnosticsChange - Callback invoked when editor diagnostics change.
 * @returns A Monaco-based ECL editor component.
 */
export default function EclCodeEditor({
  expression,
  onChange,
  onDiagnosticsChange,
}: EclCodeEditorProps) {
  const options = useContext(OptionsContext);
  const muiTheme = useTheme();
  const monacoTheme = muiTheme.palette.mode === "dark" ? "vs-dark" : "vs";

  return (
    <EclEditor
      value={expression}
      onChange={onChange}
      onDiagnostics={onDiagnosticsChange}
      fhirServerUrl={options.terminologyServerUrl}
      snomedVersion={options.systemVersion}
      theme={monacoTheme}
      height="300px"
      minimap={false}
      lineNumbers={false}
    />
  );
}

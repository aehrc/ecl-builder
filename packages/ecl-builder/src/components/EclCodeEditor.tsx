/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { EclEditor } from "@aehrc/ecl-editor-react";
import React, { useContext } from "react";
import type { CodeEditorProps } from "./CodeEditor";
import { OptionsContext } from "./ExpressionBuilder";

/**
 * An advanced editor for manipulating the expression in its raw ECL form,
 * powered by @aehrc/ecl-editor-react with Monaco for syntax highlighting,
 * autocompletion, and validation.
 *
 * Requires @aehrc/ecl-editor-react (which requires React >= 18),
 * @monaco-editor/react, and monaco-editor to be installed.
 */
export default function EclCodeEditor({
  expression,
  onChange,
  onDiagnosticsChange,
}: CodeEditorProps) {
  const options = useContext(OptionsContext);

  return (
    <EclEditor
      value={expression}
      onChange={onChange}
      onDiagnostics={onDiagnosticsChange}
      fhirServerUrl={options.terminologyServerUrl}
      snomedVersion={options.systemVersion}
      height="300px"
      minimap={false}
      lineNumbers={false}
    />
  );
}

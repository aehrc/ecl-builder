/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { InputBase } from "@mui/material";
import React, { useState } from "react";
import { ChangeReporterProps } from "../ExpressionVisitor";
import { useFocus } from "../FocusProvider";

interface NonNegativeIntegerValue extends ChangeReporterProps {
  value: string;
  align: "left" | "right";
}

export default function NonNegativeIntegerValue({
  value,
  align = "left",
  focus,
  onChange,
}: NonNegativeIntegerValue) {
  const [currentValue, setCurrentValue] = useState(value),
    focusRef = useFocus(focus);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value;
    setCurrentValue(newValue);
    if (newValue !== "") {
      onChange(newValue);
    }
  }

  return (
    <InputBase
      inputRef={focusRef}
      value={currentValue}
      onChange={handleChange}
      sx={{
        "& .MuiInputBase-input": {
          padding: 0,
          width: parseInt(value) > 9 ? "18px" : "9px",
          textAlign: align,
        },
      }}
    />
  );
}

/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { ParserRuleContext } from "antlr4";
import { RefObject, useEffect, useRef } from "react";
import { PositionedFocusHandler } from "../components/ecl/BaseEclVisitor";

/**
 * This is a hook that provides a ref that can be passed to a component that should receive focus.
 * The hook also sets the focus when the specified condition is set to true.
 */
export default function useFocus(focus?: boolean): RefObject<HTMLElement> {
  const focusRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (focus && focusRef.current) {
      focusRef.current.focus();
    }
  }, [focus]);

  return focusRef;
}

/**
 * Determines whether the focus position falls within the range of the specified parser context.
 */
export function isFocused(
  focusPosition: number | undefined,
  ctx: ParserRuleContext
) {
  return (
    focusPosition !== undefined &&
    focusPosition >= ctx.start.start &&
    focusPosition <= ctx.stop.stop
  );
}

/**
 * Provides a focus handler that reports the focus position based upon the specified parser context.
 */
export function focusHandler(
  onFocus: PositionedFocusHandler,
  ctx: ParserRuleContext
): () => unknown {
  return () => onFocus(ctx.start.start);
}

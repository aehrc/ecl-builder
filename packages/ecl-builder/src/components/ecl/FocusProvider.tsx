/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { ParserRuleContext } from "antlr4";
import React, {
  createContext,
  PropsWithChildren,
  RefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { PositionedFocusHandler } from "./BaseEclVisitor";

export interface FocusContextType {
  // The current focus position.
  position?: number;
  // A callback that is invoked when the focus position changes.
  onFocus?: PositionedFocusHandler;
  // A ref that holds the component that will be given focus.
  ref?: FocusRefType;
}

export type FocusRefType = RefObject<FocusRefElementType>;
export type FocusRefElementType = HTMLElement;

export const FocusContext = createContext<FocusContextType>({});

/**
 * This component provides a context that contains the current focus position and a callback
 * that can be used to change it. It also provides a ref that can be used to nominate a component
 * that will receive focus.
 *
 * @author John Grimes
 */
export default function FocusProvider({ children }: PropsWithChildren) {
  const [position, setPosition] = useState<number | undefined>(undefined);
  const ref = useRef<FocusRefElementType>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  });

  return (
    <FocusContext.Provider value={{ position, onFocus: setPosition, ref }}>
      {children}
    </FocusContext.Provider>
  );
}

/**
 * This is a hook that provides a ref that can be passed to a component that should receive focus.
 * The hook also sets the focus when the specified condition is set to true.
 */
export function useFocus(focus?: boolean): FocusRefType | undefined {
  const { ref } = useContext(FocusContext);
  return focus ? ref : undefined;
}

/**
 * Determines whether the specified context is the same as the focused context.
 */
export function isFocused(
  ctx: ParserRuleContext,
  focusPosition: number | undefined
): boolean {
  if (focusPosition === undefined) {
    return false;
  } else {
    return focusPosition >= ctx.start.start && focusPosition <= ctx.stop.stop;
  }
}

/**
 * Provides a focus handler that reports the focus position based upon the specified parser context.
 */
export function focusHandler(
  ctx: ParserRuleContext,
  onFocus: PositionedFocusHandler | undefined
): () => unknown {
  return () => {
    if (onFocus !== undefined) {
      return onFocus(ctx.start.start);
    }
  };
}

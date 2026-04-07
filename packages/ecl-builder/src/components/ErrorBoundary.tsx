/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Alert } from "@mui/material";
import React, { Component, PropsWithChildren } from "react";

export interface ErrorBoundaryProps extends PropsWithChildren {
  resetKey?: unknown;
}

interface ErrorBoundaryState {
  error?: Error;
}

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  /**
   *
   * @param props
   */
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {};
  }

  /**
   *
   * @param error
   */
  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  /**
   *
   * @param prevProps
   */
  componentDidUpdate(prevProps: ErrorBoundaryProps) {
    if (prevProps.resetKey !== this.props.resetKey) {
      // Reset error when key changes
      this.setState({ error: undefined });
    }
  }

  /**
   *
   */
  render() {
    const {
      props: { children },
      state: { error },
    } = this;

    if (error) {
      return <Alert severity="error">{error.message}</Alert>;
    } else {
      return children;
    }
  }
}

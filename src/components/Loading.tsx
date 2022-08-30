/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { LinearProgress } from "@mui/material";
import React, { PropsWithChildren, Suspense, useEffect, useState } from "react";

export interface LoadingProps extends PropsWithChildren {
  // The delay (in milliseconds) before the loading indicator is displayed.
  delay: number;
}

export default function Loading({ delay, children }: LoadingProps) {
  return (
    <Suspense fallback={<DelayedLoading delay={delay} />}>{children}</Suspense>
  );
}

function DelayedLoading({ delay }: { delay: number }) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setTimeout(() => setReady(true), delay);
  }, []);
  return ready ? <LinearProgress /> : null;
}

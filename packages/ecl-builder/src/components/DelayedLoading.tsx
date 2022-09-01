/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import React, { PropsWithChildren, Suspense, useEffect, useState } from "react";
import Loading from "./Loading";

export interface LoadingProps extends PropsWithChildren {
  // The delay (in milliseconds) before the loading indicator is displayed.
  delay: number;
}

export default function DelayedLoading({ delay, children }: LoadingProps) {
  return (
    <Suspense fallback={<SuspendedLoading delay={delay} />}>
      {children}
    </Suspense>
  );
}

function SuspendedLoading({ delay }: { delay: number }) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setReady(true), delay);
    return () => clearTimeout(timeout);
  }, []);
  return ready ? <Loading /> : null;
}

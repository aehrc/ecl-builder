/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { createContext } from "react";

export interface RenderingOptionsType {
  insideEclAttribute: boolean;
}

const RenderingContext = createContext<RenderingOptionsType>({
  insideEclAttribute: false,
});
export default RenderingContext;

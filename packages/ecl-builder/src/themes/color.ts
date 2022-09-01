import { darken, lighten, Theme } from "@mui/material";

export function grey(theme: Theme, level: number): string {
  const color = theme.palette.getContrastText(theme.palette.background.default),
    alter = theme.palette.mode === "dark" ? darken : lighten,
    ratio = theme.palette.mode === "dark" ? 1.5 : 1;
  return alter(color, 1 - (level / 10) * ratio);
}

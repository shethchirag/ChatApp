import { styled } from "@mui/material";

export const VisuallyHiddenInput = styled("input")({
  position: "absolute",
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  border: 0,
  clip: "rect(0 0 0 0)",
  overflow: "hidden",
  whiteSpace: "nowrap",
});
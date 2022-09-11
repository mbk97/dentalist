import { styled, Button } from "@mui/material";

export const PrimaryButton = styled(Button)({
  width: "240px",
  height: "64px",
  background: "#583FBC",
  borderRadius: " 16px",
  color: "#ffffff",
});

export const SmallPrimaryButton = styled(PrimaryButton)({
  width: "174px",
  height: "48px",
});

export const SecondaryButton = styled(PrimaryButton)({
  color: "#583FBC",
  background: "#E4E6F1",
  fontWeight: "bold",
  // textTransform: "lowercase",
  filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
});

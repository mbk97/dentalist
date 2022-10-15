import { styled, Typography } from "@mui/material";

const CardText = styled(Typography)({
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "26px",
  letterSpacing: "-0.02em",
  color: "#181945",
  opacity: "0.5",
});

const MediumText = styled(CardText)({
  color: "#181945",
  opacity: "0.8",
  lineHeight: "28px",
  fontSize: "18px",
});

const LargeText = styled(MediumText)({
  fontSize: "20px",
  fontWeight: 700,
});

const DoctorsName = styled(MediumText)({
  opacity: 1,
  fontWeight: 700,
  letterSpacing: "-0.02em",
  textAlign: "center",
});

export { CardText, MediumText, LargeText, DoctorsName };

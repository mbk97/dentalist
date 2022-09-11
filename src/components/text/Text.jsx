import { Typography } from "@mui/material";
import React from "react";

const SectionText = ({ text }) => {
  return (
    <Typography
      variant="p"
      sx={(theme) => ({
        color: "#583FBC",
        textTransform: "uppercase",
        fontweight: "700",
        fontSize: "12px",
        lineHeight: "20px",
        letterSpacing: " 0.08em",
      })}
    >
      {text}
    </Typography>
  );
};

const HeaderText = ({ text }) => {
  return (
    <Typography
      variant="h2"
      sx={(theme) => ({
        fontWeight: "700",
        fontSize: "48px",
        lineHeight: "60px",
        letterSpacing: "-0.04em",
        color: "#181945",
        [theme.breakpoints.down("sm")]: {
          fontSize: "18px",
          lineHeight: "30px",
        },
      })}
    >
      {text}
    </Typography>
  );
};

const PageTitle = ({ text }) => {
  return (
    <Typography
      variant="h1"
      sx={(theme) => ({
        fontWeight: "700",
        fontSize: "64px",
        lineHeight: "80.64px",
        letterSpacing: "-0.04em",
        textTransform: "capitalize",
        color: "#181945",
        [theme.breakpoints.down("sm")]: {
          fontSize: "32px",
          lineHeight: "30px",
        },
      })}
    >
      {text}
    </Typography>
  );
};

export { SectionText, HeaderText, PageTitle };

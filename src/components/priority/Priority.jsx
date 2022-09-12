import { Box, Grid } from "@mui/material";
import React from "react";
import { PrimaryButton } from "../button/button";
import { MediumText } from "../text/text";
import { HeaderText, SectionText } from "../text/Text";
import priorityImg from "../../assets/images/priority.png";

const Priority = () => {
  return (
    <Grid
      container
      mt={4}
      columnSpacing={{ xs: 1, sm: 2, md: 5 }}
      sx={(theme) => ({
        display: "flex",
        [theme.breakpoints.down("sm")]: {},
      })}
    >
      <Grid item>
        <img src={priorityImg} style={{ maxWidth: "100%" }} alt="" />
      </Grid>
      <Grid
        mt={3}
        item
        sx={(theme) => ({
          width: "600px",
          marginLeft: "40px",
          [theme.breakpoints.down("md")]: {
            maxWidth: "100%",
            marginLeft: "0px",
          },
        })}
      >
        <SectionText text="Our priority" />
        <Box mt={2}>
          <HeaderText text="Our clients are our priority" />
        </Box>
        <MediumText
          //   mb={5}
          mt={2}
          sx={(theme) => ({
            width: "510px",
            marginBottom: "80px",
            marginTop: "20px",
            [theme.breakpoints.down("md")]: {
              maxWidth: "100%",
              marginBottom: "20px",
            },
          })}
        >
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </MediumText>
        <PrimaryButton>Book an appointment</PrimaryButton>
      </Grid>
    </Grid>
  );
};

export default Priority;

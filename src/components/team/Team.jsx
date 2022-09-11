import { Box, Grid } from "@mui/material";
import React from "react";
import { DoctorsName, MediumText } from "../text/text";
import { HeaderText, SectionText } from "../text/Text";
import { doctors } from "./data";
import { useStyles } from "./style";

const Team = () => {
  const classes = useStyles();

  return (
    <Box mt={4}>
      <SectionText text="meet our team" />
      <Box
        justifyContent="space-between"
        className={classes.flexWrapper}
        sx={(theme) => ({
          [theme.breakpoints.down("md")]: {
            flexDirection: "column",
          },
        })}
      >
        <Box
          sx={(theme) => ({
            width: "541px",
            [theme.breakpoints.down("sm")]: {
              width: "100%",
            },
          })}
        >
          <HeaderText text="Get to know the dentalist dental Team" />
        </Box>
        <Box
          className={classes.sectionText}
          sx={(theme) => ({
            width: "38%",
            [theme.breakpoints.down("md")]: {
              width: "100%",
            },
          })}
        >
          <MediumText>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </MediumText>
        </Box>
      </Box>
      <Grid
        container
        spacing={2}
        mt={4}
        sx={(theme) => ({
          justifyContent: "space-between",
          [theme.breakpoints.down("sm")]: {
            justifyContent: "center",
            alignItems: "center",
          },
        })}
      >
        {doctors.map((item) => {
          return (
            <Grid item key={item.id}>
              <img src={item.img} alt="" />
              <DoctorsName>{item.name}</DoctorsName>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Team;

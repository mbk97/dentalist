import { ArrowCircleRight } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import React from "react";
import { SecondaryButton } from "../button/button";
import { MediumText } from "../text/text";
import { HeaderText, SectionText } from "../text/Text";
import { serviceData } from "./data";
import { useStyles } from "./style";

const Services = () => {
  const classes = useStyles();

  return (
    <Box className={classes.serviceWrapper} mt={4}>
      <SectionText text="services" />
      <Box
        className={classes.flexWrapper}
        sx={(theme) => ({
          [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            // padding: "0 20px",
          },
        })}
      >
        <Box
          className={classes.titleWrapper}
          sx={(theme) => ({
            width: "500px",
            [theme.breakpoints.down("sm")]: {
              width: "100%",
            },
          })}
        >
          <HeaderText text="Feel amazing about your oral health" />
        </Box>
        <Box
          className={classes.sectionText}
          sx={(theme) => ({
            width: "38%",
            [theme.breakpoints.down("sm")]: {
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
        spacing={3}
        justifyContent="space-between"
        mt={4}
        sx={(theme) => ({
          [theme.breakpoints.down("sm")]: {
            justifyContent: "center",
            alignItems: "center",
          },
        })}
      >
        {serviceData.map((item) => {
          return (
            <Grid
              key={item.id}
              item
              mt={5}
              sx={(theme) => ({
                [theme.breakpoints.down("sm")]: {
                  marginTop: 0,
                },
              })}
            >
              <img src={item.img} alt="#" />
            </Grid>
          );
        })}
      </Grid>
      <Box
        sx={(theme) => ({
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "50px",
        })}
      >
        <SecondaryButton endIcon={<ArrowCircleRight />}>
          View all service list
        </SecondaryButton>
      </Box>
    </Box>
  );
};

export default Services;

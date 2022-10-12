import { Box, Grid } from "@mui/material";
import React from "react";
import dentalImg from "../../assets/images/dental.png";
import { PrimaryButton } from "../button/button";
import { MediumText } from "../text/text";
import { HeaderText, SectionText } from "../text/mainText";
import { GeneralWrapper } from "../common/style";

const Dental = () => {
  return (
    <GeneralWrapper>
      <Grid
        container
        mt={4}
        columnSpacing={{ xs: 1, sm: 2, md: 5 }}
        sx={(theme) => ({
          // justifyContent: "center",
          [theme.breakpoints.down("sm")]: {},
        })}
      >
        <Grid item>
          <img src={dentalImg} style={{ maxWidth: "100%" }} alt="" />
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
          <SectionText text="dental 24h emergency" />
          <Box mt={2}>
            <HeaderText text="Gentle friendly treatment from our practice" />
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
                marginLeft: "0px",
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
    </GeneralWrapper>
  );
};

export default Dental;

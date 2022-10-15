import { Box } from "@mui/material";
import React from "react";
import { PageTitle } from "../common/text/mainText";
import { aboutImg } from "../../assets/svg";
import { MediumText } from "../common/text/text";
import { PrimaryButton } from "../common/button/button";
import { GeneralWrapper } from "../common/style";

const AboutUs = () => {
  return (
    <GeneralWrapper>
      <Box
        mt={4}
        sx={(theme) => ({
          display: "flex",
          justifyContent: "space-between",
          marginTop: "4rem",
          alignItems: "center",
          [theme.breakpoints.down("lg")]: {
            flexDirection: "column",
          },
        })}
      >
        <Box
          sx={(theme) => ({
            width: "500px",
            marginRight: "30px",
            [theme.breakpoints.down("lg")]: {
              width: "100%",
              marginRight: "0px",
            },
          })}
        >
          <PageTitle text="about Us" />
          <MediumText sx={{ margin: "40px 0" }}>
            We want you to feel amazing about your oral wellness. Not just twice
            a year, but every time you take a bite, tell a joke, laugh, or share
            a kiss.
          </MediumText>
          <PrimaryButton>Contact Us</PrimaryButton>
        </Box>

        <Box
          sx={(theme) => ({
            [theme.breakpoints.down("lg")]: {
              marginTop: "50px",
            },
          })}
        >
          <img
            src={aboutImg}
            style={{
              maxWidth: "100%",
            }}
            alt="#"
          />
        </Box>
      </Box>
    </GeneralWrapper>
  );
};

export default AboutUs;

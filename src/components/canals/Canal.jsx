import { Box } from "@mui/material";
import React from "react";
import { PrimaryButton } from "../button/button";
import { HeaderText } from "../text/Text";
import { MediumText } from "../text/text";
import canalImg from "../../assets/images/canals.png";

const Canal = () => {
  return (
    <Box
      mt={4}
      sx={(theme) => ({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 90px",
        height: "600px",
        background: " #DBEFFA",
        borderRadius: "48px",
        [theme.breakpoints.down("lg")]: {
          flexDirection: "column",
          alignItems: "start",
          padding: "40px 40px 0",
        },
        [theme.breakpoints.down("sm")]: {
          flexDirection: "column",
          alignItems: "center",
          padding: "40px 40px 0",
        },
      })}
    >
      <Box
        sx={(theme) => ({
          width: "500px",
          marginRight: "50px",
          [theme.breakpoints.down("lg")]: {
            width: "100%",
          },
        })}
      >
        <HeaderText text="Root canals " />
        <MediumText sx={{ margin: "40px 0" }}>
          Root canals have gotten a bad reputation, but us dentists don’t know
          why! These are the types of treatments that actually make you feel
          better!
        </MediumText>
        <PrimaryButton>Book an appointment</PrimaryButton>
      </Box>

      <Box
        sx={(theme) => ({
          marginTop: "195px",
          [theme.breakpoints.down("lg")]: {
            marginTop: "50px",
          },
        })}
      >
        <img
          src={canalImg}
          style={{
            maxWidth: "100%",
          }}
          alt="#"
        />
      </Box>
    </Box>
  );
};

export default Canal;

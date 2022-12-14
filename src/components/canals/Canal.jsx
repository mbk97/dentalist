import { Box } from "@mui/material";
import React from "react";
import { PrimaryButton } from "../common/button/button";
import { HeaderText } from "../common/text/mainText";
import { MediumText } from "../common/text/text";
import canalImg from "../../assets/images/canals.png";

const Canal = () => {
  return (
    <Box
      mt={4}
      sx={(theme) => ({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 90px",
        height: "600px",
        background: " #DBEFFA",
        borderRadius: "48px",
        marginBottom: "15rem",
        [theme.breakpoints.down("lg")]: {
          flexDirection: "column",
          alignItems: "start",
          padding: "40px 40px 0",
          marginBottom: "5rem",
          height: "auto",

          /* margin: 50px 0; */
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
            marginRight: "0px",
          },
        })}
      >
        <HeaderText text="Root canals " />
        <MediumText
          sx={(theme) => ({
            margin: "50px 0",
            [theme.breakpoints.down("lg")]: {
              width: "100%",
            },
            [theme.breakpoints.down("sm")]: {
              width: "100%",
            },
          })}
        >
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
            marginLeft: "70px",
          },
          [theme.breakpoints.down("md")]: {
            marginLeft: "0px",
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

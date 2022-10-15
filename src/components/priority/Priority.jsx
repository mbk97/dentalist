import { Box } from "@mui/material";
import React from "react";
import { PrimaryButton } from "../common/button/button";
import { MediumText } from "../common/text/text";
import { HeaderText, SectionText } from "../common/text/mainText";
import priorityImg from "../../assets/images/priority.png";
import { GeneralWrapper } from "../common/style";

const Priority = () => {
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
            flexDirection: "column-reverse",
            flexWrap: "wrap-reverse",
          },
        })}
      >
        <Box
          sx={(theme) => ({
            width: "600px",
            [theme.breakpoints.down("lg")]: {
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
          })}
        >
          <img src={priorityImg} style={{ maxWidth: "100%" }} alt="" />
        </Box>
        <Box
          mt={3}
          item
          sx={(theme) => ({
            width: "600px",
            marginLeft: "40px",
            [theme.breakpoints.down("lg")]: {
              width: "100%",
              marginBottom: "70px",
            },
          })}
        >
          <SectionText text="Our priority" />
          <Box mt={2}>
            <HeaderText text="Our clients are our priority" />
          </Box>
          <MediumText
            mt={2}
            sx={(theme) => ({
              width: "510px",
              marginBottom: "30px",
              marginTop: "20px",
              [theme.breakpoints.down("lg")]: {
                width: "100%",
              },
            })}
          >
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </MediumText>
          <PrimaryButton>Book an appointment</PrimaryButton>
        </Box>
      </Box>
    </GeneralWrapper>
  );
};

export default Priority;

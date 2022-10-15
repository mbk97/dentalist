import React from "react";
import { Box } from "@mui/material";
import { HeaderText, SectionText } from "../common/text/mainText";
import { VideoWrapper, SafetyTextContainer, SafetyText } from "./style";
import safety from "../../assets/images/safety.png";
import { MediumText } from "../common/text/text";

const Safety = () => {
  return (
    <Box
      mt={4}
      sx={(theme) => ({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "250px",
        height: "700px",
        background: " #DBDEFA",
        borderRadius: "32px",
        position: "relative",
        textAlign: "center",
        flexDirection: "column",
        marginBottom: "15rem",
        paddingBottom: "50px",

        [theme.breakpoints.down("lg")]: {
          //   alignItems: "start",
          paddingTop: "50px",
          marginBottom: "5rem",
          height: "auto",

          //   padding: "40px 40px 0",
        },
        [theme.breakpoints.down("sm")]: {
          //   flexDirection: "column",
          //   alignItems: "center",
          //   padding: "40px 40px 0",
        },
      })}
    >
      <Box
        sx={{
          //   paddingTop: "80px",
          textAlign: "center",
        }}
      >
        <SectionText text="clinic" />
        <HeaderText text="We put the safety first" />
        <SafetyTextContainer>
          <SafetyText>
            <MediumText>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </MediumText>
          </SafetyText>
        </SafetyTextContainer>
      </Box>

      <VideoWrapper>
        <img
          src={safety}
          alt=""
          style={{
            maxWidth: "100%",
          }}
        />
      </VideoWrapper>
    </Box>
  );
};

export default Safety;

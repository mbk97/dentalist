import { Box } from "@mui/material";
import React from "react";
import { MediumText } from "../text/text";
import { HeaderText, SectionText } from "../text/mainText";
import { data } from "./data";
import {
  GridContainer,
  GridItem,
  SymptomHeader,
  SymptomImage,
  SymptomText,
} from "./style";

const Syptoms = () => {
  return (
    <Box
      mt={4}
      sx={(theme) => ({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "120px ",
        paddingBottom: "70px ",
        height: "auto",
        background: " #FADBE2",
        borderRadius: "48px",
        [theme.breakpoints.down("lg")]: {
          flexDirection: "column",
          alignItems: "start",
          padding: "40px 40px 0",
          height: "auto",
        },
        [theme.breakpoints.down("sm")]: {
          flexDirection: "column",
          alignItems: "center",
          padding: "10px 40px 0",
          height: "auto",
        },
      })}
    >
      <Box
        style={{
          textAlign: "center",
        }}
      >
        <SectionText text="symptoms" />
        <HeaderText text="Sign and symptoms you need root canal" />
        <Box
          mt={4}
          sx={(theme) => ({
            width: "800px",
            [theme.breakpoints.down("lg")]: {
              width: "100%",
            },
          })}
        >
          <MediumText>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </MediumText>
        </Box>
        <GridContainer container spacing={3}>
          {data.map((item) => {
            return (
              <GridItem key={item.id}>
                <SymptomImage>
                  <img src={item.img} alt="symptom" />
                </SymptomImage>
                <div>
                  <SymptomHeader>{item.header}</SymptomHeader>
                  <SymptomText>{item.text}</SymptomText>
                </div>
              </GridItem>
            );
          })}
        </GridContainer>
      </Box>
    </Box>
  );
};

export default Syptoms;

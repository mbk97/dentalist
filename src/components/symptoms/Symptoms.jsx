import { Box } from "@mui/material";
import React from "react";
import { MediumText } from "../common/text/text";
import { HeaderText, SectionText } from "../common/text/mainText";
import { data } from "./data";
import {
  GridContainer,
  GridItem,
  SymptomHeader,
  SymptomImage,
  SymptomText,
} from "./style";
import { GeneralWrapper } from "../common/style";

const Syptoms = () => {
  return (
    <GeneralWrapper>
      <Box
        mt={4}
        sx={(theme) => ({
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "120px 70px 0",
          height: "auto",
          background: " #FADBE2",
          borderRadius: "48px",
          [theme.breakpoints.down("lg")]: {
            flexDirection: "column",
            padding: "40px 50px 0",
            height: "auto",
          },
          [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            alignItems: "center",
            padding: "40px",
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
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </MediumText>
          </Box>
          <GridContainer
            container
            spacing={5}
            sx={(theme) => ({
              padding: "0 90px",
              [theme.breakpoints.down("lg")]: {},
            })}
          >
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
    </GeneralWrapper>
  );
};

export default Syptoms;

import { Box } from "@mui/material";
import React from "react";
import { data } from "./data";
import {
  GridContainer,
  GridItem,
  SymptomHeader,
  SymptomImage,
  SymptomText,
} from "../symptoms/style";
import { MediumText } from "../common/text/text";
import { HeaderText, SectionText } from "../common/text/mainText";
import { FeaturesTextWrapper } from "./style";
import { GeneralWrapper } from "../common/style";

const Features = () => {
  return (
    <GeneralWrapper>
      <Box
        mt={4}
        sx={(theme) => ({
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",

          padding: "150px 90px",
          height: "auto",
          background: "#DBDEFA",
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
        <FeaturesTextWrapper>
          <Box mb={3}>
            <SectionText text="features" />
          </Box>
          <Box mb={3}>
            <HeaderText text="Specialized  care through experience" />
          </Box>
          <MediumText>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </MediumText>
        </FeaturesTextWrapper>

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
    </GeneralWrapper>
  );
};

export default Features;

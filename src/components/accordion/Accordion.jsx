import { Box } from "@mui/material";
import React, { useState } from "react";
import { GeneralWrapper } from "../common/style";
import { HeaderText, SectionText } from "../common/text/mainText";
import { data } from "./data";
import {
  AccordionContainer,
  AccordionWrapper,
  AccordionHeader,
  AccordionText,
} from "./style";
import chevronUp from "../../assets/images/chevron-up.png";
import chevronDown from "../../assets/images/chevron-down.png";

const Accordion = () => {
  const [clicked, setClicked] = useState(0);

  //   const handleClick = () => {
  //     setClicked(!clicked);
  //   };

  const handleClick = (index) => {
    if (clicked === index) {
      return setClicked(0);
    }
    setClicked(index);
  };

  return (
    <GeneralWrapper>
      <Box
        mt={4}
        sx={(theme) => ({
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginBottom: "2rem",
          [theme.breakpoints.down("lg")]: {},
        })}
      >
        <SectionText text="FAQ" />
        <HeaderText text="Frequently asked question" />
      </Box>
      <AccordionContainer>
        {data.map((item) => {
          return (
            <AccordionWrapper
              className={clicked === item.id ? "activeAccordion" : ""}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <AccordionHeader
                  onClick={() => handleClick(item.id)}
                  className={clicked ? "activeHeader" : ""}
                >
                  {item.title}
                </AccordionHeader>

                {clicked === item.id ? (
                  <img src={chevronUp} alt="#" />
                ) : (
                  <img src={chevronDown} alt="#" />
                )}
              </div>
              <AccordionText className={clicked === item.id ? "showText" : ""}>
                {item.text}
              </AccordionText>
            </AccordionWrapper>
          );
        })}
      </AccordionContainer>
    </GeneralWrapper>
  );
};

export default Accordion;

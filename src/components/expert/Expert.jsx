import { Box } from "@mui/material";
import React from "react";
import {
  ExpertWrapper,
  ListTextWrapper,
  ListText,
  HeaderWrapper,
  ExpertContent,
  ExpertImage,
  ListImg,
} from "./style";
import expertImg from "../../assets/images/expert-img.png";
import { HeaderText, SectionText } from "../text/mainText";
import { MediumText } from "../text/text";
import listImg from "../../assets/images/listImg.png";
import { listData } from "./data";
import { GeneralWrapper } from "../common/style";

const Expert = () => {
  return (
    <GeneralWrapper>
      <Box mt={4}>
        <ExpertWrapper>
          <ExpertContent>
            <SectionText text="EXPERTS IN DENTAL" />
            <HeaderWrapper>
              <HeaderText text="Top-notch dentistry, from Seattle's top dentists." />
            </HeaderWrapper>
            <ListTextWrapper>
              <MediumText>
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts
              </MediumText>
            </ListTextWrapper>
            {listData.map((item) => {
              return (
                <ListText key={item.id}>
                  <ListImg src={listImg} alt="list" />
                  {item.text}
                </ListText>
              );
            })}
          </ExpertContent>
          <ExpertContent>
            <ExpertImage src={expertImg} />
          </ExpertContent>
        </ExpertWrapper>
      </Box>
    </GeneralWrapper>
  );
};

export default Expert;

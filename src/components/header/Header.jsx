import React from "react";
import {
  ButtonContainer,
  EmergencyNum,
  EmergencyText,
  HeaderGridItem,
  HeaderGridWrapper,
  HeaderWrapper,
  HeroHeader,
  HeroImg,
  TextWrapper,
} from "./style";
import hero from "../../assets/images/hero.png";
import { MediumText } from "../text/text";
import { PrimaryButton } from "../button/button";
import { GridItem, SymptomImage } from "../symptoms/style";
import phone from "../../assets/images/phone.png";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderGridWrapper>
        <HeaderGridItem>
          <HeroHeader>Entrust your smile to professional</HeroHeader>
          <TextWrapper>
            <MediumText>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </MediumText>
          </TextWrapper>
          <ButtonContainer>
            <div
              style={{
                marginRight: "20px",
              }}
            >
              <PrimaryButton>Book an appointment</PrimaryButton>
            </div>
            <GridItem>
              <SymptomImage>
                <img src={phone} alt="symptom" />
              </SymptomImage>
              <div>
                <EmergencyText>24H Emergency</EmergencyText>
                <EmergencyNum>03 482 394 123</EmergencyNum>
              </div>
            </GridItem>
          </ButtonContainer>
        </HeaderGridItem>
        <HeaderGridItem>
          <HeroImg src={hero} alt="hero" />
        </HeaderGridItem>
      </HeaderGridWrapper>
    </HeaderWrapper>
  );
};

export default Header;

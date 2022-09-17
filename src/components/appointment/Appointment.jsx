import { Box } from "@mui/material";
import React from "react";
import { ExpertContent, ExpertWrapper } from "../expert/style";
import mapImg from "../../assets/images/map.png";
import {
  InputFields,
  InputWrapper,
  MapImg,
  MessageWrapper,
  ButtonContainerApp,
  TextWrapper,
} from "./style";
import { inputData, selectData } from "./data";
import {
  CustomInput,
  CustomSelect,
  MessageInput,
} from "../../components/input/CustomInput";
import { EmergencyNum, EmergencyText } from "../header/style";
import { PrimaryButton } from "../button/button";
import { GridItem, SymptomImage } from "../symptoms/style";
import phone from "../../assets/images/phone.png";
import { HeaderText, SectionText } from "../text/Text";
import { MediumText } from "../text/text";

const Appointment = () => {
  return (
    <Box mt={4}>
      <ExpertWrapper>
        <ExpertContent>
          <MapImg src={mapImg} />
        </ExpertContent>
        <ExpertContent>
          <Box mt={4}>
            <SectionText text="BOOK APPOINTMENT" />
            <HeaderText text="Care at Dentalist is pleasure" />
            <TextWrapper>
              <MediumText>
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual{" "}
              </MediumText>
            </TextWrapper>
          </Box>
          <InputFields>
            <InputWrapper>
              {inputData.map((item) => (
                <CustomInput
                  placeholder={item.placeholder}
                  key={item.id}
                  label={item.label}
                />
              ))}
            </InputWrapper>
            <InputWrapper>
              {selectData.map((item) => (
                <CustomSelect
                  label={item.value}
                  value={item.value}
                  key={item.id}
                />
              ))}
            </InputWrapper>
            <MessageWrapper>
              <MessageInput />
            </MessageWrapper>
          </InputFields>

          <ButtonContainerApp>
            <GridItem
              style={{
                marginRight: "20px",
              }}
            >
              <SymptomImage>
                <img src={phone} alt="symptom" />
              </SymptomImage>
              <div>
                <EmergencyText>24H Emergency</EmergencyText>
                <EmergencyNum>03 482 394 123</EmergencyNum>
              </div>
            </GridItem>
            <div>
              <PrimaryButton>Book an appointment</PrimaryButton>
            </div>
          </ButtonContainerApp>
        </ExpertContent>
      </ExpertWrapper>
    </Box>
  );
};

export default Appointment;

import React from "react";
import { inputData, selectData } from "../appointment/data";
import {
  ButtonContainerApp,
  InputFields,
  InputWrapper,
  MessageWrapper,
} from "../appointment/style";
import { PrimaryButton } from "../common/button/button";
import { EmergencyNum, EmergencyText } from "../header/style";
import { CustomInput, CustomSelect, MessageInput } from "../input/CustomInput";
import { GridItem, SymptomImage } from "../symptoms/style";
import phone from "../../assets/images/phone.png";
import { ContactInputs, ContactText, ContactWrapper } from "./style";
import { Box } from "@mui/material";
import { HeaderText } from "../common/text/mainText";
import { MediumText } from "../common/text/text";

const Contact = () => {
  return (
    <ContactWrapper>
      <Box
        sx={{
          textAlign: "center",
          marginTop: "3rem",
          //   background: "#DBEFFA",
        }}
      >
        <HeaderText text="contact us" />
        <ContactText>
          <MediumText>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </MediumText>
        </ContactText>
      </Box>
      <ContactInputs>
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
      </ContactInputs>
    </ContactWrapper>
  );
};

export default Contact;

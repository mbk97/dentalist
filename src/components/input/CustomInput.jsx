import React from "react";
import styled from "styled-components";

// input field

const CustomInputWrapper = styled.div`
  margin-right: 20px;
  @media (max-width: 900px) {
    margin: 20px 0;
  }
`;
const Label = styled.label`
  display: block;
  padding-bottom: 10px;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(24, 25, 69, 0.6);
`;

const Input = styled.input`
  width: 290px;
  height: 60px;
  background: #ffffff;
  border: 1px solid rgba(24, 25, 69, 0.1);
  border-radius: 16px;
  outline: 0;
  padding: 0 20px;

  &::placeholder {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.02em;
    color: rgba(24, 25, 69, 0.6);
    opacity: 0.8;
  }
  @media (max-width: 900px) {
    width: 90vw;
  }

  @media (max-width: 470px) {
    width: 90vw;
  }
`;
// input field

// select box

const SelectWrapper = styled.div`
  position: relative;
  width: 290px;
  margin-right: 20px;
  @media (max-width: 900px) {
    width: 100%;
    margin: 20px 0;
  }
`;

const Select = styled.select`
  width: 290px;
  height: 60px;
  background: #ffffff;
  border: 1px solid rgba(24, 25, 69, 0.1);
  border-radius: 16px;
  outline: 0;
  padding: 0 20px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  @media (max-width: 900px) {
    width: 90vw;
  }
  @media (max-width: 470px) {
    width: 90vw;
  }
`;

// textarea
const TextArea = styled.textarea`
  width: 605px;
  height: 200px;
  background: #ffffff;
  border: 1px solid rgba(24, 25, 69, 0.1);
  border-radius: 16px;
  outline: none;
  padding: 18px;
  &::placeholder {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.02em;
    color: rgba(24, 25, 69, 0.6);
    opacity: 0.8;
  }

  @media (max-width: 900px) {
    width: 90vw;
  }

  @media (max-width: 470px) {
    width: 90vw;
  }
`;

// textarea

const CustomInput = ({ type, placeholder, label }) => {
  return (
    <CustomInputWrapper>
      <Label>{label}</Label>
      <Input type={type} placeholder={placeholder} />
    </CustomInputWrapper>
  );
};

const CustomSelect = ({ value, label }) => {
  return (
    <SelectWrapper>
      <Label>{label}</Label>
      <Select>
        <option value={value} className="option">
          {value}
        </option>
      </Select>
    </SelectWrapper>
  );
};

const MessageInput = () => {
  return (
    <>
      <Label>Messages</Label>
      <TextArea placeholder="Enter your messages..."></TextArea>
    </>
  );
};

export { CustomInput, CustomSelect, MessageInput };

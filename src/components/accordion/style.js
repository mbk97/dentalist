import styled from "styled-components";

export const AccordionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const AccordionWrapper = styled.div`
  width: 800px;
  border-top: 1px solid #96a0b5;
  margin-bottom: 2rem;
  padding: 30px;
  height: auto;

  &.activeAccordion {
    background: linear-gradient(
      180deg,
      rgba(219, 239, 250, 0.5) 0%,
      rgba(255, 249, 249, 0.2) 100%
    );
    border-top: 2px solid #583fbc;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

export const AccordionHeader = styled.h5`
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  color: #121f3e;
  cursor: pointer;

  &.activeHeader {
    margin-bottom: 20px;
  }

  @media (max-width: 470px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const AccordionText = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 33px;
  width: 650px;
  color: #96a0b5;
  display: none;
  /* background: linear-gradient(
    180deg,
    rgba(219, 239, 250, 0.5) 0%,
    rgba(255, 249, 249, 0.2) 100%
  ); */

  &.showText {
    display: block;
  }

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 470px) {
    font-size: 12px;
  }
`;

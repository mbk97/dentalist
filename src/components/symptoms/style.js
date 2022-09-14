import styled from "styled-components";
import Syptoms from "./Syptoms";

const GridItem = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0;
  @media (max-width: 900px) {
    margin: 10px 0;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 80px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
    margin-top: 20px;
  }
`;

const SymptomImage = styled.p`
  margin-right: 20px;
`;

const SymptomText = styled.p`
  width: 280px;
  text-align: left;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: -0.02em;
  color: #181945;

  @media (max-width: 900px) {
    width: 100%;
    font-size: 12px;
  }
`;

const SymptomHeader = styled.h2`
  text-align: left;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.02em;
  color: #181945;

  @media (max-width: 900px) {
    font-size: 16px;
  }
`;

export { GridItem, GridContainer, SymptomText, SymptomHeader, SymptomImage };

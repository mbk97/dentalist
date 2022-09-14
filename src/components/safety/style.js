import styled from "styled-components";

export const VideoWrapper = styled.div`
  width: 840px;
  @media (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
    width: 80%;
    padding-bottom: 20px;
  }
`;

export const SafetyTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const SafetyText = styled.div`
  width: 510px;
  margin: 20px 0;

  @media (max-width: 900px) {
    width: 90%;
  }
`;

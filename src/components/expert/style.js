import styled from "styled-components";

export const ExpertWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  /* flex-wrap: wrap; */
  align-items: center;
  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }
`;

export const ListTextWrapper = styled.div`
  width: 480px;
  margin: 20px 0;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const ListText = styled.p`
  margin: 10px 0;
  display: flex;
  align-items: center;
`;

export const ExpertContent = styled.div``;

export const HeaderWrapper = styled.div`
  width: 590px;
  margin: 20px 0;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const ExpertImage = styled.img`
  max-width: 100%;
  @media (max-width: 1200px) {
    margin-top: 3rem;
  }
`;

export const ListImg = styled.img`
  margin-right: 10px;
`;

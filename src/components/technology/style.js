import styled from "styled-components";

export const TechnologyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 5rem;
  /* padding: 0 90px; */
`;

export const TechHeaderWrapper = styled.div`
  width: 950px;
  margin-top: 30px;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const TextWrapper = styled.div`
  width: 710px;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const TechnologyTextWrapper = styled.div``;

export const TechImg = styled.img`
  max-width: 100%;
`;

export const CtoWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 150px;
  justify-content: space-between;
  margin: 20px 0;
`;

export const TechText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #181945;
  opacity: 0.5;
  width: 950px;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const CtoText = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #181945;
`;

export const CtoDate = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.02em;
  color: #181945;
  opacity: 0.5;
`;

export const BigTechImg = styled.img`
  width: 1000px;
  margin-top: 40px;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const ImgFlex = styled.div`
  display: flex;
  /* justify-content: space-between; */
  flex-wrap: wrap;
  margin: 20px;
  gap: 20px;
`;

export const TechHeaderText = styled.h2`
  font-weight: 700;
  font-size: 36px;
  line-height: 45px;
  letter-spacing: -0.04em;
  color: #181945;
`;

export const TextHeaderWrapperTwo = styled.div`
  width: 960px;
  margin-top: 40px;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;
export const LinearBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LinearBox = styled.div`
  width: 880px;
  height: 200px;
  border-left: 4px solid #583fbc;
  background: linear-gradient(
    90deg,
    rgba(219, 239, 250, 0.5) 0%,
    rgba(219, 239, 250, 0) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0;

  @media (max-width: 1200px) {
    width: 100%;
    padding: 0 20px;
  }
`;

export const LinearText = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #181945;
  width: 700px;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const RelatedTextWrapper = styled.div`
  width: 600px;
  text-align: left;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const RelatedText = styled.p`
  margin: 30px 0;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: -0.04em;
  color: #181945;
  span {
    color: #7b55ec;
  }
`;

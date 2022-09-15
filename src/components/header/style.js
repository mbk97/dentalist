import styled from "styled-components";

export const HeaderWrapper = styled.div`
  background: url("header-bg.png");
  height: 100vh;
  display: flex;
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 30px;
  border-radius: 38px;

  @media (max-width: 1200px) {
    height: auto;
    padding-left: 30px;
  }
`;

export const HeroHeader = styled.h2`
  font-weight: 700;
  font-size: 64px;
  line-height: 81px;
  letter-spacing: -0.04em;
  color: #181945;
  width: 516px;
  margin-bottom: 20px;

  @media (max-width: 900px) {
    width: 100%;
    font-size: 32px;
    line-height: 42px;
  }
`;

export const HeaderGridWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100vw;
`;

export const HeaderGridItem = styled.div``;

export const HeroImg = styled.img`
  max-width: 100%;
  height: 500px;
`;

export const TextWrapper = styled.div`
  width: 520px;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const EmergencyText = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #583fbc;
`;

export const EmergencyNum = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.02em;
  color: #181945;
`;

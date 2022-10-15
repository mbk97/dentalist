import styled from "styled-components";

export const NewsCardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 25px;
  align-items: flex-start;
`;

export const NewsCard = styled.div`
  width: 400px;
  height: 480px;
  left: 960px;
  top: 924px;
  background: #ffffff;
  border: 1px solid rgba(24, 25, 69, 0.1);
  border-radius: 32px;
  padding: 10px;

  @media (max-width: 470px) {
    width: 280px;
    height: 550px;
  }
`;

export const NewsCardHeader = styled.div`
  position: relative;
`;

export const NewsImg = styled.img`
  width: 100%;
  border-radius: 15px;
  height: 200px;
  object-fit: cover;
  object-position: center;
`;

export const NewsCardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
  position: relative;
`;

export const LinkBtnWrapper = styled.div`
  /* position: absolute;
  bottom: "0px"; */
`;

export const NewsDate = styled.div``;

export const NewsText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: -0.02em;
  color: #181945;
  opacity: 0.5;
`;

export const NewsTitle = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.02em;
  color: #181945;
`;

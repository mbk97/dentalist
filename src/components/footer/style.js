import styled from "styled-components";

export const FooterWrapper = styled.div`
  padding: 70px 50px 10px;
  height: 600px;
  /* give this an height of 100vh */
  background: #041434;
  @media (max-width: 900px) {
    height: auto;
    padding: 40px 40px 10px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const FooterItem = styled.div`
  @media (max-width: 900px) {
    margin: 2rem 0;
  }
`;

export const FollowText = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
`;

export const IconContainer = styled.div`
  display: flex;
  width: 150px;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const LinksList = styled.ul`
  margin-top: 20px;

  @media (max-width: 470px) {
    /* float: left; */
    width: 300px;
  }
`;

export const LinksListItem = styled.li`
  list-style: none;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin: 25px 0;
`;

export const FooterContactText = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 28px;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.6);

  /* @media (max-width: 900px) {
    width: 100%;
    font-size: 12px;
  } */
`;

export const FooterContactHeader = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.02em;
  color: #ffffff;

  /* @media (max-width: 900px) {
    font-size: 16px;
  } */
`;

export const FooterText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.02em;
  color: #ffffff;
  opacity: 0.6;
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-right: 40px;
  margin-top: 70px;
`;

export const BottomContent = styled.div`
  display: flex;
  margin: 0 50px 0;
  @media (max-width: 900px) {
    margin: 0;
  }
`;

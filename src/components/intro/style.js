import styled from "styled-components";

const IntroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 0 3rem 0;
`;

const IntroText = styled.p`
  font-weight: 500;
  font-size: 36px;
  line-height: 72px;
  text-align: center;
  letter-spacing: -0.03em;
  color: #181945;
  width: 780px;

  @media (max-width: 900px) {
    width: 100%;
    font-size: 24px;
    line-height: 32px;
  }
`;

const LineItem = styled.div`
  width: 120px;
  height: 4px;
  background: #583fbc;
  border-radius: 2px;
`;

const Line = () => {
  return <LineItem></LineItem>;
};

export { IntroText, Line, IntroContent };

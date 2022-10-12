import styled from "styled-components";

export const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  background: #dbeffa;
  width: 100%;
  height: 600px;
  margin-top: 4rem;
  border-radius: 38px;
  margin-bottom: 30rem;
  @media (max-width: 900px) {
    margin-bottom: 45rem;
  }
`;

export const ContactText = styled.div`
  width: 550px;
  margin: 40px 0;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const ContactInputs = styled.div`
  margin-top: 2rem;
  width: 840px;
  height: 704px;
  filter: drop-shadow(0px 100px 100px rgba(24, 25, 69, 0.05));
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  flex-direction: column;
  border-radius: 38px;
  padding: 20px 0;
  @media (max-width: 900px) {
    width: 100%;
    height: auto;
    padding: 0 70px 30px;
  }
`;

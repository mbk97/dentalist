import styled from "styled-components";

export const MapImg = styled.img`
  max-width: 100%;
`;

export const InputFields = styled.div``;

export const InputWrapper = styled.div`
  display: flex;
  margin-top: 2rem;
  @media (max-width: 900px) {
    flex-direction: column;
    width: 70vw;
    margin-top: 0rem;

    /* margin: 50px 0; */
  }
`;

export const MessageWrapper = styled.div`
  margin-top: 1rem;
`;

export const ButtonContainerApp = styled.div`
  display: flex;
  width: 600px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const TextWrapper = styled.div`
  margin: 20px 0;
  width: 620px;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

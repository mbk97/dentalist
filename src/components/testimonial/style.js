import styled from "styled-components";

export const TestimonialWrapper = styled.div`
  width: 100%;
  height: auto;
  background: #d9ebfa;
  border-radius: 48px;
  margin: 0 0 5rem 0;
  display: flex;
  justify-content: center;
  padding: 70px 0;

  /* align-items: center; */
  flex-direction: column;
  @media (max-width: 900px) {
    height: auto;
  }
`;

export const TestimonialTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 40px;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const TestimonialTextContent = styled.div``;

export const TestimonialImages = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 5rem;
  @media (max-width: 600px) {
  }
`;

export const TestimonailImage = styled.div`
  margin: 0 10px;
  img {
    max-width: 90%;
    margin-left: 10px;
  }
  @media (max-width: 600px) {
    img {
      max-width: 70%;
      display: block;
      margin: 20px auto;
    }
  }
`;

import styled from "styled-components";

export const TestimonialWrapper = styled.div`
  width: 100%;
  height: 800px;
  background: #d9ebfa;
  border-radius: 48px;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
  @media (max-width: 900px) {
    height: auto;
    padding: 30px 0;
  }
`;

export const TestimonialTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  @media (max-width: 600px) {
    img {
      max-width: 80%;
      display: block;
      margin: 20px auto;
    }
  }
`;

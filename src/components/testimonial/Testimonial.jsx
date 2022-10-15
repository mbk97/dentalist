import React from "react";
import {
  TestimonailImage,
  TestimonialImages,
  TestimonialTextContent,
  TestimonialTextWrapper,
  TestimonialWrapper,
} from "./style";
import { HeaderText, SectionText } from "../common/text/mainText";
import { MediumText } from "../common/text/text";
import { Box } from "@mui/material";
import { data } from "./data";

const Testimonial = () => {
  return (
    <TestimonialWrapper>
      <TestimonialTextWrapper>
        <TestimonialTextContent>
          <SectionText text="testimonial" />
          <Box
            mt={4}
            sx={(theme) => ({
              width: "488px",
              [theme.breakpoints.down("lg")]: {
                width: "100%",
              },
            })}
          >
            <HeaderText text="What people have said about us" />
          </Box>
        </TestimonialTextContent>
        <TestimonialTextContent>
          <Box
            mt={4}
            sx={(theme) => ({
              width: "450px",
              [theme.breakpoints.down("lg")]: {
                width: "100%",
              },
            })}
          >
            <MediumText>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts{" "}
            </MediumText>
          </Box>
        </TestimonialTextContent>
      </TestimonialTextWrapper>
      <TestimonialImages>
        {data.map((item) => {
          return (
            <TestimonailImage key={item.id}>
              <img src={item.img} alt="test" />
            </TestimonailImage>
          );
        })}
      </TestimonialImages>
    </TestimonialWrapper>
  );
};

export default Testimonial;

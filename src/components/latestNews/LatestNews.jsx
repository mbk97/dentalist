import { Box } from "@mui/material";
import React from "react";
import blogImg from "../../assets/images/blog.png";
import { GeneralWrapper } from "../common/style";
import { HeaderText, SectionText } from "../common/text/mainText";
import { MediumText } from "../common/text/text";
import {
  NewsCard,
  NewsCardContainer,
  NewsCardHeader,
  NewsCardBody,
  NewsImg,
  NewsText,
  NewsTitle,
} from "./style";

const LatestNews = () => {
  const newsArray = [1, 2, 3, 4, 5, 6];

  return (
    <GeneralWrapper>
      <Box
        sx={(theme) => ({
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "3rem",
          [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            // padding: "0 20px",
          },
        })}
      >
        <HeaderText text="Stay updated with our latest news" />
      </Box>
      <NewsCardContainer>
        {newsArray.map((item, index) => {
          return (
            <NewsCard key={index}>
              <NewsCardHeader>
                <NewsImg src={blogImg} />
              </NewsCardHeader>
              <NewsCardBody>
                <SectionText text="dental" />
                <NewsTitle>
                  Regular Dental care make Your Smile Brighter
                </NewsTitle>
                <NewsText>
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing
                </NewsText>
              </NewsCardBody>
            </NewsCard>
          );
        })}
      </NewsCardContainer>
    </GeneralWrapper>
  );
};

export default LatestNews;

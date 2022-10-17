import { Box } from "@mui/material";
import React from "react";
import blogImg from "../../assets/images/blog.png";
import { GeneralWrapper } from "../common/style";
import { HeaderText, SectionText } from "../common/text/mainText";
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
          },
        })}
      >
        <HeaderText text="Stay updated with our latest news" />
      </Box>
      <NewsCardContainer>
        {new Array(6).fill(0).map((_, index) => (
          <NewsCard key={index}>
            <NewsCardHeader>
              <NewsImg src={blogImg} />
            </NewsCardHeader>
            <NewsCardBody>
              <div>
                <SectionText text="Dental" />
                <NewsTitle>
                  Regular Dental care make Your Smile Brighter
                </NewsTitle>
                <NewsText>
                  {" "}
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s
                </NewsText>
              </div>
            </NewsCardBody>
          </NewsCard>
        ))}
      </NewsCardContainer>
    </GeneralWrapper>
  );
};

export default LatestNews;

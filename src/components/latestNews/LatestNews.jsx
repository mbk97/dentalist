import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
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
import { options } from "../../api/newsApi";
import axios from "axios";
import Skeleton from "@mui/material/Skeleton";
const LatestNews = () => {
  const loadingArr = [1, 2, 3, 4];
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(options);
      console.log(res.data.articles);
      setNewsData(res.data.articles);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
        {error && (
          <h6
            style={{
              color: "red",
              textAlign: "center",
            }}
          >
            {error}, Please try again!!
          </h6>
        )}
        {loading &&
          loadingArr.map((item) => {
            return (
              <Skeleton
                variant="rectangular"
                width={300}
                sx={{ borderRadius: "20px" }}
                height={400}
              />
            );
          })}

        {!loading &&
          newsData?.map((item, index) => {
            return (
              <NewsCard key={index}>
                <NewsCardHeader>
                  <NewsImg
                    src={item.urlToImage === null ? blogImg : item.urlToImage}
                  />
                </NewsCardHeader>
                <NewsCardBody>
                  <div>
                    <SectionText text={item.author} />
                    <NewsTitle>{item.title}</NewsTitle>
                    <NewsText>
                      {item.description.slice(0, 200)}....
                      <a href={item.url} target="_blank" rel="noreferrer">
                        Read More
                      </a>
                    </NewsText>
                  </div>
                </NewsCardBody>
              </NewsCard>
            );
          })}
      </NewsCardContainer>
    </GeneralWrapper>
  );
};

export default LatestNews;

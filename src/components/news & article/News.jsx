import { Box } from "@mui/material";
import React from "react";
import { MediumText } from "../common/text/text";
import { HeaderText } from "../common/text/mainText";
import newsImg from "../../assets/images/news.png";
import { InputWrapper, NewsInput } from "./style";
import { Search } from "@mui/icons-material";
import { InputButton } from "./style";
import { GeneralWrapper } from "../common/style";

const News = () => {
  return (
    <GeneralWrapper>
      <Box
        mt={4}
        sx={(theme) => ({
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          [theme.breakpoints.down("lg")]: {
            flexDirection: "column",
            // alignItems: "start",
            alignItems: "center",
          },
          [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            alignItems: "center",
          },
        })}
      >
        <Box
          sx={(theme) => ({
            width: "480px",
            [theme.breakpoints.down("lg")]: {
              width: "100%",
            },
          })}
        >
          <HeaderText text="News & Articles " />
          <MediumText sx={{ margin: "40px 0" }}>
            Stays updated with our latest blog and news and get healthy tips &
            trick for oral health
          </MediumText>
          <Box
            sx={(theme) => ({
              width: "440px",
              [theme.breakpoints.down("lg")]: {
                width: "100%",
              },
            })}
          >
            <InputWrapper>
              <NewsInput
                type="text"
                placeholder="Search news or aricles"
                style={{}}
              />
              <InputButton>
                Search
                <Search
                  sx={{
                    paddingLeft: "5px",
                  }}
                />
              </InputButton>
            </InputWrapper>
          </Box>
        </Box>

        <Box
          sx={(theme) => ({
            [theme.breakpoints.down("lg")]: {
              marginTop: "50px",
              marginBottom: "20px",
            },
          })}
        >
          <img
            src={newsImg}
            style={{
              maxWidth: "100%",
            }}
            alt="#"
          />
        </Box>
      </Box>
    </GeneralWrapper>
  );
};

export default News;

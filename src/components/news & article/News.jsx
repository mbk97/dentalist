import { Box, TextField } from "@mui/material";
import React from "react";
import { MediumText } from "../text/text";
import { HeaderText } from "../text/Text";
import newsImg from "../../assets/images/news.png";
import { ExtraSmallButton, SmallPrimaryButton } from "../button/button";
import { useStyles } from "./style";
import { Search } from "@mui/icons-material";

const News = () => {
  const classes = useStyles();

  return (
    <Box
      mt={4}
      sx={(theme) => ({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        [theme.breakpoints.down("lg")]: {
          flexDirection: "column",
          alignItems: "start",
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
          [theme.breakpoints.down("sm")]: {
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
          <input
            type="text"
            placeholder="Search news or aricles"
            style={{
              height: "60px",
              width: "100%",
              background: "#FFFFFF",
              border: "1px solid rgba(24, 25, 69, 0.1)",
              borderRadius: "16px",
              paddingLeft: "15px",
            }}
          />
          {/* <Box className={classes.buttonPosition}>
            <button
              style={{
                width: "100px",
                padding: "10px 10px",
                display: "flex",
                alignItems: "center",
                border: 0,
                background: "#583fbc",
                color: "#ffffff",
                borderRadius: " 12px",
              }}
            >
              Search
              <Search
                sx={{
                  paddingLeft: "5px",
                }}
              />
            </button>
          </Box> */}
        </Box>
      </Box>

      <Box
        sx={(theme) => ({
          [theme.breakpoints.down("lg")]: {
            marginTop: "40px",
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
  );
};

export default News;

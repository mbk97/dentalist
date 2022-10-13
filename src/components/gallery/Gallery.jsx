import { Box } from "@mui/material";
import React from "react";
import { MediumText } from "../text/text";
import { HeaderText, SectionText } from "../text/mainText";
import { galleryData } from "./data";
import { GalleryGrid, useStyles } from "./style";
import { GeneralWrapper } from "../common/style";

const Gallery = () => {
  const classes = useStyles();

  return (
    <GeneralWrapper>
      <Box mt={4}>
        <SectionText text="gallery" />
        <Box
          className={classes.flexWrapper}
          sx={(theme) => ({
            [theme.breakpoints.down("lg")]: {
              flexDirection: "column",
              padding: "0 0px",
            },
          })}
        >
          <Box
            className={classes.titleWrapper}
            sx={(theme) => ({
              width: "500px",
              [theme.breakpoints.down("lg")]: {
                width: "100%",
              },
            })}
          >
            <HeaderText text="Some proof about our services for you" />
          </Box>
          <Box
            className={classes.sectionText}
            sx={(theme) => ({
              width: "38%",
              marginLeft: "20px",
              [theme.breakpoints.down("lg")]: {
                width: "100%",
                marginLeft: "0px",
                marginTop: "10px",
              },
            })}
          >
            <MediumText>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </MediumText>
          </Box>
        </Box>
        <GalleryGrid>
          {galleryData.map((item) => {
            return (
              <div>
                <img
                  src={item.img}
                  alt="gallery"
                  style={{ maxWidth: "100%" }}
                />
              </div>
            );
          })}
        </GalleryGrid>
      </Box>
    </GeneralWrapper>
  );
};

export default Gallery;

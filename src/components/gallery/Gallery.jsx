import { Box, Grid } from "@mui/material";
import React from "react";
import { MediumText } from "../text/text";
import { HeaderText, SectionText } from "../text/Text";
import { galleryData } from "./data";
import { GalleryGrid, useStyles } from "./style";

const Gallery = () => {
  const classes = useStyles();

  return (
    <Box mt={4}>
      <SectionText text="gallery" />
      <Box
        className={classes.flexWrapper}
        sx={(theme) => ({
          [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            padding: "0 0px",
          },
        })}
      >
        <Box
          className={classes.titleWrapper}
          sx={(theme) => ({
            width: "500px",
            [theme.breakpoints.down("sm")]: {
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
            [theme.breakpoints.down("sm")]: {
              width: "100%",
            },
          })}
        >
          <MediumText>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </MediumText>
        </Box>
      </Box>
      <GalleryGrid>
        {galleryData.map((item) => {
          return (
            <div>
              <img src={item.img} alt="gallery" style={{ maxWidth: "100%" }} />
            </div>
          );
        })}
      </GalleryGrid>
    </Box>
  );
};

export default Gallery;

import { Box } from "@mui/material";
import React from "react";
import { GridItem } from "../symptoms/style";
import { HeaderText, SectionText } from "../text/mainText";
import { data } from "./data";
import { ClinicItemGrid, ClinicItemWrapper } from "./style";

const Clinic = () => {
  return (
    <Box
      mt={4}
      sx={(theme) => ({
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        // padding: "0 90px",
        [theme.breakpoints.down("lg")]: {
          //   flexDirection: "column",
          //   alignItems: "start",
          //   padding: "40px 40px 0",
          //   height: "auto",
        },
        [theme.breakpoints.down("sm")]: {
          //   flexDirection: "column",
          //   alignItems: "center",
          //   padding: "10px 40px 0",
          //   height: "auto",
        },
      })}
    >
      <Box
        style={{
          textAlign: "center",
        }}
      >
        <SectionText text="our clinic" />
        <HeaderText text="Come to our clinic and get best dental services" />
      </Box>
      <ClinicItemWrapper>
        <ClinicItemGrid>
          {data.map((item) => {
            return (
              <GridItem key={item.id}>
                <img
                  src={item.img}
                  alt="#"
                  style={{
                    maxWidth: "100%",
                  }}
                />
              </GridItem>
            );
          })}
        </ClinicItemGrid>
      </ClinicItemWrapper>
    </Box>
  );
};

export default Clinic;

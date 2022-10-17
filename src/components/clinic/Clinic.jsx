import { Box } from "@mui/material";
import React from "react";
import { GridItem } from "../symptoms/style";
import { HeaderText, SectionText } from "../common/text/mainText";
import { data } from "./data";
import { ClinicItemGrid, ClinicItemWrapper } from "./style";

const Clinic = () => {
  return (
    <Box mt={4}>
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

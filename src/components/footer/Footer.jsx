import React from "react";
import { Box, Typography } from "@mui/material";
import logo from "../../assets/images/logo.png";
import {
  FollowText,
  FooterContactHeader,
  FooterContactText,
  FooterItem,
  IconContainer,
  LinksList,
  LinksListItem,
  FooterText,
  FooterWrapper,
  FooterBottom,
  BottomContent,
} from "./style";
import { socialIcons, linksData, footerContact } from "./data";
import { GridItem, SymptomImage } from "../symptoms/style";

const Footer = () => {
  return (
    <FooterWrapper>
      <Box
        mt={4}
        sx={(theme) => ({
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          [theme.breakpoints.down("lg")]: {
            height: "auto",
          },
          [theme.breakpoints.down("sm")]: {
            height: "auto",
          },
        })}
      >
        <FooterItem>
          <img src={logo} alt="#" />
          <Box
            sx={(theme) => ({
              width: "510px",
              margin: "20px 0 40px",
              [theme.breakpoints.down("lg")]: {
                width: "100%",
              },
            })}
          >
            <FooterText>
              Dental Care Seattle is a top-rated local practice for cosmetic,
              preventative, and restorative dentistry on First Hill{" "}
            </FooterText>
          </Box>
          <FollowText>FOLLOW US ON</FollowText>
          <IconContainer>
            {socialIcons.map((item) => {
              return <img src={item.img} key={item.id} alt="social" />;
            })}
          </IconContainer>
        </FooterItem>

        <FooterItem>
          <FollowText
            style={{
              paddingLeft: "10px",
            }}
          >
            {" "}
            QUICK LINKS
          </FollowText>
          <LinksList>
            {linksData.map((item) => {
              return <LinksListItem key={item.id}>{item.text}</LinksListItem>;
            })}
          </LinksList>
        </FooterItem>

        <FooterItem>
          <FollowText>CONTACT AND INFORMATION</FollowText>
          {footerContact.map((item) => {
            return (
              <GridItem key={item.id}>
                <SymptomImage>
                  <img src={item.img} alt="symptom" />
                </SymptomImage>
                <div>
                  <FooterContactText>{item.header}</FooterContactText>
                  <FooterContactHeader>{item.text}</FooterContactHeader>
                </div>
              </GridItem>
            );
          })}
        </FooterItem>
      </Box>
      <FooterBottom>
        <BottomContent>
          <Typography
            sx={{
              color: "rgba(255, 255, 255, 0.6)",
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "26px",
            }}
          >
            ©Dentalist. All Right Reserved
          </Typography>
        </BottomContent>
        <BottomContent>
          <Typography
            sx={{
              color: "#ffffff",
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "26px",
              marginRight: "20px",
            }}
          >
            Terms of use
          </Typography>
          <Typography
            sx={{
              color: "#ffffff",
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "26px",
            }}
          >
            Privacy Policy
          </Typography>
        </BottomContent>
      </FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;

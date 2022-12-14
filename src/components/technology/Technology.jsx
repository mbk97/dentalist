import React from "react";
import {
  TechnologyWrapper,
  TechImg,
  //   TechnologyTextWrapper,
  TextHeaderWrapperTwo,
  TextWrapper,
  CtoWrapper,
  CtoText,
  CtoDate,
  TechText,
  BigTechImg,
  TechHeaderWrapper,
  ImgFlex,
  TechHeaderText,
  LinearBox,
  LinearText,
  RelatedText,
  LinearBoxWrapper,
  RelatedTextWrapper,
} from "./style";
import techImgOne from "../../assets/images/techImgOne.png";
import techImgTwo from "../../assets/images/techImgTwo.png";
import bigTechImg from "../../assets/images/bigTechImg.png";

import cto from "../../assets/images/cto.png";
import { HeaderText, SectionText } from "../common/text/mainText";
import { Box } from "@mui/material";

const Technology = () => {
  return (
    <TechnologyWrapper>
      <TechHeaderWrapper>
        <SectionText text="technology" />
        <TextWrapper>
          <HeaderText text="New Technology Make for Better Dental  Operation" />
        </TextWrapper>
        <CtoWrapper>
          <TechImg src={cto} />
          <div>
            <CtoText>Robert Fox</CtoText>
            <CtoDate>12 August 2021</CtoDate>
          </div>
        </CtoWrapper>
      </TechHeaderWrapper>

      <div>
        <TechText>
          The paper discusses the use of epoxy resins in construction and repair
          of offshore concrete structures. Typical properties of resin systems
          are described, and the range of conditions encountered in practice and
          the development of a wide range of epoxy
        </TechText>
        <BigTechImg src={bigTechImg} />
        <Box mt={5}>
          <TechText>
            The paper discusses the use of epoxy resins in construction and
            repair of offshore concrete structures. Typical properties of resin
            systems are described, and the range of conditions encountered in
            practice and the development of a wide range of epoxy systems for a
            variety of applications are discussed. Several applications such as
            surface and underwater repairs, and the use of epoxy resins as
            curing membranes, and to seal cracks and joints are described in
            detail. It is shown that careful selection of materials and good
            quality of workmanship are essential to derive the maximum benefit
            from the use of epoxy systems. A wide range of properties could be
            obtained from epoxies to suit the requirements of the designer and
            the contractor.
          </TechText>
        </Box>
        <Box mt={5}>
          <TechText>
            To this day, it???s not entirely clear which seven lines the article
            referenced. The prevailing theory is that it???s the roughly seven
            lines of curl it took to create a Charge. However, a search for the
            seven lines of code ultimately misses the point: the ability to open
            up a terminal, run this curl snippet, then immediately see a
            successful credit card payment felt like seven lines of code. It???s
            unlikely that a developer believed a production-ready payments
            integration involved literally only seven lines of code. But taking
            something as complex as credit card processing and reducing.
          </TechText>
        </Box>
        <div>
          <TextHeaderWrapperTwo>
            <TechHeaderText>
              How technology affecting the dental surgery?
            </TechHeaderText>
          </TextHeaderWrapperTwo>
          <Box mt={4}>
            <TechText>
              A few years ago, Bloomberg Businessweek published a feature story
              on Stripe. Four words spanned the center of the cover: ???seven
              lines of code,??? suggesting that???s all it took for a business to
              power payments on Stripe. The assertion was bold???and became a
              theme and meme for us.
            </TechText>
          </Box>
          <Box mt={4}>
            <TechText>
              To this day, it???s not entirely clear which seven lines the article
              referenced. The prevailing theory is that it???s the roughly seven
              lines of curl it took to create a Charge. However, a search for
              the seven lines of code ultimately misses the point: the ability
              to open up a terminal, run this curl snippet, then immediately see
              a successful credit card payment felt like seven lines of code.
              It???s unlikely that a developer believed a production-ready
              payments integration involved literally only seven lines of code.
              But taking something as complex as credit card processing and
              reducing the integration to only a few lines of code that, when
              run, immediately returns a successful Charge object is really
              quite magical.
            </TechText>
          </Box>
          <ImgFlex>
            <TechImg src={techImgOne} />
            <TechImg src={techImgTwo} />
          </ImgFlex>
          <LinearBoxWrapper>
            <LinearBox>
              <LinearText>
                ??? Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor ???{" "}
              </LinearText>
            </LinearBox>
          </LinearBoxWrapper>
          <Box mt={4}>
            <TechText>
              A few years ago, Bloomberg Businessweek published a feature story
              on Stripe. Four words spanned the center of the cover: ???seven
              lines of code,??? suggesting that???s all it took for a business to
              power payments on Stripe. The assertion was bold???and became a
              theme and meme for us.
            </TechText>
          </Box>
          <RelatedTextWrapper>
            <RelatedText>
              Related resource :{" "}
              <span>What is canal root and what causing it? </span>
            </RelatedText>
          </RelatedTextWrapper>
          <Box mt={4}>
            <TechText>
              A few years ago, Bloomberg Businessweek published a feature story
              on Stripe. Four words spanned the center of the cover: ???seven
              lines of code,??? suggesting that???s all it took for a business to
              power payments on Stripe. The assertion was bold???and became a
              theme and meme for us.
            </TechText>
          </Box>
        </div>
      </div>
    </TechnologyWrapper>
  );
};

export default Technology;

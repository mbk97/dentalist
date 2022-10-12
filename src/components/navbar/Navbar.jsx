import React, { useState } from "react";
import {
  NavWrapper,
  Nav,
  LogoWrapper,
  ButtonWrapper,
  NavList,
  NavListItem,
  MenuIconWrapper,
  MobileLogoWrapper,
  MobileButtonWrapper,
} from "./style";
import logo from "../../assets/images/navLogo.png";
import { PrimaryButton } from "../button/button";
import { data } from "./data";
import { CloseOutlined, MenuOutlined } from "@mui/icons-material";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <NavWrapper>
      <LogoWrapper>
        <img src={logo} alt="logo" />
      </LogoWrapper>
      <Nav className={click ? "active" : ""}>
        <MobileLogoWrapper>
          <img src={logo} alt="logo" />
        </MobileLogoWrapper>
        <NavList>
          {data.map((item) => (
            <NavListItem key={item.id} onClick={handleClick}>
              {item.text}
            </NavListItem>
          ))}
        </NavList>
        <MobileButtonWrapper>
          <PrimaryButton>Book an appointment</PrimaryButton>
        </MobileButtonWrapper>
      </Nav>
      <ButtonWrapper>
        <PrimaryButton>Book an appointment</PrimaryButton>
      </ButtonWrapper>
      <MenuIconWrapper onClick={handleClick}>
        {click ? (
          <CloseOutlined fontSize="large" />
        ) : (
          <MenuOutlined fontSize="large" />
        )}
      </MenuIconWrapper>
    </NavWrapper>
  );
};

export default Navbar;
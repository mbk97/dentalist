import styled from "styled-components";

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  margin-top: 20px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: white;
  @media (max-width: 1200px) {
    padding: 25px 0 0 5px;
    margin-top: 0px;
  }
`;

export const Nav = styled.nav`
  @media (max-width: 1200px) {
    position: absolute;
    top: 0px;
    left: -900px;
    width: 88vw;
    height: 100vh;
    background: #dbeffa;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: all ease-in-out 0.3s;
    opacity: 0;
    z-index: 1;
    &.active {
      opacity: 1;
      left: -82px;
    }

    @media (max-width: 470px) {
      &.active {
        opacity: 1;
        left: -22px;
      }
    }
  }
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const NavListItem = styled.li`
  margin: 0 20px;
  list-style: none;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: #181945;
  cursor: pointer;

  @media (max-width: 1200px) {
    font-size: 24px;
    margin: 25px 0;
  }
`;

export const MobileLogoWrapper = styled.div`
  display: none;
  @media (max-width: 1200px) {
    display: block;
  }
`;

export const LogoWrapper = styled.div``;

export const ButtonWrapper = styled.div`
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const MenuIconWrapper = styled.div`
  display: none;
  @media (max-width: 1200px) {
    display: block;
  }
`;

export const MobileButtonWrapper = styled.div`
  display: none;
  @media (max-width: 1200px) {
    display: block;
  }
`;

import styled from "styled-components";
import Avatar from "antd/es/avatar/avatar";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export const Bars = styled(FaBars)`
  display: block;
  position: absolute;
  top: 10px;
  right: 0;
  transform: translate(-100%, 75%);
  font-size: 25px;
  cursor: pointer;
  color: ${(props) => props.color};
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    width: 146px;
  }
`;

export const Close = styled(IoMdClose)`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 75%);
  font-size: 30px;
  cursor: pointer;
  color: ${(props) => props.theme.black};
`;

export const DropdownItem = styled.p`
  margin: 0;
  padding: 0;
`;

export const LoadingContainer = styled.div`
  display: flex;
  padding: 0 10px;
  color: ${(props) => props.theme.orange};
`;

export const MobileNav = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    display: none;
  }
`;

export const Nav = styled.nav`
  display: none;
  padding: 20px;
  position: absolute;
  width: 100%;
  padding-left: 100px;
  padding-right: 80px;
  z-index: 1000;
  top: 0;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px 0 30px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    padding-left: 100px;
    padding-right: 80px;
  }
`;

export const NavItem = styled(Link)`
  font-weight: 400;
  font-size: 12px;
  line-height: 14.22px;
  text-decoration: none;
  color: ${(props) =>
    props.color === "black" ? props.theme.black : props.theme.white};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  ${(props) => props.color === "white" && "text-shadow: 1px 1px 1px black;"}

  &:hover {
    color: ${(props) => props.theme.orange};
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 16px;
    line-height: 19.96px;
  }
`;

export const NavItemContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  width: 65%;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    gap: 10px;
    width: 55%;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    gap: 30px;
    width: 65%;
  }
`;

export const NavMenu = styled.div`
  display: ${(props) => (props.isHidden ? "none" : "flex")};
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  height: 100vh;
  background-color: ${(props) => props.theme.white};
  z-index: 10000;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    display: none;
  }
`;

export const NavMenuItem = styled(Link)`
  font-weight: 500;
  font-size: 24px;
  line-height: 28.44px;
  text-decoration: none;
  color: ${(props) =>
    props.color === "orange" ? props.theme.orange : props.theme.black};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.orange};
  }
`;

export const OtherFacilitiesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OtherFacilitiesIcon = styled.div`
  display: flex;
  margin-left: 10px;
`;

export const StyledAvatar = styled(Avatar)`
  background-color: #fde3cf;
  color: #f56a00;
`;

export const Subtitle = styled.h3`
  font-weight: 400;
  font-size: 12px;
  line-height: 7px;
  text-transform: uppercase;
  letter-spacing: -2.2%;
  color: ${(props) =>
    props.color === "black" ? props.theme.black : props.theme.white};
  margin: 0;

  ${(props) => props.color === "white" && "text-shadow: 1px 1px 1px black;"}

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    line-height: 18px;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 16px;
  line-height: 28px;
  text-transform: uppercase;
  color: ${(props) => props.theme.orange};
  letter-spacing: -2.2%;
  text-shadow: 1px 1px 1px black;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const UserMenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  color: ${(props) =>
    props.color === "black" ? props.theme.black : props.theme.white};

  &:hover {
    color: ${(props) => props.theme.orange};
  }
`;

export const UserMenuName = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 14.22px;
  margin: 0;
  color: ${(props) => props.theme.orange};

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 16px;
    line-height: 19.96px;
  }
`;

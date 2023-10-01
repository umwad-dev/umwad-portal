import styled from "styled-components";
import { Link } from "react-router-dom";
import Layout from "antd/es/layout";
import { BellOutlined } from "@ant-design/icons";

const { Header } = Layout;

export const FullName = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -2.2%;
  text-align: center;
  margin: 0;
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

  &:hover {
    color: ${(props) => props.theme.orange};
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 16px;
    line-height: 19.96px;
  }
`;

export const NotificationBell = styled(BellOutlined)`
  cursor: pointer;
  color: ${(props) => props.theme.black};

  &:hover {
    color: ${(props) => props.theme.orange};
  }
`;

export const StyledHeader = styled(Header)`
  width: 100%;
  background-color: ${(props) => props.theme.white};
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-left: 10px;
`;

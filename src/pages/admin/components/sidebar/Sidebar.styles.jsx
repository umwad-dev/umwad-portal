import styled from "styled-components";
import Menu from "antd/es/menu";
import Sider from "antd/es/layout/Sider";

export const StyledMenu = styled(Menu)`
  background-color: ${(props) => props.theme.white};
`;

export const StyledSider = styled(Sider)`
  height: 100vh;
`;

export const TextLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
`;

export const TextLogoSubtitle = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -2.2%;
  text-transform: uppercase;
  margin: 0;
`;

export const TextLogoTitle = styled.h4`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -2.2%;
  text-transform: uppercase;
  color: ${(props) => props.theme.orange};
  margin: 0;
`;

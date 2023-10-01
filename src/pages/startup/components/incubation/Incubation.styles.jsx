import styled from "styled-components";
import BgMobile from "../../../../assets/startup/bg-mobile.webp";
import BgTablet from "../../../../assets/startup/bg-tablet.webp";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  margin: 30px 0;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    padding-bottom: 0;
    margin: 50px 0;
    height: 200px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    padding: 40px 0;
    height: 300px;
    max-width: 1300px;
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${BgMobile});
  background-size: 100% 100%;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    background-image: url(${BgTablet});
  }
`;

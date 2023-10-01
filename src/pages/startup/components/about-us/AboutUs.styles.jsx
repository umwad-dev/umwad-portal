import styled from "styled-components";
import BgMobile from "../../../../assets/startup/bg-about-us-mobile.webp";
import BgTablet from "../../../../assets/startup/bg-about-us-tablet.webp";
import BgDesktop from "../../../../assets/startup/bg-about-us-desktop.webp";

export const AboutUsImg = styled.img`
  width: 170px;
  height: 164px;
  vertical-align: bottom;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    width: 300px;
    height: 240px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    width: 400px;
    height: 300px;
  }
`;

export const AboutUsImgContainer = styled.div`
  width: 100%;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    margin-top: -30px;

    &:last-child {
      margin-right: -200px;
      margin-top: -70px;
    }
  }
`;

export const BgBottom = styled.div`
  position: absolute;
  bottom: 0;
  background-image: url(${BgMobile});
  background-size: 100% 100%;
  width: 100%;
  height: 195px;
  z-index: -100;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    background-image: url(${BgTablet});
    height: 297.42px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    background-image: url(${BgDesktop});
    height: 415px;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
  position: relative;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    align-items: flex-start;
    flex-direction: row;
    padding: 0 100px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    align-items: center;
    max-width: 1300px;
    margin: 100px 0 200px 0;
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  max-width: 305px;
  color: #535353;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    max-width: 100%;
    font-size: 16px;
    line-height: 24px;
    text-align: left;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 20px;
    line-height: 30px;
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 30px 0;
`;

export const PhotoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    flex-direction: column;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    margin-left: 120px;
  }
`;

export const SideContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    align-items: flex-start;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #121212;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-weight: 600;
    font-size: 26px;
    line-height: 39px;
    letter-spacing: -2.2%;
    text-align: left;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 35px;
    line-height: 52.5px;
  }
`;

export const TitleSpan = styled.span`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: ${(props) => props.theme.orange};

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-weight: 600;
    font-size: 26px;
    line-height: 39px;
    letter-spacing: -2.2%;
    text-align: left;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 35px;
    line-height: 52.5px;
  }
`;

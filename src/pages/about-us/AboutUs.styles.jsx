import styled from "styled-components";
import BgBottomMobile from "../../assets/about-us/bg-bottom-mobile.webp";
import BgBottomTablet from "../../assets/about-us/bg-bottom-tablet.webp";
import BgBottomDesktop from "../../assets/about-us/bg-bottom-desktop.webp";
import BgMidMobile from "../../assets/about-us/bg-mid-mobile.webp";
import BgMidTablet from "../../assets/about-us/bg-mid-tablet.webp";
import BgMidDesktop from "../../assets/about-us/bg-mid-desktop.webp";
import BgTopMobile from "../../assets/about-us/bg-top-mobile.webp";
import BgTopTablet from "../../assets/about-us/bg-top-tablet.webp";
import BgTopDesktop from "../../assets/about-us/bg-top-desktop.webp";

export const AboutImg = styled.img`
  width: 110px;
  height: 110px;
  margin-bottom: 20px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    width: 142px;
    height: 142px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    width: 206px;
    height: 206px;
  }
`;

export const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${BgBottomMobile});
  background-size: 120% 120%;
  background-position: center;
  height: 899px;
  margin-top: -85px;
  padding: 70px 30px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    background-image: url(${BgBottomTablet});
    height: 750px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    margin-top: 0;
    background-image: url(${BgBottomDesktop});
    height: 1195px;
  }
`;

export const BottomImgMobile = styled.img`
  width: 285px;
  height: 676px;
  margin-top: 50px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    display: none;
  }
`;

export const BottomImgTablet = styled.img`
  display: none;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    margin: 50px 0;
    display: block;
    width: 680px;
    height: 466px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    display: none;
  }
`;

export const BottomImgDesktop = styled.img`
  display: none;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    margin: 80px;
    display: block;
    width: 1141px;
    height: 776px;
  }
`;

export const BottomTitle = styled.h1`
  font-weight: 700;
  font-size: 20px;
  line-height: 23.7px;
  text-align: center;
  color: #fff;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 30px;
    line-height: 35.55px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    margin-top: 30px;
    font-size: 50px;
    line-height: 59.25px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-image: url(${BgTopMobile});
  background-size: 160%;
  background-position: center;
  height: 800px;
  color: white;
  padding: 50px 30px;
  margin-top: -120px;
  z-index: -999;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    background-image: url(${BgTopTablet});
    margin-top: -150px;
    flex-direction: row;
    gap: 70px;
    padding: 50px 70px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    background-image: url(${BgTopDesktop});
    background-size: 120%;
    padding: 50px 200px;
    width: 100%;
    height: 900px;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MidMainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const MidContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-image: url(${BgMidMobile});
  background-size: 120% 120%;
  background-position: center;
  height: 1028px;
  margin-top: -150px;
  padding: 0 30px;
  margin-bottom: 70px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    height: 874px;
    padding: 0 55px;
    background-image: url(${BgMidTablet});
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    margin-top: 0;
    background-image: url(${BgMidDesktop});
    height: 1207px;
    padding: 0 100px;
    max-width: 1386px;
  }
`;

export const MidText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 14.22px;
  text-align: center;
  color: #121212;
  margin-bottom: 50px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 16px;
    line-height: 18.96px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 22px;
    line-height: 33px;
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -2.2%;
  text-align: center;
  margin-bottom: 20px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    text-align: left;
    font-size: 14px;
    line-height: 21px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 18px;
    line-height: 27px;
  }
`;

export const TextBold = styled.h1`
  font-weight: 700;
  font-size: 16px;
  line-height: 18.96px;
  letter-spacing: -2.2%;
  text-align: center;
  margin-bottom: 20px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    text-align: left;
    font-size: 20px;
    line-height: 23.7px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 30px;
    line-height: 35.55px;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 22px;
  line-height: 33px;
  text-align: center;
  margin-top: 60px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 30px;
    line-height: 45px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 40px;
    line-height: 60px;
    margin-bottom: 20px;
  }
`;

export const TitleSpan = styled.span`
  display: inline;
  font-weight: 700;
  font-size: 22px;
  line-height: 33px;
  text-align: center;
  color: ${(props) => props.theme.orange};

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 30px;
    line-height: 45px;
    margin-bottom: 10px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 40px;
    line-height: 60px;
    margin-bottom: 20px;
  }
`;

import styled from "styled-components";
import StartupComBgMobile from "../../../../assets/startup-community/startup-com-bg-mobile.webp";
import StartupComBgTablet from "../../../../assets/startup-community/startup-com-bg-mobile.webp";
import StartupComBgDesktop from "../../../../assets/startup-community/startup-com-bg-mobile.webp";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${StartupComBgMobile});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 15% 8%;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    background-image: url(${StartupComBgTablet});
    align-items: flex-start;
    padding: 7% 6% 7% 9%;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    background-image: url(${StartupComBgDesktop});
    background-size: 100% 100%;
    padding: 10% 28% 10% 12%;
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  margin-bottom: 7%;
  color: #535353;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 16px;
    line-height: 24px;
    text-align: left;
    margin-bottom: 5%;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 20px;
    line-height: 30px;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    max-width: 1300px;
  }
`;

export const LearnMoreContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    align-items: flex-start;
  }
`;

export const Subtitle = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 11.85px;
  text-align: center;
  color: #121212;
  margin-bottom: 9%;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 12px;
    line-height: 14.22px;
    margin-bottom: 5%;
    text-align: left;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 16px;
    line-height: 18.96px;
    margin-bottom: 10%;
  }
`;

export const Title = styled.h1`
  display: inline;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: ${(props) => props.theme.black};

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 26px;
    line-height: 39px;
    text-align: left;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 40px;
    line-height: 60px;
  }
`;

export const TitleSpan = styled.span`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: ${(props) => props.theme.orange};
  margin-bottom: 3%;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 26px;
    line-height: 39px;
    margin-bottom: 2%;
    text-align: left;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 40px;
    line-height: 60px;
  }
`;

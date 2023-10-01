import styled from "styled-components";
import HeadlineBgDesktop from "../../../../assets/home/headline-cover-desktop.webp";
import HeadlineBgMobile from "../../../../assets/home/headline-cover-mobile.webp";
import HeadlineBgTablet from "../../../../assets/home/headline-cover-tablet.webp";

export const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 7%;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    padding: 0;
    max-width: 600px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    flex-direction: row;
    max-width: auto;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    max-width: 220px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    width: 50%;
    max-width: auto;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url(${HeadlineBgMobile});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  overflow: hidden;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    background-image: url(${HeadlineBgTablet});
    flex-direction: row;
    height: auto;
    padding: 14% 0 10% 0;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    background-image: url(${HeadlineBgDesktop});
    padding: 7% 6%;
    height: 100vh;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    max-width: 280px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    width: 50%;
    max-width: auto;
  }
`;

export const LeftContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-top: 120px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    align-items: flex-start;
    padding-top: 0;
    padding: 0 4%;
  }
`;

export const RightContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    padding: 0 0%;
    margin-top: -80px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    justify-content: flex-end;
    margin-top: -140px;
    padding-right: 60px;
  }
`;

export const Subtitle = styled.h3`
  font-weight: 400;
  font-size: 10px;
  line-height: 11.85px;
  color: ${(props) => props.theme.white};
  text-align: center;
  padding: 0 80px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    text-align: left;
    font-size: 14px;
    line-height: 16.59px;
    padding: 0;
    width: 239px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 24px;
    line-height: 28.44px;
    width: 547px;
    margin-bottom: 30px;
  }
`;

export const TileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  width: 310px;
  margin-top: 20px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    width: 400px;
  }
`;

export const TileImageOne = styled.img`
  width: 230px;
  position: relative;
  border-radius: 5px;
  margin-right: -10px;
  filter: drop-shadow(0px 2px 30px rgba(0, 0, 0, 0.2));

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    width: 390px;
    margin-right: 0;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    width: 500px;
  }
`;

export const TileImageTwo = styled.img`
  height: 200px;
  left: -30px;
  top: 60px;
  position: absolute;
  border-radius: 5px;
  filter: drop-shadow(0px 0px 30px rgba(0, 0, 0, 0.15));

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    top: 120px;
    left: -70px;
    width: 324px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    width: 400px;
    height: 280px;
    left: -150px;
    top: 170px;
  }
`;

export const TileImageThree = styled.img`
  width: 250px;
  position: absolute;
  border-radius: 5px;
  bottom: -190px;
  right: 13px;
  filter: drop-shadow(0px 2px 30px rgba(0, 0, 0, 0.2));

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    width: 250px;
    bottom: -160px;
    right: 60px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    width: 300px;
    bottom: -200px;
    right: 60px;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 25px;
  line-height: 29.63px;
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
  text-align: center;
  padding: 0 30px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    text-align: left;
    font-size: 30px;
    line-height: 35.55px;
    padding: 0;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 50px;
    line-height: 59.25px;
  }
`;

export const WelcomeText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 14.22px;
  text-align: center;
  color: ${(props) => props.theme.white};

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    text-align: left;
    font-size: 14px;
    line-height: 16.59px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 16px;
    line-height: 18.96px;
  }
`;

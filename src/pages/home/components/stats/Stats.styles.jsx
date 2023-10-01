import styled from "styled-components";
import StatsBgMobile from "../../../../assets/stats/stats-bg-mobile.webp";
import StatsBgTablet from "../../../../assets/stats/stats-bg-tablet.webp";
import StatsBgDesktop from "../../../../assets/stats/stats-bg-desktop.webp";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${StatsBgMobile});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  color: ${(props) => props.theme.black};
  padding: 70px 17px 50px 17px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    background-image: url(${StatsBgTablet});
    padding: 80px 70px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    background-image: url(${StatsBgDesktop});
    padding: 50px 80px 130px;
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: #535353;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 15px;
    line-height: 22.5px;
    padding: 0 4%;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 20px;
    line-height: 30px;
    padding: 0 6%;
  }
`;

export const StatsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 15%;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    margin-top: 5%;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    margin-top: 0;
    max-width: 1300px;
  }
`;

export const Subtitle = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 11.85px;
  text-align: center;
  margin-bottom: 5%;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 12px;
    line-height: 14.22px;
    margin-bottom: 2%;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 16px;
    line-height: 18.96px;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 20px;
  line-height: 23.7px;
  text-align: center;
  color: ${(props) => props.theme.black};
  margin-bottom: 3%;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 26px;
    line-height: 30.81px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 35px;
    line-height: 41.48px;
  }
`;

export const TitleSpan = styled.span`
  font-weight: 700;
  font-size: 20px;
  line-height: 23.7px;
  text-align: center;
  color: ${(props) => props.theme.orange};

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 26px;
    line-height: 30.81px;
    display: inline;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 35px;
    line-height: 41.48px;
  }
`;

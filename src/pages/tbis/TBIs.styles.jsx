import styled from "styled-components";
import BottomBgMobile from "../../assets/tbis/bg-bottom-mobile.webp";
import BottomBgTablet from "../../assets/tbis/bg-bottom-tablet.webp";
import BottomBgDesktop from "../../assets/tbis/bg-bottom-desktop.webp";
import TopBgMobile from "../../assets/tbis/bg-top-mobile.webp";
import TopBgTablet from "../../assets/tbis/bg-top-tablet.webp";
import TopBgDesktop from "../../assets/tbis/bg-top-desktop.webp";

export const BarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    flex-direction: row;
    padding: 0 20% 3% 20%;
  }
`;

export const BottomBgImg = styled.div`
  width: 100%;
  position: absolute;
  background-image: url(${BottomBgMobile});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 288px;
  bottom: 0;
  z-index: -3000;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    background-image: url(${BottomBgTablet});
    height: 502.18px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    background-image: url(${BottomBgDesktop});
    height: 523px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 0 10px 50px 10px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    width: 100%;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    gap: 20px;
    padding: 40px 80px 100px 80px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 30%;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    margin-top: 10%;
  }

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    margin-top: 15%;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
`;

export const FilterText = styled.p`
  width: 100%;
  font-weight: 300;
  font-size: 14px;
  line-height: 16.59px;
  white-space: nowrap;
  margin: 0;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 20px;
    line-height: 23.7px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    padding-top: 5px;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

export const LoadMoreContainer = styled.div`
  display: flex;
  padding: 20% 0;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    padding: 15% 0;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    padding: 10% 0;
  }
`;

export const LoadMoreText = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 18.96px;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 18px;
    line-height: 21.33px;
  }
`;

export const LoadMoreSpan = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 18.96px;
  font-style: italic;
  color: ${(props) => props.theme.orange};
  cursor: pointer;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 18px;
    line-height: 21.33px;
  }
`;

export const NoDataContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 6% 7%;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    padding: 6% 3%;
  }
`;

export const Subtitle = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 14.22px;
  text-align: center;
  margin-bottom: 15px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 14px;
    line-height: 16.59px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 20px;
    line-height: 23.7px;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 22px;
  line-height: 26.07px;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 40px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 30px;
    line-height: 45px;
    margin-bottom: 100px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 50px;
    line-height: 59.25px;
    margin-bottom: 20px;
  }
`;

export const TopBgImg = styled.div`
  width: 100%;
  position: absolute;
  background-image: url(${TopBgMobile});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 288.33px;
  top: 0;
  z-index: -3000;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    background-image: url(${TopBgTablet});
    height: 476px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    background-image: url(${TopBgDesktop});
    height: 523px;
  }
`;

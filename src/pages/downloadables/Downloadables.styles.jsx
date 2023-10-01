import styled from "styled-components";
import TopBannerBg from "../../assets/downloadables/top-banner-bg.webp";

export const BarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 30px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    margin-top: 50px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    flex-direction: row;
    padding: 0 200px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 100px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fefefe;
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
  padding: 10px 30px;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    padding: 6% 3%;
  }
`;

export const TopBanner = styled.div`
  display: flex;
  align-items: flex-end;
  background-image: url(${TopBannerBg});
  background-position: center;
  background-size: 100% 100%;
  width: 100%;
  height: 200px;
  padding-left: 30px;
  width: 100%;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    padding: 0 0 30px 100px;
    height: 303px;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 22px;
  line-height: 26.07px;
  text-align: left;
  color: white;
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

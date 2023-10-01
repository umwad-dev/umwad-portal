import styled from "styled-components";
import FabLabBg from "../../assets/lists/fablab-bg.webp";

export const BarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 100px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    margin-top: 50px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    margin-top: 200px;
    flex-direction: row;
    padding: 0 200px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 30px;
  gap: 20px;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    gap: 60px;
    padding: 10px 30px 80px 30px;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 130px;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    margin-top: 200px;
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

export const Subtitle = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 14.22px;
  text-align: center;
  margin-bottom: 15px;
  color: white;

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
  margin-bottom: 40px;
  color: white;

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
  background-image: url(${FabLabBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 288.33px;
  top: 0;
  z-index: -3000;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    height: 475px;
  }
`;

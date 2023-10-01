import styled from "styled-components";
import LowerFooterBgMobile from "../../../../assets/lower-footer/lower-footer-bg-mobile.webp";
import LowerFooterBgTablet from "../../../../assets/lower-footer/lower-footer-bg-tablet.webp";
import LowerFooterBgDesktop from "../../../../assets/lower-footer/lower-footer-bg-desktop.webp";

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  margin-top: 40px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    width: 245px;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${LowerFooterBgMobile});
  background-size: 100% 100%;
  padding: 50px 30px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    background-image: url(${LowerFooterBgTablet});
    padding: 100px 80px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    background-image: url(${LowerFooterBgDesktop});
    padding: 100px 330px;
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 11.85px;
  text-align: center;
  text-transform: capitalize;
  color: ${(props) => props.theme.white};
  padding: 0 25px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 20px;
    line-height: 23.7px;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 22px;
  line-height: 26.07px;
  text-align: center;
  color: ${(props) => props.theme.white};
  margin-bottom: 25px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 30px;
    line-height: 45px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 40px;
    line-height: 60px;
  }
`;

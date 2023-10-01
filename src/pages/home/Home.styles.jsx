import styled from "styled-components";
import AboutStartupBgMobile from "../../assets/about-startup/about-startup-bg-mobile.webp";
import AboutStartupBgTablet from "../../assets/about-startup/about-startup-bg-tablet.webp";
import AboutStartupBgDesktop from "../../assets/about-startup/about-startup-bg-desktop.webp";
import BalancePartnersBgMobile from "../../assets/balance-partners/balance-partners-bg-mobile.webp";
import BalancePartnersBgTablet from "../../assets/balance-partners/balance-partners-bg-tablet.webp";
import BalancePartnersBgDesktop from "../../assets/balance-partners/balance-partners-bg-desktop.webp";

export const AboutStartupContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-image: url(${AboutStartupBgMobile});
  background-repeat: no-repeat;
  background-size: 100% 100%;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    background-image: url(${AboutStartupBgTablet});
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    background-image: url(${AboutStartupBgDesktop});
  }
`;

export const BalancePartnersContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-image: url(${BalancePartnersBgMobile});
  background-repeat: no-repeat;
  background-size: 100% 100%;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    background-image: url(${BalancePartnersBgTablet});
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    background-image: url(${BalancePartnersBgDesktop});
  }
`;

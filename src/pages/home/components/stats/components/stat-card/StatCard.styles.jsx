import styled from "styled-components";

export const Container = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  cursor: pointer;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    width: 30%;
  }
`;

export const CountTitle = styled.h1`
  font-weight: 700;
  font-size: 18px;
  line-height: 21.33px;
  text-align: center;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 22px;
    line-height: 26.07px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 30px;
    line-height: 35.55px;
  }
`;

export const DetailContainer = styled.div`
  width: 146.29px;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-top: 40%;
  padding-bottom: 10%;
  background-color: ${(props) => props.theme.white};
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    width: 173.98px;
    padding-top: 27%;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    width: 256.1px;
    padding-top: 20%;
  }
`;

export const Logo = styled.img`
  width: 33.66px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    width: 40px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    width: 58.93px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  position: absolute;
  top: -30px;
  width: 68.39px;
  height: 68.39px;
  justify-content: center;
  align-items: center;
  padding: 5%;
  border-radius: 50%;
  background: linear-gradient(
      0deg,
      rgba(29, 52, 97, 0.4),
      rgba(29, 52, 97, 0.4)
    ),
    linear-gradient(313.61deg, #e46805 -24.16%, #1d3461 87.62%);

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    width: 81.33px;
    height: 81.33px;
    top: -40px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    top: -55px;
    width: 119.72px;
    height: 119.72px;
  }
`;

export const Title = styled.h5`
  font-weight: 400;
  font-size: 10px;
  line-height: 11.85px;
  text-align: center;
  color: #6b6b6b;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 12px;
    line-height: 14.22px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 16px;
    line-height: 18.96px;
  }
`;

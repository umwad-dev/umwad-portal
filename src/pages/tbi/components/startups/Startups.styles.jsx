import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    flex-direction: row;
    align-items: flex-start;
    margin: 70px 0;
    gap: 30px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    margin: 130px 0;
    gap: 100px;
  }
`;

export const LearnMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

export const StartupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    align-items: flex-start;
    gap: 10px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    gap: 40px;
  }
`;

export const StartupCount = styled.h1`
  font-weight: 600;
  font-size: 50px;
  line-height: 75px;
  letter-spacing: -2.2%;
  text-align: center;
  margin: 0;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 60px;
    line-height: 90px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 80px;
    line-height: 120px;
  }
`;

export const StartupInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    width: 50%;
    align-items: flex-start;
    padding: 0 30px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    margin-top: 80px;
  }
`;

export const StartupText = styled.h4`
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -2.2%;
  text-align: center;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    text-align: left;
    font-size: 28px;
    line-height: 42px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 35px;
    line-height: 52.5px;
  }
`;

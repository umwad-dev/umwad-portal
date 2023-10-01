import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 70px 0;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    margin: 80px 50px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    width: 100%;
    max-width: 1300px;
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 14.22px;
  text-align: center;
  color: #343434;
  max-width: 295px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 16px;
    line-height: 18.96px;
    max-width: 700px;
  }
`;

export const Heading = styled.h1`
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -2.2%;
  text-align: center;
  color: #121212;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 28px;
    line-height: 42px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 35px;
    line-height: 52.5px;
  }
`;

export const HeadingSpan = styled.span`
  display: inline;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -2.2%;
  text-align: center;
  color: ${(props) => props.theme.orange};

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 28px;
    line-height: 42px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 35px;
    line-height: 52.5px;
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f9fb;
`;

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    margin-top: 30px;
    width: 100%;
    flex-direction: row;
    align-items: flex-start;
    gap: 30px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    margin-top: 70px;
  }
`;

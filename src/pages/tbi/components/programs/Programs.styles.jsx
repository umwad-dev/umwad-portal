import styled from "styled-components";

export const ArrowContainer = styled.div`
  cursor: pointer;
  margin-top: 15px;
  color: #e46805;
  margin-top: -30px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    margin-top: 0;
  }
`;

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 10px;
  padding: 0 10px;
  margin-top: 40px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    margin-bottom: 30px;
    gap: 30px;
    padding: 0 40px;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 0;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    margin: 70px 0;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    width: 100%;
    margin: 50px;
    max-width: 1500px;
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

export const MainProgramsContainer = styled.div`
  display: flex;
  position: relative;
  overflow-x: scroll;
  scroll-behavior: smooth;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    max-width: 1400px;
  }
`;

export const ProgramsContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 0 30px;
  gap: 30px;
  margin-bottom: 30px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    margin-top: 30px;
    padding: 0 20px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    margin-top: 70px;
  }
`;

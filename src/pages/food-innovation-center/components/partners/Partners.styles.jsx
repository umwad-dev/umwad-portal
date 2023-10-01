import styled from "styled-components";
import Bg from "../../../../assets/startup/bg.webp";

export const BgBottom = styled.div`
  background-image: url(${Bg});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: absolute;
  right: 0;
  width: 100%;
  height: 1186.78px;
  z-index: 0;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    width: 486px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    width: 486px;
    height: 1186.78px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    flex-direction: row;
    gap: 40px;
    flex-wrap: wrap;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    max-width: 800px;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
  background-color: #f2f2f2;
  padding: 80px 0;
  overflow: hidden;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    padding: 100px 0;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    flex-direction: row-reverse;
    padding: 160px 0;
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 14.22px;
  text-align: center;
  max-width: 305px;
  color: #121212;
  max-width: 237px;
  margin-bottom: 50px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 16px;
    line-height: 18.96px;
    max-width: 660px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 16px;
    line-height: 18.96px;
    text-align: right;
    max-width: 411px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    align-items: flex-end;
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -2.2%;
  text-align: center;
  color: ${(props) => props.theme.black};

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 28px;
    line-height: 42px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 35px;
    line-height: 52.5px;
    text-align: right;
    margin: 0;
  }
`;

export const TitleSpan = styled.span`
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
    text-align: right;
    margin: 0;
  }
`;

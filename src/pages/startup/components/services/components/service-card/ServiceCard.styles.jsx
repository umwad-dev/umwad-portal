import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px 10px;
  border-radius: 6px;
  border: 1px solid #f4f4f5;
  box-shadow: 3px 3px 3px 0px #5c60681a;
  max-width: 265.06px;
  margin: 15px 0;
  background-color: #fff;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    max-width: 209.51px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    max-width: 345px;
  }
`;

export const Description = styled.p`
  font-weight: 300;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -2.2%;
  text-align: center;
  max-width: 194.78px;
  color: #121212;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 12px;
    line-height: 18px;
    max-width: 153.96px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 18px;
    line-height: 27px;
    max-width: 253px;
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -2.2%;
  text-align: center;
  margin: 0;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 14px;
    line-height: 14px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 20px;
    line-height: 20px;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 6px;
  padding: 10px 20px;
  height: 59.24px;
  max-width: 220.88px;
  border: 1.5px solid #d2d2d2;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    max-width: 174.59px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    max-width: 287px;
    padding: 30px 20px;
  }
`;

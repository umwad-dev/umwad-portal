import styled from "styled-components";
import Bg from "../../assets/four-oh-four/bg.webp";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${Bg});
  background-size: cover;
  background-repeat: no-repeat;
  color: ${(props) => props.theme.white};
  height: 100vh;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    align-items: flex-start;
    margin-top: 90px;
    padding: 0 100px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    margin-top: 90px;
    padding: 0 160px;
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 28.44px;
  text-align: center;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 24px;
    text-align: left;
  }
`;

export const HomeButton = styled.button`
  border-radius: 5px;
  font-weight: 400;
  font-size: 14px;
  line-height: 16.59px;
  text-align: center;
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.black};
  width: 245px;
  outline: none;
  border: 1px solid ${(props) => props.theme.white};
  padding: 20px 40px;
  cursor: pointer;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 100px;
  line-height: 151.68px;
  margin: 0;
  text-align: center;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 128px;
  }
`;

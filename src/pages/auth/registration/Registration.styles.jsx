import styled from "styled-components";
import AuthBgTablet from "../../../assets/auth/auth-bg-tablet.webp";
import AuthBgDesktop from "../../../assets/auth/auth-bg-desktop.webp";

export const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px 0;
  gap: 10px;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    flex-direction: row;
    justify-content: space-between;
    gap: 30px;
    padding: 50px 10px;
  }
`;

export const CoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 6% 7% 6%;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    background-color: ${(props) => props.theme.white};
    border-radius: 10px;
    margin: 20% 15% 15% 15%;
    padding: 0 13% 13% 13%;
    height: auto;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    max-width: 1100px;
    margin: 10% 15% 15% 15%;
    padding: 0 8% 8% 8%;
  }
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px 0 20px 0;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;

export const GoogleButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const HorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

export const HorizontalLine = styled.div`
  flex: 1;
  height: 1px;
  background-color: #dbdbdb;
`;

export const HorizontalText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 14.22px;
  text-align: center;
  color: #8f8f8f;
  flex-wrap: wrap;
  margin: 0 10px;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    width: 50%;
    padding: 0 10px;
  }
`;

export const Label = styled.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 16.59px;
  margin-left: 5px;
  margin: 10px 0 15px 5px;
`;

export const LoginSpan = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 14.22px;
  text-align: center;
  cursor: pointer;
  color: #1d3461;
`;

export const LoginText = styled.p`
  width: 100%;
  font-weight: 400;
  font-size: 12px;
  line-height: 14.22px;
  text-align: center;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    text-align: left;
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  height: auto;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    background-image: url(${AuthBgTablet});
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    background-image: url(${AuthBgDesktop});
  }
`;

export const RegisterButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 0;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    width: 40%;
  }
`;

export const SelectContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    width: 50%;
    padding: 5px 10px 10px 10px;
  }
`;

export const SelectMainContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 20px;
  line-height: 23.7px;
  text-align: center;
  margin-top: 110px;
`;

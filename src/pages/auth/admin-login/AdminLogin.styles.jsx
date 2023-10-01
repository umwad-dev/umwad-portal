import styled from "styled-components";
import AuthBgTablet from "../../../assets/auth/auth-bg-tablet.webp";
import AuthBgDesktop from "../../../assets/auth/auth-bg-desktop.webp";
import SideBg from "../../../assets/auth/side-bg.webp";

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px 0;
  gap: 10px;
`;

export const Checkbox = styled.input`
  cursor: pointer;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  padding: 3% 1%;
`;

export const CheckboxLabel = styled.label`
  font-weight: 400;
  font-size: 12px;
  line-height: 14.22px;
  margin-left: 7px;
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
    flex-direction: row;
    padding: 0;
    margin: 10% 15% 15% 15%;
    max-width: 935px;
  }
`;

export const ForgotPassword = styled.p`
  cursor: pointer;
  font-weight: 400;
  font-size: 12px;
  line-height: 14.22px;
  color: ${(props) => props.theme.black};

  &:hover {
    color: ${(props) => props.theme.orange};
  }
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px 0 20px 0;
`;

export const HorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
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

export const LoginButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 0;
`;

export const LoginContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    width: 50%;
    padding: 20px 40px;
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

export const RegisterHereSpan = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 14.22px;
  text-align: center;
  cursor: pointer;
  color: #1d3461;
`;

export const RegisterHereText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 14.22px;
  text-align: center;
`;

export const RememberMeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SideBgContainer = styled.div`
  width: 100%;
  display: none;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 10%;
    width: 50%;
    background-image: url(${SideBg});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: auto;
    color: ${(props) => props.theme.white};
    margin-left: -2px;
  }
`;

export const SideSubtitle = styled.h2`
  font-weight: 400;
  font-size: 25px;
  line-height: 37.5px;
  letter-spacing: -2.2%;
  text-transform: uppercase;
`;

export const SideTitle = styled.h1`
  font-weight: 700;
  font-size: 30px;
  line-height: 30px;
  letter-spacing: -2.2%;
  text-transform: uppercase;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 20px;
  line-height: 23.7px;
  text-align: center;
  margin-top: 110px;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    margin-top: 50px;
  }
`;

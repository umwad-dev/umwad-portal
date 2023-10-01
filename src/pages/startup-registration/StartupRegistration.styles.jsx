import styled from "styled-components";
import Button from "antd/es/button";
import Form from "antd/es/form";
import RegistrationBg from "../../assets/auth/registration-bg.webp";

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
  }
`;

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .ant-upload {
    width: 100% !important;
  }

  .ant-upload-list-item-container {
    width: 100% !important;
  }
`;

export const BannerInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    flex-direction: row;
    gap: 10px;
  }
`;

export const CategoryTitle = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 24.5px;
  letter-spacing: -2.2%;
  color: ${(props) => props.theme.orange};

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 25px;
    line-height: 37.5px;
  }
`;

export const CategorySubtitle = styled.h6`
  font-weight: 500;
  font-size: 14px;
  line-height: 24.5px;
  letter-spacing: -2.2%;
  color: ${(props) => props.theme.orange};

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 18px;
    line-height: 27px;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    width: 100%;
    flex-direction: row;
    gap: 20px;
  }
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
    margin: 10% 15% 15% 15%;
    padding: 0 8% 5% 8%;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const FormItemContactInfo = styled(Form.Item)`
  @media (min-width: ${(props) => props.theme.desktopSize}) {
    width: 30%;
  }
`;

export const FormItemEmail = styled(Form.Item)`
  @media (min-width: ${(props) => props.theme.desktopSize}) {
    width: 50%;
  }
`;

export const GenderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    justify-content: flex-start;
  }
`;

export const Line = styled.hr`
  width: 100%;
  border: 1px solid #efefef;
  margin-bottom: 20px;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    margin: 30px 0;
  }
`;

export const LogoContainer = styled.div`
  width: 30%;
  display: flex;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    width: 70%;
  }
`;

export const LogoUploadContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    width: auto;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  height: auto;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    background-image: url(${RegistrationBg});
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    flex-direction: row;
    gap: 20px;
  }
`;

export const SpinnerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    justify-content: flex-end;
    margin-right: 100px;
  }
`;

export const SubmitButton = styled(Button)`
  margin-top: 20px;
  width: 100%;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    width: 30%;
  }
`;

export const SubmitContainer = styled.div`
  width: 100%;
  display: flex;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    margin-top: 30px;
    justify-content: flex-end;
  }
`;

export const Subtitle = styled.p`
  font-weight: 300;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: -2.2%;
  text-align: center;
  margin-bottom: 30px;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 60px;
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 20px;
  line-height: 23.7px;
  text-align: center;
  margin-top: 110px;
  margin-bottom: 20px;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 35px;
    line-height: 52.5px;
  }
`;

export const TitleSpan = styled.span`
  font-weight: 600;
  font-size: 20px;
  line-height: 23.7px;
  text-align: center;
  margin-top: 110px;
  color: ${(props) => props.theme.orange};

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 35px;
    line-height: 52.5px;
  }
`;

export const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    flex-direction: row;
    gap: 20px;
  }
`;

export const UploadInfo = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 16.34px;
  text-align: center;
  color: #888888;
`;

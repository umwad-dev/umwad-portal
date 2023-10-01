import styled from "styled-components";
import BgMobile from "../../assets/contact-us/bg-mobile.webp";
import BgTablet from "../../assets/contact-us/bg-tablet.webp";
import BgDesktop from "../../assets/contact-us/bg-desktop.webp";
import PhoneImgIcon from "../../assets/contact-us/phone-icon.webp";
import MailImgIcon from "../../assets/contact-us/mail-icon.webp";
import FacebookImgIcon from "../../assets/contact-us/facebook-icon.webp";
import InstagramImgIcon from "../../assets/contact-us/instagram-icon.webp";
import LinkedinImgIcon from "../../assets/contact-us/linkedin-icon.webp";
import PinImgIcon from "../../assets/contact-us/pin-icon.webp";
import TwitterImgIcon from "../../assets/contact-us/twitter-icon.webp";

export const CallIcon = styled.img`
  width: 13px;
  height: 13px;
  content: url(${PhoneImgIcon});

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    width: 18px;
    height: 18px;
  }
`;

export const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 10px 0;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    justify-content: flex-start;
  }
`;

export const ContactInformationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-image: url(${BgMobile});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  color: ${(props) => props.theme.white};
  padding-top: 35%;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    background-image: url(${BgTablet});
    padding-top: 18%;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    background-image: none;
    padding-top: 13%;
    padding-left: 13%;
  }
`;

export const ContactEmail = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -2.3%;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 16px;
    line-height: 24px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 18px;
    line-height: 27px;
  }
`;

export const ContactText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 16px;
    line-height: 24px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 18px;
    line-height: 27px;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    flex-direction: row;
    gap: 20px;
    background-image: url(${BgDesktop});
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
`;

export const EmailIcon = styled.img`
  width: 13px;
  height: 10px;
  content: url(${MailImgIcon});

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    width: 18px;
    height: 14.4px;
  }
`;

export const FacebookIcon = styled.img`
  width: 21px;
  height: 21px;
  content: url(${FacebookImgIcon});
  cursor: pointer;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    width: 21px;
    height: 21px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    width: 30px;
    height: 30px;
  }
`;

export const FormButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.black};
  padding: 0 7% 35% 7%;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    padding: 0 22% 10% 22%;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    align-items: flex-start;
    padding: 7% 8% 9% 8%;
  }
`;

export const FormControl = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 10px 0;
`;

export const FormLabel = styled.label`
  font-weight: 400;
  font-size: 14px;
  line-height: 16.59px;
  margin-bottom: 5px;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    margin-bottom: 15px;
  }
`;

export const FormInput = styled.input`
  font-weight: 400;
  font-size: 14px;
  line-height: 16.59px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.ghostWhite};
  border: 1px solid ${(props) => props.theme.ghostWhite};
  padding: 10px 20px;
  height: 43px;
`;

export const FormTextarea = styled.textarea`
  font-weight: 400;
  font-size: 14px;
  line-height: 16.59px;
  border-radius: 5px;
  padding: 15px 20px;
  background-color: ${(props) => props.theme.ghostWhite};
  margin-bottom: 20px;
  border: 1px solid ${(props) => props.theme.ghostWhite};
  height: 140px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    height: 78px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    margin-bottom: 30px;
    height: 140px;
  }
`;

export const FormTitle = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -2.2%;
  text-align: center;
  margin: 50px 0 30px 0;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    margin: 80px 0 40px 0;
  }
`;

export const InstagramIcon = styled.img`
  width: 21px;
  height: 21px;
  content: url(${InstagramImgIcon});
  cursor: pointer;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    width: 21px;
    height: 21px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    width: 30px;
    height: 30px;
  }
`;

export const Line = styled.hr`
  border: 1px solid #e2e2e2;
  width: 305px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    width: 550px;
  }

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    width: 345px;
  }
`;

export const LineContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0 60px 0;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    padding: 40px 0 50px 0;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    justify-content: flex-start;
  }
`;

export const LinkedinIcon = styled.img`
  width: 21.41px;
  height: 21.41px;
  content: url(${LinkedinImgIcon});
  cursor: pointer;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    width: 30px;
    height: 30px;
  }
`;

export const LoadingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PinIcon = styled.img`
  width: 13px;
  height: 17.5px;
  content: url(${PinImgIcon});
  margin-top: -3%;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    width: 17px;
    height: 23px;
    margin-top: -5%;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    margin-top: -10%;
  }
`;

export const SocialContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-bottom: 40%;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    padding-bottom: 10%;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    justify-content: flex-start;
  }
`;

export const Subtitle = styled.h1`
  font-weight: 400;
  font-size: 12px;
  line-height: 14.22px;
  text-align: center;
  margin-bottom: 60px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 14px;
    line-height: 16.59px;
    margin-bottom: 40px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 18px;
    line-height: 21.33px;
    text-align: left;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 22px;
  line-height: 26.07px;
  text-align: center;
  margin-bottom: 15px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 30px;
    line-height: 45px;
    margin-bottom: 8px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 50px;
    line-height: 59.25px;
    text-align: left;
  }
`;

export const TwitterIcon = styled.img`
  width: 21px;
  height: 21px;
  content: url(${TwitterImgIcon});
  cursor: pointer;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    width: 30px;
    height: 30px;
  }
`;

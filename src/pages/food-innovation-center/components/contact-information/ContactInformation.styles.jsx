import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 0;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    flex-direction: row;
    align-items: flex-start;
    padding: 30px 10px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    padding: 40px 100px;
  }
`;

export const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  gap: 10px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    align-items: baseline;
    padding: 0 30px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    justify-content: space-evenly;
  }
`;

export const ContactHeader = styled.h1`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -2.2%;
  text-align: center;
  margin-bottom: 10px;
  color: #121212;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 14px;
    line-height: 21px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 20px;
    line-height: 30px;
  }
`;

export const ContactInfo = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  max-width: 165px;
  margin: 0;
  color: #4a4a4a;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const ContactInfoLink = styled.a`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  max-width: 165px;
  margin: 0;
  color: #4a4a4a;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.orange};
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const ContactInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

// Icons
export const FacebookIcon = styled.img`
  width: 15.89px;
  height: 16px;
`;

export const LinkedinIcon = styled.img`
  width: 16px;
  height: 16px;
`;

export const MailIcon = styled.img`
  width: 17.5px;
  height: 14px;
`;

export const MobileIcon = styled.img`
  width: 10px;
  height: 16px;
`;

export const PhoneIcon = styled.img`
  width: 16px;
  height: 16px;
`;

export const PinIcon = styled.img`
  width: 12.19px;
  height: 16px;
`;

export const WebsiteIcon = styled.img`
  width: 18px;
  height: 18px;
`;

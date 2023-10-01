import React from "react";
import {
  BodyContainer,
  ContactInformationWrapper,
  ContactMailImg,
  ContactPhoneImg,
  ContactText,
  ContactTextLink,
  ContactWrapper,
  Container,
  CopyrightLink,
  CopyrightWrapper,
  Description,
  DescriptionText,
  InformationWrapper,
  Line,
  LineContainer,
  Links,
  LinksWrapper,
  SocialIcon,
  SocialWrapper,
  Title,
} from "./Footer.styles";
import FacebookIcon from "../../assets/footer/facebook-icon.webp";
import InstagramIcon from "../../assets/footer/instagram-icon.webp";
import TwitterIcon from "../../assets/footer/twitter-icon.webp";
import LinkedinIcon from "../../assets/footer/linkedin-icon.webp";
import PhoneIcon from "../../assets/footer/phone-icon.webp";
import MailIcon from "../../assets/footer/mail-icon.webp";

const Footer = () => {
  return (
    <Container>
      <BodyContainer>
        <InformationWrapper>
          <Description>STARTUP</Description>
          <Title>WESTERN VISAYAS</Title>
          <br />
          <DescriptionText>
            Discover a wealth of startup-related information, resources, and
            services in one convenient location with the Western Visayas Startup
            Portal, the region's premier platform for innovation and
            entrepreneurship.
          </DescriptionText>
          <SocialWrapper>
            <SocialIcon alt="Facebook" src={FacebookIcon} />
            <SocialIcon alt="Instagram" src={InstagramIcon} />
            <SocialIcon alt="Twitter" src={TwitterIcon} />
            <SocialIcon alt="Linkedin" src={LinkedinIcon} />
          </SocialWrapper>
        </InformationWrapper>
        <LinksWrapper>
          <Links href="/startups" rel="noopener noreferrer">
            Startups
          </Links>
          <Links>FAQs</Links>
          <Links href="/tbis" rel="noopener noreferrer">
            TBIs
          </Links>
          <Links href="/contact-us" rel="noopener noreferrer">
            Contact us
          </Links>
          <Links>About us</Links>
          <Links href="/login" rel="noopener noreferrer">
            Login
          </Links>
          <Links href="/stories" rel="noopener noreferrer">
            Stories
          </Links>
          <Links href="/registration" rel="noopener noreferrer">
            Register
          </Links>
        </LinksWrapper>
        <ContactWrapper>
          <ContactText>
            Pugaran, ISAT U Kwadra TBI, Research Hub Bldg., Burgos St., La Paz,
            Iloilo City, 5000
          </ContactText>
          <ContactInformationWrapper>
            <ContactPhoneImg alt="Phone icon" src={PhoneIcon} />
            <ContactText>(033) 320-7190 loc. 290</ContactText>
          </ContactInformationWrapper>
          <ContactInformationWrapper>
            <ContactMailImg alt="Mail icon" src={MailIcon} />
            <ContactTextLink href="mailto:umwadregion6@gmail.com">
              umwadregion6@gmail.com
            </ContactTextLink>
          </ContactInformationWrapper>
        </ContactWrapper>
      </BodyContainer>
      <LineContainer>
        <Line />
      </LineContainer>
      <CopyrightWrapper>
        <Description>
          © 2023 Western Visayas Startup Portal. All rights reserved.
        </Description>
        <CopyrightLink>Privacy Policy</CopyrightLink>
      </CopyrightWrapper>
    </Container>
  );
};

export default Footer;

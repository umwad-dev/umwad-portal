import React from "react";
import {
  ContactContainer,
  ContactHeader,
  ContactInfo,
  ContactInfoLink,
  ContactInfoContainer,
  Container,
  FacebookIcon,
  LinkedinIcon,
  MailIcon,
  MobileIcon,
  PhoneIcon,
  PinIcon,
  WebsiteIcon,
} from "./ContactInformation.styles";
import FacebookImg from "../../../../assets/startup/facebook.webp";
import LinkedinImg from "../../../../assets/startup/linkedin.webp";
import MailImg from "../../../../assets/startup/mail.webp";
import MobileImg from "../../../../assets/startup/mobile.webp";
import PhoneImg from "../../../../assets/startup/phone.webp";
import PinImg from "../../../../assets/startup/pin.webp";
import WebsiteImg from "../../../../assets/startup/website.webp";

const ContactInformation = ({ tbiDetails }) => {
  const address =
    tbiDetails?.street +
    ", " +
    tbiDetails?.barangay +
    ", " +
    tbiDetails?.municipality +
    ", " +
    tbiDetails?.zipcode;

  return (
    <Container>
      <ContactContainer>
        <ContactHeader>Office Address</ContactHeader>
        <ContactInfoContainer>
          <PinIcon alt="pin" src={PinImg} />
          <ContactInfo>{address}</ContactInfo>
        </ContactInfoContainer>
      </ContactContainer>
      <ContactContainer>
        <ContactHeader>Contact Information</ContactHeader>
        <ContactInfoContainer>
          <MobileIcon alt="mobile" src={MobileImg} />
          <ContactInfo>{tbiDetails && tbiDetails.phone}</ContactInfo>
        </ContactInfoContainer>
        <ContactInfoContainer>
          <PhoneIcon alt="phone" src={PhoneImg} />
          <ContactInfo>{tbiDetails && tbiDetails.telephone}</ContactInfo>
        </ContactInfoContainer>
        <ContactInfoContainer>
          <MailIcon alt="mail" src={MailImg} />
          <ContactInfoLink href={`mailto:${tbiDetails?.email}`}>
            {tbiDetails && tbiDetails.email}
          </ContactInfoLink>
        </ContactInfoContainer>
      </ContactContainer>
      <ContactContainer>
        <ContactHeader>Website & Social Media Links</ContactHeader>
        <ContactInfoContainer>
          <WebsiteIcon alt="website" src={WebsiteImg} />
          {tbiDetails && tbiDetails.website ? (
            <ContactInfoLink
              href={tbiDetails.website}
              rel="noopener noreferrer"
              target="_blank"
            >
              {tbiDetails.website}
            </ContactInfoLink>
          ) : (
            <ContactInfo>"N/A"</ContactInfo>
          )}
        </ContactInfoContainer>
        <ContactInfoContainer>
          <FacebookIcon alt="facebook" src={FacebookImg} />
          {tbiDetails && tbiDetails.facebook ? (
            <ContactInfoLink
              href={tbiDetails.facebook}
              rel="noopener noreferrer"
              target="_blank"
            >
              {tbiDetails.facebook}
            </ContactInfoLink>
          ) : (
            <ContactInfo>"N/A"</ContactInfo>
          )}
        </ContactInfoContainer>
        <ContactInfoContainer>
          <LinkedinIcon alt="linkedin" src={LinkedinImg} />
          {tbiDetails && tbiDetails.linkedin ? (
            <ContactInfoLink
              href={tbiDetails.linkedin}
              rel="noopener noreferrer"
              target="_blank"
            >
              {tbiDetails.linkedin}
            </ContactInfoLink>
          ) : (
            <ContactInfo>"N/A"</ContactInfo>
          )}
        </ContactInfoContainer>
      </ContactContainer>
    </Container>
  );
};

export default ContactInformation;

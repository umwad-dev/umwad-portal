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

const ContactInformation = ({ startupDetails }) => {
  const address =
    startupDetails?.street +
    ", " +
    startupDetails?.barangay +
    ", " +
    startupDetails?.municipality +
    ", " +
    startupDetails?.zipcode;

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
          <ContactInfo>{startupDetails && startupDetails.phone}</ContactInfo>
        </ContactInfoContainer>
        <ContactInfoContainer>
          <PhoneIcon alt="phone" src={PhoneImg} />
          <ContactInfo>
            {startupDetails && startupDetails.telephone}
          </ContactInfo>
        </ContactInfoContainer>
        <ContactInfoContainer>
          <MailIcon alt="mail" src={MailImg} />
          <ContactInfoLink href={`mailto:${startupDetails?.email}`}>
            {startupDetails && startupDetails.email}
          </ContactInfoLink>
        </ContactInfoContainer>
      </ContactContainer>
      <ContactContainer>
        <ContactHeader>Website & Social Media Links</ContactHeader>
        <ContactInfoContainer>
          <WebsiteIcon alt="website" src={WebsiteImg} />
          {startupDetails && startupDetails.website ? (
            <ContactInfoLink
              href={startupDetails.website}
              rel="noopener noreferrer"
              target="_blank"
            >
              {startupDetails.website}
            </ContactInfoLink>
          ) : (
            <ContactInfo>"N/A"</ContactInfo>
          )}
        </ContactInfoContainer>
        <ContactInfoContainer>
          <FacebookIcon alt="facebook" src={FacebookImg} />
          {startupDetails && startupDetails.facebook ? (
            <ContactInfoLink
              href={startupDetails.facebook}
              rel="noopener noreferrer"
              target="_blank"
            >
              {startupDetails.facebook}
            </ContactInfoLink>
          ) : (
            <ContactInfo>"N/A"</ContactInfo>
          )}
        </ContactInfoContainer>
        <ContactInfoContainer>
          <LinkedinIcon alt="linkedin" src={LinkedinImg} />
          {startupDetails && startupDetails.linkedin ? (
            <ContactInfoLink
              href={startupDetails.linkedin}
              rel="noopener noreferrer"
              target="_blank"
            >
              {startupDetails.linkedin}
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

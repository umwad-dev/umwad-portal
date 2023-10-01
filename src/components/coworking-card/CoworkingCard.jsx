import React from "react";
import {
  CardContainer,
  ContactContainer,
  ContactWrapper,
  ContactImg,
  DetailsWrapper,
  Img,
  ImgWrapper,
  Subtitle,
  Text,
  Title,
} from "./CoworkingCard.styles";
import MailIcon from "../../assets/lists/mail.webp";
import PhoneIcon from "../../assets/lists/phone.webp";
import PinIcon from "../../assets/lists/pin.webp";

const CoworkingCard = ({ aside, data }) => {
  const { description, email, logoUrl, name, phone, slug } = data || {};

  const address =
    data?.street +
    ", " +
    data?.barangay +
    ", " +
    data?.municipality +
    ", " +
    data?.zipcode;

  return (
    <CardContainer
      aside={aside}
      onClick={() => (window.location.href = `/coworking-space/${slug}`)}
    >
      <ImgWrapper>
        <Img alt="profile" src={logoUrl} />
      </ImgWrapper>
      <DetailsWrapper>
        <Title>{name}</Title>
        <Subtitle>{description}</Subtitle>
        <ContactContainer>
          <ContactWrapper>
            <ContactImg alt="phone" src={PhoneIcon} />
            <Text>{phone}</Text>
          </ContactWrapper>
          <ContactWrapper>
            <ContactImg alt="mail" src={MailIcon} />
            <Text>{email}</Text>
          </ContactWrapper>
          <ContactWrapper>
            <ContactImg alt="pin" src={PinIcon} />
            <Text>{address}</Text>
          </ContactWrapper>
        </ContactContainer>
      </DetailsWrapper>
    </CardContainer>
  );
};

export default CoworkingCard;

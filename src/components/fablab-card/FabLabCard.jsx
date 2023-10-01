import React from "react";
import {
  CardContainer,
  ContactContainer,
  ContactImg,
  ContactWrapper,
  DetailsWrapper,
  Img,
  Subtitle,
  Text,
  Title,
} from "./FabLabCard.styles";
import MailIcon from "../../assets/lists/mail.webp";
import PhoneIcon from "../../assets/lists/phone.webp";
import PinIcon from "../../assets/lists/pin.webp";

const FabLabCard = ({ data }) => {
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
    <CardContainer onClick={() => (window.location.href = `/fab-lab/${slug}`)}>
      <Img alt="profile" src={logoUrl} />
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

export default FabLabCard;

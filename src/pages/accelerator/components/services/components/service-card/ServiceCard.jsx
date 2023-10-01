import React from "react";
import {
  Container,
  Description,
  Title,
  TitleContainer,
} from "./ServiceCard.styles";

const ServiceCard = ({ description, title }) => {
  return (
    <Container>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <Description>{description}</Description>
    </Container>
  );
};

export default ServiceCard;

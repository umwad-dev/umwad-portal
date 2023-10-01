import React from "react";
import {
  CardContainer,
  CardLogo,
  CardLogoWrapper,
  Description,
  DescriptionWrapper,
  Title,
} from "./ProductCard.styles";
import DefaultLogoImg from "../../assets/default/default-logo.webp";

const ProductCard = ({ description, logo, title }) => {
  const trimDescription =
    description?.length >= 90
      ? description?.substring(0, 90) + "..."
      : description;

  return (
    <CardContainer>
      <CardLogoWrapper>
        <CardLogo alt="Card logo" src={logo ? logo : DefaultLogoImg} />
      </CardLogoWrapper>
      <DescriptionWrapper>
        <Title>{title}</Title>
        <Description>{trimDescription}</Description>
      </DescriptionWrapper>
    </CardContainer>
  );
};

export default ProductCard;

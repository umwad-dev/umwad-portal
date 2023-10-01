import React from "react";
import {
  CardContainer,
  CardImg,
  CardImgContainer,
  CardTitle,
} from "./TBICard.styles";
import DefaultLogoImg from "../../assets/default/default-logo.webp";

const TBICard = ({ imgSrc, name, slug }) => {
  return (
    <CardContainer onClick={() => (window.location.href = `/tbi/${slug}`)}>
      <CardImgContainer>
        <CardImg alt={name} src={imgSrc ? imgSrc : DefaultLogoImg} />
      </CardImgContainer>
      <CardTitle>{name}</CardTitle>
    </CardContainer>
  );
};

export default TBICard;

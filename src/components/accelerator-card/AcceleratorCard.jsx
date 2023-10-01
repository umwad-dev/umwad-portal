import React from "react";
import {
  CardContainer,
  CardImg,
  CardImgContainer,
  CardTitle,
} from "./AcceleratorCard.styles";
import DefaultLogoImg from "../../assets/default/default-logo.webp";

const AcceleratorCard = ({ imgSrc, name, slug }) => {
  return (
    <CardContainer
      onClick={() => (window.location.href = `/accelerator/${slug}`)}
    >
      <CardImgContainer>
        <CardImg alt={name} src={imgSrc ? imgSrc : DefaultLogoImg} />
      </CardImgContainer>
      <CardTitle>{name}</CardTitle>
    </CardContainer>
  );
};

export default AcceleratorCard;

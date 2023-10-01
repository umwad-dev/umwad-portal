import React from "react";
import {
  CardContainer,
  Description,
  DescriptionWrapper,
  FeaturedImg,
  ReadMore,
  Time,
  Title,
} from "./Card.styles";

const Card = ({ description, featuredImg, onClick, time, title }) => {
  return (
    <CardContainer>
      <FeaturedImg alt="Featured image" src={featuredImg} />
      <DescriptionWrapper>
        <Time>{time}</Time>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <ReadMore onClick={onClick}>Read More</ReadMore>
      </DescriptionWrapper>
    </CardContainer>
  );
};

export default Card;

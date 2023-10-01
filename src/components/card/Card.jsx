import React from "react";
import { getTimeAgo } from "../../utils/conversion";
import {
  CardContainer,
  Description,
  DescriptionWrapper,
  FeaturedImg,
  FeatureImgContainer,
  Time,
  Title,
} from "./Card.styles";

const Card = ({ author, position, bannerUrl, createdAt, slug, title }) => {
  const parsedCreatedAtDate = createdAt
    ? new Date(createdAt?.seconds * 1000 + createdAt?.nanoseconds / 100000)
    : new Date(Date.now());

  const createdAtDate = new Date(parsedCreatedAtDate);
  const nowDate = new Date(Date.now());

  const timeString = getTimeAgo(nowDate, createdAtDate);

  const onClick = () => (window.location.href = `/news-and-articles/${slug}`);

  return (
    <CardContainer onClick={onClick}>
      <FeatureImgContainer>
        <FeaturedImg alt="Featured image" src={bannerUrl} />
      </FeatureImgContainer>
      <DescriptionWrapper>
        <Time>{timeString}</Time>
        <Title>{title}</Title>
        <Description>
          {author} | {position}
        </Description>
      </DescriptionWrapper>
    </CardContainer>
  );
};

export default Card;

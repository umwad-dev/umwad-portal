import React from "react";
import { useNavigate } from "react-router-dom";
import { getTimeAgo } from "../../../../utils/conversion";
import {
  CardContainer,
  Description,
  DescriptionWrapper,
  FeaturedImg,
  FeatureImgContainer,
  ReadMore,
  Time,
  Title,
} from "./Card.styles";

const Card = ({ author, position, bannerUrl, createdAt, slug, title, uid }) => {
  const navigate = useNavigate();

  const parsedCreatedAtDate = createdAt
    ? new Date(createdAt?.seconds * 1000 + createdAt?.nanoseconds / 100000)
    : new Date(Date.now());

  const createdAtDate = new Date(parsedCreatedAtDate);
  const nowDate = new Date(Date.now());

  const timeString = getTimeAgo(nowDate, createdAtDate);

  const onReadMoreClick = () => navigate(`/news-and-articles/${slug}`);

  return (
    <CardContainer>
      <FeatureImgContainer>
        <FeaturedImg alt="Featured image" src={bannerUrl} />
      </FeatureImgContainer>
      <DescriptionWrapper>
        <Time>{timeString}</Time>
        <Title>{title}</Title>
        <Description>
          {author} | {position}
        </Description>
        <ReadMore onClick={onReadMoreClick}>Read More</ReadMore>
      </DescriptionWrapper>
    </CardContainer>
  );
};

export default Card;

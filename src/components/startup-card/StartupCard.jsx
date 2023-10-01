import React from "react";
import { dateDiffInDays } from "../../utils/conversion";
import {
  CardContainer,
  CardLogo,
  CardLogoWrapper,
  CardTag,
  Description,
  DescriptionWrapper,
  Title,
} from "./StartupCard.styles";
import DefaultLogoImg from "../../assets/default/default-logo.webp";

const StartupCard = ({ createdAt, description, logo, slug, title }) => {
  const createdAtDate = createdAt
    ? new Date(createdAt?.seconds * 1000 + createdAt?.nanoseconds / 100000)
    : new Date(Date.now());

  const createdNewDate = new Date(createdAtDate);
  const nowDate = new Date(Date.now());

  const getDiffDays = dateDiffInDays(createdNewDate, nowDate);

  const trimDescription =
    description?.length >= 90
      ? description?.substring(0, 90) + "..."
      : description;

  return (
    <CardContainer onClick={() => (window.location.href = `/startup/${slug}`)}>
      <CardLogoWrapper>
        {getDiffDays <= 5 && <CardTag>New</CardTag>}
        <CardLogo alt="Card logo" src={logo ? logo : DefaultLogoImg} />
      </CardLogoWrapper>
      <DescriptionWrapper>
        <Title>{title}</Title>
        <Description>{trimDescription}</Description>
      </DescriptionWrapper>
    </CardContainer>
  );
};

export default StartupCard;

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
} from "./ProgramCard.styles";
import DefaultLogoImg from "../../assets/default/default-logo.webp";

const ProgramCard = ({ bannerUrl, createdAt, description, slug, title }) => {
  const createdAtDate = createdAt
    ? new Date(createdAt?.seconds * 1000 + createdAt?.nanoseconds / 100000)
    : new Date(Date.now());

  const createdNewDate = new Date(createdAtDate);
  const nowDate = new Date(Date.now());

  const getDiffDays = dateDiffInDays(createdNewDate, nowDate);

  const trimDescription =
    description?.length >= 30
      ? description?.substring(0, 30) + "..."
      : description;

  return (
    <CardContainer onClick={() => (window.location.href = `/program/${slug}`)}>
      <CardLogoWrapper>
        {getDiffDays <= 5 && <CardTag>New</CardTag>}
        <CardLogo
          alt="Card logo"
          src={bannerUrl ? bannerUrl : DefaultLogoImg}
        />
      </CardLogoWrapper>
      <DescriptionWrapper>
        <Title>{title}</Title>
        <Description>
          <div
            dangerouslySetInnerHTML={{
              __html: trimDescription,
            }}
          />
        </Description>
      </DescriptionWrapper>
    </CardContainer>
  );
};

export default ProgramCard;

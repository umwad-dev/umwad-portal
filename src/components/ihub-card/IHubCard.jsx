import React from "react";
import {
  CardContainer,
  DescriptionWrapper,
  Img,
  ImgWrapper,
  Title,
  ViewPageButton,
} from "./IHubCard.styles";

const IHubCard = ({ data }) => {
  const { logoUrl, name, slug } = data || {};

  return (
    <CardContainer>
      <ImgWrapper>
        <Img alt="profile" src={logoUrl} />
      </ImgWrapper>
      <DescriptionWrapper>
        <Title>{name}</Title>
        <ViewPageButton
          onClick={() => (window.location.href = `/innovation-hub/${slug}`)}
        >
          view page &gt;
        </ViewPageButton>
      </DescriptionWrapper>
    </CardContainer>
  );
};

export default IHubCard;

import React from "react";
import {
  Container,
  CountTitle,
  DetailContainer,
  Logo,
  LogoContainer,
  Title,
} from "./StatCard.styles";

const StatCard = ({ count, imgSrc, title }) => {
  return (
    <Container>
      <DetailContainer>
        <LogoContainer>
          <Logo alt={title} src={imgSrc} />
        </LogoContainer>
        <CountTitle>{count}</CountTitle>
        <Title>{title}</Title>
      </DetailContainer>
    </Container>
  );
};

export default StatCard;

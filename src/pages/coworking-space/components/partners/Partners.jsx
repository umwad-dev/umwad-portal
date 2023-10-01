import React from "react";
import {
  BgBottom,
  CardContainer,
  Container,
  Description,
  TextContainer,
  Title,
  TitleSpan,
} from "./Partners.styles";
import Card from "./components/card/Card";

const Partners = ({ partners }) => {
  return (
    <Container>
      <TextContainer>
        <Title>
          Our <TitleSpan>Partners</TitleSpan>
        </Title>
        <Description>
          Success is built on strong partnerships that foster innovation,
          growth, and shared value
        </Description>
      </TextContainer>
      <CardContainer>
        {partners.map(({ id, title, imageUrl }) => (
          <Card key={id} src={imageUrl} title={title} />
        ))}
      </CardContainer>
      <BgBottom />
    </Container>
  );
};

export default Partners;

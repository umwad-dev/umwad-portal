import React from "react";
import {
  Container,
  LearnMoreArrow,
  LearnMoreText,
} from "./LearnMoreButton.styles";
import ArrowIcon from "../../assets/components/arrow.webp";

const LearnMoreButton = ({ name = "Learn More", onClick }) => {
  return (
    <Container onClick={onClick}>
      <LearnMoreText>{name}</LearnMoreText>
      <LearnMoreArrow alt="arrow" src={ArrowIcon} />
    </Container>
  );
};

export default LearnMoreButton;

import React from "react";
import { PrimaryButton } from "../../../../components";
import { goToRegistrationPage } from "../../../../utils/redirections";
import {
  ButtonContainer,
  Container,
  Description,
  Title,
} from "./LowerFooter.styles";

const LowerFooter = () => {
  return (
    <Container>
      <Title>Looking to grow your startup?</Title>
      <Description>
        Discover the region's vibrant startup community and register now on
        Western Visayas Startup Portal!
      </Description>
      <ButtonContainer>
        <PrimaryButton
          fontWeight={400}
          name="REGISTER NOW"
          onClick={goToRegistrationPage}
        />
      </ButtonContainer>
    </Container>
  );
};

export default LowerFooter;

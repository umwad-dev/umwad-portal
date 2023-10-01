import React from "react";
import { Container, MainContainer } from "./Accelerator.styles";
import Section from "./components/section/Section";

const Accelerator = ({ startupDetails }) => {
  return (
    <MainContainer>
      <Container>
        <Section
          tbi={startupDetails && startupDetails.accelerator}
          title="Accelerated by"
        />
      </Container>
    </MainContainer>
  );
};

export default Accelerator;

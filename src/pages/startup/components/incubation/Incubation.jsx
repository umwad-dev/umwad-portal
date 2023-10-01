import React from "react";
import { Container, MainContainer } from "./Incubation.styles";
import Section from "./components/section/Section";

const Incubation = ({ startupDetails }) => {
  return (
    <MainContainer>
      <Container>
        <Section
          tbi={startupDetails && startupDetails.tbi}
          title="Incubated by"
        />
      </Container>
    </MainContainer>
  );
};

export default Incubation;

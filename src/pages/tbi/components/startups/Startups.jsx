import React from "react";
import { LearnMoreButton, StartupCard } from "../../../../components";
import {
  Container,
  LearnMoreContainer,
  StartupContainer,
  StartupCount,
  StartupInfoContainer,
  StartupText,
} from "./Startups.styles";

const Startups = ({ count, setOpen, startups }) => {
  return (
    <Container>
      <StartupInfoContainer>
        <StartupCount>{count}</StartupCount>
        <StartupText>Startups Incubated</StartupText>
        <LearnMoreContainer>
          <LearnMoreButton name="View All" onClick={() => setOpen(true)} />
        </LearnMoreContainer>
      </StartupInfoContainer>
      <StartupContainer>
        {startups
          .slice(2)
          .filter((startup) => startup.validated)
          .map(({ uid, businessName, description, logoUrl, slug }) => (
            <StartupCard
              key={uid}
              description={description}
              logo={logoUrl}
              slug={slug}
              title={businessName}
            />
          ))}
      </StartupContainer>
    </Container>
  );
};

export default Startups;

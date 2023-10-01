import React from "react";
import { LearnMoreButton } from "../../../../components";
import { goToStartupPage } from "../../../../utils/redirections";
import {
  Container,
  Description,
  InnerContainer,
  LearnMoreContainer,
  Subtitle,
  Title,
  TitleSpan,
} from "./StartupCommunity.styles";

const StartupCommunity = () => {
  return (
    <Container>
      <InnerContainer>
        <TitleSpan>
          Startup <Title>Community</Title>
        </TitleSpan>
        <Subtitle>Discover the culture and be part our ecosystem</Subtitle>
        <Description>
          Located in the heart of the Philippines, Western Visayas is accessible
          to all parts of the country. We have a diverse international
          community, making innovation a core part of our identity. Our approach
          to fostering innovation is grassroots, and we strive to cultivate
          partnerships and policies that enable startups to flourish.
        </Description>
        <Description>
          At Startup Western Visayas, your success is our success. We are
          dedicated to creating an environment that helps businesses grow and
          thrive. Whether you are a local entrepreneur or an international
          startup looking to establish a foothold in the Philippines, we are
          here to support you. Join our vibrant community today and take your
          business to new heights.
        </Description>
        <LearnMoreContainer>
          <LearnMoreButton onClick={goToStartupPage} />
        </LearnMoreContainer>
      </InnerContainer>
    </Container>
  );
};

export default StartupCommunity;

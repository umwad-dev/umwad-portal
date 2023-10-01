import React from "react";
import {
  AboutImg,
  CenterContainer,
  Container,
  Description,
  DescriptionContainer,
  InnerContainer,
  LearnMoreButtonContainer,
  Title,
  TitleSpan,
} from "./About.styles";
import AboutProfileImg from "../../../../assets/about/about-img.webp";
import { LearnMoreButton } from "../../../../components";

const About = () => {
  return (
    <Container>
      <InnerContainer>
        <Title>
          You need <TitleSpan>a home for your Startup </TitleSpan>in the
          country. We're here to make sure it succeeds.
        </Title>
        <CenterContainer>
          <AboutImg alt="about" src={AboutProfileImg} />
          <DescriptionContainer>
            <Description>
              Startup Western Visayas is uniquely positioned to provide support
              to startups looking to establish themselves in the region. We
              offer a comprehensive range of services that cover every aspect of
              the startup journey, from ideation and investment to validation,
              introduction, growth, and maturity.
            </Description>
            <Description>
              Our team of dedicated support staff is on hand to assist you at
              every step of the way, providing guidance and expertise to help
              you navigate the challenges of starting and growing a successful
              business in Western Visayas.
            </Description>
          </DescriptionContainer>
        </CenterContainer>
        <LearnMoreButtonContainer>
          <LearnMoreButton />
        </LearnMoreButtonContainer>
      </InnerContainer>
    </Container>
  );
};

export default About;

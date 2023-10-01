import React from "react";
import ServiceCard from "./components/service-card/ServiceCard";
import {
  Container,
  Description,
  Heading,
  HeadingSpan,
  MainContainer,
  ServicesContainer,
} from "./Services.styles";

const Services = ({ services }) => {
  return (
    <MainContainer>
      <Container>
        <Heading>
          Our <HeadingSpan>Services</HeadingSpan>
        </Heading>
        <Description>
          Transforming ideas into reality with our unmatched suite of services
          designed to launch and scale startups.
        </Description>
        <ServicesContainer>
          {services?.map(({ description, title }, idx) => (
            <ServiceCard key={idx} description={description} title={title} />
          ))}
        </ServicesContainer>
      </Container>
    </MainContainer>
  );
};

export default Services;

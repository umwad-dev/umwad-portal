import React from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import ServiceCard from "./components/service-card/ServiceCard";
import {
  ArrowContainer,
  CarouselContainer,
  Container,
  Description,
  Heading,
  HeadingSpan,
  MainServicesContainer,
  ServicesContainer,
} from "./Services.styles";

const Services = ({ services }) => {
  const slideLeft = () => {
    const slider = document.getElementById("tbiServicesSlider");

    slider.scrollLeft = slider.scrollLeft - 200;
  };

  const slideRight = () => {
    const slider = document.getElementById("tbiServicesSlider");

    slider.scrollLeft = slider.scrollLeft + 200;
  };

  return (
    <Container>
      <Heading>
        Our <HeadingSpan>Services</HeadingSpan>
      </Heading>
      <Description>
        Transforming ideas into reality with our unmatched suite of services
        designed to launch and scale startups.
      </Description>
      <CarouselContainer>
        <ArrowContainer>
          <LeftOutlined onClick={slideLeft} size={100} />
        </ArrowContainer>
        <MainServicesContainer id="tbiServicesSlider">
          <ServicesContainer>
            {services?.map(({ description, title }, idx) => (
              <ServiceCard key={idx} description={description} title={title} />
            ))}
          </ServicesContainer>
        </MainServicesContainer>
        <ArrowContainer>
          <RightOutlined onClick={slideRight} size={100} />
        </ArrowContainer>
      </CarouselContainer>
    </Container>
  );
};

export default Services;

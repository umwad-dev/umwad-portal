import React from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { ProgramCard } from "../../../../components";
import {
  ArrowContainer,
  CarouselContainer,
  Container,
  Description,
  Heading,
  HeadingSpan,
  MainProgramsContainer,
  ProgramsContainer,
} from "./Programs.styles";

const Programs = ({ programs }) => {
  const slideLeft = () => {
    const slider = document.getElementById("tbiProgramSlider");

    slider.scrollLeft = slider.scrollLeft - 200;
  };

  const slideRight = () => {
    const slider = document.getElementById("tbiProgramSlider");

    slider.scrollLeft = slider.scrollLeft + 200;
  };

  return (
    <Container>
      <Heading>
        Our <HeadingSpan>Programs</HeadingSpan>
      </Heading>
      <Description>
        Transforming ideas into reality with our unmatched suite of programs
        designed to launch and scale startups.
      </Description>
      <CarouselContainer>
        <ArrowContainer>
          <LeftOutlined onClick={slideLeft} size={100} />
        </ArrowContainer>
        <MainProgramsContainer id="tbiProgramSlider">
          <ProgramsContainer>
            {programs?.map(
              ({ bannerUrl, createdAt, description, slug, title }, idx) => (
                <ProgramCard
                  key={idx}
                  bannerUrl={bannerUrl}
                  createdAt={createdAt}
                  description={description}
                  slug={slug}
                  title={title}
                />
              )
            )}
          </ProgramsContainer>
        </MainProgramsContainer>
        <ArrowContainer>
          <RightOutlined onClick={slideRight} size={100} />
        </ArrowContainer>
      </CarouselContainer>
    </Container>
  );
};

export default Programs;

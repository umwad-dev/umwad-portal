import React from "react";
import { Card, Slider } from "./components";
import { Container } from "./StoriesCarousel.styles";
import FeatureImg from "../../assets/stories/feature.webp";
import { goToSingleStoryPage } from "../../utils/redirections";

const StoriesCarousel = () => {
  return (
    <Container>
      <Card
        description="The startup landscape has always been a challenging terrain to navigate. Entrepreneurs must overcome a range of obstacles, from funding issues to regulatory hurdles, in order to turn their ideas into ..."
        featuredImg={FeatureImg}
        onClick={goToSingleStoryPage}
        time="10 mins ago"
        title="How Technology Business Incubators are Revolutionizing 
        the Startup Ecosystem"
      />
      <Slider />
    </Container>
  );
};

export default StoriesCarousel;

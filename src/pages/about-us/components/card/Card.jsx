import React from "react";
import { CardContainer, Container, Img, Text } from "./Card.styles";
import DemoImg from "../../../../assets/about-us/demo.webp";
import DevelopmentImg from "../../../../assets/about-us/development.webp";
import EcosystemImg from "../../../../assets/about-us/ecosystem.webp";
import HandshakeImg from "../../../../assets/about-us/handshake.webp";
import MegaphoneImg from "../../../../assets/about-us/megaphone.webp";
import UpskillImg from "../../../../assets/about-us/upskill.webp";

const CardComponent = ({ src, text }) => {
  return (
    <Container>
      <Img alt="support image" src={src} />
      <Text>{text}</Text>
    </Container>
  );
};

const Card = () => {
  return (
    <CardContainer>
      <CardComponent
        src={EcosystemImg}
        text="Regional Startup Ecosystem Consortium."
      />
      <CardComponent
        src={DevelopmentImg}
        text="Establish a Regional Startup Development Roadmap."
      />
      <CardComponent
        src={MegaphoneImg}
        text="Mentorship programs to increase fundablity of startups."
      />
      <CardComponent
        src={HandshakeImg}
        text="Promote the Startup programs of PCIEERD/DOST and other available government related programs and opportunities."
      />
      <CardComponent
        src={DemoImg}
        text="Secure a joint regional development council (RDC) resolution."
      />
      <CardComponent
        src={UpskillImg}
        text="Upskill Startups and Startup Enablers."
      />
    </CardContainer>
  );
};

export default Card;

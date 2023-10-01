import React, { Fragment } from "react";
import { Footer, Navbar } from "../../components";
import {
  AboutImg,
  BottomContainer,
  BottomImgDesktop,
  BottomImgMobile,
  BottomImgTablet,
  BottomTitle,
  HeaderContainer,
  HeaderWrapper,
  MidContainer,
  MidMainContainer,
  MidText,
  Text,
  TextBold,
  Title,
  TitleSpan,
} from "./AboutUs.styles";
import Card from "./components/card/Card";
import AboutPhoto from "../../assets/about-us/about-logo.webp";
import OrgMobile from "../../assets/about-us/org-mobile.webp";
import OrgTablet from "../../assets/about-us/org-tablet.webp";
import OrgDesktop from "../../assets/about-us/org-desktop.webp";

const AboutUsPage = () => {
  return (
    <Fragment>
      <Navbar />
      <HeaderContainer>
        <AboutImg alt="about" src={AboutPhoto} />
        <HeaderWrapper>
          <Text>About Us</Text>
          <TextBold>
            To build and formalize a Regional Startup Ecosystem Consortium on
            order to boost the startup ecosystem
          </TextBold>
          <Text>
            Unified Movement in Western Visayas to Accelerate Startup and
            SpinOff Development
          </Text>
        </HeaderWrapper>
      </HeaderContainer>
      <MidMainContainer>
        <MidContainer>
          <Title>
            <TitleSpan>Who </TitleSpan>we are
          </Title>
          <MidText>
            UMWAD Western Visayas is a regional ecosystem of all startups in
            Region VI that use technology to solve problems and build
            sustainable business that will address societal concerns while also
            contributing to Western Visayas' ecnomy and growth.
          </MidText>
          <Card />
        </MidContainer>
      </MidMainContainer>
      <BottomContainer>
        <BottomTitle>Organizational Structure</BottomTitle>
        <BottomImgMobile alt="organizational chart" src={OrgMobile} />
        <BottomImgTablet alt="organizational chart" src={OrgTablet} />
        <BottomImgDesktop alt="organizational chart" src={OrgDesktop} />
      </BottomContainer>
      <Footer />
    </Fragment>
  );
};

export default AboutUsPage;

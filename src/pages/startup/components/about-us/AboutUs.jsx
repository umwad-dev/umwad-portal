import React from "react";
import dompurify from "dompurify";
import {
  AboutUsImg,
  AboutUsImgContainer,
  BgBottom,
  Container,
  Description,
  MainContainer,
  PhotoContainer,
  SideContainer,
  Title,
  TitleSpan,
} from "./AboutUs.styles";

const AboutUs = ({ aboutUs }) => {
  const sanitizer = dompurify.sanitize;

  return (
    <MainContainer>
      <Container>
        <SideContainer>
          <Title>
            <TitleSpan>About</TitleSpan> Us
          </Title>
          <Description>
            <div
              dangerouslySetInnerHTML={{
                __html: aboutUs ? sanitizer(aboutUs.description) : null,
              }}
            />
          </Description>
        </SideContainer>
        <PhotoContainer>
          <AboutUsImgContainer>
            <AboutUsImg
              alt="about us"
              src={aboutUs ? aboutUs.firstImgUrl : null}
            />
          </AboutUsImgContainer>
          <AboutUsImgContainer>
            <AboutUsImg
              alt="about us"
              src={aboutUs ? aboutUs.secondImgUrl : null}
            />
          </AboutUsImgContainer>
        </PhotoContainer>
      </Container>
      <BgBottom />
    </MainContainer>
  );
};

export default AboutUs;

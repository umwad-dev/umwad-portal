import React from "react";
import {
  Container,
  Description,
  PartnerImg,
  PartnerImgWrapper,
  PartnersWrapper,
  Title,
  TitleSpan,
} from "./Partners.styles";
import DictImg from "../../../../assets/partners/dict.webp";
import DostImg from "../../../../assets/partners/dost.webp";
import DtiImg from "../../../../assets/partners/dti.webp";
import PpkpImg from "../../../../assets/partners/ppkp.webp";

const Partners = () => {
  return (
    <Container>
      <Title>
        <TitleSpan>Our</TitleSpan> Partners
      </Title>
      <Description>
        Together we share our commitment to empowering startups and
        entrepreneurs in the region.
      </Description>
      <PartnersWrapper>
        <PartnerImgWrapper>
          <PartnerImg alt="partners logo" src={DostImg} />
        </PartnerImgWrapper>
        <PartnerImgWrapper>
          <PartnerImg alt="partners logo" src={PpkpImg} />
        </PartnerImgWrapper>
        <PartnerImgWrapper>
          <PartnerImg alt="partners logo" src={DictImg} />
        </PartnerImgWrapper>
        <PartnerImgWrapper>
          <PartnerImg alt="partners logo" src={DtiImg} />
        </PartnerImgWrapper>
      </PartnersWrapper>
    </Container>
  );
};

export default Partners;

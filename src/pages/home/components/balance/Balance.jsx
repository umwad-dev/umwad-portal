import React from "react";
import {
  BalanceImg,
  CenterContainer,
  Container,
  Description,
  DescriptionContainer,
  InnerContainer,
  // LearnMoreButtonContainer,
  Subtitle,
  Title,
  TitleSpan,
} from "./Balance.styles";
import BalanceProfileImg from "../../../../assets/balance/balance-img.webp";
// import { LearnMoreButton } from "../../../../components";

const Balance = () => {
  return (
    <Container>
      <InnerContainer>
        <Subtitle>Success while having a</Subtitle>
        <Title>
          <TitleSpan>Work & Life</TitleSpan> Balance
        </Title>
        <CenterContainer>
          <BalanceImg alt="balance" src={BalanceProfileImg} />
          <DescriptionContainer>
            <Description>
              Having a work-life balance while working in Western Visayas means
              finding a way to enjoy both your professional and personal life
              without compromising one or the other. Western Visayas is known
              for its beautiful landscapes, vibrant culture, and rich culinary
              heritage, making it an ideal place for those who value work-life
              balance.
            </Description>
            <Description>
              One of the best ways to achieve work-life balance in Western
              Visayas is by taking advantage of the various outdoor activities
              available in the region. Western Visayas is also known for its
              delectable food offerings. Whether you're craving for seafood,
              local delicacies, or international cuisine, the region has a lot
              to offer. You can explore the different food markets, food halls,
              and restaurants to discover new flavors and dishes.
            </Description>
          </DescriptionContainer>
        </CenterContainer>
        {/* <LearnMoreButtonContainer>
          <LearnMoreButton />
        </LearnMoreButtonContainer> */}
      </InnerContainer>
    </Container>
  );
};

export default Balance;

import React, { useState } from "react";
import { PrimaryButton, SearchInput } from "../../../../components";
import {
  BottomContainer,
  ButtonContainer,
  Container,
  InputContainer,
  LeftContainer,
  RightContainer,
  Subtitle,
  TileContainer,
  TileImageOne,
  TileImageThree,
  TileImageTwo,
  Title,
  WelcomeText,
} from "./Headline.styles";
import HeadlineOne from "../../../../assets/home/home-one.webp";
import HeadlineTwo from "../../../../assets/home/home-two.webp";
import HeadlineThree from "../../../../assets/home/home-three.webp";
import { goToStartupPage } from "../../../../utils/redirections";
import { useNotification } from "../../../../hooks";
import { useNavigate } from "react-router-dom";

const Headline = () => {
  const [searchText, setSearchText] = useState("");

  const navigate = useNavigate();
  const { contextHolder, openNotification } = useNotification();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (!searchText) {
        return openNotification({
          isSuccess: false,
          message: "Search text is required.",
        });
      } else {
        return navigate(`/search?s=${searchText}`);
      }
    }
  };

  return (
    <Container>
      {contextHolder}
      <LeftContainer>
        <WelcomeText>Welcome to Startup Western Visayas</WelcomeText>
        <Title>Where Innovation Meets Opportunity</Title>
        <Subtitle>
          From startup support to acceleration, mentoring, and growth guidance.
          A partner for your success.
        </Subtitle>
        <BottomContainer>
          <ButtonContainer>
            <PrimaryButton
              fontWeight={400}
              name="Get To Know Our Startups"
              onClick={goToStartupPage}
            />
          </ButtonContainer>
          <InputContainer>
            <SearchInput
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={handleKeyDown}
              required={true}
              value={searchText}
            />
          </InputContainer>
        </BottomContainer>
      </LeftContainer>
      <RightContainer>
        <TileContainer>
          <TileImageOne alt="Tile One" src={HeadlineOne} />
          <TileImageTwo alt="Tile Two" src={HeadlineTwo} />
          <TileImageThree alt="Tile Three" src={HeadlineThree} />
        </TileContainer>
      </RightContainer>
    </Container>
  );
};

export default Headline;

import React from "react";
import Avatar from "antd/es/avatar/avatar";
import {
  AccountContainer,
  Container,
  CountContainer,
  GenderContainer,
  GenderCount,
  GenderText,
  Heading,
  Line,
  Name,
  NumberContainer,
  Position,
  PositionContainer,
  ProfileContainer,
} from "./AccountCard.styles";

const AccountCard = ({ name, imageUrl, male, female }) => {
  return (
    <Container>
      <ProfileContainer>
        <Heading>Associated Account</Heading>
        <Line />
        <AccountContainer>
          <Avatar>{name ? name.charAt(0).toUpperCase() : "AA"}</Avatar>
          <PositionContainer>
            <Name>{name}</Name>
            <Position>Owner</Position>
          </PositionContainer>
        </AccountContainer>
      </ProfileContainer>
      <CountContainer>
        <Heading>Number of Employees</Heading>
        <Line />
        <NumberContainer>
          <GenderContainer>
            <GenderText>male:</GenderText>
            <GenderCount>{male}</GenderCount>
          </GenderContainer>
          <GenderContainer>
            <GenderText>female:</GenderText>
            <GenderCount>{female}</GenderCount>
          </GenderContainer>
        </NumberContainer>
      </CountContainer>
    </Container>
  );
};

export default AccountCard;

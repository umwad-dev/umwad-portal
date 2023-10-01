import React from "react";
import Avatar from "antd/es/avatar/avatar";
import {
  AccountContainer,
  Container,
  Heading,
  Line,
  Name,
  Position,
  PositionContainer,
  ProfileContainer,
} from "./AccountCard.styles";

const AccountCard = ({ name }) => {
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
    </Container>
  );
};

export default AccountCard;

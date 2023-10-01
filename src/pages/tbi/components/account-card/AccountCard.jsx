import React from "react";
import Avatar from "antd/es/avatar/avatar";
import {
  AccountContainer,
  Container,
  Heading,
  Line,
  Name,
  PositionContainer,
  ProfileContainer,
} from "./AccountCard.styles";

const AccountCard = ({ tbiDetails }) => {
  return (
    <Container>
      <ProfileContainer>
        <Heading>Affiliated University</Heading>
        <Line />
        <AccountContainer>
          {tbiDetails && (
            <Avatar>
              {tbiDetails.universityAffiliated
                ? tbiDetails.universityAffiliated?.charAt(0).toUpperCase()
                : "UI"}
            </Avatar>
          )}
          <PositionContainer>
            <Name>{tbiDetails && tbiDetails.universityAffiliated}</Name>
          </PositionContainer>
        </AccountContainer>
      </ProfileContainer>
      <ProfileContainer>
        <Heading>Associated Account</Heading>
        <Line />
        <AccountContainer>
          {tbiDetails && (
            <Avatar>
              {tbiDetails &&
                tbiDetails.accountAssociated?.charAt(0).toUpperCase()}
            </Avatar>
          )}
          <PositionContainer>
            <Name>{tbiDetails && tbiDetails.accountAssociated}</Name>
          </PositionContainer>
        </AccountContainer>
      </ProfileContainer>
    </Container>
  );
};

export default AccountCard;

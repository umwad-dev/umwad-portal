import React, { Fragment } from "react";
import { Footer, Navbar } from "../../components";
import { goToHomePage } from "../../utils/redirections";
import { Container, Description, HomeButton, Title } from "./FourOhFour.styles";

const FourOhFourPage = () => {
  return (
    <Fragment>
      <Navbar color="black" />
      <Container>
        <Title>404</Title>
        <Description>Oops! Looks like we've lost our way.</Description>
        <HomeButton onClick={goToHomePage}>Go Back to Homepage</HomeButton>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default FourOhFourPage;

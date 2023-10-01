import React from "react";
import Tooltip from "antd/es/tooltip";
import { Container, Logo } from "./Card.styles";

const Card = ({ src, title }) => {
  return (
    <Tooltip arrow title={title} placement="top">
      <Container>
        <Logo alt="logo" src={src} />
      </Container>
    </Tooltip>
  );
};

export default Card;

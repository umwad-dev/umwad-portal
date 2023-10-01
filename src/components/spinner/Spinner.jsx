import React from "react";
import Spin from "antd/es/spin";
import { Container } from "./Spinner.styles";

const Spinner = () => {
  return (
    <Container>
      <Spin size="large" />
    </Container>
  );
};

export default Spinner;

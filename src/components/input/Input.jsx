import React from "react";
import { Container, Label, StyledInput } from "./Input.styles";

const Input = ({ labelName, ...props }) => {
  return (
    <Container>
      <Label>{labelName}</Label>
      <StyledInput
        autoComplete="true"
        {...props}
        placeholder={`Enter ${labelName}`}
      />
    </Container>
  );
};

export default Input;

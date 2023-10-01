import React from "react";
import { PrimaryButtonContainer } from "./PrimaryButton.styles";

const PrimaryButton = ({ fontWeight, name, ...props }) => {
  return (
    <PrimaryButtonContainer fontWeight={fontWeight} {...props}>
      {name}
    </PrimaryButtonContainer>
  );
};

export default PrimaryButton;

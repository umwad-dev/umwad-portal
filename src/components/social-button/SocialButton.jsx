import React from "react";
import { SocialButtonContainer, SocialIcon } from "./SocialButton.styles";

const SocialButton = ({ icon, name, ...props }) => {
  return (
    <SocialButtonContainer {...props}>
      <SocialIcon alt={name} src={icon} />
      {name}
    </SocialButtonContainer>
  );
};

export default SocialButton;

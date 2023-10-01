import React, { useState } from "react";
import {
  AvatarContainer,
  Container,
  StyledAvatar,
  Title,
  TooltipLower,
  TooltipUpper,
} from "./Section.styles";

const Section = ({ tbi, title }) => {
  const [onHover, setOnHover] = useState(false);

  return (
    <Container>
      <Title>{title}</Title>
      <AvatarContainer
        onHover={onHover}
        onMouseEnter={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
      >
        <div className="tooltip-container">
          <TooltipUpper>Accelerated in</TooltipUpper>
          <TooltipLower>{tbi?.name}</TooltipLower>
        </div>
        {tbi?.logoUrl ? (
          <StyledAvatar src={tbi.logoUrl} />
        ) : (
          <StyledAvatar>{tbi?.name.charAt(0).toUpperCase()}</StyledAvatar>
        )}
      </AvatarContainer>
    </Container>
  );
};

export default Section;

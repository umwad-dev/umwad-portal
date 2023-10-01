import React from "react";
import { StartupCard } from "../../../../components";
import { Container, StyledModal } from "./StartupModal.styles";

const StartupModal = ({ open, setOpen, startups }) => {
  return (
    <StyledModal footer={null} open={open} onCancel={() => setOpen(false)}>
      <Container>
        {startups
          ?.filter((startup) => startup.validated)
          .map(({ uid, businessName, description, logoUrl, slug }) => (
            <StartupCard
              key={uid}
              description={description}
              logo={logoUrl}
              slug={slug}
              title={businessName}
            />
          ))}
      </Container>
    </StyledModal>
  );
};

export default StartupModal;

import React from "react";
import { OtherFacilities, Startups, TBI } from "./components";
// import { Analytics } from "./components";
import { Container } from "./Dashboard.styles";

const Dashboard = () => {
  return (
    <Container>
      <TBI />
      <Startups />
      <OtherFacilities />
    </Container>
  );
};

export default Dashboard;

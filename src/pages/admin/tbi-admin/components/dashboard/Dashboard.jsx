import React from "react";
import { Container } from "./Dashboard.styles";
import Startups from "./components/startups/Startups";

const Dashboard = () => {
  return (
    <Container>
      <Startups />
    </Container>
  );
};

export default Dashboard;

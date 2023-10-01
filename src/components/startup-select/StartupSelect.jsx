import React from "react";
import { StyledSelect } from "./StartupSelect.styles";

const StartupSelect = ({ setFilterType }) => {
  return (
    <StyledSelect
      defaultValue="All Startups"
      onChange={(e) => setFilterType(e.target.value)}
    >
      <option value="Newest">Newest</option>
      <option value="All Startups">All Startups</option>
    </StyledSelect>
  );
};

export default StartupSelect;

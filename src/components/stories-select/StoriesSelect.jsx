import React from "react";
import { StyledSelect } from "./StoriesSelect.styles";

const StoriesSelect = ({ setFilterType }) => {
  return (
    <StyledSelect onChange={(e) => setFilterType(e.target.value)}>
      <option value="All">All</option>
      <option value="Newest">Newest</option>
    </StyledSelect>
  );
};

export default StoriesSelect;

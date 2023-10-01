import React from "react";
import { StyledSelect } from "./DownloadablesSelect.styles";

const DownloadablesSelect = () => {
  return (
    <StyledSelect defaultValue="aToZ">
      <option value="aToZ">A to Z</option>
    </StyledSelect>
  );
};

export default DownloadablesSelect;

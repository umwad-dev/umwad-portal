import React from "react";
import { StyledSelect } from "./TBISelect.styles";

const TBISelect = ({ provinces, setProvince }) => {
  return (
    <StyledSelect
      defaultValue={provinces[0]}
      onChange={(e) => setProvince(e.target.value)}
    >
      {provinces.map((province, idx) => (
        <option key={idx} value={province}>
          {province}
        </option>
      ))}
    </StyledSelect>
  );
};

export default TBISelect;

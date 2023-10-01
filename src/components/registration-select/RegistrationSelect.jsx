import React from "react";
import { StyledSelect } from "./RegistrationSelect.styles";

const RegistrationSelect = ({ onChange, ...props }) => {
  return (
    <StyledSelect
      defaultValue={0}
      onChange={(e) => onChange(e.target.value)}
      {...props}
    >
      <option value={0}>Select type</option>
      <option value={1}>Startup</option>
      <option value={2}>Technology Business Incubator (TBI)</option>
      <option value={3}>Accelerator</option>
      <option value={4}>iHub</option>
      <option value={5}>Co-working Spaces</option>
      <option value={6}>Fab-Labs</option>
      <option value={7}>Food Innovation Centers</option>
    </StyledSelect>
  );
};

export default RegistrationSelect;

import React from "react";
import { StyledGroup, StyledInput, StyledLabel } from "./form-input.styles";
const FormInput = ({ handleChange, label, ...props }) => (

  <StyledGroup>
    <StyledInput onChange={handleChange} {...props} />
    {label && (
      <StyledLabel length={props.value.length} type={props.type}>{label}</StyledLabel>
    )}
  </StyledGroup>
);

export default FormInput;

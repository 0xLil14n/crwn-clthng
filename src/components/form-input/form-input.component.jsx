import React from 'react';
import { StyledGroup, StyledInput, StyledLabel } from './form-input.styles';

const FormInput = ({ handleChange, label, ...props }: any) => (
  <StyledGroup>
    <StyledInput onChange={handleChange} {...props} />
    {label && (
      <StyledLabel length={props.value.length} type={props.type}>
        {label.slice(0, 1).toUpperCase() + label.slice(1)}
      </StyledLabel>
    )}
  </StyledGroup>
);

export default FormInput;

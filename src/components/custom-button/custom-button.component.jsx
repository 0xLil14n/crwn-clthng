import React from 'react';
import { StyledButton } from './custom-button.styles';
const CustomButton = ({ children, isGoogleSignIn, ...props }: any) => (
  <StyledButton isGoogleSignIn={isGoogleSignIn} {...props}>
    {children}
  </StyledButton>
);

export default CustomButton;

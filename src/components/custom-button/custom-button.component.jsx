import React from "react";
import { StyledButton } from "./custom-button.styles";
const CustomButton = ({ children, isGoogleSignIn, ...props }) => (
  <StyledButton isGoogleSignIn={isGoogleSignIn} {...props}>{children}</StyledButton>
);

export default CustomButton;

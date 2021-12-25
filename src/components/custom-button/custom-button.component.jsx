import React from 'react';
import styled from 'styled-components';
const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  className,
  ...props
}: any) => (
  <StyledButton
    className={className}
    isGoogleSignIn={isGoogleSignIn}
    inverted={inverted}
    {...props}
  >
    {children}
  </StyledButton>
);

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
  ${({ isGoogleSignIn }) =>
    isGoogleSignIn
      ? ` 
    background-color: #4285f4;
    color: white;
    &: hover {
        background-color: #357ae8;
        border: none;
    }
  `
      : ''}
  ${({ inverted }) =>
    inverted
      ? `
        background-color:white; 
        color: black;
        border: 1px solid black;
        &:hover {
          background-color: black;
          color: white;
          border:none;
        }
      `
      : ''}
`;

export default CustomButton;

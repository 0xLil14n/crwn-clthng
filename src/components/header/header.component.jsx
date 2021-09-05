import React from "react";
import {
  StyledHeader,
  StyledOptionLink,
  StyledLink,
  StyledLogo,
  StyledOptions,
} from "./header.styles";
const Header = () => (
  <StyledHeader>
    <StyledLink to="/">
      <StyledLogo />
    </StyledLink>
    <StyledOptions>
      <StyledOptionLink to="/shop" >Shop</StyledOptionLink>
      <StyledOptionLink to="/contact" >Contact</StyledOptionLink>
    </StyledOptions>
  </StyledHeader>
);
export default Header;

import React from "react";
import {
  StyledHeader,
  StyledOptionLink,
  StyledLink,
  StyledLogo,
  StyledOptions,
  StyledOption,
} from "./header.styles";
import { auth } from "../../components/firebase/firebase.utils";
const Header = ({ currentUser }) => (
  <StyledHeader>
    <StyledLink to="/">
      <StyledLogo />
    </StyledLink>
    <StyledOptions>
      <StyledOptionLink to="/shop">Shop</StyledOptionLink>
      <StyledOptionLink to="/contact">Contact</StyledOptionLink>
      {currentUser ? (
        <StyledOption onClick={() => auth.signOut()}>Sign Out</StyledOption>
      ) : (
        <StyledOptionLink to="/signin">Sign In</StyledOptionLink>
      )}
    </StyledOptions>
  </StyledHeader>
);
export default Header;

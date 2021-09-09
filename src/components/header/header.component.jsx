import React from "react";
import {
  StyledHeader,
  StyledOptionLink,
  StyledLink,
  StyledLogo,
  StyledOptions,
} from "./header.styles";
import { auth } from "../../components/firebase/firebase.utils";
const Header = ({currentUser}) => (
  <StyledHeader>
    <StyledLink to="/">
      <StyledLogo />
    </StyledLink>
    <StyledOptions>
      <StyledOptionLink to="/shop">Shop</StyledOptionLink>
      <StyledOptionLink to="/contact">Contact</StyledOptionLink>
      {currentUser ? <div onClick={() => auth.signOut()}>Sign Out</div> :<StyledOptionLink to="/signin">Sign In</StyledOptionLink>}
    </StyledOptions>
  </StyledHeader>
);
export default Header;

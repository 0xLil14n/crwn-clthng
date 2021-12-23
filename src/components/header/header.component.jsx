import React from 'react';
import { connect } from 'react-redux';
import {
  StyledHeader,
  StyledOptionLink,
  StyledLink,
  StyledLogo,
  StyledOptions,
  StyledOption,
} from './header.styles';
import { auth } from '../../components/firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';

const Header = ({ currentUser }: any) => (
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
    <CartIcon />
  </StyledHeader>
);

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);

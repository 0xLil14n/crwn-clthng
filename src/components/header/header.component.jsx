import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
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

import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

const Header = ({ currentUser, hidden }: any) => (
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
      <CartIcon />
    </StyledOptions>
    {hidden ? null : <CartDropdown />}
  </StyledHeader>
);

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  hidden: selectCartHidden(state),
});

export default connect(mapStateToProps)(Header);

import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import SHOP_DATA from '../../pages/shop/shop.data';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';

const CartDropdown = ({ cartItems }) => {
  console.log('CARTITEM NAME:', cartItems[0]);
  return (
    <StyledCart>
      {cartItems.map((cartItem) => (
        <StyledCartItems key={cartItem.id} item={cartItem} />
      ))}
      <StyledButton>Checkout</StyledButton>
    </StyledCart>
  );
};

const StyledCart = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;
const StyledButton = styled(CustomButton)`
  margin-top: auto;
`;
const StyledCartItems = styled(CartItem)`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);

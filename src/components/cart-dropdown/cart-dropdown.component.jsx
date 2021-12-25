import React from 'react';
import styled from 'styled-components';
import SHOP_DATA from '../../pages/shop/shop.data';

import CustomButton from '../custom-button/custom-button.component';
const CartDropdown = () => {
  const cartItems = SHOP_DATA[0].items;
  const qty = 1;
  return (
    <StyledCart>
      {cartItems.map(({ id, ...cartItemProps }) => (
        <StyledCartItems key={id}>A</StyledCartItems>
      ))}
      asdf
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
const StyledCartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
export default CartDropdown;

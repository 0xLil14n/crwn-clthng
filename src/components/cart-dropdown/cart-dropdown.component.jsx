import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import SHOP_DATA from '../../pages/shop/shop.data';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItems } from '../../redux/cart/cart.selectors';

const CartDropdown = ({ cartItems, history, dispatch }) => {
  console.log('CARTITEM NAME:', cartItems[0]);
  return (
    <StyledCart>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <StyledCartItems key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMessage> Your Cart is Empty! </EmptyMessage>
      )}
      <StyledButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        Checkout
      </StyledButton>
    </StyledCart>
  );
};

const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;
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

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));

import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import styled from 'styled-components';

const CartIcon = ({ toggleCartHidden, itemCount }: any) => {
  return (
    <StyledCartIcon onClick={toggleCartHidden}>
      <StyledShoppingIcon>
        <ShoppingIcon />
      </StyledShoppingIcon>
      <StyledItemCount>{itemCount}</StyledItemCount>
    </StyledCartIcon>
  );
};

const StyledCartIcon = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const StyledShoppingIcon = styled.div`
  width: 24px;
  height: 24px;
`;
const StyledItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce((totalQty, item) => totalQty + item.quantity, 0),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

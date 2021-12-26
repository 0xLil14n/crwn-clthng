import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';
import styled from 'styled-components';

const CheckoutPage = ({ cartItems, total }) => (
  <StyledCheckoutPage>
    <CheckoutHeader>
      <HeaderBlock>
        <Name> Product</Name>
      </HeaderBlock>
      <HeaderBlock>
        <Name> Description</Name>
      </HeaderBlock>
      <HeaderBlock>
        <Name> Quantity</Name>
      </HeaderBlock>
      <HeaderBlock>
        <Name> Price</Name>
      </HeaderBlock>
      <HeaderBlock>
        <Name> Remove </Name>
      </HeaderBlock>
    </CheckoutHeader>
    {cartItems.map((cartItem) => cartItem.name)}
    <Total>
      <TotalPrice>Total: ${total}</TotalPrice>
    </Total>
  </StyledCheckoutPage>
);
const Total = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;
const TotalPrice = styled.span``;
const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;
const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;
const Name = styled.span``;
const StyledCheckoutPage = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);

// .total {
//   margin-top: 30px;
//   margin-left: auto;
//   font-size: 36px;
// }

import React from 'react';
import styled from 'styled-components';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <StyledCartItem>
    <StyledImage src={imageUrl} alt="item" />

    <ItemDetails>
      <Name>{name}</Name>
      <Price>
        {quantity} x {price}
      </Price>
    </ItemDetails>
  </StyledCartItem>
);
const StyledImage = styled.img`
  width: 30%;
`;
const Price = styled.span``;
const Name = styled.span`
  font-size: 16px;
`;
const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;
const StyledCartItem = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`;
export default CartItem;

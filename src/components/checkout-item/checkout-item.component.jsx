import React from 'react';
import styled from 'styled-components';

const CheckoutItem = ({ cartItem: { name, quantity, price, imageUrl } }) => (
  <StyledCheckoutItem>
    <ImageContainer>
      <img src={imageUrl} alt="item" />
    </ImageContainer>
    <Name>{name}</Name>
    <Quantity>{quantity}</Quantity>

    <Price>{price}</Price>
    <RemoveButton>&#10005;</RemoveButton>
  </StyledCheckoutItem>
);

const Name = styled.span``;
const Quantity = styled.span`
  padding-left: 20px;
`;
const Price = styled.span``;
const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const StyledCheckoutItem = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  ${Name}, ${Quantity},${Price} {
    width: 23%;
  }
`;
const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
export default CheckoutItem;

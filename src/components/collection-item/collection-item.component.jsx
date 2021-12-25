import React from 'react';
import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

const CollectionItem = ({ id, name, price, imageUrl }: any) => (
  <StyledCollectionItem>
    <StyledImage imageUrl={imageUrl} />
    <StyledCollectionFooter>
      <StyledName>{name}</StyledName>
      <StyledPrice>${price}</StyledPrice>
    </StyledCollectionFooter>
    <StyledButton inverted>ADD TO CART</StyledButton>
  </StyledCollectionItem>
);
const StyledButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
`;

const StyledCollectionFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;
const StyledPrice = styled.span`
  width: 10%;
`;
const StyledName = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;
const StyledImage = styled.div`
  height: 95%;
  width: 100%;
  background-image: url(${(props) => props.imageUrl});
  background-position: center;
  background-size: cover;
  margin-bottom: 5px;
`;

const StyledCollectionItem = styled.div`
  width: 22%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    ${StyledButton} {
      opacity: 0.85;
      display: flex;
    }
    ${StyledImage} {
      opacity: 0.8;
    }
  }
`;

export default CollectionItem;

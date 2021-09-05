import React from "react";
import {
  StyledCollectionItem,
  StyledImage,
  StyledCollectionFooter,
  StyledName,
  StyledPrice,
} from "./collection-item.styles";
const CollectionItem = ({ id, name, price, imageUrl }) => (
  <StyledCollectionItem>
    <StyledImage imageUrl={imageUrl} />
    <StyledCollectionFooter>
      <StyledName>{name}</StyledName>
      <StyledPrice>${price}</StyledPrice>
    </StyledCollectionFooter>
  </StyledCollectionItem>
);

export default CollectionItem;

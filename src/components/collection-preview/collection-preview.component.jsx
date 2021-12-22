import React from 'react';
import {
  StyledCollectionPreview,
  StyledPreview,
  StyledTitle,
} from './collection-preview.styles';
import CollectionItem from '../collection-item/collection-item.component';
const CollectionPreview = ({ title, items }: any) => {
  return (
    <StyledCollectionPreview>
      <StyledTitle>{title.toUpperCase()}</StyledTitle>
      <StyledPreview>
        {items
          .filter((item, idx) => idx < 4)
          .map(({ ...itemProps }) => (
            <CollectionItem {...itemProps} key={itemProps.id} />
          ))}
        {/* 
  POTENTIAL PROBLEM: 
      whenever this component gets rendered, this modification of array gets called every time 
    IF: array is very large
      OR: slow computer
    THERFORE: performance concern 
*/}
      </StyledPreview>
    </StyledCollectionPreview>
  );
};
export default CollectionPreview;

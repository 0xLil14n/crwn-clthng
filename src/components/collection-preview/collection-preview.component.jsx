import React from 'react';
import styled from 'styled-components';

import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }: any) => {
  return (
    <StyledCollectionPreview>
      <StyledTitle>{title.toUpperCase()}</StyledTitle>
      <StyledPreview>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem item={item} key={item.id} />
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

export const StyledPreview = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const StyledTitle = styled.h1`
  font-size: 28px !important;
  font-weight: bold !important;
`;
export const StyledCollectionPreview = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export default CollectionPreview;

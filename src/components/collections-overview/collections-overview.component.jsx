import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { selectCollections } from '../../redux/shop/shop.selectors';

const CollectionsOverview = ({ collections }) => (
  <StyledCollectionOverview>
    {collections.map(({ id, ...otherCollectionsProps }) => (
      <CollectionPreview key={id} {...otherCollectionsProps} />
    ))}
  </StyledCollectionOverview>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

const StyledCollectionOverview = styled.div`
  display: flex;
  flex-direction: column;
`;

export default connect(mapStateToProps)(CollectionsOverview);

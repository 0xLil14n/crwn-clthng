import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { StyledShopPage } from './shop.styles';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { selectCollections } from '../../redux/shop/shop.selectors';

const ShopPage = ({ collections }) => (
  <StyledShopPage>
    {collections.map(({ id, ...otherCollectionsProps }) => (
      <CollectionPreview key={id} {...otherCollectionsProps} />
    ))}
  </StyledShopPage>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(ShopPage);

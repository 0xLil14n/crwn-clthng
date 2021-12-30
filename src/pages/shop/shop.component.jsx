import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { StyledShopPage } from './shop.styles';
import { selectCollections } from '../../redux/shop/shop.selectors';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

const ShopPage = ({ collections }) => (
  <StyledShopPage>
    <CollectionsOverview />
  </StyledShopPage>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(ShopPage);

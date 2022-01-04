import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { StyledShopPage } from './shop.styles';
import { selectCollections } from '../../redux/shop/shop.selectors';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => (
  <StyledShopPage>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route
      exact
      path={`${match.path}/:collectionId`}
      component={CollectionPage}
    />
  </StyledShopPage>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(ShopPage);

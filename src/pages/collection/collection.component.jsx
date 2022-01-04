import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import collectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';

const CollectionPage = ({ match, collection }) => (
  <Category>
    <h2>
      {match.params.collectionId} Collection {collection[0]}
    </h2>
  </Category>
);

const Category = styled.div``;

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);

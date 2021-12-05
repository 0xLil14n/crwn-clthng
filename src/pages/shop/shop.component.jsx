import React from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { StyledShopPage } from "./shop.styles";
class ShopPage extends React.Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    collections.map(({id, ...otherCollectionsProps}) => (console.log('other props2: ', otherCollectionsProps.items)));
    return (
      <StyledShopPage>
        {collections.map(({ id, ...otherCollectionsProps }) => (
          <CollectionPreview key={id} {...otherCollectionsProps} />

        ))}
      </StyledShopPage>
    );
  }
}

export default ShopPage;

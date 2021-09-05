import logo from "./logo.svg";
import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import { StyledApp } from "./App.styles";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/header.component";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <StyledApp>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </StyledApp>
    );
  }
}

export default App;

import logo from "./logo.svg";
import React from "react";
import { connect } from "react-redux";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import { StyledApp } from "./App.styles";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {
  auth,
  createUserProfileDocument,
} from "./components/firebase/firebase.utils";
import { onSnapshot } from "firebase/firestore";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        this.setState({ currentUser: userRef });
        console.log(userRef);
        onSnapshot(userRef, (snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          }, () => {console.log('state change: ', this.state)});
        });
      } else {
        this.setState({ currentUser: userAuth });
        // userAuth is null, currentUser is null
      }
    });
  }

  componentWillUnmount() {
    console.log("unsubscribing");
    this.unsubscribeFromAuth();
    console.log("unsubscribed");
  }

  render() {
    return (
      <StyledApp>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </StyledApp>
    );
  }
}

export default connect()(App);

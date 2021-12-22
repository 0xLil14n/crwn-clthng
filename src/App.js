import React from 'react';
import { connect } from 'react-redux';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { StyledApp } from './App.styles';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {
  auth,
  createUserProfileDocument,
} from './components/firebase/firebase.utils';
import { onSnapshot } from 'firebase/firestore';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        console.log(userRef);
        onSnapshot(userRef, (snapShot) => {
          setCurrentUser(
            {
              id: snapShot.id,
              ...snapShot.data(),
            },
            () => {
              console.log('state change: ', this.state);
            }
          );
        });
      } else {
        setCurrentUser(userAuth);
        // userAuth is null, currentUser is null
      }
    });
  }

  componentWillUnmount() {
    console.log('unsubscribing');
    this.unsubscribeFromAuth();
    console.log('unsubscribed');
  }

  render() {
    return (
      <StyledApp>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </StyledApp>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

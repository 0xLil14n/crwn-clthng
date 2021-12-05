import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import { StyledSignInAndSignUp } from './sign-in-and-sign-up.style';
const SignInAndSignUpPage = () => (
  <StyledSignInAndSignUp>
    <SignIn />
    <SignUp />
  </StyledSignInAndSignUp>
);
export default SignInAndSignUpPage;

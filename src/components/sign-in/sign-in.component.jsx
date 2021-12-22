import React from 'react';
import { StyledSignIn, StyledButtonContainer } from './sign-in.style';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle, auth } from '../firebase/firebase.utils';
import { signInWithEmailAndPassword } from '@firebase/auth';

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    console.log('handling submit');
    const { email, password } = this.state;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      this.setState({ email: '', password: '' });
    } catch (e) {
      console.log('Error logging in: ', e);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const inputs = ['email', 'password'];
    return (
      <StyledSignIn>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            name="email"
            value={this.state.email}
            required={true}
            label="Email"
          />
          <FormInput
            name="password"
            type="password"
            handleChange={this.handleChange}
            value={this.state.password}
            required={true}
            label="Password"
          />
          <StyledButtonContainer>
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton isGoogleSignIn={true} onClick={signInWithGoogle}>
              Sign In With Google
            </CustomButton>
          </StyledButtonContainer>
        </form>
      </StyledSignIn>
    );
  }
}

export default SignIn;

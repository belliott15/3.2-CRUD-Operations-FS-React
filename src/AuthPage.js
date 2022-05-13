import React, { useState } from 'react';
import { signUp, getUser } from './services/fetch.utils';

export default function AuthPage({ setEmail, setToken }) {
    //set state
  const [signUpFormData, setSignUpFormData] = useState({
    email: '',
    password: '',
  });
  const [signInFormData, setSignInFormData] = useState({
    email: '',
    password: '',
  });

  async function handleSignUp(e){
    e.preventDeafault();
    await signUp(signUpFormData.email, signInFormData.password);

    const { access_token, user: { email } } = getUser();
    setEmail(email);
    setToken(access_token);
  }
  return (
    <div className='auth'>
      <h1>Welcome to Book-It</h1>
      <form> Sign Up!
        <label> Email
          <input type='email' required />
        </label>
        <label> Password
          <input />
        </label>
        <button>Sign Up</button>
      </form>
      <form> Sign In
        <label> Email
          <input type='email' required/>
        </label>
        <label> Password
          <input />
        </label>
        <button>Sign In</button>
      </form>
    </div>
  );
}

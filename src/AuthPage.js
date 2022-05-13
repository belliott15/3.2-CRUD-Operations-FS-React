import React, { useState } from 'react';
import { signUp, getUser, signIn } from './services/fetch.utils';

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
    e.preventDefault();
    await signUp(signUpFormData.email, signUpFormData.password);

    const { 
      access_token, 
      user: { 
        email 
      } 
    } = await getUser();
    
    setEmail(email);
    setToken(access_token);
  }

  async function handleSignIn(e){
    e.preventDefault();
    await signIn(signInFormData.email, signInFormData.password);

    const { 
      access_token, 
      user: { 
        email 
      } 
    } = await getUser();
    setEmail(email);
    setToken(access_token);
  }

  return (
    <div className='auth'>
      <h1>Welcome to Book-It</h1>
      <form onSubmit={handleSignUp}> Sign Up!
        <label> Email
          <input onChange={(e) => setSignUpFormData({
            email: e.target.value,
            password: signUpFormData.password,
          }) } type='email' required />
        </label>
        <label> Password
          <input onChange={(e) => setSignUpFormData({
            email: signUpFormData.email,
            password: e.target.value, 
          }) } type='password' required />
        </label>
        <button>Sign Up</button>
      </form>
      <form onSubmit={handleSignIn}> Sign In
        <label> Email
          <input onChange={(e) => setSignInFormData({
            email: e.target.value,
            password: signInFormData.password, 
          }) } type='email' required/>
        </label>
        <label> Password
          <input onChange={(e) => setSignInFormData({
            email: signInFormData.email,
            password: e.target.value, 
          }) } type='password' required/>
        </label>
        <button>Sign In</button>
      </form>
    </div>
  );
}

import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import { auth, provider } from './firebase';

function Login() {

  const signIn = () => {
    alert(
      'This app uses Firebase authentication so feel free to use your gmail account However; if you do not trust using your account details use: Email - demosubject369@gmail.com , Password - demo12345'
    );
    auth.signInWithPopup(provider)
    .catch((error) => alert(error.message));
  };

  return (
    <div className='login'>
      <div className='login__logo'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/5/56/IMessage_logo_%28Apple_Inc.%29.png'
          alt=''
        />
        <h1>imessage</h1>
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;

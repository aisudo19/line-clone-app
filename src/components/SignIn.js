import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase.js';
import { Button } from '@mui/material';

function SignIn() {
  function SignInWithGoogle(){
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  }

  return (
    <div>
      <Button onClick={SignInWithGoogle}>Googleでログインする</Button>
    </div>
  )
}

export default SignIn

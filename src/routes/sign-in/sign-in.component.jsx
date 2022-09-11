import { useEffect } from 'react'
import { getRedirectResult } from 'firebase/auth'
import React from 'react'
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
   }
    from '../../utils/firebase/firebase.utils'
import SignUpForm from '../../components/sign-up-form/sign-up-form.xomponent';
const SignIn = () => {

  
   
    
    const logGoogleUser = async ()=> {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
      //  console.log(response)
    }
    
  return (
    <div>
    <div>SignIn</div>
    <button onClick={logGoogleUser}> Sign in with Google</button>
    <SignUpForm/>
    </div>
  )
}

export default SignIn
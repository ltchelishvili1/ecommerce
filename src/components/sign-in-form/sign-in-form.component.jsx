import React from 'react'
import { useState } from 'react'
import FormInput from '../form-input/form-input.component'
import { signInWithYourEmailAndPassword } from '../../utils/firebase/firebase.utils'
import Button from '../button/button.component'
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
}
    from '../../utils/firebase/firebase.utils'
import './sign-in-form.styles.scss'
const defaultFormFields = {
    email: "",
    password: "",
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields;
    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
   
    }


    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user)
     
    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await signInWithYourEmailAndPassword(email, password)
            console.log(response)
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('Wrong Password')
                    break
                case 'auth/user-not-found':
                    alert("User not found")
                    break
                default: 
                  console.log('user log in  error', error)
            }

          
        }
    }
    return (
        <div className='sign-in-container'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput label='email' type="email" onChange={handleChange} name="email" value={email} required />
                <FormInput label='password' type="password" onChange={handleChange} name="password" value={password} required />
                <div className='buttons-container'>
                    <Button type='submit'>Log In</Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>Sign In With Google</Button>

                </div>

            </form>

        </div>
    )
}

export default SignInForm
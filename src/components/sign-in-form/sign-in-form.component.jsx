import React from 'react'
import { useState } from 'react'
import FormInput from '../form-input/form-input.component'
import { signInWithYourEmailAndPassword } from '../../utils/firebase/firebase.utils'
import Button,{BUTTON_TYPE_CLASSES} from '../button/button.component'
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
}
    from '../../utils/firebase/firebase.utils'
import { ButtonsContainer, SignInContainer } from './sign-in-form.styles'

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
        await signInWithGooglePopup();
       

    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await signInWithYourEmailAndPassword(email, password)
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
        <SignInContainer>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput label='email' type="email" onChange={handleChange} name="email" value={email} required />
                <FormInput label='password' type="password" onChange={handleChange} name="password" value={password} required />
                <ButtonsContainer>
                    <Button type='submit'>Log In</Button>
                    <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google Sign In</Button>

                </ButtonsContainer>

            </form>

        </SignInContainer>
    )
}

export default SignInForm
import React, { useRef } from 'react';
import { auth } from '../lib/config/firebase';
import '../styles/SignUpScreen.css';

export default function SignUpScreen() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (event) => {
        event.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).catch((error) => {
            alert(error.message);
        });
    }

    const signIn = (event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).catch((error) => {
            alert(error.message);
        });
    }

    return (
        <div className='signupScreen'>
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder='Email' type='email' />
                <input ref={passwordRef} placeholder='Password' type='password' />
                <button type='submit' onClick={signIn}>Sign In</button>

                <h4>
                    <span className='signupScreen_gray'>New to Netflix? </span>
                    <span className='signupScreen_link' onClick={register}>Sign Up now.</span>
                </h4>
            </form>
        </div>
    );
}

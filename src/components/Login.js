import React, { useRef, useState } from 'react'
import Header from './Header';
import Netflix_Banner from "../assets/images/movies-banner.jpg"
import { validateSignUpFormData, validateSignInFormData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../utils/firebase';
import { updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import USER_AVATAR from '../assets/images/movies-profile.png'

const Login = () => {

  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  const handleFormValidation = () => {
    console.log(email.current.value);
    console.log(password.current.value);
     
    const message = !isSignInForm ? validateSignUpFormData(fullName.current.value, email.current.value, password.current.value) : validateSignInFormData(email.current.value, password.current.value)
    setErrorMessage(message);

    if(!message){
       if(!isSignInForm){
        // SIGN UP LOGIC
         createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
           .then((userCredential) => {
             // Signed up 
             const user = userCredential.user;
             updateProfile(user, {
              displayName: fullName.current.value, photoURL: USER_AVATAR
            }).then(() => {
              const {uid, email, displayName, photoURL} = auth.currentUser;
              dispatch(addUser({uid : uid, email: email, displayName: displayName, photoUrl : photoURL}));
            }).catch((error) => {
             setErrorMessage(error.message);
            });
           })
           .catch((error) => {
             const errorCode = error.code;
             const errorMessage = error.message;
             // ..
             setErrorMessage(errorCode + "" + errorMessage);
           });

       } else {
        // SIGN IN LOGIC
         signInWithEmailAndPassword(auth, email.current.value, password.current.value)
           .then((userCredential) => {
             // Signed in 
             const user = userCredential.user;
             // ...
             console.log(user);
           })
           .catch((error) => {
             const errorCode = error.code;
             const errorMessage = error.message;
             setErrorMessage(errorCode + "" + errorMessage);
           });
       }
    }
  }

  return (
    <div className=''>
      <Header />
      <div className='absolute'>
        <img src={Netflix_Banner} alt="banner" className='w-screen h-screen'/>
      </div>
      <form onSubmit={(e) => e.preventDefault()} action="" className='w-3/12 p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-90'>

        <h2 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h2>

        {!isSignInForm && <input ref={fullName} type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700' />}

        <input ref={email} type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700' />
        <input ref={password} type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700' />

        <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>

        <button onClick={handleFormValidation}className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>

        <p className='p-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Movies? Sign Up Now" : "Already registered? Sign In Now"}</p>

      </form>
    </div>
  )
}

export default Login;

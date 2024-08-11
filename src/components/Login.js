import React, { useRef, useState } from 'react'
import Header from './Header';
import Netflix_Banner from "../assets/images/netflix-banner.jpg"
import { validateSignUpFormData, validateSignInFormData } from '../utils/validate';

const Login = () => {

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
  }

  return (
    <div className=''>
      <Header />
      <div className='absolute'>
        <img src={Netflix_Banner} alt="banner" />
      </div>
      <form onSubmit={(e) => e.preventDefault()} action="" className='w-3/12 p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>

        <h2 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h2>

        {!isSignInForm && <input ref={fullName} type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700' />}

        <input ref={email} type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700' />
        <input ref={password} type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700' />

        <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>

        <button onClick={handleFormValidation}className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>

        <p className='p-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>

      </form>
    </div>
  )
}

export default Login;

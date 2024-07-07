import React from 'react';
import Header from './Header';
import { useState,useRef } from 'react';
import { checkValidateData } from '../utils/validate';
import { createUserWithEmailAndPassword,  signInWithEmailAndPassword,updateProfile  } from "firebase/auth";
import { auth } from '../utils/firebase';
import { PHOTOURL } from '../utils/constant';

import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BACKGROUND_POSTER } from '../utils/constant';


const Login = () => {
 const [isSignInForm,setIsSignInForm] = useState(true)
 const [errorMessage,setErrorMessage] = useState()

 const dispatch = useDispatch()
 const email = useRef(null)
 const password = useRef(null)
 const name = useRef(null)

 const toggleSignInForm = ()=>{
    setIsSignInForm(!isSignInForm)
 }

const handelButtonClick = ()=>{
  const message = checkValidateData(email.current.value,password.current.value)

  setErrorMessage(message)
   
  if(message) return

  // singn in sign up
  if(!isSignInForm){
  // sign up logic 

  let a = "hahahahhahaha"
  let b = "hehehehe"

  
  
createUserWithEmailAndPassword(
  auth,
  email.current.value,
  password.current.value
  )
  .then((userCredential) => {
    const user = userCredential.user;
   
  // update user
  updateProfile(user, {
    displayName: name.current.value, photoURL: PHOTOURL
  }).then(() => {

    const { uid, email, displayName ,photoURL} = auth.currentUser;
    dispatch(addUser({ uid: uid, email: email, displayName: displayName,photoURL:photoURL }));
  
  }).catch((error) => {
    setErrorMessage(error.message)
  });

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    setErrorMessage(errorCode+"-"+errorMessage)

  });



  }else{
    // login logic

    signInWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  
 
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage)
  });

  }
  
}



  return (
    <div className="relative">
      <Header />
      <div className="absolute">
        <img
          src= {BACKGROUND_POSTER}
         
          className="w-full h-full md:h-full"
        />
      </div>
      <form onSubmit={(e)=>{
         e.preventDefault()
      }}
        action=""
        className="absolute bg-black p-6 md:p-12 w-full md:w-3/12 mx-auto my-24 right-0 left-0 bg-opacity-80"
      >
        <h1 className="font-bold text-white text-3xl p-2">
            {isSignInForm ? "Login Form" : "Singup Form"}
        </h1>
       { !isSignInForm && <input
          type="text"
          placeholder="Name"
          className="p-4 my-4 w-full bg-gray-500"
          ref={name}
        />} 
        <input
          type="email"
          placeholder="Email"
          className="p-4 my-4 w-full bg-gray-500 "
           ref={email}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-500"
          ref={password}
        />
        <p className=' text-red-500'>{errorMessage}</p>
        <button className="p-4 my-6 w-full bg-red-700" onClick={handelButtonClick}>
          {isSignInForm ? "Sign In" : "Login"}  
            </button>
        <p className='text-white py-4 m-2  cursor-pointer'
        onClick={toggleSignInForm}
        >{isSignInForm ? "new to netflix ? signup here" : "go to the Login page"}</p>
      </form>
    </div>
  );
};

export default Login;

import React, { useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";

import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate =  useNavigate();
  const dispatch = useDispatch();
  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    // validate the form data

    // console.log(email.current.value);
    // console.log(password.current.value);
    // const message;
    //  {isSignInForm &&  message = checkValidateData(email.current.value,password.current.value)}
    //  seterrorMessage(message);

    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    // console.log(name.current.value);
    seterrorMessage(message);
    // console.log(message);

    if (message) {
      return;
    }
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdMsgRM5QLwEwGd9Cd0aeT4DS7BaZLD5mVn_UkaDHdnw&s"
          }).then(() => {
              const {uid,email,displayName,photoURL} = auth.currentUser;
              dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL, }));
            // Profile updated!
            navigate("/browse")
            console.log(user);
            // ...
          })
        .catch((error) => {
            // An error occurred
            // ...
            seterrorMessage(error.message);
          });
          console.log(user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + " - " + errorMessage);

          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="img"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-md font-bold bg-opacity-80"
      >
        <h1 className=" text-3xl  p-4 font-bold">
          {isSignInForm ? "Sign  In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Name "
            className="p-4 m-4 w-full bg-zinc-600"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 m-4 w-full bg-zinc-600"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 m-4 w-full bg-zinc-600"
        />
        <p className="p-2 m-3  text-red-500">{errorMessage}</p>
        <button
          className="text-3xl  p-4 m-4 font-bold bg-red-700 rounded-md w-full"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className=" p-4 text-gray-500 text-lg">
          New to Netflix?{" "}
          <a
            className="hover:underline hover:cursor-pointer text-white font-semibold"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? "Sign Up Now" : "Already a User Sign In "}
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;

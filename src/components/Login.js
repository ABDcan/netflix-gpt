import React, { useState } from 'react'
import Header from './Header'
const Login = () => {
    const [isSignInForm,setisSignInForm] = useState(true);
    const toggleSignInForm = () =>{
        setisSignInForm(!isSignInForm);
    }
  return (
    <div>
      <Header/>
      <div className="absolute">
        <img src = "https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="img"/>
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-md font-bold bg-opacity-80" >
        <h1 className=" text-3xl  p-4 font-bold">{isSignInForm ? "Sign  In" : "Sign Up"}</h1>
        {!isSignInForm &&
            <input type="text" placeholder='Name' className='p-4 m-4 w-full bg-zinc-600'/>
        }
        <input type="text" placeholder='Email Address' className="p-4 m-4 w-full bg-zinc-600"/>
        <input type="password" placeholder='Password' className='p-4 m-4 w-full bg-zinc-600'/>
        <button className="text-3xl  p-4 m-4 font-bold bg-red-700 rounded-md w-full">{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className=" p-4 text-gray-500 text-lg">
            New to Netflix? <a className="hover:underline hover:cursor-pointer text-white font-semibold" onClick={toggleSignInForm}>{isSignInForm ? "Sign Up Now" : "Already a User Sign In "}</a>.
        </p>
      </form>
    </div>
  )
}

export default Login

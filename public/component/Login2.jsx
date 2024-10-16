import React from 'react'
import { useState } from 'react'

const Login = () => {
  const[isLoginForm,setIsLoginForm] = useState(true)

  const toggleLoginForm=()=>{
    setIsLoginForm(!isLoginForm);
  }
  return (
    <div>
       
      <form className='bg-gray-200 my-3 mx-auto w-4/12  p-10 rounded-lg bg-opacity-50'>
        <h1 className='font-semibold text-2xl py-4 text-center'>{isLoginForm? "Welcome to SusNet,A Sustainable AI-Enabled Energy Management Network."
        : "Register Your SusNet Hardware"}</h1>
       
        
        
        {!isLoginForm && (
          
        <input type="text" placeholder='Eircode' 
        className='p-3 my-1 w-full bg-gray-200 rounded-md'/>)}

        
       {!isLoginForm &&( <input type="text" placeholder="Type of Account" 
        className='p-3 my-1 w-full bg-gray-200 rounded-md'/>
        )
}
        <input type="text"placeholder='Email Address' 
        className='p-3 my-1 w-full bg-gray-200 rounded-md'/>

        
        <input type="password"placeholder='Password' 
        className='p-3 my-1 w-full bg-gray-200 rounded-md'/>
        <button className='p-3 my-6 bg-red-400 w-full font-bold  rounded-lg'>
          {isLoginForm ?"Sign In":"Sign Up"}</button>
          <p className=' text-center cursor-pointer' onClick={toggleLoginForm}>
            {isLoginForm ?"Not registered yet? Click here to Register": "Already registered? Sign in Now"}</p>
      </form>
    </div>
  )
}

export default Login
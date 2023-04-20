import React from 'react'
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import {authStore} from "../store/authStore";

const HomePage = () => {

  const { isLoggedIn } = authStore();


  const navigate = useNavigate();

  useEffect(() => {
    
    if (isLoggedIn) {
      navigate("/game")
      }[isLoggedIn, navigate]
    })

  return (
    <div className='homepage_container flex justify-center  text-secondaryText'>
    <div className='button_container flex flex-col items-center gap-4 bg-gray-200 border-solid border border-gray-300 w-60 h-40 justify-center '>
    <Link to="/login">
    <button 
        className='bg-blue-500 w-24 border-solid border border-white'>Log In</button>
          </Link>
          <Link to="/register">

        <button className='bg-purple-500 w-24 border-solid border border-white'>Register</button>
        </Link>
       
       </div>
           </div>
  )
}

export default HomePage

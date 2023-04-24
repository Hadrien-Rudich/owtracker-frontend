import React from 'react'
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import {authStore} from "../../store/authStore";

const HomePage = () => {

  const { isLoggedIn } = authStore();


  const navigate = useNavigate();

  useEffect(() => {
    
    if (isLoggedIn) {
      navigate("/game")
      }[isLoggedIn, navigate]
    })

  return (
    <div className='homepage_container flex justify-center text-secondaryText py-12'>
    <div className='button_container flex flex-col items-center gap-4 bg-inactiveColor w-60 h-40 justify-center shadow-lg rounded-sm'>
    <Link to="/login">
    <button 
        className='bg-fourthColor w-16 h-6 hover:scale-110 shadow-md rounded-sm'
        type="submit">Log In</button>
          </Link>
          <Link to="/register">

        <button className='bg-thirdColor w-16 h-6 hover:scale-110 shadow-md rounded-sm'
        type="submit" >Register</button>
        </Link>
       
       </div>
           </div>
  )
}

export default HomePage

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authStore } from "../store/authStore";

import { fetchUserData } from "../services/ApiService";



const Account = () => {
  
  const [userData, setUserData] = useState([])
  
    useEffect(() => {
      async function getUserData() {
        try {
          const data = await fetchUserData();
          setUserData(data);
        } catch (error) {
          console.error('Failed to fetch user data', error);
        }
      }
    
      getUserData();
    }, []);


  const navigate = useNavigate();
  const { isLoggedIn } = authStore();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
    [isLoggedIn, navigate];
  });

  return (
    
    /// SHOULD I BE MAPPING ON A SINGLE OBJECT IN AN ARRAY? OR SHOULD I DECLARE AN OBJECT
    <div className="flexdiv col">
      <p>Account</p>
      {userData.map((user) => 
      <div className="profile_container flexdiv col w-60 h-72 bg-gray-300"key={user.id}>
      <p>{user.email}</p>
      <p>{user.battleTag}</p>
      <p>{user.id}</p>
      </div>
      )}
    </div>
  )
}

export default Account
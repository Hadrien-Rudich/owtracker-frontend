import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authStore } from "../../store/authStore";
import { fetchUserData } from "../../services/ApiService";
import Details from "./Details";
import Security from "./Security";
import Tabs from "./Tabs";

const Account = () => {
  const { setUserData, activeTab} = authStore();

  useEffect(() => {
    async function getUserData() {
      try {
        const data = await fetchUserData();
        setUserData(data);
      } catch (error) {
        console.error("Failed to fetch user data", error);
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
  }, [isLoggedIn, navigate]);

  return (
    <div className="Account_container flexdiv col lg:mt-[8.5rem] my-24 relative">
           <div className="Tabs_container absolute top-[-3.5rem]">
          <Tabs />
     
      </div>
       <div className="main_container containerboxnort">
          {activeTab === "details" ? (
            <div className="Details_container">
              <Details />
            </div>
          ) : 
            <div className="Security_container">
              <Security />
            </div>
          }
        </div>
   
    </div>
  );
};

export default Account;

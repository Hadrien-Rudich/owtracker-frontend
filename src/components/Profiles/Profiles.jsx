import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authStore } from "../../store/authStore";
import { profileStore } from "../../store/profileStore";
import AddProfile from "./AddProfile";
import Profile from "./Profile";

import { fetchProfilesData } from "../../services/ApiService";

const Profiles = () => {
  const navigate = useNavigate();

  const { isLoggedIn } = authStore();
  const { profile, profilesData, addProfilesData, newProfile } = profileStore();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
    [isLoggedIn, navigate];
  });

  

  useEffect(() => {
    async function getProfilesData() {
      try {
        const data = await fetchProfilesData();
        addProfilesData(data);
      } catch (error) {
        console.error("Failed to fetch history data", error);
      }
    }

    getProfilesData();
  }, [addProfilesData, newProfile]);

  return (
    <div className="Profiles_container flexdiv col lg:mt-[8.5rem] my-24 relative">
      {profile === "" && (
        <div className="title_container flexdiv bg-thirdColor w-80 h-10 tracking-widest rounded-b-none rounded-sm shadow-lg absolute top-[-2.5rem] ">
          <h3 className="text-xl  text-activeColor"> 
          {profilesData.length === 0 
          ? "CREATE A PROFILE" 
          : "SELECT A PROFILE"}
          </h3>
        </div>
      )}
      <div className="containerbox">
        <div className="w-52">
          <AddProfile />
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Profiles;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authStore } from "../../store/authStore";
import { profileStore } from "../../store/profileStore";
import AddProfile from "./AddProfile";
import ProfilesList from "./ProfilesList";

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
    <div className="Profiles_container flexdiv  col sm:my-96 my-24">
      {profile === "" && (
        <div className="title_container flexdiv bg-thirdColor w-48 h-12 tracking-widest rounded-sm shadow-lg absolute top-[26rem]">
          <h3 className="text-2xl  text-activeColor"> {profilesData.length === 0 ? "CREATE A PROFILE" : "SELECT A PROFILE"}
          </h3>
        </div>
      )}
      <div className="flexdiv w-60 py-8 bg-inactiveColor  rounded-sm shadow-lg">
        <div className="w-52">
          <AddProfile />
          <ProfilesList />
        </div>
      </div>
    </div>
  );
};

export default Profiles;

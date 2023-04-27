import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authStore } from "../../store/authStore";
import { profileStore } from "../../store/profileStore";
import AddProfile from "./AddProfile";
import ProfilesList from "./ProfilesList";

import { fetchProfilesData } from "../../services/ApiService";

const ProfilesPages = () => {
  const navigate = useNavigate();

  const { isLoggedIn } = authStore();
  const {
    addProfilesData,
    profilesData,
    profile,
    setProfile,
    newProfile,
    deleteProfile,
    clearProfile,
  } = profileStore();

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
    <div className="profilepage_container flex flex-col items-center my-24">
      <div className="w-60 py-8 bg-inactiveColor flex justify-center items-center content-center rounded-sm shadow-lg">
        <div className="w-52">
          <AddProfile />
          <ProfilesList />
        </div>
      </div>
    </div>
  );
};

export default ProfilesPages;

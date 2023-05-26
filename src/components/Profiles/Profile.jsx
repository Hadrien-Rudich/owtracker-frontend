import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authStore } from "../../store/authStore";
import { profileStore } from "../../store/profileStore";
import { ImCross } from "react-icons/im";

import {
  fetchProfilesData,
  deleteProfileFromDb,
} from "../../services/ApiService";

const Profile = () => {
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

  const handleClick = (e) => {
    if (profile === e.currentTarget.value) {
      clearProfile();
    } else {
      const selectedProfile = e.currentTarget.value;
      setProfile(selectedProfile);
    }
  };

  const handleDeleteClick = (value) => {
    deleteProfileFromDb(value);
    deleteProfile(value);
  };

  return (
    <div className="Profile_container flex flex-col gap-4">
      {profilesData.map((p, index) => (
        <div className="profile_container flex ml-8 gap-4" key={index}>
          
          <button
            key={p.id}
            value={p.label.toLowerCase()}
            onClick={handleClick}
            type="button"
            className={`${
              p.label.toLowerCase() === profile.toLowerCase()
                ? "scale-110 bg-activeColor"
                : "bg-activeGrayColor "
            } profilecard_container card profile hover:bg-activeColor hover:scale-110`}>
            {p.label}
          </button>
          {p.label.toLowerCase() === profile.toLowerCase() && (
            <button
              value={p.label}
              method="delete"
              onClick={() => handleDeleteClick(p.label)}
              type="button"
              className="hover:scale-110"
            >
              <ImCross className="sign cancel" />
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Profile;

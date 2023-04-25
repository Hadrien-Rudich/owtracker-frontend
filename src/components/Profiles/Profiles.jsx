import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authStore } from "../../store/authStore";
import { profileStore } from "../../store/profileStore";
import AddProfile from "./AddProfile";
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
    clearProfile
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
    if (profile === e.target.value) {
      clearProfile()
    } else {

      const selectedProfile = e.target.value
      setProfile(selectedProfile)
    }
    
  };

  const handleDeleteClick = (value) => {
    deleteProfileFromDb(value);
    deleteProfile(value);
  };

  return (
    <div className=" flex flex-col items-center my-12">
      <div className="bg-inactiveColor flex flex-col items-center gap-3 py-4 w-60 rounded shadow-lg">
        <AddProfile />

        {profilesData.map((p) => (
          <div
            key={p.id}
            className={`${
              p.label === profile
                ? "scale-110 bg-activeColor"
                : "bg-activeGrayColor hover:scale-110"
            } profile_container flex items-center justify-center content-center hover:bg-activeColor rounded-sm shadow-sm `}
          >
            <button
              value={p.label.toLowerCase()}
              onClick={handleClick}
              type="button"
              className="w-32 h-6 text-xs"
            >
              {p.label}
            </button>
            {p.label.toLowerCase() === profile.toLowerCase() && (
                <button
                  value={p.label}
                  method="delete"
                  onClick={() => handleDeleteClick(p.label)}
                  type="button"
                  className="pr-1"
                >
                  <ImCross className="scale-50 text-mainText" />
                </button>
              )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;

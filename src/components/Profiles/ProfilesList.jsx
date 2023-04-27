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

const ProfilesList = () => {
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
    if (profile === e.target.value) {
      clearProfile();
    } else {
      const selectedProfile = e.target.value;
      setProfile(selectedProfile);
    }
  };

  const handleDeleteClick = (value) => {
    deleteProfileFromDb(value);
    deleteProfile(value);
  };

  return (
        <div className="flex flex-col gap-4 rounded-sm shadow-sm">
              {profilesData.map((p) => (
                <div className="profilelist_container flex ml-6 gap-4">
            <div
              key={p.id}
              className={`${
                p.label.toLowerCase() === profile.toLowerCase()
                  ? "scale-110 bg-activeColor"
                  : "bg-activeGrayColor hover:scale-110"
              } profile_container rounded-sm hover:bg-activeColor`}
            >
              <button
                value={p.label.toLowerCase()}
                onClick={handleClick}
                type="button"
                className="w-40 h-10 tracking-widest truncate"
              >
                {p.label}
              </button>
              </div>
              {p.label.toLowerCase() === profile.toLowerCase() && (
                <button
                  value={p.label}
                  method="delete"
                  onClick={() => handleDeleteClick(p.label)}
                  type="button"
                  className=""
                >
                  <ImCross className="scale-75 text-mainText hover:text-activeLoss" />
                </button>
              )}
            </div>
          ))}
        </div>

  );
};

export default ProfilesList;

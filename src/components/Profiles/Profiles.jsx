import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authStore } from "../../store/authStore";
import { profileStore } from "../../store/profileStore";
import AddProfile from "./AddProfile";
import { ImCross } from "react-icons/im";


import { fetchProfilesData, deleteProfileFromDb } from "../../services/ApiService";

const Profile = () => {
  const navigate = useNavigate();

  const { isLoggedIn } = authStore();
  const {
    addProfileData,
    profileData,
    currentProfile,
    setCurrentProfile,
    newProfile,
    deleteProfile,
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
        addProfileData(data);
      } catch (error) {
        console.error("Failed to fetch history data", error);
      }
    }

    getProfilesData();
  }, [addProfileData, newProfile]);

  const handleClick = (e) => {
    setCurrentProfile(e.target.value);
  };

  const handleDeleteClick = (value) => {
    deleteProfileFromDb(value);
    deleteProfile(value);
  };

  return (
    <div className=" flex flex-col items-center py-6">
      <div className="bg-secondaryColor flex flex-col items-center gap-3 py-4 bg-gray-300  border-gray-400 w-60">
        <AddProfile />

        {profileData.map((profile) => (
          <div
            key={profile.id}
            className=" bg-thirdColor flex items-center justify-center bg-purple-400 px-2"
          >
            <button
              value={profile.label}
              className={`${
                currentProfile === profile.label
                  ? `text-blue-700`
                  : `text-black`
              } w-32 h-12`}
              onClick={handleClick}
            >
              {profile.label}
            </button>
            <button
              value={profile.label}
              method="delete"
              onClick={() => handleDeleteClick(profile.label)}
            >
              <ImCross />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;

import React, { useState, useEffect } from "react";
import { profileStore } from "../../store/profileStore";
import { addUserProfileToDb } from "../../services/ApiService";
import { ImPlus, ImCross } from "react-icons/im";

const AddProfile = () => {
  const { newProfile, setNewProfile, addNewProfile, clearNewProfile } =
    profileStore();
  const [inputField, setInputField] = useState(false);

  const handleOnChange = (e) => {
    setNewProfile(e.target.value);
  };

  const handleClick = () => {
    setInputField(true);
  };
  const handleCrossClick = () => {
    clearNewProfile();
    setInputField(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newProfile === "") {
      return;
    } else {
      addNewProfile(newProfile);
      addUserProfileToDb(newProfile);
      setInputField(false);
      clearNewProfile();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    } else if (e.key === "Escape") {
      clearNewProfile();
      setInputField(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [inputField]);

  return (
    <div className="addprofile_container pb-4 flex justify-center">
      <button onClick={handleClick} type="button" className="">
        {!inputField && (
          <div className="addbutton_container flex items-center justify-center w-6 h-6 text-secondaryText bg-thirdColor hover:scale-110 shadow-md rounded-sm ">
            <ImPlus className="scale-75" />
          </div>
        )}
      </button>
      {inputField && (
        <form onSubmit={handleSubmit}>
          <div className="form_container h-6 flex gap-2">
            <button
              className="scale-75 hover:scale-90"
              onClick={handleCrossClick}
            >
              <ImCross />
            </button>
            <label>
              <input
                className="w-24"
                name="profile"
                autoFocus
                required
                value={newProfile}
                onChange={handleOnChange}
                type="text"
              />
            </label>

            <button type="submit" className="scale-75 hover:scale-90">
              <ImPlus />
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddProfile;

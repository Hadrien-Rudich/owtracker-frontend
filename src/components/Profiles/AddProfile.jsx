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
    <div className="addprofile_container h-12 pb-6 flexdiv">
      <button onClick={handleClick} type="button">
        {!inputField && (
          <div className="addbutton_container">
            <ImPlus className="flex w-8 h-8 text-thirdColor scale-75 hover:scale-90" />
          </div>
        )}
      </button>
      {inputField && (
        <form onSubmit={handleSubmit}>
          <div className="form_container h-6 flex gap-4">
            <button
              className="scale-75 hover:scale-90"
              onClick={handleCrossClick}
            >
              <ImCross className="" />
            </button>
            <label>
              <input
                className=" my-2 text-center shadow-inner rounded-sm"
                name="profile"
                autoFocus
                required
                value={newProfile}
                onChange={handleOnChange}
                onKeyDown={handleKeyDown}
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

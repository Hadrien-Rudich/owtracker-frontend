import React from "react";
import { profileStore } from "../../store/profileStore";
import { addUserProfileToDb } from "../../services/ApiService";
import { ImPlus, ImCross } from "react-icons/im";
import { useState } from "react";

const AddProfile = () => {
  const { newProfile, setNewProfile, addNewProfile } = profileStore();
  const [inputField, setInputField] = useState(false);

  const handleOnChange = (e) => {
    setNewProfile(e.target.value);
  };

  const handleClick = () => {
    setInputField(!inputField);
  };

  const handleSubmit = (e) => {
    addNewProfile(newProfile);
    addUserProfileToDb(newProfile);
    e.preventDefault();
    setInputField(false);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3 py-4 bg-gray-300  border-gray-400 w-60">
      <button onClick={handleClick}>
        {!inputField && (
          <div className="flex items-center gap-2 px-2 bg-green-400">
            <ImPlus className="scale-75"/>
            <p>Add Profile</p>
          </div>
        )}
      </button>
      {inputField && (
        <form onSubmit={handleSubmit} method="post">
            <div className="form_container flex">
            <label type="text">
              <input
                className="w-20"
                name="profile"
                value={newProfile}
                onChange={handleOnChange}
                type="text"
              />
            </label>
<div className="button_container flex gap-2">

            <button className="bg-green-400 h-6 w-10">Add</button>
            <button className="scale-75">
              <ImCross />
            </button>
</div>
            </div>
          </form>
      )}
    </div>
  );
};

export default AddProfile;

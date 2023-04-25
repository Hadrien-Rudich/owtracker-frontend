import React, { useState } from "react";
import { profileStore } from "../../store/profileStore";
import { addUserProfileToDb } from "../../services/ApiService";
import { ImPlus, ImCross } from "react-icons/im";

const AddProfile = () => {
  const { newProfile, setNewProfile, addNewProfile, clearNewProfile } = profileStore();
  const [inputField, setInputField] = useState(false);
  const [isInputEmpty, setIsInputEmpty] = useState(true);

  const handleOnChange = (e) => {
    setNewProfile(e.target.value);
    setIsInputEmpty(!e.target.value);
  };

  const handleClick = () => {
    setInputField(!inputField);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isInputEmpty) {
      alert("Please enter a profile name");
      return;
    }
    addNewProfile(newProfile);
    addUserProfileToDb(newProfile);
    setInputField(false);
    clearNewProfile();
    setIsInputEmpty(true);
  };

  return (
    <div className="flex flex-col items-center justify-center pb-4 w-60">
      <button onClick={handleClick} type="button" className="">
        {!inputField && (
          <div className="flex items-center justify-center gap-2 w-6 h-6 text-secondaryText bg-thirdColor hover:scale-110 shadow-md rounded-sm">
            <ImPlus className="scale-75" />
          </div>
        )}
      </button>
      {inputField && (
        <form onSubmit={handleSubmit} method="post">
          <div className="form_container flex">
            <label type="text">
              <input
                className="w-28 rounded-sm"
                name="profile"
                autoFocus
                required
                value={newProfile}
                onChange={handleOnChange}
                type="text"
              />
            </label>
            <div className="button_container flex gap-2">
              <button
                className="h-6 w-10 text-secondaryText bg-thirdColor hover:scale-110 rounded-sm shadow-sm"
                type="submit"
              >
                Add
              </button>
              <button className="scale-75" onClick={() => setInputField(false)}>
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

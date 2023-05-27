import React, { useState } from "react";
import { profileStore } from "../../store/profileStore";
import { addUserProfileToDb } from "../../services/ApiService";
import { ImPlus, ImCross } from "react-icons/im";
import useOutsideClick from "../UseOutsideClick";

const AddProfile = () => {
  const { newProfile, setNewProfile, addNewProfile, clearNewProfile } =
    profileStore();
  const [inputField, setInputField] = useState(false);

  const handleOnChange = (e) => {
    setNewProfile(e.target.value);
  };
  const handlePlusClick = (e) => {
    e.stopPropagation();
    setInputField(true);
  };

  const handleCrossClick = () => {
    clearNewProfile();
    setInputField(false);
  };

  const handleOutsideClick = () => {
    setInputField(false);
  }

  const newProfileInputRef = useOutsideClick(handleOutsideClick, ["click"]);

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

  return (
    <div className="addprofile_container h-12 flexdiv"
     ref={newProfileInputRef}
     >
      <button onClick={handlePlusClick} type="button">
        {!inputField && (
          <div className="addbutton_container">
            <ImPlus className="sign main validate" />
          </div>
        )}
      </button>
      {inputField && (
        <form onSubmit={handleSubmit}>
          <div className="form_container flex gap-4">
            <button onClick={handleCrossClick} type="button">
                <ImCross className="sign cancel" />
              </button>
              <label>
                <input
                  className="card profile"
                  name="profile"
                  autoFocus
                  required
                  value={newProfile}
                  onChange={handleOnChange}
                  onKeyDown={handleKeyDown}
                  type="text"
                />
              </label>

              <button type="submit">
                <ImPlus className="sign validate"/>
              </button>
            </div>
          </form>
        )}
      </div>
    );
  };

  export default AddProfile;

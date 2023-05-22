import React from "react";
import { authStore } from "../../store/authStore";
import InputField from "../InputField";

const EditSecurity = () => {
  const {
    toggleEditSecurity,
    newPassword,
    setNewPassword,
    clearNewPassword,
    confirmNewPassword,
    setConfirmNewPassword,
    clearConfirmNewPassword,
  } = authStore();

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmNewPassword(e.target.value);
  };

  const handleCancelClick = () => {
    toggleEditSecurity();
    clearNewPassword();
    clearConfirmNewPassword();
  };

  const handleKeyDown = (e) => {
    // if (e.key === "Enter") {
    //   handleSubmit(e);
    // } else
    if (e.key === "Escape") {
      handleCancelClick();
    }
  };

  return (
    <div className="main_container">
      <form action="submit">
        <div className="inputandbutton_container flexdiv col gap-8">
          <div className="input_container flexdiv col gap-4">
   
            <InputField
              label="Password"
              type="password"
              placeholder={"*************"}
              value={newPassword}
              disabled={false}
                    required={false}
              onChange={handlePasswordChange}
              onKeyDown={handleKeyDown}
            />

            <InputField
              label="Confirm Password"
              type="password"
              placeholder={"*************"}
              value={confirmNewPassword}
              disabled={false}
              required={false}
              onChange={handleConfirmPasswordChange}
              onKeyDown={handleKeyDown}
            />
          </div>
          <div className="button_container flexdiv gap-4">
            <button onClick={handleCancelClick} className="button cancel">
              Cancel
            </button>
            <button className="button validate">Confirm</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditSecurity;

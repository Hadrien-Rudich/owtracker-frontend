import React from "react";

import { authStore } from "../../store/authStore";

const AccountInformation = () => {
  const {
    userData,
    editAccount,
    toggleEditAccount,
    editPassword,
    toggleEditPassword,
  } = authStore();

  const handleEditClick = () => {
    toggleEditAccount();
    console.log("editAccount:", editAccount);
  };

  const handleEditPasswordClick = () => {
    toggleEditPassword();
    console.log("editPassword:", editPassword);
  };

  return (
    <div className="main_container">
      <div className="inputandbutton_container flexdiv col gap-8">
        <div className="input_container flexdiv col gap-4">
          <label type="email">
            <p className="">Email</p>
            <input
              value={userData.email}
              type="email"
              disabled
              className="input disabled"
            />
          </label>

          <label type="battleTag">
            <p className="">BattleTag</p>
            <input
              value={userData.battleTag}
              type="text"
              disabled
              className="input disabled"
            />
          </label>
        </div>
        <div className="button_container flexdiv col gap-4">
          <button onClick={handleEditClick} className="button modify">
            Edit
          </button>

          <button
            onClick={handleEditPasswordClick}
            className="button bg-activeLoss"
          >
            Edit Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountInformation;

import React from "react";

import { authStore } from "../../store/authStore";
import EditDetails from "./EditDetails";

const Details = () => {
  const {
    userData,
    toggleEditAccount,
    editAccount,
  } = authStore();

  const handleEditClick = () => {
    toggleEditAccount();
  };

  return (
    <div className="main_container">

{!editAccount ? (
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
        </div>
      </div>)
      :
      <div className="EditDetails_container">
      <EditDetails />
</div>
}
    </div>
  );
};

export default Details;

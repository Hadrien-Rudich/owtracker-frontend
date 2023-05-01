import React from "react";

import { authStore } from "../../store/authStore";
import EditSecurity from "./EditSecurity";

const Details = () => {
  const { editSecurity, toggleEditSecurity } = authStore();

  const handleEditSecurityClick = () => {
    toggleEditSecurity();
    console.log();
  };

  return (
    <div className="main_container">
      {editSecurity ? (
        <div className="EditSecurity_container">
          <EditSecurity />
        </div>
      ) : (
        <div className="button_container">
          <button
            onClick={handleEditSecurityClick}
            className="button bg-activeLoss"
          >
            Edit Password
          </button>
        </div>
      )}
    </div>
  );
};

export default Details;

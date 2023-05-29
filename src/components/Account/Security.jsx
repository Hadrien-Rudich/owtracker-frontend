import React from 'react';
import authStore from '../../store/authStore';
import EditSecurity from './EditSecurity';

function Details() {
  const { editSecurity, toggleEditSecurity } = authStore();

  const handleEditSecurityClick = () => {
    toggleEditSecurity();
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
            className="button bg-warning truncate"
            type="button"
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
}

export default Details;

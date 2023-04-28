import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authStore } from "../../store/authStore";
import { fetchUserData } from "../../services/ApiService";

const Account = () => {
  const {
    userData,
    setUserData,
    editAccount,
    toggleEditAccount,
    editPassword,
    toggleEditPassword,
    newEmail,
    setNewEmail,
    newPassword,
    setNewPassword,
    confirmNewPassword,
    setConfirmNewPassword,
    newBattleTag,
    setNewBattleTag,
  } = authStore();

  useEffect(() => {
    async function getUserData() {
      try {
        const data = await fetchUserData();
        setUserData(data);
      } catch (error) {
        console.error("Failed to fetch user data", error);
      }
    }

    getUserData();
  }, []);

  const handleChangeInformationClick = () => {
    toggleEditAccount();
    console.log(editAccount, "editAccount)");
  };

  const handleModifyPasswordClick = () => {
    toggleEditPassword();
    console.log(editPassword, "editPassword)");
  };

  const handleEmailChange = (e) => {
    setNewEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmNewPassword(e.target.value);
  };

  const navigate = useNavigate();
  const { isLoggedIn } = authStore();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="accountcomponent_container flexdiv my-24">
      <div className="profile_container flexdiv col gap-8 w-60 py-8 bg-inactiveColor shadow-lg rounded-sm">
        <div className="">
          {!editPassword && (
            <div className="input_container flexdiv col gap-4">
              <div className="flexdiv col gap-4">
              <label type="email">
                <p className="">Email</p>
                <input
                  value={!editAccount ? userData.email : newEmail}
                  type="email"
                  required
                  disabled={!editAccount}
                  className="input"
                />
              </label>

              <label type="battleTag">
                <p className="">BattleTag</p>
                <input
                  value={!editAccount ? userData.battleTag : newBattleTag}
                  type="text"
                  required
                  disabled={!editAccount}
                  className="input"
                />
              </label>
              </div>
              <div className="flexdiv gap-4">
                {!editAccount ? (
                  <div className="flexdiv gap-4">
                    <button onClick={handleModifyPasswordClick} className="button leading-3 bg-activeLoss ">Modify Password</button>
                    <button
                      onClick={handleChangeInformationClick}
                      className="button validate "
                    >
                      Modify
                    </button>
                  </div>
                ) : (
                  <div className="flexdiv gap-4">
                    <button onClick={handleChangeInformationClick} className="button cancel">Cancel</button>
                    <button
              onClick={handleChangeInformationClick}
              className="button validate"
            >
              Save
            </button>
                  </div>
                )}
              </div>
            </div>
          )}
          {editPassword && (
            <div className="input_container flexdiv col gap-4">
              <label type="password">
                <p className="">new Password</p>
                <input
                  value={confirmNewPassword}
                  type="password"
                  disabled={!editPassword}
                  className="input"
                />
              </label>
              <label type="password">
                <p className="">Confirm New Password</p>
                <input
                  value={confirmNewPassword}
                  type="password"
                  disabled={!editPassword}
                  className="input"
                />
              </label>
              <div className="flexdiv gap-4">
                <button onClick={handleModifyPasswordClick} className="button cancel">Cancel</button>
                <button onClick={handleModifyPasswordClick} className="button validate">Save</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Account;

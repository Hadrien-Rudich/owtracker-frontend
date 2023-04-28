import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authStore } from "../../store/authStore";
import { fetchUserData } from "../../services/ApiService";
import AccountInformation from "./AccountInformation";
import EditAccount from "./EditAccount";
import EditPassword from "./EditPassword";

const Account = () => {
  const { setUserData, editAccount, editPassword } = authStore();

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

  const navigate = useNavigate();
  const { isLoggedIn } = authStore();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate])

  return (
    <div className="Account_container flexdiv col  my-24 ">
    <div className="main_container flexdiv col w-60 py-8 gap-8 bg-inactiveColor shadow-lg rounded-sm">
      {editAccount ? (
        <div className="EditAccount_container ">
          <EditAccount />
        </div>
      ) : editPassword ? (
        <div className="EditPassword_container">
          <EditPassword/>
        </div>
      ) : (
        <div className="AccountInformation_container flexdiv gap-4">
          <AccountInformation />
        </div>
      )}
    </div>
  </div>
  );
};

export default Account;

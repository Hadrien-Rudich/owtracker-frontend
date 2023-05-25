import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { authStore } from "../../store/authStore";
import { FaRegUser } from "react-icons/fa";

const AccountDropDown = () => {
  const { logOut } = authStore();
  const [showAccountDropDown, setShowAccountDropDown] = useState(false);

  const toggleAccountDropdown = () => {
    setShowAccountDropDown(!showAccountDropDown);
  };

  const handleLogOut = () => {
    logOut();
  };
  return (
    <div className="AccountDropDown_container relative z-40">
      <button
        onClick={toggleAccountDropdown}
        className={`${
          showAccountDropDown
            ? "bg-activeColor"
            : "bg-mainColor hover:bg-activeColor"
        }  AccountDropDown_container relative z-40 w-32 h-20 flexdiv rounded-sm`}
      >
        <FaRegUser className="h-10 w-10 drop-shadow-lg" />
      </button>
      <div className="relative">
        <ul
          className={`${
            showAccountDropDown ? "active" : "inactive"
          }  dropdown  flexdiv col w-32 h-40 gap-2 z-10`}
        >
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "headertab active p-2" : "headertab inactive"
              }
              to="/account"
            >
              Account
            </NavLink>
          </li>
          <li>
            <button className="headertab" onClick={handleLogOut}>
              Log Out
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AccountDropDown;

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
    <div
      className={`${
        showAccountDropDown ? "bg-activeColor" : "bg-mainColor hover:bg-activeGrayColor"
      }  AccountDropDown_container relative z-50`}
    >
      <div className="relative z-50">
      <button
        onClick={toggleAccountDropdown}
        className="relative z-50 w-20 h-20 flexdiv"
      >
        <FaRegUser className="h-10 w-10" />
      </button>

      <ul
        className={`${
          showAccountDropDown ? "active" : "inactive"
        }  flexdiv col dropdown w-32 h-40 gap-2 relative z-10`}
      >
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? " tab active p-2" : "tab inactive "
            }
            to="/account"
          >
            Account
          </NavLink>
        </li>
        <li>
          <button className="tab" onClick={handleLogOut}>
            Log Out
          </button>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default AccountDropDown;

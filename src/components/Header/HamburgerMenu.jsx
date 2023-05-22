import React, { useState } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { headerStore } from "../../store/headerStore";
import { authStore } from "../../store/authStore";

const HamburgerMenu = () => {

  const { logOut } = authStore();

  const [showDropdown, setShowDropdown] = useState(false);
  const { locations } = headerStore();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogOut = () => {
    logOut();
  };

  return (
    <div className="">
      <button
        className="relative hover:bg-activeGrayColor "
        onClick={toggleDropdown}
      >
        {showDropdown ? (
          <RxCross2 className="w-20 h-20" />
        ) : (
          <RxHamburgerMenu className="w-20 h-20" />
        )}
      </button>
      <div
        className={`${
          showDropdown
            ? " top-20 duration-300 ease-out absolute right-0 w-screen rounded-t-none rounded-sm shadow-lg bg-inactiveColor z-10"
            : "top-[-300px] duration-300 ease-in absolute right-0 w-screen rounded-t-none rounded-sm shadow-lg bg-inactiveColor z-10"
        }  `}
      >
        <div
          className="py-1 flexdiv col "
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          {locations.map((location, index) => (
            <NavLink
              key={index}
              className={({ isActive }) =>
                ` ${
                  isActive
                    ? "bg-thirdColor text-secondaryText"
                    : "hover:bg-activeGrayColor"
                } w-36 rounded-sm text-4xl`
              }
              to={location.url}
              onClick={toggleDropdown}
            >
              {location.label}
            </NavLink>
          ))}
          <button
            onClick={handleLogOut}
            className="w-36 rounded-sm text-4xl hover:bg-activeGrayColor"
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;

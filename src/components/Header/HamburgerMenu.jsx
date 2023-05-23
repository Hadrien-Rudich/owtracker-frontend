import React, { useState } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { headerStore } from "../../store/headerStore";
import { authStore } from "../../store/authStore";

const HamburgerMenu = () => {
  const { logOut } = authStore();

  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  const { locations } = headerStore();

  const toggleHamburgerMenu = () => {
    setShowHamburgerMenu(!showHamburgerMenu);
  };

  const handleLogOut = () => {
    logOut();
  };

  return (
    <div className="main_container">
      <button
        className="hover:bg-activeGrayColor "
        onClick={toggleHamburgerMenu}
      > 
        {showHamburgerMenu ? (
          <RxCross2 className="w-20 h-20" />
        ) : (
          <RxHamburgerMenu className="w-20 h-20" />
        )}
      </button>
      <div
        className={`${
          showHamburgerMenu ? "  active" : " inactive"
        }  hamburger w-screen `}
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
              onClick={toggleHamburgerMenu}
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

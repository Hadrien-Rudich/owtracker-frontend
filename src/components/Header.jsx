import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { authStore } from "../store/authStore";
import { profileStore } from "../store/profileStore";
import { RxHamburgerMenu } from "react-icons/rx";


const Header = () => {
  const { isLoggedIn, logOut } = authStore();
  const { profile } = profileStore();
  const [showDropdown, setShowDropdown] = useState(false);

  const locations = [
    { label: "game", url: "/game" },
    { label: "history", url: "/history" },
    { label: "stats", url: "/stats" },
    { label: "profiles", url: "/profiles" },
    { label: "account", url: "/account" },
  ];

  const handleLogOut = () => {
    logOut();
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const renderLoggedInHeader = () => {
    if (profile) {
      return (
        <div className="button_container flex items-start justify-end sm:w-1/2 w-1/4 lg:text-2xl text-lg">
          <div className="md:hidden relative">
            <button
              className="hover:bg-activeGrayColor"
              onClick={toggleDropdown}
            >
              <RxHamburgerMenu className="w-20 h-20" />
            </button>
            {showDropdown && (
              <div className="top-20 absolute right-0 w-screen rounded-t-none rounded-sm shadow-lg bg-activeColor z-30">
                <div
                  className="py-1 flexdiv col" 
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
            )}
          </div>
          <div className="hidden md:flex">
            {locations.map((location, index) => (
              <NavLink
                key={index}
                className={({ isActive }) =>
                  isActive
                    ? "lg:w-20 w-14 bg-thirdColor text-secondaryText rounded-sm"
                    : "lg:w-20 w-14 hover:bg-activeGrayColor rounded-sm"
                }
                to={location.url}
              >
                {location.label}
              </NavLink>
            ))}
            <div className="md:flex hidden">
          <button
            onClick={handleLogOut}
            className="lg:w-20 w-14 hover:bg-activeGrayColor rounded-sm"
          >
            Log out
          </button>
          </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="button_container flex items-start justify-end w-1/2 lg:text-2xl text-lg">
          <NavLink
            key="profiles"
            className={({ isActive }) =>
              isActive
                ? "w-20 bg-thirdColor text-secondaryText rounded-sm"
                : "w-20 hover:bg-activeGrayColor rounded-sm"
            }
            to="/profiles"
          >
            Profiles
          </NavLink>
          <button
            onClick={handleLogOut}
            className="w-20 hover:bg-activeGrayColor rounded-sm"
          >
            Log out
          </button>
        </div>
      );
    }
  };

  return (
    <div className="header_container flex h-20 text-mainText bg-inactiveColor ">
      <div className="titleandimage_container  relative flex italic md:w-1/2 w-3/4 text-4xl">
        <img
          className="absolute left-4 top-1 h-10"
          src="/images/Overwatch_2_text_logo.svg"
          alt=""
        />
        <div className="title_container absolute top-10 left-4 h-10 ">
          <h1 className="">Game Tracker</h1>
        </div>
      </div>
      {isLoggedIn && renderLoggedInHeader()}
    </div>
  );
};

export default Header;

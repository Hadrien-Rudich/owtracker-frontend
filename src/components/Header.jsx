import React from "react";
import { NavLink } from "react-router-dom";
import { authStore } from "../store/authStore";
import { profileStore } from "../store/profileStore";

const Header = () => {
  const { isLoggedIn, logOut } = authStore();
  const { profile } = profileStore();

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

  const renderLoggedInHeader = () => {
    if (profile) {
      return (
        <div className="button_container flex items-start justify-end w-1/2 text-xl">
          {locations.map((location) => (
            <NavLink
              key={location.label}
              className={({ isActive }) =>
                isActive
                  ? "w-28 bg-thirdColor text-secondaryText rounded-sm"
                  : "w-28 hover:bg-activeGrayColor rounded-sm"
              }
              to={location.url}
            >
              {location.label}
            </NavLink>
          ))}
          <button
            onClick={handleLogOut}
            className="w-28  hover:bg-activeGrayColor rounded-sm"
          >
            Log out
          </button>
        </div>
      );
    } else {
      return (
        <div className="button_container flex items-start justify-end w-1/2 text-xl">
          <NavLink
            key="profiles"
            className={({ isActive }) =>
              isActive
                ? "w-28 bg-thirdColor text-secondaryText rounded-sm"
                : "w-28 hover:bg-activeGrayColor rounded-sm"
            }
            to="/profiles"
          >
            Profiles
          </NavLink>
          <button
            onClick={handleLogOut}
            className="w-28  hover:bg-activeGrayColor rounded-sm"
          >
            Log out
          </button>
        </div>
      );
    }
  };

  return (
    <div className="header_container flex h-20 text-mainText bg-secondaryColor  pb-6 relative">
      <div className="titleandimage_container  relative flex text-4xl italic text-purple-500 w-1/2">
        <img
          className=" absolute left-4 top-2 w-1/3"
          src="/images/Overwatch_2_text_logo.svg"
          alt=""
        />
        <div className="title_container absolute top-10 left-4">
          <h1 className="">Game Tracker</h1>
        </div>
      </div>
      {isLoggedIn ? renderLoggedInHeader() : null }
    </div>
  );
};

export default Header;

import React from "react";
import { NavLink } from "react-router-dom";
import { authStore } from "../../store/authStore";
import { profileStore } from "../../store/profileStore";
import HamburgerMenu from "./HamburgerMenu";
import Tabs from "./Tabs";

const Header = () => {
  const { isLoggedIn, logOut } = authStore();
  const { profile } = profileStore();


  const handleLogOut = () => {
    logOut();
  };

  const renderLoggedInHeader = () => {
    if (profile) {
      return (

       
        <div className="Header_container flex items-start justify-end sm:w-1/2 w-1/4 lg:text-2xl text-lg ">
    <div className="HamburgerMenu_container md:hidden relative">
          <HamburgerMenu/>
          
          </div>
          <div className="Tabs_container hidden md:block">
           <Tabs/>
          
          </div>
        </div>
      );
    } else {
      return (
        <div className="button_container flex sm:flex-row flex-col sm:items-start items-end sm:justify-end w-1/2 sm:text-2xl text-lg">
          <NavLink
            key="profiles"
            className="w-20 bg-thirdColor text-secondaryText rounded-sm"
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
      <div className="titleandimage_container  relative flex italic md:w-1/2 w-3/4 text-4xl z-50">
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

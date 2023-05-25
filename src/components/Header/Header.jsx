import React from "react";
import { NavLink } from "react-router-dom";
import { authStore } from "../../store/authStore";
import { profileStore } from "../../store/profileStore";
import HamburgerMenu from "./HamburgerMenu";
import AccountDropDown from "./AccountDropDown";
import LogoTitle from "./LogoTitle";
import Tabs from "./Tabs";

const Header = () => {
  const { isLoggedIn } = authStore();
  const { profile } = profileStore();

  const renderLoggedInHeader = () => {
    if (profile) {
      return (
        <div className="flex justify-center items-end ">
          <div className="Tabs_container hidden md:block">
            <Tabs />
          </div>

          <div className=" menu_container absolute sm:top-0 top-2 md:right-6 right-4">
            <div className="HamburgerMenu_container md:hidden flex">
              <HamburgerMenu />
            </div>
            <div className="hidden md:flex">
              <AccountDropDown />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="button_container flexdiv">
          <NavLink
            className={({ isActive }) =>
              isActive 
              ? "flex justify-center items-center headertab active z-30" 
              : "flex justify-center items-end headertab inactive z-30"
            }
            to="/profiles"
          >
            Profiles
          </NavLink>

          <div className="menu_container hidden absolute md:block sm:top-0 top-2 md:right-6 right-4">
            <AccountDropDown />
          </div>
        </div>
      );
    }
  };

  return (
    <div className="Header_container bg-mainColor">
      <div className="LogoTitle_container relative z-40">
        <LogoTitle />
      </div>
      <div>{isLoggedIn && renderLoggedInHeader()}</div>
    </div>
  );
};

export default Header;

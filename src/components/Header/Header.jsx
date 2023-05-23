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

          <div className=" menu_container absolute md:top-1 md:right-6 top-2 right-4">
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
              isActive ? "tab active  z-30" : "tab inactive z-30"
            }
            to="/profiles"
          >
            Profiles
          </NavLink>

          <div className="menu_container hidden absolute md:block md:top-1 md:right-6 top-2 right-4">
            <AccountDropDown />
          </div>
        </div>
      );
    }
  };

  return (
    <div className="Header_container bg-mainColor">
      <div className="LogoTitle_container relative z-40 w-screen">
        <LogoTitle />
      </div>
      <div>{isLoggedIn && renderLoggedInHeader()}</div>
    </div>
  );
};

export default Header;

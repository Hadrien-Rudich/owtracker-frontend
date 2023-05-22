import React from "react";
import { NavLink } from "react-router-dom";
import { authStore } from "../../store/authStore";
import { headerStore } from "../../store/headerStore";


const Tabs = () => {

  const { logOut } = authStore();
  const { locations } = headerStore();

  const handleLogOut = () => {
    logOut();
  };


  return (
    <div className="flex">
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
  )
}

export default Tabs
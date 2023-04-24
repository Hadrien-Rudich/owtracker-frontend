import React, { useState, useEffect, useRef } from "react";

import { gameReportStore } from "../../../store/gameReportStore";
import HeroesMenu from "./HeroesMenu";

const HeroesRoles = () => {
  const { role, addRole, toggleRoleModal } = gameReportStore();
  const [heroRoles, setHeroRoles] = useState([
    {
      label: "tank",
      icon: "Tank_icon.svg",
    },
    {
      label: "damage",
      icon: "Damage_icon.svg",
    },
    {
      label: "support",
      icon: "Support_icon.svg",
    },
  ]);

  const handleRoleModalClick = (selectedRole) => {
    if (selectedRole === role) {
      addRole(null);
    } else {
      addRole(selectedRole);
    }
    toggleRoleModal();
  };

  const heroModalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        heroModalRef.current &&
        !heroModalRef.current.contains(event.target)
      ) {
        addRole(null);
        toggleRoleModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [heroModalRef]);

  return (
    <div className="heroescomponent_container flex justify-center ">
      <div className="grid grid-cols-3 items-center h-48 w-1/2">
        {heroRoles.map((r) => (
          <div key={r.label} className="role_container">
            {role !== r.label && (
              <div className="roleicon_container flex justify-center">
                <button
                  className="roleicon_image hover:scale-125 drop-shadow-lg"
                  type="button"
                  onClick={() => handleRoleModalClick(r.label)}
                >
                  <img
                    className=" h-10 filter hover:brightness-200"
                    src={`images/roles/${r.icon}`}
                    alt="role icon"
                  />
                </button>
              </div>
            )}
            {role === r.label && (
              <div className="roleheroes_container">
                <HeroesMenu />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroesRoles;

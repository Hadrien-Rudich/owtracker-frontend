import React, { useEffect, useRef } from "react";

import { gameReportStore } from "../../../store/gameReportStore";
import HeroesMenu from "./HeroesMenu";

const HeroesRoles = () => {
  const { role, addRole, toggleRoleModal, rolesData, clearRole } =
    gameReportStore();

  const handleRoleClick = (event) => {
    if (event.currentTarget.value === role) {
      clearRole();
    } else {
      const selectedRole = event.currentTarget.value
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
    <div className="heroescomponent_container justify-evenly">
      <div className="grid grid-cols-3 items-center sm:h-48 lg:h-60 h-72">
        {rolesData.map((r) => (
          <div key={r.label} className="role_container">
            {role !== r.label && (
              <div className="roleicon_container ">
                <button
                value={r.label}
                  className="roleicon_image hover:scale-125 "
                  type="button"
                  onClick={handleRoleClick}
                >
                  <img
                    className=" h-10 filter hover:brightness-200"
                    src={`images/roles/${r.imageUrl}`}
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

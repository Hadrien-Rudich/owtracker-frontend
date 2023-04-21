import React, { useState, useEffect, useRef } from "react";
import { fetchHeroesData } from "../../../services/ApiService";

import { gameReportStore } from "../../../store/gameReportStore";

const Heroes = () => {
  useEffect(() => {
    async function getHeroesData() {
      try {
        const data = await fetchHeroesData();
        addHeroesData(data);
      } catch (error) {
        console.error("Failed to fetch heroes data", error);
      }
    }

    getHeroesData();
  }, []);


  const {
    heroes,
    addHero,
    removeHero,
    addHeroesData,
    heroesData,
    role,
    addRole,
    roleModal,
    toggleRoleModal,

  } = gameReportStore();
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

  const handleHeroClick = (e) => {
    toggleHero(e.currentTarget.value);
  
  };

  const toggleHero = (selectedHero) => {
    const heroInList = heroes.includes(selectedHero);

    if (!heroInList) {
      addHero(selectedHero);
    } else {
      removeHero(selectedHero);
    }
  };

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
    <div className="heroescomponent_container flex justify-center">
      <div className="grid grid-cols-3 items-center h-44 w-1/2">
        {heroRoles.map((r) => (
          <div key={removeHero.label} className="role_container">
            {role !== r.label && 
            <div className="roleicon_container flex justify-center">
              <button className="roleicon_image" onClick={() => handleRoleModalClick(r.label)}>
                <img
                  className="h-8"
                  src={`images/roles/${r.icon}`}
                  alt="role icon"
                />
              </button>
            </div>
            }

            <div className="roleheroes_container flex justify-center">
              {role === r.label && (
                <div
                  className=" flex flex-wrap justify-center"
                  ref={heroModalRef}
                >
                  {heroesData
                    .filter((hero) => hero.role == r.label)
                    .map((hero) => (
                      <button
                        className="bg-inactiveColor hover:bg-activeColor relative"
                        key={hero.slug}
                        value={hero.slug}
                        onClick={handleHeroClick}
                      >
                        <img
                          className={`${
                            heroes.includes(hero.slug)
                              ? "scale-105 bg-activeColor z-10 relative"
                              : "opacity-30"
                          } h-10 border border-activeColor rounded-sm hover:opacity-100`}
                          src={`images/heroes/${hero.imageUrl}`}
                          alt=""
                        />
                      </button>
                    ))}
                </div>
              )}
            </div>
          </div>
        ))}
  
      </div>
    </div>
  );
};

export default Heroes;

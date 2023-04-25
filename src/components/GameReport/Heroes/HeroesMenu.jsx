import React, { useEffect, useRef } from "react";

import { gameReportStore } from "../../../store/gameReportStore";

const HeroesMenu = () => {
  const {
    heroes,
    addHero,
    removeHero,
    heroesData,
    role,
    clearRole,
    toggleRoleModal,
  } = gameReportStore();

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

  const heroModalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        heroModalRef.current &&
        !heroModalRef.current.contains(event.target)
      ) {
        clearRole();
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
      <div ref={heroModalRef}  className="roleheroes_container flex justify-center">
        <div className="flex flex-wrap justify-center">
          {heroesData
            .filter((hero) => hero.role === role.toLowerCase())
            .map((hero) => (
              <button
                className="bg-inactiveColor hover:bg-activeColor relative shadow-lg"
                key={hero.slug}
                value={hero.slug}
                onClick={handleHeroClick}
                type="button"
              >
                <img
                  className={`${
                    heroes.includes(hero.slug)
                      ? "scale-105 bg-activeColor z-10 relative border border-thirdColor"
                      : "opacity-30"
                  } h-10 border border-activeColor hover:opacity-100 shadow-lg rounded-sm`}
                  src={`images/heroes/${hero.imageUrl}`}
                  alt=""
                />
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HeroesMenu;

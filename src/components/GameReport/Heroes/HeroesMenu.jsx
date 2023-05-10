import React, { useEffect, useRef } from "react";
import { filterHeroRoles } from "../../../utils/filters";
import { gameReportStore } from "../../../store/gameReportStore";
import { toggleHero } from "../../../utils/heroes";

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
    toggleHero(e.currentTarget.value, heroes, addHero, removeHero);
  };

  // const toggleHero = (selectedHero) => {
  //   const heroInList = heroes.includes(selectedHero);

  //   if (!heroInList) {
  //     addHero(selectedHero);
  //   } else {
  //     removeHero(selectedHero);
  //   }
  // };

  

  const heroModalRef = useRef(null);

  const filteredHeroes = filterHeroRoles(heroesData, role);

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
    <div className="heroescomponent_container">
      <div ref={heroModalRef}  className="roleheroes_container ">
        <div className="flexdiv flex-wrap">
          {filteredHeroes.map((hero) => (
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
                  } h-10 md:h-10 lg:h-12 border border-activeColor hover:opacity-100 shadow-lg rounded-sm`}
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

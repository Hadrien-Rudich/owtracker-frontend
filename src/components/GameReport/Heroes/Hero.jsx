import React from "react";
import { gameReportStore } from "../../../store/gameReportStore";
import { toggleHero } from "../../../utils/heroes";

const Hero = () => {
  const { rolesData, heroes, addHero, removeHero, heroesData } =
    gameReportStore();

  const handleHeroClick = (e) => {
    toggleHero(e.currentTarget.value, heroes, addHero, removeHero);
  };

  return (
    <div className="heroescomponent_container px-2">
      <div className="heroesByRole_container grid grid-cols-3 justify-center content-center">
        {rolesData.map((r) => (
          <div key={r.label} className="heroesandrole_container py-6">
           <div className="role_container pb-6 flexdiv">
           <img
                  value={r.label}
                  className="md:h-10 lg:h-12 h-9"
                  src={`images/roles/${r.imageUrl}`}
                  alt="role icon"
                />
           </div>
       
               
              <div className="heroes_container flexdiv">
              <div className="lg:w-2/3 w-full flexdiv flex-wrap">
        
                {heroesData
                  .filter(
                    (hero) => hero.role.toLowerCase() === r.label.toLowerCase()
                  )
                  .map((h) => (
                    
                    <button
                      className="bg-inactiveColor hover:bg-activeColor relative shadow-lg"
                      key={h.slug}
                      value={h.slug}
                      onClick={handleHeroClick}
                      type="button"
                    >
                      <img
                        className={`${
                          heroes.includes(h.slug)
                            ? "scale-105 bg-activeColor z-10 relative border border-thirdColor"
                            : "opacity-30"
                        } md:h-10 lg:h-12 h-9 border border-activeColor hover:opacity-100 shadow-lg rounded-sm`}
                        src={`images/heroes/${h.imageUrl}`}
                        alt=""
                      />
                    </button>
                  ))}
              </div>
            </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;

import React from 'react'
import { gameReportStore } from "../../../store/gameReportStore";


const HeroesOverview = () => {

  const { heroes, heroesData} = gameReportStore();


  return (
         <div className="selectedHero_container flexdiv">
        {heroes.map((hero) => (
          <div key={hero} className="flexdiv">
            <img
              className="h-10"
              src={`images/heroes/${heroesData.find(
                (heroData) => heroData.slug === hero
              ).imageUrl}`}
              alt=""
            />
          </div>
        ))}


        
      </div>
  )
}

export default HeroesOverview
import React from 'react'
import { gameReportStore } from "../../../store/gameReportStore";


const MapsOverview = () => {

  const { map, mapsData} = gameReportStore();


  return (
         <div className="selectedHero_container flexdiv">
        
          <div key={map} className="flexdiv">
            <img
              className="h-16"
              src={`images/maps/${mapsData.find(
                (mapData) => mapData.slug === map
              )?.imageUrl}`}
              alt=""
            />
          </div>
        
      </div>
  )
}

export default MapsOverview
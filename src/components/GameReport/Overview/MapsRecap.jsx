import React from 'react'
import { gameReportStore } from "../../../store/gameReportStore";


const MapsOverview = () => {

  const { map, mapsData} = gameReportStore();


  return (
         <div className="selectedHero_container flex justify-center">
        
          <div key={map} className="flex justify-center">
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
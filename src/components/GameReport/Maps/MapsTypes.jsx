import React, { useState, useEffect, useRef } from "react";
import { gameReportStore } from "../../../store/gameReportStore";
import Maps from "./Maps";

const MapsTypes = () => {
  
  
  const {mapType, addMapType, clearMapType, toggleMapModal } = gameReportStore();
  const [mapTypes, setMapTypes] = useState([
    "Escort",
    "Hybrid",
    "Control",
    "Push",
  ]);

  const handleMapTypeClick = async (e) => {

    if (mapType === e.target.value) {
      clearMapType()
    }
      else {
    const mapTypeValue = e.target.value;
    addMapType(mapTypeValue);
    }
    toggleMapModal();
  };
  
  const mapModalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mapModalRef.current &&
        !mapModalRef.current.contains(event.target)
      ) {
        clearMapType()
        toggleMapModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mapModalRef]);

  return (
    <div className="map_container  flex flex-col items-center gap-6"
    ref={mapModalRef}>
      <div className="maptype_container flex justify-center w-1/2  bg-inactiveColor text-inactiveText rounded-sm">
        {mapTypes.map((mapT) => (
          <button
            type="button"
            key={mapT}
            onClick={handleMapTypeClick}
            value={mapT.toLowerCase()}
            className={`${
              mapType === mapT.toLowerCase()
                ? "text-mainText bg-activeColor opacity-100 scale-110"
                : "opacity-50"
            } w-1/4 hover:bg-activeColor hover:text-mainText hover:opacity-100 rounded-sm h-8`}
          >
                        {mapT}
    
          </button>
        ))}
      </div>


  <Maps/>
</div>

  );
};

export default MapsTypes;

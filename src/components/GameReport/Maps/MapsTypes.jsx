import React, { useState } from "react";
import { gameReportStore } from "../../../store/gameReportStore";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MapsTypes = () => {
  const { mapType, addMapType, clearMapType, toggleMapModal } =
    gameReportStore();

  const [mapTypes, setMapTypes] = useState([
    { label: "Escort", icon: "Escort_icon.svg" },
    { label: "Hybrid", icon: "Hybrid_icon.svg" },
    { label: "Control", icon: "Control_icon.svg" },
    { label: "Push", icon: "Push_icon.svg" },
  ]);

  const handleMapTypeClick = async (e) => {
    if (mapType === e.currentTarget.value) {
      clearMapType();
    } else {
      const mapTypeValue = e.currentTarget.value;
      addMapType(mapTypeValue);
    }
    toggleMapModal();
  };

  return (
      <div className="flex text-inactiveText rounded-sm">
        {mapTypes.map((mapT) => (
          <div className="w-1/4">
            <button
              type="button"
              key={mapT.label}
              onClick={handleMapTypeClick}
              value={mapT.label.toLowerCase()}
              className={`${
                mapType === mapT.label.toLowerCase() ? "scale-110 " : ""
              } hover:text-mainText rounded-sm h-20 `}
            >
              <img
                className=" h-10 filter hover:brightness-200"
                src={`images/mapTypes/${mapT.icon}`}
                alt="map type icon"
              />
            </button>
          </div>
        ))}
      </div>
  );
};

export default MapsTypes;

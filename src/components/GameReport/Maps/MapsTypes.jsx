import React, { useState, useEffect, useRef } from "react";
import { gameReportStore } from "../../../store/gameReportStore";
import Maps from "./Maps";

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

  const mapModalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mapModalRef.current && !mapModalRef.current.contains(event.target)) {
        clearMapType();
        toggleMapModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mapModalRef]);

  return (
    <div
      className="map_container  flex flex-col items-center gap-6"
      ref={mapModalRef}
    >
      <div className="maptype_container flex justify-center w-1/4  text-inactiveText rounded-sm">
        {mapTypes.map((mapT) => (
          <button
            type="button"
            key={mapT.label}
            onClick={handleMapTypeClick}
            value={mapT.label.toLowerCase()}
            className={`${
              mapType === mapT.label.toLowerCase()
                ? "scale-110 bg-thirdColor"
                : ""
            } w-1/4 hover:text-mainText rounded-sm h-8`}
          >
            <img className="h-10 filter hover:brightness-200"
            src={`images/mapTypes/${mapT.icon}`} alt="map type icon" />
          </button>
        ))}
      </div>

      <Maps />
    </div>
  );
};

export default MapsTypes;

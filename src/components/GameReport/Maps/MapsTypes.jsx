import React, { useState, useEffect, useRef } from "react";
import { gameReportStore } from "../../../store/gameReportStore";
import Maps from "./Maps";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carouselSettings2 from "../../../utils/carouselSettings2"; 


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
      className="map_container flex flex-col items-center"
      ref={mapModalRef}
    >
        {/* {mapTypes.map((mapT) => (
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
        ))} */}


      <div className="maptype_container w-1/2  flex justify-around  text-inactiveText rounded-sm">
        {mapTypes.map((mapT) => (
          <div className="w-1/4">
          <button
            type="button"
            key={mapT.label}
            onClick={handleMapTypeClick}
            value={mapT.label.toLowerCase()}
            className={`${
              mapType === mapT.label.toLowerCase()
                ? "scale-110 "
                : ""
            } hover:text-mainText rounded-sm h-20 `}
          >
            <img className=" h-10 filter hover:brightness-200"
            src={`images/mapTypes/${mapT.icon}`} alt="map type icon" />
          </button>
          </div>
        ))}
      </div>
      <Maps />
    </div>
  );
};

export default MapsTypes;

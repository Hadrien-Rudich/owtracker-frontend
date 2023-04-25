import React from "react";
import { gameReportStore } from "../../../store/gameReportStore";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MapTypes = () => {
  const {
    mapType,
    addMapType,
    clearMapType,
    toggleMapModal,
    typesData,
  } = gameReportStore();

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
    <div className="flex justify-around items-center content-center text-inactiveText rounded-sm">
      {typesData.map((type) => (
        <div className="">
          <button
            type="button"
            key={type.label}
            onClick={handleMapTypeClick}
            value={type.label.toLowerCase()}
            className={`${
              mapType === type.label.toLowerCase()
                ? "scale-125 filter brightness-200"
                : "filter hover:scale-125 hover:brightness-200"
            } hover:text-mainText rounded-sm flex justify-center items-center drop-shadow-lg`}
          >
            <img
              className="h-10"
              src={`images/mapTypes/${type.imageUrl}`}
              alt="map type icon"
            />
          </button>
        </div>
      ))}
    </div>
  );
};

export default MapTypes;

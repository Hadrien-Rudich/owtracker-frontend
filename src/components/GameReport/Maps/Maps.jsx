import React, { useEffect, useRef } from "react";
import MapsTypes from "./MapsTypes";
import MapsCarousel from "./MapsCarousel";
import { gameReportStore } from "../../../store/gameReportStore";

const Maps = () => {
  const { clearMapType, toggleMapModal} = gameReportStore();

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
      ref={mapModalRef}
      className="h-64 map_container flex flex-col items-center"
    >
      <div className="maptype_container w-1/2 h-20">
        <MapsTypes />
      </div>
      <div className="maps_container w-1/2 h-32">
        <MapsCarousel />
      </div>
    </div>
  );
};

export default Maps;

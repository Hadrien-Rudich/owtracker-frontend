import React, { useEffect, useRef } from "react";
import { fetchMapsData } from "../../../services/ApiService";
import MapsTypes from "./MapsTypes";
import MapsCarousel from "./MapsCarousel";
import { gameReportStore } from "../../../store/gameReportStore";

const Maps = () => {
  const { clearMapType, toggleMapModal, addMapsData } = gameReportStore();

  useEffect(() => {
    async function getMapsData() {
      try {
        const data = await fetchMapsData();
        addMapsData(data);
      } catch (error) {
        console.error("Failed to fetch maps data", error);
      }
    }

    getMapsData();
  }, []);

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
    <div className="maps_container flex justify-center h-48">
    <div
      ref={mapModalRef}
      className="w-1/2"
    >
      <div className="maptype_container h-16">
        <MapsTypes />
      </div>
      <div className="maps_container h-32">
        <MapsCarousel />
      </div>
    </div>
    </div>
  );
};

export default Maps;

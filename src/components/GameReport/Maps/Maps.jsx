import React, { useEffect, useRef } from "react";
import { fetchMapsData, fetchTypesData } from "../../../services/ApiService";
import MapTypes from "./MapTypes";
import MapsCarousel from "./MapsCarousel";
import { gameReportStore } from "../../../store/gameReportStore";

const Maps = () => {
  const { clearMapType, toggleMapModal, addMapsData, addTypesData, map } =
    gameReportStore();

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

  useEffect(() => {
    async function getTypesData() {
      try {
        const data = await fetchTypesData();
        addTypesData(data);
      } catch (error) {
        console.error("Failed to fetch maps data", error);
      }
    }

    getTypesData();
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
    <div
      className={`${
        map !==  null
          ? ``
          : `testshadow2`
      } maps_container h-80`}
    >
      <div ref={mapModalRef} className="">
        <div className="maptype_container py-10">
          <MapTypes />
        </div>
        <div className="maps_container h-60 flex justify-center">
          <MapsCarousel />
        </div>
      </div>
    </div>
  );
};

export default Maps;

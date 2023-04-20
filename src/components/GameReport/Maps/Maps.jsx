import React, { useState, useEffect, useRef } from "react";
import { fetchMapsData } from "../../../services/ApiService";
import { gameReportStore } from "../../../store/gameReportStore";


const Maps = () => {

  
  const { map, addMap, clearMap, mapType, addMapType, clearMapType, mapsData, addMapsData, mapModal, toggleMapModal } = gameReportStore();
  const [mapsByType, setMapsByType] = useState([]);
  const [mapTypes, setMapTypes] = useState([
    "Escort",
    "Hybrid",
    "Control",
    "Push",
  ]);

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

  const handleMapTypeClick = async (e) => {

    if (mapType === e.target.value) {
      clearMapType()
    }
      else {
    const mapTypeValue = e.target.value;
    addMapType(mapTypeValue);
    const filteredMapsByType = mapsData.filter(
      (map) => map.type === mapTypeValue
    );
    setMapsByType(filteredMapsByType);}
    toggleMapModal();
  };
  const handleMapClick = (e) => {
    toggleMap(e.currentTarget.value);
  };

  const toggleMap = (m) => {
    if (map !== m) {
      addMap(m);
    } else {
      clearMap();
    }
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
      <div className="maptype_container flex justify-center w-1/4  bg-inactiveColor text-inactiveText border border-activeColor rounded-sm">
        {mapTypes.map((mapT) => (
          <button
            type="button"
            key={mapT}
            onClick={handleMapTypeClick}
            value={mapT.toLowerCase()}
            className={`${
              mapType === mapT.toLowerCase()
                ? "text-mainText scale-110 bg-activeColor border-2 border-mainText"
                : "border border-activeColor"
            } w-1/4 hover:bg-activeColor hover:text-mainText rounded-sm`}
          >
            {mapT}
          </button>
        ))}
      </div>

      <div className="mapimage_container flex flex-wrap h-58 w-1/2 justify-center items-center content-start">
  {mapType !== null && mapsByType.map((m) => (
    <div className="" key={m.slug}>
      <button
        className="bg-inactiveColor hover:bg-activeColor relative"
        value={m.slug}
        onClick={handleMapClick}
      >
        <img
          className={`${
            map?.includes(m.slug)
              ? " scale-105 bg-activeColor border-2 border-mainText relative z-10"
              : " opacity-40"
          } border border-activeColor rounded-sm w-44 h-28 `}
          src={`images/maps/${m.imageUrl}`}
          alt=""
        />
      </button>
    </div>
  ))}
</div>
    </div>
  );
};

export default Maps;

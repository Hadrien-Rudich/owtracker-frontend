import React, { useEffect, useRef } from "react";
import { fetchMapsData } from "../../../services/ApiService";
import { gameReportStore } from "../../../store/gameReportStore";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carouselSettings from "../../../utils/carouselSettings"; 

const MapsCarousel = () => {
  
  const {
    map,
    addMap,
    clearMap,
    clearMapType,
    mapType,
    mapsData,
    addMapsData,
    
  } = gameReportStore();

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


  return (
    <div className="carousel_container"
    ref={mapModalRef}
    >
      <Slider className="" {...carouselSettings}>
        {mapType !== null &&
          mapsData
            .filter((map) => map.type === mapType)
            .map((m) => (
              <div className="mapimage_container w-1/3" key={m.slug}>
                <button
                  className="bg-inactiveColor hover:bg-activeColor relative"
                  value={m.slug}
                  onClick={handleMapClick}
                >
                  <img
                    className={`${
                      map?.includes(m.slug)
                        ? " scale-105 bg-activeColor relative z-10 "
                        : "opacity-40"
                    }   hover:opacity-100`}
                    src={`images/maps/${m.imageUrl}`}
                    alt=""
                  />
                </button>
              </div>
            ))}
      </Slider>
      </div>
  );
};
export default MapsCarousel;

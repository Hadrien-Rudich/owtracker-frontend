import React, { useEffect } from "react";
import { fetchMapsData } from "../../../services/ApiService";
import { gameReportStore } from "../../../store/gameReportStore";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carouselSettings from "../../../utils/carouselSettings";

const MapsCarousel = () => {
  const { map, addMap, clearMap, mapType, mapsData, addMapsData } =
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
    <div className="carousel_container">
      <Slider {...carouselSettings}>
        {mapType !== null &&
          mapsData
            .filter((map) => map.type === mapType)
            .map((m) => (
              <div className="mapimage_container w-1/3" key={m.slug}>
                <button
                  className="bg-inactiveColor hover:bg-activeColor relative"
                  value={m.slug}
                  onClick={handleMapClick}
                  type="button"
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

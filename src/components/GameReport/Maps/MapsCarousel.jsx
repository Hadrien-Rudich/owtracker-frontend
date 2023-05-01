import React from "react";
import { gameReportStore } from "../../../store/gameReportStore";
import { filterMapTypes } from "../../../utils/filters";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carouselSettings from "../../../utils/carouselSettings";

const MapsCarousel = () => {
  const { map, addMap, clearMap, mapType, mapsData } = gameReportStore();

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

  const filteredMaps = filterMapTypes(mapsData, mapType);

  return (
    <div className="carousel_container w-3/4">
      <Slider {...carouselSettings}>
        {mapType !== null &&
         filteredMaps
            .map((m) => (
              <div className="mapimage_container" key={m.id}>
                <button
                  className="bg-inactiveColor hover:bg-activeColor relative"
                  value={m.slug}
                  onClick={handleMapClick}
                  type="button"
                >
                  <img
                    className={`${
                      map?.includes(m.id)
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

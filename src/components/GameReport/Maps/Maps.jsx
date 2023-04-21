import React, { useEffect } from "react";
import { fetchMapsData } from "../../../services/ApiService";
import { gameReportStore } from "../../../store/gameReportStore";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Maps = () => {
  const settings = {
    // dots: true,
    // centerMode: true,
    // centerPadding: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const {
    map,
    addMap,
    clearMap,
    mapType,
    mapsData,
    addMapsData,
    
  } = gameReportStore();

  
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
      <Slider className="map_container w-1/2" {...settings}>
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
                        ? " scale-105 bg-activeColor  relative z-10"
                        : "opacity-40"
                    }   hover:opacity-100`}
                    src={`images/maps/${m.imageUrl}`}
                    alt=""
                  />
                </button>
              </div>
            ))}
      </Slider>
  );
};
export default Maps;

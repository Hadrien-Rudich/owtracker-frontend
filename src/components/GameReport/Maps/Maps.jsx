import React from "react";
import MapsTypes from "./MapsTypes";
import MapsCarousel from "./MapsCarousel";

const Maps = () => {
  return (
    <div className="h-44 map_container flex flex-col items-center">
      <div className="maptype_container w-1/2">
        <MapsTypes />
      </div>
      <div className="map_container w-1/2">
        <MapsCarousel />
      </div>
    </div>
  );
};

export default Maps;

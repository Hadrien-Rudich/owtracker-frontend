import React from "react";
import { gameReportStore } from "../../../store/gameReportStore";
import { filterMapTypes } from "../../../utils/filters";

const Map = () => {
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
    <div className="map_container pb-6 flexdiv flex-wrap px-6">
      {mapType !== null &&
        filteredMaps.map((m) => (
          <button
            className={`${
              map?.includes(m.slug.toLowerCase())
                ? " scale-105 bg-activeColor opacity-100 relative z-10 rounded-sm border border-thirdColor"
                : "opacity-40"
            }   mapimage_container sm:w-1/4 w-2/4  border border-activeColor hover:opacity-100 shadow-lg rounded-sm`}
            key={m.id}
            value={m.slug}
            onClick={handleMapClick}
            type="button"
          >
            <img src={`images/maps/${m.imageUrl}`} alt="" />
          </button>
        ))}
    </div>
  );
};
export default Map;

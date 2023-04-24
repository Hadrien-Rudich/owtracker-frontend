import React, { useEffect } from "react";
import { fetchHeroesData } from "../../../services/ApiService";
import { gameReportStore } from "../../../store/gameReportStore";
import HeroesRoles from "./HeroesRoles";

const Heroes = () => {

  const {
  addHeroesData,

  } = gameReportStore();
  
  useEffect(() => {
    async function getHeroesData() {
      try {
        const data = await fetchHeroesData();
        addHeroesData(data);
      } catch (error) {
        console.error("Failed to fetch heroes data", error);
      }
    }

    getHeroesData();
  }, []);

  return (
    <div
      className="heroes_container">
      <HeroesRoles />
    </div>
  );
};

export default Heroes;

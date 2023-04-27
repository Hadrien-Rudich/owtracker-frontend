import React, { useEffect } from "react";
import { fetchHeroesData, fetchRolesData } from "../../../services/ApiService";
import { gameReportStore } from "../../../store/gameReportStore";
import HeroesRoles from "./HeroesRoles";

const Heroes = () => {
  const { addHeroesData, addRolesData, heroes } = gameReportStore();

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

  useEffect(() => {
    async function getRolesData() {
      try {
        const data = await fetchRolesData();
        addRolesData(data);
      } catch (error) {
        console.error("Failed to fetch roles data", error);
      }
    }

    getRolesData();
  }, []);

  return (
    <div className={`${heroes.length !== 0 ? `` : `testshadow2`} heroes_container`}>
      <HeroesRoles />
    </div>
  );
};

export default Heroes;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Heroes from "./Heroes/Heroes";
import Result from "./Result";
import Reset from "./Reset";
import SubmitForm from "./SubmitForm";
import GameReportRecap from "../GameReport/Overview/GameReportRecap";

import { authStore } from "../../store/authStore";
import Maps from "./Maps/Maps";
import { gameReportStore } from "../../store/gameReportStore";

const Gamereport = () => {
  const navigate = useNavigate();

  const { isLoggedIn } = authStore();
  const { map, heroes, gameResult } = gameReportStore();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
    [isLoggedIn, navigate];
  });

  return (
    <div className="gamereport_container flexdiv">
      <div className=" my-24 w-1/2">
        <div
          className={`${
            gameResult !== null ? `` : `testshadow2`
          } resultcomponent_container`}
        >
          <Result />
        </div>
        <div
          className={`${
            heroes.length !== 0 ? `` : `testshadow2`
          } heroes_componentcontainer`}
        >
          <Heroes />
        </div>
        <div
          className={`${
            map !== null ? `` : `testshadow2`
          } mapscomponent_container`}
        >
          <Maps />
        </div>

        <GameReportRecap />

        <div className="flexdiv gap-10">
          <Reset />

          <SubmitForm />
        </div>
      </div>
    </div>
  );
};

export default Gamereport;

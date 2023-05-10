import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Heroes from "./Heroes/Heroes";
import Result from "./Result/Result";
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
    <div className="GameReport_container container mx-auto flexdiv">
      <div className=" my-48 w-full rounded-sm">
        <div
          className={`${
            gameResult !== null ? `` : `testshadow2`
          } Result_container`}
        >
          <Result />
        </div>
        {gameResult !== null && (
          <div
            className={`${
              heroes.length !== 0 ? `` : `testshadow2`
            } Heroes_componentcontainer`}
          >
            <Heroes />
          </div>
        )}
        {heroes.length > 0 && (
          <div
            className={`${
              map !== null ? `` : `testshadow2`
            } Maps_container`}
          >
            <Maps />
          </div>
        )}
        <GameReportRecap />
        
        {gameResult !== null && map !== null && heroes.length > 0 &&
        <div className="flexdiv gap-10 my-24">
          <Reset />

          <SubmitForm />
        </div>
}
      </div>
    </div>
  );
};

export default Gamereport;

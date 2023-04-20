import React, { useState } from "react";
import { gameReportStore } from "../../store/gameReportStore";

const Result = () => {
  const { gameResult, addGameResult } = gameReportStore();

  const [outcomes, setOutcomes] = useState([
    { label: "win", color: "green" },
    { label: "draw", color: "yellow" },
    { label: "loss", color: "red" },
  ]);

  const handleClick = (e) => {
    toggleGameResult(e.target.value);
  };

  const toggleGameResult = (selectedResult) => {
      addGameResult(selectedResult);
  };

  return (
    <div className="result_container flex justify-center">
      <div className="resultoutcome_container flex justify-center w-1/4 bg-inactiveColor text-inactiveText rounded-sm">
        {outcomes.map((outcome) => (
          <button
            onClick={handleClick}
            key={outcome.label}
            type="button"
            value={outcome.label}
            className={`${
              gameResult === outcome.label && gameResult === "win"
              ? `text-mainText scale-110 bg-activeWin opacity-100 z-50`
              : gameResult === outcome.label && gameResult === "loss"              
              ?`text-mainText scale-110 bg-activeLoss opacity-100 z-50`
              : gameResult === outcome.label && gameResult === "draw"
              ? `text-mainText scale-110 bg-activeDraw opacity-100 z-50`
              : gameResult !== "win" || gameResult !== "loss" || gameResult !== "draw"
              ? `hover:bg-activeColor hover:text-mainText`
              : null
              
          } w-1/2  rounded-sm opacity-50 hover:opacity-100 `}
          >
            {outcome.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Result;

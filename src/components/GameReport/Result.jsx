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
      <div className="resultoutcome_container flex justify-center w-1/4  bg-inactiveColor text-inactiveText border border-activeColor rounded-sm">
        {outcomes.map((outcome) => (
          <button
            onClick={handleClick}
            key={outcome.label}
            type="button"
            value={outcome.label}
            className={`${
              gameResult === outcome.label && gameResult === "win"
              ? `text-mainText scale-110 bg-activeWin border-2 border-mainText`
              : gameResult === outcome.label && gameResult === "loss"              
              ?`text-mainText scale-110 bg-activeLoss border-2 border-mainText`
              : gameResult === outcome.label && gameResult === "draw"
              ? `text-mainText scale-110 bg-activeDraw border-2 border-mainText`
              : gameResult !== "win" || gameResult !== "loss" || gameResult !== "draw"
              ? `hover:bg-activeColor hover:text-mainText`
              : null
              
          } w-1/2  rounded-sm`}
          >
            {outcome.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Result;

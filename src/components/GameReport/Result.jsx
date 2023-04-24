import React, { useState } from "react";
import { gameReportStore } from "../../store/gameReportStore";

const Result = () => {
  const { gameResult, addGameResult, clearGameResult } = gameReportStore();

  const [outcomes, setOutcomes] = useState([
    { label: "win", color: "green" },
    { label: "draw", color: "yellow" },
    { label: "loss", color: "red" },
  ]);

  const handleClick = (e) => {
    toggleGameResult(e.target.value);
  };

  const toggleGameResult = (selectedResult) => {
    if (selectedResult !== gameResult ) {

      addGameResult(selectedResult);

    } else {
      clearGameResult()
    }
    };

  return (
    <div className="result_container flex justify-center">
      <div className="resultoutcome_container flex justify-center w-1/2 bg-inactiveColor text-inactiveText rounded-sm shadow-lg">
        {outcomes.map((outcome) => (
          
          <button
            onClick={handleClick}
            key={outcome.label}
            type="button"
            value={outcome.label}            
                        className={`${
              gameResult === outcome.label && gameResult === "win"
              ? `text-mainText scale-110 bg-activeWin opacity-100 z-50 shadow-lg`
              : gameResult === outcome.label && gameResult === "loss"              
              ?`text-mainText scale-110 bg-activeLoss opacity-100 z-50 shadow-lg`
              : gameResult === outcome.label && gameResult === "draw"
              ? `text-mainText scale-110 bg-activeDraw opacity-100 z-50 shadow-lg`
              : gameResult !== "win" || gameResult !== "loss" || gameResult !== "draw"
              ? `hover:bg-activeColor hover:text-mainText opacity-50`
              : null
              
          } w-1/2  h-8 rounded-sm hover:opacity-100`}
          > {outcome.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Result;

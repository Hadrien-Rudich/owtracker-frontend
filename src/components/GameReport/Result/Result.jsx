import React, { useState } from "react";
import { gameReportStore } from "../../../store/gameReportStore";

const Result = () => {
  const { gameResult, addGameResult, clearGameResult } = gameReportStore();

  const [outcomes, setOutcomes] = useState([
    { label: "win", },
    { label: "draw", },
    { label: "loss"},
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
    <div  className="result_container flexdiv bg-inactiveColor rounded-sm intenseShadow">
      <div className="resultoutcome_container flexdiv w-full md:text-xl text-lg rounded-sm">
        {outcomes.map((outcome) => (
          
          <button
            onClick={handleClick}
            key={outcome.label}
            type="button"
            value={outcome.label}            
                        className={`${
              gameResult === outcome.label && gameResult === "win"
              ? `text-mainText scale-105 bg-activeWin opacity-100 z-20 shadow-lg`
              : gameResult === outcome.label && gameResult === "loss"              
              ?`text-mainText scale-105 bg-activeLoss opacity-100 z-20 shadow-lg`
              : gameResult === outcome.label && gameResult === "draw"
              ? `text-mainText scale-105 bg-activeDraw opacity-100 z-20 shadow-lg`
              : gameResult !== "win" || gameResult !== "loss" || gameResult !== "draw"
              ? `hover:bg-activeColor hover:scale-105 `
              : null
              
          } w-1/3 h-10 tracking-widest rounded-sm hover:opacity-100`}
          > {outcome.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Result;

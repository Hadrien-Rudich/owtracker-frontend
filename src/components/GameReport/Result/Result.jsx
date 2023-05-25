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
    <div  className="Result_container flexdiv bg-mainColor rounded-sm intenseShadow">
      <div className="resultoutcome_container flexdiv w-full md:text-xl text-lg rounded-sm">
        {outcomes.map((outcome) => (
          
          <button
            onClick={handleClick}
            key={outcome.label}
            type="button"
            value={outcome.label}            
                        className={`${
              gameResult === outcome.label && gameResult === "win"
              ? `result win `
              : gameResult === outcome.label && gameResult === "loss"              
              ? `result loss`
              : gameResult === outcome.label && gameResult === "draw"
              ? `result draw`
              : gameResult !== "win" || gameResult !== "loss" || gameResult !== "draw"
              ? `hover:bg-activeColor hover:scale-105 `
              : null
              
          } w-1/3 h-10 tracking-widest rounded-sm hover:opacity-100  `}
          > {outcome.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Result;

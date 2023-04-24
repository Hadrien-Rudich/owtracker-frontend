import { useEffect } from "react";

import { historyStore } from "../../store/historyStore";

const MonthTabs = () => {
  const { currentMonth, setCurrentMonth } = historyStore();

  const months = [
    { label: "Year", index: 0 },
    { label: "January", index: 1 },
    { label: "February", index: 2 },
    { label: "March", index: 3 },
    { label: "April", index: 4 },
    { label: "May", index: 5 },
    { label: "June", index: 6 },
    { label: "July", index: 7 },
    { label: "August", index: 8 },
    { label: "September", index: 9 },
    { label: "October", index: 10 },
    { label: "November", index: 11 },
    { label: "December", index: 12 },
  ];

  const handleClick = (e) => {
    setCurrentMonth(e.currentTarget.value);
  };

  return (
  <div className="flex justify-center">
    <div className="monthTab_container flex justify-center items-center gap-2 w-1/2  py-2 bg-secondaryColor">
      {months.map((month) => (
        <button
          key={month.index}
          value={month.index}
          onClick={handleClick}
          type="button"
          className={`${
            Number(currentMonth) === Number(month.index)
              ? `text-thirdColor 
            `
              : `text-mainColor
            `
          }
        text-sm
        
        
        `}
        >
          {month.label}
        </button>
      ))}
    </div>
    </div>
  );
};

export default MonthTabs;

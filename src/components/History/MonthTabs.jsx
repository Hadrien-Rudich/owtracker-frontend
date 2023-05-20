import { historyStore } from "../../store/historyStore";

const MonthTabs = () => {
  const { currentMonth, setCurrentMonth } = historyStore();

  const months = [
    { label: "all", index: 0 },
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
    <div className="monthTab_container">
      <div className="rounded-sm shadow-lg flex ">
      {months.map((month, index) => (
        <button
          key={month.index}
          value={month.index}
          onClick={handleClick}
          type="button"
          className={`${
            Number(currentMonth) === Number(month.index)
              ? `bg-thirdColor text-secondaryText scale-110 rounded-sm`
              : `bg-inactiveColor hover:bg-activeColor`
          } w-1/12 h-8 tracking-widest
            ${index === 0 ? "rounded-sm rounded-r-none" : ""} ${
            index === months.length - 1 ? "rounded-sm rounded-l-none" : ""
          }`}
        >
          {month.label.substring(0, 3)}
        </button>
      ))}
      </div>
    </div>
  );
};

export default MonthTabs;

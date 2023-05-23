import { historyStore } from "../../store/historyStore";
import { filterHistory } from "../../utils/filters";

const HistoryDetails = () => {
  const { historyData, currentMonth } = historyStore();

  const filteredHistory = filterHistory(currentMonth, historyData);

  return (
    <div className="flexdiv col gap-0.5 tracking-wider">
      {filteredHistory.map((history) => (
        <div
          key={history.id}
          className="gameHistory_container w-full flexdiv h-12 bg-mainColor hover:bg-activeColor rounded-sm shadow-sm"
        >
          <div className="relative mapImage_container w-5/12">
            <img
              className="h-12 w-full object-cover rounded-sm rounded-r-none"
              src={`images/maps/${history.mapImageUrl}`}
              alt=""
            />
            <div className="absolute inset-0">
              <p className="absolute top-1/2 left-0 transform -translate-y-1/2 text-secondaryText px-1 bg-mainText bg-opacity-40">
                {history.map}
              </p>
            </div>
          </div>
          <div className="heroImage_container w-5/12 flexdiv gap-0.5 ">
            {history.heroesImageUrl.map((heroImage, index) => (
              <img
                key={index}
                src={`images/heroes/${heroImage}`}
                className="h-10"
                alt=""
              />
            ))}
          </div>
          <div
            className={`${
              history.result === "win" ? `bg-activeWin` : 
              history.result === "loss" ? `bg-activeLoss` :
              
              `bg-activeDraw`
            }     
            result_container flexdiv w-1/12 `}
          >
            <p>{history.result}</p>
          </div>
          <div className="w-1/12">
            <p>{history.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HistoryDetails;

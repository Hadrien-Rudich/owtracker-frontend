import { historyStore } from "../../store/historyStore";

const HistoryDetails = () => {
  const { historyData, currentMonth } = historyStore();

  const filterHistory = () => {
    if (Number(currentMonth) === 0) {
      return historyData;
    } else {
      return historyData.filter(
        (game) => Number(game.date.slice(3)) === Number(currentMonth)
      );
    }
  };

  const filteredHistory = filterHistory();

  return (
    <div className="historyDetails_container flexdiv col gap  text-secondaryText">
      {filteredHistory.map((history) => (
        <div
          key={history.id}
          className="gameHistory_container w-1/2 flexdiv  h-12 bg-inactiveColor hover:bg-activeColor text-mainText border border-activeColor"
        >
          <div className="relative mapImage_container w-5/12">
            <img
              className="h-11 w-full object-cover"
              src={`images/maps/${history.mapImageUrl}`}
              alt=""
            />
            <div className="absolute inset-0">
              <p className="absolute top-1/2 left-0 transform -translate-y-1/2 text-secondaryText px-1 bg-mainText bg-opacity-40">
                {history.map}
              </p>
            </div>
          </div>
          <div className="heroImage_container w-5/12 flexdiv gap-px ">
            {history.heroesImageUrl.map((heroImage, index) => (
              <img
                key={index}
                src={`images/heroes/${heroImage}`}
                className="h-8"
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
          <div className="w-1/12 text-black ">
            <p>{history.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HistoryDetails;

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
    <div className="historyDetails_container flex flex-col items-center gap  text-secondaryText">
      {filteredHistory.map((history) => (
        <div
          key={history.id}
          className="gameHistory_container w-1/2 flex flex-row items-center h-12 bg-secondaryColor text-mainText border border-activeColor"
        >
          <div className="relative mapImage_container w-5/12">
            <img
              className="h-10 w-full object-cover"
              src={`images/maps/${history.mapImageUrl}`}
              alt=""
            />
            <div className="absolute inset-0">
              <p className="absolute top-1/2 left-0 transform -translate-y-1/2 text-secondaryText  text-sm px-1 bg-mainText bg-opacity-40">
                {history.map}
              </p>
            </div>
          </div>
          <div className="heroImage_container w-5/12 flex flex-row justify-center gap-px ">
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
              history.result === "win" ? `bg-green-500` : `bg-red-500`
            }     
            result_container flex flex-row justify-center w-1/12 `}
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

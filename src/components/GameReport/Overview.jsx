
import { gameReportStore } from "../../store/gameReportStore";
import MapsOverview from "./Overview/MapsRecap";
import HeroesOverview from "./Overview/HeroesRecap";


const Overview = () => {
  const {
    gameResult
  } = gameReportStore();

  return (

      <div className="overview_container flex justify-center items-center content-center">
     < MapsOverview/>
     < HeroesOverview/>
        <p>{gameResult}</p>
      </div>
  );
};

export default Overview;

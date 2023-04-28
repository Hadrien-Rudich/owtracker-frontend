import { gameReportStore } from "../../store/gameReportStore";


const Reset = () => {

  const { clearMapType, clearMap, clearHeroes, clearGameResult, clearRole  } = gameReportStore();


  const handleClick = () => {
    resetSelection()
  }
 
  const resetSelection = () => {
    clearMapType()
    clearMap()
    clearHeroes()
    clearGameResult()
    clearRole()
    
  };

  return (
    <div className=''>
      <button type="reset" onClick={handleClick} className='button cancel'>
Reset
      </button>
    </div>
  )
}

export default Reset
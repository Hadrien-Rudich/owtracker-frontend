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
      <button type="reset" onClick={handleClick} className='w-24 h-8 text-mainText bg-secondaryColor tracking-widest hover:scale-110 shadow-md rounded-sm'>
Reset
      </button>
    </div>
  )
}

export default Reset
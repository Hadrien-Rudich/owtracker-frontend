import { gameReportStore } from "../../store/gameReportStore";


const Reset = () => {

  const { clearMapType, clearMap, clearHeroes, clearGameResult  } = gameReportStore();


  const handleClick = () => {
    resetSelection()
  }
 
  const resetSelection = () => {
    clearMapType()
    clearMap()
    clearHeroes()
    clearGameResult()
    
  };

  return (
    <div className=''>
      <button type="button" onClick={handleClick} className='w-16 h-6 text-mainText  bg-secondaryColor  hover:scale-110 shadow-md rounded-sm'>
Reset
      </button>
    </div>
  )
}

export default Reset
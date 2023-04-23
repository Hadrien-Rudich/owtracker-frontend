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
      <button type="button" onClick={handleClick} className='bg-secondaryColor text-mainText w-16 h-8 rounded-sm hover:scale-110'>
Reset
      </button>
    </div>
  )
}

export default Reset
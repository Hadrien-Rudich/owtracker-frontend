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
      <button type="button" onClick={handleClick} className='bg-secondaryColor text-mainText hover:bg-activeColor w-14 border-solid border border-gray-400'>
Reset
      </button>
    </div>
  )
}

export default Reset
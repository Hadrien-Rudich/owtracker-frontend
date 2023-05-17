const filterHistory = (month, data) => {
  if (Number(month) === 0) {
    return data;
  } else {
    return data.filter((game) => Number(game.date.slice(3)) === Number(month));
  }
};

const filterMapTypes = (mapsData, mapType) => {
  const result = mapsData.filter((map) => map.type === mapType);
  return result;
};



export { filterHistory, filterMapTypes};

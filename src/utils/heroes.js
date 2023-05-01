const toggleHero = (selectedHero, heroes, addHero, removeHero) => {
  const heroInList = heroes.includes(selectedHero);

  if (!heroInList) {
    addHero(selectedHero);
  } else {
    removeHero(selectedHero);
  }
};

export { toggleHero};

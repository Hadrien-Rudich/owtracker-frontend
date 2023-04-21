import { create } from "zustand";

const gameReportStore = create((set) => ({
  heroesData: [],
  addHeroesData: (heroes) => set(() => ({ heroesData: heroes })),
  heroes: [],
  addHero: (hero) => set((state) => ({ heroes: [...state.heroes, hero] })),
  removeHero: (hero) => {
    set((state) => ({
      heroes: state.heroes.filter((h) => h !== hero),
    }));
  },
  clearHeroes: () => set(() => ({ heroes: [] })),
  mapsData: [],
  addMapsData: (maps) => set(() => ({ mapsData: maps })),
  map: "",
  addMap: (map) => set(() => ({ map: map })),
  mapType: null,
  addMapType: (mapType) => set(() => ({ mapType: mapType })),
  clearMapType: () => set(() => ({ mapType: null })),
  clearMap: () => set(() => ({ map: null})),
  gameResult: null,
  addGameResult: (gameResult) => set(() => ({ gameResult: gameResult })),
  clearGameResult: () => set(() => ({ gameResult: null })),
  role: null,
  addRole: (role) => set(() => ({ role: role })),
  roleModal: false,
  toggleRoleModal: () => set((state) => ({ roleModal: !state.roleModal })),
  mapModal: false,
  toggleMapModal: () => set((state) => ({ mapModal: !state.mapModal })),
}));

export { gameReportStore };

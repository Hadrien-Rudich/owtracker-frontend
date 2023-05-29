import { create } from 'zustand';

const historyStore = create((set) => ({
  historyData: [],
  addHistoryData: (history) => set(() => ({ historyData: history })),
  removeHistoryData: () => {
    set(() => ({
      historyData: [],
    }));
  },
  currentMonth: 0,
  setCurrentMonth: (month) =>
    set(() => ({
      currentMonth: month,
    })),
}));

export default historyStore;

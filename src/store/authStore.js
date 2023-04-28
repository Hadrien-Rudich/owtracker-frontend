import { create } from "zustand";

const authStore = create((set) => ({
  userData: {},
  isLoggedIn: false,
  logIn: () => set(() => ({ isLoggedIn: true })),
  logOut: () => set(() => ({ isLoggedIn: false })),
  setUserData: (userData) => set(() => ({ userData })),
  editAccount: false,
  toggleEditAccount: () => set((state) => ({ editAccount: !state.editAccount })),
  editPassword: false,
  toggleEditPassword: () => set((state) => ({ editPassword: !state.editPassword })),
  newEmail: "",
  setNewEmail: (email) => set(() => ({ newEmail: email })),
  clearNewEmail: () => set(() => ({ newEmail: "" })),
  newPassword: "",
  setNewPassword: (password) => set(() => ({ newPassword: password })),
  clearNewPassword: () => set(() => ({ newPassword: "" })),
  confirmNewPassword: "",
  setConfirmNewPassword: (password) => set(() => ({ confirmNewPassword: password })),
  clearConfirmNewPassword: () => set(() => ({ confirmNewPassword: "" })),
  newBattleTag: "",
  setNewBattleTag: (battleTag) => set(() => ({ newBattleTag: battleTag })),
  clearNewBattleTag: () => set(() => ({ newBattleTag: "" })),

}));

export { authStore };

import { create } from "zustand";

const profileStore = create((set) => ({
  profilesData: [],
  addProfilesData: (profiles) => set(() => ({ profilesData: profiles })),
  profile: "",
  setProfile: (profile) =>
    set(() => ({
      profile: profile,
    })),
    clearProfile: () =>
    set(() => ({
      profile: ""  })),
  newProfile: "",
  setNewProfile: (profile) =>
    set(() => ({
      newProfile: profile,
    })),
  addNewProfile: (profile) =>
    set((state) => ({
      profilesData: [...state.profilesData, { label: profile }],
    })),
  clearNewProfile: () =>
    set(() => ({
      newProfile: "",
    })),

  deleteProfile: (profile) => {
    set((state) => ({
      profilesData: state.profilesData.filter((p) => p.label !== profile),
    }));
  },
}));

export { profileStore };

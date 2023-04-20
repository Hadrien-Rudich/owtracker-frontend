import { create } from "zustand";

const profileStore = create((set) => ({
  profileData: [],
  addProfileData: (profiles) => set(() => ({ profileData: profiles })),
  removeProfileData: () => {
    set(() => ({
      profileData: [],
    }));
  },
  currentProfile: "",
  setCurrentProfile: (profile) =>
    set(() => ({
      currentProfile: profile,
    })),
  newProfile: "",
  setNewProfile: (profile) =>
    set(() => ({
      newProfile: profile,
    })),
  addNewProfile: (profile) =>
    set((state) => ({
      profileData: [...state.profileData, { label: profile }],
    })),
    
  deleteProfile: (profile) => {
    set((state) => ({
      profileData: state.profileData.filter((p) => p.label !== profile),
    }));
  },
}));

export { profileStore };

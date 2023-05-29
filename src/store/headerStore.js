import { create } from 'zustand';

const headerStore = create(() => ({
  locations: [
    { label: 'game', url: '/game' },
    { label: 'history', url: '/history' },
    { label: 'stats', url: '/stats' },
    { label: 'profiles', url: '/profiles' },
  ],
}));

export default headerStore;

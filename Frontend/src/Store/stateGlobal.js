import { createStore } from 'zustand';

const stateGlobal = createStore((set) => ({
  isStarted: false,
  started: () => set({ isStarted: true }),
}));

export default stateGlobal;

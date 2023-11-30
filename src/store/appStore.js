import { create } from "zustand";

const defaultState = {
  isStartClicked: false,
  isMobileNavOpen: false,
};

const appStore = (set, get) => ({
  ...defaultState,
  toggleStart: () => set((prev) => ({ isStartClicked: !prev.isStartClicked })),
  toggleisMobileNavOpen: () => set((prev) => ({ isMobileNavOpen: !prev.isMobileNavOpen })),
});

export const useAppStore = create(appStore);

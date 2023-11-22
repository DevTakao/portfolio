import { create } from "zustand";

const defaultState = {
  isStartClicked: true,
};

const appStore = (set, get) => ({
  ...defaultState,
  toggleStart: () => set((prev) => ({ isStartClicked: !prev.isStartClicked })),
});

export const useAppStore = create(appStore);

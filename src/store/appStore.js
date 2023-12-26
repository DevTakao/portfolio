import { create } from "zustand";

const defaultState = {
  isStartClicked: false,
  isMobileNavOpen: false,
  currentMain: "profile",
  currentDisplay: "basicInfo",
};

const appStore = (set) => ({
  ...defaultState,
  toggleStart: () => set((prev) => ({ isStartClicked: !prev.isStartClicked })),
  toggleisMobileNavOpen: () => set((prev) => ({ isMobileNavOpen: !prev.isMobileNavOpen })),
  updateMain: (mainName) => {
    if (!mainName) {
      throw new Error("No data with for the mainName:", mainName);
    }
    set({
      currentDisplay: undefined,
      currentMain: mainName,
    });
  },
  updateDisplay: (contentName) => {
    if (!contentName) {
      throw new Error("No data with for the contentName:", contentName);
    }
    set({
      currentDisplay: contentName,
    });
  },
});

export const useAppStore = create(appStore);

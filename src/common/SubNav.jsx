import { CardAnimation } from "@animations";
import { NAV } from "../data/nav";
import { useAppStore } from "../store/appStore";
import { camelCaseToNormal } from "../utilities/text";
import { AnimatePresence, motion } from "framer-motion";

const SubNav = () => {
  const { currentMain, currentDisplay, updateDisplay, toggleisMobileNavOpen } = useAppStore((state) => ({
    currentMain: state.currentMain,
    currentDisplay: state.currentDisplay,
    updateDisplay: state.updateDisplay,
    toggleisMobileNavOpen: state.toggleisMobileNavOpen,
  }));

  const subList = NAV[currentMain];

  const handleClick = (key) => {
    updateDisplay(key);
    toggleisMobileNavOpen();
  };

  return (
    <div className="w-full h-full">
      <div className="w-full h-[45px] sm:h-[64px] bg-light relative z-10 shadow-md"></div>
      <AnimatePresence mode="wait">
        <motion.ul
          {...CardAnimation}
          key={currentMain}
          className="relative theme-scroll h-full z-0 my-2 overflow-y-auto text-sm md:text-base lg:text-xl flex flex-col divide-y-2 overscroll-contain bg-transparent"
        >
          {subList &&
            Object.keys(subList).map((key) => (
              <li
                key={key}
                onClick={() => handleClick(key)}
                className={`block px-1 md:px-10 py-2 sm:py-3 shadow-md cursor-pointer ${
                  currentDisplay === key ? "bg-yellow" : "bg-lightsoft"
                } hover:bg-yellow`}
              >
                {camelCaseToNormal(key)}
              </li>
            ))}
        </motion.ul>
      </AnimatePresence>
      <div className="w-full h-[45px] sm:h-[64px] bg-light relative z-10 shadow-md"></div>
    </div>
  );
};

export default SubNav;

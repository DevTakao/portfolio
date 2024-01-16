import { CardAnimation, CardContentAnimation, ContainerAnimation } from "@animations/animations";
import { NAV } from "../data/nav";
import { useAppStore } from "../store/appStore";
import { AnimatePresence, motion } from "framer-motion";

const DisplayCard = () => {
  const { currentMain, currentDisplay } = useAppStore((state) => ({
    currentMain: state.currentMain,
    currentDisplay: state.currentDisplay,
  }));

  return (
    <AnimatePresence mode="wait">
      {NAV[currentMain][currentDisplay] && (
        <motion.div {...ContainerAnimation} className="relative w-full h-full block origin-center">
          <div className="w-full h-[45px] sm:h-[75px] shadow-md bg-light relative z-10"></div>
          <AnimatePresence mode="wait">
            <motion.div
              {...CardAnimation}
              key={NAV[currentMain][currentDisplay]}
              className="max-h-[30vh] md:max-h-[50vh] my-2 text-base md:text-xl shadow-md bg-light origin-top overflow-y-auto theme-scroll"
            >
              <motion.div {...CardContentAnimation} className="relative z-0">
                {NAV[currentMain][currentDisplay]()}
              </motion.div>
            </motion.div>
          </AnimatePresence>
          <div className="w-full h-[45px] sm:h-[75px] shadow-md bg-light relative z-10"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DisplayCard;

import { CardAnimation, CardContentAnimation, ContainerAnimation } from "../animations/animations";
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
        <motion.div {...ContainerAnimation} className="relative w-full h-full inline-block origin-center">
          <div className="w-full min-h-[75px] shadow-2xl bg-light relative z-10"></div>
          <AnimatePresence mode="wait">
            <motion.div
              {...CardAnimation}
              key={NAV[currentMain][currentDisplay]}
              className="my-2 text-xl shadow-2xl bg-light origin-top overflow-y-auto theme-scroll"
            >
              <motion.div {...CardContentAnimation} className="p-8 max-h-[50vh] relative z-0">
                {NAV[currentMain][currentDisplay]()}
              </motion.div>
            </motion.div>
          </AnimatePresence>
          <div className="w-full min-h-[75px] shadow-2xl bg-light relative z-10"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DisplayCard;

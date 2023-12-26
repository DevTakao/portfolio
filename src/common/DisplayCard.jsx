import { CardAnimation, CardContentAnimation, ContainerAnimation } from "../animations/animations";
import { NAV } from "../data/nav";
import { useAppStore } from "../store/appStore";
import { AnimatePresence, motion } from "framer-motion";

const DisplayCard = () => {
  const { currentMain, currentDisplay } = useAppStore((state) => ({
    currentMain: state.currentMain,

    currentDisplay: state.currentDisplay,
  }));

  console.log("changed", NAV[currentMain][currentDisplay]);
  return (
    <AnimatePresence mode="wait">
      {NAV[currentMain][currentDisplay] && (
        <motion.div {...ContainerAnimation} className="relative w-full h-full inline-block origin-center">
          <div className="w-full min-h-[75px] shadow-2xl bg-light"></div>
          <AnimatePresence mode="wait">
            <motion.div
              {...CardAnimation}
              key={NAV[currentMain][currentDisplay]}
              className="my-2 text-2xl shadow-2xl bg-light origin-top"
            >
              <motion.div {...CardContentAnimation} className="p-8">
                {NAV[currentMain][currentDisplay]()}
              </motion.div>
            </motion.div>
          </AnimatePresence>
          <div className="w-full min-h-[75px] shadow-2xl bg-light"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DisplayCard;

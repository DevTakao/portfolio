import { NAV } from "../data/nav";
import { useAppStore } from "../store/appStore";
import { AnimatePresence, motion } from "framer-motion";

const ContainerAnimation = {
  initial: {
    scaleX: 0,
  },
  animate: {
    scaleX: 1,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    scaleX: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const CardAnimation = {
  initial: {
    height: 0,
  },
  animate: {
    height: "auto",
    transition: {
      delay: 0.2,
      duration: 0.5,
    },
  },
  exit: {
    height: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const CardContentAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.7,
    },
  },
  exit: {
    opacity: 0,
  },
};

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

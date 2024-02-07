import Loader from "@common/Loader";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import QuoteBG from "@assets/images/quote-bg.svg";

const fadeVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "linear",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "linear",
    },
  },
};

const bgArtVariants = {
  initial: {
    x: "-50%",
    y: "-50%",
    scale: 0,
    rotate: 0,
  },
  animate: {
    x: "-50%",
    y: "-50%",
    scale: 1.25,
    rotate: 55,
    transition: {
      duration: 0.75,
      ease: [0.2, 0.3, 0.8, 1],
    },
  },
  exit: {
    x: "-50%",
    y: "-50%",
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.2, 0.7, 0.9, 1],
    },
  },
};

const QuoteImage = ({ page, data }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    return () => {
      setLoaded(false);
    };
  }, [page]);

  return (
    <div className="ImageWrapper w-full h-[200px] sm:h-full sm:min-h-[300px] relative">
      <div style={{ display: loaded ? "none" : "block" }} className="w-full h-full flex items-center justify-center">
        <Loader />
      </div>
      <AnimatePresence mode="wait">
        <motion.img
          key={page}
          variants={bgArtVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          src={QuoteBG}
          className="absolute z-[0] top-[50%] left-[50%] w-full h-full object-contain"
        />
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.img
          onLoad={() => setLoaded(true)}
          key={page}
          variants={fadeVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          src={data[page]?.image}
          alt={data[page]?.alt}
          style={{ display: loaded ? "block" : "none" }}
          className="w-full h-full object-contain absolute inset-0 z-[1]"
        />
      </AnimatePresence>
    </div>
  );
};

export default QuoteImage;

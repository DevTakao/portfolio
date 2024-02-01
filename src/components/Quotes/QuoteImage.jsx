import Loader from "@common/Loader";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

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

const QuoteImage = ({ page, data }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    return () => {
      setLoaded(false);
    };
  }, [page]);

  return (
    <div className="ImageWrapper w-full h-[200px] sm:h-full sm:min-h-[300px] relative">
      <div
        style={{ display: loaded ? "none" : "block" }}
        className="w-full h-full px-[50%] mx-auto flex items-center justify-center animate-pulse"
      >
        loading
      </div>
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
          className="w-full h-full object-contain absolute inset-0"
        />
      </AnimatePresence>
    </div>
  );
};

export default QuoteImage;

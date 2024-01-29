import { useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";

const variants = {
  initial: {
    y: "99%",
    opacity: 0.001,
  },
  animate: {
    y: 0,
    opacity: 0.999,
    transition: {
      duration: 0.7,
    },
  },
};

const SectionHeader = ({ children }) => {
  const containerRef = useRef(null);
  const inView = useInView(containerRef);
  return (
    <div ref={containerRef} className="overflow-hidden h-12 mb-12 md:mb-24 relative">
      <AnimatePresence>
        {inView && (
          <motion.h2
            variants={variants}
            initial="initial"
            animate="animate"
            className="text-center w-full text-5xl font-medium absolute top-0 left-0"
          >
            {children}
          </motion.h2>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SectionHeader;

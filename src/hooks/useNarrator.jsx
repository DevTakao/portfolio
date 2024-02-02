import { useAppStore } from "@store/appStore";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useRef } from "react";

const useNarrator = (speech) => {
  const { updateNarration } = useAppStore((state) => ({
    updateNarration: state.updateNarration,
  }));

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["end end", "start end"] });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest <= 0.75) {
      updateNarration(speech);
    }
  });

  return sectionRef;
};

export default useNarrator;

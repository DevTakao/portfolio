import { useRef } from "react";
import { motion } from "framer-motion";
import { MouseParallax } from "react-just-parallax";
import PortfolioContent from "./PortfolioContent";

import BG from "@assets/images/cyber_world_2.jpg";
import useNarrator from "@/hooks/useNarrator";

const PortfolioSection = () => {
  const narrateRef = useNarrator("Curious about me? This section is yours.");
  const parallaxContainerRef = useRef(null);
  return (
    <section
      ref={(el) => {
        narrateRef.current = el;
        parallaxContainerRef.current = el;
      }}
      id="portfolio"
      className="h-screen relative snap-start overflow-hidden bg-blue"
    >
      <MouseParallax parallaxContainerRef={parallaxContainerRef} strength={0.01} isAbsolutelyPositioned>
        <div
          style={{
            backgroundImage: `url(${BG})`,
          }}
          className="Background scale-110 w-full h-full bg-fixed bg-cover bg-no-repeat bg-bottom-center z-0"
        />
      </MouseParallax>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
        className="Content w-full py-8 bg-transparent text-dark text-center"
      >
        <PortfolioContent />
      </motion.div>
    </section>
  );
};

export default PortfolioSection;

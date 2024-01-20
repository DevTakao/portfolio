import { useRef } from "react";
import { motion } from "framer-motion";
import { MouseParallax } from "react-just-parallax";
import PortfolioContent from "./PortfolioContent";

import BG from "@assets/images/cyber_world_2.jpg";

const PortfolioSection = () => {
  const parallaxContainerRef = useRef(null);
  return (
    <section
      ref={parallaxContainerRef}
      id="portfolio"
      className="h-screen relative snap-start overflow-hidden bg-yellow"
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

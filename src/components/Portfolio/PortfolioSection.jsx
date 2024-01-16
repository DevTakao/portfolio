import { MouseParallax } from "react-just-parallax";
import PortfolioContent from "./PortfolioContent";

import BG from "@assets/images/aincrad.jpg";
import { useRef } from "react";

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
          className="Background scale-110 w-full h-full bg-fixed bg-cover bg-no-repeat bg-center z-0 backdrop-grayscale"
        />
      </MouseParallax>

      <div className="Content w-full py-8 bg-[#f1f1f1] text-dark text-center">
        <PortfolioContent />
      </div>
    </section>
  );
};

export default PortfolioSection;

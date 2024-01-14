import PortfolioContent from "./PortfolioContent";

import BG from "@assets/images/bg.avif";

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="h-[90vh] sm:h-[80vh] md:h-[90vh] lg:h-[75vh] border-2 border-red-400">
      <div
        style={{
          backgroundImage: `url(${BG})`,
        }}
        className="Background w-full h-full absolute top-0 left-0 bg-fixed bg-auto bg-center z-0 backdrop-grayscale"
      />

      <div className="Content w-full py-8 bg-[#f1f1f1] text-dark text-center">
        <PortfolioContent />
      </div>
    </section>
  );
};

export default PortfolioSection;

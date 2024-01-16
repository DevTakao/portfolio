import PortfolioContent from "./PortfolioContent";

import BG from "@assets/images/aincrad.jpg";

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="h-screen relative snap-start">
      <div
        style={{
          backgroundImage: `url(${BG})`,
        }}
        className="Background w-full h-full absolute top-0 left-0 bg-fixed bg-cover bg-no-repeat bg-center z-0 backdrop-grayscale"
      />

      <div className="Content w-full py-8 bg-[#f1f1f1] text-dark text-center">
        <PortfolioContent />
      </div>
    </section>
  );
};

export default PortfolioSection;

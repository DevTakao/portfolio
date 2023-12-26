import PortfolioHeader from "../components/PortfolioPage/PortfolioHeader";
import PortfolioContent from "../components/PortfolioPage/PortfolioContent";
import Footer from "../common/Footer";

const PortfolioPage = () => {
  return (
    <div className="w-full py-8 bg-[#f1f1f1] text-dark text-center">
      <PortfolioHeader />
      <PortfolioContent />
      <Footer />
    </div>
  );
};

export default PortfolioPage;

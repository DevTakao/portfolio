import PortfolioHeader from "../components/PortfolioPage/PortfolioHeader";
import PortfolioContent from "../components/PortfolioPage/PortfolioContent";

const PortfolioPage = () => {
  return (
    <div className="w-full min-h-[100vh] overflow-y-auto py-8 px-4 bg-[#f1f1f1] text-dark text-center">
      <PortfolioHeader />
      <PortfolioContent />
    </div>
  );
};

export default PortfolioPage;

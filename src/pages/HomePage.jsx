import StartButton from "../components/Home/StartButton";
import { useAppStore } from "../store/appStore";
import PortfolioSection from "../components/Portfolio/PortfolioSection";
import Footer from "@common/Footer";

const HomePage = () => {
  const { isStartClicked } = useAppStore((state) => ({
    isStartClicked: state.isStartClicked,
  }));

  return !isStartClicked ? (
    <div className="w-full h-[100vh] overflow-hidden flex items-center justify-center">
      <StartButton />
    </div>
  ) : (
    <div className="w-full min-h-[100vh] h-full overflow-auto relative">
      <PortfolioSection />
      <Footer />
    </div>
  );
};

export default HomePage;

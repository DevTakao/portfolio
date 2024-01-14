import StartButton from "../components/Home/StartButton";
import { useAppStore } from "../store/appStore";
import PortfolioSection from "../components/Portfolio/PortfolioSection";

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
    </div>
  );
};

export default HomePage;

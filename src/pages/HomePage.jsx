import StartButton from "../components/HomePage/StartButton";
import { useAppStore } from "../store/appStore";
import PortfolioPage from "./PortfolioPage";

const HomePage = () => {
  const { isStartClicked } = useAppStore((state) => ({
    isStartClicked: state.isStartClicked,
  }));

  return !isStartClicked ? (
    <div className="w-full h-[100vh] overflow-hidden flex items-center justify-center">
      <StartButton />
    </div>
  ) : (
    <PortfolioPage></PortfolioPage>
  );
};

export default HomePage;

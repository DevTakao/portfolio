import StartButton from "../components/HomePage/StartButton";
import { useAppStore } from "../store/appStore";
import PortfolioPage from "./PortfolioPage";
import BG from "../assets/images/bg.avif";

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
      <div
        style={{
          backgroundImage: `url(${BG})`,
        }}
        className="w-full h-full absolute top-0 left-0 bg-fixed bg-auto bg-center z-0 backdrop-grayscale"
      />
      <PortfolioPage />
    </div>
  );
};

export default HomePage;

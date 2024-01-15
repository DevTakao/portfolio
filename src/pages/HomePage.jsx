import StartButton from "../components/Home/StartButton";
import { useAppStore } from "../store/appStore";
import PortfolioSection from "../components/Portfolio/PortfolioSection";
import Footer from "@common/Footer";
import AudioToggle from "@common/AudioToggle";
import HeroSection from "@components/Hero/HeroSection";

const HomePage = () => {
  const { isStartClicked } = useAppStore((state) => ({
    isStartClicked: state.isStartClicked,
  }));

  return !isStartClicked ? (
    <div className="w-full h-[100vh] overflow-hidden flex items-center justify-center">
      <StartButton />
    </div>
  ) : (
    <div className="w-full h-screen relative overflow-auto snap-y snap-proximity">
      <HeroSection />
      <PortfolioSection />
      <Footer />
      <AudioToggle />
    </div>
  );
};

export default HomePage;

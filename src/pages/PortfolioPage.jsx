import PortfolioHeader from "../components/PortfolioPage/PortfolioHeader";
import PortfolioContent from "../components/PortfolioPage/PortfolioContent";
import Footer from "../common/Footer";
import Music from "../assets/sounds/down_by_the_river_nerissa.mp3";
import ReactAudioPlayer from "react-audio-player";
import { useAppStore } from "../store/appStore";

const PortfolioPage = () => {
  const { isAudioOn } = useAppStore();
  return (
    <div className="w-full py-8 bg-[#f1f1f1] text-dark text-center">
      <PortfolioHeader />
      <PortfolioContent />
      <Footer />
      <ReactAudioPlayer src={Music} autoPlay={true} volume={isAudioOn ? 1 : 0} loop />
    </div>
  );
};

export default PortfolioPage;

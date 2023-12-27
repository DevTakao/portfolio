import PortfolioHeader from "../components/PortfolioPage/PortfolioHeader";
import PortfolioContent from "../components/PortfolioPage/PortfolioContent";
import Footer from "../common/Footer";
import Music from "../assets/sounds/down_by_the_river_nerissa.mp3";
import ReactAudioPlayer from "react-audio-player";
import { useAppStore } from "../store/appStore";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

const PortfolioPage = () => {
  const { isAudioOn, setAudio } = useAppStore();
  const toggleAudio = () => setAudio(!isAudioOn);
  return (
    <div className="w-full py-8 bg-[#f1f1f1] text-dark text-center">
      <button
        onClick={toggleAudio}
        className="absolute top-0 right-5 p-3 inline-flex items-center justify-center bg-light shadow-xl z-50 rounded-b-xl"
      >
        {isAudioOn ? <FaVolumeUp className="animate-pulse" /> : <FaVolumeMute />}
      </button>
      <PortfolioHeader />
      <PortfolioContent />
      <Footer />
      <ReactAudioPlayer src={Music} autoPlay={true} volume={isAudioOn ? 1 : 0} loop />
    </div>
  );
};

export default PortfolioPage;

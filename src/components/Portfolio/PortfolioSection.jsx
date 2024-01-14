import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import ReactAudioPlayer from "react-audio-player";

import { useAppStore } from "@store/appStore";
import Footer from "@common/Footer";
import Music from "@assets/sounds/down_by_the_river_nerissa.mp3";
import PortfolioHeader from "./PortfolioHeader";
import PortfolioContent from "./PortfolioContent";

import BG from "@assets/images/bg.avif";

const PortfolioSection = () => {
  const { isAudioOn, setAudio } = useAppStore();
  const toggleAudio = () => setAudio(!isAudioOn);
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${BG})`,
        }}
        className="Background w-full h-full absolute top-0 left-0 bg-fixed bg-auto bg-center z-0 backdrop-grayscale"
      />

      <div className="w-full py-8 bg-[#f1f1f1] text-dark text-center">
        <button
          onClick={toggleAudio}
          className="fixed top-0 right-5 p-3 inline-flex items-center justify-center bg-light shadow-xl z-[999] rounded-b-xl"
        >
          {isAudioOn ? <FaVolumeUp className="animate-pulse" /> : <FaVolumeMute />}
        </button>
        <PortfolioHeader />
        <PortfolioContent />
        <Footer />
        <ReactAudioPlayer src={Music} autoPlay={true} volume={0.75} muted={!isAudioOn} loop />
      </div>
    </>
  );
};

export default PortfolioSection;

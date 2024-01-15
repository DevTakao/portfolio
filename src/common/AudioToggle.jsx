import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

import { useAppStore } from "@store/appStore";

import Music from "@assets/sounds/down_by_the_river_nerissa.mp3";
import ReactAudioPlayer from "react-audio-player";

const AudioToggle = () => {
  const { isAudioOn, setAudio } = useAppStore();
  const toggleAudio = () => setAudio(!isAudioOn);
  return (
    <>
      <button
        onClick={toggleAudio}
        className="fixed top-0 right-5 p-3 inline-flex items-center justify-center bg-light shadow-xl z-[999] rounded-b-xl"
      >
        {isAudioOn ? <FaVolumeUp className="animate-pulse" /> : <FaVolumeMute />}
      </button>
      <ReactAudioPlayer src={Music} autoPlay={true} volume={0.75} muted={!isAudioOn} loop />
    </>
  );
};

export default AudioToggle;

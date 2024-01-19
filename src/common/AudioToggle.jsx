import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useAppStore } from "@store/appStore";
import ReactAudioPlayer from "react-audio-player";
import Music from "@assets/sounds/Timecop1983_On_the_Run.mp3";

const AudioToggle = () => {
  const { isAudioOn, setAudio } = useAppStore();
  const [musicSrc, setMusicSrc] = useState(null);
  const toggleAudio = () => setAudio(!isAudioOn);

  useEffect(() => {
    setMusicSrc(Music);

    return () => {
      setMusicSrc(null);
    };
  }, []);

  return (
    <>
      <button
        onClick={toggleAudio}
        className="fixed top-0 right-5 p-3 inline-flex items-center justify-center bg-light shadow-xl z-[999] rounded-b-xl"
      >
        {isAudioOn ? <FaVolumeUp className="animate-pulse" /> : <FaVolumeMute />}
      </button>
      <ReactAudioPlayer src={musicSrc} autoPlay={true} volume={0.75} muted={!isAudioOn} loop />
    </>
  );
};

export default AudioToggle;

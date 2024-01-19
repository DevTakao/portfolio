import { useEffect, useRef, useState } from "react";
import { useAppStore } from "@store/appStore";
import AudioVisual from "react-audio-visual";
import Music from "@assets/sounds/Timecop1983_On_the_Run.mp3";

const AudioToggle = () => {
  const { isAudioOn, setAudio } = useAppStore();
  const [musicSrc, setMusicSrc] = useState(null);
  const audioRef = useRef();
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
        className="fixed top-0 right-5 p-3 inline-flex items-center justify-center bg-yellow border-b border-x border-white z-[999] rounded-b-xl"
        style={{ boxShadow: "0px 0px 10px 3px #a4fff6" }}
      >
        <div className="w-6 h-6">
          <AudioVisual audio={audioRef} />
        </div>
      </button>
      <audio ref={audioRef} src={musicSrc} autoPlay={true} muted={!isAudioOn} loop />
    </>
  );
};

export default AudioToggle;

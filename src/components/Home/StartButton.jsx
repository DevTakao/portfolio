import { motion, useAnimation } from "framer-motion";
import { useAppStore } from "../../store/appStore";
import { growOutAnimation } from "../../utilities/animations";
import { useState } from "react";

const StartButton = () => {
  const { toggleStart, setAudio } = useAppStore((state) => ({
    toggleStart: state.toggleStart,
    setAudio: state.setAudio,
  }));
  const [isDisabled, setIsDisabled] = useState(false);

  const buttonControls = useAnimation();

  const handleStart = (isAudioOn) => {
    setIsDisabled(true);
    setAudio(isAudioOn);
    buttonControls.start(growOutAnimation.animate);
    setTimeout(() => toggleStart(), 2500);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-dark">
      <p className="text-light text-xl mb-5">Would you like to hear audio?</p>
      <div className="inline-flex items-center justify-center mx-auto">
        <motion.button
          disabled={isDisabled}
          animate={buttonControls}
          onClick={() => handleStart(true)}
          className={`py-6 font-medium tracking-widest rounded-full px-14 bg-light mr-3 ${
            isDisabled ? "text-light" : "text-dark"
          }`}
        >
          Yes
        </motion.button>
        <motion.button
          disabled={isDisabled}
          animate={buttonControls}
          onClick={() => handleStart(false)}
          className={`py-6 font-medium tracking-widest rounded-full px-14 bg-light ${
            isDisabled ? "text-light" : "text-dark"
          }`}
        >
          No
        </motion.button>
      </div>
    </div>
  );
};

export default StartButton;

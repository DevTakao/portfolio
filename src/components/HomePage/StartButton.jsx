import { motion, useAnimation } from "framer-motion";
import { useAppStore } from "../../store/appStore";
import { growOutAnimation } from "../../utilities/animations";
import { useState } from "react";

const StartButton = () => {
  const { toggleStart } = useAppStore((state) => ({
    toggleStart: state.toggleStart,
  }));
  const [isDisabled, setIsDisabled] = useState(false);

  const buttonControls = useAnimation();

  const handleStart = () => {
    setIsDisabled(true);
    buttonControls.start(growOutAnimation.animate);
    setTimeout(() => toggleStart(), 5000);
  };

  return (
    <motion.button
      disabled={isDisabled}
      animate={buttonControls}
      onClick={handleStart}
      className={`py-6 font-medium tracking-widest rounded-full px-14 bg-light ${
        isDisabled ? "text-light" : "text-dark"
      }`}
    >
      Start
    </motion.button>
  );
};

export default StartButton;

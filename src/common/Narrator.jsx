import { Tooltip } from "react-tooltip";
import NarratorImage from "@assets/images/narrator.png";
import { useAppStore } from "@store/appStore";

const Narrator = () => {
  const { narration } = useAppStore((state) => ({
    narration: state.narration,
  }));

  return (
    <div className="Narrator pointer-events-none fixed z-[11] w-full bottom-[-17px] left-0 flex items-bottom justify-start">
      <div className="ImageWrapper pointer-events-auto w-[75px] h-auto hover:opacity-0 transition-opacity duration-300">
        <Tooltip
          variant="light"
          id="narrator-speech"
          isOpen={true}
          style={{ boxShadow: "0 0 10px #0003", maxWidth: "250px" }}
        >
          {narration}
        </Tooltip>
        <img
          src={NarratorImage}
          alt="narrator"
          className="w-full h-full object-contain -scale-x-100 -ml-[1px] -mb-[1px]"
          data-tooltip-id="narrator-speech"
        />
      </div>
    </div>
  );
};

export default Narrator;

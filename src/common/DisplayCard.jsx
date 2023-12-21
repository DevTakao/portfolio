import { NAV } from "../data/nav";
import { useAppStore } from "../store/appStore";

const DisplayCard = () => {
  const { currentMain, currentDisplay } = useAppStore((state) => ({
    currentMain: state.currentMain,

    currentDisplay: state.currentDisplay,
  }));

  return (
    NAV[currentMain][currentDisplay] && (
      <div className="relative w-full h-full inline-block">
        <div className="w-full min-h-[75px] shadow-2xl bg-light"></div>
        <div className="p-8 my-2 text-2xl shadow-2xl bg-light">{NAV[currentMain][currentDisplay]()}</div>
        <div className="w-full min-h-[75px] shadow-2xl bg-light"></div>
      </div>
    )
  );
};

export default DisplayCard;

import { NAV } from "../data/nav";
import { useAppStore } from "../store/appStore";
import { camelCaseToNormal } from "../utilities/text";

const SubNav = () => {
  const { currentMain, currentDisplay, updateDisplay } = useAppStore((state) => ({
    currentMain: state.currentMain,
    currentDisplay: state.currentDisplay,
    updateDisplay: state.updateDisplay,
  }));

  const subList = NAV[currentMain];

  return (
    <div className="w-full h-full">
      <div className="w-full min-h-[64px] shadow-2xl bg-light relative z-10"></div>

      <ul className="relative theme-scroll h-full z-0 my-2 overflow-y-auto text-base md:text-lg lg:text-2xl shadow-2xl flex flex-col gap-y-2 overscroll-contain">
        {subList &&
          Object.keys(subList).map((key) => (
            <li
              key={key}
              onClick={() => updateDisplay(key)}
              className={`block px-10 py-3 shadow-2xl cursor-pointer ${
                currentDisplay === key ? "bg-yellow" : "bg-lightsoft"
              } hover:bg-yellow`}
            >
              {camelCaseToNormal(key)}
            </li>
          ))}
      </ul>

      <div className="w-full min-h-[64px] shadow-2xl bg-light relative z-10"></div>
    </div>
  );
};

export default SubNav;

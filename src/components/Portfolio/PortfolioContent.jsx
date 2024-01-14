// import { CgMenuGridO } from "react-icons/cg";
// import { useAppStore } from "@store/appStore";
// import MobileNav from "@common/MobileNav";
import SubNav from "@common/SubNav";
import MainNav from "@common/MainNav";
import DisplayCard from "@common/DisplayCard";

const PortfolioContent = () => {
  // const { isMobileNavOpen, toggleisMobileNavOpen } = useAppStore((state) => ({
  //   isMobileNavOpen: state.isMobileNavOpen,
  //   toggleisMobileNavOpen: state.toggleisMobileNavOpen,
  // }));

  return (
    <div className="px-7 sm:px-12 md:px-20 lg:px-0 min-h-[50vh]">
      {/* <button
        onClick={() => toggleisMobileNavOpen()}
        style={{ boxShadow: "0px 0px 8px #000", transform: isMobileNavOpen ? `rotate(${-495}deg)` : `rotate(0deg)` }}
        className="inline-block sm:hidden fixed left-5 bottom-5 p-2 sm:mx-3 sm:my-2 transition duration-700 w-[75px] h-[75px] md:w-[10vw] md:h-[10vw] border rounded-full lg:mx-0 bg-light border-dark hover:bg-yellow z-50"
      >
        <span className="inline-flex items-center justify-center w-full h-full p-2 border-8 rounded-full border-dark">
          <CgMenuGridO size={48} />
        </span>
      </button> */}
      {/* <MobileNav open={isMobileNavOpen} /> */}
      <div className="grid grid-cols-12 gap-3 lg:gap-0 lg:px-0">
        <div className={`hidden sm:block h-[25vh] order-2 sm:order-2 col-span-6 lg:col-span-4 lg:col-start-2 z-10`}>
          <SubNav />
        </div>
        <div
          className={`hidden sm:block order-none sm:order-1 text-center static translate-x-0 col-span-12 md:col-span-6 md:col-start-4 lg:order-2 lg:col-span-2 lg:col-start-6 z-10`}
        >
          <MainNav />
        </div>
        <div className="w-full h-full order-3 col-span-12 col-start-1 sm:col-span-6 sm:col-start-7 lg:order-3 lg:col-span-4 lg:col-start-8">
          <DisplayCard />
        </div>
      </div>
    </div>
  );
};

export default PortfolioContent;

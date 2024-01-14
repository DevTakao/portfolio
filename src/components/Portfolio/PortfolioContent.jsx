import SubNav from "@common/SubNav";
import MainNav from "@common/MainNav";
import DisplayCard from "@common/DisplayCard";

const PortfolioContent = () => {
  return (
    <div className="px-7 sm:px-12 md:px-20 lg:px-0 w-full h-full">
      <div className="grid grid-cols-12 gap-3 lg:gap-0 lg:px-0">
        <div
          className={`h-[25vh] order-2 sm:order-2 col-span-12 sm:col-span-6 lg:col-span-4 lg:col-start-2 z-10 mb-10 sm:mb-0`}
        >
          <SubNav />
        </div>
        <div
          className={`border-none sm:order-1 text-center col-span-12 md:col-span-6 md:col-start-4 lg:order-2 lg:col-span-2 lg:col-start-6 z-10`}
        >
          <MainNav />
        </div>
        <div className="w-full h-full order-3 col-span-12 sm:col-span-6 col-start-1 sm:col-start-7 lg:order-3 lg:col-span-4 lg:col-start-8">
          <DisplayCard />
        </div>
      </div>
    </div>
  );
};

export default PortfolioContent;

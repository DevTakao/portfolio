import DisplayCard from "../common/DisplayCard";
import MainNav from "../common/MainNav";
import SubNav from "../common/SubNav";

const Step1 = () => {
  return (
    <div className="w-full h-full pt-16 pb-[100px] bg-[#f1f1f1] text-dark text-center">
      <div className="container mx-auto mb-24">
        <h1 className="mb-3 font-serif text-6xl font-bold uppercase">Taka&apos;s Profile</h1>
        <h2 className="font-sans text-4xl font-normal">
          <span className="font-medium">Class: </span>Web Developer | <span className="font-medium">Experience: </span>2
          Years
        </h2>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-4 col-start-2">
          <SubNav />
        </div>
        <div className="col-span-2 col-start-6 text-center">
          <MainNav />
        </div>
        <div className="col-span-4 col-start-8">
          <DisplayCard />
        </div>
      </div>
    </div>
  );
};

export default Step1;

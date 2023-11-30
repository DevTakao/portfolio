import { useState } from "react";
import DisplayCard from "../common/DisplayCard";
import MainNav from "../common/MainNav";
import SubNav from "../common/SubNav";
import { CgMenuGridO } from "react-icons/cg";
import { useAppStore } from "../store/appStore";

const Step1 = () => {
  const { isMobileNavOpen, toggleisMobileNavOpen } = useAppStore((state) => ({
    isMobileNavOpen: state.isMobileNavOpen,
    toggleisMobileNavOpen: state.toggleisMobileNavOpen,
  }));

  return (
    <div className="w-full h-full pt-16 pb-[100px] bg-[#f1f1f1] text-dark text-center">
      <button
        onClick={() => toggleisMobileNavOpen()}
        style={{ boxShadow: "0px 0px 8px #000" }}
        className="inline-block sm:hidden fixed right-5 bottom-5 p-2 mx-3 my-2 transition duration-500 w-[75px] h-[75px] md:w-[10vw] md:h-[10vw] border rounded-full lg:mx-0 bg-light border-dark hover:bg-yellow z-50"
      >
        <span className="inline-flex items-center justify-center w-full h-full p-2 border-8 rounded-full border-dark">
          <CgMenuGridO size={48} />
        </span>
      </button>
      {isMobileNavOpen && (
        <div className="fixed top-0 left-0 z-40 w-full h-full bg-black pointer-events-none select-none mobile__backdrop bg-opacity-80"></div>
      )}

      <div className="container mx-auto mb-24">
        <h1 className="mb-3 font-serif text-6xl font-bold uppercase">Taka&apos;s Profile</h1>
        <h2 className="font-sans text-4xl font-normal">
          <span className="font-medium">Class: </span>Web Developer | <span className="font-medium">Experience: </span>2
          Years
        </h2>
      </div>
      <div className="grid grid-cols-12 gap-3 px-10 overflow-hidden sm:overflow-auto lg:gap-0 lg:px-0">
        <div
          className={`${
            isMobileNavOpen ? "block" : "hidden"
          } sm:block fixed top-[125px] inset-5 order-2 w-[50vw] sm:w-auto sm:col-span-6 col-start-1 sm:static sm:translate-x-0 lg:order-1 lg:col-span-4 lg:col-start-2 z-50 sm:z-10`}
        >
          <SubNav />
        </div>
        <div
          className={`${
            isMobileNavOpen ? "block" : "hidden"
          } sm:block fixed bottom-[125px] right-5 order-1 col-span-12 text-center sm:static sm:translate-x-0 md:col-span-6 md:col-start-4 lg:order-2 lg:col-span-2 lg:col-start-6 z-50 sm:z-10`}
        >
          <MainNav />
        </div>
        <div className="order-3 col-span-12 sm:col-span-6 sm:col-start-7 lg:order-3 lg:col-span-4 lg:col-start-8">
          <DisplayCard />
        </div>
      </div>
    </div>
  );
};

export default Step1;

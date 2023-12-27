import { useAppStore } from "../store/appStore";
import MainNav from "./MainNav";
import SubNav from "./SubNav";
import { AnimatePresence, motion } from "framer-motion";

const fadeInAnim = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 0.8,
  },
  exit: {
    opacity: 0,
  },
};

const MobileNav = () => {
  const { isMobileNavOpen, toggleisMobileNavOpen } = useAppStore((state) => ({
    isMobileNavOpen: state.isMobileNavOpen,
    toggleisMobileNavOpen: state.toggleisMobileNavOpen,
  }));

  return (
    <AnimatePresence>
      {isMobileNavOpen && (
        <>
          <motion.div
            {...fadeInAnim}
            onClick={toggleisMobileNavOpen}
            className="Mobile__Backdrop fixed sm:hidden top-0 left-0 z-40 w-full h-full bg-dark select-none"
          />

          <motion.div className="grid grid-cols-12 gap-3">
            <div
              className={`fixed sm:hidden top-6 left-[50%] -translate-x-[50%] order-2 w-[90%] h-[50vh] lg:order-1 lg:col-span-4 lg:col-start-2 z-50`}
            >
              <SubNav />
            </div>
            <div
              className={`fixed sm:hidden bottom-7 left-[100px] order-1 col-span-12 text-center sm:static sm:translate-x-0 md:col-span-6 md:col-start-4 z-50`}
            >
              <MainNav />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;

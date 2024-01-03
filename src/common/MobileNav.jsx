import { SlideDownAnimation, SlideUpAnimation, fadeInAnim } from "../animations/animations";
import { useAppStore } from "../store/appStore";
import MainNav from "./MainNav";
import SubNav from "./SubNav";
import { AnimatePresence, motion } from "framer-motion";

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

          <div className="grid grid-cols-12 gap-3 z-50">
            <motion.div
              {...SlideDownAnimation}
              className={`fixed sm:hidden top-6 left-[50%] -translate-x-[50%] order-2 w-[90%] h-[50vh] lg:order-1 lg:col-span-4 lg:col-start-2 z-50`}
            >
              <SubNav />
            </motion.div>
            <motion.div
              {...SlideUpAnimation}
              className={`fixed sm:hidden bottom-7 left-[100px] order-1 col-span-12 text-center z-50`}
            >
              <MainNav />
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;

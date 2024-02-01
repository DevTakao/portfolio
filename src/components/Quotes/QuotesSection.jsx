import SectionHeader from "@common/SectionHeader";
import { data } from "./data";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import QuoteIcon from "@assets/images/quote-icon.svg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import QuoteImage from "./QuoteImage";

const fadeVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "linear",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "linear",
    },
  },
};

const quoteNameVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.001,
      ease: "linear",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.001,
      delay: 0.25,
      ease: "linear",
    },
  },
};

const quoteNameOverlayVariants = {
  initial: {
    x: "-101%",
  },
  animate: {
    x: "101%",
    transition: {
      duration: 0.5,
      ease: "linear",
    },
  },
};

const QuotesSection = () => {
  const [page, setPage] = useState(0);

  const changePage = (dir = "next") => {
    if (dir === "prev") {
      setPage((prev) => (prev === 0 ? data.length - 1 : prev - 1));
    } else {
      setPage((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <section className="section-container bg-lightsoft">
      <SectionHeader>Favorite Quotes</SectionHeader>
      <div className="QuoteArea">
        <div className="w-full h-full grid sm:grid-cols-2">
          <div className="QuoteWrapper py-5 w-3/4 mx-auto flex flex-col items-center relative">
            <div className="w-24 absolute top-0 right-0 -mr-10 opacity-10">
              <img src={QuoteIcon} alt="quote icon" className="w-full h-full object-contain" />
            </div>
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={page}
                variants={fadeVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="h-[150px] sm:h-auto font-serif text-xl md:text-2xl lg:text-3xl text-center"
              >
                {data[page]?.quote}
              </motion.blockquote>
            </AnimatePresence>

            <div className="inline-block mt-5 relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={page}
                  variants={quoteNameVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="mt-5"
                >
                  &#11834; {data[page]?.name}
                </motion.span>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.span
                  key={page}
                  variants={quoteNameOverlayVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="block w-full h-full absolute top-0 left-0 bg-dark"
                />
              </AnimatePresence>
            </div>
          </div>
          <div className="hidden sm:block">
            <QuoteImage page={page} data={data} />
          </div>
        </div>
        <div className="Mobile_QuoteControls relative">
          <div className="block sm:hidden w-1/2 mx-auto relative z-[1] pointer-events-none">
            <QuoteImage page={page} data={data} />
          </div>
          <div className="ButtonContainer bg-dark text-lightsoft sm:bg-transparent sm:text-dark absolute z-[0] top-[50%] -translate-y-[50%] sm:-translate-y-0 left-0 w-full h-fit sm:h-auto sm:static flex items-center justify-center sm:py-5">
            <button
              onClick={() => changePage("prev")}
              className="w-1/2 sm:w-auto sm:mr-7 border-0 sm:border border-dark py-6 sm:py-4 px-10 sm:hover:bg-blue transition-all duration-500 group/button flex items-center justify-start"
            >
              <FaArrowLeft
                size={25}
                className="group-active/button:-translate-x-2 group-active/button:scale-125 sm:group-active/button:text-light transition-all duration-500 group-active/button:duration-100"
              />
            </button>
            <button
              onClick={() => changePage("next")}
              className="w-1/2 sm:w-auto sm:ml-7 border-0 sm:border border-dark py-6 sm:py-4 px-10 sm:hover:bg-blue transition-all duration-500 group/button flex items-center justify-end sm:justify-start"
            >
              <FaArrowRight
                size={25}
                className="group-active/button:translate-x-2 group-active/button:scale-125 sm:group-active/button:text-light transition-all duration-500 group-active/button:duration-100"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;

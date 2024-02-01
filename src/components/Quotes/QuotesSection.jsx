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
                className="h-[180px] sm:h-auto font-serif text-xl md:text-2xl lg:text-3xl text-center"
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
          <QuoteImage page={page} data={data} />
        </div>
      </div>
      <div className="ButtonContainer flex items-center justify-center py-5">
        <button
          onClick={() => changePage("prev")}
          className="mx-5 border-2 border-dark py-2 px-4 hover:bg-blue transition-all duration-500 group/button"
        >
          <FaArrowLeft
            size={25}
            className="group-hover/button:-translate-x-1 group-active/button:text-light transition-all duration-500 group-active/button:duration-100"
          />
        </button>
        <button
          onClick={() => changePage("next")}
          className="mx-5 border-2 border-dark py-2 px-4 hover:bg-blue transition-all duration-500 group/button"
        >
          <FaArrowRight
            size={25}
            className="group-hover/button:translate-x-1 group-active/button:text-light transition-all duration-500 group-active/button:duration-100"
          />
        </button>
      </div>
    </section>
  );
};

export default QuotesSection;

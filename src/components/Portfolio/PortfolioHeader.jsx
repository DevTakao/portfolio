import { fadeInAnimation } from "../../utilities/animations";
import { motion } from "framer-motion";
import { FaAngleDoubleRight } from "react-icons/fa";

const PortfolioHeader = () => {
  return (
    <motion.div {...fadeInAnimation} className="w-full grid grid-cols-12 mb-10 relative z-10">
      <div className="col-start-2 col-span-10 w-full grid grid-cols-12 py-3 px-6 mx-auto text-center bg-light rounded-xl shadow-2xl">
        <h1 className="col-span-12 mb-3 font-sans tracking-wider text-lg font-bold md:text-2xl lg:text-3xl uppercase bg-gradient-to-t from-dark via-blue to-dark bg-clip-text text-transparent">
          Takao&apos;s Portfolio
        </h1>
        <div className="grid grid-cols-2 col-span-12 md:col-span-5">
          <h2 className="font-semibold text-left lg:text-right uppercase flex items-center md:justify-end">
            Class
            <FaAngleDoubleRight className="mx-3" />
          </h2>
          <p className="text-left flex flex-wrap items-center">
            <span>Tech. Research Analyst</span>
          </p>
        </div>
        <div className="grid grid-cols-2 col-span-12 col-start-1 md:col-span-5 md:col-start-8">
          <h2 className="font-semibold text-left lg:text-right uppercase flex items-center md:justify-end">
            Level
            <FaAngleDoubleRight className="mx-3" />
          </h2>
          <p className="text-left flex items-center">2+ Years</p>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioHeader;

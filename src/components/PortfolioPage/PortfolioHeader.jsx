import { fadeInAnimation } from "../../utilities/animations";
import { motion } from "framer-motion";

const PortfolioHeader = () => {
  return (
    <motion.div {...fadeInAnimation} className="container mx-auto mb-10">
      <div className="grid max-w-screen-lg grid-cols-12 p-3 mx-auto text-center bg-light rounded-xl shadow-2xl">
        <h1 className="col-span-12 mb-3 font-serif text-lg font-bold md:text-2xl lg:text-3xl">Taka&apos; Profile</h1>
        <div className="grid grid-cols-2 col-span-12 md:col-span-5">
          <h2 className="font-semibold text-left uppercase">Class:</h2>
          <p className="text-left">
            <span className="whitespace-nowrap">Tech. Researcher</span>
            {" / "}
            <span className="whitespace-nowrap">Web Developer</span>
          </p>
        </div>
        <div className="grid grid-cols-2 col-span-12 col-start-1 md:col-span-5 md:col-start-8">
          <h2 className="font-semibold text-left uppercase">Level:</h2>
          <p className="text-left">2+ Years</p>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioHeader;

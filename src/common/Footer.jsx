import { fadeInAnimation } from "../utilities/animations";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      {...fadeInAnimation}
      className="relative z-10 max-w-screen-md my-10 py-5 px-6 text-center text-base font-serif bg-light mx-7 sm:mx-auto rounded-xl shadow-2xl"
    >
      &copy; Aung Kaung Khant, 2023, All rights reserved.
      <br />
      <span className="text-sm">
        Music:{" "}
        <a href="https://www.youtube.com/watch?v=8j3wK1DXhrs" target="_blank" rel="noreferrer" className="underline">
          Down By The River
        </a>
        , cover by Nerissa Ravencroft (Fair-use)
      </span>
    </motion.div>
  );
};

export default Footer;

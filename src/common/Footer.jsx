import { fadeInAnimation } from "../utilities/animations";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      {...fadeInAnimation}
      className="relative z-10 my-10 py-5 px-6 text-base font-serif bg-light text-left sm:text-center"
    >
      Portfolio Website, Aung Kaung Khant, 2024
      <br />
      <span className="text-[0.75rem]">
        &copy; Media Assets & Inspiration: Sword Art Online | Music:{" "}
        <a href="https://www.youtube.com/watch?v=8j3wK1DXhrs" target="_blank" rel="noreferrer" className="underline">
          Down By The River
        </a>
        , cover by Nerissa Ravencroft (Fair-use)
      </span>
    </motion.div>
  );
};

export default Footer;

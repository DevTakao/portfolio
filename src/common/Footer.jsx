import { fadeInAnimation } from "../utilities/animations";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      {...fadeInAnimation}
      className="relative z-10 max-w-screen-md mx-auto mt-10 py-5 px-6 text-center text-base font-serif bg-light roundedmotion.-xl shadow-2xl"
    >
      &copy; Copyright, Aung Kaung Khant, 2023, All rights reserved.
    </motion.div>
  );
};

export default Footer;

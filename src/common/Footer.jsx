import { fadeInAnimation } from "../utilities/animations";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithubSquare, FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.div
      {...fadeInAnimation}
      className="relative z-10 my-10 py-5 px-6 text-base font-serif bg-light text-left sm:text-center"
    >
      <div className="Socials max-w-md mx-auto flex items-center justify-start sm:justify-center mb-4 [&>a]:mr-2 [&>a:last]:mr-0">
        <a
          href="https://www.linkedin.com/in/takao21/"
          target="_blank"
          rel="noreferrer"
          className="text-dark hover:text-yellow transition-all duration-300"
        >
          <FaLinkedin size={25} />
        </a>
        <a
          href="https://github.com/DevTakao/"
          target="_blank"
          rel="noreferrer"
          className="text-dark hover:text-yellow transition-all duration-300"
        >
          <FaGithubSquare size={25} />
        </a>
        <a
          href="https://www.facebook.com/joichiro.takao/"
          target="_blank"
          rel="noreferrer"
          className="text-dark hover:text-yellow transition-all duration-300"
        >
          <FaFacebookSquare size={25} />
        </a>
      </div>
      Portfolio Website, Aung Kaung Khant, 2024
      <br />
      <span className="text-[0.75rem]">
        &copy; Music:{" "}
        <a href="https://www.youtube.com/watch?v=_Ci0Kgdpgsw" target="_blank" rel="noreferrer" className="underline">
          On The Run
        </a>
        , by Timecop1983 (Fair-use)
      </span>
    </motion.div>
  );
};

export default Footer;

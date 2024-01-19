import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const animation = {
  initial: {
    y: "101%",
  },
  animate: {
    y: 0,
    opacity: [0, 0.8, 0, 0.4, 1],
    transition: {
      y: {
        duration: 1,
      },
      opacity: {
        delay: 0.5,
        duration: 1,
        times: [0, 0.2, 0.4, 0.6, 1],
      },
    },
  },
};

const ProjectCard = ({ image, title, description, imageFirst = true }) => {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true });

  return (
    <div ref={containerRef} className="Project_Container grid grid-cols-1 md:grid-cols-2 mb-24">
      <div
        className={`Project_Graphic max-w-md h-48 mx-auto px-5 overflow-hidden ${
          imageFirst ? "md:order-1" : "md:order-2"
        }`}
      >
        {inView && <motion.img {...animation} src={image} className="block w-full h-full object-contain" alt={title} />}
      </div>
      <div className={`Project_Content px-5 ${imageFirst ? "md:order-2" : "md:order-1"}`}>
        <h3 className="text-center md:text-left text-2xl font-normal mb-5 md:mb-10 mt-5 md:mt-0">{title}</h3>
        <p className="text-justify md:text-left">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;

import { motion, useScroll, useTransform } from "framer-motion";

const ScrollGuide = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [400, 0], [0, 1], { clamp: true });

  return (
    <motion.div
      style={{ opacity: opacity }}
      animate={{
        y: [0, 20, 0],
        transition: {
          delay: 3,
          y: { duration: 2, type: "tween", ease: "linear", repeat: Infinity },
        },
      }}
      className="w-[100px] absolute bottom-5 right-0"
    >
      <svg className="w-full h-full" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{
            opacity: 1,
            pathLength: 1,
            transition: {
              delay: 2.5,
              opacity: { duration: 0.7 },
              pathLength: { duration: 1 },
            },
          }}
          className="fill-blue drop-shadow-md"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 3C12.5523 3 13 3.44772 13 4V17.5858L18.2929 12.2929C18.6834 11.9024 19.3166 11.9024 19.7071 12.2929C20.0976 12.6834 20.0976 13.3166 19.7071 13.7071L12.7071 20.7071C12.3166 21.0976 11.6834 21.0976 11.2929 20.7071L4.29289 13.7071C3.90237 13.3166 3.90237 12.6834 4.29289 12.2929C4.68342 11.9024 5.31658 11.9024 5.70711 12.2929L11 17.5858V4C11 3.44772 11.4477 3 12 3Z"
        />
      </svg>
    </motion.div>
  );
};

export default ScrollGuide;

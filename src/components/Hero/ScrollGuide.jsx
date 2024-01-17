import { motion } from "framer-motion";

const ScrollGuide = () => {
  return (
    <div className="w-[50px] pt-5">
      {/* <svg className="w-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{
            opacity: 1,
            pathLength: 1,
            transition: { delay: 2.5, opacity: { duration: 0.1 }, pathLength: { duration: 1 } },
          }}
          d="M11.7 1.1732C11.8856 1.06603 12.1144 1.06603 12.3 1.17321L21.2263 6.3268C21.4119 6.43397 21.5263 6.63205 21.5263 6.84641V17.1536C21.5263 17.3679 21.4119 17.566 21.2263 17.6732L12.3 22.8268C12.1144 22.934 11.8856 22.934 11.7 22.8268L2.77372 17.6732C2.58808 17.566 2.47372 17.3679 2.47372 17.1536V6.84641C2.47372 6.63205 2.58808 6.43397 2.77372 6.32679L11.7 1.1732Z"
          className="stroke-yellow"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg> */}
      <svg
        className="w-[500px] opacity-50 -translate-y-[50%]"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{
            opacity: 1,
            pathLength: [0.5, 0.8, 0.2, 0.7, 0.6, 0.3],
            rotate: [0, 90, 180, 270, 360],
            transition: {
              delay: 2.5,
              opacity: { duration: 0.1 },
              pathLength: { duration: 5 },
              rotate: { ease: "linear", duration: 3, repeat: Infinity },
            },
          }}
          d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
          className="stroke-yellow"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default ScrollGuide;

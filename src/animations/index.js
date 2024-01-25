export const ContainerAnimation = {
  initial: {
    scaleX: 0,
  },
  animate: {
    scaleX: 1,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    scaleX: 0,
    transition: {
      duration: 0.2,
    },
  },
};

export const CardAnimation = {
  initial: {
    height: 0,
  },
  animate: {
    height: "auto",
    opacity: [0, 0, 0.8, 0, 0.4, 1],
    transition: {
      delay: 0.2,
      duration: 0.5,
      opacity: {
        delay: 0.25,
        duration: 1,
        times: [0, 0.2, 0.3, 0.4, 0.6, 1],
      },
    },
  },
  exit: {
    height: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const CardContentAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.7,
    },
  },
  exit: {
    opacity: 0,
  },
};

export const SlideDownAnimation = {
  initial: {
    x: "-50%",
    y: "-101%",
    opacity: 0,
  },
  animate: {
    x: "-50%",
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
  exit: {
    y: "-101%",
    transition: {
      duration: 0.7,
    },
  },
};

export const SlideUpAnimation = {
  initial: {
    y: "151%",
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
  exit: {
    y: "151%",
    transition: {
      duration: 0.7,
    },
  },
};

export const fadeInAnim = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 0.8,
    transition: { duration: 0.7 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.7 },
  },
};

export const BigGrowthAnimation = {
  initial: {
    scale: 1,
  },
  animate: {
    scale: 20,
    transition: {
      duration: 1.5,
      easing: "ease-in-out",
    },
  },
  exit: {
    scale: 1000,
  },
};

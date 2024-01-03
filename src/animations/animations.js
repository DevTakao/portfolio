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
    transition: {
      delay: 0.2,
      duration: 0.5,
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

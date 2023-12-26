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

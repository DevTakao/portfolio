export const growOutAnimation = {
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

export const fadeInAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
  },
};

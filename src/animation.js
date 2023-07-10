export const slideTop = {
  hidden: {
    x: "-130%",
    skew: "45deg",
  },
  show: {
    x: "100%",
    skew: "0deg",
    transition: { ease: "easeOut", duration: 1.5 },
  },
};
export const slideCenter = {
  hidden: {
    x: "-130%",
    skew: "45deg",
  },
  show: {
    x: "100%",
    skew: "0deg",
    transition: { ease: "easeOut", duration: 1.5, delay: 0.15 },
  },
};
export const slideLeft = {
  hidden: {
    x: "-130%",
    skew: "45deg",
  },
  show: {
    x: "100%",
    skew: "0deg",
    transition: { ease: "easeOut", duration: 1.5, delay: 0.3 },
  },
};
export const slideRight = {
  hidden: {
    x: "-130%",
    skew: "45deg",
  },
  show: {
    x: "100%",
    skew: "0deg",
    transition: { ease: "easeOut", duration: 1.5, delay: 0.45 },
  },
};

export const titleAnimation = {
  hidden: {
    y: 200,
  },
  show: {
    y: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
      delay: 1.2,
    },
  },
};
export const titleAnimation1 = {
  hidden: {
    y: 200,
  },
  show: {
    y: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
      delay: 3,
    },
  },
};

export const lineAnimate = {
  hidden: {
    y: 5,
  },
  show: {
    y: -5,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 1.2,
      repeat: Infinity,
      repeatType: "mirror",
      repeatDelay: 1,
    },
  },
};
export const seeDemo = {
  hidden: {
    opacity: 0.5,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 1.2,
      repeat: Infinity,
      repeatType: "mirror",
      repeatDelay: 1,
    },
  },
};

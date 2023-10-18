const transition = { duration: 1, ease: [0.75, 0, 0.24, 1] };

const animeOpacity = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
  close: {
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  },
};

const animeSlide = {
  initial: {
    height: 0,
  },
  enter: {
    height: 'auto',
    transition,
  },
  exit: {
    height: 0,
    transition,
  },
};

const animeShift = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  open: (idx) => ({
    y: 0,
    opacity: 1,
    transition: { ...transition, delay: idx },
  }),
  close: (idx) => ({
    y: '100%',
    opacity: 0,
    transition: { ...transition, delay: -idx },
  }),
};

const animeBlur = {
  initial: {
    opacity: 1,
    filter: 'blur(0px)',
  },
  open: {
    opacity: 0.8,
    filter: 'blur(4px)',
    transition: { duration: 0.25 },
  },
  close: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.25 },
  },
};

const animeBackdrop = {
  initial: {
    height: 0,
  },
  enter: {
    height: '100vh',
    transition,
  },
  exit: {
    height: 0,
    transition,
  },
};

export { animeOpacity, animeSlide, animeShift, animeBlur, animeBackdrop };

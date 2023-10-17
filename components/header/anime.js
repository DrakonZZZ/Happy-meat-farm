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

const transition = { duration: 1, ease: [0.75, 0, 0.24, 1] };

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

export { animeOpacity, animeSlide };

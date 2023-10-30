const transition = { duration: 1, ease: [0.75, 0, 0.24, 1] };

const animeOpacity = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeIn',
      delay: 0.2,
    },
  },
  close: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
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

export { animeOpacity, animeShift };

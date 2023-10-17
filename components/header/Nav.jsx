import { motion } from 'framer-motion';
import { animeSlide } from './anime';
import NavBody from './NavBody';

export const Nav = () => {
  return (
    <motion.div
      variants={animeSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="overflow-hidden px-4"
    >
      <div className="m-0">
        <NavBody />
      </div>
    </motion.div>
  );
};

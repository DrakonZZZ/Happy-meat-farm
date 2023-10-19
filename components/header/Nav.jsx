import { motion } from 'framer-motion';
import { animeSlide } from './anime';
import NavBody from './NavBody';
import { useState } from 'react';

export const Nav = ({ setIsActive }) => {
  const [hoverLink, setHoverLink] = useState({ isActive: false, idx: 0 });

  return (
    <motion.div
      variants={animeSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="overflow-hidden px-4"
    >
      <div className="m-0">
        <NavBody
          setIsActive={setIsActive}
          hoverLink={hoverLink}
          setHoverLink={setHoverLink}
        />
      </div>
    </motion.div>
  );
};

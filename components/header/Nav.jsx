import { motion } from 'framer-motion';
import { animeSlide } from './anime';
import NavBody from './NavBody';
import { links } from '@/data/links';
import { useState } from 'react';

export const Nav = () => {
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
        <NavBody hoverLink={hoverLink} setHoverLink={setHoverLink} />
      </div>
    </motion.div>
  );
};

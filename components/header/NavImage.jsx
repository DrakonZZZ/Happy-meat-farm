import Image from 'next/image';
import { motion } from 'framer-motion';
import { animeOpacity } from './anime';

const NavImage = ({ src, isActive }) => {
  return (
    <motion.div
      variants={animeOpacity}
      initial="initial"
      animate={isActive ? 'open' : 'close'}
      className="hidden md:block"
    >
      <Image
        src={`/images/${src}`}
        objectFit="cover"
        objectPosition="center"
        fill={true}
        alt={src}
        className="rounded-lg"
      />
    </motion.div>
  );
};

export default NavImage;

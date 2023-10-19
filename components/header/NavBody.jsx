import { motion } from 'framer-motion';
import { links } from '@/data/links';
import Link from 'next/link';
import { animeShift, animeBlur } from './anime';
import NavImage from './NavImage';

const NavBody = ({ hoverLink, setHoverLink, setIsActive }) => {
  return (
    <div className="flex mt-6">
      <div className="hidden md:block w-full p-2 text-right mb-4 relative">
        <NavImage
          src={links[hoverLink.idx].src}
          isActive={hoverLink.isActive}
        />
      </div>
      <div className="flex flex-wrap justify-end gap-x-8">
        {links.map((link, idx) => {
          const { title, href, src } = link;
          return (
            <Link
              href={href}
              key={`@l_${idx}`}
              className="overflow-hidden"
              onMouseEnter={() => setHoverLink({ isActive: true, idx })}
              onMouseLeave={() => setHoverLink({ isActive: false, idx })}
              onMouseDown={() => setIsActive(false)}
            >
              <motion.p
                variants={animeBlur}
                animate={
                  hoverLink.isActive && hoverLink.idx != idx ? 'open' : 'close'
                }
                className="flex text-3xl md:text-6xl uppercase"
              >
                {letterAnime(title, idx)}
              </motion.p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

const letterAnime = (letter, idx) => {
  return (
    <motion.span
      key={`@c_${idx}`}
      custom={idx * 0.08}
      variants={animeShift}
      initial="initial"
      animate="open"
      exit="close"
    >
      {letter}
    </motion.span>
  );
};

export default NavBody;

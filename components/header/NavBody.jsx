import { motion } from 'framer-motion';
import { links } from '@/data/links';
import Link from 'next/link';
import { animeShift, animeBlur } from './anime';

const NavBody = ({ hoverLink, setHoverLink }) => {
  return (
    <div className="flex mt-6">
      <div className=" w-full p-2 text-right"></div>
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
            >
              <motion.p
                variants={animeBlur}
                animate={
                  hoverLink.isActive && hoverLink.idx != idx ? 'open' : 'close'
                }
                className="flex text-3xl md:text-6xl uppercase"
              >
                {letterAnime(title, idx, hoverLink.isActive)}
              </motion.p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

const letterAnime = (letter, idx, active) => {
  return (
    <motion.span
      key={`@c_${idx}`}
      custom={idx * 0.08}
      variants={animeShift}
      initial="initial"
      animate="open"
      exit="close"
      className="text-[#839D7E] hover:text-white"
    >
      {letter}
    </motion.span>
  );
};

export default NavBody;

'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { animeOpacity, animeBackdrop } from './anime';
import { Nav } from './Nav';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  return (
    <nav className="mb-[56px]">
      <motion.div
        initial={{ y: '-100%' }}
        animate={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className={`fixed top-0 left-0 w-full bg-primary z-50 text-secondary`}
      >
        <div className="flex justify-between items-center h-fit py-4 px-8">
          <Link
            href="/"
            className="text-md md:text-xl font-bold  uppercase overflow-hidden"
            onMouseDown={() => setIsActive(false)}
          >
            <motion.span>HMF</motion.span>
          </Link>

          <div
            className="relative flex cursor-pointer font-semibold"
            onMouseDown={() => setIsActive(!isActive)}
          >
            <div
              className={`burger mr-2  ${isActive && 'burger-active'}`}
            ></div>
            <motion.p
              variants={animeOpacity}
              animate={isActive ? 'close' : 'open'}
            >
              Menu
            </motion.p>
            <motion.p
              className="absolute right-0"
              variants={animeOpacity}
              initial="initial"
              animate={!isActive ? 'close' : 'open'}
            >
              Close
            </motion.p>
          </div>

          <motion.div
            className="hidden md:flex items-center gap-6 font-semibold"
            variants={animeOpacity}
            animate={isActive ? 'close' : 'open'}
          >
            {pathname !== '/' ? null : (
              <Link href="/access">
                <span>Access</span>
              </Link>
            )}
          </motion.div>
        </div>
        <motion.div
          variants={animeBackdrop}
          initial="initial"
          animate={isActive ? 'enter' : 'exit'}
          className="w-full absolute top-[100%] left-0 bg-black opacity-50"
        ></motion.div>
        <AnimatePresence mode="wait">
          {isActive && <Nav setIsActive={setIsActive} />}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
};

export default Header;

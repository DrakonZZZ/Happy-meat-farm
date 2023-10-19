'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { animeOpacity, animeBackdrop } from './anime';
import { Nav } from './Nav';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="mb-[56px]">
      <div
        className={`fixed top-0 left-0 w-full bg-primary z-50 text-secondary`}
      >
        <div className="flex justify-between items-center h-fit py-4 px-8">
          <Link
            href="/"
            className="text-md md:text-xl font-bold  uppercase overflow-hidden"
          >
            <motion.span>Happy Meat Farms</motion.span>
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
            <Link href="/service">
              <span>Service</span>
            </Link>
            <Link href="/login">
              <span>Login</span>
            </Link>
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
      </div>
    </div>
  );
};

export default Header;

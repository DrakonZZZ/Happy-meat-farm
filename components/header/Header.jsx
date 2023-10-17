'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { animeOpacity } from './anime';
import { Nav } from './Nav';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="fixed w-full bg-[#1A3331]">
      <div className="flex justify-between items-center h-fit p-4">
        <Link href="/" className="text-lg md:text-md font-bold text-[#839D7E]">
          Happy Meat Farms
        </Link>

        <div
          className="relative flex"
          onMouseDown={() => setIsActive(!isActive)}
        >
          <div className="burger mr-2"></div>
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
          className="flex items-center gap-6"
          variants={animeOpacity}
          animate={isActive ? 'close' : 'open'}
        >
          <p>Shop</p>
          <div className="hidden md:flex items-center gap-1 ">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <p>Cart</p>
          </div>
        </motion.div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </div>
  );
};

export default Header;

'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { heroImages } from '@/data/links';
import hero from '../../public/images/hero/hero.webp';
import { AnimatePresence, motion } from 'framer-motion';
import { animeOpacity, animeShift } from './animeHero';

const HeroImage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      let nextIdx = (currentIndex + 1) % heroImages.length;
      setCurrentIndex(nextIdx);
      if (key >= 10) {
        setKey(0);
      } else {
        setKey(key + 1);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-[50vh] md:h-[90vh] overflow-hidden">
      <motion.div
        variants={animeOpacity}
        initial="initial"
        animate="open"
        exit="close"
      >
        <Image
          src={hero}
          style={{ objectFit: 'cover', borderRadius: '20px' }}
          fill={true}
          alt={heroImages[currentIndex].title}
        />
      </motion.div>
      <AnimatePresence mode="wait">
        <motion.div
          className="absolute bottom-4 left-4 text-4xl md:text-8xl"
          key={key}
        >
          <h3 className="font-light overflow-hidden">
            {wordAnimate(
              heroImages[currentIndex].text,
              heroImages[currentIndex].id
            )}
          </h3>
          <h3 className="font-medium overflow-hidden pb-2">
            {wordAnimate(
              heroImages[currentIndex].text2,
              heroImages[currentIndex].id + 2
            )}
          </h3>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const wordAnimate = (text, idx) => {
  return (
    <motion.span
      key={`@c_${idx}`}
      custom={idx * 0.08}
      variants={animeShift}
      initial="initial"
      animate="open"
      exit="close"
      className="block"
    >
      {text}
    </motion.span>
  );
};

export default HeroImage;

'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const SmoothScroller = () => {
  useEffect(() => {
    const lenis = new Lenis({
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    raf();

    return () => {
      lenis.destroy();
    };
  }, []);
};

export default SmoothScroller;

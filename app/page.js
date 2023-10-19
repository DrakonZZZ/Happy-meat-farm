'use client';

import Hero from '@/components/hero/Hero';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on('scroll', (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  return (
    <main className="flex  min-h-screen flex-col items-center justify-between bg-[#18332F]">
      <Hero />
    </main>
  );
}

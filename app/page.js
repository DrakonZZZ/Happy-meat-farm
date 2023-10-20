'use client';

import Hero from '@/components/hero/Hero';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  });
  return (
    <main className="flex  min-h-screen flex-col items-center justify-between bg-primary">
      <Hero />
    </main>
  );
}

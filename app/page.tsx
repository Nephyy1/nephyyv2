'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  });

  const astronautY = useTransform(scrollYProgress, [0, 1], ['5%', '80%']);
  const astronautScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.5]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [1, 0, 0, 1]);

  return (
    <main
      ref={targetRef}
      className="bg-retro-bg text-retro-text relative min-h-[300vh]"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <motion.div
          style={{ opacity: textOpacity }}
          className="text-center p-4 z-20"
        >
          <h1 className="text-3xl md:text-5xl lg:text-7xl text-retro-cyan mb-4">
            Hello, World!
          </h1>
          <p className="text-sm md:text-base text-retro-pink">Scroll down to explore</p>
        </motion.div>

        <motion.div
          style={{ y: astronautY, scale: astronautScale }}
          className="absolute top-0 z-10 text-6xl md:text-8xl"
        >
          <span>🧑‍🚀</span>
        </motion.div>

        <div className="absolute bottom-10 z-20">
          <p className="text-lg text-retro-purple">My Projects</p>
        </div>
      </div>

      <div className="relative z-30 min-h-screen bg-retro-bg p-8 md:p-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="p-6 border-2 border-retro-purple rounded-lg">
            <h2 className="text-2xl md:text-3xl text-retro-pink mb-4">Project One</h2>
            <p className="text-sm md:text-base leading-relaxed">
              This is a description for my first awesome retro project. It does amazing things and looks cool.
            </p>
          </div>
          <div className="p-6 border-2 border-retro-cyan rounded-lg">
            <h2 className="text-2xl md:text-3xl text-retro-pink mb-4">Project Two</h2>
            <p className="text-sm md:text-base leading-relaxed">
              Here's another project. Built with modern tech but with a classic feel. Fully responsive and interactive.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

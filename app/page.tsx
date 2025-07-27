'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const RetroShip = (props: any) => (
  <motion.svg
    width="80"
    height="80"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M50 10L90 90H10L50 10Z"
      stroke="url(#paint0_linear_101_2)"
      strokeWidth="5"
    />
    <defs>
      <linearGradient id="paint0_linear_101_2" x1="50" y1="10" x2="50" y2="90" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ff00ff" />
        <stop offset="1" stopColor="#00d0ff" />
      </linearGradient>
    </defs>
  </motion.svg>
);

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  });

  const shipY = useTransform(scrollYProgress, [0, 1], ['5%', '90%']);
  const shipScale = useTransform(scrollYProgress, [0, 0.1, 0.8, 1], [0.5, 1, 1, 0]);
  const shipOpacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);

  const introOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const projectsOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

  return (
    <>
      <div className="crt-overlay" />
      <main ref={targetRef} className="relative min-h-[300vh] font-retro">
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
          <motion.div
            style={{ opacity: introOpacity }}
            className="text-center p-4 z-20 space-y-4"
          >
            <h1 className="text-3xl md:text-5xl lg:text-7xl text-retro-cyan drop-shadow-glow-cyan animate-flicker">
              NEPHYY
            </h1>
            <p className="text-sm md:text-base text-retro-pink drop-shadow-glow-pink">
              SCROLL TO DESCEND
            </p>
          </motion.div>
          
          <div className="absolute top-0 left-0 w-full h-full z-0" style={{
            backgroundImage:
              'radial-gradient(circle at center, transparent 30%, #0d0221 70%), linear-gradient(to bottom, transparent 0%, #0d0221 100%), repeating-linear-gradient(90deg, #a642f844 0, #a642f844 1px, transparent 1px, transparent 40px), repeating-linear-gradient(0deg, #a642f888 0, #a642f888 1px, transparent 1px, transparent 40px)',
            backgroundPosition: 'center 80%, center, center, center',
            backgroundSize: '150% 150%, 100% 100%, 40px 40px, 40px 40px'
          }}>
          </div>
          
          <motion.div
            className="absolute z-10"
            style={{ y: shipY, scale: shipScale, opacity: shipOpacity }}
          >
            <RetroShip />
          </motion.div>
        </div>

        <div className="relative z-30 min-h-screen bg-retro-bg p-8 md:p-16 flex items-center">
          <motion.div
            style={{ opacity: projectsOpacity }}
            className="max-w-4xl w-full mx-auto space-y-8"
          >
            <div className="border-2 border-retro-cyan bg-black bg-opacity-30 drop-shadow-glow-cyan">
              <div className="bg-retro-cyan text-retro-bg p-2 text-sm">
                [ PROJECT_01.EXE ]
              </div>
              <div className="p-6">
                <h2 className="text-2xl md:text-3xl text-retro-pink mb-4 drop-shadow-glow-pink">RETRO PORTFOLIO</h2>
                <p className="text-sm md:text-base leading-relaxed text-retro-text">
                  A personal website built with Next.js, Tailwind, and Framer Motion, featuring a synthwave aesthetic and parallax scrolling.
                </p>
              </div>
            </div>
            
            <div className="border-2 border-retro-pink bg-black bg-opacity-30 drop-shadow-glow-pink">
              <div className="bg-retro-pink text-retro-bg p-2 text-sm">
                [ PROJECT_02.EXE ]
              </div>
              <div className="p-6">
                <h2 className="text-2xl md:text-3xl text-retro-cyan mb-4 drop-shadow-glow-cyan">INTERACTIVE DASHBOARD</h2>
                <p className="text-sm md:text-base leading-relaxed text-retro-text">
                  Data visualization platform with real-time updates, designed with a retro-futuristic user interface.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}

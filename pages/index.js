import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center h-full">
      <motion.h1
        className="text-6xl md:text-8xl font-press-start mb-4 bg-gradient-to-r from-retro-primary to-retro-accent text-transparent bg-clip-text"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        YOUR NAME
      </motion.h1>
      <motion.p
        className="text-2xl md:text-3xl font-vt323 text-retro-text mb-8"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        A Creative Web Developer & UI/UX Enthusiast
      </motion.p>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <a
          href="/projects"
          className="bg-retro-primary text-white font-bold py-3 px-8 text-xl shadow-retro transition-all duration-300 hover:bg-retro-accent hover:shadow-retro-hover transform hover:-translate-y-1"
        >
          See My Work
        </a>
      </motion.div>
    </div>
  );
}

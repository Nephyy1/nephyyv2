import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="flex flex-col justify-center min-h-[60vh] max-w-3xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.p variants={itemVariants} className="text-md md:text-lg text-cyan font-mono mb-4">
        Hai, nama saya
      </motion.p>
      <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-lightest-slate">
        Nama Anda.
      </motion.h1>
      <motion.h2 variants={itemVariants} className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-slate mt-2">
        Saya membangun hal-hal untuk web.
      </motion.h2>
      <motion.p variants={itemVariants} className="mt-6 max-w-xl text-slate">
        Saya seorang web developer yang berspesialisasi dalam menciptakan pengalaman digital yang modern, responsif, dan menarik. Saat ini, saya fokus pada pengembangan produk web yang inovatif.
      </motion.p>
      <motion.div variants={itemVariants} className="mt-12">
        <Link href="/contact">
          <a className="text-cyan border border-cyan rounded px-8 py-4 font-mono hover:bg-cyan/10 transition-colors duration-300">
            Hubungi Saya
          </a>
        </Link>
      </motion.div>
    </motion.div>
  );
}

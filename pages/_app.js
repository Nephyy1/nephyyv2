import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          key={router.route}
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          transition={{ duration: 0.5 }}
          className="flex-grow container mx-auto px-6 py-12"
        >
          <Component {...pageProps} />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default MyApp;

import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-navy">
       <div className="fixed top-0 left-0 w-full h-full bg-gradient-radial from-light-navy/50 via-navy to-navy -z-10"></div>
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          key={router.route}
          initial={{ opacity: 0, filter: 'blur(5px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, filter: 'blur(5px)' }}
          transition={{ duration: 0.4 }}
          className="flex-grow container mx-auto px-6 py-16 md:py-24"
        >
          <Component {...pageProps} />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default MyApp;

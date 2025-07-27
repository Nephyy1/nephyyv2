import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const NavLink = ({ href, children }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link href={href}>
      <a className={`relative px-3 py-2 text-sm font-medium transition-colors ${isActive ? 'text-cyan' : 'text-lightest-slate hover:text-cyan'}`}>
        {children}
        {isActive && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan"
            layoutId="underline"
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
          />
        )}
      </a>
    </Link>
  );
};

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-navy/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/">
            <a className="font-display text-2xl font-bold text-cyan tracking-wider">
              LOGO
            </a>
          </Link>
          <div className="flex items-center space-x-2 md:space-x-4">
            <NavLink href="/">/home</NavLink>
            <NavLink href="/about">/about</NavLink>
            <NavLink href="/projects">/projects</NavLink>
            <NavLink href="/contact">/contact</NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}

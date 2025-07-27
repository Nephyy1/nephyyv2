import Link from 'next/link';
import { useRouter } from 'next/router';

const NavLink = ({ href, children }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link href={href}>
      <a className={`px-4 py-2 rounded-md text-lg transition-all duration-300 ${isActive ? 'bg-retro-primary text-white shadow-retro' : 'hover:bg-retro-secondary'}`}>
        {children}
      </a>
    </Link>
  );
};

export default function Header() {
  return (
    <header className="bg-retro-bg/80 backdrop-blur-md sticky top-0 z-50 py-6">
      <nav className="container mx-auto flex justify-between items-center px-6">
        <Link href="/">
          <a className="text-3xl font-press-start text-retro-primary hover:text-retro-accent transition-colors">
            MySite
          </a>
        </Link>
        <div className="flex items-center space-x-4">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>
      </nav>
    </header>
  );
}

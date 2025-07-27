import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-transparent py-8 mt-16 border-t-2 border-retro-secondary">
      <div className="container mx-auto text-center text-retro-text">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="text-3xl hover:text-retro-primary transition-colors"><FaGithub /></a>
          <a href="#" className="text-3xl hover:text-retro-primary transition-colors"><FaTwitter /></a>
          <a href="#" className="text-3xl hover:text-retro-primary transition-colors"><FaLinkedin /></a>
        </div>
        <p className="font-vt323">&copy; 2025 Your Name. All rights reserved.</p>
        <p className="font-vt323 text-sm mt-2">Powered by Next.js & Vercel</p>
      </div>
    </footer>
  );
}

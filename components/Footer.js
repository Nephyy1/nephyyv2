import { Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full py-6">
      <div className="container mx-auto px-6 text-center text-slate">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" aria-label="Github" className="hover:text-cyan transition-colors"><Github /></a>
          <a href="#" aria-label="Twitter" className="hover:text-cyan transition-colors"><Twitter /></a>
          <a href="#" aria-label="Linkedin" className="hover:text-cyan transition-colors"><Linkedin /></a>
        </div>
        <p className="text-sm">Didesain & Dibangun oleh Nama Anda</p>
        <p className="text-xs mt-1">© {new Date().getFullYear()} - Ditenagai oleh Next.js & Vercel</p>
      </div>
    </footer>
  );
}

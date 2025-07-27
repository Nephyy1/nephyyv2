import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectCard({ title, description, tech, github, link }) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="glass-card rounded-lg p-6 flex flex-col h-full bg-light-navy hover:shadow-2xl hover:shadow-cyan/10 transition-shadow"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-display text-xl font-bold text-lightest-slate group-hover:text-cyan transition-colors">{title}</h3>
        <div className="flex items-center space-x-4 text-slate">
          {github && <a href={github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan"><Github size={20} /></a>}
          {link && <a href={link} target="_blank" rel="noopener noreferrer" className="hover:text-cyan"><ExternalLink size={20} /></a>}
        </div>
      </div>
      <p className="text-sm text-slate flex-grow mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="text-xs font-mono text-cyan bg-cyan/10 px-2 py-1 rounded-full">{t}</span>
        ))}
      </div>
    </motion.div>
  );
}

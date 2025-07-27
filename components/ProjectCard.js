import { motion } from 'framer-motion';

export default function ProjectCard({ title, description, tech, link }) {
  return (
    <motion.div
      className="border-4 border-retro-primary p-6 bg-retro-bg shadow-retro hover:shadow-retro-hover transition-all duration-300 transform hover:-translate-y-1 hover:-translate-x-1"
      whileHover={{ scale: 1.02 }}
    >
      <h3 className="text-2xl font-press-start text-retro-accent mb-3">{title}</h3>
      <p className="text-lg mb-4 text-retro-text">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t) => (
          <span key={t} className="bg-retro-secondary text-white px-3 py-1 text-sm rounded-full">{t}</span>
        ))}
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-retro-primary text-white font-bold py-2 px-4 transition-all duration-300 hover:bg-retro-accent"
      >
        View Project
      </a>
    </motion.div>
  );
}

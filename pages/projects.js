import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';

const myProjects = [
  {
    title: 'Project Nebula',
    description: 'Platform analitik data canggih dengan visualisasi real-time, dirancang untuk skalabilitas dan performa tinggi.',
    tech: ['Next.js', 'TypeScript', 'D3.js', 'PostgreSQL'],
    github: '#',
    link: '#',
  },
  {
    title: 'Cyber-Mart',
    description: 'Sebuah E-commerce dengan tema futuristik, mengintegrasikan pembayaran modern dan pengalaman pengguna yang imersif.',
    tech: ['React', 'Node.js', 'Stripe API', 'Framer Motion'],
    github: '#',
    link: '#',
  },
  {
    title: 'RetroWave API',
    description: 'REST API publik yang menyediakan data tentang musik, film, dan game dari era 80-an, lengkap dengan dokumentasi.',
    tech: ['Node.js', 'Express', 'MongoDB', 'Swagger'],
    github: '#',
    link: null,
  },
];

export default function Projects() {
  return (
    <section className="max-w-5xl mx-auto">
      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-display text-4xl font-bold text-center mb-4 text-lightest-slate"
      >
        <span className="text-cyan font-mono text-2xl mr-2">02.</span>
        Proyek Pilihan
      </motion.h2>
      <div className="w-24 h-px bg-lightest-navy mx-auto mb-12"></div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {myProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

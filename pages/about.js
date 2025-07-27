import { motion } from 'framer-motion';
import { Code, Database, Smartphone, PenTool } from 'lucide-react';

const skills = [
  { icon: <Code className="text-cyan" />, name: 'Frontend', items: ['React', 'Next.js', 'Tailwind', 'TypeScript'] },
  { icon: <Database className="text-pink" />, name: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'Firebase'] },
  { icon: <PenTool className="text-purple" />, name: 'UI/UX Design', items: ['Figma', 'Prototyping', 'Wireframing'] },
  { icon: <Smartphone className="text-cyan" />, name: 'Mobile', items: ['React Native', 'Responsive Design'] },
];

export default function About() {
  return (
    <section className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-display text-4xl font-bold text-center mb-4 text-lightest-slate"
      >
        <span className="text-cyan font-mono text-2xl mr-2">01.</span>
        Tentang Saya
      </motion.h2>
       <div className="w-24 h-px bg-lightest-navy mx-auto mb-12"></div>

      <motion.p
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2}}
        className="text-center text-lg text-slate mb-16"
      >
        Perpaduan antara kreativitas dan kode. Inilah keahlian yang saya miliki.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="glass-card bg-light-navy p-6 rounded-lg"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 bg-navy rounded-full mr-4">{skill.icon}</div>
              <h3 className="font-display text-xl text-lightest-slate">{skill.name}</h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {skill.items.map(item => (
                <li key={item} className="text-sm font-mono text-slate bg-lightest-navy/50 px-3 py-1 rounded-full">{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
          }

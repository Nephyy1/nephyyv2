import { motion } from 'framer-motion';

export default function About() {
  const skills = ['JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Figma', 'Node.js'];

  return (
    <div>
      <h2 className="text-5xl font-press-start mb-8 text-center text-retro-primary">About Me</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xl leading-relaxed mb-4">
            Hello! I'm a passionate web developer with a love for retro aesthetics and interactive user experiences. My goal is to build things that are not only functional but also fun to use.
          </p>
          <p className="text-xl leading-relaxed">
            When I'm not coding, you can find me exploring classic video games, listening to synthwave, or experimenting with pixel art.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-press-start text-retro-accent mb-4">My Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                className="bg-retro-secondary text-white px-4 py-2 text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

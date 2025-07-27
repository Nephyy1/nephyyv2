import ProjectCard from '../components/ProjectCard';

const myProjects = [
  {
    title: 'Retro Arcade',
    description: 'A collection of classic arcade games built with JavaScript and HTML5 Canvas.',
    tech: ['JavaScript', 'HTML5', 'CSS'],
    link: '#',
  },
  {
    title: 'Synthwave Player',
    description: 'A web-based music player for synthwave tracks with a visualizer.',
    tech: ['React', 'Web Audio API', 'Styled Components'],
    link: '#',
  },
  {
    title: 'Pixel Art Editor',
    description: 'An online editor for creating and sharing pixel art with a retro interface.',
    tech: ['Next.js', 'Tailwind CSS', 'Firebase'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <div>
      <h2 className="text-5xl font-press-start mb-12 text-center text-retro-primary">My Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {myProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

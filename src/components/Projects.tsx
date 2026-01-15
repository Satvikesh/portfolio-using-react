import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    title: 'Real Estate',
    description: 'A complete on buying, selling and renting properties.',
    tags: ['Branding', 'Design'],
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    link: 'http://127.0.0.1:5500/reale.html',
  },
  {
    title: 'Portfolio Redesign',
    description: "It's a personal Portfolio of mine.",
    tags: ['Web Design', 'CSS'],
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    link: 'http://127.0.0.1:5500/pp.html',
  },
  {
    title: 'Music Player UI',
    description: 'Beautiful and functional music player interface with custom controls and animations.',
    tags: ['UI Design', 'Animation'],
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
  {
    title: 'Weather Dashboard',
    description: 'Clean weather app with location-based forecasts and beautiful gradient backgrounds.',
    tags: ['API', 'Design'],
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white border-4 border-dark transition-all duration-300 overflow-hidden group hover:-translate-x-2 hover:-translate-y-2 hover:shadow-[12px_12px_0_#222]"
    >
      <div
        className="w-full h-[300px] relative overflow-hidden"
        style={{ background: project.gradient }}
      >
        {/* Dithering pattern overlay */}
        <div className="absolute w-full h-full opacity-30">
          {index % 2 === 0 ? (
            <div className="w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,.3)_10px,rgba(255,255,255,.3)_20px)]" />
          ) : (
            <div
              className="w-full h-full"
              style={{
                background: 'radial-gradient(circle, rgba(255,255,255,.3) 2px, transparent 2px)',
                backgroundSize: '20px 20px',
              }}
            />
          )}
        </div>

        {/* Additional dithering effect */}
        <div
          className="absolute top-0 left-0 w-full h-full mix-blend-overlay opacity-30 animate-[dither-pulse_8s_infinite_ease-in-out]"
          style={{
            background: `
              radial-gradient(circle at 25% 25%, transparent 1px, rgba(0,0,0,0.1) 1px, rgba(0,0,0,0.1) 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, transparent 1px, rgba(255,255,255,0.1) 1px, rgba(255,255,255,0.1) 2px, transparent 2px)
            `,
            backgroundSize: '6px 6px, 8px 8px',
          }}
        />
      </div>

      <div className="p-8 bg-white">
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            <h3 className="text-3xl font-black mb-4 text-dark uppercase tracking-tight hover:text-secondary transition-colors">
              {project.title}
            </h3>
          </a>
        ) : (
          <h3 className="text-3xl font-black mb-4 text-dark uppercase tracking-tight">
            {project.title}
          </h3>
        )}
        <p className="text-gray-600 leading-relaxed mb-4">{project.description}</p>
        <div className="flex gap-2 flex-wrap">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 bg-gray-100 text-sm font-bold text-dark border-2 border-dark"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes dither-pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.1; }
        }
      `}</style>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="work" className="py-20 px-[5%] bg-white relative">
      {/* Dithering overlay */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none mix-blend-multiply opacity-10 dither-pattern-1" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        className="text-center mb-16"
      >
        <h2 className="text-[clamp(2.5rem,6vw,4rem)] font-black text-dark uppercase tracking-[-2px] mb-4">
          Featured Projects
        </h2>
        <p className="text-xl text-gray-600">Some cool stuff I've built</p>
      </motion.div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-12 mt-12">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

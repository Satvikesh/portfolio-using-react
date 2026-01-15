import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description: 'Creating beautiful and intuitive user interfaces that people love to use.',
  },
  {
    icon: '💻',
    title: 'Front-End Dev',
    description: 'Building responsive websites with HTML, CSS, and JavaScript.',
  },
  {
    icon: '🚀',
    title: 'Web Performance',
    description: 'Optimizing websites to load fast and run smoothly.',
  },
  {
    icon: '✨',
    title: 'Animation',
    description: 'Adding delightful micro-interactions and smooth transitions.',
  },
];

const SkillCard = ({ skill, index }: { skill: typeof skills[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
      animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.8, rotate: -5 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white p-10 border-4 border-dark text-center transition-all duration-300 hover:rotate-2 hover:scale-105"
    >
      <div className="text-5xl mb-4">{skill.icon}</div>
      <h3 className="text-2xl font-black mb-2 uppercase tracking-tight">{skill.title}</h3>
      <p className="text-gray-600 leading-relaxed">{skill.description}</p>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" className="py-20 px-[5%] bg-primary relative">
      {/* Dithering overlay */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none mix-blend-multiply opacity-10 dither-pattern-2" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        className="text-center mb-16"
      >
        <h2 className="text-[clamp(2.5rem,6vw,4rem)] font-black text-dark uppercase tracking-[-2px] mb-4">
          What I Do
        </h2>
        <p className="text-xl text-gray-600">My skills and expertise</p>
      </motion.div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 mt-12">
        {skills.map((skill, index) => (
          <SkillCard key={skill.title} skill={skill} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Skills;

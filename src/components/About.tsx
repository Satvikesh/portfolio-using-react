import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const facts = [
  { icon: '🎵', title: 'Music', detail: 'Indie Rock Fan' },
  { icon: '☕', title: 'Coffee', detail: '3 cups daily' },
  { icon: '🎮', title: 'Gaming', detail: 'RPG Lover' },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-20 px-[5%] bg-secondary relative">
      {/* Dithering overlay */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none mix-blend-multiply opacity-10 dither-pattern-3" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        className="max-w-[800px] mx-auto text-center"
      >
        <h2 className="text-[clamp(2.5rem,6vw,4rem)] font-black text-dark uppercase tracking-[-2px] mb-8">
          About Me
        </h2>

        <p className="text-[1.3rem] leading-relaxed text-dark mb-8 font-medium">
          I'm a creative developer who believes the web should be fun, colorful, and accessible to everyone.
          I love experimenting with bold designs and smooth animations.
        </p>

        <p className="text-[1.3rem] leading-relaxed text-dark mb-8 font-medium">
          When I'm not coding, you'll find me doodling, playing video games, or hunting for the best tacos in town.
        </p>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 mt-12">
          {facts.map((fact, index) => (
            <motion.div
              key={fact.title}
              initial={{ opacity: 0, rotate: -2 }}
              animate={isInView ? { opacity: 1, rotate: index % 2 === 0 ? -2 : 2 } : { opacity: 0, rotate: -2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white p-8 border-4 border-dark ${index % 2 === 0 ? '-rotate-2' : 'rotate-2'}`}
            >
              <h4 className="text-xl font-black mb-2 uppercase">
                {fact.icon} {fact.title}
              </h4>
              <p className="text-gray-600">{fact.detail}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;

import { motion } from 'framer-motion';
import Dither from './Dither';

const Hero = () => {
  const floatingShapes = [
    { style: { width: '200px', height: '200px', background: '#ff6b6b', borderRadius: '50%', top: '10%', left: '5%' }, delay: 0 },
    { style: { width: '150px', height: '150px', background: '#4ecdc4', top: '60%', right: '10%' }, delay: 3 },
    { style: { width: '180px', height: '180px', background: '#ffeb3b', clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', bottom: '15%', left: '15%' }, delay: 6 },
    { style: { width: '120px', height: '120px', background: '#95e1d3', borderRadius: '20px', top: '20%', right: '20%' }, delay: 9 },
    { style: { width: '100px', height: '100px', background: '#ffa07a', clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', top: '70%', left: '50%' }, delay: 12 },
  ];

  return (
    <section
      id="home"
      className="hero"
    >
      {/* Animated dither background */}
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%',
        zIndex: 0
      }}>
        <Dither
          waveColor={[0.03529411764705882, 0.2627450980392157, 0.12156862745098039]}
          disableAnimation={false}
          enableMouseInteraction
          mouseRadius={0.8}
          colorNum={3}
          pixelSize={2}
          waveAmplitude={0.35}
          waveFrequency={4.5}
          waveSpeed={0.05}
        />
      </div>

      {/* Floating shapes */}
      <div style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, overflow: 'hidden', zIndex: 1 }}>
        {floatingShapes.map((shape, index) => (
          <motion.div
            key={index}
            className="floating-shape"
            style={{
              ...shape.style,
              position: 'absolute'
            }}
            animate={{
              x: [0, 30, -20, 40, 0],
              y: [0, -30, 40, 20, 0],
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: shape.delay,
            }}
          />
        ))}
      </div>

      {/* Hero content */}
      <div className="hero-content">
        <h1 className="hero-title">
          {['Hey!', "I'm", 'Satvikesh'].map((word, index) => (
            <motion.span
              key={word}
              className="hero-word"
              style={{
                color: index === 1 ? '#ff6b6b' : index === 2 ? '#4ecdc4' : '#222'
              }}
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              {word}{' '}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="hero-description"
        >
          A designer & developer who loves bold colors and playful interfaces
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="hero-buttons"
        >
          <button
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn btn-primary"
          >
            See My Work
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn btn-secondary"
          >
            Let's Chat
          </button>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;

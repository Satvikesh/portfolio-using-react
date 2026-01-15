import { motion } from 'framer-motion';

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-0 w-full px-[5%] py-8 flex justify-between items-center z-[1000] bg-white/98 border-b-4 border-dark">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-2xl font-black text-dark uppercase tracking-tight"
      >
        Satvikesh Reddy
      </motion.div>
      
      <ul className="flex gap-8 list-none">
        {['Home', 'Work', 'Skills', 'About', 'Contact'].map((item, index) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <button
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-dark no-underline font-bold text-base relative px-4 py-2 transition-all duration-300 hover:bg-primary hover:-rotate-2"
            >
              {item}
            </button>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

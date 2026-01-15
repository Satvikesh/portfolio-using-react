import { motion } from 'framer-motion';

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/Satvikesh' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/satvikesh-reddy-guttapati-81b5ab312/' },
  { name: 'Twitter', url: 'https://x.com/Satvikreddie' },
  { name: 'Instagram', url: 'https://www.instagram.com/satvikreddyg_/?next=%2F&hl=en' },
];

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-12 px-[5%]">
      <div className="flex gap-8 justify-center mb-8 flex-wrap">
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="text-dark bg-primary no-underline font-bold px-6 py-4 border-[3px] border-dark transition-all duration-300 uppercase text-sm hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0_#ffeb3b] hover:bg-white"
          >
            {link.name}
          </motion.a>
        ))}
      </div>
      <p className="font-bold mt-8">
        &copy; {new Date().getFullYear()} Satvikesh
      </p>
    </footer>
  );
};

export default Footer;

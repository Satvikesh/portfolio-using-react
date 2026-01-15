import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { name, email, message } = formData;
    const yourEmail = 'satvikesh9090@gmail.com';
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    
    window.location.href = `mailto:${yourEmail}?subject=${subject}&body=${body}`;
    
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-[5%] bg-accent">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        className="text-center mb-12"
      >
        <h2 className="text-[clamp(2.5rem,6vw,4rem)] font-black text-white uppercase tracking-[-2px] mb-4">
          Let's Work Together
        </h2>
        <p className="text-xl text-white/90">Got a project in mind? Drop me a message!</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ delay: 0.2 }}
        className="max-w-[700px] mx-auto bg-white p-12 border-4 border-dark"
      >
        <form onSubmit={handleSubmit}>
          <div className="mb-8">
            <label
              htmlFor="name"
              className="block mb-2 font-bold text-dark uppercase text-sm tracking-widest"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 border-[3px] border-dark text-base bg-gray-50 transition-all duration-300 focus:outline-none focus:bg-white focus:-translate-x-0.5 focus:-translate-y-0.5 focus:shadow-[4px_4px_0_#222]"
            />
          </div>

          <div className="mb-8">
            <label
              htmlFor="email"
              className="block mb-2 font-bold text-dark uppercase text-sm tracking-widest"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 border-[3px] border-dark text-base bg-gray-50 transition-all duration-300 focus:outline-none focus:bg-white focus:-translate-x-0.5 focus:-translate-y-0.5 focus:shadow-[4px_4px_0_#222]"
            />
          </div>

          <div className="mb-8">
            <label
              htmlFor="message"
              className="block mb-2 font-bold text-dark uppercase text-sm tracking-widest"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-4 border-[3px] border-dark text-base bg-gray-50 transition-all duration-300 resize-y min-h-[150px] focus:outline-none focus:bg-white focus:-translate-x-0.5 focus:-translate-y-0.5 focus:shadow-[4px_4px_0_#222]"
            />
          </div>

          <button
            type="submit"
            className="w-full px-10 py-5 text-lg font-bold border-4 border-dark bg-primary text-dark transition-all duration-300 uppercase tracking-wide hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_#222]"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;

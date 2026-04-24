import { motion } from "framer-motion";
import resume from '../assets/resume.pdf'

const Hero = () => {
  return (
    <section id="home" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '1.1rem' }}
        >
          Farshana | Software Engineer
        </motion.p>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          style={{ fontSize: 'clamp(40px, 8vw, 80px)', maxWidth: '800px', margin: '0 0 1.5rem 0', lineHeight: 1.1 }}
        >
          Building scalable and clean web experiences.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{ maxWidth: '600px', fontSize: '1.15rem', marginBottom: '2.5rem' }}
        >
          I am a MERN Stack Developer focused on creating user-friendly web applications, integrating robust backend services, and ensuring seamless front-end interactions.
        </motion.p>

        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ display: 'flex', gap: '1rem' }}
        >
          <a href="#work" className="btn btn-primary">
            View Work
          </a>
          <a href={ resume } target="_blank" className="btn btn-secondary" rel="noreferrer">
            Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
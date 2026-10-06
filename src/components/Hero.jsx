import { motion } from 'framer-motion';
import resume from '../assets/resume.pdf';

const Hero = () => {
  return (
    <section
      id="home"
      className="section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="container">
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            color: 'var(--text-secondary)',
            marginBottom: '1rem',
            fontSize: '1.1rem',
          }}
        >
          Hello, I'm Farshana K
        </motion.p>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          style={{
            fontSize: 'clamp(42px, 8vw, 82px)',
            maxWidth: '950px',
            margin: '0 0 1.5rem 0',
            lineHeight: 1.05,
          }}
        >
          Full Stack Developer building{' '}
          <span className="text-accent">modern web applications.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            maxWidth: '680px',
            fontSize: '1.15rem',
            lineHeight: 1.8,
            marginBottom: '2.5rem',
          }}
        >
          I build full-stack applications using React, TypeScript, Node.js,
          Express, and MongoDB, with a focus on clean interfaces, reliable
          backend systems, and practical solutions to real-world problems.
        </motion.p>

        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <a href="#work" className="btn btn-primary">
            View My Work
          </a>

          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            View Resume
          </a>

          <a
            href="https://github.com/Farshana-K"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
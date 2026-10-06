import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2>
            About <span className="text-accent">Me</span>
          </h2>

          <p
            style={{
              marginTop: '20px',
              maxWidth: '800px',
              lineHeight: 1.8,
            }}
          >
            I am a Full Stack Developer with hands-on experience building and
            deploying web applications using React, TypeScript, Node.js,
            Express, and MongoDB.
          </p>

          <p
            style={{
              maxWidth: '800px',
              lineHeight: 1.8,
            }}
          >
            I enjoy turning ideas into practical applications, from
            educational gaming platforms and e-commerce systems to article
            management and PDF utilities. I am particularly interested in
            backend development, problem solving, and building maintainable
            software.
          </p>

          <p
            style={{
              maxWidth: '800px',
              lineHeight: 1.8,
            }}
          >
            I am continuously improving my skills through hands-on projects,
            technical challenges, and real-world development experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
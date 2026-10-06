import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section
      id="contact"
      className="section"
      style={{
        borderTop: '1px solid var(--border-color)',
        padding: '120px 0 60px',
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: '850px',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p
            style={{
              color: 'var(--text-secondary)',
              marginBottom: '0.75rem',
            }}
          >
            Get in touch
          </p>

          <h2
            className="section-title"
            style={{
              marginBottom: '1.5rem',
            }}
          >
            Let's work <span className="text-accent">together.</span>
          </h2>

          <p
            style={{
              marginBottom: '2.5rem',
              maxWidth: '650px',
              fontSize: '1.1rem',
              lineHeight: 1.8,
            }}
          >
            I am open to junior full-stack development opportunities and
            projects where I can contribute, learn, and grow as a developer.
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              marginBottom: '4rem',
            }}
          >
            <a
              href="mailto:farshana.shameemm@gmail.com"
              style={{
                fontSize: '1.35rem',
                fontWeight: 500,
                color: 'var(--text-primary)',
                width: 'fit-content',
              }}
            >
              farshana.shameemm@gmail.com
            </a>

            <a
              href="tel:+919605934731"
              style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                width: 'fit-content',
              }}
            >
              +91 9605934731
            </a>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '1.5rem',
              flexWrap: 'wrap',
              marginBottom: '5rem',
            }}
          >
            <a
              href="https://github.com/Farshana-K"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/farshana-k-5905a1122/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://leetcode.com/u/farshanaminu/"
              target="_blank"
              rel="noreferrer"
            >
              LeetCode ↗
            </a>
          </div>
        </motion.div>
      </div>

      <div
        className="container"
        style={{
          borderTop: '1px solid var(--border-color)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          gap: '1rem',
          flexWrap: 'wrap',
          color: 'var(--text-secondary)',
          fontSize: '0.85rem',
        }}
      >
        <span>
          &copy; {new Date().getFullYear()} Farshana K
        </span>

        <span>Full Stack Developer</span>
      </div>
    </section>
  );
};

export default Contact;
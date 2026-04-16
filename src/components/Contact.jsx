import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="section" style={{ borderTop: '1px solid var(--border-color)', padding: '150px 0' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Let's work together.</h2>
          <p style={{ marginBottom: '3rem', maxWidth: '600px', fontSize: '1.2rem' }}>
            I'm always open to discussing product design work, development projects, or partnership opportunities. Let's create something meaningful.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '5rem' }}>
            <a href="mailto:farshanakilliyanni@gmail.com" style={{ fontSize: '1.5rem', fontWeight: 500, color: 'var(--text-primary)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', width: 'fit-content' }}>
              farshanakilliyanni@gmail.com
            </a>
            
            <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Follow me on</span>
              <a href="https://github.com/farshanashameem" target="_blank" rel="noreferrer" style={{ fontWeight: 500 }}>GitHub</a>
              <a href="https://leetcode.com/u/farshanaminu/" target="_blank" rel="noreferrer" style={{ fontWeight: 500 }}>LeetCode</a>
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="container" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '2rem', marginTop: 'auto', display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        <span>&copy; {new Date().getFullYear()} Farshana</span>
        <span>MERN Stack Developer</span>
      </div>
    </section>
  );
};

export default Contact;
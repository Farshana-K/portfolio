import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Nahar Al-Rayan",
      description: "Corporate website for a major Water Bottling Factory in Jeddah. Features bilingual support, service details, and responsive product catalogs.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/farshanashameem/alrayan-static-website",
      live: "https://naharalrayan.com/"
    },
    {
      title: "ShopCart fashion website",
      description: "A scalable full-stack MERN e-commerce application featuring secure authentication, admin dashboard for product and user management, advanced filtering and search, and a seamless cart experience, built with a focus on performance and mvc architecture.",
      tech: ["MongoDB", "Express", "Node.js", "ejs"],
      github: "https://github.com/farshanashameem/ShopCart",
      live: "https://shopcart.world"
    },
    {
      title: "Authentication System",
      description: "Secure login/signup system with OTP verification and password reset functionality mapping to database.",
      tech: ["Node.js", "Express", "MongoDB"],
      github: "https://github.com/farshanashameem/userManagement-redux-JWT",

    },
    {
      title: "Portfolio Website",
      description: "Modern responsive tech portfolio built with dark mode support and Framer Motion animations.",
      tech: ["React", "CSS", "Framer Motion"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="work" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-title">Project Gallery.</h2>
          <p style={{ marginBottom: '3rem', maxWidth: '600px' }}>
            Deep dive into my technical case studies.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1 }}
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>{project.title}</h3>
              <p style={{ flex: 1, marginBottom: '2rem', fontSize: '0.95rem' }}>{project.description}</p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '2rem' }}>
                {project.tech.map((t, j) => (
                  <span key={j} style={{ background: 'var(--bg-tertiary)', padding: '4px 10px', borderRadius: '4px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    {t}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.2rem' }}>
                {project.github && project.github !== "#" && (
                  <a href={project.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '5px' }}>
                    GitHub
                  </a>
                )}
                {project.live && project.live !== "#" && (
                  <a href={project.live} target="_blank" rel="noreferrer" style={{ color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '5px' }}>
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
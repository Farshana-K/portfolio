import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        'React.js',
        'TypeScript',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Tailwind CSS',
        'Redux Toolkit',
        'Bootstrap',
        'Framer Motion',
      ],
    },
    {
      title: 'Backend',
      skills: [
        'Node.js',
        'Express.js',
        'REST APIs',
        'JWT',
        'Authentication',
        'Session Management',
        'OTP Verification',
      ],
    },
    {
      title: 'Database',
      skills: ['MongoDB', 'Mongoose', 'SQL'],
    },
    {
      title: 'Architecture & Concepts',
      skills: [
        'Clean Architecture',
        'MVC',
        'OOP',
        'SOLID',
        'Repository Pattern',
        'Dependency Injection',
        'DSA',
      ],
    },
    {
      title: 'AI',
      skills: ['LangChain', 'Generative AI', 'AI Agents'],
    },
    {
      title: 'Cloud & Deployment',
      skills: [
        'AWS',
        'EC2',
        'Azure',
        'Nginx',
        'PM2',
        'Vercel',
        'Render',
      ],
    },
    {
      title: 'Tools',
      skills: ['Git', 'GitHub', 'Postman', 'Figma', 'Vite', 'NPM'],
    },
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Technical <span className="text-accent">Skills.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            maxWidth: '650px',
            marginBottom: '3rem',
          }}
        >
          Technologies and concepts I use to design, develop, and deploy
          full-stack applications.
        </motion.p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              className="card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <h3
                style={{
                  marginBottom: '1.25rem',
                  color: 'var(--text-primary)',
                  fontSize: '1.15rem',
                  borderBottom: '1px solid var(--border-color)',
                  paddingBottom: '0.7rem',
                }}
              >
                {category.title}
              </h3>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                }}
              >
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      background: 'var(--bg-tertiary)',
                      padding: '7px 11px',
                      borderRadius: '5px',
                      fontSize: '0.85rem',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
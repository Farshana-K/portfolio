import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'CodeCrush',
      category: 'Educational Gaming Platform',
      description:
        'An educational gaming platform for children featuring interactive games, progress tracking, parent features, contests, premium subscriptions, and AI-powered game generation.',
      tech: [
        'React',
        'TypeScript',
        'Node.js',
        'MongoDB',
        'LangChain',
        'Redux Toolkit',
      ],
      github: 'https://github.com/Farshana-K/CodeCrushApp',
      live: 'https://code-crush-app.vercel.app/',
      symbol: 'CC',
    },
    {
      title: 'ArticleFeed',
      category: 'Article Management Platform',
      description:
        'An article platform where users can create and manage articles, explore content based on their interests, manage profiles, and interact with articles.',
      tech: [
        'React',
        'TypeScript',
        'Node.js',
        'Express',
        'MongoDB',
      ],
      github: 'https://github.com/Farshana-K/ArticleFeedApp',
      live: 'https://article-feed-frontend-xi.vercel.app/',
      symbol: 'AF',
    },
    {
      title: 'PDF Extractor',
      category: 'PDF Utility',
      description:
        'A web application for viewing PDF files, previewing pages, selecting specific pages, and extracting only the pages users need.',
      tech: ['React', 'TypeScript', 'Vite', 'PDF.js'],
      github: 'https://github.com/Farshana-K/PdfExtractor',
      live: 'https://pdf-extractor-zeta-three.vercel.app/',
      symbol: 'PDF',
    },
    {
      title: 'ShopCart',
      category: 'Fashion E-Commerce',
      description:
        'A fashion e-commerce application with product browsing, filtering, cart and order management, authentication, payments, wallet features, and referral rewards.',
      tech: ['Node.js', 'Express', 'MongoDB', 'EJS'],
      github: 'https://github.com/Farshana-K/ShopCart',
      live: 'https://shopcart-7epq.onrender.com',
      symbol: 'SC',
    },
    {
      title: 'Nahar Al Rayan',
      category: 'Client Website',
      description:
        'A responsive business website developed for a real client, presenting the company, services, and products across mobile, tablet, and desktop devices.',
      tech: ['React', 'JavaScript', 'Tailwind CSS'],
      github: 'https://github.com/farshanashameem/alrayan-static-website',
      live: 'https://naharalrayan.com/',
      symbol: 'NR',
    },
  ];

  return (
    <section id="work" className="section projects-section">
      <div className="container">
        <motion.div
          className="projects-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="projects-label">SELECTED WORK</span>

          <h2 className="section-title">
            Projects I&apos;ve <span className="text-accent">built.</span>
          </h2>

          <p className="projects-intro">
            A collection of applications and websites built through hands-on
            development, problem solving, and continuous learning.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              <div className="project-visual">
                <div className="project-visual-grid" />

                <div className="project-symbol">
                  {project.symbol}
                </div>

                <span className="project-index">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span className="project-arrow">↗</span>
              </div>

              <div className="project-content">
                <span className="project-category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="project-live"
                  >
                    Live Demo
                    <span>↗</span>
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-github"
                  >
                    GitHub
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
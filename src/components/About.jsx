import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2>
            About <span className="text-accent">Me</span>
          </h2>

          <p style={{ marginTop: "20px" }}>
            I am a passionate MERN Stack Developer with hands-on experience in
            building full-stack web applications. I enjoy solving problems and
            creating smooth user experiences.
          </p>

          <p>
            Currently, I am working on an E-commerce project with features like
            authentication, admin dashboard, product management, and filtering
            system using MongoDB, Express, and React.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
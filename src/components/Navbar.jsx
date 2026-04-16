import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container nav-content">
        <a href="#home" className="logo">Farshana.</a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
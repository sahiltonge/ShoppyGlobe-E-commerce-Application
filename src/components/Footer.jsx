import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <p>ShoppyGlobe E-commerce Application</p>
      <div className="social-icons">
        <a
          href="https://github.com/sahiltonge"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/sahil-tonge"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={22} />
        </a>
      </div>
    </footer>
  );
}

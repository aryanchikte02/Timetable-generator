import React from 'react';
import './Footer.css';
import {
  FaInstagram,
  FaEnvelope,
  FaLinkedin,
  FaGithub
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3>Student Timetable</h3>
        <p>Plan. Organize. Succeed.</p>

        <div className="footer-icons">
          <a href="mailto:aryanchikte401@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>

          <a
            href="https://github.com/aryanchikte"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/aryanchikte"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>

        <p className="footer-bottom">
          &copy; {new Date().getFullYear()} Student Timetable. All rights reserved.
        </p>
      </div>
    </footer>
  );
}


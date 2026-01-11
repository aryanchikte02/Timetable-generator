import React from "react";
import "./about.css";
import { FaUserGraduate, FaLightbulb, FaLaptopCode, FaUsers } from "react-icons/fa";

export default function About() {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About Student Timetable</h1>
        <p>Empowering students to manage time, tasks, and success.</p>
      </section>

      <section className="about-section">
        <div className="about-card">
          <FaUserGraduate className="about-icon" />
          <h3>Who We Are</h3>
          <p>
            We are a group of passionate developers and educators working to make students' lives easier by helping them stay organized.
          </p>
        </div>

        <div className="about-card">
          <FaLightbulb className="about-icon" />
          <h3>Our Mission</h3>
          <p>
            Our mission is to create simple yet powerful tools to manage academic routines, helping students focus on learning, not planning.
          </p>
        </div>

        <div className="about-card">
          <FaLaptopCode className="about-icon" />
          <h3>Technology</h3>
          <p>
            Built with modern web technologies like React, Spring Boot, and REST APIs — we value speed, simplicity, and elegance.
          </p>
        </div>

        <div className="about-card">
          <FaUsers className="about-icon" />
          <h3>Community</h3>
          <p>
            Join thousands of students who are already managing their time efficiently. Your feedback drives our innovation.
          </p>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaBook, FaInfoCircle, FaPhone, FaGraduationCap } from 'react-icons/fa';


export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow py-2">
      <div className="container-fluid justify-content-center">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <FaGraduationCap size={30} className="me-2" />
          <span className="fw-bold fs-4">Student Timetable</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav text-center">
            <li className="nav-item mx-2">
              <Link className="nav-link d-flex align-items-center gap-1" to="/">
                <FaBook /> Home
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link active d-flex align-items-center gap-1" to="/timetable">
                <FaCalendarAlt /> Timetable
              </Link>
            </li>
            
            <li className="nav-item mx-2">
              <Link className="nav-link d-flex align-items-center gap-1" to="/about">
                <FaInfoCircle /> About
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link d-flex align-items-center gap-1" to="/contact">
                <FaPhone /> Contact
              </Link>
            </li>
          </ul>
        </div>
        <Link className="navbar-brand d-flex align-items-center" to="/login">
          <span className="fw-bold fs-4">Login</span>
        </Link>
      </div>
    </nav>
  );
}




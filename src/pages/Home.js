import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import About from "./About";
import Footer from "../users/Footer";

export default function Home() {
  return (
    <div>
      <div className="home-container d-flex align-items-center justify-content-center">
        <div className="text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
            alt="Student Icon"
            className="home-logo mb-4"
          />

          <h1 className="display-4 mb-3 animate__animated animate__fadeInDown">
            Welcome to Student Timetable
          </h1>

          <p className="lead mb-4 animate__animated animate__fadeInUp">
            Organize your week, stay productive, and never miss a class again!
          </p>

          <div className="mt-4">
            <Link to="/timetable" className="btn btn-primary mx-2 px-4 py-2">
              View Timetable
            </Link>

            <Link
              to="/add-timetable"
              className="btn btn-outline-secondary mx-2 px-4 py-2"
            >
              Add Timetable
            </Link>
          </div>
        </div>
      </div>

      <About />
      <Footer />
    </div>
  );
}

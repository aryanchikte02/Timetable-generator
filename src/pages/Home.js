import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import './Home.css'; // For custom styles
import About from './About';
import Footer from '../users/Footer';


export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const result = await axios.get("http://localhost:8080/users");
      setUsers(result.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  const deletes = async () => {

  }

  return (
    <div>
      <div className="home-container d-flex align-items-center justify-content-center">
        <div className="text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
            alt="Student Icon"
            className="home-logo mb-4"
          />
          <h1 className="display-4 mb-3 animate__animated animate__fadeInDown">Welcome to Student Timetable</h1>
          <p className="lead mb-4 animate__animated animate__fadeInUp">Organize your week, stay productive, and never miss a class again!</p>
          <div className="mt-4">
            <Link to="/timetable" className="btn btn-primary mx-2 px-4 py-2">
              View Timetable
            </Link>
            <Link to="/add" className="btn btn-outline-secondary mx-2 px-4 py-2">
              Add Subjects
            </Link>
          </div>
        </div>
      </div>
      <About />
      <Footer />
    </div>
  );
}

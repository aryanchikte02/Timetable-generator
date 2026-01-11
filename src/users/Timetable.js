import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

const Timetable = () => {
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
  const deletes = async (id) => {
  try {
    await axios.delete(`http://localhost:8080/users/${id}`);
    // Reload users after deletion
    loadUsers();
  } catch (error) {
    console.error("Error deleting user:", error);
  }
};

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Student Timetable</h2>

      <table className="table border shadow text-center blue-white-striping">
        <thead className="table-primary">
          <tr>
            <th>#</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{user.monday}</td>
                <td>{user.tuesday}</td>
                <td>{user.wednesday}</td>
                <td>{user.thursday}</td>
                <td>{user.friday}</td>
                <td>
                    <Link
                        className="btn btn-sm btn-warning me-2"
                        to={`/edituser/${user.id}`}
                      >
                        <i className="bi bi-pencil-square"></i> update
                      </Link>
                    <button className='btn btn-danger' onClick={deletes}>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <Link to="/add" className="btn btn-primary mt-3">Add More Subjects</Link>
    </div>

  );
}

export default Timetable
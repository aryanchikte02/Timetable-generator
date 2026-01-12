import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import "./Timetable.css";

const Timetable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/users/${id}`);
    loadUsers();
  };

  // PDF
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Student Timetable", 14, 20);

    const columns = ["#", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

    const rows = users.map((u, index) => [
      index + 1,
      `${u.mondaySubject}\n${u.mondayTeacher}\n${u.mondayLocation}`,
      `${u.tuesdaySubject}\n${u.tuesdayTeacher}\n${u.tuesdayLocation}`,
      `${u.wednesdaySubject}\n${u.wednesdayTeacher}\n${u.wednesdayLocation}`,
      `${u.thursdaySubject}\n${u.thursdayTeacher}\n${u.thursdayLocation}`,
      `${u.fridaySubject}\n${u.fridayTeacher}\n${u.fridayLocation}`,
    ]);

    autoTable(doc, {
      head: [columns],
      body: rows,
      startY: 30,
      styles: { halign: "center" },
    });

    doc.save("Student_Timetable.pdf");
  };

  return (
    <div className="timetable-bg">
      <div className="container">
        <div className="timetable-card">

          {/* HEADER BUTTONS */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="timetable-title">Student Timetable</h2>

            <div>
              <button
                className="btn btn-primary btn-download me-2"
                onClick={downloadPDF}
              >
                📄 Download PDF
              </button>

              <Link to="/add-timetable" className="btn btn-success btn-add">
                ➕ Add Timetable
              </Link>
            </div>
          </div>

          {/* TABLE */}
          <table className="table table-bordered table-hover text-center timetable-table">
            <thead>
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
              {users.length === 0 ? (
                <tr>
                  <td colSpan="7">No timetable data available</td>
                </tr>
              ) : (
                users.map((user, index) => (
                  <tr key={user.id}>
                    <td>{index + 1}</td>

                    <td>
                      <strong>{user.mondaySubject}</strong><br />
                      <small>{user.mondayTeacher}</small><br />
                      <small>{user.mondayLocation}</small>
                    </td>

                    <td>
                      <strong>{user.tuesdaySubject}</strong><br />
                      <small>{user.tuesdayTeacher}</small><br />
                      <small>{user.tuesdayLocation}</small>
                    </td>

                    <td>
                      <strong>{user.wednesdaySubject}</strong><br />
                      <small>{user.wednesdayTeacher}</small><br />
                      <small>{user.wednesdayLocation}</small>
                    </td>

                    <td>
                      <strong>{user.thursdaySubject}</strong><br />
                      <small>{user.thursdayTeacher}</small><br />
                      <small>{user.thursdayLocation}</small>
                    </td>

                    <td>
                      <strong>{user.fridaySubject}</strong><br />
                      <small>{user.fridayTeacher}</small><br />
                      <small>{user.fridayLocation}</small>
                    </td>

                    <td>
                      <Link
                        to={`/edituser/${user.id}`}
                        className="btn btn-warning btn-action me-2"
                      >
                        ✏️ Update
                      </Link>

                      <button
                        className="btn btn-danger btn-action"
                        onClick={() => deleteUser(user.id)}
                      >
                        🗑 Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
};

export default Timetable;

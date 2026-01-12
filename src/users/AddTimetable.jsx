import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddTimetable.css";

const AddTimetable = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    mondaySubject: "",
    mondayTeacher: "",
    mondayLocation: "",

    tuesdaySubject: "",
    tuesdayTeacher: "",
    tuesdayLocation: "",

    wednesdaySubject: "",
    wednesdayTeacher: "",
    wednesdayLocation: "",

    thursdaySubject: "",
    thursdayTeacher: "",
    thursdayLocation: "",

    fridaySubject: "",
    fridayTeacher: "",
    fridayLocation: "",
  });

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
    navigate("/timetable");
  };

  return (
    <div className="add-bg">
      <div className="container">
        <div className="add-card">

          <h2 className="text-center mb-4 add-title">
            Add Timetable
          </h2>

          <form onSubmit={onSubmit}>
            <table className="table table-bordered table-hover text-center add-table">
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Subject</th>
                  <th>Teacher</th>
                  <th>Classroom</th>
                </tr>
              </thead>

              <tbody>
                {[
                  ["Monday", "monday"],
                  ["Tuesday", "tuesday"],
                  ["Wednesday", "wednesday"],
                  ["Thursday", "thursday"],
                  ["Friday", "friday"],
                ].map(([day, key]) => (
                  <tr key={day}>
                    <td><strong>{day}</strong></td>
                    <td>
                      <input
                        className="form-control add-input"
                        name={`${key}Subject`}
                        onChange={onChange}
                        required
                      />
                    </td>
                    <td>
                      <input
                        className="form-control add-input"
                        name={`${key}Teacher`}
                        onChange={onChange}
                        required
                      />
                    </td>
                    <td>
                      <input
                        className="form-control add-input"
                        name={`${key}Location`}
                        onChange={onChange}
                        required
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="text-center mt-4">
              <button className="btn btn-success add-btn-save me-3">
                💾 Save Timetable
              </button>

              <button
                type="button"
                className="btn btn-secondary add-btn-cancel"
                onClick={() => navigate("/timetable")}
              >
                ❌ Cancel
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};

export default AddTimetable;

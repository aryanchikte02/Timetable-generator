import axios from "axios";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

export default function AddUser() {
  const [user, setUser] = useState({
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: ''
  });

  const navigate = useNavigate(); // ✅ Fix: create navigate instance

  const { monday, tuesday, wednesday, thursday, friday } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/user", user);
      navigate("/timetable"); // ✅ Navigate to Home after successful save
    } catch (error) {
      console.error("Error saving user:", error);
      alert("Failed to save subject.");
    }
  };

  const onCancel = () => {
    setUser({
      monday: '',
      tuesday: '',
      wednesday: '',
      thursday: '',
      friday: ''
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add Subject</h2>

          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="monday" className="form-label">Period 1 (Monday)</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter subject"
                name="monday"
                value={monday}
                onChange={onInputChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="tuesday" className="form-label">Period 2 (Tuesday)</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter subject"
                name="tuesday"
                value={tuesday}
                onChange={onInputChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="wednesday" className="form-label">Period 3 (Wednesday)</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter subject"
                name="wednesday"
                value={wednesday}
                onChange={onInputChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="thursday" className="form-label">Period 4 (Thursday)</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter subject"
                name="thursday"
                value={thursday}
                onChange={onInputChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="friday" className="form-label">Period 5 (Friday)</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter subject"
                name="friday"
                value={friday}
                onChange={onInputChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-primary">Submit</button>
            <button type="button" className="btn btn-outline-danger mx-2" onClick={onCancel}>Cancel</button>
          </form>
        </div>
      </div>
    </div>
  );
}

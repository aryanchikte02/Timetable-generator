import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  const navigate = useNavigate();
  const { id } = useParams();

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

  // ✅ useCallback makes ESLint happy
  const loadUser = useCallback(async () => {
    const result = await axios.get(
      `${process.env.REACT_APP_API_URL || "http://localhost:8080"}/user/${id}`
    );
    setUser(result.data);
  }, [id]);

  useEffect(() => {
    loadUser();
  }, [loadUser]); // ✅ ESLint FIXED

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(
      `${process.env.REACT_APP_API_URL || "http://localhost:8080"}/user/${id}`,
      user
    );
    navigate("/timetable");
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Edit Timetable</h2>

      <form onSubmit={onSubmit}>
        {Object.keys(user).map((key) => (
          <input
            key={key}
            className="form-control mb-2"
            name={key}
            value={user[key]}
            onChange={onInputChange}
          />
        ))}

        <button className="btn btn-primary mt-3">Update</button>
      </form>
    </div>
  );
}

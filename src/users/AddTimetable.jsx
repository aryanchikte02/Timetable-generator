import React, { useState } from "react";
import TimetableGrid from "./TimetableGrid";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const times = ["09:00", "10:00", "11:00", "12:00", "01:00", "02:00"];

const AddTimetable = () => {
  const [activity, setActivity] = useState({
    subject: "",
    teacher: "",
    classroom: "",
    day: "Mon",
    time: "09:00",
    color: "#6366f1",
  });

  const [activities, setActivities] = useState([]);

  const addActivity = () => {
    if (!activity.subject) return;

    setActivities([...activities, activity]);

    setActivity({
      subject: "",
      teacher: "",
      classroom: "",
      day: "Mon",
      time: "09:00",
      color: "#6366f1",
    });
  };

  return (
    <div className="tt-container">
      {/* LEFT FORM */}
      <div className="tt-form">
        <h3 className="tt-title">Add Timetable</h3>

        <label className="tt-label">Subject</label>
        <input
          className="tt-input"
          value={activity.subject}
          placeholder="Subject Name"
          onChange={(e) =>
            setActivity({ ...activity, subject: e.target.value })
          }
        />

        <label className="tt-label">Teacher</label>
        <input
          className="tt-input"
          value={activity.teacher}
          placeholder="Teacher Name"
          onChange={(e) =>
            setActivity({ ...activity, teacher: e.target.value })
          }
        />

        <label className="tt-label">Classroom</label>
        <input
          className="tt-input"
          value={activity.classroom}
          placeholder="Classroom"
          onChange={(e) =>
            setActivity({ ...activity, classroom: e.target.value })
          }
        />

        <label className="tt-label">Day</label>
        <select
          className="tt-select"
          value={activity.day}
          onChange={(e) =>
            setActivity({ ...activity, day: e.target.value })
          }
        >
          {days.map((d) => (
            <option key={d}>{d}</option>
          ))}
        </select>

        <label className="tt-label">Time</label>
        <select
          className="tt-select"
          value={activity.time}
          onChange={(e) =>
            setActivity({ ...activity, time: e.target.value })
          }
        >
          {times.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>

        <label className="tt-label">Color</label>
        <input
          type="color"
          className="tt-color"
          value={activity.color}
          onChange={(e) =>
            setActivity({ ...activity, color: e.target.value })
          }
        />

        <button className="tt-btn" onClick={addActivity}>
          Add
        </button>
      </div>

      {/* RIGHT TABLE */}
      <TimetableGrid activities={activities} days={days} times={times} />
    </div>
  );
};

export default AddTimetable;

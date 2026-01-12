import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'animate.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './layout/Navbar';
import Home from './pages/Home';
import About from './pages/About';

import Login from './users/Login';
import Timetable from "./users/Timetable";   // ✅ CORRECT PATH
import AddTimetable from './users/AddTimetable';
import EditUser from './users/EditUser';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          {/* Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />

          {/* Timetable */}
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/add-timetable" element={<AddTimetable />} />
          <Route path="/edituser/:id" element={<EditUser />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;


import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import AddUser from './users/AddUser';
import Timetable from './users/Timetable';
//this line is used in bootstrap which help in using bootsrap
import EditUser from './users/EditUser';
import About from './pages/About';
import Login from './users/Login';
import AddTimetable from './users/AddTimetable'
import 'animate.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/timetable" element={<Timetable/>}/>
          <Route exact path="/add" element={<AddUser />}/>
          <Route path="/edituser/:id" element={<EditUser />} />
          <Route path="/about" element={<About />} />
          <Route path="/add-timetable" element={<AddTimetable />} />
        </Routes>
      
      </Router>
      
    </div>
  );
}

export default App;

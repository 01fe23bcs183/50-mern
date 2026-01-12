import { NavLink, Route, Routes } from 'react-router-dom';
import Overview from './pages/Overview';
import Trainers from './pages/Trainers';
import Classes from './pages/Classes';
import Bookings from './pages/Bookings';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => (
  <div className="app">
    <aside className="sidebar">
      <h1>Fitness Scheduler</h1>
      <nav>
        <NavLink end to="/">Overview</NavLink>
        <NavLink to="/trainers">Trainers</NavLink>
        <NavLink to="/classes">Classes</NavLink>
        <NavLink to="/bookings">Bookings</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </nav>
    </aside>
    <main className="main">
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </main>
  </div>
);

export default App;

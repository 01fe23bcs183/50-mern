import { NavLink, Route, Routes } from 'react-router-dom';
import Overview from './pages/Overview';
import Jobs from './pages/Jobs';
import Applicants from './pages/Applicants';
import Applications from './pages/Applications';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => (
  <div className="app">
    <aside className="sidebar">
      <h1>Job Board</h1>
      <nav>
        <NavLink end to="/">Overview</NavLink>
        <NavLink to="/jobs">Jobs</NavLink>
        <NavLink to="/applicants">Applicants</NavLink>
        <NavLink to="/applications">Applications</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </nav>
    </aside>
    <main className="main">
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/applicants" element={<Applicants />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </main>
  </div>
);

export default App;

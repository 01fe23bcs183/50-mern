import { NavLink, Route, Routes } from 'react-router-dom';
import Overview from './pages/Overview';
import Events from './pages/Events';
import Rsvps from './pages/Rsvps';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => (
  <div className="app">
    <aside className="sidebar">
      <h1>Campus Event Hub</h1>
      <nav>
        <NavLink end to="/">Overview</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/rsvps">RSVPs</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </nav>
    </aside>
    <main className="main">
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/events" element={<Events />} />
        <Route path="/rsvps" element={<Rsvps />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </main>
  </div>
);

export default App;

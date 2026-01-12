import { NavLink, Route, Routes } from 'react-router-dom';
import Overview from './pages/Overview';
import Accounts from './pages/Accounts';
import Transactions from './pages/Transactions';
import Budgets from './pages/Budgets';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => (
  <div className="app">
    <aside className="sidebar">
      <h1>Personal Finance Coach</h1>
      <nav>
        <NavLink end to="/">Overview</NavLink>
        <NavLink to="/accounts">Accounts</NavLink>
        <NavLink to="/transactions">Transactions</NavLink>
        <NavLink to="/budgets">Budgets</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </nav>
    </aside>
    <main className="main">
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/budgets" element={<Budgets />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </main>
  </div>
);

export default App;

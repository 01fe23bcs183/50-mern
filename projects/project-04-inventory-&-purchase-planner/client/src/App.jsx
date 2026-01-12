import { NavLink, Route, Routes } from 'react-router-dom';
import Overview from './pages/Overview';
import Items from './pages/Items';
import Suppliers from './pages/Suppliers';
import PurchaseOrders from './pages/PurchaseOrders';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => (
  <div className="app">
    <aside className="sidebar">
      <h1>Inventory Planner</h1>
      <nav>
        <NavLink end to="/">Overview</NavLink>
        <NavLink to="/items">Items</NavLink>
        <NavLink to="/suppliers">Suppliers</NavLink>
        <NavLink to="/purchase-orders">Purchase Orders</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </nav>
    </aside>
    <main className="main">
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/items" element={<Items />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/purchase-orders" element={<PurchaseOrders />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </main>
  </div>
);

export default App;

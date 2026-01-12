import { useEffect, useState } from 'react';

const initialForm = { name: '', limit: '', period: '', spent: '' };

const Budgets = () => {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
  const token = localStorage.getItem('token');

  const fetchItems = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(apiUrl + '/budgets', {
        headers: { Authorization: 'Bearer ' + token },
      });
      const data = await res.json();
      setItems(Array.isArray(data) ? data : []);
    } catch (err) {
      setError('Unable to load data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    try {
      await fetch(apiUrl + '/budgets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify(form),
      });
      setForm(initialForm);
      fetchItems();
    } catch (err) {
      setError('Unable to save.');
    }
  };

  return (
    <section className="section">
      <h2>Budgets</h2>
      <div className="grid two">
        <form className="card" onSubmit={handleSubmit}>
          <div className="grid">
            <label>
              Name
              <input name="name" type="text" value={form.name} onChange={handleChange} />
            </label>
            <label>
              Limit
              <input name="limit" type="number" value={form.limit} onChange={handleChange} />
            </label>
            <label>
              Period
              <input name="period" type="text" value={form.period} onChange={handleChange} />
            </label>
            <label>
              Spent
              <input name="spent" type="text" value={form.spent} onChange={handleChange} />
            </label>
          </div>
          <button type="submit">Add Budget</button>
        </form>
        <div className="card">
          <h3>Latest Budgets</h3>
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          <div className="list">
            {items.map((item) => (
              <div key={item._id} className="list-item">
                <div>
                  <strong>{item['name'] || item.name || item.title}</strong>
                  <div className="badge">{item.status || item.type || item.category || 'Active'}</div>
                </div>
              </div>
            ))}
            {items.length === 0 && !loading && <p>No records yet.</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Budgets;

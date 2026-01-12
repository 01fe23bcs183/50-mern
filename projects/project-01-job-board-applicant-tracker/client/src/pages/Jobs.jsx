import { useEffect, useState } from 'react';

const initialForm = { title: '', department: '', location: '', type: '', status: '', description: '' };

const Jobs = () => {
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
      const res = await fetch(apiUrl + '/jobs', {
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
      await fetch(apiUrl + '/jobs', {
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
      <h2>Jobs</h2>
      <div className="grid two">
        <form className="card" onSubmit={handleSubmit}>
          <div className="grid">
            <label>
              Title
              <input name="title" type="text" value={form.title} onChange={handleChange} />
            </label>
            <label>
              Department
              <input name="department" type="text" value={form.department} onChange={handleChange} />
            </label>
            <label>
              Location
              <input name="location" type="text" value={form.location} onChange={handleChange} />
            </label>
            <label>
              Type
              <input name="type" type="text" value={form.type} onChange={handleChange} />
            </label>
            <label>
              Status
              <input name="status" type="text" value={form.status} onChange={handleChange} />
            </label>
            <label>
              Description
              <input name="description" type="text" value={form.description} onChange={handleChange} />
            </label>
          </div>
          <button type="submit">Add Job</button>
        </form>
        <div className="card">
          <h3>Latest Jobs</h3>
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          <div className="list">
            {items.map((item) => (
              <div key={item._id} className="list-item">
                <div>
                  <strong>{item['title'] || item.name || item.title}</strong>
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

export default Jobs;

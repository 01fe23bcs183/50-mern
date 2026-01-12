import { useState } from 'react';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    try {
      const res = await fetch(apiUrl + '/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || 'Registration failed');
      }
      window.location.href = '/login';
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className="section">
      <h2>Create account</h2>
      <form className="card" onSubmit={handleSubmit}>
        <div className="grid">
          <label>
            Name
            <input name="name" value={form.name} onChange={handleChange} />
          </label>
          <label>
            Email
            <input name="email" value={form.email} onChange={handleChange} />
          </label>
          <label>
            Password
            <input name="password" type="password" value={form.password} onChange={handleChange} />
          </label>
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Register</button>
      </form>
    </section>
  );
};

export default Register;

const Overview = () => (
  <section className="section">
    <h2>Welcome</h2>
    <div className="card">
      <p>
        Use the navigation to manage core records. This starter app includes CRUD-ready pages
        wired to the API endpoints in the Express server.
      </p>
      <div className="notice">
        Remember to set <strong>VITE_API_URL</strong> in your client <code>.env</code>.
      </div>
    </div>
  </section>
);

export default Overview;

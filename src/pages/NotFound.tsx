import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <section className="not-found-page" aria-labelledby="not-found-title">
      <div className="not-found-content">
        <span className="not-found-eyebrow">404 · Page not found</span>
        <h1 id="not-found-title">This page could not be found.</h1>
        <p>The page may have moved or the address may be incorrect.</p>
        <Link to="/" className="not-found-home-link">Back to Home</Link>
      </div>
    </section>
  );
}

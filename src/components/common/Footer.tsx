import React from 'react';

export default function Footer() {
  const css = `
  .foot-wrap { padding: 28px 0 20px; display: grid; grid-template-columns: minmax(0, 2fr) minmax(0, 3fr); gap: 24px; color: var(--color-text); border-top: 1px solid var(--color-border); }
  .foot-brand { display: grid; gap: 8px; max-width: 320px; }
  .foot-brand__name { font-weight: 800; font-size: 1.1rem; }
  .foot-brand__tag { font-size: 0.9rem; color: var(--color-text-dim); }

  .foot-cols { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; justify-self: end; }
  .foot-col-title { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-text-dim); margin-bottom: 6px; }
  .foot-links { list-style: none; padding: 0; margin: 0; display: grid; gap: 4px; font-size: 0.9rem; }
  .foot-link { color: inherit; text-decoration: none; opacity: 0.9; padding: 3px 0; border-radius: 6px; transition: background 0.15s ease, opacity 0.15s ease, transform 0.1s ease; }
  .foot-link:hover { background: rgba(255,255,255,0.04); opacity: 1; transform: translateY(-1px); }

  .foot-bottom { border-top: 1px solid rgba(255,255,255,0.06); margin-top: 14px; padding-top: 10px; display: flex; flex-wrap: wrap; gap: 10px; align-items: center; justify-content: space-between; font-size: 0.8rem; color: var(--color-text-dim); }
  .foot-bottom-links { display: flex; flex-wrap: wrap; gap: 10px; }
  .foot-bottom a { text-decoration: none; color: inherit; opacity: 0.9; }
  .foot-bottom a:hover { opacity: 1; text-decoration: underline; }

  @media (max-width: 900px) {
    .foot-wrap { grid-template-columns: minmax(0, 1.8fr) minmax(0, 2.2fr); }
    .foot-cols { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  }

  @media (max-width: 640px) {
    .foot-wrap { grid-template-columns: minmax(0, 1fr); padding: 22px 0 16px; }
    .foot-cols { grid-template-columns: repeat(2, minmax(0, 1fr)); justify-self: stretch; }
  }

  @media (max-width: 480px) {
    .foot-cols { grid-template-columns: minmax(0, 1fr); }
  }
  `;

  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <style>{css}</style>
      <div className="container foot-wrap">
        <div className="foot-brand">
          <div className="foot-brand__name">InvisiShield</div>
          <div className="foot-brand__tag">
            Advanced transparent ballistic protection for vehicles, infrastructure, and tactical environments.
          </div>
        </div>

        <div className="foot-cols">
          <div>
            <div className="foot-col-title">Explore</div>
            <ul className="foot-links">
              <li><a className="foot-link" href="#about">About</a></li>
              <li><a className="foot-link" href="#technology">Technology</a></li>
              <li><a className="foot-link" href="#products">Products</a></li>
              <li><a className="foot-link" href="#applications">Applications</a></li>
            </ul>
          </div>

          

          <div>
            <div className="foot-col-title">Account & Legal</div>
            <ul className="foot-links">
              <li><a className="foot-link" href="/login">Login</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container foot-bottom">
        <span>© {year} InvisiShield. All rights reserved.</span>
        <div className="foot-bottom-links">
          <a href="#testing">Testing data</a>
          <a href="#contact">Contact</a>
          <a href="/legal">Legal</a>
        </div>
      </div>
    </footer>
  );
}

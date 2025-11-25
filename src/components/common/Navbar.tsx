import React from "react";

export default function Navbar() {
  return (
    <header className="header">
      <style>{css}</style>
      <div className="container nav-wrap">
        <a className="brand" href="/">
          InvisiShield
        </a>
        <input
          id="nav-toggle"
          type="checkbox"
          className="nav-toggle"
          aria-label="Toggle navigation"
        />
        <label htmlFor="nav-toggle" className="hamburger" aria-hidden>
          <span />
          <span />
          <span />
        </label>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#technology">Technology</a>
          <a href="#products">Products</a>
          <a href="#applications">Applications</a>
          <a href="#testing">Testing</a>
          <a href="#dealers">Dealers</a>
          <a className="btn login" href="/login">
            Login
          </a>
        </nav>
      </div>
    </header>
  );
}

const css = `
.header { position: sticky; top: 0; z-index: 100; background: var(--color-brand-red); border-bottom: 2px solid var(--color-gold); box-shadow: 0 2px 0 rgba(215,163,51,0.35), 0 8px 18px rgba(0,0,0,0.25); }
.nav-wrap { display: flex; align-items: center; gap: 16px; min-height: 64px; position: relative; }
.brand { font-weight: 800; text-decoration: none; color: inherit; font-size: 1.1rem; }
.nav { display: flex; gap: 12px; margin-left: auto; align-items: center; }
.nav a { text-decoration: none; color: inherit; opacity: .95; padding: 8px 10px; border-radius: 8px; transition: background 0.2s ease; }
.nav a:hover { background: rgba(255,255,255,0.06); }
.nav .btn.login { margin-left: 12px; padding: 10px 14px; border-radius: 10px; border: 1px solid var(--color-gold); background: linear-gradient(180deg, #203a64, #1a2f52); color: #fff; box-shadow: 0 1px 0 rgba(255,255,255,0.08) inset; min-height: 44px; display: inline-flex; align-items: center; justify-content: center; }

/* hamburger (hidden on desktop) */
.hamburger { display: none; width: 44px; height: 44px; margin-left: auto; gap: 5px; flex-direction: column; align-items: center; justify-content: center; cursor: pointer; border: 1px solid var(--color-gold); border-radius: 8px; background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.04)); transition: all 0.2s ease; }
.hamburger:hover { background: linear-gradient(180deg, rgba(255,255,255,0.1), rgba(255,255,255,0.08)); }
.hamburger span { width: 20px; height: 2px; background: currentColor; opacity: .9; display: block; transition: all 0.3s ease; }
.nav-toggle { display: none; }

@media (max-width: 900px) {
  .hamburger { display: inline-flex; }
  .nav { position: absolute; right: 12px; top: 64px; left: 12px; display: grid; gap: 10px; padding: 12px; border-radius: 12px; border: 1px solid var(--color-gold); background: linear-gradient(180deg, #1a2f52, #152642); box-shadow: 0 10px 30px rgba(0,0,0,.45); transform-origin: top right; transform: scale(.98); opacity: 0; pointer-events: none; transition: opacity .25s ease, transform .25s ease; }
  .nav a { padding: 12px 14px; border-radius: 10px; min-height: 44px; display: flex; align-items: center; }
  .nav a:hover { background: rgba(255,255,255,0.08); }
  .nav .btn.login { margin: 2px 0 0; width: 100%; }
  .nav-toggle:checked ~ .hamburger { outline: 2px solid rgba(26,115,232,0.35); }
  .nav-toggle:checked ~ .hamburger span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
  .nav-toggle:checked ~ .hamburger span:nth-child(2) { opacity: 0; }
  .nav-toggle:checked ~ .hamburger span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }
  .nav-toggle:checked ~ .nav { opacity: 1; transform: scale(1); pointer-events: auto; }
}

@media (max-width: 640px) {
  .nav-wrap { min-height: 56px; }
  .brand { font-size: 1rem; }
  .nav { top: 56px; }
}

@media (max-width: 420px) {
  .nav { left: 8px; right: 8px; }
  .brand { font-size: 0.95rem; }
}
`;

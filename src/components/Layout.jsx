import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact", button: true },
];

const footerItems = [
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  const currentYear = new Date().getFullYear();

  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <Link to="/" className="brand" aria-label="Kanos Marketing home">
            <span className="brand-mark">KM</span>
            <span className="brand-text">
              <strong>Kanos Marketing</strong>
              <small>Curious. Calculated. Confident.</small>
            </span>
          </Link>

          <button
            type="button"
            className="menu-toggle"
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((value) => !value)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`site-nav ${isMenuOpen ? "open" : ""}`} aria-label="Primary">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `${item.button ? "btn btn-sm" : ""} ${isActive && !item.button ? "is-active" : ""}`.trim()
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      {children}

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <strong>Kanos Marketing</strong>
            <p>Curious. Calculated. Confident.</p>
          </div>

          <div className="footer-links">
            {footerItems.map((item) => (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
          </div>

          <p className="footer-copy">&copy; {currentYear} Kanos Marketing. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

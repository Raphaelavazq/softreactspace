import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="sticky top-0 z-50 bg-[var(--color-bg)]  shadow-sm font-chillax-medium">
      <div className="flex items-center justify-between px-8 py-5">
        {/* Logo */}
        <Link to="/" className="flex items-center h-8">
          <img src="/logo.svg" alt="theSoft.space logo" className="h-full w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-base text-[var(--color-text)]">
          <Link to="/library" className="hover:text-[var(--color-accent-hover)] transition-colors">
            SoftSpace
          </Link>
          <Link to="/softcare" className="hover:text-[var(--color-accent-hover)] transition-colors">
            SoftCare
          </Link>
          <Link to="/softimpact" className="hover:text-[var(--color-accent-hover)] transition-colors">
            SoftImpact
          </Link>
          <Link to="/softfinds" className="hover:text-[var(--color-accent-hover)] transition-colors">
            SoftFinds
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col items-center justify-center space-y-1 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-[var(--color-text)] transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[var(--color-text)] transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[var(--color-text)] transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[var(--color-bg-alt)]  shadow-sm px-6 py-4 flex flex-col space-y-4 text-[var(--color-text)]">
          <Link to="/library" onClick={toggleMenu} className="hover:text-[var(--color-accent-hover)] transition-colors">
            SoftSpace
          </Link>
          <Link to="/softcare" onClick={toggleMenu} className="hover:text-[var(--color-accent-hover)] transition-colors">
            SoftCare
          </Link>
          <Link to="/softimpact" onClick={toggleMenu} className="hover:text-[var(--color-accent-hover)] transition-colors">
            SoftImpact
          </Link>
          <Link to="/softfinds" onClick={toggleMenu} className="hover:text-[var(--color-accent-hover)] transition-colors">
            SoftFinds
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

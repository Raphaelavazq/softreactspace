import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="px-8 py-6 border-t border-china-rose bg-cosmic-latte text-english-violet text-sm font-chillax-light">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p>© {new Date().getFullYear()} theSoft.space — Quiet by design.</p>
        <div className="space-x-4">
          <Link to="/manifesto" className="hover:text-[var(--color-accent-hover)] transition-colors ">Manifesto</Link>
          <Link to="/softcare" className="hover:text-[var(--color-accent-hover)] transition-colors ">SoftCare</Link>
                    <Link to="/softfinds" className="hover:text-[var(--color-accent-hover)] transition-colors hover:text-apricot">SoftFinds</Link>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

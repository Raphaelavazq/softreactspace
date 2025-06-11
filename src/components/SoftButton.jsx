import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SoftButton = ({ to, href, children, secondary = false, external = false }) => {
  const base = 'inline-block px-6 py-3 rounded-lg shadow-sm text-center font-chillax-bold transition-colors';
  // New primary: violet bg, cosmic latte text
  const primary = 'bg-[var(--color-text)] text-[var(--color-text-invert)] ' +
                  'hover:bg-[var(--color-accent-hover)] hover:text-[var(--color-text)]';
  // Secondary (optional): keep original if you like, or mirror primary
  const secondaryStyle = 'bg-[var(--color-accent-hover)] text-[var(--color-text-invert)] ' +
                         'hover:bg-[var(--color-accent-hover)] hover:text-[var(--color-text)]';

  const classes = `${base} ${secondary ? secondaryStyle : primary}`;

  // External link
  if (external && href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }
  // Internal link
  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }
  // Fallback
  return (
    <span className={classes} role="button" tabIndex={0}>
      {children}
    </span>
  );
};

SoftButton.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  secondary: PropTypes.bool,
  external: PropTypes.bool,
};

export default SoftButton;

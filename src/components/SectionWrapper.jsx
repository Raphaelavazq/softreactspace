import React from 'react';

const SectionWrapper = ({ title, children }) => {
  return (
    <section className="px-8 py-16 bg-[var(--color-bg)] text-[var(--color-text)] border-b border-[var(--color-border)] fade-in">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-chillax-semibold mb-6">{title}</h2>
        <div className="text-lg leading-relaxed">
          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper;

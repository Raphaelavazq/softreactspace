// src/components/Button.jsx
export default function Button({ toggleMenu }) {
  return (
    <div className="relative w-24 h-12 cursor-pointer overflow-hidden">
      <div className="absolute top-30 bg-cosmic-latte left-0 w-full h-full transition-all">
        <div onClick={toggleMenu}>
          <PerspectiveText label="Menu" />
        </div>
        <div onClick={toggleMenu}>
          <PerspectiveText label="Close" />
        </div>
      </div>
    </div>
  );
}

function PerspectiveText({ label }) {
  return (
    <div className="perspective-text relative text-[--color-text] font-chillax-medium uppercase text-lg tracking-wide leading-snug overflow-hidden">
      <p className="transform transition duration-300 hover:-translate-y-full">{label}</p>
      <p className="absolute top-30 left-0">{label}</p>
    </div>
  );
}

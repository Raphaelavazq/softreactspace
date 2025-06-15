// src/components/SideMenu.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { links } from '../data.js';

const menuVariants = {
  open: {
    width: "480px",
    height: "650px",
    top: "-25px",
    right: "-25px",
    border: "4px solid var(--color-border)",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] }
  },
  closed: {
    width: "100px",
    height: "40px",
    top: "0px",
    right: "0px",
    border: "4px solid transparent",
    transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1] }
  }
};

const perspective = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: 80,
    translateX: -20,
  },
  enter: (i) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.65,
      delay: 0.5 + i * 0.1,
      ease: [.215, .61, .355, 1],
      opacity: { duration: 0.35 }
    }
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] }
  }
};

export default function SideMenu() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="fixed top-4 right-4 z-50">
      <motion.div
        className="relative bg-[--english-violet-900] rounded-[25px] shadow-xl overflow-hidden"
        variants={menuVariants}
        animate={isActive ? 'open' : 'closed'}
        initial="closed"
        style={{ border: isActive ? '4px solid var(--color-border)' : '4px solid transparent' }}
      >
        <AnimatePresence>
          {isActive && (
            <motion.div
              className="p-10 flex flex-col gap-6"
              initial="initial"
              animate="enter"
              exit="exit"
              variants={perspective}
            >
              {links.map((link, index) => (
                <motion.a
                  key={link.title}
                  href={link.href}
                  custom={index}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  variants={perspective}
                  className="font-chillax-bold text-lg text-[--color-bg] hover:text-[--color-accent-hover] transition-colors duration-300 cursor-pointer"
                >
                  {link.title}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <div className="absolute -right-14 -top-14">
        <MenuButton isActive={isActive} toggleMenu={() => setIsActive(!isActive)} />
      </div>
    </div>
  );
}

function MenuButton({ isActive, toggleMenu }) {
  return (
    <button
      onClick={toggleMenu}
      className="bg-[--english-violet-900] text-[--color-bg] font-chillax-bold px-6 py-3 rounded-full shadow-lg border border-[--color-border] hover:border-[--color-accent-hover] transition-colors"
    >
      {isActive ? 'Close' : 'Menu'}
    </button>
  );
}

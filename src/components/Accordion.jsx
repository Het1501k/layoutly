import React, { useState } from 'react';

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="glass-card shadow-ambient rounded-xl px-lg pt-lg overflow-hidden border-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left pb-lg focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="font-headline-md text-body-lg md:text-headline-md text-on-surface">
          {title}
        </span>
        <span className="material-symbols-outlined text-primary transition-transform duration-300" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          expand_more
        </span>
      </button>
      <div 
        className={`font-body-md text-body-md text-on-surface-variant transition-all duration-300 ease-out ${
          isOpen ? 'max-h-[500px] opacity-100 pb-lg' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
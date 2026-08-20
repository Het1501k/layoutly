import React, { useState } from "react";

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="w-full overflow-hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="
          group
          flex
          w-full
          items-center
          justify-between
          gap-6
          bg-transparent
          py-6
          text-left
          focus:outline-none
        "
        aria-expanded={isOpen}
      >
        {/* Question */}
        <span
          className="
            font-headline-md
            text-body-lg
            md:text-headline-md
            font-medium
            leading-snug
            tracking-[-0.01em]
            text-[#DCE5E0]
            transition-colors
            duration-300
            group-hover:text-[#A3BBAE]
          "
        >
          {title}
        </span>

        {/* Arrow */}
        <span
          className="
            material-symbols-outlined
            shrink-0
            text-[#719783]
            transition-all
            duration-300
            group-hover:text-[#9BB8A8]
          "
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          expand_more
        </span>
      </button>

      {/* Answer */}
      <div
        className={`
          overflow-hidden
          font-body-md
          text-body-md
          text-[#6E7C74]
          transition-all
          duration-300
          ease-out
          ${
            isOpen
              ? "max-h-[500px] opacity-100 pb-6"
              : "max-h-0 opacity-0"
          }
        `}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
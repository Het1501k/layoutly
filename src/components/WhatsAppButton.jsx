import React from "react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const phoneNumber = "918734010298";

  const message = encodeURIComponent(
    "Hi Layoutly, I would like to discuss my project."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Layoutly on WhatsApp"
      initial={{
        opacity: 0,
        scale: 0.5,
        y: 30,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        delay: 1.2,
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover="hover"
      whileTap={{
        scale: 0.92,
      }}
      className="
        group
        fixed
        bottom-6
        right-6
        z-[100]
        md:bottom-8
        md:right-8
      "
    >
      {/* =====================================================
          OUTER PULSE
      ====================================================== */}

      <motion.span
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: [0.15, 0, 0.15],
          scale: [1, 1.55, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeOut",
        }}
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-full
          border
          border-[#5F9A78]/50
        "
      />

      {/* =====================================================
          SECOND RING
      ====================================================== */}

      <motion.span
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          opacity: [0.2, 0, 0.2],
          scale: [1, 1.35, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 1,
          ease: "easeOut",
        }}
        className="
          pointer-events-none
          absolute
          inset-1
          rounded-full
          border
          border-[#3E7458]/30
        "
      />

      {/* =====================================================
          BUTTON
      ====================================================== */}

      <motion.div
        variants={{
          hover: {
            width: 175,
          },
        }}
        initial={{
          width: 58,
        }}
        animate={{
          width: 58,
        }}
        transition={{
          duration: 0.4,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          relative
          flex
          h-[58px]
          items-center
          overflow-hidden
          rounded-full
          border
          border-[#4B8062]/40
          bg-[#0B2418]
          shadow-[0_10px_35px_rgba(12,60,38,0.35)]
          backdrop-blur-xl
          transition-colors
          duration-300
          group-hover:border-[#6AA783]/60
          group-hover:bg-[#0E2D1E]
        "
      >

        {/* ===================================================
            GLOW
        ================================================== */}

        <motion.div
          animate={{
            opacity: [0.15, 0.35, 0.15],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-full
            bg-[#2E8B57]/20
            blur-xl
          "
        />

        {/* ===================================================
            ICON
        ================================================== */}

        <motion.div
          variants={{
            hover: {
              rotate: 8,
              scale: 1.08,
            },
          }}
          transition={{
            duration: 0.3,
          }}
          className="
            relative
            z-10
            flex
            h-[58px]
            w-[58px]
            shrink-0
            items-center
            justify-center
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="28"
            height="28"
            fill="none"
            className="drop-shadow-[0_0_8px_rgba(100,190,130,0.35)]"
          >
            <path
              fill="#E8F5EC"
              d="
                M24 4
                C12.95 4 4 12.95 4 24
                C4 28.2 5.3 32.1 7.5 35.3
                L5.1 40.5
                C4.7 41.7 5.5 42.9 6.7 42.9
                C6.9 42.9 7.1 42.9 7.3 42.8
                L13.1 40.9
                C16.3 43 20.1 44.2 24.2 44.2
                C35.25 44.2 44.2 35.25 44.2 24.2
                C44.2 13.15 35.05 4 24 4Z
              "
            />

            <path
              fill="#0B2418"
              d="
                M24 41
                C20.4 41 17.1 39.8 14.4 37.7
                L7.6 39.9
                L9.8 33.3
                C8.2 30.6 7 27.5 7 24
                C7 14.6 14.6 7 24 7
                C33.4 7 41 14.6 41 24
                C41 33.4 33.4 41 24 41Z
              "
            />

            <path
              fill="#E8F5EC"
              d="
                M33.6 27.9
                C33.1 27.6 30.5 26.4 30 26.2
                C29.5 26 29.2 25.9 28.8 26.5
                C28.4 27 27.3 28.2 27 28.6
                C26.7 29 26.4 29 25.9 28.7
                C25.4 28.4 23.8 27.9 21.9 26.2
                C20.4 24.9 19.4 23.3 19.1 22.8
                C18.8 22.3 19.1 22.1 19.3 21.8
                C19.5 21.5 19.8 21.2 20 20.9
                C20.2 20.6 20.3 20.3 20.5 20
                C20.7 19.6 20.6 19.3 20.5 19
                C20.4 18.7 19.4 16.1 19 15.1
                C18.6 14.1 18.2 14.3 17.9 14.3
                H17
                C16.7 14.3 16.2 14.4 15.8 14.9
                C15.4 15.4 14.2 16.5 14.2 18.7
                C14.2 20.9 15.8 23.1 16 23.4
                C16.2 23.7 19.1 28.1 23.5 30
                C24.6 30.5 25.6 30.8 26.6 31.1
                C27.9 31.5 29.1 31.4 30 31.3
                C31 31.2 33.1 30 33.5 28.8
                C33.9 27.6 33.9 28.1 33.6 27.9Z
              "
            />
          </svg>
        </motion.div>

        {/* ===================================================
            TEXT
        ================================================== */}

        <motion.div
          variants={{
            hover: {
              opacity: 1,
              x: 0,
            },
          }}
          initial={{
            opacity: 0,
            x: 10,
          }}
          className="
            relative
            z-10
            flex
            min-w-[110px]
            flex-col
            justify-center
            pr-4
            opacity-0
          "
        >
          <span
            className="
              whitespace-nowrap
              text-[11px]
              font-medium
              text-[#DDEBE3]
            "
          >
            Chat with us
          </span>

          <span
            className="
              mt-0.5
              whitespace-nowrap
              text-[8px]
              uppercase
              tracking-[0.16em]
              text-[#6D9C81]
            "
          >
            Usually replies fast
          </span>
        </motion.div>

        {/* ===================================================
            SHINE
        ================================================== */}

        <motion.div
          animate={{
            x: ["-150%", "250%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 5,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            inset-y-0
            left-0
            w-1/4
            skew-x-[-20deg]
            bg-white/[0.08]
          "
        />
      </motion.div>

      {/* =====================================================
          ONLINE INDICATOR
      ====================================================== */}

      <motion.span
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
          absolute
          right-0
          top-0
          z-20
          h-3.5
          w-3.5
          rounded-full
          border-2
          border-[#030605]
          bg-[#67B583]
          shadow-[0_0_10px_rgba(103,181,131,0.7)]
        "
      />
    </motion.a>
  );
}
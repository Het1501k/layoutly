import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* =========================================================
   NAVIGATION
========================================================= */

const navLinks = [
  { path: "/services", label: "Services" },
  { path: "/our-work", label: "Our Work" },
  { path: "/pricing", label: "Pricing" },
  { path: "/about", label: "About" },
  { path: "/faq", label: "FAQ" },
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "Contact" },
];

/* =========================================================
   LIGHTWEIGHT ANIMATION VARIANTS
   Only opacity + transform are animated.
   No blur/filter animation and no mouse-tracking loop.
========================================================= */

const navContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.2,
    },
  },
};

const navItem = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const mobileContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.035,
      delayChildren: 0.06,
    },
  },
};

const mobileItem = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/* =========================================================
   NAVBAR
========================================================= */

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const phoneNumber = "918734010298";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "Hi, I would like to get a free quote for my project."
  )}`;

  /* -------------------------------------------------------
     SCROLL
     requestAnimationFrame prevents excessive React updates.
  ------------------------------------------------------- */

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      requestAnimationFrame(() => {
        const nextScrolled = window.scrollY > 35;

        setIsScrolled((current) =>
          current === nextScrolled ? current : nextScrolled
        );

        ticking = false;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* -------------------------------------------------------
     CLOSE MOBILE MENU ON ROUTE CHANGE
  ------------------------------------------------------- */

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  /* -------------------------------------------------------
     LOCK BODY SCROLL WHEN MOBILE MENU IS OPEN
  ------------------------------------------------------- */

  useEffect(() => {
    if (!mobileOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* =====================================================
          MAIN NAVBAR
      ====================================================== */}

      <header
        className="
          fixed
          left-0
          top-0
          z-50
          w-full
          px-4
          pt-4
          md:px-7
        "
      >
        <div
          className={`
            relative
            mx-auto
            max-w-7xl
            transition-transform
            duration-300
            ease-out
            ${isScrolled ? "translate-y-1" : "translate-y-0"}
          `}
        >
          {/* Lightweight outer atmosphere.
              Static instead of continuously animated blur. */}
          <div
            className="
              pointer-events-none
              absolute
              -inset-2
              rounded-[20px]
              bg-[#0B3024]/20
              blur-xl
              opacity-70
            "
          />

          {/* =================================================
              MAIN NAV
          ================================================== */}

          <div
            className={`
              relative
              overflow-hidden
              border
              transition-all
              duration-300
              ${
                isScrolled
                  ? `
                    rounded-[14px]
                    border-[#527765]/20
                    bg-[#030605]/95
                    shadow-[0_14px_45px_rgba(0,0,0,0.55)]
                  `
                  : `
                    rounded-[14px]
                    border-white/[0.075]
                    bg-[#030605]/90
                  `
              }
            `}
          >
            {/* Technical grid */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                opacity-[0.025]
              "
              style={{
                backgroundImage: `
                  linear-gradient(
                    rgba(125,160,145,0.5) 1px,
                    transparent 1px
                  ),
                  linear-gradient(
                    90deg,
                    rgba(125,160,145,0.5) 1px,
                    transparent 1px
                  )
                `,
                backgroundSize: "32px 32px",
              }}
            />

            {/* Top line */}
            <div
              className="
                pointer-events-none
                absolute
                left-0
                right-0
                top-0
                h-px
                bg-gradient-to-r
                from-transparent
                via-[#385C4D]/60
                to-transparent
              "
            />

            {/* One-shot scan line.
                It only runs occasionally instead of permanently. */}
            <motion.div
              initial={{ x: "-130%" }}
              animate={{ x: "230%" }}
              transition={{
                duration: 2,
                delay: 1.2,
                repeat: Infinity,
                repeatDelay: 10,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute
                left-0
                top-0
                h-px
                w-[24%]
                bg-gradient-to-r
                from-transparent
                via-[#73A78F]
                to-transparent
                shadow-[0_0_12px_rgba(92,151,123,0.55)]
              "
            />

            {/* Technical corner lines */}
            <div className="pointer-events-none absolute left-0 top-0 h-7 w-7 border-l border-t border-[#385C4D]/25" />
            <div className="pointer-events-none absolute right-0 top-0 h-7 w-7 border-r border-t border-[#385C4D]/25" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-7 w-7 border-b border-l border-[#385C4D]/20" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-7 w-7 border-b border-r border-[#385C4D]/20" />

            {/* =================================================
                CONTENT
            ================================================== */}

            <div className="relative flex h-[72px] items-center justify-between px-5 md:px-7">
              {/* LOGO */}
              <Link
                to="/"
                className="group relative flex items-center gap-3"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.55,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ scale: 1.05, rotate: 3 }}
                  className="
                    relative
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-lg
                    border
                    border-[#507564]/30
                    bg-[#0B1712]
                    will-change-transform
                  "
                >
                  {/* Static logo glow */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-1
                      rounded-lg
                      bg-[#3F8065]/15
                      blur-md
                    "
                  />

                  <div className="relative z-10 h-5 w-5 rotate-45 border border-[#A3C0B2]/80" />

                  <div
                    className="
                      absolute
                      z-20
                      h-2
                      w-2
                      rounded-full
                      bg-[#78A58F]
                      shadow-[0_0_8px_rgba(120,165,143,0.65)]
                    "
                  />
                </motion.div>

                {/* Brand */}
                <div className="relative">
                  <motion.span
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.15,
                      duration: 0.45,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="
                      block
                      font-serif
                      text-[22px]
                      font-medium
                      tracking-wide
                      text-[#EEF2EF]
                    "
                  >
                    Layoutly
                  </motion.span>

                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "55%" }}
                    transition={{
                      delay: 0.45,
                      duration: 0.45,
                      ease: "easeOut",
                    }}
                    className="
                      absolute
                      -bottom-1
                      left-0
                      h-px
                      bg-gradient-to-r
                      from-[#5D9078]
                      to-transparent
                    "
                  />
                </div>

                {/* Studio indicator */}
                <div
                  className="
                    hidden
                    items-center
                    gap-1.5
                    border
                    border-white/[0.07]
                    bg-white/[0.025]
                    px-2
                    py-1
                    sm:flex
                  "
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#5C9078]" />

                  <span className="text-[7px] uppercase tracking-[0.25em] text-[#75817B]">
                    Digital Studio
                  </span>
                </div>
              </Link>

              {/* =================================================
                  DESKTOP NAVIGATION
              ================================================== */}

              <motion.nav
                variants={navContainer}
                initial="hidden"
                animate="visible"
                className="
                  hidden
                  items-center
                  rounded-lg
                  border
                  border-white/[0.07]
                  bg-[#080D0A]/80
                  px-1
                  py-1
                  lg:flex
                "
              >
                {navLinks.map((link) => (
                  <motion.div key={link.path} variants={navItem}>
                    <NavLink
                      to={link.path}
                      className="group relative block"
                    >
                      {({ isActive }) => (
                        <div className="relative px-3.5 py-2">
                          {/* Active background */}
                          {isActive && (
                            <motion.div
                              layoutId="activeNav"
                              transition={{
                                type: "spring",
                                stiffness: 500,
                                damping: 35,
                              }}
                              className="
                                absolute
                                inset-0
                                rounded-md
                                border
                                border-[#3E6855]/30
                                bg-[#123025]/45
                              "
                            />
                          )}

                          {/* Text */}
                          <span
                            className={`
                              relative
                              z-10
                              text-[13px]
                              font-medium
                              tracking-wide
                              transition-colors
                              duration-200
                              ${
                                isActive
                                  ? "text-[#B6CEC1]"
                                  : "text-[#87918D] group-hover:text-[#EDF1EE]"
                              }
                            `}
                          >
                            {link.label}
                          </span>

                          {/* Hover line */}
                          <span
                            className="
                              pointer-events-none
                              absolute
                              bottom-0.5
                              left-1/2
                              h-px
                              w-5
                              -translate-x-1/2
                              scale-x-0
                              bg-[#6C9D84]
                              opacity-0
                              shadow-[0_0_6px_rgba(108,157,132,0.55)]
                              transition-all
                              duration-200
                              group-hover:scale-x-100
                              group-hover:opacity-100
                            "
                          />

                          {/* Active indicator */}
                          {isActive && (
                            <span
                              className="
                                absolute
                                right-1
                                top-1
                                h-1
                                w-1
                                rounded-full
                                bg-[#6C9D84]
                              "
                            />
                          )}
                        </div>
                      )}
                    </NavLink>
                  </motion.div>
                ))}
              </motion.nav>

              {/* =================================================
                  CTA
              ================================================== */}

              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.35,
                  duration: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="
                  group
                  relative
                  hidden
                  items-center
                  gap-2
                  overflow-hidden
                  border
                  border-[#4B745F]/35
                  bg-[#10251C]
                  px-5
                  py-2.5
                  text-[13px]
                  font-medium
                  text-[#DDE8E2]
                  shadow-[0_8px_25px_rgba(15,50,36,0.16)]
                  transition-shadow
                  duration-200
                  hover:shadow-[0_10px_30px_rgba(30,80,55,0.25)]
                  md:flex
                "
              >
                {/* Hover-only light */}
                <span
                  className="
                    pointer-events-none
                    absolute
                    inset-y-0
                    left-[-40%]
                    w-1/3
                    skew-x-[-20deg]
                    bg-gradient-to-r
                    from-transparent
                    via-[#82AE97]/15
                    to-transparent
                    transition-transform
                    duration-500
                    group-hover:translate-x-[330%]
                  "
                />

                <span className="relative z-10">Start a Project</span>

                <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>

              {/* =================================================
                  MOBILE BUTTON
              ================================================== */}

              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileOpen((open) => !open)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                className="
                  relative
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  border
                  border-white/[0.08]
                  bg-[#08100C]
                  text-[#7AA38E]
                  lg:hidden
                "
              >
                <AnimatePresence mode="wait" initial={false}>
                  {mobileOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
                      transition={{ duration: 0.18 }}
                    >
                      <X className="h-5 w-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, rotate: 45, scale: 0.7 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: -45, scale: 0.7 }}
                      transition={{ duration: 0.18 }}
                    >
                      <Menu className="h-5 w-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>

            {/* Bottom technical line */}
            <div
              className="
                absolute
                bottom-0
                left-1/2
                h-px
                w-1/4
                -translate-x-1/2
                bg-gradient-to-r
                from-transparent
                via-[#4F8069]/45
                to-transparent
              "
            />
          </div>
        </div>
      </header>

      {/* ======================================================
          MOBILE MENU
      ======================================================= */}

      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop — no backdrop blur, much cheaper on mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              className="
                fixed
                inset-0
                z-40
                bg-[#020403]/85
                lg:hidden
              "
            />

            {/* Mobile panel */}
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.985 }}
              transition={{
                duration: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                fixed
                left-4
                right-4
                top-[96px]
                z-50
                overflow-hidden
                border
                border-[#385C4D]/25
                bg-[#050907]
                shadow-[0_25px_70px_rgba(0,0,0,0.7)]
                lg:hidden
              "
            >
              {/* Grid */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  opacity-[0.025]
                "
                style={{
                  backgroundImage: `
                    linear-gradient(
                      rgba(125,160,145,0.5) 1px,
                      transparent 1px
                    ),
                    linear-gradient(
                      90deg,
                      rgba(125,160,145,0.5) 1px,
                      transparent 1px
                    )
                  `,
                  backgroundSize: "30px 30px",
                }}
              />

              <motion.div
                variants={mobileContainer}
                initial="hidden"
                animate="visible"
                className="relative p-5"
              >
                {/* Heading */}
                <motion.div
                  variants={mobileItem}
                  className="
                    mb-3
                    flex
                    items-center
                    justify-between
                    border-b
                    border-white/[0.06]
                    pb-4
                  "
                >
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-3 w-3 text-[#65937D]" />

                    <span className="text-[9px] uppercase tracking-[0.3em] text-[#68766F]">
                      Navigation
                    </span>
                  </div>

                  <span className="font-mono text-[8px] text-[#39453F]">
                    07
                  </span>
                </motion.div>

                {/* Links */}
                {navLinks.map((link, index) => (
                  <motion.div key={link.path} variants={mobileItem}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `
                          group
                          relative
                          flex
                          items-center
                          justify-between
                          px-3
                          py-4
                          transition-colors
                          duration-200
                          ${
                            isActive
                              ? "bg-[#123126]/40"
                              : "hover:bg-white/[0.025]"
                          }
                        `
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <div className="flex items-center gap-4">
                            <span className="font-mono text-[8px] text-[#476B59]">
                              0{index + 1}
                            </span>

                            <span
                              className={`
                                font-serif
                                text-[16px]
                                ${
                                  isActive
                                    ? "text-[#A9C2B5]"
                                    : "text-[#CFD7D2]"
                                }
                              `}
                            >
                              {link.label}
                            </span>
                          </div>

                          <ChevronRight
                            className={`
                              h-4
                              w-4
                              transition-transform
                              duration-200
                              ${
                                isActive
                                  ? "translate-x-0 text-[#64927C]"
                                  : "-translate-x-1 text-[#476B59]"
                              }
                            `}
                          />

                          {isActive && (
                            <span
                              className="
                                absolute
                                bottom-0
                                left-0
                                h-px
                                w-16
                                bg-gradient-to-r
                                from-[#64927C]
                                to-transparent
                              "
                            />
                          )}
                        </>
                      )}
                    </NavLink>
                  </motion.div>
                ))}

                {/* CTA */}
                <motion.a
                  variants={mobileItem}
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.97 }}
                  className="
                    group
                    relative
                    mt-5
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    overflow-hidden
                    border
                    border-[#4C755F]/30
                    bg-[#10271D]
                    py-4
                    text-sm
                    font-medium
                    text-[#DCE7E1]
                  "
                >
                  <span
                    className="
                      pointer-events-none
                      absolute
                      inset-y-0
                      left-[-40%]
                      w-1/3
                      skew-x-[-20deg]
                      bg-[#77A58F]/10
                      transition-transform
                      duration-500
                      group-hover:translate-x-[330%]
                    "
                  />

                  <span className="relative z-10">Start a Project</span>
                  <ArrowUpRight className="relative z-10 h-4 w-4" />
                </motion.a>

                {/* Footer */}
                <motion.div
                  variants={mobileItem}
                  className="mt-5 flex items-center justify-center gap-3"
                >
                  <span className="h-px w-10 bg-gradient-to-r from-transparent to-white/10" />

                  <span className="text-[8px] uppercase tracking-[0.28em] text-[#424D48]">
                    Digital craft
                  </span>

                  <span className="h-px w-10 bg-gradient-to-l from-transparent to-white/10" />
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

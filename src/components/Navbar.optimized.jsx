import React, { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  useLocation,
} from "react-router-dom";
import {
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";

/* =========================================================
   NAVIGATION
========================================================= */

const navLinks = [
  {
    path: "/",
    label: "Home",
    ariaLabel: "Layoutly Home - Web Design Studio",
  },
  {
    path: "/studio",
    label: "Studio",
    ariaLabel: "Layoutly Web Design and Development Studio",
  },
  {
    path: "/about",
    label: "About",
    ariaLabel: "About Layoutly Web Design Studio",
  },
  {
    path: "/journal",
    label: "Journal",
    ariaLabel: "Layoutly Web Design and UI UX Journal",
  },
  {
    path: "/contact",
    label: "Reach Us",
    ariaLabel: "Contact Layoutly for Web Design and Development",
  },
];

/* =========================================================
   NAVBAR
========================================================= */

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();

  /* =======================================================
     SCROLL
  ======================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* =======================================================
     CLOSE MOBILE MENU ON ROUTE CHANGE
  ======================================================== */

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  /* =======================================================
     LOCK BODY WHEN MOBILE MENU IS OPEN
  ======================================================== */

  useEffect(() => {
    document.body.style.overflow = mobileOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* =======================================================
     RENDER
  ======================================================== */

  return (
    <>
      {/* =====================================================
          DESKTOP NAVBAR
      ====================================================== */}

      <header
        className={`
          fixed
          left-0
          top-0
          z-50
          w-full
          transition-all
          duration-500
          ${
            scrolled
              ? "bg-[#06151D]/75 backdrop-blur-xl"
              : "bg-transparent"
          }
        `}
      >
        <nav
          aria-label="Main navigation"
          className="
            mx-auto
            max-w-[1600px]
            px-6
            md:px-10
            lg:px-14
          "
        >
          <div
            className={`
              relative
              flex
              items-center
              justify-between
              transition-all
              duration-500
              ${
                scrolled
                  ? "h-[76px]"
                  : "h-[88px]"
              }
            `}
          >

            {/* =================================================
                LOGO
            ================================================== */}

            <Link
              to="/"
              aria-label="Layoutly - Premium Web Design and Development Studio"
              title="Layoutly - Web Design, UI/UX and Development"
              className="
                group
                relative
                z-10
                shrink-0
              "
            >
              <span
                className="
                  text-[30px]
                  leading-none
                  tracking-[-0.5px]
                  text-white
                  transition-opacity
                  duration-300
                  group-hover:opacity-70
                  md:text-[32px]
                "
                style={{
                  fontFamily:
                    "'Instrument Serif', serif",
                }}
              >
                Layoutly
                <sup
                  className="
                    ml-0.5
                    align-super
                    text-[9px]
                  "
                  aria-hidden="true"
                >
                  ®
                </sup>
              </span>
            </Link>

            {/* =================================================
                CENTER NAVIGATION
            ================================================== */}

            <div
              className="
                absolute
                left-1/2
                hidden
                -translate-x-1/2
                items-center
                gap-9
                lg:flex
              "
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  aria-label={link.ariaLabel}
                  title={link.ariaLabel}
                  className="group relative"
                >
                  {({ isActive }) => (
                    <span
                      className={`
                        relative
                        block
                        whitespace-nowrap
                        text-[13px]
                        tracking-[-0.01em]
                        transition-colors
                        duration-300
                        ${
                          isActive
                            ? "text-white"
                            : "text-white/55 hover:text-white"
                        }
                      `}
                      style={{
                        fontFamily:
                          "'Inter', sans-serif",
                      }}
                    >
                      {link.label}

                      {/* Active indicator */}

                      <span
                        className={`
                          absolute
                          -bottom-2
                          left-1/2
                          h-px
                          -translate-x-1/2
                          bg-white
                          transition-all
                          duration-300
                          ${
                            isActive
                              ? "w-3 opacity-100"
                              : "w-0 opacity-0 group-hover:w-3 group-hover:opacity-60"
                          }
                        `}
                        aria-hidden="true"
                      />
                    </span>
                  )}
                </NavLink>
              ))}
            </div>

            {/* =================================================
                RIGHT SIDE
            ================================================== */}

            <div
              className="
                relative
                z-10
                flex
                items-center
                gap-5
              "
            >

              {/* =================================================
                  AVAILABILITY
              ================================================== */}

              <div
                className="
                  hidden
                  items-center
                  gap-2
                  xl:flex
                "
                aria-label="Currently available for work"
              >
                <span
                  className="
                    relative
                    flex
                    h-2
                    w-2
                  "
                  aria-hidden="true"
                >
                  <span
                    className="
                      absolute
                      inline-flex
                      h-full
                      w-full
                      animate-ping
                      rounded-full
                      bg-white/30
                    "
                  />

                  <span
                    className="
                      relative
                      inline-flex
                      h-2
                      w-2
                      rounded-full
                      bg-white/80
                    "
                  />
                </span>

                <span
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.18em]
                    text-white/45
                  "
                >
                  Available for work
                </span>
              </div>

              {/* =================================================
                  CONTACT CTA
              ================================================== */}

              <Link
                to="/contact"
                aria-label="Start a web design or development project with Layoutly"
                title="Start a Project with Layoutly"
                className="
                  group
                  hidden
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/20
                  bg-white/[0.06]
                  px-5
                  py-2.5
                  text-[12px]
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  hover:border-white/35
                  hover:bg-white/[0.11]
                  md:flex
                "
              >
                <span
                  style={{
                    fontFamily:
                      "'Inter', sans-serif",
                  }}
                >
                  Begin Journey
                </span>

                <ArrowUpRight
                  className="
                    h-3.5
                    w-3.5
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                  strokeWidth={1.4}
                  aria-hidden="true"
                />
              </Link>

              {/* =================================================
                  MOBILE MENU BUTTON
              ================================================== */}

              <button
                type="button"
                onClick={() =>
                  setMobileOpen(
                    !mobileOpen
                  )
                }
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  bg-white/[0.04]
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:bg-white/[0.08]
                  lg:hidden
                "
                aria-label={
                  mobileOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
                }
                aria-expanded={mobileOpen}
                aria-controls="mobile-navigation"
                title={
                  mobileOpen
                    ? "Close menu"
                    : "Open menu"
                }
              >
                <AnimatePresence
                  mode="wait"
                >
                  {mobileOpen ? (
                    <motion.div
                      key="close"
                      initial={{
                        opacity: 0,
                        rotate: -90,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: 0,
                      }}
                      exit={{
                        opacity: 0,
                        rotate: 90,
                      }}
                    >
                      <X
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{
                        opacity: 0,
                        rotate: 90,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: 0,
                      }}
                      exit={{
                        opacity: 0,
                        rotate: -90,
                      }}
                    >
                      <Menu
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>

          {/* ===================================================
              CINEMATIC NAV LINE
          ==================================================== */}

          <div
            className={`
              h-px
              w-full
              transition-all
              duration-500
              ${
                scrolled
                  ? "bg-white/[0.08]"
                  : "bg-white/[0.12]"
              }
            `}
            aria-hidden="true"
          >
            <div
              className={`
                h-px
                transition-all
                duration-700
                ${
                  scrolled
                    ? "w-0"
                    : "w-20 bg-white/35"
                }
              `}
            />
          </div>
        </nav>
      </header>

      {/* =====================================================
          MOBILE NAVIGATION
      ====================================================== */}

      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* =================================================
                BACKDROP
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              className="
                fixed
                inset-0
                z-40
                bg-[#031017]/85
                backdrop-blur-md
                lg:hidden
              "
              onClick={() =>
                setMobileOpen(false)
              }
              aria-hidden="true"
            />

            {/* =================================================
                MOBILE PANEL
            ================================================== */}

            <motion.div
              id="mobile-navigation"
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.35,
                ease: [
                  0.16,
                  1,
                  0.3,
                  1,
                ],
              }}
              className="
                fixed
                left-0
                right-0
                top-0
                z-50
                min-h-screen
                bg-[#06151D]
                lg:hidden
              "
              role="dialog"
              aria-label="Mobile navigation"
            >

              {/* =================================================
                  MOBILE HEADER
              ================================================== */}

              <div
                className="
                  flex
                  h-[88px]
                  items-center
                  justify-between
                  border-b
                  border-white/[0.08]
                  px-6
                "
              >
                <Link
                  to="/"
                  onClick={() =>
                    setMobileOpen(false)
                  }
                  aria-label="Layoutly Home"
                  title="Layoutly Home"
                >
                  <span
                    className="
                      text-[30px]
                      text-white
                    "
                    style={{
                      fontFamily:
                        "'Instrument Serif', serif",
                    }}
                  >
                    Layoutly
                    <sup
                      className="
                        ml-0.5
                        text-[9px]
                      "
                      aria-hidden="true"
                    >
                      ®
                    </sup>
                  </span>
                </Link>

                <button
                  type="button"
                  onClick={() =>
                    setMobileOpen(false)
                  }
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/15
                    text-white
                  "
                  aria-label="Close navigation menu"
                  title="Close menu"
                >
                  <X
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </button>
              </div>

              {/* =================================================
                  MOBILE LINKS
              ================================================== */}

              <div className="px-6 pt-12">
                <div className="mb-10">
                  <span
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.3em]
                      text-white/35
                    "
                  >
                    Navigation
                  </span>
                </div>

                <div
                  className="space-y-1"
                  role="navigation"
                  aria-label="Mobile main navigation"
                >
                  {navLinks.map(
                    (link, index) => (
                      <NavLink
                        key={link.path}
                        to={link.path}
                        onClick={() =>
                          setMobileOpen(
                            false
                          )
                        }
                        aria-label={
                          link.ariaLabel
                        }
                        title={
                          link.ariaLabel
                        }
                        className="
                          group
                          block
                          border-b
                          border-white/[0.07]
                          py-5
                        "
                      >
                        {({
                          isActive,
                        }) => (
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-5">

                              <span
                                className="
                                  text-[9px]
                                  tracking-widest
                                  text-white/25
                                "
                                aria-hidden="true"
                              >
                                0{index + 1}
                              </span>

                              <span
                                className={`
                                  text-3xl
                                  ${
                                    isActive
                                      ? "text-white"
                                      : "text-white/55 group-hover:text-white"
                                  }
                                `}
                                style={{
                                  fontFamily:
                                    "'Instrument Serif', serif",
                                }}
                              >
                                {link.label}
                              </span>
                            </div>

                            <ArrowUpRight
                              className={`
                                h-5
                                w-5
                                transition-all
                                duration-300
                                ${
                                  isActive
                                    ? "text-white"
                                    : "text-white/20 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                                }
                              `}
                              strokeWidth={1.3}
                              aria-hidden="true"
                            />
                          </div>
                        )}
                      </NavLink>
                    )
                  )}
                </div>

                {/* =================================================
                    MOBILE CTA
                ================================================== */}

                <Link
                  to="/contact"
                  onClick={() =>
                    setMobileOpen(false)
                  }
                  aria-label="Start a web design or development project with Layoutly"
                  title="Start a Project with Layoutly"
                  className="
                    group
                    mt-10
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    bg-white
                    px-6
                    py-4
                    text-sm
                    text-[#06151D]
                    transition-transform
                    duration-300
                    hover:scale-[1.02]
                  "
                >
                  Begin Journey

                  <ArrowUpRight
                    className="
                      h-4
                      w-4
                      transition-transform
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                    strokeWidth={1.3}
                    aria-hidden="true"
                  />
                </Link>

                {/* =================================================
                    BRAND SIGNATURE
                ================================================== */}

                <div
                  className="
                    mt-12
                    flex
                    items-center
                    gap-3
                  "
                  aria-hidden="true"
                >
                  <span className="h-px flex-1 bg-white/[0.08]" />

                  <span
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.3em]
                      text-white/25
                    "
                  >
                    Layoutly®
                  </span>

                  <span className="h-px flex-1 bg-white/[0.08]" />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
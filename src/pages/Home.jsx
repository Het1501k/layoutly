import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Database,
  PenTool,
  Layers3,
  Palette,
  Rocket,
  ShieldCheck,
  Sparkles,
  Terminal,
  Zap,
  Cloud,
  Server,
  Boxes,
  MonitorSmartphone,
  Quote,
} from "lucide-react";

import {
  motion,
} from "framer-motion";

/* =========================================================
   TECHNOLOGIES
========================================================= */

const technologies = [
  {
    icon: Code2,
    name: "React",
  },
  {
    icon: Layers3,
    name: "Next.js",
  },
  {
    icon: Code2,
    name: "Java",
  },
  {
    icon: Server,
    name: "Spring Boot",
  },
  {
    icon: Zap,
    name: "Tailwind CSS",
  },
  {
    icon: PenTool,
    name: "Figma",
  },
  {
    icon: Terminal,
    name: "Node.js",
  },
  {
    icon: Database,
    name: "MySQL",
  },
  {
    icon: Database,
    name: "MongoDB",
  },
  {
    icon: Boxes,
    name: "Docker",
  },
  {
    icon: Cloud,
    name: "AWS",
  },
  {
    icon: Code2,
    name: "TypeScript",
  },
];

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    number: "01",
    icon: Palette,
    title: "Design → Code",
    description:
      "Figma designs transformed into production-ready React components. Every detail, interaction, and responsive state is faithfully reproduced.",
    tags: ["Pixel-perfect", "Responsive"],
  },
  {
    number: "02",
    icon: Server,
    title: "Full-Stack Engineering",
    description:
      "Robust Java backends, secure REST APIs, and optimized databases designed for scalability, performance, and long-term maintainability.",
    tags: ["Scalable", "Secure"],
  },
  {
    number: "03",
    icon: Rocket,
    title: "MVP Launch",
    description:
      "From concept to market with a streamlined development process designed for startups that need rapid validation and investor-ready products.",
    tags: ["Fast delivery", "Investor-ready"],
  },
];

/* =========================================================
   PROCESS
========================================================= */

const process = [
  {
    number: "01",
    title: "Design",
    description:
      "We establish visual tokens, component systems, responsive layouts, and interactive prototypes before development begins.",
    icons: [Palette, PenTool, Layers3],
  },
  {
    number: "02",
    title: "Build",
    description:
      "Our engineering process translates the approved design into robust React interfaces and scalable backend architecture.",
    icons: [Code2, Terminal, Database],
  },
  {
    number: "03",
    title: "Launch",
    description:
      "Rigorous QA, deployment workflows, performance optimization, and production checks ensure everything is ready for users.",
    icons: [Rocket, ShieldCheck, MonitorSmartphone],
  },
];

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 45,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -55,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 55,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const stagger = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

/* =========================================================
   SECTION REVEAL
========================================================= */

const SectionReveal = ({ children, className = "" }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* =========================================================
   TECH GRID
========================================================= */

const TechGrid = ({ opacity = "opacity-[0.045]" }) => {
  return (
    <div
      className={`pointer-events-none absolute inset-0 ${opacity}`}
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(118,155,137,0.55) 1px,
            transparent 1px
          ),
          linear-gradient(
            90deg,
            rgba(118,155,137,0.55) 1px,
            transparent 1px
          )
        `,
        backgroundSize: "58px 58px",
      }}
    />
  );
};

/* =========================================================
   FLOATING PARTICLES
========================================================= */

const Particles = () => {
  // Static particles: keeps the visual texture without 35 independent
  // infinite Framer Motion animations running at the same time.
  const particles = Array.from({ length: 16 });

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((_, index) => {
        const left = (index * 37) % 100;
        const top = (index * 61) % 100;
        const size = index % 4 === 0 ? 2 : 1;

        return (
          <span
            key={index}
            className="absolute rounded-full bg-[#719C87]/40"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
            }}
          />
        );
      })}
    </div>
  );
};

/* =========================================================
   HOME
========================================================= */

const Home = () => {
  // Mouse parallax was intentionally removed from the production version.
  // It caused continuous spring updates and unnecessary work on every mouse move.

  return (
    <main className="min-h-screen overflow-hidden bg-[#030605] text-[#E8EEE9] [contain:paint]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        className="
          relative
          min-h-screen
          overflow-hidden
          bg-[#030605]
        "
      >

        {/* ===================================================
            BACKGROUND
        ================================================== */}

        <div className="pointer-events-none absolute inset-0">

          {/* Main green atmosphere */}

          <motion.div
            className="
              absolute
              h-[700px]
              w-[700px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#103A2B]/20
              blur-[150px]
            "
          />

          {/* Deep blue atmosphere */}

          <div className="
              absolute
              right-[-180px]
              top-[10%]
              h-[600px]
              w-[600px]
              rounded-full
              bg-[#092631]/25
              blur-[150px]
            "
          />

          {/* Bottom forest glow */}

          <div className="
              absolute
              bottom-[-300px]
              left-[25%]
              h-[600px]
              w-[600px]
              rounded-full
              bg-[#0C3326]
              blur-[150px]
            "
          />

          <TechGrid opacity="opacity-[0.035]" />

          <Particles />

          {/* Horizontal technical lines */}

          <div
            className="
              absolute
              left-0
              right-0
              top-[30%]
              h-px
              bg-gradient-to-r
              from-transparent
              via-[#315343]/25
              to-transparent
            "
          />

          <div
            className="
              absolute
              left-0
              right-0
              top-[68%]
              h-px
              bg-gradient-to-r
              from-transparent
              via-[#315343]/20
              to-transparent
            "
          />
        </div>

        {/* ===================================================
            GEOMETRIC LEFT
        ================================================== */}

        <motion.div
          className="
            pointer-events-none
            absolute
            left-[5%]
            top-[28%]
            hidden
            h-72
            w-72
            lg:block
          "
        >
          <div
            className="
              absolute
              inset-0
              rotate-45
              border
              border-[#355847]/20
            "
          />

          <div
            className="
              absolute
              inset-[22%]
              rotate-45
              border
              border-[#416A55]/15
            "
          />

          <div
            className="
              absolute
              left-1/2
              top-0
              h-full
              w-px
              bg-[#416A55]/10
            "
          />

          <div
            className="
              absolute
              left-0
              top-1/2
              h-px
              w-full
              bg-[#416A55]/10
            "
          />

          <div
            className="
              absolute
              right-4
              top-1/2
              h-2
              w-2
              rounded-full
              bg-[#65947A]
              shadow-[0_0_20px_rgba(101,148,122,0.7)]
            "
          />
        </motion.div>

        {/* ===================================================
            GEOMETRIC RIGHT
        ================================================== */}

        <motion.div
          animate={{
            rotate: [0, 4, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            right-[5%]
            top-[30%]
            hidden
            h-80
            w-80
            lg:block
          "
        >
          <div
            className="
              absolute
              inset-0
              rotate-45
              border
              border-[#355847]/20
            "
          />

          <div
            className="
              absolute
              inset-[30%]
              rounded-full
              border
              border-[#416A55]/20
            "
          />

          <div
            className="
              absolute
              right-0
              top-1/2
              h-px
              w-1/2
              bg-gradient-to-r
              from-[#416A55]/20
              to-transparent
            "
          />

          <div
            className="
              absolute
              bottom-5
              left-5
              h-2
              w-2
              rounded-full
              bg-[#527E68]
              shadow-[0_0_20px_rgba(82,126,104,0.7)]
            "
          />
        </motion.div>

        {/* ===================================================
            HERO CONTENT
        ================================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-screen
            max-w-7xl
            items-center
            justify-center
            px-6
            pb-20
            pt-32
            text-center
            md:px-10
          "
        >
          <div className="max-w-5xl">

            {/* Eyebrow */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
                          }}
              animate={{
                opacity: 1,
                y: 0,
                          }}
              transition={{
                duration: 0.9,
                delay: 0.25,
              }}
              className="
                mb-7
                inline-flex
                items-center
                gap-2
                border
                border-[#3A5D4B]/30
                bg-[#09120E]/60
                px-4
                py-2
                text-[10px]
                uppercase
                tracking-[0.28em]
                text-[#779D89]
                backdrop-blur-sm
              "
            >
              <span className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#6D9B81]
                  shadow-[0_0_12px_rgba(109,155,129,0.9)]
                "
              />

              Innovation meets execution
            </motion.div>

            {/* Heading */}

            <div className="overflow-hidden">
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 70,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                              }}
                transition={{
                  duration: 1.15,
                  delay: 0.35,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  font-serif
                  text-5xl
                  font-medium
                  leading-[0.98]
                  tracking-[-0.045em]
                  text-[#F0F3F1]
                  sm:text-6xl
                  md:text-7xl
                  lg:text-[92px]
                "
              >
                Build digital
                <br />

                <span className="relative inline-block">
                  <span className="relative z-10">
                    products
                  </span>

                  <motion.span
                    initial={{
                      width: 0,
                    }}
                    animate={{
                      width: "100%",
                    }}
                    transition={{
                      delay: 1.35,
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="
                      absolute
                      bottom-1
                      left-0
                      h-[2px]
                      bg-gradient-to-r
                      from-[#406E58]
                      via-[#6B9A80]
                      to-transparent
                    "
                  />
                </span>

                <br />

                <span
                  className="
                    bg-gradient-to-r
                    from-[#8FA99C]
                    via-[#5F8E76]
                    to-[#395F4E]
                    bg-clip-text
                    text-transparent
                  "
                >
                  people remember.
                </span>
              </motion.h1>
            </div>

            {/* Description */}

            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.9,
                duration: 0.8,
              }}
              className="
                mx-auto
                mt-8
                max-w-2xl
                text-base
                leading-7
                text-[#7D8B84]
                md:text-lg
                md:leading-8
              "
            >
              We design and develop full-stack digital
              experiences — from pixel-perfect interfaces
              to scalable backend systems — built to move
              your business forward.
            </motion.p>

            {/* CTA */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.05,
                duration: 0.8,
              }}
              className="
                mt-9
                flex
                flex-col
                items-center
                justify-center
                gap-3
                sm:flex-row
              "
            >
              <Link
                to="/contact"
                className="
                  group
                  relative
                  inline-flex
                  items-center
                  gap-3
                  overflow-hidden
                  border
                  border-[#4C735F]/40
                  bg-[#143226]
                  px-7
                  py-4
                  text-sm
                  font-medium
                  text-[#E4ECE7]
                  shadow-[0_15px_45px_rgba(17,55,40,0.25)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#709A84]/50
                  hover:bg-[#193D2F]
                "
              >
                <motion.span
                  animate={{
                    x: ["-150%", "180%"],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatDelay: 4,
                  }}
                  className="
                    absolute
                    inset-y-0
                    w-1/3
                    skew-x-[-20deg]
                    bg-white/10
                  "
                />

                <span className="relative z-10">
                  Start building
                </span>

                <ArrowUpRight
                  className="
                    relative
                    z-10
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </Link>

              <Link
                to="/our-work"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  border
                  border-white/[0.09]
                  bg-white/[0.025]
                  px-7
                  py-4
                  text-sm
                  font-medium
                  text-[#A1ACA6]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#507462]/35
                  hover:bg-[#0B1510]
                  hover:text-[#E4EAE7]
                "
              >
                See our work

                <ArrowRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </motion.div>

            {/* Trust indicators */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.35,
                duration: 0.7,
              }}
              className="
                mt-10
                flex
                flex-wrap
                items-center
                justify-center
                gap-x-6
                gap-y-3
                text-[11px]
                uppercase
                tracking-[0.12em]
                text-[#65726B]
              "
            >
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#5D8D75]" />
                Quality first
              </span>

              <span className="h-3 w-px bg-white/10" />

              <span className="flex items-center gap-2">
                <Zap className="h-3.5 w-3.5 text-[#5D8D75]" />
                Lightning fast
              </span>

              <span className="h-3 w-px bg-white/10" />

              <span className="flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-[#5D8D75]" />
                Pixel perfect
              </span>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.8,
          }}
          className="
            absolute
            bottom-7
            left-1/2
            -translate-x-1/2
          "
        >
          <div
            className="
              flex
              flex-col
              items-center
              gap-3
              text-[8px]
              uppercase
              tracking-[0.3em]
              text-[#46534C]
            "
          >
            Scroll to explore

            <motion.div
              animate={{
                height: [20, 35, 20],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-px bg-[#5E8B74]"
            />
          </div>
        </motion.div>

        <div className="
            absolute
            bottom-0
            left-1/2
            h-px
            w-[35%]
            -translate-x-1/2
            bg-gradient-to-r
            from-transparent
            via-[#507C65]
            to-transparent
          "
        />
      </section>

      {/* =====================================================
          TECHNOLOGY STACK
      ====================================================== */}

      <section
        className="
          relative
          overflow-hidden
          border-y
          border-white/[0.05]
          bg-[#050907]
          py-28
        "
      >
        <TechGrid opacity="opacity-[0.025]" />

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            h-[500px]
            w-[800px]
            -translate-x-1/2
            rounded-full
            bg-[#0B3426]/10
            blur-[130px]
          "
        />

        <div
          className="
            relative
            z-10
            mx-auto
            max-w-7xl
            px-6
            md:px-10
          "
        >
          <SectionReveal>
            <motion.div
              variants={fadeUp}
              className="mb-14 text-center"
            >
              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-[#65927B]
                "
              >
                Our tech stack
              </span>

              <h2
                className="
                  mt-4
                  font-serif
                  text-3xl
                  font-medium
                  tracking-tight
                  text-[#E8EEEA]
                  md:text-5xl
                "
              >
                Technologies we build with.
              </h2>

              <p
                className="
                  mx-auto
                  mt-4
                  max-w-2xl
                  text-sm
                  leading-7
                  text-[#69766F]
                  md:text-base
                "
              >
                Modern tools and proven technologies used
                to create fast, scalable and reliable digital
                products.
              </p>
            </motion.div>
          </SectionReveal>

          {/* Marquee 1 */}

          <div className="relative mb-5 overflow-hidden">
            <motion.div
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex w-max"
            >
              {[...technologies, ...technologies].map(
                (tech, index) => {
                  const Icon = tech.icon;

                  return (
                    <motion.div
                      key={index}
                      whileHover={{
                        y: -5,
                      }}
                      className="
                        mx-2
                        flex
                        items-center
                        gap-3
                        border
                        border-white/[0.065]
                        bg-[#080E0B]/80
                        px-6
                        py-4
                        transition-colors
                        duration-300
                        hover:border-[#426953]/40
                        hover:bg-[#0C1812]
                      "
                    >
                      <Icon
                        className="
                          h-5
                          w-5
                          text-[#5C8D73]
                        "
                        strokeWidth={1.5}
                      />

                      <span
                        className="
                          whitespace-nowrap
                          text-sm
                          text-[#A0AAA5]
                        "
                      >
                        {tech.name}
                      </span>
                    </motion.div>
                  );
                }
              )}
            </motion.div>
          </div>

          {/* Marquee 2 */}

          <div className="relative overflow-hidden">
            <motion.div
              animate={{
                x: ["-50%", "0%"],
              }}
              transition={{
                duration: 32,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex w-max"
            >
              {[
                ...technologies.slice().reverse(),
                ...technologies.slice().reverse(),
              ].map((tech, index) => {
                const Icon = tech.icon;

                return (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -5,
                    }}
                    className="
                      mx-2
                      flex
                      items-center
                      gap-3
                      border
                      border-white/[0.065]
                      bg-[#080E0B]/80
                      px-6
                      py-4
                      transition-colors
                      duration-300
                      hover:border-[#426953]/40
                      hover:bg-[#0C1812]
                    "
                  >
                    <Icon
                      className="
                        h-5
                        w-5
                        text-[#456C59]
                      "
                      strokeWidth={1.5}
                    />

                    <span
                      className="
                        whitespace-nowrap
                        text-sm
                        text-[#89958E]
                      "
                    >
                      {tech.name}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ====================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#030605]
          py-32
        "
      >
        <TechGrid opacity="opacity-[0.025]" />

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            h-full
            w-px
            bg-gradient-to-b
            from-transparent
            via-[#315343]/10
            to-transparent
          "
        />

        <div
          className="
            relative
            z-10
            mx-auto
            max-w-7xl
            px-6
            md:px-10
          "
        >
          <SectionReveal>
            <motion.div
              variants={fadeUp}
              className="
                mx-auto
                mb-20
                max-w-2xl
                text-center
              "
            >
              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-[#65927B]
                "
              >
                Our process
              </span>

              <h2
                className="
                  mt-4
                  font-serif
                  text-3xl
                  font-medium
                  leading-tight
                  text-[#E8EEEA]
                  md:text-5xl
                "
              >
                From design system
                <br />
                to deployment.
              </h2>

              <p
                className="
                  mt-5
                  text-sm
                  leading-7
                  text-[#69766F]
                  md:text-base
                "
              >
                A streamlined process that turns complex
                requirements into elegant, scalable solutions.
              </p>
            </motion.div>

            <div
              className="
                grid
                grid-cols-1
                gap-5
                md:grid-cols-3
              "
            >
              {process.map((item, index) => (
                <motion.div
                  key={item.number}
                  variants={fadeUp}
                  whileHover={{
                    y: -8,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className={`
                    group
                    relative
                    overflow-hidden
                    border
                    border-white/[0.07]
                    bg-[#070C09]
                    p-7
                    ${
                      index === 1
                        ? "md:translate-y-8"
                        : ""
                    }
                  `}
                >
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-16
                      -top-16
                      h-40
                      w-40
                      rounded-full
                      bg-[#154A35]/15
                      blur-3xl
                    "
                  />

                  <motion.div
                    initial={{
                      scaleX: 0,
                    }}
                    whileInView={{
                      scaleX: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 1,
                      delay: index * 0.1,
                    }}
                    className="
                      absolute
                      left-0
                      right-0
                      top-0
                      h-px
                      origin-left
                      bg-gradient-to-r
                      from-[#4B785F]
                      to-transparent
                    "
                  />

                  <div
                    className="
                      relative
                      mb-8
                      flex
                      items-center
                      justify-between
                    "
                  >
                    <span
                      className="
                        font-mono
                        text-xs
                        tracking-widest
                        text-[#547A66]
                      "
                    >
                      {item.number}
                    </span>

                    <span
                      className="
                        h-2
                        w-2
                        rounded-full
                        bg-[#4B7A61]
                        opacity-60
                        shadow-[0_0_12px_rgba(75,122,97,0.7)]
                      "
                    />
                  </div>

                  <div
                    className="
                      mb-7
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      border
                      border-[#3B5E4C]/25
                      bg-[#0B1711]
                    "
                  >
                    {React.createElement(item.icons[0], {
                      className:
                        "h-5 w-5 text-[#66927B]",
                      strokeWidth: 1.5,
                    })}
                  </div>

                  <h3
                    className="
                      font-serif
                      text-2xl
                      text-[#E2EAE5]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      text-sm
                      leading-7
                      text-[#6F7B75]
                    "
                  >
                    {item.description}
                  </p>

                  <div
                    className="
                      mt-8
                      flex
                      gap-5
                      border-t
                      border-white/[0.06]
                      pt-5
                    "
                  >
                    {item.icons.map((Icon, iconIndex) => (
                      <Icon
                        key={iconIndex}
                        className="
                          h-4
                          w-4
                          text-[#455A4E]
                          transition-colors
                          duration-300
                          group-hover:text-[#66927B]
                        "
                        strokeWidth={1.5}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}

      <section
        className="
          relative
          overflow-hidden
          border-y
          border-white/[0.045]
          bg-[#050907]
          py-32
        "
      >
        <TechGrid opacity="opacity-[0.025]" />

        <div className="
            pointer-events-none
            absolute
            left-1/4
            top-[-200px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#0B3928]/10
            blur-[140px]
          " />

        <div
          className="
            relative
            z-10
            mx-auto
            max-w-7xl
            px-6
            md:px-10
          "
        >
          <SectionReveal>

            {/* Header */}

            <div
              className="
                mb-16
                flex
                flex-col
                justify-between
                gap-8
                md:flex-row
                md:items-end
              "
            >
              <motion.div variants={fadeLeft}>
                <span
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.3em]
                    text-[#65927B]
                  "
                >
                  Capabilities
                </span>

                <h2
                  className="
                    mt-4
                    font-serif
                    text-4xl
                    leading-tight
                    text-[#E8EEEA]
                    md:text-6xl
                  "
                >
                  Engineered for
                  <br />

                  <span
                    className="
                      bg-gradient-to-r
                      from-[#94B2A3]
                      via-[#5D8B73]
                      to-[#365A4A]
                      bg-clip-text
                      text-transparent
                    "
                  >
                    modern teams.
                  </span>
                </h2>
              </motion.div>

              <motion.div variants={fadeRight}>
                <Link
                  to="/services"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    border
                    border-white/[0.08]
                    bg-[#080E0B]
                    px-6
                    py-3
                    text-sm
                    text-[#9CA8A2]
                    transition-all
                    duration-300
                    hover:border-[#4C735E]/40
                    hover:text-[#DCE5E0]
                  "
                >
                  All services

                  <ArrowUpRight
                    className="
                      h-4
                      w-4
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </Link>
              </motion.div>
            </div>

            {/* Cards */}

            <div
              className="
                grid
                grid-cols-1
                gap-5
                md:grid-cols-3
              "
            >
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <motion.div
                    key={service.number}
                    variants={fadeUp}
                    whileHover={{
                      y: -8,
                    }}
                    className="
                      group
                      relative
                      overflow-hidden
                      border
                      border-white/[0.07]
                      bg-[#070C09]
                      p-7
                      transition-colors
                      duration-500
                      hover:border-[#416650]/30
                    "
                  >
                    <motion.div
                      initial={{
                        opacity: 0,
                      }}
                      whileHover={{
                        opacity: 1,
                      }}
                      className="
                        pointer-events-none
                        absolute
                        -right-20
                        -top-20
                        h-56
                        w-56
                        rounded-full
                        bg-[#15452F]/15
                        blur-3xl
                      "
                    />

                    <div
                      className="
                        absolute
                        right-0
                        top-0
                        h-10
                        w-10
                        border-r
                        border-t
                        border-[#426752]/20
                      "
                    />

                    <div
                      className="
                        relative
                        flex
                        items-center
                        justify-between
                      "
                    >
                      <span
                        className="
                          font-mono
                          text-[10px]
                          tracking-[0.25em]
                          text-[#547664]
                        "
                      >
                        {service.number}
                      </span>

                      <Icon
                        className="
                          h-5
                          w-5
                          text-[#5D8D74]
                          transition-transform
                          duration-500
                          group-hover:rotate-6
                          group-hover:scale-110
                        "
                        strokeWidth={1.4}
                      />
                    </div>

                    <div
                      className="
                        relative
                        mt-10
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        border
                        border-[#3B604C]/25
                        bg-[#0A1510]
                      "
                    >
                      <Icon
                        className="
                          h-6
                          w-6
                          text-[#729B85]
                        "
                        strokeWidth={1.3}
                      />
                    </div>

                    <h3
                      className="
                        mt-7
                        font-serif
                        text-2xl
                        text-[#E0E8E3]
                      "
                    >
                      {service.title}
                    </h3>

                    <p
                      className="
                        mt-4
                        min-h-[130px]
                        text-sm
                        leading-7
                        text-[#707C76]
                      "
                    >
                      {service.description}
                    </p>

                    <div
                      className="
                        mt-6
                        flex
                        items-center
                        gap-3
                        border-t
                        border-white/[0.06]
                        pt-5
                      "
                    >
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="
                            flex
                            items-center
                            gap-1.5
                            text-[10px]
                            uppercase
                            tracking-wider
                            text-[#66776E]
                          "
                        >
                          <CheckCircle2
                            className="
                              h-3
                              w-3
                              text-[#4D7B62]
                            "
                          />

                          {tag}
                        </span>
                      ))}
                    </div>

                    <motion.div
                      initial={{
                        width: "15%",
                      }}
                      whileHover={{
                        width: "70%",
                      }}
                      transition={{
                        duration: 0.5,
                      }}
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-px
                        bg-gradient-to-r
                        from-[#5C8E74]
                        to-transparent
                      "
                    />
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              variants={fadeUp}
              className="mt-14 text-center"
            >
              <Link
                to="/services"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  text-sm
                  text-[#81958B]
                  transition-colors
                  duration-300
                  hover:text-[#C7D8CF]
                "
              >
                Explore all services

                <ArrowRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-2
                  "
                />
              </Link>
            </motion.div>
          </SectionReveal>
        </div>
      </section>

      {/* =====================================================
          TESTIMONIAL
      ====================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#030605]
          py-32
        "
      >
        <TechGrid opacity="opacity-[0.02]" />

        <div className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[650px]
            w-[650px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#0C3928]
            blur-[150px]
          "
        />

        <div
          className="
            relative
            z-10
            mx-auto
            max-w-5xl
            px-6
            md:px-10
          "
        >
          <SectionReveal>
            <motion.div
              variants={fadeUp}
              className="
                relative
                overflow-hidden
                border
                border-[#3C5D4B]/25
                bg-[#060B08]
                p-8
                md:p-14
              "
            >
              <div
                className="
                  absolute
                  left-0
                  top-0
                  h-14
                  w-14
                  border-l
                  border-t
                  border-[#527864]/30
                "
              />

              <div
                className="
                  absolute
                  bottom-0
                  right-0
                  h-14
                  w-14
                  border-b
                  border-r
                  border-[#527864]/30
                "
              />

              <motion.div
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatDelay: 5,
                }}
                className="
                  absolute
                  left-0
                  top-0
                  h-px
                  w-1/3
                  bg-gradient-to-r
                  from-transparent
                  via-[#68947B]
                  to-transparent
                "
              />

              <div className="relative z-10 text-center">

                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    mx-auto
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    border
                    border-[#456B56]/30
                    bg-[#0A1710]
                  "
                >
                  <Quote
                    className="
                      h-6
                      w-6
                      text-[#67937B]
                    "
                    strokeWidth={1.4}
                  />
                </motion.div>

                <blockquote
                  className="
                    mx-auto
                    mt-9
                    max-w-3xl
                  "
                >
                  <p
                    className="
                      font-serif
                      text-2xl
                      leading-relaxed
                      text-[#DDE5E0]
                      md:text-3xl
                    "
                  >
                    “Layoutly didn’t just build what we
                    designed; they improved the architectural
                    foundation. The transition from our Figma
                    files to a working React application was
                    seamless, and the code quality was
                    exceptional.”
                  </p>
                </blockquote>

                <motion.div
                  initial={{
                    width: 0,
                  }}
                  whileInView={{
                    width: 60,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.8,
                  }}
                  className="
                    mx-auto
                    mt-9
                    h-px
                    bg-gradient-to-r
                    from-[#3D654F]
                    to-[#6C997F]
                  "
                />

                <div className="mt-7">

                  <div
                    className="
                      mx-auto
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#527864]/30
                      bg-[#0D1812]
                    "
                  >
                    <span
                      className="
                        font-serif
                        text-lg
                        text-[#8CAA9B]
                      "
                    >
                      HP
                    </span>
                  </div>

                  <h4
                    className="
                      mt-4
                      text-sm
                      font-medium
                      text-[#D9E1DC]
                    "
                  >
                    HET PATEL
                  </h4>

                  <p
                    className="
                      mt-1
                      text-xs
                      text-[#64716A]
                    "
                  >
                    Founder
                  </p>

                  <div
                    className="
                      mt-4
                      flex
                      items-center
                      justify-center
                      gap-3
                      text-[9px]
                      uppercase
                      tracking-widest
                      text-[#53615A]
                    "
                  >
                    <span className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#5B8A71]" />
                      Verified partner
                    </span>

                    <span className="h-3 w-px bg-white/10" />

                    <span>2026</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </SectionReveal>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section
        className="
          relative
          overflow-hidden
          border-t
          border-white/[0.05]
          bg-[#050907]
          py-28
        "
      >
        <TechGrid opacity="opacity-[0.025]" />

        <div className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[600px]
            w-[600px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#0E3D2B]
            blur-[140px]
          "
        />

        <div
          className="
            relative
            z-10
            mx-auto
            max-w-6xl
            px-6
            md:px-10
          "
        >
          <SectionReveal>
            <motion.div
              variants={fadeUp}
              className="
                relative
                overflow-hidden
                border
                border-[#405F4E]/25
                bg-[#070D0A]
                p-9
                md:p-14
                lg:p-16
              "
            >
              <div className="
                  pointer-events-none
                  absolute
                  -right-32
                  -top-32
                  h-80
                  w-80
                  border
                  border-[#315744]/20
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-0
                  left-0
                  h-40
                  w-40
                  rounded-full
                  bg-[#0B3626]/10
                  blur-3xl
                "
              />

              <div
                className="
                  absolute
                  right-5
                  top-5
                  h-10
                  w-10
                  border-r
                  border-t
                  border-[#5A806C]/25
                "
              />

              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  h-10
                  w-10
                  border-b
                  border-l
                  border-[#5A806C]/25
                "
              />

              <div
                className="
                  relative
                  z-10
                  flex
                  flex-col
                  items-center
                  justify-between
                  gap-10
                  md:flex-row
                "
              >

                <div className="max-w-2xl">

                  <span
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.3em]
                      text-[#67927A]
                    "
                  >
                    Start something meaningful
                  </span>

                  <h2
                    className="
                      mt-4
                      font-serif
                      text-4xl
                      leading-tight
                      text-[#E7EDE9]
                      md:text-6xl
                    "
                  >
                    Ready to build
                    <br />

                    <span
                      className="
                        bg-gradient-to-r
                        from-[#A0B9AA]
                        via-[#638E77]
                        to-[#3B5F4D]
                        bg-clip-text
                        text-transparent
                      "
                    >
                      something great?
                    </span>
                  </h2>

                  <p
                    className="
                      mt-5
                      max-w-xl
                      text-sm
                      leading-7
                      text-[#6E7B74]
                      md:text-base
                    "
                  >
                    Let’s turn your vision into a
                    high-performance digital product.
                    From design to deployment — we’ve got
                    you covered.
                  </p>

                  <div
                    className="
                      mt-6
                      flex
                      flex-wrap
                      gap-x-5
                      gap-y-3
                      text-[9px]
                      uppercase
                      tracking-[0.15em]
                      text-[#526159]
                    "
                  >
                    <span className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#5E8D74]" />
                      No obligation
                    </span>

                    <span className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#5E8D74]" />
                      30-min consultation
                    </span>

                    <span className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#5E8D74]" />
                      Fast turnaround
                    </span>
                  </div>
                </div>

                <div className="shrink-0">
                  <Link
                    to="/contact"
                    className="
                      group
                      relative
                      inline-flex
                      items-center
                      gap-3
                      overflow-hidden
                      border
                      border-[#4B745E]/40
                      bg-[#153428]
                      px-7
                      py-4
                      text-sm
                      font-medium
                      text-[#E2EAE5]
                      shadow-[0_15px_50px_rgba(15,58,40,0.25)]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-[#719B84]/50
                      hover:bg-[#1A3E30]
                    "
                  >
                    <motion.span
                      animate={{
                        x: ["-150%", "180%"],
                      }}
                      transition={{
                        duration: 2.4,
                        repeat: Infinity,
                        repeatDelay: 5,
                      }}
                      className="
                        absolute
                        inset-y-0
                        w-1/3
                        skew-x-[-20deg]
                        bg-white/10
                      "
                    />

                    <span className="relative z-10">
                      Start a conversation
                    </span>

                    <ArrowUpRight
                      className="
                        relative
                        z-10
                        h-4
                        w-4
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                      "
                    />
                  </Link>
                </div>
              </div>

              <motion.div
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatDelay: 4,
                }}
                className="
                  absolute
                  bottom-0
                  left-0
                  h-px
                  w-1/3
                  bg-gradient-to-r
                  from-transparent
                  via-[#5C8C73]
                  to-transparent
                "
              />
            </motion.div>
          </SectionReveal>
        </div>
      </section>
    </main>
  );
};

export default Home;
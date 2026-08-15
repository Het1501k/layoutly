import React from "react";
import {
  Link,
  useParams,
  Navigate,
} from "react-router-dom";

import { getCaseStudy } from "../data/caseStudies";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  AlertTriangle,
  Quote,
  Sparkles,
  CheckCircle2,
  Layers3,
  TrendingUp,
} from "lucide-react";

import {
  motion,
  useReducedMotion,
} from "framer-motion";

/* =========================================================
   LIGHTWEIGHT MOTION
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -24,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 24,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const stagger = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

/* =========================================================
   BACKGROUND
========================================================= */

const Background = () => {
  return (
    <div
      className="
        pointer-events-none
        fixed
        inset-0
        z-0
        overflow-hidden
      "
    >
      {/* Grid */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.025]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(100,145,123,0.65) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(100,145,123,0.65) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "58px 58px",
        }}
      />

      {/* Static green atmosphere */}

      <div
        className="
          case-glow
          absolute
          left-[10%]
          top-[10%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#0D3A29]/10
        "
      />

      {/* Static blue-green atmosphere */}

      <div
        className="
          case-glow
          case-glow-blue
          absolute
          right-[-160px]
          top-[35%]
          h-[480px]
          w-[480px]
          rounded-full
          bg-[#092C35]/10
        "
      />

      {/* Bottom atmosphere */}

      <div
        className="
          case-glow
          case-glow-bottom
          absolute
          bottom-[-220px]
          left-[35%]
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#10442E]/10
        "
      />
    </div>
  );
};

/* =========================================================
   CASE STUDY
========================================================= */

const CaseStudy = () => {
  const { id } = useParams();

  const study = getCaseStudy(id);

  const shouldReduceMotion = useReducedMotion();

  const phoneNumber = "918734010298";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    `Hi, I'm interested in a project like "${
      study?.title || "your case study"
    }". Can we discuss?`
  )}`;

  /* =======================================================
     INVALID CASE STUDY
  ======================================================== */

  if (!study) {
    return (
      <Navigate
        to="/our-work"
        replace
      />
    );
  }

  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#030605]
        text-[#E8EEE9]
      "
    >
      <Background />

      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        className="
          relative
          z-10
          px-6
          pb-20
          pt-32
          md:px-10
          md:pt-36
        "
      >
        <div className="mx-auto max-w-7xl">

          {/* BACK BUTTON */}

          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, x: -15 }
            }
            animate={
              shouldReduceMotion
                ? undefined
                : { opacity: 1, x: 0 }
            }
            transition={{
              duration: 0.4,
            }}
          >
            <Link
              to="/our-work"
              className="
                group
                inline-flex
                items-center
                gap-2
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-[#617169]
                transition-colors
                duration-200
                hover:text-[#A5B8AD]
              "
            >
              <ArrowLeft
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-200
                  group-hover:-translate-x-1
                "
                strokeWidth={1.4}
              />

              Back to Case Studies
            </Link>
          </motion.div>

          {/* HERO CONTENT */}

          <div
            className="
              mt-12
              grid
              grid-cols-1
              items-end
              gap-10
              lg:grid-cols-12
            "
          >

            {/* TITLE */}

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeLeft}
              className="lg:col-span-8"
            >
              <div
                className="
                  mb-6
                  inline-flex
                  items-center
                  gap-2
                  border
                  border-[#3F614D]/30
                  bg-[#08110C]
                  px-3
                  py-1.5
                  text-[9px]
                  uppercase
                  tracking-[0.2em]
                  text-[#729683]
                "
              >
                <Sparkles
                  className="h-3.5 w-3.5"
                  strokeWidth={1.3}
                />

                Case Study
              </div>

              <h1
                className="
                  max-w-5xl
                  font-serif
                  text-5xl
                  font-medium
                  leading-[0.98]
                  tracking-[-0.04em]
                  text-[#ECF1EE]
                  md:text-6xl
                  lg:text-7xl
                "
              >
                {study.title}
              </h1>

              <p
                className="
                  mt-7
                  max-w-2xl
                  text-base
                  leading-8
                  text-[#707D76]
                  md:text-lg
                "
              >
                {study.subtitle}
              </p>
            </motion.div>

            {/* META */}

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeRight}
              className="
                flex
                flex-col
                gap-3
                lg:col-span-4
              "
            >

              {/* CLIENT */}

              <div
                className="
                  case-panel
                  relative
                  overflow-hidden
                  border
                  border-white/[0.07]
                  bg-[#070D0A]
                  p-5
                "
              >
                <p
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.2em]
                    text-[#53645A]
                  "
                >
                  Client
                </p>

                <p
                  className="
                    mt-2
                    font-serif
                    text-xl
                    text-[#DCE5E0]
                  "
                >
                  {study.client}
                </p>
              </div>

              {/* TECHNOLOGIES */}

              <div
                className="
                  case-panel
                  border
                  border-white/[0.07]
                  bg-[#070D0A]
                  p-5
                "
              >
                <div className="flex items-center gap-2">

                  <Layers3
                    className="
                      h-4
                      w-4
                      text-[#5F8A73]
                    "
                    strokeWidth={1.4}
                  />

                  <p
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.2em]
                      text-[#53645A]
                    "
                  >
                    Technologies
                  </p>

                </div>

                <div
                  className="
                    mt-4
                    flex
                    flex-wrap
                    gap-2
                  "
                >
                  {study.technologies.map(
                    (tech, index) => (
                      <span
                        key={`${tech}-${index}`}
                        className="
                          case-tech
                          border
                          border-[#3C604C]/30
                          bg-[#0A1710]
                          px-3
                          py-1.5
                          text-[9px]
                          text-[#8EA399]
                        "
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          HERO IMAGE
      ====================================================== */}

      <section className="relative z-10 px-6 md:px-10">

        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 30,
                  scale: 0.99,
                }
          }
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }
          }
          transition={{
            duration: 0.65,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            case-hero-image
            group
            relative
            mx-auto
            max-w-7xl
            overflow-hidden
            border
            border-white/[0.08]
            bg-[#070D0A]
          "
        >

          <img
            src={study.image}
            alt={study.title}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="
              case-main-image
              h-[350px]
              w-full
              object-cover
              opacity-80
              grayscale-[15%]
              md:h-[520px]
              lg:h-[600px]
            "
          />

          {/* Overlay */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-[#030605]/70
              via-transparent
              to-[#030605]/10
            "
          />

          {/* Frame */}

          <div
            className="
              pointer-events-none
              absolute
              inset-5
              border
              border-white/[0.08]
              md:inset-8
            "
          />

          {/* Label */}

          <div
            className="
              absolute
              bottom-7
              left-7
              flex
              items-center
              gap-2
              bg-[#06100B]/90
              px-3
              py-2
              text-[8px]
              uppercase
              tracking-[0.2em]
              text-[#81998C]
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#619176]
              "
            />

            Project Overview
          </div>

        </motion.div>
      </section>

      {/* =====================================================
          CHALLENGE
      ====================================================== */}

      <section
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-6
          py-28
          md:px-10
        "
      >

        <div
          className="
            grid
            grid-cols-1
            gap-12
            lg:grid-cols-2
          "
        >

          {/* CHALLENGE */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            variants={fadeLeft}
          >

            <div
              className="
                mb-6
                flex
                items-center
                gap-3
              "
            >

              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  border
                  border-[#4A6E58]/30
                  bg-[#0A1710]
                "
              >
                <AlertTriangle
                  className="
                    h-5
                    w-5
                    text-[#6B967D]
                  "
                  strokeWidth={1.4}
                />
              </div>

              <div>
                <p
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.25em]
                    text-[#54705F]
                  "
                >
                  01 / Challenge
                </p>

                <h2
                  className="
                    mt-1
                    font-serif
                    text-3xl
                    text-[#E1E9E4]
                  "
                >
                  The Challenge
                </h2>
              </div>

            </div>

            <p
              className="
                max-w-xl
                text-base
                leading-8
                text-[#707D76]
              "
            >
              {study.challenge}
            </p>

          </motion.div>

          {/* QUOTE */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            variants={fadeRight}
            className="
              relative
              overflow-hidden
              border
              border-white/[0.07]
              bg-[#070D0A]
              p-7
              md:p-9
            "
          >

            <Quote
              className="
                absolute
                right-6
                top-6
                h-12
                w-12
                text-[#355542]/30
              "
              strokeWidth={1}
            />

            <p
              className="
                relative
                z-10
                font-serif
                text-xl
                italic
                leading-8
                text-[#C5D2CA]
              "
            >
              "{study.quote}"
            </p>

            <div
              className="
                relative
                z-10
                mt-7
                flex
                items-center
                gap-4
              "
            >

              <div
                className="
                  h-12
                  w-12
                  overflow-hidden
                  rounded-full
                  border
                  border-[#4D735D]/40
                "
              >
                <img
                  className="
                    h-full
                    w-full
                    object-cover
                  "
                  alt={study.quoteAuthor}
                  src={study.quoteImage}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div>

                <p
                  className="
                    text-sm
                    font-medium
                    text-[#D8E1DC]
                  "
                >
                  {study.quoteAuthor}
                </p>

                <p
                  className="
                    mt-1
                    text-[10px]
                    uppercase
                    tracking-[0.12em]
                    text-[#5D7166]
                  "
                >
                  {study.quoteTitle}
                </p>

              </div>

            </div>

          </motion.div>

        </div>
      </section>

      {/* =====================================================
          SOLUTION
      ====================================================== */}

      <section
        className="
          relative
          z-10
          border-y
          border-white/[0.05]
          bg-[#050907]
          py-28
        "
      >

        <div className="mx-auto max-w-7xl px-6 md:px-10">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            variants={stagger}
          >

            {/* Heading */}

            <motion.div
              variants={fadeUp}
              className="
                mx-auto
                mb-14
                max-w-2xl
                text-center
              "
            >
              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                  text-[#65917A]
                "
              >
                02 / Approach
              </p>

              <h2
                className="
                  mt-4
                  font-serif
                  text-4xl
                  text-[#E3EAE6]
                  md:text-5xl
                "
              >
                The Solution
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-[#68766F]
                "
              >
                A composable approach using modern
                technologies and thoughtful product design.
              </p>
            </motion.div>

            {/* Cards */}

            <div
              className="
                grid
                grid-cols-1
                gap-5
                md:grid-cols-2
                lg:grid-cols-4
              "
            >
              {study.solutionSteps.map(
                (step, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeUp}
                    className="
                      case-solution-card
                      group
                      relative
                      overflow-hidden
                      border
                      border-white/[0.07]
                      bg-[#070D0A]
                      p-7
                    "
                  >

                    <div
                      className="
                        flex
                        items-center
                        justify-between
                      "
                    >
                      <span
                        className="
                          font-mono
                          text-[9px]
                          tracking-[0.25em]
                          text-[#4F6B5B]
                        "
                      >
                        {String(idx + 1).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      <ArrowUpRight
                        className="
                          case-arrow
                          h-4
                          w-4
                          text-[#405D4C]
                        "
                        strokeWidth={1.4}
                      />
                    </div>

                    <div
                      className="
                        mt-8
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        border
                        border-[#3C604C]/30
                        bg-[#0A1710]
                      "
                    >
                      <Layers3
                        className="
                          h-5
                          w-5
                          text-[#629077]
                        "
                        strokeWidth={1.4}
                      />
                    </div>

                    <h3
                      className="
                        mt-6
                        font-serif
                        text-xl
                        text-[#DCE5E0]
                      "
                    >
                      {step.title}
                    </h3>

                    <p
                      className="
                        mt-3
                        text-sm
                        leading-7
                        text-[#68766F]
                      "
                    >
                      {step.desc}
                    </p>

                    <div className="case-card-line" />

                  </motion.div>
                )
              )}
            </div>

          </motion.div>

        </div>
      </section>

      {/* =====================================================
          RESULTS
      ====================================================== */}

      <section
        className="
          relative
          z-10
          overflow-hidden
          px-6
          py-28
          md:px-10
        "
      >

        {/* Static glow */}

        <div
          className="
            case-results-glow
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#0C3C29]/10
          "
        />

        <div className="relative z-10 mx-auto max-w-7xl">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            variants={fadeUp}
            className="
              relative
              overflow-hidden
              border
              border-[#405F4D]/30
              bg-[#070D0A]
              p-8
              md:p-12
            "
          >

            {/* Top accent */}

            <div
              className="
                absolute
                left-0
                right-0
                top-0
                h-px
                bg-gradient-to-r
                from-transparent
                via-[#638F75]
                to-transparent
              "
            />

            <div className="text-center">

              <div
                className="
                  mx-auto
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  border
                  border-[#446851]/30
                  bg-[#0A1710]
                "
              >
                <TrendingUp
                  className="
                    h-5
                    w-5
                    text-[#68967D]
                  "
                  strokeWidth={1.4}
                />
              </div>

              <p
                className="
                  mt-5
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                  text-[#587363]
                "
              >
                03 / Results
              </p>

              <h2
                className="
                  mt-3
                  font-serif
                  text-4xl
                  text-[#E3EAE6]
                  md:text-5xl
                "
              >
                The Impact
              </h2>

              <p
                className="
                  mt-3
                  text-sm
                  text-[#68766F]
                "
              >
                Measurable improvements across key metrics.
              </p>

            </div>

            {/* Results */}

            <div
              className="
                mt-12
                grid
                grid-cols-2
                gap-4
                md:grid-cols-4
              "
            >
              {study.results.map(
                (stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={
                      shouldReduceMotion
                        ? false
                        : {
                            opacity: 0,
                            y: 15,
                          }
                    }
                    whileInView={
                      shouldReduceMotion
                        ? undefined
                        : {
                            opacity: 1,
                            y: 0,
                          }
                    }
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: idx * 0.05,
                    }}
                    className="
                      case-result-card
                      group
                      relative
                      overflow-hidden
                      border
                      border-white/[0.06]
                      bg-[#09100C]
                      p-5
                      text-center
                    "
                  >

                    <p
                      className="
                        font-serif
                        text-3xl
                        text-[#8BAF9B]
                        md:text-4xl
                      "
                    >
                      {stat.value}
                    </p>

                    <p
                      className="
                        mt-2
                        text-[9px]
                        uppercase
                        tracking-[0.18em]
                        text-[#5B6C63]
                      "
                    >
                      {stat.label}
                    </p>

                    <div className="case-result-line" />

                  </motion.div>
                )
              )}
            </div>

          </motion.div>

        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section
        className="
          relative
          z-10
          border-t
          border-white/[0.05]
          bg-[#050907]
          px-6
          py-28
          md:px-10
        "
      >

        <div className="mx-auto max-w-5xl">

          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 20,
                  }
            }
            whileInView={
              shouldReduceMotion
                ? undefined
                : {
                    opacity: 1,
                    y: 0,
                  }
            }
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.5,
            }}
            className="
              relative
              overflow-hidden
              border
              border-[#405F4D]/30
              bg-[#070D0A]
              p-10
              text-center
              md:p-16
            "
          >

            {/* Static glow */}

            <div
              className="
                case-cta-glow
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-80
                w-80
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#0D412D]/10
              "
            />

            {/* Corners */}

            <div
              className="
                absolute
                left-5
                top-5
                h-10
                w-10
                border-l
                border-t
                border-[#5C816D]/25
              "
            />

            <div
              className="
                absolute
                bottom-5
                right-5
                h-10
                w-10
                border-b
                border-r
                border-[#5C816D]/25
              "
            />

            <Sparkles
              className="
                relative
                mx-auto
                h-7
                w-7
                text-[#65947A]
              "
              strokeWidth={1.3}
            />

            <h2
              className="
                relative
                mt-6
                font-serif
                text-4xl
                text-[#E6ECE8]
                md:text-5xl
              "
            >
              Ready to build your
              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-[#A0B9AA]
                  via-[#65927A]
                  to-[#3B604D]
                  bg-clip-text
                  text-transparent
                "
              >
                success story?
              </span>
            </h2>

            <p
              className="
                relative
                mx-auto
                mt-5
                max-w-xl
                text-sm
                leading-7
                text-[#68766F]
                md:text-base
              "
            >
              Let's discuss how we can transform your
              digital presence and drive real business
              results.
            </p>

            <div className="relative mt-8">

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  case-cta-button
                  group
                  relative
                  inline-flex
                  items-center
                  gap-3
                  overflow-hidden
                  border
                  border-[#4B765F]/40
                  bg-[#153428]
                  px-8
                  py-4
                  text-sm
                  font-medium
                  text-[#E2EAE5]
                  transition-transform
                  duration-200
                  hover:-translate-y-1
                  hover:border-[#719B84]/50
                  hover:bg-[#1A3E30]
                  active:scale-95
                "
              >

                <span className="case-cta-shine" />

                <span className="relative z-10">
                  Start a Project
                </span>

                <ArrowRight
                  className="
                    relative
                    z-10
                    h-4
                    w-4
                    transition-transform
                    duration-200
                    group-hover:translate-x-1
                  "
                  strokeWidth={1.5}
                />

              </a>

            </div>

            {/* Trust points */}

            <div
              className="
                relative
                mt-7
                flex
                flex-wrap
                justify-center
                gap-x-6
                gap-y-3
                text-[9px]
                uppercase
                tracking-[0.15em]
                text-[#506258]
              "
            >

              <span className="flex items-center gap-2">
                <CheckCircle2
                  className="h-3 w-3 text-[#5C8A70]"
                />
                Free consultation
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2
                  className="h-3 w-3 text-[#5C8A70]"
                />
                Fixed pricing
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2
                  className="h-3 w-3 text-[#5C8A70]"
                />
                30-day support
              </span>

            </div>

          </motion.div>

        </div>
      </section>

    </main>
  );
};

export default CaseStudy;
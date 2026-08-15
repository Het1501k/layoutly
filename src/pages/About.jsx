import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Eye,
  Layers3,
  Handshake,
  Users,
  Zap,
  CreditCard,
  Search,
  PenTool,
  Code2,
  Rocket,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

/* =========================================================
   DATA
========================================================= */

const values = [
  {
    icon: Eye,
    title: "Transparency",
    desc: "No hidden fees, no technical jargon meant to confuse. Just honest communication and clear timelines.",
  },
  {
    icon: Layers3,
    title: "Craftsmanship",
    desc: "We treat every line of code and every pixel with respect. Quality is our baseline, not an upsell.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    desc: "We aren't just an agency; we are an extension of your team, invested in your long-term success.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    desc: "We learn your goals, audience, and brand to align our strategy.",
    icon: Search,
  },
  {
    step: "02",
    title: "Design & Prototype",
    desc: "We create wireframes, UI designs, and interactive prototypes for your feedback.",
    icon: PenTool,
  },
  {
    step: "03",
    title: "Development & Testing",
    desc: "We build, test, and optimize your product for performance and reliability.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Launch & Support",
    desc: "We deploy your project and provide 30 days of free support to ensure a smooth launch.",
    icon: Rocket,
  },
];

const whyChoose = [
  {
    icon: Users,
    title: "Remote-First Team",
    desc: "We are a fully remote team spanning India, enabling us to work flexibly and efficiently with clients worldwide.",
  },
  {
    icon: Zap,
    title: "Modern Tech Stack",
    desc: "We use React, Next.js, Node.js, and other modern technologies to build fast, scalable, and maintainable products.",
  },
  {
    icon: CreditCard,
    title: "Transparent Pricing",
    desc: "We offer clear, fixed-price packages starting at ₹5,000. No hourly billing surprises.",
  },
];

/* =========================================================
   PERFORMANCE-FIRST MOTION
========================================================= */

const reveal = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const stagger = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

/* =========================================================
   TECH GRID
========================================================= */

const TechGrid = () => {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.025]"
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
  );
};

/* =========================================================
   LIGHTWEIGHT PARTICLES
   CSS ONLY — NO FRAMER MOTION
========================================================= */

const particles = [
  { left: "8%", top: "18%", delay: "0s" },
  { left: "18%", top: "72%", delay: "1s" },
  { left: "31%", top: "38%", delay: "2s" },
  { left: "44%", top: "82%", delay: "3s" },
  { left: "58%", top: "20%", delay: "1.5s" },
  { left: "69%", top: "64%", delay: "2.5s" },
  { left: "82%", top: "32%", delay: "4s" },
  { left: "92%", top: "76%", delay: "3.5s" },
];

const Particles = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle, index) => (
        <span
          key={index}
          className="about-particle absolute h-[2px] w-[2px] rounded-full bg-[#67937B]"
          style={{
            left: particle.left,
            top: particle.top,
            animationDelay: particle.delay,
          }}
        />
      ))}
    </div>
  );
};

/* =========================================================
   REVEAL
========================================================= */

const Reveal = ({ children, className = "" }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.12,
      }}
      variants={shouldReduceMotion ? undefined : stagger}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* =========================================================
   ABOUT
========================================================= */

const About = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030605] text-[#E8EEE9]">

      {/* =====================================================
          GLOBAL BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none fixed inset-0 z-0">

        <TechGrid />

        <Particles />

        {/* Static glow.
            No mouse tracking.
            No animated blur.
        */}
        <div
          className="
            about-glow
            absolute
            left-[70%]
            top-[25%]
            h-[500px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            bg-[#0D3A29]/10
          "
        />

        <div
          className="
            about-glow about-glow-secondary
            absolute
            right-[-150px]
            top-[55%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#092B32]/10
          "
        />
      </div>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        className="
          relative
          z-10
          flex
          min-h-[78vh]
          items-center
          justify-center
          overflow-hidden
          px-6
          pb-24
          pt-36
          md:px-10
        "
      >

        {/* Decorative geometry */}

        {!shouldReduceMotion && (
          <>
            <div
              className="
                about-float
                pointer-events-none
                absolute
                left-[5%]
                top-[30%]
                hidden
                h-64
                w-64
                rotate-45
                border
                border-[#365947]/15
                lg:block
              "
            />

            <div
              className="
                about-float-reverse
                pointer-events-none
                absolute
                right-[7%]
                top-[25%]
                hidden
                h-72
                w-72
                rotate-45
                border
                border-[#365947]/15
                lg:block
              "
            />
          </>
        )}

        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-[#426650]/30
            to-transparent
          "
        />

        <div className="relative z-10 mx-auto max-w-5xl text-center">

          {/* Eyebrow */}

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
              mb-7
              inline-flex
              items-center
              gap-2
              border
              border-[#3D614D]/30
              bg-[#08110C]/70
              px-4
              py-2
              text-[10px]
              uppercase
              tracking-[0.3em]
              text-[#739681]
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#6A9A80]" />
            About Layoutly
          </motion.div>

          {/* Heading */}

          <motion.h1
            initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              font-serif
              text-5xl
              font-medium
              leading-[0.98]
              tracking-[-0.045em]
              text-[#EFF3F0]
              sm:text-6xl
              md:text-7xl
              lg:text-[88px]
            "
          >
            We were
            <br />

            <span
              className="
                bg-gradient-to-r
                from-[#A0B8AA]
                via-[#65917A]
                to-[#3A604D]
                bg-clip-text
                text-transparent
              "
            >
              start-ups too.
            </span>
          </motion.h1>

          {/* Description */}

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              delay: 0.3,
            }}
            className="
              mx-auto
              mt-8
              max-w-2xl
              text-base
              leading-8
              text-[#74817A]
              md:text-lg
            "
          >
            We understand the late nights, the tight budgets,
            and the relentless drive to build something
            meaningful. That's why Layoutly exists — to be
            the technical partner we wished we had.
          </motion.p>

          {/* CTA */}

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              delay: 0.45,
            }}
            className="mt-9 flex justify-center"
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
                border-[#4B745E]/40
                bg-[#143226]
                px-7
                py-4
                text-sm
                font-medium
                text-[#E3EBE6]
                transition-transform
                duration-200
                hover:-translate-y-1
              "
            >
              <span className="relative z-10">
                Let's work together
              </span>

              <ArrowUpRight
                className="
                  relative
                  z-10
                  h-4
                  w-4
                  transition-transform
                  duration-200
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          COMPANY STATS
      ====================================================== */}

      <section
        className="
          relative
          z-10
          border-y
          border-white/[0.05]
          bg-[#050907]
          py-8
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-5xl
            grid-cols-1
            divide-y
            divide-white/[0.06]
            px-6
            md:grid-cols-3
            md:divide-x
            md:divide-y-0
            md:px-10
          "
        >
          {[
            ["2025", "Founded in mid-2025"],
            ["Global", "Remote team across India"],
            ["15+", "Projects delivered"],
          ].map(([value, label], index) => (
            <motion.div
              key={label}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
              whileInView={
                shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
              }
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.06,
              }}
              className="px-6 py-7 text-center"
            >
              <span className="font-serif text-3xl text-[#789F8A]">
                {value}
              </span>

              <p
                className="
                  mt-1
                  text-[10px]
                  uppercase
                  tracking-[0.15em]
                  text-[#59665F]
                "
              >
                {label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =====================================================
          VALUES
      ====================================================== */}

      <section
        className="
          relative
          z-10
          overflow-hidden
          bg-[#030605]
          py-28
          md:py-32
        "
      >
        <TechGrid />

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">

          <Reveal>

            <motion.div
              variants={reveal}
              className="mb-16 text-center"
            >
              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-[#65927B]
                "
              >
                What drives us
              </span>

              <h2
                className="
                  mt-4
                  font-serif
                  text-4xl
                  text-[#E7ECE9]
                  md:text-5xl
                "
              >
                Our core values.
              </h2>

              <p
                className="
                  mx-auto
                  mt-4
                  max-w-xl
                  text-sm
                  leading-7
                  text-[#68766F]
                "
              >
                The principles behind every decision,
                interaction, and product we create.
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
              {values.map((value) => {
                const Icon = value.icon;

                return (
                  <motion.div
                    key={value.title}
                    variants={reveal}
                    className="
                      group
                      relative
                      overflow-hidden
                      border
                      border-white/[0.07]
                      bg-[#070D0A]
                      p-8
                      text-center
                      transition-transform
                      duration-200
                      hover:-translate-y-1
                    "
                  >
                    <div
                      className="
                        pointer-events-none
                        absolute
                        -right-20
                        -top-20
                        h-48
                        w-48
                        rounded-full
                        bg-[#16452F]/10
                      "
                    />

                    <div
                      className="
                        absolute
                        left-0
                        top-0
                        h-px
                        w-full
                        bg-gradient-to-r
                        from-[#4D785F]
                        to-transparent
                      "
                    />

                    <div
                      className="
                        relative
                        mx-auto
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        border
                        border-[#3D604D]/30
                        bg-[#0A1710]
                      "
                    >
                      <Icon
                        className="h-7 w-7 text-[#6A967D]"
                        strokeWidth={1.4}
                      />
                    </div>

                    <h3
                      className="
                        relative
                        mt-7
                        font-serif
                        text-2xl
                        text-[#E0E8E3]
                      "
                    >
                      {value.title}
                    </h3>

                    <p
                      className="
                        relative
                        mt-4
                        text-sm
                        leading-7
                        text-[#6C7972]
                      "
                    >
                      {value.desc}
                    </p>

                    <div className="mt-7 flex justify-center">
                      <span className="h-px w-10 bg-[#456C55]" />
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </Reveal>
        </div>
      </section>

      {/* =====================================================
          WHY LAYOUTLY
      ====================================================== */}

      <section
        className="
          relative
          z-10
          overflow-hidden
          border-y
          border-white/[0.05]
          bg-[#050907]
          py-28
          md:py-32
        "
      >

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#0C3A29]/10
          "
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">

          <Reveal>

            <motion.div
              variants={reveal}
              className="
                relative
                overflow-hidden
                border
                border-[#405F4D]/25
                bg-[#070D0A]
                p-8
                md:p-12
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
                  border-[#5B806C]/25
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
                  border-[#5B806C]/25
                "
              />

              <div className="relative z-10">

                <div className="mx-auto mb-14 max-w-2xl text-center">

                  <span
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.3em]
                      text-[#65927B]
                    "
                  >
                    Why Layoutly
                  </span>

                  <h2
                    className="
                      mt-4
                      font-serif
                      text-4xl
                      text-[#E7ECE9]
                      md:text-5xl
                    "
                  >
                    Built differently.
                  </h2>

                  <p
                    className="
                      mt-4
                      text-sm
                      leading-7
                      text-[#68766F]
                    "
                  >
                    We combine thoughtful design, modern
                    engineering, and transparent collaboration
                    to create products that actually work.
                  </p>
                </div>

                <div
                  className="
                    grid
                    grid-cols-1
                    gap-10
                    md:grid-cols-3
                  "
                >
                  {whyChoose.map((item) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.title}
                        variants={reveal}
                        className="
                          group
                          relative
                          text-center
                          md:text-left
                        "
                      >
                        <div
                          className="
                            mx-auto
                            flex
                            h-14
                            w-14
                            items-center
                            justify-center
                            border
                            border-[#3D604D]/30
                            bg-[#0A1610]
                            md:mx-0
                          "
                        >
                          <Icon
                            className="h-6 w-6 text-[#67947B]"
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
                          {item.title}
                        </h3>

                        <p
                          className="
                            mt-3
                            text-sm
                            leading-7
                            text-[#68766F]
                          "
                        >
                          {item.desc}
                        </p>

                        <div
                          className="
                            mt-5
                            flex
                            justify-center
                            md:justify-start
                          "
                        >
                          <span
                            className="
                              flex
                              items-center
                              gap-2
                              text-[9px]
                              uppercase
                              tracking-[0.18em]
                              text-[#4D6658]
                            "
                          >
                            <CheckCircle2
                              className="h-3 w-3 text-[#5A896F]"
                            />

                            Layoutly standard
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

              </div>
            </motion.div>

          </Reveal>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ====================================================== */}

      <section
        className="
          relative
          z-10
          overflow-hidden
          bg-[#030605]
          py-28
          md:py-32
        "
      >
        <TechGrid />

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">

          <Reveal>

            <motion.div
              variants={reveal}
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
                  text-4xl
                  text-[#E7ECE9]
                  md:text-5xl
                "
              >
                How we work.
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-[#68766F]
                "
              >
                A simple, transparent process designed to
                take your idea from the first conversation
                to a polished product.
              </p>
            </motion.div>

            <div className="relative">

              {/* Timeline */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-4
                  top-8
                  hidden
                  h-[calc(100%-64px)]
                  w-px
                  bg-gradient-to-b
                  from-[#507A61]
                  via-[#294536]
                  to-transparent
                  md:left-1/2
                  md:block
                "
              />

              <div className="space-y-6 md:space-y-8">

                {processSteps.map((step, index) => {
                  const Icon = step.icon;
                  const isEven = index % 2 === 0;

                  return (
                    <motion.div
                      key={step.step}
                      variants={reveal}
                      className="
                        relative
                        grid
                        grid-cols-1
                        md:grid-cols-2
                      "
                    >

                      <div
                        className={`
                          ${
                            isEven
                              ? "md:pr-20"
                              : "md:col-start-2 md:pl-20"
                          }
                        `}
                      >

                        <div
                          className="
                            group
                            relative
                            border
                            border-white/[0.07]
                            bg-[#070D0A]
                            p-7
                            transition-transform
                            duration-200
                            hover:-translate-y-1
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
                                text-[10px]
                                tracking-[0.25em]
                                text-[#527662]
                              "
                            >
                              STEP {step.step}
                            </span>

                            <Icon
                              className="
                                h-5
                                w-5
                                text-[#507B64]
                              "
                              strokeWidth={1.4}
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
                            {step.title}
                          </h3>

                          <p
                            className="
                              mt-4
                              text-sm
                              leading-7
                              text-[#69766F]
                            "
                          >
                            {step.desc}
                          </p>

                          <div
                            className="
                              mt-6
                              h-px
                              w-12
                              bg-[#4E775F]
                            "
                          />

                        </div>
                      </div>

                      {/* Center point */}

                      <div
                        className="
                          absolute
                          left-1/2
                          top-8
                          hidden
                          h-8
                          w-8
                          -translate-x-1/2
                          items-center
                          justify-center
                          border
                          border-[#527A64]/35
                          bg-[#07100B]
                          md:flex
                        "
                      >
                        <span
                          className="
                            h-2
                            w-2
                            rounded-full
                            bg-[#639176]
                          "
                        />
                      </div>

                    </motion.div>
                  );
                })}

              </div>
            </div>

          </Reveal>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section
        className="
          relative
          z-10
          overflow-hidden
          border-t
          border-white/[0.05]
          bg-[#050907]
          py-24
          md:py-28
        "
      >

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#0D3D2B]/10
          "
        />

        <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10">

          <Reveal>

            <motion.div
              variants={reveal}
              className="
                relative
                overflow-hidden
                border
                border-[#405F4D]/25
                bg-[#070D0A]
                p-9
                text-center
                md:p-16
              "
            >

              <div
                className="
                  absolute
                  left-5
                  top-5
                  h-10
                  w-10
                  border-l
                  border-t
                  border-[#5B806C]/25
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
                  border-[#5B806C]/25
                "
              />

              <Sparkles
                className="
                  mx-auto
                  h-7
                  w-7
                  text-[#67947B]
                "
                strokeWidth={1.3}
              />

              <h2
                className="
                  mt-6
                  font-serif
                  text-4xl
                  text-[#E8EEEA]
                  md:text-6xl
                "
              >
                Ready to build
                <br />

                <span
                  className="
                    bg-gradient-to-r
                    from-[#A0B9AA]
                    via-[#638F76]
                    to-[#3A604D]
                    bg-clip-text
                    text-transparent
                  "
                >
                  something great?
                </span>
              </h2>

              <p
                className="
                  mx-auto
                  mt-5
                  max-w-xl
                  text-sm
                  leading-7
                  text-[#6D7A73]
                  md:text-base
                "
              >
                Let's discuss your project and see how
                we can help. We're just a message away.
              </p>

              <div className="mt-8">

                <Link
                  to="/contact"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    border
                    border-[#4C765F]/40
                    bg-[#153428]
                    px-8
                    py-4
                    text-sm
                    font-medium
                    text-[#E2EAE5]
                    transition-transform
                    duration-200
                    hover:-translate-y-1
                  "
                >
                  <span>Get in Touch</span>

                  <ArrowRight
                    className="
                      h-4
                      w-4
                      transition-transform
                      duration-200
                      group-hover:translate-x-1
                    "
                  />
                </Link>

              </div>

              <div
                className="
                  mt-7
                  flex
                  flex-wrap
                  justify-center
                  gap-x-6
                  gap-y-3
                  text-[9px]
                  uppercase
                  tracking-[0.15em]
                  text-[#4F6157]
                "
              >

                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-3 w-3 text-[#5B896F]" />
                  No obligation
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-3 w-3 text-[#5B896F]" />
                  Transparent pricing
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-3 w-3 text-[#5B896F]" />
                  30-day support
                </span>

              </div>

            </motion.div>

          </Reveal>

        </div>
      </section>

    </main>
  );
};

export default About;
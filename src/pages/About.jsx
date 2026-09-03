import React, { useEffect } from "react";
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
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

/* =========================================================
   CINEMATIC MEDIA
========================================================= */

/*
  About hero background.

  Cinematic mountain / meadow / laptop visual with
  warm golden-hour lighting.
*/
const ABOUT_HERO_IMAGE =
  "https://images.squarespace-cdn.com/content/v1/6488ab1849c870348df174a8/ae6898a2-cb36-4299-ba44-f3a4c6de028d/Woman%2Bworking%2Boutdoors%2Bwith%2Blaptop%2Bsitting%2Bin%2Bmountains..jpeg";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";

/* =========================================================
   SEO
========================================================= */

const SEO = () => {
  useEffect(() => {
    const title =
      "About Layoutly — Web Design, UI/UX & Development Studio";

    const description =
      "Learn about Layoutly, a digital design and development studio creating premium websites, UI/UX experiences and high-performance digital products for ambitious brands, startups and businesses.";

    const keywords = [
      "Layoutly",
      "about Layoutly",
      "web design studio",
      "web designer",
      "website designer",
      "UI UX designer",
      "UI UX design studio",
      "web developer",
      "freelance web designer",
      "freelance web developer",
      "website development",
      "React developer",
      "React web development",
      "frontend developer",
      "Figma to React",
      "custom website design",
      "premium website design",
      "modern website design",
      "digital product design",
      "startup web design",
      "business website design",
      "creative web design",
      "professional web designer",
      "website development freelancer",
      "UI UX development",
      "digital experience design",
      "web development studio",
      "creative digital studio",
      "freelance UI UX designer",
    ];

    document.title = title;

    const setMeta = (
      name,
      content,
      attribute = "name"
    ) => {
      let element = document.head.querySelector(
        `meta[${attribute}="${name}"]`
      );

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("keywords", keywords.join(", "));
    setMeta("robots", "index, follow");
    setMeta("author", "Layoutly");

    /* =====================================================
       OPEN GRAPH
    ====================================================== */

    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:site_name", "Layoutly", "property");
    setMeta("og:url", window.location.href, "property");

    /* =====================================================
       TWITTER
    ====================================================== */

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);

    /* =====================================================
       CANONICAL
    ====================================================== */

    let canonical = document.head.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }

    canonical.href = window.location.href;

    /* =====================================================
       STRUCTURED DATA
    ====================================================== */

    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": `${window.location.origin}/#organization`,
          name: "Layoutly",
          url: window.location.origin,
          description,
        },
        {
          "@type": "ProfessionalService",
          "@id": `${window.location.origin}/#service`,
          name: "Layoutly",
          url: window.location.origin,
          description,
          serviceType: [
            "Web Design",
            "UI/UX Design",
            "Website Development",
            "React Development",
            "Frontend Development",
            "Digital Product Design",
          ],
        },
        {
          "@type": "WebPage",
          "@id": `${window.location.origin}/about#webpage`,
          name: title,
          url: `${window.location.origin}/about`,
          description,
          isPartOf: {
            "@id": `${window.location.origin}/#website`,
          },
        },
      ],
    };

    let schema = document.getElementById(
      "layoutly-about-schema"
    );

    if (!schema) {
      schema = document.createElement("script");
      schema.id = "layoutly-about-schema";
      schema.type = "application/ld+json";
      document.head.appendChild(schema);
    }

    schema.textContent = JSON.stringify(structuredData);

    return () => {
      schema?.remove();
    };
  }, []);

  return null;
};

/* =========================================================
   DATA
========================================================= */

const values = [
  {
    number: "01",
    icon: Eye,
    title: "Clarity",
    desc:
      "Good digital work begins with understanding. We simplify complex ideas into experiences that feel obvious, intentional and easy to use.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Craft",
    desc:
      "Every detail matters. From typography and spacing to interactions and code architecture, we build with care at every layer.",
  },
  {
    number: "03",
    icon: Handshake,
    title: "Partnership",
    desc:
      "We work alongside our clients rather than disappearing behind a process. Your goals stay at the center of every decision.",
  },
];

const whyChoose = [
  {
    icon: Users,
    title: "Built for ambitious teams",
    desc:
      "Whether you're launching a startup, rebuilding a business or turning an idea into a product, we design around where you're going next.",
  },
  {
    icon: Zap,
    title: "Design meets engineering",
    desc:
      "We don't stop at beautiful screens. Our designs are created with real development, responsiveness and performance in mind.",
  },
  {
    icon: CreditCard,
    title: "Straightforward collaboration",
    desc:
      "Clear communication, defined deliverables and transparent pricing keep projects moving without unnecessary complexity.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discover",
    icon: Search,
    desc:
      "We understand your business, audience, goals and the problem your digital experience needs to solve.",
  },
  {
    number: "02",
    title: "Design",
    icon: PenTool,
    desc:
      "We shape the visual direction, user experience and interface into a refined design system built for your brand.",
  },
  {
    number: "03",
    title: "Develop",
    icon: Code2,
    desc:
      "The approved experience becomes a responsive, production-ready website or digital product using modern technology.",
  },
  {
    number: "04",
    title: "Launch",
    icon: Rocket,
    desc:
      "After testing and refinement, we launch your project and stay available to make sure everything runs smoothly.",
  },
];

/* =========================================================
   ANIMATION
========================================================= */

const reveal = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
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

const Reveal = ({
  children,
  className = "",
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? false
          : "hidden"
      }
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      variants={
        shouldReduceMotion
          ? undefined
          : stagger
      }
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* =========================================================
   LIQUID GLASS
========================================================= */

const GlassPanel = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`liquid-glass relative overflow-hidden ${className}`}
    >
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

/* =========================================================
   ABOUT
========================================================= */

const About = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="min-h-screen overflow-hidden bg-[#03131A] text-white">
      <SEO />

      {/* =====================================================
          CINEMATIC HERO
      ====================================================== */}

      <section className="relative min-h-screen overflow-hidden bg-[#03131A]">

        {/* ===================================================
            HERO BACKGROUND IMAGE

            This replaces the old blue starry video.

            cover = fills the entire hero
            center 55% = keeps the mountain / subject
            in the visual center.
        ==================================================== */}

        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("${ABOUT_HERO_IMAGE}")`,
            backgroundPosition:
              "center 55%",
          }}
          aria-hidden="true"
        />

        {/* ===================================================
            CINEMATIC DARKENING

            Keeps white typography readable without
            destroying the warm background.
        ==================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-[1]
            bg-black/30
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-[1]
            bg-gradient-to-t
            from-black/75
            via-black/15
            to-black/25
          "
        />

       

        {/* ===================================================
            HERO CONTENT
        ==================================================== */}

        <div
          className="
            relative
            z-10
            flex
            min-h-[calc(100vh-96px)]
            items-center
            justify-center
            px-6
            pb-28
            pt-20
            text-center
          "
        >

          <div className="mx-auto max-w-6xl">

            {/* EYEBROW */}

            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 15,
                    }
              }
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      opacity: 1,
                      y: 0,
                    }
              }
              transition={{
                duration: 0.7,
              }}
              className="
                mb-7
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/15
                bg-black/20
                px-4
                py-2
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-white/70
                backdrop-blur-md
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-white/80
                "
              />

              About Layoutly
            </motion.div>

            {/* HEADING */}

            <motion.h1
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 35,
                    }
              }
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      opacity: 1,
                      y: 0,
                    }
              }
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [
                  0.16,
                  1,
                  0.3,
                  1,
                ],
              }}
              className="
                mx-auto
                max-w-6xl
                text-5xl
                font-normal
                leading-[0.95]
                tracking-[-2.4px]
                text-white
                sm:text-7xl
                md:text-8xl
              "
              style={{
                fontFamily:
                  "'Instrument Serif', serif",
              }}
            >
              We build
              <br />

              <em
                className="
                  not-italic
                  text-white/55
                "
              >
                digital spaces
              </em>

              <br />

              people remember.
            </motion.h1>

            {/* DESCRIPTION */}

            <motion.p
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 20,
                    }
              }
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      opacity: 1,
                      y: 0,
                    }
              }
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
              className="
                mx-auto
                mt-8
                max-w-2xl
                text-base
                leading-relaxed
                text-white/70
                sm:text-lg
              "
            >
              Layoutly is a digital design and
              development studio creating
              thoughtful websites, interfaces,
              and digital products for ambitious
              brands, founders, and businesses.
            </motion.p>

            {/* CTA */}

            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 20,
                    }
              }
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      opacity: 1,
                      y: 0,
                    }
              }
              transition={{
                duration: 0.7,
                delay: 0.45,
              }}
              className="mt-12 flex justify-center"
            >
              <Link
                to="/contact"
                className="
                  liquid-glass
                  group
                  inline-flex
                  rounded-full
                  px-10
                  py-4
                  text-sm
                  text-white
                  transition-transform
                  duration-300
                  hover:scale-[1.03]
                "
              >
                <span
                  className="
                    relative
                    z-10
                    flex
                    items-center
                    gap-3
                  "
                >
                  Let's work together

                  <ArrowUpRight
                    className="
                      h-4
                      w-4
                      transition-transform
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </span>
              </Link>
            </motion.div>

          </div>

        </div>

        {/* ===================================================
            SCROLL INDICATOR
        ==================================================== */}

        <div
          className="
            absolute
            bottom-8
            left-1/2
            z-10
            -translate-x-1/2
          "
        >

          <div
            className="
              flex
              flex-col
              items-center
              gap-3
              text-[9px]
              uppercase
              tracking-[0.3em]
              text-white/50
            "
          >

            <span>
              Scroll to explore
            </span>

            <motion.div
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      height: [
                        20,
                        35,
                        20,
                      ],
                      opacity: [
                        0.3,
                        0.8,
                        0.3,
                      ],
                    }
              }
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                w-px
                bg-white/70
              "
            />

          </div>

        </div>

      </section>

      {/* =====================================================
          INTRO
      ====================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#03131A]
          py-28
          md:py-36
        "
      >

        <div
          className="
            mx-auto
            max-w-7xl
            px-6
            md:px-10
          "
        >

          <Reveal>

            <div
              className="
                grid
                grid-cols-1
                gap-16
                lg:grid-cols-[1.1fr_0.9fr]
                lg:items-center
              "
            >

              <motion.div
                variants={reveal}
              >

                <span
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.3em]
                    text-white/40
                  "
                >
                  The idea behind Layoutly
                </span>

                <h2
                  className="
                    mt-5
                    text-4xl
                    font-normal
                    leading-[1]
                    tracking-tight
                    text-white
                    sm:text-5xl
                    md:text-6xl
                  "
                  style={{
                    fontFamily:
                      "'Instrument Serif', serif",
                  }}
                >
                  Design should feel
                  <br />

                  <span className="text-white/45">
                    effortless.
                  </span>
                </h2>

              </motion.div>

              <motion.div
                variants={reveal}
                className="max-w-xl"
              >

                <p
                  className="
                    text-base
                    leading-8
                    text-white/55
                    md:text-lg
                  "
                >
                  We believe the best digital
                  experiences don't shout for
                  attention. They create clarity,
                  build trust, and make people
                  want to stay.
                </p>

                <p
                  className="
                    mt-6
                    text-base
                    leading-8
                    text-white/45
                    md:text-lg
                  "
                >
                  That's why we bring design and
                  development together from the
                  beginning — creating experiences
                  that look beautiful, feel natural,
                  and perform exactly as they should.
                </p>

              </motion.div>

            </div>

          </Reveal>

        </div>

      </section>

      {/* =====================================================
          STATS
      ====================================================== */}

      <section
        className="
          relative
          border-y
          border-white/[0.07]
          bg-[#041921]
          py-5
        "
      >

        <div
          className="
            mx-auto
            grid
            max-w-6xl
            grid-cols-1
            md:grid-cols-3
          "
        >

          {[
            ["2025", "Founded"],
            ["Global", "Remote collaboration"],
            ["15+", "Projects delivered"],
          ].map(
            ([value, label], index) => (
              <motion.div
                key={label}
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
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="
                  border-b
                  border-white/[0.06]
                  px-6
                  py-8
                  text-center
                  last:border-b-0
                  md:border-b-0
                  md:border-r
                  md:last:border-r-0
                "
              >

                <span
                  className="
                    text-3xl
                    text-white
                  "
                  style={{
                    fontFamily:
                      "'Instrument Serif', serif",
                  }}
                >
                  {value}
                </span>

                <p
                  className="
                    mt-2
                    text-[9px]
                    uppercase
                    tracking-[0.25em]
                    text-white/35
                  "
                >
                  {label}
                </p>

              </motion.div>
            )
          )}

        </div>

      </section>

      {/* =====================================================
          VALUES
      ====================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#03131A]
          py-32
          md:py-40
        "
      >

        <div
          className="
            mx-auto
            max-w-7xl
            px-6
            md:px-10
          "
        >

          <Reveal>

            <motion.div
              variants={reveal}
              className="mb-16 max-w-2xl"
            >

              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-white/40
                "
              >
                What matters to us
              </span>

              <h2
                className="
                  mt-5
                  text-4xl
                  font-normal
                  leading-tight
                  text-white
                  sm:text-5xl
                  md:text-6xl
                "
                style={{
                  fontFamily:
                    "'Instrument Serif', serif",
                }}
              >
                The principles
                <br />
                behind the work.
              </h2>

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
                    key={value.number}
                    variants={reveal}
                    whileHover={{
                      y: -6,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="group"
                  >

                    <GlassPanel
                      className="
                        min-h-[330px]
                        rounded-[28px]
                        p-7
                        md:p-8
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
                            text-[10px]
                            tracking-[0.25em]
                            text-white/30
                          "
                        >
                          {value.number}
                        </span>

                        <Icon
                          className="
                            h-5
                            w-5
                            text-white/55
                            transition-transform
                            duration-500
                            group-hover:scale-110
                          "
                          strokeWidth={1.3}
                        />

                      </div>

                      <div className="mt-20">

                        <h3
                          className="
                            text-3xl
                            text-white
                          "
                          style={{
                            fontFamily:
                              "'Instrument Serif', serif",
                          }}
                        >
                          {value.title}
                        </h3>

                        <p
                          className="
                            mt-4
                            text-sm
                            leading-7
                            text-white/45
                          "
                        >
                          {value.desc}
                        </p>

                      </div>

                      <div
                        className="
                          absolute
                          bottom-7
                          left-7
                          h-px
                          w-10
                          bg-white/25
                          transition-all
                          duration-500
                          group-hover:w-20
                        "
                      />

                    </GlassPanel>

                  </motion.div>
                );
              })}

            </div>

          </Reveal>

        </div>

      </section>

      {/* =====================================================
          PHILOSOPHY
      ====================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#041921]
          py-32
          md:py-40
        "
      >

        <div
          className="
            mx-auto
            max-w-6xl
            px-6
            md:px-10
          "
        >

          <Reveal>

            <GlassPanel
              className="
                rounded-[32px]
                p-8
                md:p-14
                lg:p-20
              "
            >

              <div
                className="
                  grid
                  grid-cols-1
                  gap-12
                  lg:grid-cols-[0.75fr_1.25fr]
                  lg:items-center
                "
              >

                <motion.div
                  variants={reveal}
                >

                  <span
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.3em]
                      text-white/35
                    "
                  >
                    Our philosophy
                  </span>

                  <h2
                    className="
                      mt-5
                      text-4xl
                      leading-[1]
                      text-white
                      sm:text-5xl
                      md:text-6xl
                    "
                    style={{
                      fontFamily:
                        "'Instrument Serif', serif",
                    }}
                  >
                    Less noise.
                    <br />

                    <span className="text-white/45">
                      More meaning.
                    </span>
                  </h2>

                </motion.div>

                <motion.div
                  variants={reveal}
                  className="space-y-6"
                >

                  <p
                    className="
                      text-base
                      leading-8
                      text-white/60
                      md:text-lg
                    "
                  >
                    The internet is already full of
                    noise. Another website doesn't
                    need to add to it.
                  </p>

                  <p
                    className="
                      text-base
                      leading-8
                      text-white/50
                      md:text-lg
                    "
                  >
                    We focus on creating digital
                    experiences with intention —
                    strong typography, thoughtful
                    interaction, meaningful hierarchy
                    and technology that stays out of
                    the user's way.
                  </p>

                  <div
                    className="
                      flex
                      items-center
                      gap-3
                      pt-3
                      text-[9px]
                      uppercase
                      tracking-[0.25em]
                      text-white/35
                    "
                  >

                    <span
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-white/60
                      "
                    />

                    Design with intention

                  </div>

                </motion.div>

              </div>

            </GlassPanel>

          </Reveal>

        </div>

      </section>

      {/* =====================================================
          WHY LAYOUTLY
      ====================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#03131A]
          py-32
          md:py-40
        "
      >

        <div
          className="
            mx-auto
            max-w-7xl
            px-6
            md:px-10
          "
        >

          <Reveal>

            <div className="mb-16 text-center">

              <motion.div
                variants={reveal}
              >

                <span
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.3em]
                    text-white/35
                  "
                >
                  Why Layoutly
                </span>

                <h2
                  className="
                    mt-5
                    text-4xl
                    text-white
                    sm:text-5xl
                    md:text-6xl
                  "
                  style={{
                    fontFamily:
                      "'Instrument Serif', serif",
                  }}
                >
                  Built for the next step.
                </h2>

                <p
                  className="
                    mx-auto
                    mt-5
                    max-w-2xl
                    text-sm
                    leading-7
                    text-white/40
                    md:text-base
                  "
                >
                  A focused design and development
                  partner for people who care deeply
                  about what they are building.
                </p>

              </motion.div>

            </div>

            <div
              className="
                grid
                grid-cols-1
                gap-5
                md:grid-cols-3
              "
            >

              {whyChoose.map((item) => {

                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    variants={reveal}
                    className="group"
                  >

                    <GlassPanel
                      className="
                        rounded-[24px]
                        p-7
                      "
                    >

                      <div
                        className="
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/10
                          bg-white/[0.03]
                        "
                      >

                        <Icon
                          className="
                            h-5
                            w-5
                            text-white/60
                          "
                          strokeWidth={1.3}
                        />

                      </div>

                      <h3
                        className="
                          mt-7
                          text-2xl
                          text-white
                        "
                        style={{
                          fontFamily:
                            "'Instrument Serif', serif",
                        }}
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-4
                          text-sm
                          leading-7
                          text-white/42
                        "
                      >
                        {item.desc}
                      </p>

                      <div
                        className="
                          mt-7
                          flex
                          items-center
                          gap-2
                          text-[9px]
                          uppercase
                          tracking-[0.2em]
                          text-white/30
                        "
                      >

                        <CheckCircle2
                          className="
                            h-3
                            w-3
                            text-white/50
                          "
                          strokeWidth={1.5}
                        />

                        Layoutly standard

                      </div>

                    </GlassPanel>

                  </motion.div>
                );
              })}

            </div>

          </Reveal>

        </div>

      </section>

      {/* =====================================================
          PROCESS
      ====================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#041921]
          py-32
          md:py-40
        "
      >

        <div
          className="
            mx-auto
            max-w-7xl
            px-6
            md:px-10
          "
        >

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
                  text-white/35
                "
              >
                How we work
              </span>

              <h2
                className="
                  mt-5
                  text-4xl
                  text-white
                  sm:text-5xl
                  md:text-6xl
                "
                style={{
                  fontFamily:
                    "'Instrument Serif', serif",
                }}
              >
                From idea to reality.
              </h2>

              <p
                className="
                  mt-5
                  text-sm
                  leading-7
                  text-white/40
                  md:text-base
                "
              >
                A simple process designed to keep
                the creative vision strong while
                making development predictable.
              </p>

            </motion.div>

            <div
              className="
                grid
                grid-cols-1
                gap-4
                md:grid-cols-2
              "
            >

              {processSteps.map((step) => {

                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.number}
                    variants={reveal}
                    whileHover={{
                      y: -5,
                    }}
                    className="group"
                  >

                    <GlassPanel
                      className="
                        rounded-[24px]
                        p-7
                        md:p-9
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
                            text-[10px]
                            tracking-[0.3em]
                            text-white/30
                          "
                        >
                          {step.number}
                        </span>

                        <Icon
                          className="
                            h-5
                            w-5
                            text-white/45
                            transition-transform
                            duration-500
                            group-hover:-translate-y-1
                            group-hover:translate-x-1
                          "
                          strokeWidth={1.3}
                        />

                      </div>

                      <h3
                        className="
                          mt-14
                          text-3xl
                          text-white
                        "
                        style={{
                          fontFamily:
                            "'Instrument Serif', serif",
                        }}
                      >
                        {step.title}
                      </h3>

                      <p
                        className="
                          mt-4
                          max-w-lg
                          text-sm
                          leading-7
                          text-white/42
                        "
                      >
                        {step.desc}
                      </p>

                      <div
                        className="
                          mt-8
                          h-px
                          w-full
                          bg-white/[0.07]
                        "
                      />

                    </GlassPanel>

                  </motion.div>
                );
              })}

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
          overflow-hidden
          bg-[#03131A]
          py-28
          md:py-36
        "
      >

        <div
          className="
            mx-auto
            max-w-6xl
            px-6
            md:px-10
          "
        >

          <Reveal>

            <motion.div
              variants={reveal}
              className="
                relative
                overflow-hidden
                rounded-[32px]
              "
            >

              {/* CTA BACKGROUND */}

              <div
                className="
                  absolute
                  inset-0
                "
              >

                <video
                  className="
                    h-full
                    w-full
                    object-cover
                  "
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  aria-hidden="true"
                >
                  <source
                    src={VIDEO_URL}
                    type="video/mp4"
                  />
                </video>

                <div
                  className="
                    absolute
                    inset-0
                    bg-[#03131A]/65
                  "
                />

              </div>

              {/* CTA CONTENT */}

              <div
                className="
                  relative
                  z-10
                  px-7
                  py-20
                  text-center
                  md:px-16
                  md:py-28
                "
              >

                <span
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.3em]
                    text-white/55
                  "
                >
                  Start something meaningful
                </span>

                <h2
                  className="
                    mx-auto
                    mt-5
                    max-w-3xl
                    text-5xl
                    leading-[0.95]
                    text-white
                    sm:text-6xl
                    md:text-7xl
                  "
                  style={{
                    fontFamily:
                      "'Instrument Serif', serif",
                  }}
                >
                  Your next idea
                  <br />
                  deserves a place.
                </h2>

                <p
                  className="
                    mx-auto
                    mt-6
                    max-w-xl
                    text-sm
                    leading-7
                    text-white/55
                    md:text-base
                  "
                >
                  Let's turn your vision into a
                  digital experience people remember.
                </p>

                <div className="mt-10">

                  <Link
                    to="/contact"
                    className="
                      liquid-glass
                      group
                      inline-flex
                      rounded-full
                      px-9
                      py-4
                      text-sm
                      text-white
                      transition-transform
                      duration-300
                      hover:scale-[1.03]
                    "
                  >

                    <span
                      className="
                        relative
                        z-10
                        flex
                        items-center
                        gap-3
                      "
                    >

                      Start a conversation

                      <ArrowUpRight
                        className="
                          h-4
                          w-4
                          transition-transform
                          duration-300
                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                        "
                      />

                    </span>

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
                    tracking-[0.18em]
                    text-white/35
                  "
                >

                  <span
                    className="
                      flex
                      items-center
                      gap-2
                    "
                  >
                    <span
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-white/60
                      "
                    />

                    No obligation
                  </span>

                  <span
                    className="
                      flex
                      items-center
                      gap-2
                    "
                  >
                    <span
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-white/60
                      "
                    />

                    Transparent pricing
                  </span>

                  <span
                    className="
                      flex
                      items-center
                      gap-2
                    "
                  >
                    <span
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-white/60
                      "
                    />

                    Fast communication
                  </span>

                </div>

              </div>

            </motion.div>

          </Reveal>

        </div>

      </section>

    </main>
  );
};

export default About;
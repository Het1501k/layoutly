import React, { useEffect } from "react";
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
  Terminal,
  Zap,
  Cloud,
  Server,
  Boxes,
  MonitorSmartphone,
  Quote,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

/* =========================================================
   SEO
========================================================= */

const SEO = () => {
  useEffect(() => {
    const title =
      "Layoutly — Web Designer, UI/UX Designer & Web Developer";

    const description =
      "Layoutly creates premium websites, UI/UX designs and digital experiences for ambitious brands, startups and businesses. Custom web design, React development, Figma to code and modern digital products.";

    const keywords = [
      "web designer",
      "web design",
      "website designer",
      "freelance web designer",
      "UI UX designer",
      "UI/UX design",
      "web developer",
      "freelance web developer",
      "website development",
      "React developer",
      "React web developer",
      "frontend developer",
      "full stack developer",
      "custom website design",
      "responsive web design",
      "modern website design",
      "premium website design",
      "landing page design",
      "Figma to React",
      "UI UX development",
      "digital product design",
      "website design agency",
      "freelance UI UX designer",
      "custom website development",
      "business website design",
      "startup website design",
      "creative web designer",
      "professional web designer",
      "web development freelancer",
      "React website development",
    ];

    document.title = title;

    const setMeta = (name, content, attribute = "name") => {
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

    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:site_name", "Layoutly", "property");
    setMeta("og:url", window.location.href, "property");

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);

    let canonical = document.head.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }

    canonical.href = window.location.href;

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
          "@type": "WebSite",
          "@id": `${window.location.origin}/#website`,
          name: "Layoutly",
          url: window.location.origin,
          description,
          publisher: {
            "@id": `${window.location.origin}/#organization`,
          },
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
            "Full-Stack Development",
            "Digital Product Design",
          ],
        },
      ],
    };

    let schema = document.getElementById("layoutly-schema");

    if (!schema) {
      schema = document.createElement("script");
      schema.id = "layoutly-schema";
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

const technologies = [
  { icon: Code2, name: "React" },
  { icon: Layers3, name: "Next.js" },
  { icon: Code2, name: "Java" },
  { icon: Server, name: "Spring Boot" },
  { icon: Zap, name: "Tailwind CSS" },
  { icon: PenTool, name: "Figma" },
  { icon: Terminal, name: "Node.js" },
  { icon: Database, name: "MySQL" },
  { icon: Database, name: "MongoDB" },
  { icon: Boxes, name: "Docker" },
  { icon: Cloud, name: "AWS" },
  { icon: Code2, name: "TypeScript" },
];

const services = [
  {
    number: "01",
    icon: Palette,
    title: "Design → Code",
    description:
      "Figma designs transformed into production-ready interfaces with obsessive attention to typography, spacing, responsiveness and interaction.",
    tags: ["Pixel-perfect", "Responsive"],
  },
  {
    number: "02",
    icon: Server,
    title: "Full-Stack Engineering",
    description:
      "Scalable applications, robust APIs and thoughtful architecture built around performance, security and long-term maintainability.",
    tags: ["Scalable", "Secure"],
  },
  {
    number: "03",
    icon: Rocket,
    title: "MVP Launch",
    description:
      "From first idea to live product. A focused process for founders who need to validate quickly without compromising the experience.",
    tags: ["Fast delivery", "Launch-ready"],
  },
];

const process = [
  {
    number: "01",
    title: "Design",
    description:
      "We establish the visual language, component system, responsive layouts and interaction direction before development begins.",
    icons: [Palette, PenTool, Layers3],
  },
  {
    number: "02",
    title: "Build",
    description:
      "The approved experience becomes a robust digital product through clean React interfaces and scalable engineering.",
    icons: [Code2, Terminal, Database],
  },
  {
    number: "03",
    title: "Launch",
    description:
      "Performance, responsiveness, QA and deployment checks bring the final experience into the real world.",
    icons: [Rocket, ShieldCheck, MonitorSmartphone],
  },
];

/* =========================================================
   ANIMATIONS
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -35,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 35,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
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
        amount: 0.12,
      }}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* =========================================================
   ATMOSPHERE
========================================================= */

const Atmosphere = ({ opacity = 0.45 }) => {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          opacity,
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.55) 0.7px, transparent 0.7px)",
          backgroundSize: "34px 34px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 90%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black, transparent 90%)",
        }}
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/[0.08]" />
    </>
  );
};

/* =========================================================
   GLASS PANEL
========================================================= */

const GlassPanel = ({ children, className = "" }) => {
  return (
    <div
      className={`relative overflow-hidden rounded-[28px] border border-white/[0.09] bg-white/[0.025] backdrop-blur-xl ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.055] via-transparent to-transparent" />

      <div className="relative z-10">{children}</div>
    </div>
  );
};

/* =========================================================
   HOME
========================================================= */

const Home = () => {
  return (
    <main
      className="min-h-screen overflow-hidden bg-[#031018] text-white"
      style={{
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <SEO />

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-screen overflow-hidden bg-[#092432]">
        <video
          className="absolute inset-0 z-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
            type="video/mp4"
          />
        </video>

        <div className="pointer-events-none absolute inset-0 z-[1] bg-black/20" />

       

        {/* HERO */}

        <div className="relative z-10 flex min-h-[calc(100vh-96px)] items-center justify-center px-6 pb-32 pt-20 text-center">
          <div className="mx-auto pt-20 max-w-7xl">
            <h1
              className="animate-fade-rise mx-auto max-w-7xl text-5xl font-normal leading-[0.95] tracking-[-2.46px] text-white sm:text-7xl md:text-8xl"
              style={{
                fontFamily: "'Instrument Serif', serif",
              }}
            >
              Where{" "}
              <em className="not-italic text-white/55">
                dreams
              </em>{" "}
              rise
              <br />
              <em className="not-italic text-white/55">
                through the silence.
              </em>
            </h1>

            <p className="animate-fade-rise-delay mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
              We design and develop premium digital experiences
              for ambitious brands, founders, and businesses.
              From thoughtful UI/UX to high-performance web
              development, we turn ideas into digital spaces
              people remember.
            </p>

            <div className="animate-fade-rise-delay-2 mt-12">
              <Link
                to="/contact"
                className="liquid-glass group inline-flex rounded-full px-14 py-5 text-base text-white transition-all duration-300 hover:scale-[1.03]"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Begin Journey
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* SCROLL */}

        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
          <div className="flex flex-col items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-white/45">
            <span>Scroll to explore</span>

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
              className="w-px bg-white/60"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO / POSITIONING
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#031018] py-32 md:py-44">
        <Atmosphere opacity={0.3} />

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
          <SectionReveal>
            <motion.div
              variants={fadeUp}
              className="grid gap-14 md:grid-cols-[0.7fr_1.3fr] md:items-end"
            >
              <div>
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/40">
                  <span className="h-px w-8 bg-white/30" />
                  01 — The studio
                </div>

                <p className="mt-7 max-w-xs text-sm leading-7 text-white/45">
                  A digital studio for brands that care about
                  how their ideas feel, not just how they function.
                </p>
              </div>

              <h2
                className="text-4xl font-normal leading-[1.02] tracking-tight text-white sm:text-5xl md:text-7xl"
                style={{
                  fontFamily: "'Instrument Serif', serif",
                }}
              >
                We build digital experiences
                <span className="text-white/35">
                  {" "}
                  with clarity, character and intent.
                </span>
              </h2>
            </motion.div>
          </SectionReveal>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#061923] py-28 md:py-36">
        <Atmosphere opacity={0.25} />

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
          <SectionReveal>
            <motion.div
              variants={fadeUp}
              className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end"
            >
              <div>
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/40">
                  <span className="h-px w-8 bg-white/30" />
                  02 — The tools
                </div>

                <h2
                  className="mt-5 max-w-2xl text-4xl font-normal leading-none text-white md:text-6xl"
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                  }}
                >
                  Built with
                  <br />
                  <span className="text-white/35">
                    modern technology.
                  </span>
                </h2>
              </div>

              <p className="max-w-sm text-sm leading-7 text-white/40">
                Carefully selected technologies give every
                project the flexibility to evolve without
                sacrificing speed or craft.
              </p>
            </motion.div>
          </SectionReveal>

          <div className="relative">
            <div className="grid grid-cols-2 border-l border-t border-white/[0.08] sm:grid-cols-3 lg:grid-cols-4">
              {technologies.map((tech, index) => {
                const Icon = tech.icon;

                return (
                  <motion.div
                    key={tech.name}
                    variants={fadeUp}
                    whileHover={{
                      backgroundColor:
                        "rgba(255,255,255,0.045)",
                    }}
                    className="group flex min-h-[125px] items-center gap-4 border-b border-r border-white/[0.08] px-6 transition-colors duration-500 md:px-8"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.025]">
                      <Icon
                        className="h-4 w-4 text-white/45 transition-colors duration-300 group-hover:text-white"
                        strokeWidth={1.4}
                      />
                    </div>

                    <div>
                      <span className="block text-sm text-white/65 transition-colors group-hover:text-white">
                        {tech.name}
                      </span>

                      <span className="mt-1 block text-[9px] uppercase tracking-[0.2em] text-white/25">
                        Technology
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#031018] py-32 md:py-44">
        <Atmosphere opacity={0.28} />

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
          <SectionReveal>
            <motion.div
              variants={fadeUp}
              className="mb-20 max-w-3xl"
            >
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/40">
                <span className="h-px w-8 bg-white/30" />
                03 — The process
              </div>

              <h2
                className="mt-6 text-5xl font-normal leading-[0.95] tracking-tight text-white md:text-7xl"
                style={{
                  fontFamily: "'Instrument Serif', serif",
                }}
              >
                Less noise.
                <br />
                <span className="text-white/35">
                  Better work.
                </span>
              </h2>
            </motion.div>

            <div className="space-y-4">
              {process.map((item, index) => (
                <motion.div
                  key={item.number}
                  variants={fadeUp}
                  className="group relative overflow-hidden rounded-[26px] border border-white/[0.08] bg-white/[0.025] p-7 backdrop-blur-xl transition-all duration-500 hover:border-white/[0.15] hover:bg-white/[0.04] md:p-10"
                >
                  <div className="grid gap-8 md:grid-cols-[100px_0.8fr_1.2fr_140px] md:items-center">
                    <span
                      className="text-4xl text-white/20"
                      style={{
                        fontFamily: "'Instrument Serif', serif",
                      }}
                    >
                      {item.number}
                    </span>

                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.035]">
                        {React.createElement(item.icons[0], {
                          className: "h-5 w-5 text-white/60",
                          strokeWidth: 1.4,
                        })}
                      </div>

                      <h3
                        className="text-3xl text-white"
                        style={{
                          fontFamily: "'Instrument Serif', serif",
                        }}
                      >
                        {item.title}
                      </h3>
                    </div>

                    <p className="max-w-lg text-sm leading-7 text-white/40">
                      {item.description}
                    </p>

                    <div className="flex gap-3 md:justify-end">
                      {item.icons.map((Icon, iconIndex) => (
                        <div
                          key={iconIndex}
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02]"
                        >
                          <Icon
                            className="h-3.5 w-3.5 text-white/35"
                            strokeWidth={1.4}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 h-px w-0 bg-white/50 transition-all duration-700 group-hover:w-full" />
                </motion.div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#061923] py-32 md:py-44">
        <Atmosphere opacity={0.25} />

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
          <SectionReveal>
            <div className="mb-16 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <motion.div variants={fadeLeft}>
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/40">
                  <span className="h-px w-8 bg-white/30" />
                  04 — Capabilities
                </div>

                <h2
                  className="mt-6 text-5xl font-normal leading-[0.95] text-white md:text-7xl"
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                  }}
                >
                  What we
                  <br />
                  <span className="text-white/35">
                    create.
                  </span>
                </h2>
              </motion.div>

              <motion.div
                variants={fadeRight}
                className="max-w-sm"
              >
                <p className="text-sm leading-7 text-white/40">
                  Strategy, design and engineering brought
                  together under one roof — so the final product
                  feels like one complete thought.
                </p>

                <Link
                  to="/services"
                  className="group mt-6 inline-flex items-center gap-3 text-sm text-white/65 transition-colors hover:text-white"
                >
                  Explore all services
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                </Link>
              </motion.div>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <motion.div
                    key={service.number}
                    variants={fadeUp}
                    whileHover={{ y: -6 }}
                    className="group relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.025] p-8 backdrop-blur-xl transition-all duration-500 hover:border-white/[0.14] hover:bg-white/[0.04]"
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className="text-3xl text-white/20"
                        style={{
                          fontFamily: "'Instrument Serif', serif",
                        }}
                      >
                        {service.number}
                      </span>

                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.035]">
                        <Icon
                          className="h-5 w-5 text-white/55"
                          strokeWidth={1.4}
                        />
                      </div>
                    </div>

                    <h3
                      className="mt-16 text-3xl text-white"
                      style={{
                        fontFamily: "'Instrument Serif', serif",
                      }}
                    >
                      {service.title}
                    </h3>

                    <p className="mt-5 min-h-[140px] text-sm leading-7 text-white/40">
                      {service.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2 border-t border-white/[0.07] pt-6">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-[9px] uppercase tracking-[0.15em] text-white/40"
                        >
                          <CheckCircle2 className="h-3 w-3 text-white/45" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </motion.div>
                );
              })}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* =====================================================
          STATEMENT
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#031018] py-36 md:py-52">
        <Atmosphere opacity={0.3} />

        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center md:px-10">
          <SectionReveal>
            <motion.div variants={fadeUp}>
              <Sparkles className="mx-auto h-5 w-5 text-white/35" />

              <p className="mt-8 text-[10px] uppercase tracking-[0.35em] text-white/35">
                The philosophy
              </p>

              <h2
                className="mx-auto mt-8 max-w-5xl text-5xl font-normal leading-[0.95] tracking-tight text-white sm:text-6xl md:text-8xl"
                style={{
                  fontFamily: "'Instrument Serif', serif",
                }}
              >
                Good design should
                <br />
                <span className="text-white/35">
                  feel inevitable.
                </span>
              </h2>

              <p className="mx-auto mt-9 max-w-2xl text-sm leading-7 text-white/40 md:text-base">
                Nothing unnecessary. Nothing accidental.
                Every visual decision has a reason, and every
                interaction should move the experience forward.
              </p>
            </motion.div>
          </SectionReveal>
        </div>
      </section>

      {/* =====================================================
          TESTIMONIAL
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#061923] py-32 md:py-40">
        <Atmosphere opacity={0.22} />

        <div className="relative z-10 mx-auto max-w-5xl px-6 md:px-10">
          <SectionReveal>
            <GlassPanel className="rounded-[32px] p-8 md:p-16">
              <motion.div
                variants={fadeUp}
                className="text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.035]">
                  <Quote
                    className="h-6 w-6 text-white/50"
                    strokeWidth={1.4}
                  />
                </div>

                <blockquote className="mx-auto mt-10 max-w-4xl">
                  <p
                    className="text-3xl leading-[1.15] text-white md:text-5xl"
                    style={{
                      fontFamily: "'Instrument Serif', serif",
                    }}
                  >
                    “Layoutly didn’t just build what we
                    designed; they improved the architectural
                    foundation.”
                  </p>
                </blockquote>

                <div className="mx-auto mt-10 h-px w-12 bg-white/30" />

                <div className="mt-7">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.035]">
                    <span
                      className="text-lg text-white/70"
                      style={{
                        fontFamily: "'Instrument Serif', serif",
                      }}
                    >
                      HP
                    </span>
                  </div>

                  <h4 className="mt-4 text-xs tracking-[0.2em] text-white/65">
                    HET PATEL
                  </h4>

                  <p className="mt-1 text-xs text-white/30">
                    Founder
                  </p>

                  <div className="mt-4 flex items-center justify-center gap-3 text-[9px] uppercase tracking-widest text-white/25">
                    <span className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/45" />
                      Verified partner
                    </span>

                    <span className="h-3 w-px bg-white/10" />

                    <span>2026</span>
                  </div>
                </div>
              </motion.div>
            </GlassPanel>
          </SectionReveal>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#031018] py-32 md:py-44">
        <Atmosphere opacity={0.3} />

        <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10">
          <SectionReveal>
            <GlassPanel className="rounded-[34px] p-9 md:p-16 lg:p-20">
              <motion.div
                variants={fadeUp}
                className="grid gap-12 md:grid-cols-[1fr_auto] md:items-end"
              >
                <div>
                  <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/40">
                    <span className="h-px w-8 bg-white/30" />
                    05 — Start a project
                  </div>

                  <h2
                    className="mt-7 max-w-3xl text-5xl font-normal leading-[0.94] text-white md:text-7xl"
                    style={{
                      fontFamily: "'Instrument Serif', serif",
                    }}
                  >
                    Have an idea?
                    <br />
                    <span className="text-white/35">
                      Let's make it real.
                    </span>
                  </h2>

                  <p className="mt-7 max-w-xl text-sm leading-7 text-white/40 md:text-base">
                    Tell us what you're building, where you're
                    going and what success looks like. We'll
                    take it from there.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-3">
                    {[
                      "No obligation",
                      "Free consultation",
                      "Fast response",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2 text-[9px] uppercase tracking-[0.15em] text-white/35"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="group inline-flex w-fit items-center gap-4 rounded-full border border-white/[0.15] bg-white/[0.06] px-7 py-4 text-sm text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.1]"
                >
                  Start a conversation

                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </GlassPanel>
          </SectionReveal>
        </div>
      </section>

      {/* =====================================================
          MINI FOOTER
      ====================================================== */}

      <footer className="border-t border-white/[0.07] bg-[#020C12]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-10">
          <Link
            to="/"
            className="text-2xl text-white"
            style={{
              fontFamily: "'Instrument Serif', serif",
            }}
          >
            Layoutly<sup className="text-[8px]">®</sup>
          </Link>

          <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
            Digital experiences with intent.
          </p>

          <p className="text-[10px] uppercase tracking-[0.2em] text-white/20">
            © {new Date().getFullYear()} Layoutly
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Home;
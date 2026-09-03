import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Layers3,
  PenTool,
  Code2,
  Sparkles,
  Search,
  Layout,
  Smartphone,
  Gauge,
  Globe2,
} from "lucide-react";
import Footer from "../components/Footer";

const services = [
  {
    number: "01",
    title: "Web Design",
    description:
      "Strategic, editorial websites designed around your brand, audience and business goals. Every page is built to communicate clearly while feeling visually distinctive.",
    icon: PenTool,
  },
  {
    number: "02",
    title: "UI / UX Design",
    description:
      "Interfaces and digital experiences designed around real people. We focus on hierarchy, usability, interaction and the small details that make products feel effortless.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Frontend Development",
    description:
      "Responsive, polished and production-ready websites built with modern frontend technologies, with careful attention to performance and implementation quality.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Creative Direction",
    description:
      "A clear visual direction for brands entering or evolving their digital space — from typography and composition to imagery, motion and interaction.",
    icon: Sparkles,
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start by understanding the business, the audience, the competition and the reason the project needs to exist.",
    icon: Search,
  },
  {
    number: "02",
    title: "Define",
    description:
      "We turn the initial ideas into a clear creative direction, information structure and visual system.",
    icon: Layout,
  },
  {
    number: "03",
    title: "Design",
    description:
      "The experience comes to life through considered typography, layout, imagery, interaction and responsive design.",
    icon: Smartphone,
  },
  {
    number: "04",
    title: "Build",
    description:
      "The approved design is transformed into a fast, responsive and carefully crafted digital experience.",
    icon: Code2,
  },
  {
    number: "05",
    title: "Refine",
    description:
      "We test, polish and refine the final experience so the details feel intentional across devices and screen sizes.",
    icon: Gauge,
  },
];

const principles = [
  {
    number: "01",
    title: "Clarity over clutter",
    text:
      "Every element needs a reason to exist. We remove the unnecessary so the important things have room to speak.",
  },
  {
    number: "02",
    title: "Design with intention",
    text:
      "Typography, spacing, composition, movement and hierarchy are treated as part of the strategy — not decoration.",
  },
  {
    number: "03",
    title: "People before pixels",
    text:
      "A beautiful interface still needs to make sense. We design around how people actually read, navigate and make decisions.",
  },
  {
    number: "04",
    title: "Built to perform",
    text:
      "Design and development happen together. The final experience should look refined, feel responsive and perform well.",
  },
];

const work = [
  {
    number: "01",
    name: "Allure Decor",
    type: "Interior Design",
    description:
      "A refined digital presence designed to showcase an interior design studio through atmosphere, imagery and editorial composition.",
    url: "https://allure-decor-by-creasha.vercel.app/",
  },
  {
    number: "02",
    name: "FORMA",
    type: "Interior Design",
    description:
      "A contemporary portfolio experience focused on visual storytelling, spatial rhythm and a premium presentation.",
    url: "https://forma-interior.netlify.app/",
  },
  {
    number: "03",
    name: "DJ Travels",
    type: "Travel",
    description:
      "A modern travel experience designed to make destinations, journeys and travel services feel approachable and engaging.",
    url: "https://dj-travels.netlify.app/",
  },
  {
    number: "04",
    name: "Veyr Design",
    type: "Design Studio",
    description:
      "A minimal digital experience built around strong typography, visual balance and a clear creative identity.",
    url: "https://veyr-design.netlify.app/",
  },
];

const capabilities = [
  "Responsive website design",
  "Landing pages",
  "Portfolio websites",
  "Business websites",
  "UI / UX design",
  "Figma design",
  "Figma to React",
  "React development",
  "Frontend development",
  "Website redesign",
  "Creative direction",
  "Digital product design",
];

export default function Studio() {
  useEffect(() => {
    document.title =
      "Layoutly Studio — Web Design, UI/UX & Development Studio";

    const setMeta = (name, content, attribute = "name") => {
      let element = document.querySelector(
        `meta[${attribute}="${name}"]`
      );

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    setMeta(
      "description",
      "Layoutly is an independent web design and development studio creating premium websites, UI/UX experiences, React websites and digital products for ambitious brands."
    );

    setMeta(
      "keywords",
      "web design studio, web design agency, UI UX design studio, freelance web designer, web developer, frontend developer, React developer, custom website design, website redesign, Figma to React, digital product design, creative web design"
    );

    setMeta("robots", "index, follow");
    setMeta("author", "Layoutly");

    setMeta(
      "og:title",
      "Layoutly Studio — Web Design, UI/UX & Development Studio",
      "property"
    );

    setMeta(
      "og:description",
      "Layoutly creates premium websites, interfaces and digital experiences through strategy, design and modern development.",
      "property"
    );

    setMeta("og:type", "website", "property");

    setMeta(
      "og:url",
      "https://layoutlyweb.netlify.app/studio",
      "property"
    );

    setMeta(
      "twitter:card",
      "summary_large_image"
    );

    setMeta(
      "twitter:title",
      "Layoutly Studio — Web Design, UI/UX & Development Studio"
    );

    setMeta(
      "twitter:description",
      "Premium web design, UI/UX and frontend development by Layoutly."
    );

    let canonical = document.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute(
      "href",
      "https://layoutlyweb.netlify.app/studio"
    );

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Layoutly",
      url: "https://layoutlyweb.netlify.app",
      description:
        "Independent web design and development studio specializing in premium websites, UI/UX design, React development and digital experiences.",
      areaServed: "Worldwide",
      serviceType: [
        "Web Design",
        "UI/UX Design",
        "Frontend Development",
        "React Development",
        "Website Development",
        "Creative Direction",
        "Digital Product Design",
      ],
    };

    let schema = document.querySelector(
      'script[data-page-schema="studio"]'
    );

    if (!schema) {
      schema = document.createElement("script");
      schema.type = "application/ld+json";
      schema.setAttribute(
        "data-page-schema",
        "studio"
      );
      document.head.appendChild(schema);
    }

    schema.textContent = JSON.stringify(structuredData);

    return () => {
      document.title = "Layoutly";
    };
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#0B2430] text-white">
      {/* =========================
          BACKGROUND
      ========================== */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-[#173D4B]/30 blur-[150px]" />

        <div className="absolute top-[40%] -left-48 h-[500px] w-[500px] rounded-full bg-[#123744]/25 blur-[140px]" />

        <div className="absolute bottom-[-15%] right-[-10%] h-[550px] w-[550px] rounded-full bg-[#173D4B]/20 blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      
      {/* =========================
          HERO
      ========================== */}
      <section className="relative z-10">
        <div className="mx-auto max-w-[1500px] px-6 pb-28 pt-20 lg:px-10 lg:pb-40 lg:pt-28">
          <div className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-white/40">
            <span className="h-px w-10 bg-white/25" />
            The Studio
          </div>

          <div className="grid gap-14 lg:grid-cols-[1.35fr_.65fr] lg:items-end">
            <div>
              <h1
                className="max-w-6xl text-[clamp(4.5rem,10vw,10rem)] leading-[0.8] tracking-[-0.06em]"
                style={{
                  fontFamily: "'Instrument Serif', serif",
                }}
              >
                Digital
                <br />
                <span className="text-white/35">
                  things,
                </span>
                <br />
                <em>beautifully</em>
                <br />
                made.
              </h1>
            </div>

            <div className="max-w-md lg:pb-3">
              <p className="text-lg leading-8 text-white/60">
                Layoutly is an independent digital studio creating
                websites, interfaces and digital experiences for
                brands that care about how they show up online.
              </p>

              <p className="mt-5 text-sm leading-7 text-white/35">
                Strategy, design and development come together to
                create digital experiences that are clear,
                memorable and built with intention.
              </p>

              <Link
                to="/our-work"
                className="group mt-8 inline-flex items-center gap-3 text-sm"
              >
                Explore our work

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition group-hover:bg-white group-hover:text-[#0B2430]">
                  <ArrowRight size={15} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          INTRODUCTION
      ========================== */}
      <section className="relative z-10 border-y border-white/10">
        <div className="mx-auto grid max-w-[1500px] lg:grid-cols-[0.35fr_1fr]">
          <div className="border-b border-white/10 p-6 text-xs uppercase tracking-[0.2em] text-white/35 lg:border-b-0 lg:border-r lg:p-10">
            Who we are
          </div>

          <div className="p-6 lg:p-16">
            <p
              className="max-w-5xl text-[clamp(2.5rem,5vw,5.8rem)] leading-[0.95] tracking-[-0.045em]"
              style={{
                fontFamily: "'Instrument Serif', serif",
              }}
            >
              We believe the best digital work
              <span className="text-white/35">
                {" "}
                feels obvious.
              </span>
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <p className="text-sm leading-7 text-white/45">
                Not because it was simple to make, but because the
                thinking behind it was clear. The right structure,
                the right words, the right visual language and the
                right technology all working together.
              </p>

              <p className="text-sm leading-7 text-white/45">
                Layoutly works at the intersection of design and
                development. We create digital identities and
                experiences that look considered while remaining
                useful, responsive and practical.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          BELIEF
      ========================== */}
      <section className="relative z-10">
        <div className="mx-auto max-w-[1500px] px-6 py-28 lg:px-10 lg:py-36">
          <div className="grid gap-14 lg:grid-cols-[0.55fr_1.45fr]">
            <div>
              <div className="mb-5 text-xs uppercase tracking-[0.22em] text-white/35">
                What we believe
              </div>

              <div className="max-w-sm text-sm leading-7 text-white/40">
                Good design is not simply about making something
                look better. It is about making the right thing
                easier to understand.
              </div>
            </div>

            <div>
              <h2
                className="max-w-5xl text-[clamp(3rem,6vw,6.5rem)] leading-[0.9] tracking-[-0.05em]"
                style={{
                  fontFamily: "'Instrument Serif', serif",
                }}
              >
                A website should not simply
                <span className="text-white/30">
                  {" "}
                  exist.
                </span>
                <br />
                It should communicate,
                <br />
                connect and leave a
                <span className="italic">
                  {" "}
                  feeling.
                </span>
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          SERVICES
      ========================== */}
      <section className="relative z-10 border-y border-white/10 bg-[#071D27]/35">
        <div className="mx-auto max-w-[1500px] px-6 py-28 lg:px-10 lg:py-36">
          <div className="mb-16 grid gap-8 lg:grid-cols-[1fr_.55fr] lg:items-end">
            <div>
              <div className="mb-5 text-xs uppercase tracking-[0.22em] text-white/35">
                Capabilities
              </div>

              <h2
                className="text-5xl tracking-[-0.04em] md:text-7xl"
                style={{
                  fontFamily: "'Instrument Serif', serif",
                }}
              >
                What we do.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-white/40 lg:text-right">
              From the first idea to the final interaction, we
              combine creative thinking with practical digital
              execution.
            </p>
          </div>

          <div className="border-t border-white/10">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.number}
                  className="group grid gap-6 border-b border-white/10 py-9 transition hover:bg-white/[0.025] md:grid-cols-[80px_1fr_1fr_60px] md:items-center md:gap-8"
                >
                  <span className="text-xs text-white/25">
                    {service.number}
                  </span>

                  <h3
                    className="text-3xl tracking-[-0.03em] md:text-5xl"
                    style={{
                      fontFamily: "'Instrument Serif', serif",
                    }}
                  >
                    {service.title}
                  </h3>

                  <p className="max-w-lg text-sm leading-7 text-white/40">
                    {service.description}
                  </p>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/40 transition group-hover:border-white/30 group-hover:text-white md:justify-self-end">
                    <Icon
                      size={17}
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================
          PROCESS
      ========================== */}
      <section className="relative z-10">
        <div className="mx-auto max-w-[1500px] px-6 py-28 lg:px-10 lg:py-36">
          <div className="mb-16">
            <div className="mb-5 text-xs uppercase tracking-[0.22em] text-white/35">
              The process
            </div>

            <div className="grid gap-8 lg:grid-cols-[1fr_.6fr] lg:items-end">
              <h2
                className="text-5xl leading-[0.9] tracking-[-0.04em] md:text-7xl"
                style={{
                  fontFamily: "'Instrument Serif', serif",
                }}
              >
                From first thought
                <br />
                to final detail.
              </h2>

              <p className="max-w-md text-sm leading-7 text-white/40">
                Every project is different, but our approach remains
                intentional. We move from understanding to
                direction, from direction to design and from design
                to a finished experience.
              </p>
            </div>
          </div>

          <div className="grid border-t border-white/10 md:grid-cols-5">
            {process.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="border-b border-white/10 p-6 md:border-b-0 md:border-r md:p-7 md:last:border-r-0"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/25">
                      {item.number}
                    </span>

                    <Icon
                      size={17}
                      strokeWidth={1.4}
                      className="text-white/30"
                    />
                  </div>

                  <h3
                    className="mt-16 text-3xl tracking-[-0.03em]"
                    style={{
                      fontFamily: "'Instrument Serif', serif",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p className="mt-5 text-sm leading-6 text-white/35">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================
          PRINCIPLES
      ========================== */}
      <section className="relative z-10 border-y border-white/10 bg-[#071D27]/45">
        <div className="mx-auto max-w-[1500px] px-6 py-28 lg:px-10 lg:py-36">
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <div className="mb-5 text-xs uppercase tracking-[0.22em] text-white/35">
                Our approach
              </div>

              <h2
                className="max-w-md text-5xl leading-[0.9] tracking-[-0.04em] md:text-7xl"
                style={{
                  fontFamily: "'Instrument Serif', serif",
                }}
              >
                Less noise.
                <br />
                More
                <br />
                <span className="text-white/30">
                  meaning.
                </span>
              </h2>
            </div>

            <div>
              {principles.map((item) => (
                <div
                  key={item.number}
                  className="grid gap-5 border-t border-white/10 py-8 md:grid-cols-[60px_1fr_1fr]"
                >
                  <span className="text-xs text-white/25">
                    {item.number}
                  </span>

                  <h3
                    className="text-2xl tracking-[-0.025em]"
                    style={{
                      fontFamily: "'Instrument Serif', serif",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p className="text-sm leading-7 text-white/40">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          CAPABILITY CLOUD
      ========================== */}
      <section className="relative z-10">
        <div className="mx-auto max-w-[1500px] px-6 py-28 lg:px-10 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-[.6fr_1.4fr]">
            <div>
              <div className="mb-5 text-xs uppercase tracking-[0.22em] text-white/35">
                Expertise
              </div>

              <h2
                className="text-5xl leading-[0.9] tracking-[-0.04em] md:text-6xl"
                style={{
                  fontFamily: "'Instrument Serif', serif",
                }}
              >
                Built around
                <br />
                your needs.
              </h2>

              <p className="mt-7 max-w-sm text-sm leading-7 text-white/40">
                Whether you need a complete website, a focused
                landing page or a new digital direction, the work
                can be shaped around the project.
              </p>
            </div>

            <div className="flex flex-wrap content-start gap-3">
              {capabilities.map((capability) => (
                <span
                  key={capability}
                  className="rounded-full border border-white/10 bg-white/[0.035] px-5 py-3 text-sm text-white/55 backdrop-blur-xl transition hover:border-white/20 hover:text-white"
                >
                  {capability}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          SELECTED WORK
      ========================== */}
      <section className="relative z-10 border-y border-white/10 bg-[#071D27]/35">
        <div className="mx-auto max-w-[1500px] px-6 py-28 lg:px-10 lg:py-36">
          <div className="mb-14 flex items-end justify-between gap-8">
            <div>
              <div className="mb-5 text-xs uppercase tracking-[0.22em] text-white/35">
                Selected work
              </div>

              <h2
                className="text-5xl tracking-[-0.04em] md:text-7xl"
                style={{
                  fontFamily: "'Instrument Serif', serif",
                }}
              >
                Things we've made.
              </h2>
            </div>

            <Link
              to="/our-work"
              className="group hidden items-center gap-3 text-sm md:flex"
            >
              View all work

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition group-hover:bg-white group-hover:text-[#0B2430]">
                <ArrowUpRight size={15} />
              </span>
            </Link>
          </div>

          <div className="border-t border-white/10">
            {work.map((project) => (
              <a
                key={project.number}
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="group grid gap-5 border-b border-white/10 py-8 transition hover:bg-white/[0.025] md:grid-cols-[70px_180px_1fr_40px] md:items-center md:gap-8"
              >
                <span className="text-xs text-white/25">
                  {project.number}
                </span>

                <div>
                  <div
                    className="text-2xl tracking-[-0.025em]"
                    style={{
                      fontFamily: "'Instrument Serif', serif",
                    }}
                  >
                    {project.name}
                  </div>

                  <div className="mt-2 text-xs uppercase tracking-[0.15em] text-white/25">
                    {project.type}
                  </div>
                </div>

                <p className="max-w-xl text-sm leading-7 text-white/40">
                  {project.description}
                </p>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition group-hover:border-white/30 group-hover:bg-white group-hover:text-[#0B2430]">
                  <ArrowUpRight size={15} />
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10 md:hidden">
            <Link
              to="/our-work"
              className="inline-flex items-center gap-3 text-sm"
            >
              View all work
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================
          NUMBERS
      ========================== */}
      <section className="relative z-10">
        <div className="mx-auto grid max-w-[1500px] border-x border-white/10 sm:grid-cols-3">
          <div className="border-b border-white/10 p-8 sm:border-b-0 sm:border-r lg:p-12">
            <div
              className="text-6xl tracking-[-0.05em]"
              style={{
                fontFamily: "'Instrument Serif', serif",
              }}
            >
              05+
            </div>

            <div className="mt-3 text-xs uppercase tracking-[0.2em] text-white/35">
              Selected projects
            </div>
          </div>

          <div className="border-b border-white/10 p-8 sm:border-b-0 sm:border-r lg:p-12">
            <div
              className="text-6xl tracking-[-0.05em]"
              style={{
                fontFamily: "'Instrument Serif', serif",
              }}
            >
              01
            </div>

            <div className="mt-3 text-xs uppercase tracking-[0.2em] text-white/35">
              Independent studio
            </div>
          </div>

          <div className="p-8 lg:p-12">
            <div
              className="text-6xl tracking-[-0.05em]"
              style={{
                fontFamily: "'Instrument Serif', serif",
              }}
            >
              ∞
            </div>

            <div className="mt-3 text-xs uppercase tracking-[0.2em] text-white/35">
              Ideas ahead
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          CTA
      ========================== */}
      <section className="relative z-10">
        <div className="mx-auto max-w-[1500px] px-6 py-32 lg:px-10 lg:py-44">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 text-center backdrop-blur-xl md:p-16 lg:p-24">
            <div className="mb-6 text-xs uppercase tracking-[0.22em] text-white/35">
              Have something in mind?
            </div>

            <h2
              className="mx-auto max-w-5xl text-6xl leading-[0.88] tracking-[-0.05em] md:text-8xl"
              style={{
                fontFamily: "'Instrument Serif', serif",
              }}
            >
              Let’s make something
              <span className="text-white/30">
                {" "}
                worth seeing.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/40">
              Tell us what you're building, where you're starting
              from and where you want to go. We'll figure out the
              rest together.
            </p>

            <Link
              to="/contact"
              className="group mt-10 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white px-7 py-4 text-sm font-medium text-[#0B2430] transition hover:bg-white/90"
            >
              Start a project

              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </section>

      
    </main>
  );
}
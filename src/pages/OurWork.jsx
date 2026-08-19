import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Layers3,
  Sparkles,
} from "lucide-react";

/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [
  {
    id: "aura-botanicals",
    title: "Aura Retail",
    description:
      "A scalable frontend architecture for a high-volume boutique fashion retailer.",
    category: "E-commerce",
    filter: "Frontend",
    metric: "+45% Conversion",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCsg1TSJ6w7Pcvwr5VK1J2S-9MGCFrG2mLlEFzNQv6lUgb2Uv3jByXaVYkuvngNytAT-ecS80iFKzu1AY9Yvik_cqNCyRj0CgeNMT8JFN6cwFcodhKnCbGv1VsgEks-Pnj6ouAQXdyT5HgBBEIyMlXGlY4uPTtvQfQ_rc4INZIFPkGrajFzgWyQbt6rU2aAR0mUzU35qRKHn4v7OrNld-psVBHnTNkhPuoZjn1v4vq73UiFQHTiAbxN",
  },
  {
    id: "ledgerflow",
    title: "LedgerFlow",
    description:
      "Secure, responsive web application for B2B financial reconciliation.",
    category: "FinTech",
    filter: "Full-Stack",
    metric: "Zero Downtime",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBlkmlKGGn6kvvM7nbv-C0iDCPnfHEb2gS7Zdd1j2II8tExEdcI7N2KucXLpRvZ_jCzJx7MS6oBi9QZIxdfhMlMfM20jpxXfi4MfguiXosi2LuWFLvXwmYW-Crxyb2fB7bqYRm860B_dw0sLJbXvM1e4gtSahlTX1MHrdkns8XIZH9cvXJxZxoP8lK4QFqRzffUEbnUS_X9LnlEGh4O0Bczm7gx7FF-Q5Q3vy1VYwU2TnCD7AIbjsMQ",
  },
  {
    id: "vitaconnect",
    title: "VitaConnect",
    description:
      "Rapid MVP development for a telehealth patient onboarding platform.",
    category: "Healthcare MVP",
    filter: "MVP",
    metric: "4 Weeks to Launch",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBdGOzRHe9ZPwlSWQApaMowm2G332aDWHmKW7GXPhE_obJ9dDdkGvQJOibreAqfZKo3j2SvA5naQ4cuUM9AZn9_yUybyr95Hr4EXoWvGvtyFIymiFIVNnMfW7xprApdnciGuS_eS593k4NeynjvQn1x2SWmVgXg18l4Tg0_Y_0cZwcWZ2KRycQjblK220XcS0jRqBuh4jGZ_1cKdnbM8vBGpUeIThXxDSCczdd-3srrE5vLqC_2n_Ex",
  },
  {
    id: "nexus-ops",
    title: "Nexus Ops",
    description:
      "Full-stack rebuild of a cloud infrastructure management tool.",
    category: "SaaS",
    filter: "Full-Stack",
    metric: "3x Faster Load",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDapKuczb7hVBTXhtSC1KTj5-oFCnz1ylNWX18PgZf-gW3bYA1xMVB8udcsAG1Bj1d6nxRZzw1boate5n28cAF8XKhwxVoKhMLImqBFf6_1uSVAnYy9DambkW9Hqs2SMBvah7ZPohMEhCFFZQAUQP64XRAnSs3FEG5uqPrmCrEb99o-DPg2-d9m8YOCJFvlClXtEjh6Ps8jCxll6ObGGBy906K1_4MY9zmBF4hrawtFKC5OdKiXGh81",
  },
  {
    id: "lumina-systems",
    title: "Lumina Systems",
    description:
      "Comprehensive brand identity and component library for a tech consultancy.",
    category: "Brand Design",
    filter: "Design",
    metric: "System Adoption",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDZg0EEsD2yddV2oXOyxSUwf4zj0YaY7YfQrLK96aKxckddqeqX2KxkZz4dQr3OkSVSlPRwy0Xw_Vtiqg-Zf7rKGsqrSeFqdNUj8NIUMMP11qb3uyTk4joKH-XmDP_-yHlL0cPCAeGRUUyf-k4FPD632gPL0hjn1fhYrJCnXnIiD1rUDkEEc1iW_ik3yN17TcvcSnYJHfIAwATHk6O32IRJWku1xvwnVaV1dIdS6R6enF-sWeJ9BMya",
  },
  {
    id: "freightflow",
    title: "FreightFlow",
    description:
      "Real-time tracking interface and admin dashboard for supply chain management.",
    category: "Logistics",
    filter: "Frontend",
    metric: "Award Winning",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAX6N0chS5vK9QCPeWPeMA8i-qYKcAh9AApH6LCPWgwGieLD9FaxEUjzZymVXBAtGilSMkB4qRoFzzMc5uta_GdPLWmeVGIXKi17XysUcNaN-y-qOswzUF07Ne3hSJcFFHpxo4rIBhTzx8HWG0F2r9BTUHkgP8Kulzy_tUyuKA8RwAW-vVYQlaxpptcWb2_NWkYJ_Bg0c4Fmf0AvCDmYLFNski_-_8bKrnRBDCXrQrwdIUK7Wp0MeS-",
  },
];

/* =========================================================
   FILTERS

   Kept exactly as your original.
========================================================= */

const filters = [
  "All",
  "Design",
  "Frontend",
  "Full-Stack",
  "MVP",
];

/* =========================================================
   PROJECT CARD
========================================================= */

const ProjectCard = ({ project, index }) => {
  return (
    <article className="our-work-card group relative overflow-hidden">
      {/* =====================================================
          IMAGE
      ====================================================== */}

      <div className="relative h-64 overflow-hidden bg-[#08100C]">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="
            our-work-image
            h-full
            w-full
            object-cover
            grayscale-[15%]
          "
        />

        {/* Image overlay */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-[#030605]
            via-[#030605]/20
            to-transparent
            opacity-80
          "
        />

        {/* Subtle green overlay */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[#174A34]/10
            opacity-0
            transition-opacity
            duration-200
            group-hover:opacity-100
          "
        />

        {/* Category */}

        <div
          className="
            absolute
            left-4
            top-4
            border
            border-white/10
            bg-[#050A07]/90
            px-3
            py-1.5
            text-[9px]
            uppercase
            tracking-[0.14em]
            text-[#C2CEC7]
          "
        >
          {project.category}
        </div>

        {/* Number */}

        <div
          className="
            absolute
            right-4
            top-4
            font-mono
            text-[9px]
            tracking-[0.2em]
            text-white/50
          "
        >
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* View icon */}

        <div
          className="
            our-work-view-icon
            absolute
            bottom-4
            right-4
            flex
            h-10
            w-10
            items-center
            justify-center
            border
            border-[#739785]/30
            bg-[#07100B]/90
            text-[#9CB5A7]
          "
        >
          <ArrowUpRight
            className="h-4 w-4"
            strokeWidth={1.3}
          />
        </div>
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 flex flex-col p-6">
        {/* Title */}

        <div className="flex items-start justify-between gap-4">
          <h3
            className="
              font-serif
              text-2xl
              text-[#E1E9E4]
              transition-colors
              duration-200
              group-hover:text-[#B3C8BB]
            "
          >
            {project.title}
          </h3>

          <span
            className="
              mt-1
              h-1.5
              w-1.5
              shrink-0
              rounded-full
              bg-[#5F896F]
            "
          />
        </div>

        {/* Description */}

        <p
          className="
            mt-3
            min-h-[72px]
            text-sm
            leading-7
            text-[#68766F]
          "
        >
          {project.description}
        </p>

        {/* Divider */}

        <div className="my-5 h-px bg-white/[0.06]" />

        {/* Bottom */}

        <div className="flex items-center justify-between gap-3">
          {/* Metric */}

          <div className="flex items-center gap-2">
            <span
              className="
                h-1.5
                w-1.5
                shrink-0
                rounded-full
                bg-[#6D9B80]
              "
            />

            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.12em]
                text-[#71877C]
              "
            >
              {project.metric}
            </span>
          </div>

          {/* Case study */}

          <Link
            to={`/case-study/${project.id}`}
            className="
              group/link
              inline-flex
              items-center
              gap-2
              text-[9px]
              font-medium
              uppercase
              tracking-[0.13em]
              text-[#81988C]
              transition-colors
              duration-150
              hover:text-[#B2C6BA]
            "
          >
            View Case Study

            <ArrowRight
              className="
                h-3.5
                w-3.5
                transition-transform
                duration-150
                group-hover/link:translate-x-1
              "
              strokeWidth={1.3}
            />
          </Link>
        </div>
      </div>

      {/* Bottom accent */}

      <span
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-px
          w-0
          bg-gradient-to-r
          from-[#4D765E]
          via-[#6C977E]
          to-transparent
          transition-[width]
          duration-200
          group-hover:w-full
        "
      />
    </article>
  );
};

/* =========================================================
   OUR WORK
========================================================= */

const OurWork = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  /* -------------------------------------------------------
     useMemo prevents filtering work on unrelated renders.
  ------------------------------------------------------- */

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter(
      (project) => project.filter === activeFilter
    );
  }, [activeFilter]);

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
      {/* =====================================================
          BACKGROUND

          PERFORMANCE:
          - No Framer Motion
          - No infinite animation
          - No animated blur
          - No rotating rings
      ====================================================== */}

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

        {/* Static green glow */}

        <div
          className="
            our-work-glow
            absolute
            left-[-180px]
            top-[-150px]
            h-[550px]
            w-[550px]
            rounded-full
            bg-[#0D3A29]/10
          "
        />

        {/* Static blue-green glow */}

        <div
          className="
            our-work-glow
            absolute
            right-[-220px]
            top-[35%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#092C35]/[0.08]
          "
        />

        {/* Static bottom glow */}

        <div
          className="
            our-work-glow
            absolute
            bottom-[-250px]
            left-[25%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#10442E]/[0.08]
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
          px-6
          pb-14
          pt-32
          md:px-10
          md:pt-40
        "
      >
        <div className="mx-auto max-w-7xl">

          {/* Eyebrow */}

          <div
            className="
              our-work-enter
              inline-flex
              items-center
              gap-2
              border
              border-[#41644F]/30
              bg-[#08110C]
              px-4
              py-2
              text-[10px]
              uppercase
              tracking-[0.3em]
              text-[#719783]
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#639176]
              "
            />

            Selected Work
          </div>

          {/* Heading */}

          <h1
            className="
              our-work-enter
              our-work-enter-delay-1
              mt-7
              max-w-5xl
              font-serif
              text-5xl
              font-medium
              leading-[0.98]
              tracking-[-0.045em]
              text-[#EDF2EF]
              sm:text-6xl
              md:text-7xl
            "
          >
            Real Start-ups.

            <br />

            <span
              className="
                bg-gradient-to-r
                from-[#A3BBAE]
                via-[#67937B]
                to-[#3E624F]
                bg-clip-text
                text-transparent
              "
            >
              Real Results.
            </span>
          </h1>

          {/* Description */}

          <div
            className="
              our-work-enter
              our-work-enter-delay-2
              mt-7
              flex
              flex-col
              gap-6
              md:flex-row
              md:items-end
              md:justify-between
            "
          >
            <p
              className="
                max-w-2xl
                text-base
                leading-8
                text-[#707D76]
                md:text-lg
              "
            >
              Explore our portfolio of high-performance
              digital products designed and engineered for
              modern businesses. We combine technical
              accuracy with aesthetic refinement.
            </p>

            {/* Project count */}

            <div
              className="
                flex
                items-center
                gap-4
                border-l
                border-[#3F5D4B]/30
                pl-5
              "
            >
              <div>
                <p
                  className="
                    font-serif
                    text-3xl
                    text-[#DDE7E1]
                  "
                >
                  {projects.length}
                </p>

                <p
                  className="
                    mt-1
                    text-[9px]
                    uppercase
                    tracking-[0.2em]
                    text-[#52645A]
                  "
                >
                  Selected Projects
                </p>
              </div>

              <Layers3
                className="h-6 w-6 text-[#5F896F]"
                strokeWidth={1.2}
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FILTERS
      ====================================================== */}

      <section
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-6
          pb-12
          md:px-10
        "
      >
        <div
          className="
            flex
            items-center
            gap-2
            overflow-x-auto
            pb-3
            scrollbar-hide
          "
        >
          {/* Filter label */}

          <div
            className="
              mr-2
              flex
              shrink-0
              items-center
              gap-2
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-[#52655A]
            "
          >
            <BriefcaseBusiness
              className="h-3.5 w-3.5"
              strokeWidth={1.3}
            />

            Filter
          </div>

          {/* Filter buttons */}

          {filters.map((filter) => {
            const active = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={active}
                className={`
                  relative
                  flex-shrink-0
                  border
                  px-5
                  py-2.5
                  text-[10px]
                  uppercase
                  tracking-[0.14em]
                  transition-colors
                  duration-150
                  ${
                    active
                      ? `
                        border-[#4E765F]/50
                        bg-[#163428]
                        text-[#DDE9E1]
                        shadow-[0_8px_25px_rgba(22,52,40,0.18)]
                      `
                      : `
                        border-white/[0.07]
                        bg-[#080E0B]
                        text-[#64736B]
                        hover:border-[#466A55]/40
                        hover:bg-[#0B1510]
                        hover:text-[#9AADA3]
                      `
                  }
                `}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </section>

      {/* =====================================================
          PROJECT GRID
      ====================================================== */}

      <section
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-6
          pb-28
          md:px-10
        "
      >
        {filteredProjects.length > 0 ? (
          <div
            className="
              grid
              grid-cols-1
              gap-5
              md:grid-cols-2
              lg:grid-cols-3
            "
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        ) : (
          /* =================================================
             EMPTY STATE
          ================================================== */

          <div
            className="
              border
              border-white/[0.06]
              bg-[#070D0A]
              px-6
              py-20
              text-center
            "
          >
            <Layers3
              className="
                mx-auto
                h-8
                w-8
                text-[#4F6E5C]
              "
              strokeWidth={1.2}
            />

            <p
              className="
                mt-5
                font-serif
                text-2xl
                text-[#C8D4CD]
              "
            >
              No projects found
            </p>

            <p
              className="
                mt-2
                text-sm
                text-[#637168]
              "
            >
              No projects currently match this filter.
            </p>

            <button
              type="button"
              onClick={() => setActiveFilter("All")}
              className="
                mt-6
                inline-flex
                items-center
                gap-2
                border
                border-[#45684F]/40
                bg-[#10271D]
                px-5
                py-3
                text-[10px]
                uppercase
                tracking-[0.15em]
                text-[#91AA9B]
                transition-colors
                duration-150
                hover:border-[#638A73]/50
                hover:bg-[#163428]
              "
            >
              <Check
                className="h-3.5 w-3.5"
                strokeWidth={1.4}
              />

              View All Projects
            </button>
          </div>
        )}
      </section>

      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}

      <section
        className="
          relative
          z-10
          border-t
          border-white/[0.05]
          bg-[#050907]
          px-6
          py-24
          md:px-10
        "
      >
        <div className="mx-auto max-w-5xl">
          <div
            className="
              relative
              overflow-hidden
              border
              border-[#405F4D]/25
              bg-[#070D0A]
              p-10
              text-center
              md:p-14
            "
          >
            {/* Static glow */}

            <div
              className="
                our-work-cta-glow
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-80
                w-80
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#0D412D]/[0.06]
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
                h-6
                w-6
                text-[#65947A]
              "
              strokeWidth={1.3}
            />

            <h2
              className="
                relative
                mt-5
                font-serif
                text-3xl
                text-[#E5ECE8]
                md:text-4xl
              "
            >
              Your Project Could Be Next.
            </h2>

            <p
              className="
                relative
                mx-auto
                mt-3
                max-w-xl
                text-sm
                leading-7
                text-[#68766F]
              "
            >
              Have an idea worth building? Let's turn it
              into a digital experience that actually moves
              your business forward.
            </p>

            <Link
              to="/contact"
              className="
                group
                relative
                mt-7
                inline-flex
                items-center
                gap-3
                border
                border-[#4C765F]/40
                bg-[#153428]
                px-7
                py-4
                text-sm
                font-medium
                text-[#E2EAE5]
                shadow-[0_12px_35px_rgba(15,58,40,0.18)]
                transition-transform
                duration-200
                hover:-translate-y-1
                hover:border-[#719B84]/50
                hover:bg-[#1A3E30]
              "
            >
              Start a Project

              <ArrowRight
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-200
                  group-hover:translate-x-1
                "
                strokeWidth={1.4}
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OurWork;
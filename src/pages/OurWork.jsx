import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Layers3,
  Sparkles,
} from "lucide-react";

/* =========================================================
   REAL PROJECTS
========================================================= */

const projects = [
  {
    id: "allure-decor",
    title: "Allure Decor",
    description:
      "A premium interior design experience crafted to showcase refined spaces, elegant storytelling, and a strong visual identity.",
    category: "Interior Design",
    filter: "Design",
    metric: "Luxury Digital Experience",
    url: "https://allure-decor-by-creasha.vercel.app/",
    label: "01",
    accent: "from-[#8A7663] via-[#6C5B4D] to-[#263842]",
  },

  {
    id: "forma",
    title: "FORMA",
    description:
      "A contemporary interior design website focused on minimalism, spatial storytelling, and a sophisticated editorial presentation.",
    category: "Interior Design",
    filter: "Design",
    metric: "Editorial Web Design",
    url: "https://forma-interior.netlify.app/",
    label: "02",
    accent: "from-[#7D8581] via-[#53635F] to-[#23343D]",
  },

  {
    id: "dj-travels",
    title: "DJ Travels",
    description:
      "A travel-focused digital experience designed to make destinations, journeys, and travel discovery feel immersive and effortless.",
    category: "Travel",
    filter: "Frontend",
    metric: "Travel Experience",
    url: "https://dj-travels.netlify.app/",
    label: "03",
    accent: "from-[#668F9A] via-[#3E6978] to-[#102E3B]",
  },

  {
    id: "veyr-design",
    title: "Veyr Design",
    description:
      "A bold design-led web experience built around visual hierarchy, modern typography, and a distinctive creative direction.",
    category: "Design Studio",
    filter: "Design",
    metric: "Creative Direction",
    url: "https://veyr-design.netlify.app/",
    label: "04",
    accent: "from-[#8E9691] via-[#596A69] to-[#263C45]",
  },

  {
    id: "layoutly",
    title: "Layoutly",
    description:
      "Our own digital home — a cinematic portfolio and studio experience built to represent how we approach design, development, and digital products.",
    category: "Studio",
    filter: "Frontend",
    metric: "Our Digital Home",
    url: "https://layoutlyweb.netlify.app/",
    label: "05",
    accent: "from-[#759BA5] via-[#456E7A] to-[#102D39]",
  },
];

/* =========================================================
   FILTERS
========================================================= */

const filters = [
  "All",
  "Design",
  "Frontend",
];

/* =========================================================
   PROJECT PREVIEW
========================================================= */

const ProjectPreview = ({ project }) => {
  return (
    <div className="relative h-[270px] overflow-hidden bg-[#081A23]">
      {/* Atmospheric preview background */}

      <div
        className={`
          absolute
          inset-0
          bg-gradient-to-br
          ${project.accent}
        `}
      />

      {/* Dark cinematic overlay */}

      <div className="absolute inset-0 bg-[#06151D]/35" />

      {/* Editorial light */}

      <div
        className="
          absolute
          -right-24
          -top-24
          h-72
          w-72
          rounded-full
          bg-white/[0.08]
          blur-3xl
        "
      />

      {/* Browser frame */}

      <div
        className="
          absolute
          left-[7%]
          right-[7%]
          top-[13%]
          overflow-hidden
          rounded-[3px]
          border
          border-white/[0.16]
          bg-[#081A23]/75
          shadow-[0_30px_70px_rgba(0,0,0,0.35)]
          backdrop-blur-md
          transition-transform
          duration-700
          group-hover:-translate-y-2
          group-hover:scale-[1.025]
        "
      >
        {/* Browser bar */}

        <div
          className="
            flex
            h-8
            items-center
            gap-1.5
            border-b
            border-white/[0.08]
            bg-black/20
            px-3
          "
        >
          <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/15" />

          <div
            className="
              ml-3
              h-3
              flex-1
              rounded-sm
              border
              border-white/[0.06]
              bg-white/[0.035]
            "
          />
        </div>

        {/* Website preview */}

        <div className="relative h-[185px] overflow-hidden">
          {/* Fake visual composition */}

          <div className="absolute inset-0 bg-[#091D27]/30" />

          <div
            className="
              absolute
              left-[8%]
              top-[15%]
              h-px
              w-[34%]
              bg-white/50
            "
          />

          <div
            className="
              absolute
              left-[8%]
              top-[27%]
              h-3
              w-[42%]
              rounded-sm
              bg-white/70
            "
          />

          <div
            className="
              absolute
              left-[8%]
              top-[38%]
              h-2
              w-[27%]
              rounded-sm
              bg-white/30
            "
          />

          <div
            className="
              absolute
              left-[8%]
              top-[57%]
              h-7
              w-20
              rounded-full
              border
              border-white/30
              bg-white/[0.06]
            "
          />

          <div
            className="
              absolute
              bottom-[10%]
              right-[8%]
              h-[72%]
              w-[38%]
              rounded-[2px]
              border
              border-white/[0.12]
              bg-white/[0.07]
            "
          />

          <div
            className="
              absolute
              bottom-[17%]
              right-[15%]
              h-[45%]
              w-[23%]
              bg-white/[0.08]
            "
          />

          {/* Project title */}

          <div
            className="
              absolute
              bottom-5
              left-6
              max-w-[65%]
              font-serif
              text-2xl
              leading-none
              tracking-[-0.03em]
              text-white/90
              sm:text-3xl
            "
          >
            {project.title}
          </div>
        </div>
      </div>

      {/* Category */}

      <div
        className="
          absolute
          left-4
          top-4
          z-20
          border
          border-white/[0.14]
          bg-[#06151D]/60
          px-3
          py-1.5
          backdrop-blur-md
          text-[9px]
          uppercase
          tracking-[0.16em]
          text-white/70
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
          z-20
          font-mono
          text-[9px]
          tracking-[0.2em]
          text-white/45
        "
      >
        {project.label}
      </div>

      {/* External icon */}

      <div
        className="
          absolute
          bottom-4
          right-4
          z-20
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          border
          border-white/[0.15]
          bg-[#06151D]/65
          text-white/70
          backdrop-blur-md
          transition-all
          duration-300
          group-hover:border-white/30
          group-hover:bg-white/[0.1]
          group-hover:text-white
        "
      >
        <ArrowUpRight
          className="h-4 w-4"
          strokeWidth={1.3}
        />
      </div>
    </div>
  );
};

/* =========================================================
   PROJECT CARD
========================================================= */

const ProjectCard = ({ project }) => {
  return (
    <article
      className="
        group
        relative
        overflow-hidden
        border
        border-white/[0.08]
        bg-[#081B25]/70
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-white/[0.14]
        hover:bg-[#0A202B]/80
      "
    >
      {/* Preview */}

      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.title}`}
        className="block"
      >
        <ProjectPreview project={project} />
      </a>

      {/* Content */}

      <div className="relative z-10 p-6">
        {/* Title */}

        <div className="flex items-start justify-between gap-5">
          <h3
            className="
              font-serif
              text-3xl
              leading-none
              tracking-[-0.035em]
              text-[#EDF1F0]
              transition-colors
              duration-300
              group-hover:text-white
            "
          >
            {project.title}
          </h3>

          <span
            className="
              mt-1.5
              h-1.5
              w-1.5
              shrink-0
              rounded-full
              bg-[#9FBAC0]
              shadow-[0_0_12px_rgba(159,186,192,0.35)]
            "
          />
        </div>

        {/* Description */}

        <p
          className="
            mt-4
            min-h-[84px]
            text-sm
            leading-7
            text-white/40
          "
        >
          {project.description}
        </p>

        {/* Divider */}

        <div className="my-6 h-px bg-white/[0.07]" />

        {/* Bottom */}

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#9FBAC0]/80
              "
            />

            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.13em]
                text-white/35
              "
            >
              {project.metric}
            </span>
          </div>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group/link
              inline-flex
              items-center
              gap-2
              text-[9px]
              font-medium
              uppercase
              tracking-[0.16em]
              text-[#A8C1C7]
              transition-colors
              duration-300
              hover:text-white
            "
          >
            View Project

            <ArrowUpRight
              className="
                h-3.5
                w-3.5
                transition-transform
                duration-300
                group-hover/link:-translate-y-0.5
                group-hover/link:translate-x-0.5
              "
              strokeWidth={1.3}
            />
          </a>
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
          from-[#9FBAC0]
          via-[#6D929B]
          to-transparent
          transition-[width]
          duration-500
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
        bg-[#0B2430]
        text-white
      "
    >
      {/* =====================================================
          CINEMATIC BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Editorial grid */}

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255,255,255,0.7) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,0.7) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Atmospheric light */}

        <div
          className="
            absolute
            left-[-180px]
            top-[-160px]
            h-[620px]
            w-[620px]
            rounded-full
            bg-[#729BA5]/[0.07]
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            right-[-240px]
            top-[32%]
            h-[650px]
            w-[650px]
            rounded-full
            bg-[#163C4B]/60
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            bottom-[-320px]
            left-[25%]
            h-[650px]
            w-[650px]
            rounded-full
            bg-[#071923]/90
            blur-[120px]
          "
        />

        {/* Editorial vertical lines */}

        <div
          className="
            absolute
            left-[7.5%]
            top-0
            hidden
            h-full
            w-px
            bg-white/[0.035]
            lg:block
          "
        />

        <div
          className="
            absolute
            right-[7.5%]
            top-0
            hidden
            h-full
            w-px
            bg-white/[0.035]
            lg:block
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
          sm:pt-36
          md:px-10
          md:pb-16
          md:pt-40
        "
      >
        <div className="mx-auto max-w-7xl">
          {/* Eyebrow */}

          <div
            className="
              inline-flex
              items-center
              gap-2.5
              rounded-full
              border
              border-white/[0.12]
              bg-white/[0.035]
              px-4
              py-2
              backdrop-blur-md
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#9FBAC0]
                shadow-[0_0_12px_rgba(159,186,192,0.55)]
              "
            />

            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-white/55
              "
            >
              Selected Work
            </span>
          </div>

          {/* Heading */}

          <h1
            className="
              mt-8
              max-w-5xl
              font-serif
              text-[3.5rem]
              font-medium
              leading-[0.9]
              tracking-[-0.055em]
              text-[#F2F4F3]
              sm:text-6xl
              md:text-8xl
              lg:text-[7rem]
            "
          >
            Work that
            <br />
            <span className="text-[#9FBAC0]">
              speaks for itself.
            </span>
          </h1>

          {/* Description + Count */}

          <div
            className="
              mt-8
              flex
              flex-col
              gap-7
              md:flex-row
              md:items-end
              md:justify-between
            "
          >
            <p
              className="
                max-w-2xl
                text-sm
                leading-7
                text-white/45
                md:text-base
                md:leading-8
              "
            >
              A selection of real websites we've designed and
              built for brands, businesses, and our own studio.
              Every project starts with a clear idea and ends
              with a digital experience.
            </p>

            {/* Project count */}

            <div
              className="
                flex
                items-center
                gap-4
                border-l
                border-white/[0.12]
                pl-5
              "
            >
              <div>
                <p
                  className="
                    font-serif
                    text-4xl
                    leading-none
                    text-[#E8EEED]
                  "
                >
                  {projects.length}
                </p>

                <p
                  className="
                    mt-2
                    text-[8px]
                    uppercase
                    tracking-[0.22em]
                    text-white/30
                  "
                >
                  Live Projects
                </p>
              </div>

              <Layers3
                className="h-6 w-6 text-[#8DAAB1]"
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
          pb-10
          md:px-10
        "
      >
        <div
          className="
            flex
            items-center
            gap-2
            overflow-x-auto
            pb-2
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
              text-white/30
            "
          >
            <BriefcaseBusiness
              className="h-3.5 w-3.5"
              strokeWidth={1.2}
            />

            Filter
          </div>

          {/* Filters */}

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
                  shrink-0
                  rounded-full
                  border
                  px-5
                  py-2.5
                  text-[9px]
                  uppercase
                  tracking-[0.15em]
                  transition-all
                  duration-300
                  ${
                    active
                      ? `
                        border-white/[0.18]
                        bg-white/[0.1]
                        text-white
                        shadow-[0_10px_30px_rgba(0,0,0,0.12)]
                      `
                      : `
                        border-white/[0.07]
                        bg-white/[0.02]
                        text-white/35
                        hover:border-white/[0.14]
                        hover:bg-white/[0.05]
                        hover:text-white/70
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
          md:pb-36
        "
      >
        {filteredProjects.length > 0 ? (
          <div
            className="
              grid
              grid-cols-1
              gap-5
              md:grid-cols-2
            "
          >
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        ) : (
          <div
            className="
              border
              border-white/[0.07]
              bg-white/[0.025]
              px-6
              py-24
              text-center
              backdrop-blur-xl
            "
          >
            <Layers3
              className="
                mx-auto
                h-8
                w-8
                text-white/25
              "
              strokeWidth={1.2}
            />

            <p
              className="
                mt-5
                font-serif
                text-3xl
                text-white/75
              "
            >
              No projects found
            </p>

            <p
              className="
                mt-2
                text-sm
                text-white/35
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
                rounded-full
                border
                border-white/[0.12]
                bg-white/[0.05]
                px-5
                py-3
                text-[9px]
                uppercase
                tracking-[0.16em]
                text-white/60
                transition-all
                duration-300
                hover:border-white/20
                hover:bg-white/[0.1]
                hover:text-white
              "
            >
              <Check
                className="h-3.5 w-3.5"
                strokeWidth={1.3}
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
          border-white/[0.07]
          bg-[#091D27]
          px-6
          py-28
          md:px-10
          md:py-36
        "
      >
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            overflow-hidden
          "
        >
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[500px]
              w-[500px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#729BA5]/[0.04]
              blur-[130px]
            "
          />
        </div>

        <div className="relative mx-auto max-w-5xl text-center">
          <Sparkles
            className="
              mx-auto
              h-6
              w-6
              text-[#A1BBC1]
            "
            strokeWidth={1.2}
          />

          <p
            className="
              mt-5
              text-[9px]
              uppercase
              tracking-[0.3em]
              text-white/30
            "
          >
            Your project could be next
          </p>

          <h2
            className="
              mt-5
              font-serif
              text-4xl
              leading-[0.92]
              tracking-[-0.045em]
              text-[#F1F3F2]
              sm:text-5xl
              md:text-6xl
            "
          >
            Let's build something
            <br />
            <span className="text-[#9FBAC0]">
              worth remembering.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-xl
              text-sm
              leading-7
              text-white/40
            "
          >
            Have an idea worth building? Let's turn it into a
            digital experience that actually represents your
            brand.
          </p>

          <a
            href="/contact"
            className="
              group
              relative
              mt-8
              inline-flex
              items-center
              gap-3
              overflow-hidden
              rounded-full
              border
              border-white/[0.16]
              bg-white/[0.08]
              px-7
              py-4
              text-sm
              font-medium
              text-white
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-white/25
              hover:bg-white/[0.13]
            "
          >
            <span
              className="
                pointer-events-none
                absolute
                inset-0
                -translate-x-full
                bg-gradient-to-r
                from-transparent
                via-white/[0.1]
                to-transparent
                transition-transform
                duration-700
                group-hover:translate-x-full
              "
            />

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
                duration-300
                group-hover:translate-x-1
              "
              strokeWidth={1.3}
            />
          </a>
        </div>
      </section>
    </main>
  );
};

export default OurWork;
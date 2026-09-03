import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Clock3,
  PenLine,
  Search,
  X,
  BookOpen,
  Sparkles,
} from "lucide-react";
import Footer from "../components/Footer";

/* =========================================================
   JOURNAL CONTENT
========================================================= */

const articles = [
  {
    number: "01",
    slug: "why-a-beautiful-website-needs-a-clear-idea",
    category: "Web Design",
    date: "September 2026",
    published: "2026-09-01",
    read: "6 min read",
    title: "Why a Beautiful Website Still Needs a Clear Idea",
    excerpt:
      "Visual design creates the first impression, but clarity is what helps visitors understand a brand, trust it and take action.",
    content:
      "Great websites rarely begin with decoration. They begin with a clear idea about what the brand needs to communicate, who needs to understand it and what should happen next.",
    keywords:
      "web design, website strategy, website design, user experience, web designer, digital design",
    featured: true,
  },
  {
    number: "02",
    slug: "designing-websites-that-feel-expensive",
    category: "Web Design",
    date: "August 2026",
    published: "2026-08-15",
    read: "5 min read",
    title: "Designing Websites That Feel Expensive",
    excerpt:
      "Premium website design is often less about adding more and more about making every visual decision feel intentional.",
    content:
      "Typography, spacing, imagery, proportion and rhythm can completely change the perceived quality of a digital experience.",
    keywords:
      "premium web design, luxury website design, modern website design, creative web design",
  },
  {
    number: "03",
    slug: "the-details-people-notice-without-knowing",
    category: "UI / UX",
    date: "August 2026",
    published: "2026-08-05",
    read: "7 min read",
    title: "The Details People Notice Without Knowing",
    excerpt:
      "Spacing, typography, motion and hierarchy quietly shape how a digital experience feels.",
    content:
      "Users may never describe a website's spacing system or typographic scale, but they experience those decisions every second.",
    keywords:
      "UI UX design, user interface design, user experience design, UX principles, website usability",
  },
  {
    number: "04",
    slug: "when-design-and-code-speak-the-same-language",
    category: "Development",
    date: "July 2026",
    published: "2026-07-18",
    read: "8 min read",
    title: "When Design and Code Should Speak the Same Language",
    excerpt:
      "Great frontend work happens when the visual system and technical system are designed together.",
    content:
      "A design can be beautiful in Figma and still become something completely different in the browser. Bringing design and development closer together helps preserve the original intention.",
    keywords:
      "frontend development, React development, web development, Figma to React, frontend developer",
  },
  {
    number: "05",
    slug: "starting-with-a-blank-canvas",
    category: "Process",
    date: "July 2026",
    published: "2026-07-08",
    read: "4 min read",
    title: "Starting With a Blank Canvas",
    excerpt:
      "The questions we ask before opening Figma or writing a single line of code.",
    content:
      "Before designing anything, we want to understand the problem. What is the business trying to achieve? What does the audience need? What should the website make people feel?",
    keywords:
      "web design process, website design process, UX process, creative direction, design strategy",
  },
  {
    number: "06",
    slug: "the-case-for-doing-less",
    category: "Perspective",
    date: "June 2026",
    published: "2026-06-20",
    read: "5 min read",
    title: "The Case for Doing Less",
    excerpt:
      "Minimalism is not about removing everything. It is about knowing what deserves to remain.",
    content:
      "A strong visual system does not need endless effects. Sometimes the most confident design decision is knowing when to stop adding things.",
    keywords:
      "minimal web design, minimalist website, modern web design, design principles",
  },
  {
    number: "07",
    slug: "your-website-is-part-of-your-brand",
    category: "Brand",
    date: "June 2026",
    published: "2026-06-10",
    read: "6 min read",
    title: "Your Website Is Part of Your Brand",
    excerpt:
      "A website is often the first real interaction someone has with a company. That interaction should feel intentional.",
    content:
      "Brand identity does not stop at a logo. Your website translates the brand into a living digital experience through typography, language, layout, imagery and interaction.",
    keywords:
      "branding, website branding, brand identity, digital branding, business website design",
  },
  {
    number: "08",
    slug: "why-performance-is-part-of-design",
    category: "Frontend",
    date: "May 2026",
    published: "2026-05-25",
    read: "7 min read",
    title: "Why Performance Is Part of Design",
    excerpt:
      "Speed, responsiveness and accessibility are not separate from design. They are part of the experience.",
    content:
      "A beautiful website that takes too long to load creates friction before the user even sees the design. Performance should be considered from the beginning.",
    keywords:
      "website performance, frontend performance, Core Web Vitals, responsive web design, web development",
  },
];

const categories = [
  "All",
  "Web Design",
  "UI / UX",
  "Development",
  "Process",
  "Perspective",
  "Brand",
  "Frontend",
];

/* =========================================================
   SEO HELPERS
========================================================= */

const SITE_URL = "https://layoutlyweb.netlify.app";
const PAGE_URL = `${SITE_URL}/journal`;

const setMeta = (name, content, attribute = "name") => {
  if (!content) return;

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

const setCanonical = (url) => {
  let canonical = document.querySelector(
    'link[rel="canonical"]'
  );

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", url);
};

/* =========================================================
   JOURNAL PAGE
========================================================= */

export default function Journal() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  /* =======================================================
     SEO
  ======================================================= */

  useEffect(() => {
    const title =
      "Web Design Journal | UI/UX, React & Development Insights | Layoutly";

    const description =
      "Read Layoutly's web design journal for practical insights on website design, UI/UX, React development, frontend development, branding, SEO, performance and creating better digital experiences.";

    document.title = title;

    setMeta("description", description);
    setMeta(
      "keywords",
      "web design journal, web design blog, web designer, freelance web designer, UI UX design, UX design, React development, frontend development, web development, website design, website development, Figma to React, responsive web design, digital product design, branding, website performance"
    );

    setMeta("robots", "index, follow");
    setMeta("author", "Layoutly");

    /* Open Graph */

    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:url", PAGE_URL, "property");
    setMeta("og:site_name", "Layoutly", "property");
    setMeta("og:locale", "en_IN", "property");

    /* Twitter */

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);

    /* Canonical */

    setCanonical(PAGE_URL);

    /* =====================================================
       WEBSITE / ORGANIZATION / BLOG SCHEMA
    ===================================================== */

    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": `${SITE_URL}/#organization`,
          name: "Layoutly",
          url: SITE_URL,
          description:
            "Layoutly is an independent web design and development studio creating premium websites, UI/UX experiences and digital products.",
        },

        {
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          name: "Layoutly",
          url: SITE_URL,
          publisher: {
            "@id": `${SITE_URL}/#organization`,
          },
        },

        {
          "@type": "CollectionPage",
          "@id": `${PAGE_URL}/#webpage`,
          name: title,
          url: PAGE_URL,
          description,
          isPartOf: {
            "@id": `${SITE_URL}/#website`,
          },
          about: [
            {
              "@type": "Thing",
              name: "Web Design",
            },
            {
              "@type": "Thing",
              name: "UI/UX Design",
            },
            {
              "@type": "Thing",
              name: "Frontend Development",
            },
            {
              "@type": "Thing",
              name: "React Development",
            },
          ],
          publisher: {
            "@id": `${SITE_URL}/#organization`,
          },
        },

        {
          "@type": "Blog",
          "@id": `${PAGE_URL}/#blog`,
          name: "Layoutly Journal",
          url: PAGE_URL,
          description,
          publisher: {
            "@id": `${SITE_URL}/#organization`,
          },

          blogPost: articles.map((article) => ({
            "@type": "BlogPosting",
            "@id": `${PAGE_URL}/${article.slug}#article`,
            headline: article.title,
            description: article.excerpt,
            datePublished: article.published,
            dateModified: article.published,
            url: `${PAGE_URL}/${article.slug}`,

            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${PAGE_URL}/${article.slug}`,
            },

            author: {
              "@type": "Organization",
              name: "Layoutly",
              url: SITE_URL,
            },

            publisher: {
              "@type": "Organization",
              name: "Layoutly",
              url: SITE_URL,
            },

            articleSection: article.category,
            keywords: article.keywords,
            isPartOf: {
              "@id": `${PAGE_URL}/#blog`,
            },
          })),
        },

        {
          "@type": "BreadcrumbList",
          "@id": `${PAGE_URL}/#breadcrumbs`,
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: SITE_URL,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Journal",
              item: PAGE_URL,
            },
          ],
        },
      ],
    };

    let schema = document.querySelector(
      'script[data-page-schema="journal"]'
    );

    if (!schema) {
      schema = document.createElement("script");
      schema.type = "application/ld+json";
      schema.setAttribute(
        "data-page-schema",
        "journal"
      );
      document.head.appendChild(schema);
    }

    schema.textContent = JSON.stringify(structuredData);

    return () => {
      const existingSchema = document.querySelector(
        'script[data-page-schema="journal"]'
      );

      if (existingSchema) {
        existingSchema.remove();
      }
    };
  }, []);

  /* =======================================================
     FILTERING
  ======================================================= */

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        activeCategory === "All" ||
        article.category === activeCategory;

      const query = search.toLowerCase().trim();

      const searchableText = [
        article.title,
        article.excerpt,
        article.content,
        article.category,
        article.keywords,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        !query || searchableText.includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const scrollToArticles = () => {
    document
      .getElementById("articles")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <main className="min-h-screen overflow-hidden bg-[#0B2430] text-white">
      {/* =====================================================
          CINEMATIC BACKGROUND
      ====================================================== */}

      <div
        className="fixed inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -top-32 right-[-10%] h-[650px] w-[650px] rounded-full bg-[#173D4B]/25 blur-[150px]" />

        <div className="absolute top-[35%] -left-48 h-[500px] w-[500px] rounded-full bg-[#123744]/20 blur-[140px]" />

        <div className="absolute bottom-[-15%] right-[15%] h-[450px] w-[450px] rounded-full bg-[#173D4B]/20 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        className="relative z-10"
        aria-labelledby="journal-heading"
      >
        <div className="mx-auto max-w-[1500px] px-6 pb-24 pt-20 lg:px-10 lg:pb-32 lg:pt-28">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_.7fr] lg:items-end">
            <div>
              <div className="mb-7 flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-white/40">
                <span className="h-px w-10 bg-white/25" />
                Layoutly Journal
              </div>

              <h1
                id="journal-heading"
                className="text-[clamp(5rem,11vw,11rem)] leading-[0.76] tracking-[-0.065em]"
                style={{
                  fontFamily: "'Instrument Serif', serif",
                }}
              >
                Notes
                <br />
                <span className="text-white/30">&</span>{" "}
                ideas.
              </h1>
            </div>

            <div className="max-w-md lg:pb-3">
              <p className="text-lg leading-8 text-white/55">
                Practical thoughts on{" "}
                <strong className="font-normal text-white/75">
                  web design, UI/UX, React development,
                  frontend development and digital branding.
                </strong>
              </p>

              <p className="mt-5 text-sm leading-7 text-white/35">
                Explore ideas from the Layoutly studio for
                designers, founders, developers and businesses
                building better digital experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED ARTICLE
      ====================================================== */}

      <section
        className="relative z-10 border-y border-white/10"
        aria-labelledby="featured-heading"
      >
        <div className="mx-auto max-w-[1500px] px-6 py-8 lg:px-10">
          <article className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] lg:grid-cols-[1.05fr_.95fr]">
            {/* Visual */}

            <div
              className="relative min-h-[430px] overflow-hidden border-b border-white/10 lg:min-h-[650px] lg:border-b-0 lg:border-r"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-[#102F3B]" />

              <div className="absolute -left-20 top-[-15%] h-[400px] w-[400px] rounded-full border border-white/5" />

              <div className="absolute left-[10%] top-[12%] h-[68%] w-[72%] rotate-[-6deg] rounded-[1.5rem] border border-white/10 bg-white/[0.025]" />

              <div className="absolute left-[18%] top-[20%] h-[68%] w-[72%] rotate-[4deg] rounded-[1.5rem] border border-white/10 bg-[#0B2430] shadow-2xl">
                <div className="flex h-full flex-col justify-between p-7 md:p-10">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-white/30">
                    <span>Layoutly</span>
                    <span>Journal / 01</span>
                  </div>

                  <div>
                    <div
                      className="text-5xl leading-[0.85] tracking-[-0.04em] md:text-7xl"
                      style={{
                        fontFamily:
                          "'Instrument Serif', serif",
                      }}
                    >
                      Beautiful
                      <br />
                      ideas need
                      <br />
                      <span className="text-white/30">
                        clarity.
                      </span>
                    </div>

                    <div className="mt-8 h-px w-20 bg-white/20" />
                  </div>

                  <div className="flex items-center justify-between border-t border-white/10 pt-4 text-[10px] uppercase tracking-[0.18em] text-white/30">
                    <span>01</span>
                    <span>Design / 2026</span>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 left-8 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] backdrop-blur-xl">
                <PenLine
                  size={17}
                  strokeWidth={1.4}
                />
              </div>
            </div>

            {/* Content */}

            <div className="flex flex-col justify-between p-8 md:p-12 lg:p-16">
              <div>
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-white/35">
                  <span>Featured article</span>
                  <span>01</span>
                </div>

                <div className="mt-20">
                  <div className="mb-5 text-xs uppercase tracking-[0.18em] text-white/35">
                    {articles[0].category}
                  </div>

                  <h2
                    id="featured-heading"
                    className="text-5xl leading-[0.9] tracking-[-0.045em] md:text-6xl"
                    style={{
                      fontFamily:
                        "'Instrument Serif', serif",
                    }}
                  >
                    {articles[0].title}
                  </h2>

                  <p className="mt-7 max-w-lg text-base leading-7 text-white/45">
                    {articles[0].excerpt}
                  </p>

                  <p className="mt-5 max-w-lg text-sm leading-7 text-white/30">
                    {articles[0].content}
                  </p>
                </div>
              </div>

              <div className="mt-14 flex items-center justify-between border-t border-white/10 pt-6">
                <div className="flex items-center gap-5 text-xs text-white/35">
                  <time dateTime={articles[0].published}>
                    {articles[0].date}
                  </time>

                  <span
                    className="h-1 w-1 rounded-full bg-white/20"
                    aria-hidden="true"
                  />

                  <span>{articles[0].read}</span>
                </div>

                <button
                  type="button"
                  onClick={scrollToArticles}
                  className="group flex items-center gap-3 text-sm"
                >
                  Read article

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition group-hover:bg-white group-hover:text-[#0B2430]">
                    <ArrowUpRight size={15} />
                  </span>
                </button>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* =====================================================
          WHY WE WRITE
      ====================================================== */}

      <section
        className="relative z-10"
        aria-labelledby="why-we-write"
      >
        <div className="mx-auto max-w-[1500px] px-6 py-28 lg:px-10 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
            <div>
              <div className="mb-5 text-xs uppercase tracking-[0.22em] text-white/35">
                Why we write
              </div>

              <div className="max-w-sm text-sm leading-7 text-white/40">
                Digital design is constantly changing.
                Tools change, interfaces change and
                expectations change. The principles behind
                good work are often much more consistent.
              </div>

              <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-white/25">
                <BookOpen size={14} />
                Studio notes
              </div>
            </div>

            <div>
              <h2
                id="why-we-write"
                className="max-w-5xl text-[clamp(3rem,6vw,6.5rem)] leading-[0.9] tracking-[-0.05em]"
                style={{
                  fontFamily: "'Instrument Serif', serif",
                }}
              >
                We write about the things
                <span className="text-white/30">
                  {" "}
                  worth thinking about.
                </span>
              </h2>

              <p className="mt-8 max-w-3xl text-base leading-8 text-white/40">
                From practical website design advice to
                thoughts about creativity, technology,
                frontend development and digital products,
                the Journal documents ideas that influence
                the way we work.
              </p>

              <p className="mt-5 max-w-3xl text-base leading-8 text-white/30">
                No unnecessary jargon. No recycled industry
                buzzwords. Just useful observations,
                experiments and perspectives from the process
                of making digital work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ARTICLES
      ====================================================== */}

      <section
        id="articles"
        className="relative z-10 border-y border-white/10 bg-[#071D27]/35"
        aria-labelledby="latest-thinking"
      >
        <div className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="mb-5 text-xs uppercase tracking-[0.22em] text-white/35">
                From the studio
              </div>

              <h2
                id="latest-thinking"
                className="text-5xl tracking-[-0.04em] md:text-7xl"
                style={{
                  fontFamily: "'Instrument Serif', serif",
                }}
              >
                Latest thinking.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/35">
                Explore our latest articles about web design,
                UI/UX, React, frontend development, creative
                direction, branding and website performance.
              </p>
            </div>

            {/* Search */}

            <div className="relative w-full lg:w-[280px]">
              <Search
                size={15}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                aria-hidden="true"
              />

              <label
                htmlFor="journal-search"
                className="sr-only"
              >
                Search Layoutly Journal
              </label>

              <input
                id="journal-search"
                type="search"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search journal..."
                aria-label="Search journal articles"
                className="w-full rounded-full border border-white/10 bg-white/[0.035] py-3 pl-11 pr-10 text-sm text-white outline-none placeholder:text-white/25 focus:border-white/20"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 transition hover:text-white"
                  aria-label="Clear journal search"
                >
                  <X size={15} />
                </button>
              )}
            </div>
          </div>

          {/* Categories */}

          <nav
            className="mb-12 flex gap-2 overflow-x-auto pb-2"
            aria-label="Journal categories"
          >
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() =>
                  setActiveCategory(category)
                }
                aria-pressed={
                  activeCategory === category
                }
                className={`whitespace-nowrap rounded-full border px-4 py-2 text-xs transition ${
                  activeCategory === category
                    ? "border-white bg-white text-[#0B2430]"
                    : "border-white/10 bg-white/[0.025] text-white/40 hover:border-white/20 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </nav>

          {/* Article list */}

          <div className="border-t border-white/10">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article) => (
                <article
                  key={article.number}
                  className="group grid gap-6 border-b border-white/10 py-9 transition hover:bg-white/[0.025] md:grid-cols-[65px_150px_1fr_130px_40px] md:items-center md:gap-8"
                >
                  <span className="text-xs text-white/25">
                    {article.number}
                  </span>

                  <div>
                    <div className="text-xs uppercase tracking-[0.16em] text-white/35">
                      {article.category}
                    </div>

                    <time
                      dateTime={article.published}
                      className="mt-2 block text-xs text-white/25"
                    >
                      {article.date}
                    </time>
                  </div>

                  <div>
                    <h3
                      className="max-w-2xl text-3xl leading-[0.95] tracking-[-0.03em] md:text-4xl"
                      style={{
                        fontFamily:
                          "'Instrument Serif', serif",
                      }}
                    >
                      {article.title}
                    </h3>

                    <p className="mt-4 max-w-2xl text-sm leading-6 text-white/35">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="hidden items-center justify-end gap-2 text-xs text-white/30 md:flex">
                    <Clock3 size={13} />
                    {article.read}
                  </div>

                  <Link
                    to={`/journal/${article.slug}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition group-hover:border-white/30 group-hover:bg-white group-hover:text-[#0B2430]"
                    aria-label={`Read ${article.title}`}
                  >
                    <ArrowUpRight size={15} />
                  </Link>
                </article>
              ))
            ) : (
              <div className="py-24 text-center">
                <p className="text-sm text-white/35">
                  No articles found for your search.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setActiveCategory("All");
                  }}
                  className="mt-5 text-sm text-white underline underline-offset-4"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>

          <div className="mt-8 flex items-center justify-between text-xs text-white/25">
            <span>
              Showing {filteredArticles.length} of{" "}
              {articles.length} articles
            </span>

            <span className="hidden sm:block">
              Layoutly Journal
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          TOPICS
      ====================================================== */}

      <section
        className="relative z-10"
        aria-labelledby="journal-topics"
      >
        <div className="mx-auto max-w-[1500px] px-6 py-28 lg:px-10 lg:py-36">
          <div className="grid gap-14 lg:grid-cols-[.65fr_1.35fr]">
            <div>
              <div className="mb-5 text-xs uppercase tracking-[0.22em] text-white/35">
                Explore topics
              </div>

              <h2
                id="journal-topics"
                className="text-5xl leading-[0.9] tracking-[-0.04em] md:text-6xl"
                style={{
                  fontFamily: "'Instrument Serif', serif",
                }}
              >
                Follow the
                <br />
                ideas.
              </h2>

              <p className="mt-7 max-w-sm text-sm leading-7 text-white/35">
                Browse articles by subject and find practical
                ideas related to website design, UI/UX,
                development, branding and digital products.
              </p>
            </div>

            <div className="grid border-t border-white/10 sm:grid-cols-2">
              {categories.slice(1).map(
                (category, index) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => {
                      setActiveCategory(category);

                      document
                        .getElementById("articles")
                        ?.scrollIntoView({
                          behavior: "smooth",
                        });
                    }}
                    className={`group flex items-center justify-between border-b border-white/10 p-6 text-left transition hover:bg-white/[0.025] ${
                      index % 2 === 0
                        ? "sm:border-r"
                        : ""
                    }`}
                  >
                    <div>
                      <span className="text-xs text-white/25">
                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      <div
                        className="mt-3 text-2xl tracking-[-0.025em]"
                        style={{
                          fontFamily:
                            "'Instrument Serif', serif",
                        }}
                      >
                        {category}
                      </div>
                    </div>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/30 transition group-hover:border-white/25 group-hover:text-white">
                      <ArrowUpRight size={15} />
                    </span>
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          EDITORIAL STATEMENT
      ====================================================== */}

      <section
        className="relative z-10 border-y border-white/10 bg-[#071D27]/45"
        aria-labelledby="editorial-statement"
      >
        <div className="mx-auto max-w-[1500px] px-6 py-32 lg:px-10 lg:py-44">
          <div className="text-center">
            <div className="mb-7 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.22em] text-white/35">
              <Sparkles size={13} />
              A Layoutly perspective
            </div>

            <h2
              id="editorial-statement"
              className="mx-auto max-w-6xl text-[clamp(3.5rem,7vw,8rem)] leading-[0.85] tracking-[-0.055em]"
              style={{
                fontFamily: "'Instrument Serif', serif",
              }}
            >
              Good digital work is
              <br />
              not about{" "}
              <span className="text-white/30">
                more.
              </span>
              <br />
              It is about <em>better.</em>
            </h2>

            <p className="mx-auto mt-9 max-w-2xl text-base leading-8 text-white/40">
              Better questions. Better hierarchy. Better
              decisions. Better experiences. That is the
              standard we try to bring to every project.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section
        className="relative z-10"
        aria-labelledby="journal-cta"
      >
        <div className="mx-auto max-w-[1500px] px-6 py-32 lg:px-10 lg:py-44">
          <div className="grid gap-12 lg:grid-cols-[1fr_.55fr] lg:items-end">
            <div>
              <div className="mb-6 text-xs uppercase tracking-[0.22em] text-white/35">
                Have an idea?
              </div>

              <h2
                id="journal-cta"
                className="max-w-5xl text-[clamp(4rem,8vw,8rem)] leading-[0.82] tracking-[-0.055em]"
                style={{
                  fontFamily: "'Instrument Serif', serif",
                }}
              >
                Good work
                <br />
                starts with a
                <br />
                <span className="text-white/30">
                  good question.
                </span>
              </h2>
            </div>

            <div className="lg:pb-2">
              <p className="text-base leading-7 text-white/40">
                The Journal is where we share what we're
                thinking. Your project could be what we think
                about next.
              </p>

              <Link
                to="/contact"
                className="group mt-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white px-7 py-4 text-sm font-medium text-[#0B2430] transition hover:bg-white/90"
              >
                Talk to Layoutly

                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

   
    </main>
  );
}
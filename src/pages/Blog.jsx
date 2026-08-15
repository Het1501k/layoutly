import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  CalendarDays,
  UserRound,
  Sparkles,
  Search,
  PenTool,
  Code2,
  BriefcaseBusiness,
} from "lucide-react";

/* =========================================================
   BLOG DATA
========================================================= */

const filters = ["All", "Design", "Tech", "Business"];

const posts = [
  {
    title: "Figma vs XD: The Ultimate Showdown for Startups",
    excerpt:
      "An in-depth analysis of which design tool provides the best ROI and workflow efficiency for early-stage teams.",
    category: "Design",
    author: "Alex Rivera",
    date: "Oct 12, 2024",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCDxeqf9iQ1IXiNb2VeciHhpFSLqxZxOkUJqFIaLIM1gfZwyrQ3tnD-FUY_uSawC-qGEN253286iYtb_i6MObguzy2R0cvVfqB0lLVjOykuMC6zJaAFB7rw7XqHBtDVjF_k3uE0Zk2xGOlyFgmzmR_GwLBVvXd0CCl7bAcEibCsW1FEIUHEbBrROSjFIVxGNqme3HbctHoTLfPPucAj2X4Tq75IfqbL1ylHnCgLHGKPOqh5u9-BQa4V",
  },
  {
    title: "Scaling with React & Spring Boot Architecture",
    excerpt:
      "Learn how combining React's flexibility with Spring Boot's robustness can accelerate your product's time-to-market.",
    category: "Tech",
    author: "Jamie Chen",
    date: "Oct 10, 2024",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAMmUENWV6Wb6t0c7kKuDT9A6ezuzWaPv32xVEe5CtAm-8O4prldAR2_kVr2888TkHCOGwscLKx2ywmCPmCsvBXfy3-1mcqITBycwFj_6tC17GrQqEgFZJEp70NrVCRj4XNNBYQ0Cco-_HFCIRKUfEofxb8NxzU5Q-Ls-vgifLweCCuc8mtjrQwIfNGplEHVsDizcdYpOBoeW-VEMHhW8QMhtJ1ZMM8NnaLbMWcwtUPHh3YCdXAPqhG",
  },
  {
    title: "Mastering Landing Page Conversion Rates",
    excerpt:
      "Discover the psychological triggers and layout patterns that transform casual visitors into paying customers.",
    category: "Business",
    author: "Taylor Reed",
    date: "Oct 05, 2024",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD5UykJciVzF3h-R-HQG-8bgSSaSOdBn5DMfBleMXGbB3F0UmaMzKGy75B5BQa2sZfFbb7Z_qI5ManO3ZbpCVIPGi03DsSUsxZQTUM1_7fjO2yTEWBDpdaSybbEfPH_cAClqTXAzZiWxJtQuF1WJI6f4e-tJmEV4wDaJtpdyzPsRMd5LIvejwSvczeGKqSRX9UFQH3CQ5Nw9barizptXPmIFJwZBKkNhg2nQKUqicz1aALT_Woe2rev",
  },
  {
    title: "Mobile-First UI: Beyond Just Responsive",
    excerpt:
      "Why designing for mobile first isn't just about screen size, but about prioritizing user intent and core features.",
    category: "Design",
    author: "Alex Rivera",
    date: "Sep 28, 2024",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCEEFmvMCda0sKtoLy23W_xCNjY9CdI_UNV-oumPdxrXW629ZLjEoQ173O-xzjF5LoK6lG3UshwH1yY2V_LzLX2SgneYCmfXlFcryiclpehEA1sHLPkXch-U1tVAjYvnfG3Y0H3GhVi314LT9yzQnBt8kCXB1njNtQE_-frDZtuDJWrof-W3YTr_uRU0G6sHViFWL5wsV_25itg9g5u_joErkgvFFv-eHrliQeAr8Jf_2FqRzFRy9mz",
  },
  {
    title: "Serverless Architecture: Is it Right for You?",
    excerpt:
      "Evaluating the pros and cons of going serverless for early-stage startups managing unpredictable traffic spikes.",
    category: "Tech",
    author: "Jamie Chen",
    date: "Sep 22, 2024",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA9GuxWERUFS_sIUXnlnlN6fSxOSddjdgqLwzuZFbiSdc_GfZi8krLmIvywFzO8e8TmPw7VsZ-ge2Kn2YqSnGFTJ3X3WN5Vb3F9hKsP5oo6IPtDrjhPrhBtnHwLfxjP1EcLzTsFnaGrv3sc-uEOXsiaXAYrN3Z0RviYmVunnhE9Wm6bSE8BNmZlOaKvGT6wVXpqB7xxGzK3mE5wYBJ5HKQT7heJnovpaGUg46FKhWbh5gZWyP9Hy8fC",
  },
  {
    title: "Building a Lean Startup Team from Scratch",
    excerpt:
      "Strategies for identifying crucial early hires and fostering a culture of ownership in a fast-paced environment.",
    category: "Business",
    author: "Taylor Reed",
    date: "Sep 15, 2024",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC-wp74j6FMYTNn5HEwPJ9yUmL8GYkrtiX8zteAHlRwMmVeaN_nGUAZcaY_XnYHdWMqM9wOxr-9GMf76mc0aTUaiSpxfuhMnaqa-0Jvjt4I5GmZUyg_EWJfPo46NeAm8HIpL0-jYMETjGiTW_5M1voVRM87RowfESQI87pSndCo2z359cbbkPhp9vuaXf__XIR5V9baDTxpGfc8rygPtGL897xMZ41Pa5pJILC2zBvrw6og_WGYH22s",
  },
];

/* =========================================================
   CATEGORY ICON
========================================================= */

const CategoryIcon = ({ category }) => {
  if (category === "Design") {
    return (
      <PenTool
        className="h-3.5 w-3.5"
        strokeWidth={1.5}
      />
    );
  }

  if (category === "Tech") {
    return (
      <Code2
        className="h-3.5 w-3.5"
        strokeWidth={1.5}
      />
    );
  }

  return (
    <BriefcaseBusiness
      className="h-3.5 w-3.5"
      strokeWidth={1.5}
    />
  );
};

/* =========================================================
   MOTION
========================================================= */

const reveal = {
  hidden: {
    opacity: 0,
    y: 20,
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

const containerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

/* =========================================================
   BLOG
========================================================= */

const Blog = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const shouldReduceMotion = useReducedMotion();

  const filteredPosts =
    activeFilter === "All"
      ? posts
      : posts.filter(
          (post) => post.category === activeFilter
        );

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
      ====================================================== */}

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

        {/* GRID */}

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

        {/* STATIC ATMOSPHERE */}

        <div
          className="
            blog-glow
            absolute
            left-[20%]
            top-[15%]
            h-[550px]
            w-[550px]
            rounded-full
            bg-[#0D3A29]/10
          "
        />

        <div
          className="
            blog-glow blog-glow-blue
            absolute
            right-[-180px]
            top-[40%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#092C35]/10
          "
        />

        <div
          className="
            blog-glow blog-glow-bottom
            absolute
            bottom-[-200px]
            left-1/3
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#12452F]/10
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
          pb-16
          pt-36
          md:px-10
          md:pt-40
        "
      >

        {/* Decorative lines */}

        <div
          className="
            pointer-events-none
            absolute
            left-0
            right-0
            top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-[#527861]/30
            to-transparent
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            left-[8%]
            top-32
            hidden
            h-40
            w-40
            rotate-45
            border
            border-[#41624F]/10
            lg:block
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            right-[8%]
            top-52
            hidden
            h-52
            w-52
            rotate-45
            border
            border-[#41624F]/10
            lg:block
          "
        />

        <div className="mx-auto max-w-5xl text-center">

          {/* Eyebrow */}

          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, y: 12 }
            }
            animate={
              shouldReduceMotion
                ? undefined
                : { opacity: 1, y: 0 }
            }
            transition={{
              duration: 0.5,
              delay: 0.05,
            }}
            className="
              mx-auto
              inline-flex
              items-center
              gap-2
              border
              border-[#41644F]/30
              bg-[#08110C]/70
              px-4
              py-2
              text-[10px]
              uppercase
              tracking-[0.3em]
              text-[#719783]
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#639176]" />

            Layoutly Journal
          </motion.div>

          {/* Heading */}

          <motion.h1
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, y: 40 }
            }
            animate={
              shouldReduceMotion
                ? undefined
                : { opacity: 1, y: 0 }
            }
            transition={{
              duration: 0.7,
              delay: 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              mt-7
              font-serif
              text-5xl
              font-medium
              leading-[0.98]
              tracking-[-0.045em]
              text-[#EDF2EF]
              sm:text-6xl
              md:text-7xl
              lg:text-[82px]
            "
          >
            Insights for
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
              startup founders.
            </span>
          </motion.h1>

          {/* Description */}

          <motion.p
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, y: 16 }
            }
            animate={
              shouldReduceMotion
                ? undefined
                : { opacity: 1, y: 0 }
            }
            transition={{
              duration: 0.5,
              delay: 0.3,
            }}
            className="
              mx-auto
              mt-7
              max-w-2xl
              text-base
              leading-8
              text-[#707D76]
              md:text-lg
            "
          >
            Explore our latest thoughts on design,
            technology, and business strategy to help you
            build and scale your start-up.
          </motion.p>

        </div>
      </section>

      {/* =====================================================
          FILTER BAR
      ====================================================== */}

      <section className="relative z-20 px-6 md:px-10">

        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : { opacity: 0, y: 15 }
          }
          animate={
            shouldReduceMotion
              ? undefined
              : { opacity: 1, y: 0 }
          }
          transition={{
            duration: 0.5,
            delay: 0.4,
          }}
          className="
            mx-auto
            flex
            max-w-7xl
            flex-wrap
            justify-center
            gap-2
            border-y
            border-white/[0.05]
            py-5
          "
        >

          {filters.map((filter) => {
            const active = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`
                  relative
                  flex
                  items-center
                  gap-2
                  border
                  px-5
                  py-2.5
                  text-[11px]
                  uppercase
                  tracking-[0.14em]
                  transition-colors
                  duration-200

                  ${
                    active
                      ? `
                        border-[#527861]/50
                        bg-[#123024]
                        text-[#DCE8E1]
                      `
                      : `
                        border-white/[0.06]
                        bg-[#070D0A]
                        text-[#64736B]
                        hover:border-[#426650]/35
                        hover:bg-[#0B1711]
                        hover:text-[#A4B7AC]
                      `
                  }
                `}
              >
                <span>{filter}</span>

                {active && (
                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-[#6D9C81]
                    "
                  />
                )}
              </button>
            );
          })}

        </motion.div>
      </section>

      {/* =====================================================
          BLOG GRID
      ====================================================== */}

      <section
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-6
          py-16
          md:px-10
          md:py-20
        "
      >

        <AnimatePresence mode="wait">

          {filteredPosts.length > 0 ? (
            <motion.div
              key={activeFilter}
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0 }
              }
              animate={
                shouldReduceMotion
                  ? undefined
                  : { opacity: 1 }
              }
              exit={
                shouldReduceMotion
                  ? undefined
                  : { opacity: 0 }
              }
              variants={
                shouldReduceMotion
                  ? undefined
                  : containerVariants
              }
              className="
                grid
                grid-cols-1
                gap-6
                md:grid-cols-2
                lg:grid-cols-3
              "
            >

              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.title}
                  variants={
                    shouldReduceMotion
                      ? undefined
                      : reveal
                  }
                  className="
                    blog-card
                    group
                    relative
                    overflow-hidden
                    border
                    border-white/[0.07]
                    bg-[#070D0A]
                  "
                >

                  {/* CARD IMAGE */}

                  <div className="relative h-56 overflow-hidden">

                    <img
                      src={post.image}
                      alt={post.title}
                      loading={index < 3 ? "eager" : "lazy"}
                      decoding="async"
                      className="
                        blog-card-image
                        h-full
                        w-full
                        object-cover
                        grayscale-[20%]
                        opacity-80
                      "
                    />

                    {/* Image overlay */}

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-[#070D0A]
                        via-[#070D0A]/10
                        to-transparent
                      "
                    />

                    {/* Category */}

                    <div
                      className="
                        absolute
                        left-4
                        top-4
                        inline-flex
                        items-center
                        gap-2
                        border
                        border-white/[0.12]
                        bg-[#07100B]/80
                        px-3
                        py-1.5
                        text-[9px]
                        uppercase
                        tracking-[0.18em]
                        text-[#A1B5AA]
                      "
                    >
                      <CategoryIcon category={post.category} />

                      {post.category}
                    </div>

                    {/* Number */}

                    <div
                      className="
                        absolute
                        bottom-4
                        right-4
                        font-mono
                        text-[9px]
                        tracking-[0.2em]
                        text-white/30
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                  </div>

                  {/* CARD CONTENT */}

                  <div className="relative p-6">

                    <h2
                      className="
                        font-serif
                        text-[22px]
                        leading-tight
                        text-[#DFE7E2]
                        transition-colors
                        duration-200
                        group-hover:text-[#AFC3B7]
                      "
                    >
                      {post.title}
                    </h2>

                    <p
                      className="
                        mt-4
                        line-clamp-3
                        text-sm
                        leading-7
                        text-[#68766F]
                      "
                    >
                      {post.excerpt}
                    </p>

                    {/* META */}

                    <div
                      className="
                        mt-6
                        flex
                        items-center
                        justify-between
                        border-t
                        border-white/[0.06]
                        pt-5
                      "
                    >

                      <div
                        className="
                          flex
                          items-center
                          gap-2
                          text-[9px]
                          uppercase
                          tracking-[0.12em]
                          text-[#5F6F67]
                        "
                      >
                        <UserRound
                          className="h-3.5 w-3.5 text-[#527760]"
                          strokeWidth={1.4}
                        />

                        {post.author}
                      </div>

                      <div
                        className="
                          flex
                          items-center
                          gap-2
                          text-[9px]
                          uppercase
                          tracking-[0.12em]
                          text-[#5F6F67]
                        "
                      >
                        <CalendarDays
                          className="h-3.5 w-3.5 text-[#527760]"
                          strokeWidth={1.4}
                        />

                        {post.date}
                      </div>

                    </div>

                    {/* READ */}

                    <div
                      className="
                        mt-6
                        flex
                        items-center
                        justify-between
                      "
                    >

                      <span
                        className="
                          text-[9px]
                          uppercase
                          tracking-[0.2em]
                          text-[#4E6559]
                        "
                      >
                        Read article
                      </span>

                      <div
                        className="
                          blog-arrow
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          border
                          border-[#3D604D]/30
                          bg-[#0A1610]
                          text-[#6A947B]
                        "
                      >
                        <ArrowUpRight
                          className="h-4 w-4"
                          strokeWidth={1.4}
                        />
                      </div>

                    </div>

                  </div>

                  {/* BOTTOM ACCENT */}

                  <div
                    className="
                      blog-card-line
                      absolute
                      bottom-0
                      left-0
                      h-px
                      w-0
                      bg-gradient-to-r
                      from-[#507B62]
                      via-[#78A48C]
                      to-transparent
                    "
                  />

                </motion.article>
              ))}

            </motion.div>
          ) : (
            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 15 }
              }
              animate={
                shouldReduceMotion
                  ? undefined
                  : { opacity: 1, y: 0 }
              }
              className="
                border
                border-white/[0.07]
                bg-[#070D0A]
                px-6
                py-20
                text-center
              "
            >
              <Search
                className="
                  mx-auto
                  h-8
                  w-8
                  text-[#456B55]
                "
                strokeWidth={1.3}
              />

              <p
                className="
                  mt-5
                  text-sm
                  text-[#68766F]
                "
              >
                No posts found for this category.
              </p>
            </motion.div>
          )}

        </AnimatePresence>

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

          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, y: 20 }
            }
            whileInView={
              shouldReduceMotion
                ? undefined
                : { opacity: 1, y: 0 }
            }
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.55,
            }}
            className="
              relative
              overflow-hidden
              border
              border-[#405F4D]/25
              bg-[#070D0A]
              p-10
              text-center
              md:p-16
            "
          >

            {/* STATIC GLOW */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-80
                w-80
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#12462F]/10
                blur-[80px]
              "
            />

            {/* CORNERS */}

            <div
              className="
                absolute
                left-5
                top-5
                h-10
                w-10
                border-l
                border-t
                border-[#5A806B]/25
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
                border-[#5A806B]/25
              "
            />

            <Sparkles
              className="
                relative
                mx-auto
                h-6
                w-6
                text-[#65927A]
              "
              strokeWidth={1.3}
            />

            <h2
              className="
                relative
                mt-6
                font-serif
                text-3xl
                text-[#E5ECE8]
                md:text-5xl
              "
            >
              Have an idea worth building?
            </h2>

            <p
              className="
                relative
                mx-auto
                mt-4
                max-w-xl
                text-sm
                leading-7
                text-[#68766F]
              "
            >
              Let's turn your idea into a thoughtful,
              high-performing digital experience.
            </p>

            <div className="relative mt-8">

              <a
                href="https://wa.me/918734010298?text=Hi%20Layoutly%2C%20I%20would%20like%20to%20discuss%20my%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
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
                  transition-transform
                  duration-200
                  hover:-translate-y-1
                "
              >
                Start a conversation

                <ArrowRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-200
                    group-hover:translate-x-1
                  "
                />
              </a>

            </div>

          </motion.div>

        </div>

      </section>

    </main>
  );
};

export default Blog;
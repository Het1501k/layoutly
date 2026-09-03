import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Mail,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#06151D] text-white">
      {/* =====================================================
          TOP BORDER
      ====================================================== */}

      <div className="h-px w-full bg-white/[0.10]" />

      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">

        {/* ===================================================
            MAIN CTA
        ==================================================== */}

        <section className="relative border-b border-white/[0.08] py-24 md:py-32 lg:py-40">

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">

            {/* LEFT */}

            <div>
              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.32em]
                  text-white/40
                "
              >
                Let's create something
              </span>

              <h2
                className="
                  mt-6
                  max-w-5xl
                  text-5xl
                  font-normal
                  leading-[0.9]
                  tracking-[-1.8px]
                  text-white
                  sm:text-6xl
                  md:text-7xl
                  lg:text-[7.5rem]
                "
                style={{
                  fontFamily: "'Instrument Serif', serif",
                }}
              >
                Have an idea?
                <br />

                <span className="text-white/45">
                  Let's make it real.
                </span>
              </h2>
            </div>

            {/* RIGHT */}

            <div className="lg:pb-2">

              <p
                className="
                  max-w-md
                  text-sm
                  leading-7
                  text-white/50
                  md:text-base
                "
                style={{
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                From first thought to final launch, we create
                digital experiences that feel as good as they
                perform.
              </p>

              <Link
                to="/contact"
                className="
                  group
                  mt-8
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-white/20
                  bg-white/[0.06]
                  px-7
                  py-4
                  text-sm
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  hover:border-white/35
                  hover:bg-white/[0.11]
                "
              >
                <span>
                  Start a conversation
                </span>

                <ArrowUpRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </div>
          </div>

          {/* Small editorial line */}

          <div
            className="
              absolute
              bottom-0
              left-0
              h-px
              w-24
              bg-white/30
            "
          />
        </section>

        {/* ===================================================
            NAVIGATION
        ==================================================== */}

        <section
          className="
            grid
            grid-cols-1
            border-b
            border-white/[0.08]
            py-16
            md:grid-cols-2
            md:py-20
            lg:grid-cols-[1.4fr_0.6fr_0.6fr_0.8fr]
          "
        >

          {/* =================================================
              BRAND
          ================================================== */}

          <div className="mb-14 lg:mb-0">

            <Link
              to="/"
              className="group inline-block"
            >
              <span
                className="
                  text-4xl
                  tracking-[-0.8px]
                  text-white
                  transition-opacity
                  duration-300
                  group-hover:opacity-70
                "
                style={{
                  fontFamily: "'Instrument Serif', serif",
                }}
              >
                Layoutly
                <sup className="ml-0.5 text-[10px]">
                  ®
                </sup>
              </span>
            </Link>

            <p
              className="
                mt-5
                max-w-xs
                text-sm
                leading-6
                text-white/35
              "
            >
              Web design, UI/UX and development for brands,
              founders and businesses building what comes next.
            </p>

            {/* Availability */}

            <div className="mt-7 flex items-center gap-2">

              <span className="relative flex h-2 w-2">

                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-white/20
                  "
                />

                <span
                  className="
                    relative
                    h-2
                    w-2
                    rounded-full
                    bg-white/70
                  "
                />

              </span>

              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.2em]
                  text-white/35
                "
              >
                Available for select projects
              </span>

            </div>
          </div>

          {/* =================================================
              EXPLORE
          ================================================== */}

          <div>

            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-white/30
              "
            >
              Explore
            </span>

            <div className="mt-6 flex flex-col gap-4">

              <Link
                to="/"
                className="
                  w-fit
                  text-sm
                  text-white/55
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                Home
              </Link>

              <Link
                to="/studio"
                className="
                  w-fit
                  text-sm
                  text-white/55
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                Studio
              </Link>

              <Link
                to="/about"
                className="
                  w-fit
                  text-sm
                  text-white/55
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                About
              </Link>

              <Link
                to="/services"
                className="
                  w-fit
                  text-sm
                  text-white/55
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                Services
              </Link>

              <Link
                to="/journal"
                className="
                  w-fit
                  text-sm
                  text-white/55
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                Journal
              </Link>

            </div>
          </div>

          {/* =================================================
              CONNECT
          ================================================== */}

          <div className="mt-12 md:mt-0">

            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-white/30
              "
            >
              Connect
            </span>

            <div className="mt-6 flex flex-col gap-4">

              {/* EMAIL */}

              <a
                href="mailto:hello@layoutly.in"
                className="
                  group
                  flex
                  w-fit
                  items-center
                  gap-3
                  text-sm
                  text-white/55
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                <Mail
                  className="
                    h-4
                    w-4
                    text-white/30
                    transition-colors
                    group-hover:text-white/70
                  "
                />

                <span>
                  Email
                </span>
              </a>

              {/* INSTAGRAM */}

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  w-fit
                  items-center
                  gap-3
                  text-sm
                  text-white/55
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                <span
                  className="
                    flex
                    h-4
                    w-4
                    items-center
                    justify-center
                    text-[15px]
                    leading-none
                    text-white/30
                    transition-colors
                    group-hover:text-white/70
                  "
                >
                  ◎
                </span>

                <span>
                  Instagram
                </span>
              </a>

              {/* LINKEDIN */}

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  w-fit
                  items-center
                  gap-3
                  text-sm
                  text-white/55
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                <span
                  className="
                    flex
                    h-4
                    w-4
                    items-center
                    justify-center
                    text-[10px]
                    font-medium
                    text-white/30
                    transition-colors
                    group-hover:text-white/70
                  "
                >
                  in
                </span>

                <span>
                  LinkedIn
                </span>
              </a>

            </div>
          </div>

          {/* =================================================
              START PROJECT
          ================================================== */}

          <div className="mt-12 md:mt-0">

            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-white/30
              "
            >
              Start a project
            </span>

            <Link
              to="/contact"
              className="
                group
                mt-6
                flex
                w-fit
                items-center
                gap-2
                text-sm
                text-white
              "
            >
              <span>
                Let's talk
              </span>

              <ArrowUpRight
                className="
                  h-4
                  w-4
                  text-white/50
                  transition-transform
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                "
              />
            </Link>

            <p
              className="
                mt-3
                text-xs
                leading-5
                text-white/30
              "
            >
              New projects, collaborations
              <br />
              and digital experiences.
            </p>

          </div>

        </section>

        {/* ===================================================
            HUGE WORDMARK
        ==================================================== */}

        <section
          className="
            relative
            overflow-hidden
            py-10
            md:py-14
          "
        >

          <div
            className="
              select-none
              whitespace-nowrap
              text-center
              text-[19vw]
              font-normal
              leading-none
              tracking-[-0.08em]
              text-white/[0.035]
            "
            style={{
              fontFamily: "'Instrument Serif', serif",
            }}
          >
            Layoutly
          </div>

        </section>

        {/* ===================================================
            BOTTOM BAR
        ==================================================== */}

        <section
          className="
            flex
            flex-col
            gap-6
            border-t
            border-white/[0.08]
            py-6
            md:flex-row
            md:items-center
            md:justify-between
          "
        >

          {/* COPYRIGHT */}

          <div
            className="
              text-[10px]
              uppercase
              tracking-[0.18em]
              text-white/25
            "
          >
            © {new Date().getFullYear()} Layoutly.
            All rights reserved.
          </div>

          {/* CENTER */}

          <div
            className="
              text-[10px]
              uppercase
              tracking-[0.18em]
              text-white/20
            "
          >
            Designed & built with intention.
          </div>

          {/* BACK TO TOP */}

          <button
            type="button"
            onClick={scrollToTop}
            className="
              group
              flex
              items-center
              gap-3
              text-[10px]
              uppercase
              tracking-[0.18em]
              text-white/35
              transition-colors
              duration-300
              hover:text-white
            "
          >
            <span>
              Back to top
            </span>

            <span
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-white/15
                transition-all
                duration-300
                group-hover:border-white/35
                group-hover:bg-white/[0.06]
              "
            >
              <ArrowUp
                className="
                  h-3.5
                  w-3.5
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                "
              />
            </span>
          </button>

        </section>

      </div>
    </footer>
  );
};

export default Footer;
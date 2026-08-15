import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Download,
  FileText,
  Sparkles,
  Clock3,
} from "lucide-react";

const ThankYou = () => {
  return (
    <main className="thankyou-page relative min-h-screen overflow-hidden bg-[#030605] text-[#E8EEE9]">

      {/* =====================================================
          STATIC BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

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

        {/* Green atmosphere */}

        <div
          className="
            thankyou-glow
            absolute
            left-[-180px]
            top-[-180px]
            h-[550px]
            w-[550px]
            rounded-full
            bg-[#0D3A29]/10
          "
        />

        {/* Blue-green atmosphere */}

        <div
          className="
            thankyou-glow
            absolute
            right-[-220px]
            top-[30%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#092C35]/[0.08]
          "
        />

        {/* Bottom atmosphere */}

        <div
          className="
            thankyou-glow
            absolute
            bottom-[-250px]
            left-[25%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#10442E]/[0.08]
          "
        />

        {/* Static rings */}

        <div
          className="
            absolute
            right-[8%]
            top-[12%]
            hidden
            h-64
            w-64
            rounded-full
            border
            border-[#527863]/10
            lg:block
          "
        />

        <div
          className="
            absolute
            right-[11%]
            top-[16%]
            hidden
            h-48
            w-48
            rounded-full
            border
            border-[#527863]/10
            lg:block
          "
        />

      </div>


      {/* =====================================================
          CONTENT
      ====================================================== */}

      <section
        className="
          relative
          z-10
          flex
          min-h-screen
          items-center
          justify-center
          px-6
          py-28
          md:px-10
        "
      >

        <div className="w-full max-w-5xl">

          {/* =================================================
              SUCCESS CARD
          ================================================== */}

          <div
            className="
              thankyou-card
              relative
              overflow-hidden
              border
              border-[#405F4D]/30
              bg-[#070D0A]
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
                via-[#709982]
                to-transparent
              "
            />

            {/* Corner decorations */}

            <div
              className="
                absolute
                left-5
                top-5
                h-10
                w-10
                border-l
                border-t
                border-[#5C816D]/20
              "
            />

            <div
              className="
                absolute
                right-5
                top-5
                h-10
                w-10
                border-r
                border-t
                border-[#5C816D]/20
              "
            />


            {/* =================================================
                MAIN CONFIRMATION
            ================================================== */}

            <div className="px-7 py-14 text-center md:px-14 md:py-20">

              {/* Success icon */}

              <div
                className="
                  success-icon
                  relative
                  mx-auto
                  flex
                  h-24
                  w-24
                  items-center
                  justify-center
                "
              >

                <div
                  className="
                    absolute
                    inset-0
                    rounded-full
                    border
                    border-[#659179]/20
                  "
                />

                <div
                  className="
                    relative
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#4E765F]/40
                    bg-[#10271D]
                    shadow-[0_0_45px_rgba(50,100,72,0.14)]
                  "
                >
                  <CheckCircle2
                    className="
                      h-10
                      w-10
                      text-[#78A28A]
                    "
                    strokeWidth={1.2}
                  />
                </div>

              </div>


              {/* Eyebrow */}

              <div
                className="
                  thankyou-enter
                  mt-8
                  flex
                  items-center
                  justify-center
                  gap-2
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                  text-[#668675]
                "
              >

                <Check
                  className="h-3 w-3"
                  strokeWidth={1.5}
                />

                Request Received

              </div>


              {/* Heading */}

              <h1
                className="
                  thankyou-enter
                  thankyou-delay-1
                  mx-auto
                  mt-5
                  max-w-3xl
                  font-serif
                  text-4xl
                  leading-tight
                  tracking-[-0.03em]
                  text-[#E5ECE8]
                  sm:text-5xl
                  md:text-6xl
                "
              >
                Thank You.

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
                  We'll Be in Touch.
                </span>

              </h1>


              {/* Description */}

              <p
                className="
                  thankyou-enter
                  thankyou-delay-2
                  mx-auto
                  mt-6
                  max-w-2xl
                  text-sm
                  leading-7
                  text-[#6D7B73]
                  md:text-base
                "
              >
                Your request has been successfully submitted.
                Our team is reviewing your details and aims to
                reply within{" "}
                <strong className="font-medium text-[#A0B6AA]">
                  2 hours
                </strong>{" "}
                during standard business hours.
              </p>


              {/* Response indicator */}

              <div
                className="
                  thankyou-enter
                  thankyou-delay-3
                  mx-auto
                  mt-7
                  inline-flex
                  items-center
                  gap-2
                  border
                  border-white/[0.06]
                  bg-[#09100C]
                  px-4
                  py-2.5
                  text-[9px]
                  uppercase
                  tracking-[0.16em]
                  text-[#596860]
                "
              >

                <Clock3
                  className="
                    h-3.5
                    w-3.5
                    text-[#628B74]
                  "
                  strokeWidth={1.3}
                />

                Average response time: under 2 hours

              </div>


              {/* Return button */}

              <div className="thankyou-enter thankyou-delay-4">

                <Link
                  to="/"
                  className="
                    group
                    mt-9
                    inline-flex
                    items-center
                    gap-3
                    border
                    border-[#4C765F]/40
                    bg-[#153428]
                    px-7
                    py-4
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.16em]
                    text-[#E2EAE5]
                    transition-transform
                    duration-150
                    hover:-translate-y-1
                    hover:border-[#719B84]/50
                    hover:bg-[#1A3E30]
                  "
                >

                  <ArrowLeft
                    className="
                      h-4
                      w-4
                      transition-transform
                      duration-150
                      group-hover:-translate-x-1
                    "
                    strokeWidth={1.4}
                  />

                  Return to Home

                </Link>

              </div>

            </div>


            {/* =================================================
                DIVIDER
            ================================================== */}

            <div className="relative px-7 md:px-14">

              <div className="h-px bg-white/[0.06]" />

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  flex
                  -translate-x-1/2
                  -translate-y-1/2
                  items-center
                  gap-3
                  whitespace-nowrap
                  bg-[#070D0A]
                  px-5
                  text-[8px]
                  uppercase
                  tracking-[0.25em]
                  text-[#4F6157]
                "
              >

                <Sparkles
                  className="
                    h-3
                    w-3
                    text-[#5D866E]
                  "
                  strokeWidth={1.2}
                />

                While You Wait

                <Sparkles
                  className="
                    h-3
                    w-3
                    text-[#5D866E]
                  "
                  strokeWidth={1.2}
                />

              </div>

            </div>


            {/* =================================================
                RESOURCE SECTION
            ================================================== */}

            <div className="p-7 md:p-14">

              <div
                className="
                  grid
                  grid-cols-1
                  gap-8
                  border
                  border-white/[0.06]
                  bg-[#050A07]
                  p-6
                  md:grid-cols-2
                  md:p-8
                "
              >

                {/* Resource information */}

                <div className="flex flex-col justify-center">

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      border
                      border-[#3F624E]/30
                      bg-[#0A1710]
                    "
                  >
                    <FileText
                      className="
                        h-5
                        w-5
                        text-[#68937A]
                      "
                      strokeWidth={1.3}
                    />
                  </div>


                  <h2
                    className="
                      mt-6
                      font-serif
                      text-2xl
                      text-[#DCE5E0]
                      md:text-3xl
                    "
                  >
                    Startup Tech Stack

                    <span className="text-[#719985]">
                      {" "}Checklist.
                    </span>
                  </h2>


                  <p
                    className="
                      mt-4
                      max-w-lg
                      text-sm
                      leading-7
                      text-[#68766F]
                    "
                  >
                    Get a head start on your project
                    architecture. Download our guide to
                    selecting the right tools and frameworks
                    for modern web applications.
                  </p>


                  {/* Download button */}

                  <button
                    type="button"
                    className="
                      group
                      mt-7
                      inline-flex
                      w-full
                      items-center
                      justify-center
                      gap-3
                      border
                      border-[#4B705A]/40
                      bg-[#0C1912]
                      px-6
                      py-3.5
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.16em]
                      text-[#82968B]
                      transition-colors
                      duration-150
                      hover:border-[#6C927B]/50
                      hover:bg-[#11231A]
                      hover:text-[#B2C4BA]
                      md:w-fit
                    "
                  >

                    <Download
                      className="
                        h-4
                        w-4
                        transition-transform
                        duration-150
                        group-hover:translate-y-0.5
                      "
                      strokeWidth={1.3}
                    />

                    Download Free PDF

                  </button>

                </div>


                {/* =================================================
                    DOCUMENT PREVIEW
                ================================================== */}

                <div
                  className="
                    relative
                    min-h-[280px]
                    overflow-hidden
                    border
                    border-white/[0.06]
                    bg-[#09110C]
                  "
                >

                  {/* Background image */}

                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAluXO7nDzKm1p7KrQHR5KHvFbhBzTZrbH_3ijgVRatwmSkNXj5hXEnjIW1tPZhEKmfWCG-RMek9m39N7H8PyGXPOLxFpzaIsO3qZelwbLpejj0OOtlbP_-4BkTFZcpHYUBcy7WPK2mEk-zmsQG4PSa5c1Dk2RA_VtUPEodxkEtNECTDO5-Yx0jsGlrMBQIRqNBDN8YauuUtYA5hwBdXbJqFMZBbr39qmkj32BCqix7atjzq8ZCD4Nb"
                    alt="Digital document preview"
                    loading="lazy"
                    decoding="async"
                    width="800"
                    height="600"
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                      opacity-15
                      grayscale
                    "
                  />


                  {/* Overlay */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-br
                      from-[#123322]/60
                      via-[#07100B]/70
                      to-[#030605]/90
                    "
                  />


                  {/* Decorative lines */}

                  <div
                    className="
                      absolute
                      left-8
                      right-8
                      top-8
                      h-px
                      bg-[#719985]/10
                    "
                  />

                  <div
                    className="
                      absolute
                      bottom-8
                      left-8
                      right-8
                      h-px
                      bg-[#719985]/10
                    "
                  />


                  {/* Document */}

                  <div
                    className="
                      relative
                      flex
                      h-full
                      min-h-[280px]
                      items-center
                      justify-center
                    "
                  >

                    <div
                      className="
                        w-[190px]
                        border
                        border-[#5A8069]/30
                        bg-[#0C1711]
                        p-5
                        shadow-[0_20px_50px_rgba(0,0,0,0.4)]
                      "
                    >

                      {/* Document header */}

                      <div className="flex items-center justify-between">

                        <div
                          className="
                            flex
                            h-7
                            w-7
                            items-center
                            justify-center
                            border
                            border-[#466A55]/30
                            bg-[#10271D]
                          "
                        >

                          <FileText
                            className="
                              h-3.5
                              w-3.5
                              text-[#719985]
                            "
                            strokeWidth={1.3}
                          />

                        </div>

                        <span
                          className="
                            text-[7px]
                            uppercase
                            tracking-[0.15em]
                            text-[#52655B]
                          "
                        >
                          PDF
                        </span>

                      </div>


                      {/* Fake document content */}

                      <div className="mt-5 space-y-2">

                        <div
                          className="
                            h-2
                            w-28
                            bg-[#527461]/30
                          "
                        />

                        <div
                          className="
                            h-1.5
                            w-full
                            bg-white/[0.06]
                          "
                        />

                        <div
                          className="
                            h-1.5
                            w-4/5
                            bg-white/[0.06]
                          "
                        />

                        <div
                          className="
                            h-1.5
                            w-3/5
                            bg-white/[0.06]
                          "
                        />

                      </div>


                      {/* Preview label */}

                      <div
                        className="
                          mt-6
                          flex
                          items-center
                          justify-center
                          gap-2
                          border
                          border-[#456A53]/25
                          bg-[#0A1710]
                          px-3
                          py-2
                          text-[7px]
                          uppercase
                          tracking-[0.15em]
                          text-[#678A77]
                        "
                      >

                        <FileText
                          className="h-3 w-3"
                          strokeWidth={1.2}
                        />

                        Preview Guide

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>


            {/* Bottom accent */}

            <div
              className="
                absolute
                bottom-0
                left-0
                h-px
                w-full
                bg-gradient-to-r
                from-transparent
                via-[#466A55]/30
                to-transparent
              "
            />

          </div>


          {/* =================================================
              FOOTER NOTE
          ================================================== */}

          <p
            className="
              mt-7
              text-center
              text-[9px]
              uppercase
              tracking-[0.18em]
              text-[#3F5048]
            "
          >
            Thank you for choosing Layoutly
          </p>

        </div>

      </section>

    </main>
  );
};

export default ThankYou;
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Copyright,
  Database,
  LifeBuoy,
  Palette,
  ShieldCheck,
  Sparkles,
  Zap,
  Crown,
} from "lucide-react";

/* =========================================================
   PRICING DATA
========================================================= */

const plans = [
  {
    name: "UI/UX Design",
    description: "Beautiful, user-centered designs that convert.",
    price: 350,
    icon: Palette,

    features: [
      "User research & personas",
      "Wireframing & prototyping",
      "High-fidelity UI design",
      "Responsive design (mobile-first)",
      "Design system & style guide",
      "Figma handoff with developer notes",
      "2 rounds of revisions",
    ],

    cta: "Start Designing",
    popular: false,
  },

  {
    name: "Static Web Development",
    description: "Fast, secure, and stunning websites.",
    price: 1199,
    icon: Code2,

    features: [
      "Custom HTML/CSS/JavaScript",
      "Fully responsive design",
      "SEO-optimized structure",
      "Contact forms with validation",
      "Google Analytics integration",
      "Basic CMS (optional)",
      "Performance optimization",
      "2 weeks delivery",
    ],

    cta: "Get Static Site",
    popular: true,
  },

  {
    name: "Dynamic Web Development",
    description: "Scalable, full-featured web applications.",
    price: 2999,
    icon: Database,

    features: [
      "Custom React/Next.js development",
      "Node.js/Python backend API",
      "MongoDB/PostgreSQL database",
      "User authentication & roles",
      "Payment gateway integration",
      "Admin dashboard & CMS",
      "Scalable cloud deployment",
      "4-6 weeks delivery",
    ],

    cta: "Build Dynamic App",
    popular: false,
  },
];

/* =========================================================
   GUARANTEES
========================================================= */

const guarantees = [
  {
    icon: ShieldCheck,
    title: "Quality Guaranteed",
    description:
      "We deliver pixel-perfect, responsive, and cross-browser compatible code. Your satisfaction is our priority.",
  },

  {
    icon: Copyright,
    title: "100% Ownership",
    description:
      "After final payment, all design files, source code, and assets are fully yours. No licensing fees.",
  },

  {
    icon: LifeBuoy,
    title: "30-Day Support",
    description:
      "Every project comes with 30 days of free support. We're here to help you launch and grow.",
  },
];

/* =========================================================
   PRICING PAGE
========================================================= */

export default function Pricing() {
  const formatPrice = (price) => {
    return "$" + price.toLocaleString("en-US");
  };

  return (
    <main className="min-h-screen bg-[#030605] text-[#E8EEE9] overflow-hidden">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

        {/* Technical Grid */}

        <div
          className="absolute inset-0 opacity-[0.025]"
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

        {/* Static Green Glow */}

        <div
          className="
            absolute
            left-[5%]
            top-[5%]
            h-[650px]
            w-[650px]
            rounded-full
            bg-[#0D3A29]/10
            blur-[160px]
          "
        />

        {/* Static Blue Green Glow */}

        <div
          className="
            absolute
            right-[-250px]
            top-[25%]
            h-[600px]
            w-[600px]
            rounded-full
            bg-[#092C35]/10
            blur-[160px]
          "
        />

        {/* Static Bottom Glow */}

        <div
          className="
            absolute
            bottom-[-300px]
            left-[25%]
            h-[600px]
            w-[600px]
            rounded-full
            bg-[#10442E]/20
            blur-[160px]
          "
        />

      </div>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          relative
          z-10
          px-6
          pb-16
          pt-32
          md:px-10
          md:pt-40
        "
      >

        <div className="mx-auto max-w-5xl text-center">

          {/* Eyebrow */}

          <div
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

            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#639176]
              "
            />

            Transparent Pricing

          </div>


          {/* Heading */}

          <div className="mt-7">

            <h1
              className="
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

              Simple Pricing.

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
                Serious Results.
              </span>

            </h1>

          </div>


          {/* Description */}

          <p
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
            No hidden costs. No confusing packages.
            Choose the right solution for your business —
            from product design to full-scale web applications.
          </p>


          {/* Currency */}

          <p
            className="
              mt-5
              text-[10px]
              uppercase
              tracking-[0.14em]
              text-[#46554D]
            "
          >
            * All prices are in US Dollars ($). Applicable taxes may vary.
          </p>

        </div>

      </section>


      {/* =====================================================
          PRICING CARDS
      ===================================================== */}

      <section
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-6
          pb-24
          md:px-10
        "
      >

        <div
          className="
            grid
            grid-cols-1
            gap-5
            md:grid-cols-3
          "
        >

          {plans.map((plan) => {

            const Icon = plan.icon;

            return (
              <div
                key={plan.name}
                className={`
                  group
                  relative
                  flex
                  flex-col
                  overflow-hidden
                  border
                  bg-[#070D0A]/95
                  p-7
                  backdrop-blur-xl
                  transition-colors
                  duration-300
                  md:p-8
                  ${
                    plan.popular
                      ? "border-[#557F68]/50 shadow-[0_25px_80px_rgba(18,64,45,0.18)]"
                      : "border-white/[0.07] hover:border-[#466A55]/40"
                  }
                `}
              >

                {/* Top Accent */}

                <div
                  className={`
                    absolute
                    left-0
                    right-0
                    top-0
                    h-px
                    ${
                      plan.popular
                        ? "bg-gradient-to-r from-transparent via-[#719C83] to-transparent"
                        : "bg-gradient-to-r from-transparent via-[#456550]/30 to-transparent"
                    }
                  `}
                />


                {/* Popular Badge */}

                {plan.popular && (
                  <div
                    className="
                      absolute
                      right-5
                      top-5
                      inline-flex
                      items-center
                      gap-1.5
                      border
                      border-[#557D68]/30
                      bg-[#10291F]
                      px-3
                      py-1.5
                      text-[8px]
                      font-medium
                      uppercase
                      tracking-[0.15em]
                      text-[#91AE9E]
                    "
                  >

                    <Crown
                      className="h-3 w-3"
                      strokeWidth={1.3}
                    />

                    Most Popular

                  </div>
                )}


                {/* Icon */}

                <div
                  className="
                    relative
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    border
                    border-[#3F624E]/30
                    bg-[#0B1811]
                    transition-colors
                    duration-300
                    group-hover:border-[#587B67]/50
                  "
                >

                  <Icon
                    className="h-6 w-6 text-[#6E997F]"
                    strokeWidth={1.25}
                  />

                </div>


                {/* Plan Information */}

                <div className="mt-7">

                  <h3
                    className="
                      font-serif
                      text-2xl
                      text-[#E0E8E3]
                    "
                  >
                    {plan.name}
                  </h3>


                  <p
                    className="
                      mt-2
                      min-h-[48px]
                      text-sm
                      leading-6
                      text-[#68766F]
                    "
                  >
                    {plan.description}
                  </p>

                </div>


                {/* Price */}

                <div
                  className="
                    mt-7
                    border-y
                    border-white/[0.06]
                    py-5
                  "
                >

                  <div className="flex items-end gap-2">

                    <span
                      className="
                        font-serif
                        text-4xl
                        tracking-tight
                        text-[#E8EFEA]
                      "
                    >
                      {formatPrice(plan.price)}
                    </span>

                  </div>


                  <span
                    className="
                      mt-1
                      block
                      text-[9px]
                      uppercase
                      tracking-[0.15em]
                      text-[#4F6057]
                    "
                  >
                    One-time investment
                  </span>

                </div>


                {/* Features */}

                <ul className="mt-7 flex-1 space-y-3.5">

                  {plan.features.map((feature) => (

                    <li
                      key={feature}
                      className="
                        flex
                        items-start
                        gap-3
                        text-sm
                        leading-6
                        text-[#77857D]
                      "
                    >

                      <CheckCircle2
                        className="
                          mt-0.5
                          h-4
                          w-4
                          flex-shrink-0
                          text-[#5D896F]
                        "
                        strokeWidth={1.4}
                      />

                      <span>
                        {feature}
                      </span>

                    </li>

                  ))}

                </ul>


                {/* CTA */}

                <Link
                  to="/contact"
                  className={`
                    mt-8
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    border
                    px-5
                    py-4
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.15em]
                    transition-colors
                    duration-300
                    ${
                      plan.popular
                        ? "border-[#527A64]/50 bg-[#153428] text-[#DCE8E1] hover:border-[#719986]/60 hover:bg-[#1A3D2F]"
                        : "border-white/[0.09] bg-[#0A120E] text-[#899A90] hover:border-[#4C6F5C]/50 hover:bg-[#0E1B14] hover:text-[#B3C5BB]"
                    }
                  `}
                >

                  <span>
                    {plan.cta}
                  </span>

                  <ArrowRight
                    className="h-4 w-4"
                    strokeWidth={1.3}
                  />

                </Link>


                {/* Bottom Accent */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-px
                    w-0
                    bg-gradient-to-r
                    from-[#4C745C]
                    via-[#719985]
                    to-transparent
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />

              </div>
            );
          })}

        </div>

      </section>


      {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}

      <section
        className="
          relative
          z-10
          border-y
          border-white/[0.05]
          bg-[#050907]
          px-6
          py-24
          md:px-10
        "
      >

        <div className="mx-auto max-w-7xl">

          {/* Header */}

          <div className="mb-14">

            <div
              className="
                flex
                items-center
                gap-3
                text-[9px]
                uppercase
                tracking-[0.25em]
                text-[#5B7466]
              "
            >

              <Zap
                className="h-4 w-4 text-[#66927A]"
                strokeWidth={1.3}
              />

              Included With Every Project

            </div>


            <h2
              className="
                mt-4
                max-w-2xl
                font-serif
                text-3xl
                leading-tight
                text-[#E0E8E3]
                md:text-4xl
              "
            >
              More Than Just{" "}
              <span className="text-[#709982]">
                A Website.
              </span>
            </h2>

          </div>


          {/* Guarantees */}

          <div
            className="
              grid
              grid-cols-1
              gap-5
              md:grid-cols-3
            "
          >

            {guarantees.map((item) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    group
                    border
                    border-white/[0.06]
                    bg-[#070D0A]
                    p-7
                    transition-colors
                    duration-300
                    hover:border-[#466A55]/40
                  "
                >

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      border
                      border-[#3F624E]/30
                      bg-[#0A1710]
                    "
                  >

                    <Icon
                      className="h-5 w-5 text-[#659179]"
                      strokeWidth={1.3}
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
                    {item.description}
                  </p>


                  <div
                    className="
                      mt-6
                      h-px
                      w-10
                      bg-[#466850]
                      transition-all
                      duration-500
                      group-hover:w-20
                    "
                  />

                </div>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          CUSTOM PROJECT CTA
      ===================================================== */}

      <section
        className="
          relative
          z-10
          px-6
          py-28
          md:px-10
        "
      >

        <div className="mx-auto max-w-5xl">

          <div
            className="
              relative
              overflow-hidden
              border
              border-[#405F4D]/30
              bg-[#070D0A]
              p-10
              text-center
              md:p-16
            "
          >

            {/* Static Glow */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-96
                w-96
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#0D412D]/10
                blur-[120px]
              "
            />


            {/* Corner Decorations */}

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
              Need Something Custom?
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
              Every business is different. If your project
              doesn't fit one of these packages, we'll create
              a custom scope around your exact requirements.
            </p>


            <Link
              to="/contact"
              className="
                relative
                mt-8
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
                transition-colors
                duration-300
                hover:border-[#719B84]/50
                hover:bg-[#1A3E30]
              "
            >

              Discuss Your Project

              <ArrowRight
                className="h-4 w-4"
                strokeWidth={1.4}
              />

            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
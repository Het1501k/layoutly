import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Code2,
  Copyright,
  Crown,
  Database,
  Layers3,
  LifeBuoy,
  Palette,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";

/* =========================================================
   PRICING DATA
========================================================= */

const plans = [
  {
    name: "UI/UX Design",
    description: "Beautiful, user-centered designs that convert.",
    price: 5000,
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
    price: 15000,
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
    price: 35000,
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
   ANIMATIONS
========================================================= */

const containerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.96,
    filter: "blur(8px)",
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",

    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/* =========================================================
   PRICING
========================================================= */

const Pricing = () => {
  const formatPrice = (price) => {
    return "₹" + price.toLocaleString("en-IN");
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030605] text-[#E8EEE9]">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

        {/* Grid */}

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

        {/* Main green glow */}

        <motion.div
          animate={{
            x: ["-10%", "10%", "-10%"],
            y: ["5%", "-5%", "5%"],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
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

        {/* Blue-green glow */}

        <motion.div
          animate={{
            x: [0, -70, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
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

        {/* Bottom green glow */}

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.02, 0.07, 0.02],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[-300px]
            left-[25%]
            h-[600px]
            w-[600px]
            rounded-full
            bg-[#10442E]
            blur-[160px]
          "
        />

        {/* Floating rings */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            right-[7%]
            top-[13%]
            hidden
            h-64
            w-64
            rounded-full
            border
            border-[#527863]/10
            lg:block
          "
        />

        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            right-[10%]
            top-[17%]
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
          HERO
      ====================================================== */}

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

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
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
              backdrop-blur-xl
            "
          >

            <motion.span
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#639176]
                shadow-[0_0_10px_rgba(99,145,118,0.8)]
              "
            />

            Transparent Pricing

          </motion.div>

          {/* Heading */}

          <div className="mt-7 overflow-hidden">

            <motion.h1
              initial={{
                opacity: 0,
                y: 70,
                filter: "blur(12px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 1,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
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
            </motion.h1>

          </div>

          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.65,
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
            No hidden costs. No confusing packages.
            Choose the right solution for your business —
            from product design to full-scale web applications.
          </motion.p>

          {/* GST */}

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.9,
            }}
            className="
              mt-5
              text-[10px]
              uppercase
              tracking-[0.14em]
              text-[#46554D]
            "
          >
            * All prices are in Indian Rupees (₹). GST (18%) applicable.
          </motion.p>

        </div>

      </section>

      {/* =====================================================
          PRICING CARDS
      ====================================================== */}

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

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          variants={containerVariants}
          className="
            grid
            grid-cols-1
            gap-5
            md:grid-cols-3
          "
        >

          {plans.map((plan, index) => {

            const Icon = plan.icon;

            return (
              <motion.div
                key={plan.name}
                variants={cardVariants}
                whileHover={{
                  y: plan.popular ? -10 : -6,
                  transition: {
                    duration: 0.3,
                  },
                }}
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
                  transition-all
                  duration-500
                  md:p-8
                  ${
                    plan.popular
                      ? "border-[#557F68]/50 shadow-[0_25px_80px_rgba(18,64,45,0.18)]"
                      : "border-white/[0.07] hover:border-[#466A55]/40"
                  }
                `}
              >

                {/* Popular glow */}

                {plan.popular && (
                  <motion.div
                    animate={{
                      opacity: [0.25, 0.5, 0.25],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      pointer-events-none
                      absolute
                      -right-20
                      -top-20
                      h-56
                      w-56
                      rounded-full
                      bg-[#174D36]/20
                      blur-[80px]
                    "
                  />
                )}

                {/* Top accent */}

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

                {/* Popular badge */}

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

                <motion.div
                  whileHover={{
                    rotate: 5,
                    scale: 1.05,
                  }}
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
                    className="
                      h-6
                      w-6
                      text-[#6E997F]
                    "
                    strokeWidth={1.25}
                  />

                  {/* Icon glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-[#2D684A]/10
                      opacity-0
                      blur-xl
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                </motion.div>

                {/* Plan info */}

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

                  {plan.features.map((feature, idx) => (

                    <motion.li
                      key={feature}
                      initial={{
                        opacity: 0,
                        x: -8,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.4,
                        delay: 0.15 + idx * 0.04,
                      }}
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

                      <span>{feature}</span>

                    </motion.li>

                  ))}

                </ul>

                {/* CTA */}

                <Link
                  to="/contact"
                  className={`
                    group/button
                    relative
                    mt-8
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    overflow-hidden
                    border
                    px-5
                    py-4
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.15em]
                    transition-all
                    duration-300
                    ${
                      plan.popular
                        ? "border-[#527A64]/50 bg-[#153428] text-[#DCE8E1] hover:border-[#719986]/60 hover:bg-[#1A3D2F]"
                        : "border-white/[0.09] bg-[#0A120E] text-[#899A90] hover:border-[#4C6F5C]/50 hover:bg-[#0E1B14] hover:text-[#B3C5BB]"
                    }
                  `}
                >

                  {/* Button glow */}

                  <span
                    className="
                      absolute
                      inset-0
                      -translate-x-full
                      bg-gradient-to-r
                      from-transparent
                      via-white/[0.04]
                      to-transparent
                      transition-transform
                      duration-700
                      group-hover/button:translate-x-full
                    "
                  />

                  <span className="relative">
                    {plan.cta}
                  </span>

                  <ArrowRight
                    className="
                      relative
                      h-4
                      w-4
                      transition-transform
                      duration-300
                      group-hover/button:translate-x-1
                    "
                    strokeWidth={1.3}
                  />

                </Link>

                {/* Bottom line */}

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
                    duration-700
                    group-hover:w-full
                  "
                />

              </motion.div>
            );
          })}

        </motion.div>

      </section>

      {/* =====================================================
          WHY CHOOSE US
      ====================================================== */}

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

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="mb-14"
          >

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
              More Than Just
              <span className="text-[#709982]">
                {" "}A Website.
              </span>
            </h2>

          </motion.div>

          {/* Guarantees */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={containerVariants}
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
                <motion.div
                  key={item.title}
                  variants={cardVariants}
                  whileHover={{
                    y: -5,
                  }}
                  className="
                    group
                    border
                    border-white/[0.06]
                    bg-[#070D0A]
                    p-7
                    transition-all
                    duration-500
                    hover:border-[#466A55]/40
                  "
                >

                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      rotate: 3,
                    }}
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
                      className="
                        h-5
                        w-5
                        text-[#659179]
                      "
                      strokeWidth={1.3}
                    />

                  </motion.div>

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

                </motion.div>
              );
            })}

          </motion.div>

        </div>

      </section>

      {/* =====================================================
          CUSTOM PROJECT CTA
      ====================================================== */}

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

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
            }}
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

            {/* Animated glow */}

            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.02, 0.08, 0.02],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
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
                bg-[#0D412D]
                blur-[120px]
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
                group
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
                shadow-[0_15px_50px_rgba(15,58,40,0.25)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#719B84]/50
                hover:bg-[#1A3E30]
              "
            >

              Discuss Your Project

              <ArrowRight
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
                strokeWidth={1.4}
              />

            </Link>

          </motion.div>

        </div>

      </section>

    </main>
  );
};

export default Pricing;
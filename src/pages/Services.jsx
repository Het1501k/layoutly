import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Code2,
  Database,
  Layers3,
  Palette,
  Rocket,
  Settings2,
  MessageCircle,
} from "lucide-react";

/* =========================================================
   SERVICES DATA
========================================================= */

const services = [
  {
    icon: Palette,
    number: "01",
    title: "Figma Design",
    description:
      "Thoughtful interfaces designed around your users, brand, and business goals.",
    features: [
      "UI/UX Prototyping",
      "Design Systems",
      "Wireframing",
    ],
  },

  {
    icon: Code2,
    number: "02",
    title: "React Frontend",
    description:
      "Fast, responsive interfaces engineered with modern React architecture.",
    features: [
      "Component Architectures",
      "Responsive Web Apps",
      "Performance Optimization",
    ],
  },

  {
    icon: Database,
    number: "03",
    title: "Java Backend",
    description:
      "Reliable backend systems built for security, performance, and scale.",
    features: [
      "Spring Boot APIs",
      "Microservices",
      "Database Architecture",
    ],
  },

  {
    icon: Layers3,
    number: "04",
    title: "Full-Stack Integration",
    description:
      "Complete product engineering from frontend architecture to cloud deployment.",
    features: [
      "End-to-end Delivery",
      "CI/CD Pipelines",
      "Cloud Deployment",
    ],
  },

  {
    icon: Rocket,
    number: "05",
    title: "MVP Development",
    description:
      "Turn your idea into a focused, launch-ready product without unnecessary complexity.",
    features: [
      "Rapid Prototyping",
      "Go-to-Market Strategy",
      "Core Feature Focus",
    ],
  },

  {
    icon: Settings2,
    number: "06",
    title: "Maintenance & Scaling",
    description:
      "Keep your product secure, reliable, updated, and ready for the next stage.",
    features: [
      "Legacy Code Updates",
      "Security Patches",
      "Scaling Operations",
    ],
  },
];

/* =========================================================
   SERVICE CARD
========================================================= */

const ServiceCard = ({ service }) => {
  const Icon = service.icon;

  return (
    <article
      className="
        service-card
        group
        relative
        overflow-hidden
        border
        border-white/[0.07]
        bg-[#070D0A]
        p-7
        md:p-8
      "
    >
      {/* Lightweight hover background */}

      <span
        className="
          service-card-glow
          pointer-events-none
          absolute
          -inset-px
        "
      />

      {/* Number */}

      <span
        className="
          absolute
          right-6
          top-6
          font-mono
          text-[9px]
          tracking-[0.2em]
          text-[#3E5147]
        "
      >
        {service.number}
      </span>

      {/* Icon */}

      <div
        className="
          service-icon
          relative
          flex
          h-14
          w-14
          items-center
          justify-center
          border
          border-[#3F624E]/30
          bg-[#0A1710]
        "
      >
        <Icon
          className="
            h-6
            w-6
            text-[#6B987D]
            transition-colors
            duration-150
            group-hover:text-[#94B5A2]
          "
          strokeWidth={1.25}
        />
      </div>

      {/* Title */}

      <h3
        className="
          relative
          mt-7
          font-serif
          text-2xl
          text-[#E0E8E3]
          transition-colors
          duration-150
          group-hover:text-[#B5C9BC]
        "
      >
        {service.title}
      </h3>

      {/* Description */}

      <p
        className="
          relative
          mt-3
          text-sm
          leading-7
          text-[#68766F]
        "
      >
        {service.description}
      </p>

      {/* Divider */}

      <div
        className="
          relative
          my-6
          h-px
          bg-white/[0.06]
        "
      />

      {/* Features */}

      <ul className="relative space-y-3">
        {service.features.map((feature) => (
          <li
            key={feature}
            className="
              flex
              items-center
              gap-3
              text-sm
              text-[#7A8981]
            "
          >
            <span
              className="
                flex
                h-5
                w-5
                shrink-0
                items-center
                justify-center
                border
                border-[#456A53]/30
                bg-[#0B1710]
              "
            >
              <Check
                className="h-3 w-3 text-[#649078]"
                strokeWidth={1.7}
              />
            </span>

            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Bottom accent */}

      <span
        className="
          service-bottom-line
          absolute
          bottom-0
          left-0
          h-px
          w-0
          bg-gradient-to-r
          from-[#4C745C]
          via-[#719985]
          to-transparent
        "
      />
    </article>
  );
};

/* =========================================================
   PROCESS CARD
========================================================= */

const processSteps = [
  ["01", "Discover"],
  ["02", "Design"],
  ["03", "Build"],
  ["04", "Launch"],
];

/* =========================================================
   SERVICES PAGE
========================================================= */

const Services = () => {
  const phoneNumber = "918734010298";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "Hi, I would like to schedule a call to discuss my project."
  )}`;

  return (
    <main
      className="
        services-page
        relative
        min-h-screen
        overflow-hidden
        bg-[#030605]
        text-[#E8EEE9]
      "
    >
      {/* =====================================================
          STATIC BACKGROUND

          No Framer Motion.
          No infinite animation.
          No rotating elements.
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

        {/* Green glow */}

        <div
          className="
            services-bg-glow
            absolute
            left-[-180px]
            top-[-180px]
            h-[550px]
            w-[550px]
            rounded-full
            bg-[#0D3A29]/10
          "
        />

        {/* Blue-green glow */}

        <div
          className="
            services-bg-glow
            absolute
            right-[-220px]
            top-[30%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#092C35]/[0.08]
          "
        />

        {/* Bottom glow */}

        <div
          className="
            services-bg-glow
            absolute
            bottom-[-250px]
            left-[25%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#10442E]/[0.08]
          "
        />

        {/* Static decorative rings */}

        <div
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

        <div
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

          <div
            className="
              services-enter
              mx-auto
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

            What We Do
          </div>

          {/* Heading */}

          <h1
            className="
              services-enter
              services-enter-delay-1
              mt-7
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
            End-to-End Tech.

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
              Built for Start-ups.
            </span>
          </h1>

          {/* Description */}

          <p
            className="
              services-enter
              services-enter-delay-2
              mx-auto
              mt-7
              max-w-2xl
              text-base
              leading-8
              text-[#707D76]
              md:text-lg
            "
          >
            We build scalable, beautiful, and performant
            digital products from concept to deployment.
            Your vision, our engineering expertise.
          </p>

          {/* Hero buttons */}

          <div
            className="
              services-enter
              services-enter-delay-3
              mt-8
              flex
              flex-col
              justify-center
              gap-3
              sm:flex-row
            "
          >
            <Link
              to="/contact"
              className="
                services-primary-button
                group
                inline-flex
                items-center
                justify-center
                gap-3
                border
                border-[#4C765F]/40
                bg-[#153428]
                px-7
                py-4
                text-sm
                font-medium
                text-[#E2EAE5]
              "
            >
              Start a Project

              <ArrowRight
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-150
                  group-hover:translate-x-1
                "
                strokeWidth={1.4}
              />
            </Link>

            <Link
              to="/our-work"
              className="
                services-secondary-button
                inline-flex
                items-center
                justify-center
                gap-3
                border
                border-white/[0.08]
                bg-[#080E0B]
                px-7
                py-4
                text-sm
                font-medium
                text-[#899990]
              "
            >
              View Portfolio

              <ArrowRight
                className="h-4 w-4"
                strokeWidth={1.3}
              />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES GRID
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
        <div
          className="
            services-grid
            grid
            grid-cols-1
            gap-5
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              service={service}
            />
          ))}
        </div>
      </section>

      {/* =====================================================
          PROCESS STRIP
      ====================================================== */}

      <section
        className="
          relative
          z-10
          border-y
          border-white/[0.05]
          bg-[#050907]
          px-6
          py-20
          md:px-10
        "
      >
        <div className="mx-auto max-w-7xl">

          {/* Process heading */}

          <div className="services-process-header">
            <div>
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
                <Layers3
                  className="
                    h-4
                    w-4
                    text-[#66927A]
                  "
                  strokeWidth={1.3}
                />

                Our Approach
              </div>

              <h2
                className="
                  mt-4
                  font-serif
                  text-3xl
                  text-[#E0E8E3]
                  md:text-4xl
                "
              >
                From Idea to
                <span className="text-[#709982]">
                  {" "}Launch.
                </span>
              </h2>
            </div>

            <p
              className="
                max-w-lg
                text-sm
                leading-7
                text-[#68766F]
              "
            >
              Every project follows a structured process
              designed to reduce uncertainty, improve
              communication, and get you to launch faster.
            </p>
          </div>

          {/* Process cards */}

          <div
            className="
              mt-12
              grid
              grid-cols-1
              gap-4
              md:grid-cols-4
            "
          >
            {processSteps.map(([number, title]) => (
              <article
                key={number}
                className="
                  process-card
                  group
                  border
                  border-white/[0.06]
                  bg-[#070D0A]
                  p-6
                "
              >
                <span
                  className="
                    font-mono
                    text-[10px]
                    tracking-[0.2em]
                    text-[#4E6859]
                  "
                >
                  {number}
                </span>

                <h3
                  className="
                    mt-5
                    font-serif
                    text-xl
                    text-[#DCE5E0]
                  "
                >
                  {title}
                </h3>

                <div
                  className="
                    process-line
                    mt-5
                    h-px
                    w-8
                    bg-[#4D765E]
                  "
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
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

          <div
            className="
              services-cta
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
            {/* Static glow */}

            <div
              className="
                services-cta-glow
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-96
                w-96
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

            {/* Icon */}

            <div
              className="
                relative
                mx-auto
                flex
                h-12
                w-12
                items-center
                justify-center
                border
                border-[#466A55]/30
                bg-[#0A1710]
              "
            >
              <MessageCircle
                className="
                  h-5
                  w-5
                  text-[#6A967D]
                "
                strokeWidth={1.3}
              />
            </div>

            {/* Heading */}

            <h2
              className="
                relative
                mt-6
                font-serif
                text-3xl
                text-[#E5ECE8]
                md:text-4xl
              "
            >
              Not Sure What You Need?
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
              Book a free consultation and let's map out
              the right technical strategy for your project.
            </p>

            {/* Buttons */}

            <div
              className="
                relative
                mt-8
                flex
                flex-col
                items-center
                justify-center
                gap-3
                sm:flex-row
              "
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  services-primary-button
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
                "
              >
                Schedule a Call

                <ArrowRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-150
                    group-hover:translate-x-1
                  "
                  strokeWidth={1.4}
                />
              </a>

              <Link
                to="/contact"
                className="
                  services-secondary-button
                  inline-flex
                  items-center
                  gap-3
                  border
                  border-white/[0.08]
                  bg-[#09100C]
                  px-7
                  py-4
                  text-sm
                  font-medium
                  text-[#89988F]
                "
              >
                Contact Us

                <ArrowRight
                  className="h-4 w-4"
                  strokeWidth={1.3}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
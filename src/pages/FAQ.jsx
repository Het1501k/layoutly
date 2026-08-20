import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  HelpCircle,
  Mail,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import Accordion from "../components/Accordion";

/* =========================================================
   FAQ DATA
========================================================= */

const faqs = [
  {
    question: "What exactly do you offer as a web development agency?",
    answer:
      "We offer UI/UX design, static website development, and dynamic web application development. We take your idea from concept to launch with transparent pricing and clear timelines.",
  },
  {
    question: "How much does a UI/UX design package cost?",
    answer:
      "Our UI/UX design package starts at $350 (one-time). This includes user research, wireframes, high-fidelity prototypes, and a complete design system in Figma. Perfect for validating your product idea.",
  },
  {
    question: "What's included in your static website development?",
    answer:
      "Our static website development package starts at $1,199. You get a fully responsive, SEO-optimized website with custom development, contact forms, analytics integration, and a polished modern design. Delivery timeline depends on the project scope.",
  },
  {
    question: "What about dynamic web applications?",
    answer:
      "Our dynamic web application package starts at $2,999 and includes a full-stack React/Next.js application with Node.js or Python backend, database integration, user authentication, payment integration, and an admin dashboard. Delivery timeline depends on the project scope and complexity.",
  },
  {
    question: "Who owns the intellectual property?",
    answer:
      "You do. 100%. Upon final payment and project completion, all design assets, source code, and intellectual property are fully transferred to you. We retain no ownership rights.",
  },
  {
    question: "What is your typical timeline for a project?",
    answer:
      "UI/UX design typically takes 1–2 weeks, static websites around 2–3 weeks, and dynamic web applications around 4–6 weeks. We scope each project clearly before we start, so there are no surprises.",
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Yes, every project comes with 30 days of free support. We also offer ongoing maintenance and scaling packages for long-term partnerships.",
  },
  {
    question: "What technology stack do you use?",
    answer:
      "We use modern, scalable technologies: React/Next.js for frontend, Node.js or Python for backend, and MongoDB/PostgreSQL for databases. We also work with cloud platforms like Vercel, AWS, and Netlify.",
  },
  {
    question: "Can you integrate with existing systems?",
    answer:
      "Yes, we can integrate with legacy systems provided they have accessible APIs. We often build middleware to connect modern frontends with older backends.",
  },
  {
    question: "What are your payment terms?",
    answer:
      "We offer flexible milestone-based payments. Typically, a 30% deposit to kickstart, with the remaining balance tied to project deliverables. We're transparent about every step.",
  },
];

/* =========================================================
   SMALL REUSABLE COMPONENTS
========================================================= */

const SectionIcon = ({ children }) => (
  <div
    className="
      flex
      h-10
      w-10
      shrink-0
      items-center
      justify-center
      border
      border-[#42644F]/30
      bg-[#0A1710]
    "
  >
    {children}
  </div>
);

const ContactCard = ({
  icon: Icon,
  title,
  description,
  children,
}) => {
  return (
    <div
      className="
        faq-contact-card
        group
        relative
        overflow-hidden
        border
        border-white/[0.06]
        bg-[#070D0A]
        p-6
      "
    >
      <div
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          border
          border-[#3F664F]/30
          bg-[#0A1710]
        "
      >
        <Icon
          className="h-5 w-5 text-[#67937A]"
          strokeWidth={1.4}
        />
      </div>

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

      <p
        className="
          mt-2
          text-sm
          leading-7
          text-[#68766F]
        "
      >
        {description}
      </p>

      {children}

      <span
        className="
          absolute
          bottom-0
          left-0
          h-px
          w-0
          bg-gradient-to-r
          from-[#527D63]
          to-transparent
          transition-[width]
          duration-200
          group-hover:w-1/2
        "
      />
    </div>
  );
};

/* =========================================================
   FAQ PAGE
========================================================= */

const FAQ = () => {
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
          STATIC BACKGROUND
          
          IMPORTANT:
          No infinite motion.
          No animated blur.
          No rotating rings.
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

        {/* Static green atmosphere */}

        <div
          className="
            absolute
            left-[-180px]
            top-[-150px]
            h-[550px]
            w-[550px]
            rounded-full
            bg-[#0D3A29]/[0.10]
            faq-static-glow
          "
        />

        {/* Static blue-green atmosphere */}

        <div
          className="
            absolute
            right-[-220px]
            top-[35%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#092C35]/[0.08]
            faq-static-glow
          "
        />

        {/* Small green atmosphere */}

        <div
          className="
            absolute
            bottom-[-250px]
            left-[30%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#10442E]/[0.08]
            faq-static-glow
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
              faq-enter
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

            Frequently Asked Questions
          </div>

          {/* Heading */}

          <h1
            className="
              faq-enter
              faq-enter-delay-1
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
            Got Questions?

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
              We've Got Answers.
            </span>
          </h1>

          {/* Description */}

          <p
            className="
              faq-enter
              faq-enter-delay-2
              mx-auto
              mt-7
              max-w-2xl
              text-base
              leading-8
              text-[#707D76]
              md:text-lg
            "
          >
            Everything you need to know about working with
            Layoutly. Can't find what you're looking for?
            Reach out — we're here to help.
          </p>
        </div>
      </section>

      {/* =====================================================
          FAQ LIST
      ====================================================== */}

      <section
        className="
          relative
          z-10
          mx-auto
          max-w-4xl
          px-6
          pb-24
          md:px-10
        "
      >
        {/* Section header */}

        <div
          className="
            mb-8
            flex
            items-center
            justify-between
          "
        >
          <div className="flex items-center gap-3">

            <SectionIcon>
              <HelpCircle
                className="h-5 w-5 text-[#6A967D]"
                strokeWidth={1.4}
              />
            </SectionIcon>

            <div>
              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.25em]
                  text-[#557061]
                "
              >
                Knowledge Base
              </p>

              <h2
                className="
                  mt-1
                  font-serif
                  text-2xl
                  text-[#DCE5E0]
                "
              >
                Common Questions
              </h2>
            </div>
          </div>

          <span
            className="
              hidden
              font-mono
              text-[9px]
              tracking-[0.2em]
              text-[#4C6055]
              sm:block
            "
          >
            {String(faqs.length).padStart(2, "0")} QUESTIONS
          </span>
        </div>

        {/* =================================================
            FAQ CARDS

            No Framer Motion here.
            Accordion handles the interaction.
        ================================================== */}

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <article
              key={faq.question}
              className="
                faq-card
                group
                relative
                overflow-hidden
                border
                border-white/[0.07]
                bg-[#070D0A]
              "
            >
              {/* Number */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-5
                  top-5
                  font-mono
                  text-[9px]
                  tracking-[0.2em]
                  text-[#3E5147]
                "
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Accordion */}

              <div className="pl-10">
                <Accordion title={faq.question}>
                  <p
                    className="
                      max-w-3xl
                      pb-2
                      text-sm
                      leading-7
                      text-[#6E7C74]
                    "
                  >
                    {faq.answer}
                  </p>
                </Accordion>
              </div>

              {/* Hover line */}

              <span
                className="
                  absolute
                  bottom-0
                  left-0
                  h-px
                  w-0
                  bg-gradient-to-r
                  from-[#527D63]
                  via-[#6C977F]
                  to-transparent
                  transition-[width]
                  duration-200
                  group-hover:w-full
                "
              />
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================
          QUICK CONTACT
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
        <div className="mx-auto max-w-4xl">

          <div
            className="
              grid
              grid-cols-1
              gap-5
              md:grid-cols-2
            "
          >
            {/* Book call */}

            <ContactCard
              icon={CalendarDays}
              title="Prefer a Conversation?"
              description="Let's talk through your idea, goals, requirements, and budget."
            >
              <Link
                to="/contact"
                className="
                  group/link
                  mt-5
                  inline-flex
                  items-center
                  gap-2
                  text-[10px]
                  uppercase
                  tracking-[0.18em]
                  text-[#719783]
                "
              >
                Book a Call

                <ArrowRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-200
                    group-hover/link:translate-x-1
                  "
                  strokeWidth={1.4}
                />
              </Link>
            </ContactCard>

            {/* Email */}

            <ContactCard
              icon={Mail}
              title="Still Need Help?"
              description="Send us your question directly and our team will help you figure things out."
            >
              <a
                href="mailto:layoutly5@gmail.com"
                className="
                  group/link
                  mt-5
                  inline-flex
                  items-center
                  gap-2
                  text-[10px]
                  uppercase
                  tracking-[0.12em]
                  text-[#719783]
                "
              >
                layoutly5@gmail.com

                <ArrowRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-200
                    group-hover/link:translate-x-1
                  "
                  strokeWidth={1.4}
                />
              </a>
            </ContactCard>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
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
              faq-final-cta
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
            {/* Static background glow */}

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
                bg-[#0D412D]/[0.06]
              "
            />

            {/* Corner details */}

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
                md:text-5xl
              "
            >
              Still Have Questions?
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
              Our team is ready to provide specific answers
              for your unique project requirements.
            </p>

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
              {/* Contact */}

              <Link
                to="/contact"
                className="
                  faq-primary-button
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
                  shadow-[0_12px_35px_rgba(15,58,40,0.18)]
                  transition-transform
                  duration-200
                  hover:-translate-y-1
                  hover:border-[#719B84]/50
                  hover:bg-[#1A3E30]
                "
              >
                <MessageCircle
                  className="h-4 w-4"
                  strokeWidth={1.4}
                />

                Start a Conversation

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

              {/* Email */}

              <a
                href="mailto:layoutly5@gmail.com"
                className="
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
                  transition-transform
                  duration-200
                  hover:-translate-y-1
                  hover:border-[#466A55]/40
                  hover:text-[#B1C0B7]
                "
              >
                <Mail
                  className="h-4 w-4"
                  strokeWidth={1.4}
                />

                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQ;
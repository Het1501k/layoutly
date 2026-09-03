import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

import {
  ArrowRight,
  ArrowUpRight,
  CalendarClock,
  Check,
  CheckCircle2,
  LockKeyhole,
  Mail,
  MessageCircle,
  Send,
  ShieldCheck,
  Sparkles,
  UserRound,
  WalletCards,
  XCircle,
} from "lucide-react";

/* =========================================================
   ANIMATION
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -24,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 24,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/* =========================================================
   FIELD LABEL
========================================================= */

const FieldLabel = ({ icon: Icon, children, htmlFor }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="
        mb-2.5
        flex
        items-center
        gap-2
        text-[9px]
        font-medium
        uppercase
        tracking-[0.22em]
        text-white/45
      "
    >
      <Icon
        className="h-3.5 w-3.5 text-[#8FAEB7]"
        strokeWidth={1.3}
      />

      {children}
    </label>
  );
};

/* =========================================================
   CONTACT PAGE
========================================================= */

const Contact = () => {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    details: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: "",
  });

  /* =======================================================
     SEO
  ======================================================== */

  useEffect(() => {
    const SITE_URL = "https://layoutlyweb.netlify.app";
    const PAGE_URL = `${SITE_URL}/contact`;

    const title =
      "Contact Layoutly | Web Design, UI/UX & Development";

    const description =
      "Contact Layoutly to discuss your next website, UI/UX design or web development project. We create premium websites, React experiences and digital products for ambitious brands.";

    /* -------------------------------------------------------
       BASIC SEO
    ------------------------------------------------------- */

    document.title = title;

    const setMeta = (
      name,
      content,
      attribute = "name"
    ) => {
      if (!content) return;

      let element = document.querySelector(
        `meta[${attribute}="${name}"]`
      );

      if (!element) {
        element = document.createElement("meta");

        element.setAttribute(
          attribute,
          name
        );

        document.head.appendChild(element);
      }

      element.setAttribute(
        "content",
        content
      );
    };

    setMeta(
      "description",
      description
    );

    setMeta(
      "keywords",
      [
        "web designer",
        "freelance web designer",
        "web design studio",
        "UI UX designer",
        "UI UX design",
        "web developer",
        "freelance web developer",
        "React developer",
        "frontend developer",
        "full stack developer",
        "website design",
        "custom website design",
        "website development",
        "React website development",
        "Figma to React",
        "digital product design",
        "responsive web design",
        "creative web design",
        "premium website design",
        "business website design",
        "web development agency",
        "website redesign",
      ].join(", ")
    );

    setMeta(
      "robots",
      "index, follow"
    );

    setMeta(
      "googlebot",
      "index, follow"
    );

    setMeta(
      "author",
      "Layoutly"
    );

    setMeta(
      "language",
      "English"
    );

    /* -------------------------------------------------------
       OPEN GRAPH
    ------------------------------------------------------- */

    setMeta(
      "og:title",
      title,
      "property"
    );

    setMeta(
      "og:description",
      description,
      "property"
    );

    setMeta(
      "og:type",
      "website",
      "property"
    );

    setMeta(
      "og:url",
      PAGE_URL,
      "property"
    );

    setMeta(
      "og:site_name",
      "Layoutly",
      "property"
    );

    setMeta(
      "og:locale",
      "en_IN",
      "property"
    );

    /* -------------------------------------------------------
       TWITTER
    ------------------------------------------------------- */

    setMeta(
      "twitter:card",
      "summary_large_image"
    );

    setMeta(
      "twitter:title",
      title
    );

    setMeta(
      "twitter:description",
      description
    );

    /* -------------------------------------------------------
       CANONICAL
    ------------------------------------------------------- */

    let canonical =
      document.querySelector(
        'link[rel="canonical"]'
      );

    if (!canonical) {
      canonical =
        document.createElement(
          "link"
        );

      canonical.setAttribute(
        "rel",
        "canonical"
      );

      document.head.appendChild(
        canonical
      );
    }

    canonical.setAttribute(
      "href",
      PAGE_URL
    );

    /* =====================================================
       STRUCTURED DATA
    ====================================================== */

    const structuredData = {
      "@context":
        "https://schema.org",

      "@graph": [
        {
          "@type":
            "Organization",

          "@id":
            `${SITE_URL}/#organization`,

          name: "Layoutly",

          url: SITE_URL,

          description:
            "Layoutly is an independent web design and development studio creating premium websites, UI/UX experiences, React websites and digital products.",

          email:
            "mailto:layoutly5@gmail.com",

          sameAs: [],
        },

        {
          "@type":
            "ProfessionalService",

          "@id":
            `${SITE_URL}/#professional-service`,

          name: "Layoutly",

          url: SITE_URL,

          description:
            "Premium web design, UI/UX design and web development services by Layoutly.",

          provider: {
            "@id":
              `${SITE_URL}/#organization`,
          },

          serviceType: [
            "Web Design",
            "UI/UX Design",
            "Website Development",
            "React Development",
            "Frontend Development",
            "Full Stack Development",
            "Website Redesign",
            "Digital Product Design",
          ],

          areaServed: {
            "@type":
              "Place",

            name:
              "Worldwide",
          },

          availableLanguage:
            "English",
        },

        {
          "@type":
            "WebSite",

          "@id":
            `${SITE_URL}/#website`,

          name: "Layoutly",

          url: SITE_URL,

          publisher: {
            "@id":
              `${SITE_URL}/#organization`,
          },
        },

        {
          "@type":
            "WebPage",

          "@id":
            `${PAGE_URL}/#webpage`,

          url: PAGE_URL,

          name: title,

          description,

          isPartOf: {
            "@id":
              `${SITE_URL}/#website`,
          },

          about: {
            "@id":
              `${SITE_URL}/#organization`,
          },

          breadcrumb: {
            "@id":
              `${PAGE_URL}/#breadcrumbs`,
          },

          inLanguage:
            "en-IN",
        },

        {
          "@type":
            "ContactPage",

          "@id":
            `${PAGE_URL}/#contact`,

          url: PAGE_URL,

          name: title,

          description,

          mainEntity: {
            "@id":
              `${SITE_URL}/#organization`,
          },
        },

        {
          "@type":
            "BreadcrumbList",

          "@id":
            `${PAGE_URL}/#breadcrumbs`,

          itemListElement: [
            {
              "@type":
                "ListItem",

              position: 1,

              name: "Home",

              item: SITE_URL,
            },

            {
              "@type":
                "ListItem",

              position: 2,

              name: "Contact",

              item: PAGE_URL,
            },
          ],
        },
      ],
    };

    let schema =
      document.querySelector(
        'script[data-page-schema="contact"]'
      );

    if (!schema) {
      schema =
        document.createElement(
          "script"
        );

      schema.type =
        "application/ld+json";

      schema.setAttribute(
        "data-page-schema",
        "contact"
      );

      document.head.appendChild(
        schema
      );
    }

    schema.textContent =
      JSON.stringify(
        structuredData
      );

    /* -------------------------------------------------------
       CLEANUP
    ------------------------------------------------------- */

    return () => {
      const existingSchema =
        document.querySelector(
          'script[data-page-schema="contact"]'
        );

      if (existingSchema) {
        existingSchema.remove();
      }
    };
  }, []);

  /* =======================================================
     HANDLE CHANGE
  ======================================================== */

  const handleChange = (e) => {
    const {
      id,
      value,
    } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  /* =======================================================
     HANDLE SUBMIT
  ======================================================== */

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (status.loading) return;

    setStatus({
      loading: true,
      success: false,
      error: false,
      message: "",
    });

    const serviceID =
      "service_9dn5b0v";

    const templateID =
      "template_pahv9al";

    const publicKey =
      "IO3f-7lAZiQYlp2hc";

    const templateParams = {
      name: formData.name,
      email: formData.email,
      service: formData.service,
      budget: formData.budget,
      details: formData.details,
    };

    try {
      await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );

      setStatus({
        loading: false,
        success: true,
        error: false,
        message:
          "Thank you! Your inquiry has been sent. We'll get back to you within 24 hours.",
      });

      setFormData({
        name: "",
        email: "",
        service: "",
        budget: "",
        details: "",
      });

      window.setTimeout(() => {
        setStatus((prev) => ({
          ...prev,
          success: false,
          message: "",
        }));
      }, 6000);
    } catch (error) {
      console.error(
        "EmailJS error:",
        error
      );

      setStatus({
        loading: false,
        success: false,
        error: true,
        message:
          "Something went wrong. Please try again or email us directly at layoutly5@gmail.com",
      });
    }
  };

  /* =======================================================
     WHATSAPP
  ======================================================== */

  const whatsappUrl =
    "https://wa.me/918734010298?text=" +
    encodeURIComponent(
      "Hi Layoutly, I would like to discuss a project."
    );

  /* =======================================================
     RENDER
  ======================================================== */

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0B2430] text-white">

      {/* =====================================================
          CINEMATIC BACKGROUND
      ====================================================== */}

      <div
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
          "
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
            backgroundSize:
              "80px 80px",
          }}
        />

        <div
          className="
            absolute
            left-[-180px]
            top-[5%]
            h-[600px]
            w-[600px]
            rounded-full
            bg-[#4B7E91]/10
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            right-[-220px]
            top-[35%]
            h-[650px]
            w-[650px]
            rounded-full
            bg-[#183F4D]/60
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            bottom-[-300px]
            left-[30%]
            h-[650px]
            w-[650px]
            rounded-full
            bg-[#091D27]/80
            blur-[100px]
          "
        />

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
          pb-16
          pt-32
          sm:pt-36
          md:px-10
          md:pb-20
          md:pt-44
        "
        aria-labelledby="contact-heading"
      >
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mx-auto max-w-4xl text-center"
          >
            <div
              className="
                mx-auto
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
                  bg-[#9ABCC5]
                  shadow-[0_0_12px_rgba(154,188,197,0.6)]
                "
                aria-hidden="true"
              />

              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                  text-white/55
                "
              >
                Let's Work Together
              </span>
            </div>

            <motion.h1
              id="contact-heading"
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.75,
                delay: 0.08,
                ease: [
                  0.16,
                  1,
                  0.3,
                  1,
                ],
              }}
              className="
                mt-8
                font-serif
                text-[3.4rem]
                font-medium
                leading-[0.9]
                tracking-[-0.055em]
                text-[#F3F5F4]
                sm:text-6xl
                md:text-8xl
                lg:text-[7rem]
              "
            >
              Start Your
              <br />

              <span className="text-[#9FBAC0]">
                Web Project.
              </span>
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.55,
                delay: 0.2,
                ease: [
                  0.16,
                  1,
                  0.3,
                  1,
                ],
              }}
              className="
                mx-auto
                mt-8
                max-w-xl
                text-sm
                leading-7
                text-white/50
                sm:text-base
              "
            >
              Tell us about your website,
              UI/UX design or web
              development project. We'll
              turn your vision into a
              thoughtful, high-performing
              digital experience.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          MAIN CONTENT
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
        aria-label="Project inquiry"
      >
        <div
          className="
            grid
            grid-cols-1
            gap-5
            lg:grid-cols-12
          "
        >

          {/* =================================================
              FORM
          ================================================== */}

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeLeft}
            className="
              relative
              overflow-hidden
              rounded-[2px]
              border
              border-white/[0.1]
              bg-[#091E28]/80
              p-6
              shadow-[0_30px_100px_rgba(0,0,0,0.2)]
              backdrop-blur-xl
              md:p-9
              lg:col-span-7
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                inset-x-0
                top-0
                h-px
                bg-gradient-to-r
                from-transparent
                via-white/30
                to-transparent
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                right-7
                top-7
                hidden
                text-[8px]
                uppercase
                tracking-[0.25em]
                text-white/20
                sm:block
              "
            >
              LY / 01
            </div>

            <div className="mb-9">
              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.28em]
                  text-[#8CAAB2]
                "
              >
                Project Inquiry
              </p>

              <h2
                className="
                  mt-3
                  max-w-lg
                  font-serif
                  text-3xl
                  leading-tight
                  tracking-[-0.025em]
                  text-[#F0F3F2]
                  md:text-4xl
                "
              >
                Tell us what you're
                building.
              </h2>

              <p
                className="
                  mt-3
                  max-w-xl
                  text-sm
                  leading-7
                  text-white/40
                "
              >
                The more details you provide,
                the better we can understand
                your project and prepare the
                right approach.
              </p>
            </div>

            {/* FORM */}

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* NAME + EMAIL */}

              <div
                className="
                  grid
                  grid-cols-1
                  gap-5
                  md:grid-cols-2
                "
              >

                {/* NAME */}

                <div>
                  <FieldLabel
                    icon={UserRound}
                    htmlFor="name"
                  >
                    Full Name
                  </FieldLabel>

                  <div className="relative">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Jane Doe"
                      required
                      autoComplete="name"
                      value={formData.name}
                      onChange={
                        handleChange
                      }
                      className="
                        peer
                        w-full
                        rounded-none
                        border
                        border-white/[0.1]
                        bg-[#071923]/80
                        px-4
                        py-4
                        text-sm
                        text-white
                        outline-none
                        placeholder:text-white/25
                        transition-all
                        duration-300
                        focus:border-white/30
                        focus:bg-[#0A202B]
                        focus:shadow-[0_0_0_3px_rgba(159,186,192,0.04)]
                      "
                    />

                    <div
                      className="
                        pointer-events-none
                        absolute
                        bottom-0
                        left-0
                        h-px
                        w-0
                        bg-[#9FBAC0]
                        transition-all
                        duration-300
                        peer-focus:w-full
                      "
                    />
                  </div>
                </div>

                {/* EMAIL */}

                <div>
                  <FieldLabel
                    icon={Mail}
                    htmlFor="email"
                  >
                    Work Email
                  </FieldLabel>

                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="jane@company.com"
                      required
                      autoComplete="email"
                      value={formData.email}
                      onChange={
                        handleChange
                      }
                      className="
                        peer
                        w-full
                        rounded-none
                        border
                        border-white/[0.1]
                        bg-[#071923]/80
                        px-4
                        py-4
                        text-sm
                        text-white
                        outline-none
                        placeholder:text-white/25
                        transition-all
                        duration-300
                        focus:border-white/30
                        focus:bg-[#0A202B]
                        focus:shadow-[0_0_0_3px_rgba(159,186,192,0.04)]
                      "
                    />

                    <div
                      className="
                        pointer-events-none
                        absolute
                        bottom-0
                        left-0
                        h-px
                        w-0
                        bg-[#9FBAC0]
                        transition-all
                        duration-300
                        peer-focus:w-full
                      "
                    />
                  </div>
                </div>
              </div>

              {/* SERVICE */}

              <div>
                <FieldLabel
                  icon={WalletCards}
                  htmlFor="service"
                >
                  Primary Service Needed
                </FieldLabel>

                <div className="relative">
                  <select
                    id="service"
                    name="service"
                    required
                    value={
                      formData.service
                    }
                    onChange={
                      handleChange
                    }
                    className="
                      w-full
                      appearance-none
                      rounded-none
                      border
                      border-white/[0.1]
                      bg-[#071923]/80
                      px-4
                      py-4
                      pr-12
                      text-sm
                      text-white
                      outline-none
                      transition-all
                      duration-300
                      focus:border-white/30
                      focus:bg-[#0A202B]
                    "
                  >
                    <option
                      disabled
                      value=""
                      className="bg-[#091E28]"
                    >
                      Select a service category
                    </option>

                    <option
                      value="web_design"
                      className="bg-[#091E28]"
                    >
                      Website Design
                    </option>

                    <option
                      value="ui_ux"
                      className="bg-[#091E28]"
                    >
                      UI/UX Design
                    </option>

                    <option
                      value="frontend"
                      className="bg-[#091E28]"
                    >
                      Frontend / React Development
                    </option>

                    <option
                      value="full_stack"
                      className="bg-[#091E28]"
                    >
                      Full-Stack Web Development
                    </option>

                    <option
                      value="redesign"
                      className="bg-[#091E28]"
                    >
                      Website Redesign
                    </option>

                    <option
                      value="consulting"
                      className="bg-[#091E28]"
                    >
                      Web Development Consulting
                    </option>
                  </select>

                  <ArrowDown />
                </div>
              </div>

              {/* BUDGET */}

              <div>
                <FieldLabel
                  icon={WalletCards}
                  htmlFor="budget"
                >
                  Estimated Budget
                </FieldLabel>

                <div className="relative">
                  <select
                    id="budget"
                    name="budget"
                    required
                    value={
                      formData.budget
                    }
                    onChange={
                      handleChange
                    }
                    className="
                      w-full
                      appearance-none
                      rounded-none
                      border
                      border-white/[0.1]
                      bg-[#071923]/80
                      px-4
                      py-4
                      pr-12
                      text-sm
                      text-white
                      outline-none
                      transition-all
                      duration-300
                      focus:border-white/30
                      focus:bg-[#0A202B]
                    "
                  >
                    <option
                      disabled
                      value=""
                      className="bg-[#091E28]"
                    >
                      Select budget range
                    </option>

                    <option
                      value="less_350"
                      className="bg-[#091E28]"
                    >
                      Less than $350
                    </option>

                    <option
                      value="350_1199"
                      className="bg-[#091E28]"
                    >
                      $350 – $1,199
                    </option>

                    <option
                      value="1200_2500"
                      className="bg-[#091E28]"
                    >
                      $1,200 – $2,500
                    </option>

                    <option
                      value="3500_plus"
                      className="bg-[#091E28]"
                    >
                      $3,500+
                    </option>
                  </select>

                  <ArrowDown />
                </div>
              </div>

              {/* DETAILS */}

              <div>
                <FieldLabel
                  icon={MessageCircle}
                  htmlFor="details"
                >
                  Project Details
                </FieldLabel>

                <div className="relative">
                  <textarea
                    id="details"
                    name="details"
                    rows="6"
                    required
                    value={
                      formData.details
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="Briefly describe your goals, timeline, and any specific requirements..."
                    className="
                      peer
                      w-full
                      resize-y
                      rounded-none
                      border
                      border-white/[0.1]
                      bg-[#071923]/80
                      px-4
                      py-4
                      text-sm
                      leading-7
                      text-white
                      outline-none
                      placeholder:text-white/25
                      transition-all
                      duration-300
                      focus:border-white/30
                      focus:bg-[#0A202B]
                      focus:shadow-[0_0_0_3px_rgba(159,186,192,0.04)]
                    "
                  />

                  <div
                    className="
                      pointer-events-none
                      absolute
                      bottom-0
                      left-0
                      h-px
                      w-0
                      bg-[#9FBAC0]
                      transition-all
                      duration-300
                      peer-focus:w-full
                    "
                  />
                </div>
              </div>

              {/* SUBMIT */}

              <motion.button
                type="submit"
                disabled={
                  status.loading
                }
                whileTap={{
                  scale: 0.985,
                }}
                className="
                  group
                  relative
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  overflow-hidden
                  rounded-full
                  border
                  border-white/[0.15]
                  bg-white/[0.08]
                  px-6
                  py-4
                  text-sm
                  font-medium
                  text-white
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-white/25
                  hover:bg-white/[0.13]
                  disabled:cursor-not-allowed
                  disabled:opacity-50
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
                    via-white/[0.08]
                    to-transparent
                    transition-transform
                    duration-700
                    group-hover:translate-x-full
                  "
                />

                {status.loading ? (
                  <>
                    <span
                      className="
                        relative
                        z-10
                        h-4
                        w-4
                        animate-spin
                        rounded-full
                        border-2
                        border-white/20
                        border-t-white
                      "
                    />

                    <span className="relative z-10">
                      Sending...
                    </span>
                  </>
                ) : (
                  <>
                    <Send
                      className="
                        relative
                        z-10
                        h-4
                        w-4
                        transition-transform
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                      "
                      strokeWidth={1.4}
                    />

                    <span className="relative z-10">
                      Submit Project Inquiry
                    </span>

                    <ArrowRight
                      className="
                        relative
                        z-10
                        h-4
                        w-4
                        transition-transform
                        group-hover:translate-x-1
                      "
                      strokeWidth={1.4}
                    />
                  </>
                )}
              </motion.button>

              {/* STATUS */}

              <AnimatePresence mode="wait">

                {status.success && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: -8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -8,
                    }}
                    className="
                      flex
                      items-start
                      gap-3
                      border
                      border-[#8CAAB2]/20
                      bg-[#8CAAB2]/[0.06]
                      p-4
                      text-sm
                      text-[#B6CCD1]
                    "
                  >
                    <CheckCircle2
                      className="
                        mt-0.5
                        h-5
                        w-5
                        flex-shrink-0
                        text-[#9FBAC0]
                      "
                    />

                    <span>
                      {status.message}
                    </span>
                  </motion.div>
                )}

                {status.error && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: -8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -8,
                    }}
                    className="
                      flex
                      items-start
                      gap-3
                      border
                      border-red-300/15
                      bg-red-300/[0.04]
                      p-4
                      text-sm
                      text-red-200/75
                    "
                  >
                    <XCircle
                      className="
                        mt-0.5
                        h-5
                        w-5
                        flex-shrink-0
                      "
                    />

                    <span>
                      {status.message}
                    </span>
                  </motion.div>
                )}

              </AnimatePresence>

              <p
                className="
                  text-center
                  text-[9px]
                  uppercase
                  tracking-[0.18em]
                  text-white/25
                "
              >
                We'll never share your
                information.
              </p>
            </form>
          </motion.div>

          {/* =================================================
              RIGHT SIDE
          ================================================== */}

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeRight}
            className="
              flex
              flex-col
              gap-5
              lg:col-span-5
            "
          >

            {/* RESPONSE */}

            <InfoCard
              icon={CalendarClock}
              eyebrow="01 / Response"
              title="Fast Response Time"
              description="We typically review new inquiries and respond within 24 business hours to schedule an initial discovery call."
            />

            {/* EMAIL */}

            <InfoCard
              icon={Mail}
              eyebrow="02 / Direct Contact"
              title="Prefer Email?"
              description="Reach out directly and we'll get back to you with the next steps."
            >
              <a
                href="mailto:layoutly5@gmail.com"
                className="
                  group
                  mt-5
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  text-[#A8C1C7]
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                layoutly5@gmail.com

                <ArrowUpRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </a>
            </InfoCard>

            {/* WHATSAPP */}

            <div
              className="
                group
                relative
                overflow-hidden
                border
                border-white/[0.09]
                bg-white/[0.025]
                p-6
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-white/[0.15]
                hover:bg-white/[0.04]
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  right-[-90px]
                  top-[-90px]
                  h-56
                  w-56
                  rounded-full
                  bg-[#86AAB5]/[0.07]
                  blur-3xl
                "
              />

              <div className="relative flex items-start gap-4">

                <div
                  className="
                    flex
                    h-12
                    w-12
                    flex-shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/[0.1]
                    bg-white/[0.04]
                  "
                >
                  <MessageCircle
                    className="h-5 w-5 text-[#9FBAC0]"
                    strokeWidth={1.3}
                  />
                </div>

                <div>
                  <p
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.22em]
                      text-white/35
                    "
                  >
                    03 / Quick Chat
                  </p>

                  <h3
                    className="
                      mt-2
                      font-serif
                      text-2xl
                      tracking-[-0.02em]
                      text-[#EFF2F1]
                    "
                  >
                    Let's Talk on WhatsApp
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-7
                      text-white/40
                    "
                  >
                    Have a quick question or
                    want to discuss your idea
                    before submitting?
                  </p>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contact Layoutly on WhatsApp"
                    className="
                      group/link
                      mt-5
                      inline-flex
                      items-center
                      gap-2
                      text-[9px]
                      uppercase
                      tracking-[0.2em]
                      text-[#A8C1C7]
                      transition-colors
                      duration-300
                      hover:text-white
                    "
                  >
                    Open WhatsApp

                    <ArrowUpRight
                      className="
                        h-4
                        w-4
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
            </div>

            {/* TRUST */}

            <div
              className="
                border
                border-white/[0.07]
                bg-[#081A24]/50
                p-6
                backdrop-blur-xl
              "
            >
              <div className="flex items-center justify-between">
                <p
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.24em]
                    text-white/35
                  "
                >
                  Your information is safe
                </p>

                <ShieldCheck
                  className="h-4 w-4 text-white/30"
                  strokeWidth={1.2}
                />
              </div>

              <div
                className="
                  mt-6
                  grid
                  grid-cols-1
                  gap-4
                  sm:grid-cols-2
                "
              >
                <TrustItem
                  icon={LockKeyhole}
                  text="256-bit SSL Secure"
                />

                <TrustItem
                  icon={ShieldCheck}
                  text="100% Confidential"
                />

                <TrustItem
                  icon={Check}
                  text="No Spam"
                />

                <TrustItem
                  icon={Check}
                  text="No Hidden Fees"
                />
              </div>
            </div>

            {/* OUR WORK */}

            <Link
              to="/our-work"
              className="
                group
                flex
                items-center
                justify-between
                border
                border-white/[0.08]
                bg-white/[0.025]
                px-5
                py-5
                text-sm
                text-white/40
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-white/[0.16]
                hover:bg-white/[0.045]
                hover:text-white/75
              "
            >
              <span>
                Want to see what we've built?
              </span>

              <ArrowRight
                className="
                  h-4
                  w-4
                  transition-transform
                  group-hover:translate-x-1
                "
                strokeWidth={1.3}
              />
            </Link>
          </motion.div>
        </div>
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
        aria-labelledby="contact-cta"
      >
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            overflow-hidden
          "
          aria-hidden="true"
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
              bg-[#6C929D]/[0.045]
              blur-[120px]
            "
          />
        </div>

        <div className="relative mx-auto max-w-5xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeUp}
          >
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
                text-white/35
              "
            >
              One conversation can start it all
            </p>

            <h2
              id="contact-cta"
              className="
                mt-5
                font-serif
                text-4xl
                leading-[0.95]
                tracking-[-0.045em]
                text-[#F1F3F2]
                sm:text-5xl
                md:text-6xl
              "
            >
              Have a project
              <br />

              <span className="text-[#9FBAC0]">
                in mind?
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-lg
                text-sm
                leading-7
                text-white/40
              "
            >
              No complicated process. Just a
              conversation about what you're
              trying to build.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Start a conversation with Layoutly on WhatsApp"
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
                Start a Conversation
              </span>

              <ArrowRight
                className="
                  relative
                  z-10
                  h-4
                  w-4
                  transition-transform
                  group-hover:translate-x-1
                "
                strokeWidth={1.3}
              />
            </a>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      {/* If your existing Contact.jsx already has Footer,
          keep it here. */}

    </main>
  );
};

/* =========================================================
   ARROW DOWN
========================================================= */

const ArrowDown = () => {
  return (
    <svg
      className="
        pointer-events-none
        absolute
        right-4
        top-1/2
        h-4
        w-4
        -translate-y-1/2
        text-white/35
      "
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      <path
        d="m6 9 6 6 6-6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

/* =========================================================
   INFO CARD
========================================================= */

const InfoCard = ({
  icon: Icon,
  eyebrow,
  title,
  description,
  children,
}) => {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        border
        border-white/[0.08]
        bg-white/[0.025]
        p-6
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-white/[0.14]
        hover:bg-white/[0.04]
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          right-[-80px]
          top-[-80px]
          h-48
          w-48
          rounded-full
          bg-[#7A9FA8]/[0.045]
          blur-3xl
        "
      />

      <div className="relative flex items-start gap-4">
        <div
          className="
            flex
            h-12
            w-12
            flex-shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-white/[0.1]
            bg-white/[0.035]
          "
        >
          <Icon
            className="h-5 w-5 text-[#9FBAC0]"
            strokeWidth={1.3}
          />
        </div>

        <div>
          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.22em]
              text-white/35
            "
          >
            {eyebrow}
          </p>

          <h3
            className="
              mt-2
              font-serif
              text-2xl
              leading-tight
              tracking-[-0.02em]
              text-[#EDEFEF]
            "
          >
            {title}
          </h3>

          <p
            className="
              mt-2
              text-sm
              leading-7
              text-white/40
            "
          >
            {description}
          </p>

          {children}
        </div>
      </div>

      <div
        className="
          absolute
          bottom-0
          left-0
          h-px
          w-0
          bg-gradient-to-r
          from-[#9FBAC0]
          to-transparent
          transition-all
          duration-500
          group-hover:w-full
        "
      />
    </div>
  );
};

/* =========================================================
   TRUST ITEM
========================================================= */

const TrustItem = ({
  icon: Icon,
  text,
}) => {
  return (
    <div
      className="
        flex
        items-center
        gap-3
        text-[9px]
        uppercase
        tracking-[0.12em]
        text-white/35
      "
    >
      <Icon
        className="
          h-4
          w-4
          flex-shrink-0
          text-[#9FBAC0]/70
        "
        strokeWidth={1.3}
      />

      {text}
    </div>
  );
};

export default Contact;
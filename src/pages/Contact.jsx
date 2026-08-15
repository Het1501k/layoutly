import React, { useRef, useState } from "react";
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
   LIGHTWEIGHT ANIMATIONS
   Only opacity + transform.
   No blur animation.
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
      duration: 0.5,
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
      duration: 0.5,
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
      duration: 0.5,
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
        mb-2
        flex
        items-center
        gap-2
        text-[10px]
        font-medium
        uppercase
        tracking-[0.18em]
        text-[#718178]
      "
    >
      <Icon
        className="h-3.5 w-3.5 text-[#557963]"
        strokeWidth={1.4}
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
     HANDLE CHANGE
  ======================================================== */

  const handleChange = (e) => {
    const { id, value } = e.target;

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

    const serviceID = "service_9dn5b0v";
    const templateID = "template_pahv9al";
    const publicKey = "IO3f-7lAZiQYlp2hc";

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
      console.error("EmailJS error:", error);

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
          PERFORMANCE FRIENDLY BACKGROUND
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

        {/* Static green glow */}

        <div
          className="
            contact-glow
            absolute
            left-[8%]
            top-[5%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#0D3A29]/10
          "
        />

        {/* Static blue-green glow */}

        <div
          className="
            contact-glow
            contact-glow-blue
            absolute
            right-[-180px]
            top-[35%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#092C35]/10
          "
        />

        {/* Bottom glow */}

        <div
          className="
            contact-glow
            contact-glow-bottom
            absolute
            bottom-[-250px]
            left-[25%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#10442E]/10
          "
        />
      </div>

      {/* =====================================================
          HEADER
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
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.45,
              ease: [0.16, 1, 0.3, 1],
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
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#639176]
              "
            />

            Let's Work Together
          </motion.div>

          {/* Heading */}

          <div className="mt-7 overflow-hidden">
            <motion.h1
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.1,
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
              Start Your
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
                Project Today.
              </span>
            </motion.h1>
          </div>

          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.25,
              ease: [0.16, 1, 0.3, 1],
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
            Tell us about your idea, goals, and requirements.
            We'll turn your vision into a thoughtful digital
            experience.
          </motion.p>
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
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-6
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
              contact-panel
              relative
              overflow-hidden
              border
              border-white/[0.07]
              bg-[#070D0A]
              p-6
              shadow-[0_25px_80px_rgba(0,0,0,0.25)]
              md:p-8
              lg:col-span-7
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
                via-[#5D886F]
                to-transparent
              "
            />

            {/* Form header */}

            <div className="mb-8">
              <div className="flex items-center justify-between">

                <div>
                  <p
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.25em]
                      text-[#587363]
                    "
                  >
                    Project Inquiry
                  </p>

                  <h2
                    className="
                      mt-2
                      font-serif
                      text-3xl
                      text-[#E3EAE6]
                    "
                  >
                    Tell us what you're building.
                  </h2>
                </div>

                <div
                  className="
                    hidden
                    h-11
                    w-11
                    items-center
                    justify-center
                    border
                    border-[#3F614D]/30
                    bg-[#0A1710]
                    sm:flex
                  "
                >
                  <Send
                    className="
                      h-5
                      w-5
                      text-[#67927A]
                    "
                    strokeWidth={1.4}
                  />
                </div>
              </div>

              <p
                className="
                  mt-3
                  text-sm
                  leading-7
                  text-[#66746C]
                "
              >
                The more details you provide, the better
                we can understand your project and prepare
                the right approach.
              </p>
            </div>

            {/* FORM */}

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* Name + Email */}

              <div
                className="
                  grid
                  grid-cols-1
                  gap-5
                  md:grid-cols-2
                "
              >

                {/* Name */}

                <div>
                  <FieldLabel
                    icon={UserRound}
                    htmlFor="name"
                  >
                    Full Name
                  </FieldLabel>

                  <div className="group relative">

                    <input
                      id="name"
                      type="text"
                      placeholder="Jane Doe"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="
                        peer
                        w-full
                        border
                        border-white/[0.08]
                        bg-[#09100C]
                        px-4
                        py-3.5
                        text-sm
                        text-[#DCE5E0]
                        outline-none
                        placeholder:text-[#4D5A53]
                        transition-colors
                        duration-200
                        focus:border-[#527D63]
                        focus:bg-[#0B1510]
                        focus:shadow-[0_0_0_3px_rgba(65,100,79,0.08)]
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
                        bg-gradient-to-r
                        from-[#527D63]
                        to-[#8AAE9A]
                        transition-all
                        duration-300
                        peer-focus:w-full
                      "
                    />
                  </div>
                </div>

                {/* Email */}

                <div>
                  <FieldLabel
                    icon={Mail}
                    htmlFor="email"
                  >
                    Work Email
                  </FieldLabel>

                  <div className="group relative">

                    <input
                      id="email"
                      type="email"
                      placeholder="jane@company.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="
                        peer
                        w-full
                        border
                        border-white/[0.08]
                        bg-[#09100C]
                        px-4
                        py-3.5
                        text-sm
                        text-[#DCE5E0]
                        outline-none
                        placeholder:text-[#4D5A53]
                        transition-colors
                        duration-200
                        focus:border-[#527D63]
                        focus:bg-[#0B1510]
                        focus:shadow-[0_0_0_3px_rgba(65,100,79,0.08)]
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
                        bg-gradient-to-r
                        from-[#527D63]
                        to-[#8AAE9A]
                        transition-all
                        duration-300
                        peer-focus:w-full
                      "
                    />
                  </div>
                </div>
              </div>

              {/* Service */}

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
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="
                      w-full
                      appearance-none
                      border
                      border-white/[0.08]
                      bg-[#09100C]
                      px-4
                      py-3.5
                      pr-12
                      text-sm
                      text-[#DCE5E0]
                      outline-none
                      transition-colors
                      duration-200
                      focus:border-[#527D63]
                      focus:bg-[#0B1510]
                      focus:shadow-[0_0_0_3px_rgba(65,100,79,0.08)]
                    "
                  >
                    <option
                      disabled
                      value=""
                      className="bg-[#09100C]"
                    >
                      Select a service category
                    </option>

                    <option
                      value="ui_ux"
                      className="bg-[#09100C]"
                    >
                      UI/UX Design
                    </option>

                    <option
                      value="static_web"
                      className="bg-[#09100C]"
                    >
                      Static Web Development
                    </option>

                    <option
                      value="dynamic_web"
                      className="bg-[#09100C]"
                    >
                      Dynamic Web Development
                    </option>

                    <option
                      value="full_stack"
                      className="bg-[#09100C]"
                    >
                      Full-Stack Development
                    </option>

                    <option
                      value="consulting"
                      className="bg-[#09100C]"
                    >
                      Tech Consulting
                    </option>
                  </select>

                  <ArrowDown />
                </div>
              </div>

              {/* Budget */}

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
                    required
                    value={formData.budget}
                    onChange={handleChange}
                    className="
                      w-full
                      appearance-none
                      border
                      border-white/[0.08]
                      bg-[#09100C]
                      px-4
                      py-3.5
                      pr-12
                      text-sm
                      text-[#DCE5E0]
                      outline-none
                      transition-colors
                      duration-200
                      focus:border-[#527D63]
                      focus:bg-[#0B1510]
                      focus:shadow-[0_0_0_3px_rgba(65,100,79,0.08)]
                    "
                  >
                    <option
                      disabled
                      value=""
                      className="bg-[#09100C]"
                    >
                      Select budget range
                    </option>

                    <option
                      value="less_5k"
                      className="bg-[#09100C]"
                    >
                      Less than ₹5,000
                    </option>

                    <option
                      value="5k_15k"
                      className="bg-[#09100C]"
                    >
                      ₹5,000 – ₹15,000
                    </option>

                    <option
                      value="15k_35k"
                      className="bg-[#09100C]"
                    >
                      ₹15,000 – ₹35,000
                    </option>

                    <option
                      value="35k_plus"
                      className="bg-[#09100C]"
                    >
                      ₹35,000+
                    </option>
                  </select>

                  <ArrowDown />
                </div>
              </div>

              {/* Details */}

              <div>
                <FieldLabel
                  icon={MessageCircle}
                  htmlFor="details"
                >
                  Project Details
                </FieldLabel>

                <div className="group relative">

                  <textarea
                    id="details"
                    rows="6"
                    required
                    value={formData.details}
                    onChange={handleChange}
                    placeholder="Briefly describe your goals, timeline, and any specific requirements..."
                    className="
                      peer
                      w-full
                      resize-y
                      border
                      border-white/[0.08]
                      bg-[#09100C]
                      px-4
                      py-3.5
                      text-sm
                      leading-7
                      text-[#DCE5E0]
                      outline-none
                      placeholder:text-[#4D5A53]
                      transition-colors
                      duration-200
                      focus:border-[#527D63]
                      focus:bg-[#0B1510]
                      focus:shadow-[0_0_0_3px_rgba(65,100,79,0.08)]
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
                      bg-gradient-to-r
                      from-[#527D63]
                      to-[#8AAE9A]
                      transition-all
                      duration-300
                      peer-focus:w-full
                    "
                  />
                </div>
              </div>

              {/* Submit */}

              <motion.button
                type="submit"
                disabled={status.loading}
                className="
                  contact-submit
                  group
                  relative
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  overflow-hidden
                  border
                  border-[#4C765F]/40
                  bg-[#153428]
                  px-6
                  py-4
                  text-sm
                  font-medium
                  text-[#E2EAE5]
                  shadow-[0_15px_50px_rgba(15,58,40,0.2)]
                  transition-transform
                  duration-200
                  hover:-translate-y-1
                  hover:border-[#719B84]/50
                  hover:bg-[#1A3E30]
                  active:scale-[0.98]
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              >
                {/* Shine only on hover */}

                <span className="contact-button-shine" />

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
                        duration-200
                        group-hover:translate-x-1
                        group-hover:-translate-y-0.5
                      "
                      strokeWidth={1.5}
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
                        duration-200
                        group-hover:translate-x-1
                      "
                      strokeWidth={1.5}
                    />
                  </>
                )}
              </motion.button>

              {/* Status */}

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
                    transition={{
                      duration: 0.25,
                    }}
                    className="
                      flex
                      items-start
                      gap-3
                      border
                      border-[#35644A]/40
                      bg-[#0A1B12]
                      p-4
                      text-sm
                      text-[#94B6A2]
                    "
                  >
                    <CheckCircle2
                      className="
                        mt-0.5
                        h-5
                        w-5
                        flex-shrink-0
                        text-[#6FA082]
                      "
                    />

                    <span>{status.message}</span>
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
                    transition={{
                      duration: 0.25,
                    }}
                    className="
                      flex
                      items-start
                      gap-3
                      border
                      border-[#704343]/40
                      bg-[#1B0C0C]
                      p-4
                      text-sm
                      text-[#C99A9A]
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

                    <span>{status.message}</span>
                  </motion.div>
                )}

              </AnimatePresence>

              {/* Privacy note */}

              <p
                className="
                  text-center
                  text-[9px]
                  uppercase
                  tracking-[0.15em]
                  text-[#46564E]
                "
              >
                We'll never share your information.
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
              gap-4
              lg:col-span-5
            "
          >

            {/* Response */}

            <InfoCard
              icon={CalendarClock}
              eyebrow="01 / Response"
              title="Fast Response Time"
              description="We typically review new inquiries and respond within 24 business hours to schedule an initial discovery call."
            />

            {/* Email */}

            <InfoCard
              icon={Mail}
              eyebrow="02 / Direct Contact"
              title="Prefer Email?"
              description="Reach out directly to our team and we'll get back to you with the next steps."
            >
              <a
                href="mailto:layoutly5@gmail.com"
                className="
                  group
                  mt-4
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  text-[#719B83]
                  transition-colors
                  duration-200
                  hover:text-[#A0B9AA]
                "
              >
                layoutly5@gmail.com

                <ArrowUpRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-200
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                  strokeWidth={1.4}
                />
              </a>
            </InfoCard>

            {/* WhatsApp */}

            <div
              className="
                relative
                overflow-hidden
                border
                border-[#405F4D]/30
                bg-[#08120D]
                p-6
                transition-colors
                duration-200
                hover:border-[#5C876F]/40
              "
            >
              {/* Static decorative circle */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-16
                  -top-16
                  h-40
                  w-40
                  rounded-full
                  bg-[#12452F]/10
                  opacity-60
                "
              />

              <div
                className="
                  relative
                  flex
                  items-start
                  gap-4
                "
              >
                <div
                  className="
                    flex
                    h-12
                    w-12
                    flex-shrink-0
                    items-center
                    justify-center
                    border
                    border-[#3F664F]/30
                    bg-[#0B1B12]
                  "
                >
                  <MessageCircle
                    className="
                      h-5
                      w-5
                      text-[#6D9A80]
                    "
                    strokeWidth={1.4}
                  />
                </div>

                <div>
                  <p
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.2em]
                      text-[#577363]
                    "
                  >
                    03 / Quick Chat
                  </p>

                  <h3
                    className="
                      mt-2
                      font-serif
                      text-xl
                      text-[#DCE5E0]
                    "
                  >
                    Let's Talk on WhatsApp
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-7
                      text-[#68766F]
                    "
                  >
                    Have a quick question or want to
                    discuss your idea before submitting?
                  </p>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group/link
                      mt-4
                      inline-flex
                      items-center
                      gap-2
                      text-[10px]
                      uppercase
                      tracking-[0.16em]
                      text-[#719783]
                    "
                  >
                    Open WhatsApp

                    <ArrowUpRight
                      className="
                        h-4
                        w-4
                        transition-transform
                        duration-200
                        group-hover/link:-translate-y-0.5
                        group-hover/link:translate-x-0.5
                      "
                      strokeWidth={1.4}
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* =================================================
                TRUST
            ================================================== */}

            <div
              className="
                border
                border-white/[0.06]
                bg-[#060B08]
                p-6
              "
            >
              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.25em]
                  text-[#52655A]
                "
              >
                Your information is safe
              </p>

              <div
                className="
                  mt-5
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

            {/* Small CTA */}

            <Link
              to="/our-work"
              className="
                group
                flex
                items-center
                justify-between
                border
                border-white/[0.06]
                bg-[#070D0A]
                px-5
                py-4
                text-sm
                text-[#68766F]
                transition-colors
                duration-200
                hover:border-[#466A55]/40
                hover:text-[#A0B3A8]
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
                  duration-200
                  group-hover:translate-x-1
                "
                strokeWidth={1.4}
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
          border-white/[0.05]
          bg-[#050907]
          px-6
          py-24
          md:px-10
        "
      >
        <div className="mx-auto max-w-5xl">

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
              amount: 0.2,
            }}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              relative
              overflow-hidden
              border
              border-[#405F4D]/25
              bg-[#070D0A]
              p-10
              text-center
              md:p-14
            "
          >
            {/* Static glow */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-72
                w-72
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#0D412D]/10
                opacity-60
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
              Have a project in mind?
            </h2>

            <p
              className="
                relative
                mx-auto
                mt-3
                max-w-xl
                text-sm
                leading-7
                text-[#68766F]
              "
            >
              No complicated process. Just a conversation
              about what you're trying to build.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                contact-cta
                group
                relative
                mt-7
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
                transition-transform
                duration-200
                hover:-translate-y-1
                hover:border-[#719B84]/50
                hover:bg-[#1A3E30]
                active:scale-[0.98]
              "
            >
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
            </a>
          </motion.div>

        </div>
      </section>
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
        text-[#5B7064]
      "
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
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
        contact-info-card
        group
        relative
        overflow-hidden
        border
        border-white/[0.07]
        bg-[#070D0A]
        p-6
      "
    >
      {/* Static decorative glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-40
          w-40
          rounded-full
          bg-[#16472F]/10
          opacity-60
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
            border
            border-[#3F664F]/30
            bg-[#0A1710]
          "
        >
          <Icon
            className="
              h-5
              w-5
              text-[#6A967D]
            "
            strokeWidth={1.4}
          />
        </div>

        <div>
          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-[#577363]
            "
          >
            {eyebrow}
          </p>

          <h3
            className="
              mt-2
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
        </div>
      </div>

      {/* Bottom accent */}

      <div
        className="
          contact-card-accent
          absolute
          bottom-0
          left-0
          h-px
          w-0
          bg-gradient-to-r
          from-[#527D63]
          to-transparent
        "
      />
    </div>
  );
};

/* =========================================================
   TRUST ITEM
========================================================= */

const TrustItem = ({ icon: Icon, text }) => {
  return (
    <div
      className="
        flex
        items-center
        gap-3
        text-[10px]
        uppercase
        tracking-[0.1em]
        text-[#617168]
      "
    >
      <Icon
        className="
          h-4
          w-4
          flex-shrink-0
          text-[#5F8C72]
        "
        strokeWidth={1.4}
      />

      {text}
    </div>
  );
};

export default Contact;
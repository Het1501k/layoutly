import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Mail,
  MapPin,
  Palette,
  Phone,
  Share2,
  Sparkles,
} from "lucide-react";

const Footer = () => {
  const companyLinks = [
    { path: "/about", label: "About" },
    { path: "/our-work", label: "Our Work" },
    { path: "/pricing", label: "Pricing" },
    { path: "/blog", label: "Blog" },
    { path: "/faq", label: "FAQ" },
  ];

  const services = [
    "Website Design",
    "UI/UX Design",
    "Web Development",
    "Landing Pages",
    "E-Commerce",
    "SEO Optimization",
  ];

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/layoutly.dev?igsh=b2w2eXYxNmUwY2Vz",
      icon: Share2,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/layoutlyweb/",
      icon: Code2,
    },
   
    {
      name: "GitHub",
      href: "https://github.com/layoutly",
      icon: Code2,
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#030605] text-[#E8EEE9]">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
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
          backgroundSize: "55px 55px",
        }}
      />

      {/* Green atmosphere */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-48
          left-1/3
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#0B3928]/15
          blur-[150px]
        "
      />

      {/* Blue-green atmosphere */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-10
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#092A31]/10
          blur-[130px]
        "
      />

      {/* =====================================================
          DECORATIVE LINES
      ====================================================== */}

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
          via-[#4B765F]/40
          to-transparent
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-[8%]
          top-20
          h-32
          w-32
          rotate-45
          border
          border-[#3B5E4C]/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[8%]
          bottom-24
          h-40
          w-40
          rotate-45
          border
          border-[#3B5E4C]/10
        "
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10">

        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-5 lg:gap-10">

          {/* =================================================
              BRAND
          ================================================= */}

          <div className="lg:col-span-2">

            <Link
              to="/"
              className="group inline-flex items-center gap-3"
            >
              <div
                className="
                  relative
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  border
                  border-[#4B745E]/30
                  bg-[#09120E]
                  transition-all
                  duration-500
                  group-hover:border-[#719B84]/50
                  group-hover:bg-[#0D1C14]
                "
              >
                <Sparkles
                  className="
                    h-5
                    w-5
                    text-[#6C997F]
                    transition-transform
                    duration-500
                    group-hover:rotate-12
                    group-hover:scale-110
                  "
                  strokeWidth={1.5}
                />

                <span
                  className="
                    absolute
                    right-0
                    top-0
                    h-2
                    w-2
                    border-r
                    border-t
                    border-[#6B947D]/50
                  "
                />

                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-2
                    w-2
                    border-b
                    border-l
                    border-[#6B947D]/50
                  "
                />
              </div>

              <span
                className="
                  font-serif
                  text-2xl
                  tracking-tight
                  text-[#E4EBE7]
                "
              >
                Layoutly
              </span>
            </Link>

            {/* Label */}

            <div
              className="
                mt-5
                flex
                items-center
                gap-2
                text-[9px]
                uppercase
                tracking-[0.25em]
                text-[#5D796B]
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#5C8B72]
                  shadow-[0_0_10px_rgba(92,139,114,0.8)]
                "
              />

              Digital product studio
            </div>

            {/* Description */}

            <p
              className="
                mt-5
                max-w-md
                text-sm
                leading-7
                text-[#6D7A73]
              "
            >
              We help startups, businesses, and brands build
              beautiful, high-performing digital experiences
              that create lasting impressions and deliver real
              business results.
            </p>

            {/* Social */}

            <div className="mt-8 flex flex-wrap gap-3">

              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="
                      group
                      flex
                      h-10
                      items-center
                      gap-2
                      border
                      border-white/[0.07]
                      bg-[#070D0A]
                      px-3.5
                      text-xs
                      text-[#69776F]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-[#4C735D]/40
                      hover:bg-[#0B1711]
                      hover:text-[#B3C4BA]
                    "
                  >
                    <Icon
                      className="
                        h-4
                        w-4
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      "
                      strokeWidth={1.5}
                    />

                    <span>{social.name}</span>
                  </a>
                );
              })}

            </div>
          </div>

          {/* =================================================
              COMPANY
          ================================================= */}

          <div>

            <h3
              className="
                mb-6
                text-[10px]
                font-medium
                uppercase
                tracking-[0.25em]
                text-[#789586]
              "
            >
              Company
            </h3>

            <div className="space-y-4">

              {companyLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-[#68766F]
                    transition-all
                    duration-300
                    hover:translate-x-1
                    hover:text-[#C1CEC7]
                  "
                >
                  <span
                    className="
                      h-px
                      w-0
                      bg-[#65927A]
                      transition-all
                      duration-300
                      group-hover:w-3
                    "
                  />

                  {link.label}
                </Link>
              ))}

            </div>
          </div>

          {/* =================================================
              SERVICES
          ================================================= */}

          <div>

            <h3
              className="
                mb-6
                text-[10px]
                font-medium
                uppercase
                tracking-[0.25em]
                text-[#789586]
              "
            >
              Services
            </h3>

            <div className="space-y-4">

              {services.map((service) => (
                <div
                  key={service}
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-[#68766F]
                    transition-colors
                    duration-300
                    hover:text-[#C1CEC7]
                  "
                >
                  <span
                    className="
                      h-1
                      w-1
                      rounded-full
                      bg-[#426650]
                      transition-all
                      duration-300
                      group-hover:bg-[#709A84]
                      group-hover:shadow-[0_0_8px_rgba(112,154,132,0.7)]
                    "
                  />

                  {service}
                </div>
              ))}

            </div>
          </div>

          {/* =================================================
              CONTACT
          ================================================= */}

          <div>

            <h3
              className="
                mb-6
                text-[10px]
                font-medium
                uppercase
                tracking-[0.25em]
                text-[#789586]
              "
            >
              Contact
            </h3>

            <div className="space-y-5 text-sm">

              {/* Location */}

              <div className="flex items-start gap-3">

                <MapPin
                  className="
                    mt-0.5
                    h-4
                    w-4
                    shrink-0
                    text-[#527B64]
                  "
                  strokeWidth={1.5}
                />

                <p className="leading-6 text-[#68766F]">
                  Ahmedabad,
                  <br />
                  Gujarat, India
                </p>

              </div>

              {/* Email */}

              <a
                href="mailto:layoutly5@gmail.com"
                className="
                  group
                  flex
                  items-center
                  gap-3
                  text-[#68766F]
                  transition-colors
                  duration-300
                  hover:text-[#B7C9BF]
                "
              >
                <Mail
                  className="
                    h-4
                    w-4
                    text-[#527B64]
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                  strokeWidth={1.5}
                />

                layoutly5@gmail.com
              </a>

              {/* Phone */}

              <a
                href="tel:+918734010298"
                className="
                  group
                  flex
                  items-center
                  gap-3
                  text-[#68766F]
                  transition-colors
                  duration-300
                  hover:text-[#B7C9BF]
                "
              >
                <Phone
                  className="
                    h-4
                    w-4
                    text-[#527B64]
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                  strokeWidth={1.5}
                />

                +91 8734010298
              </a>

              {/* CTA */}

              <Link
                to="/contact"
                className="
                  group
                  mt-2
                  inline-flex
                  items-center
                  gap-2
                  border
                  border-[#456A55]/30
                  bg-[#0A1710]
                  px-4
                  py-3
                  text-xs
                  font-medium
                  text-[#9BB0A5]
                  transition-all
                  duration-300
                  hover:border-[#69927B]/50
                  hover:bg-[#10251A]
                  hover:text-[#D6E1DB]
                "
              >
                Get in Touch

                <ArrowUpRight
                  className="
                    h-3.5
                    w-3.5
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </Link>

            </div>
          </div>
        </div>

        {/* =================================================
            DIVIDER
        ================================================= */}

        <div
          className="
            relative
            mt-16
            h-px
            bg-gradient-to-r
            from-transparent
            via-white/[0.08]
            to-transparent
          "
        >
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-1
              w-1
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#5C8B72]
              shadow-[0_0_12px_rgba(92,139,114,0.8)]
            "
          />
        </div>

        {/* =================================================
            BOTTOM BAR
        ================================================= */}

        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-5
            pt-7
            md:flex-row
          "
        >

          <p
            className="
              text-[11px]
              tracking-wide
              text-[#505D56]
            "
          >
            © {new Date().getFullYear()} Layoutly.
            All rights reserved.
          </p>

          <div className="flex items-center gap-6">

            <Link
              to="/privacy"
              className="
                text-[11px]
                text-[#505D56]
                transition-colors
                duration-300
                hover:text-[#9AAF9F]
              "
            >
              Privacy Policy
            </Link>

            <span className="h-3 w-px bg-white/[0.08]" />

            <Link
              to="/terms"
              className="
                text-[11px]
                text-[#505D56]
                transition-colors
                duration-300
                hover:text-[#9AAF9F]
              "
            >
              Terms & Conditions
            </Link>

          </div>
        </div>

        {/* =================================================
            STATUS
        ================================================= */}

        <div
          className="
            mt-8
            flex
            items-center
            justify-center
            gap-3
            text-[8px]
            uppercase
            tracking-[0.25em]
            text-[#3F4D45]
          "
        >
          <span className="flex items-center gap-2">

            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#5C8B72]
                shadow-[0_0_8px_rgba(92,139,114,0.8)]
              "
            />

            Systems online

          </span>

          <span className="h-3 w-px bg-white/[0.07]" />

          <span>Built with intention</span>
        </div>
      </div>

      {/* =====================================================
          ANIMATED BOTTOM LINE
      ====================================================== */}

      <div className="absolute bottom-0 left-0 right-0 h-px overflow-hidden">

        <div
          className="
            h-full
            w-1/3
            animate-[footerLine_6s_linear_infinite]
            bg-gradient-to-r
            from-transparent
            via-[#5C8C73]
            to-transparent
          "
        />

      </div>

      <style>
        {`
          @keyframes footerLine {
            0% {
              transform: translateX(-100%);
            }

            100% {
              transform: translateX(400%);
            }
          }
        `}
      </style>

    </footer>
  );
};

export default Footer;
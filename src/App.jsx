import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.optimized";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import SmoothScroll from "./components/SmoothScroll";
import WhatsAppButton from "./components/WhatsAppButton";

// =====================================================
// LAZY-LOADED PAGES
// =====================================================

const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const Pricing = lazy(() => import("./pages/Pricing"));
const OurWork = lazy(() => import("./pages/OurWork"));
const CaseStudy = lazy(() => import("./pages/CaseStudy"));
const About = lazy(() => import("./pages/About"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Contact = lazy(() => import("./pages/Contact"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const Blog = lazy(() => import("./pages/Blog"));

// =====================================================
// PAGE LOADER
// =====================================================

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-[#030605]">
      <div
        className="
          h-8
          w-8
          rounded-full
          border-2
          border-[#3F6F58]
          border-t-transparent
          animate-spin
        "
      />
    </div>
  );
}

// =====================================================
// APP
// =====================================================

function App() {
  return (
    <Router>
      {/* ===============================================
          LOCOMOTIVE SCROLL
      =============================================== */}

      <SmoothScroll />

      {/* ===============================================
          RESET SCROLL POSITION WHEN ROUTE CHANGES
      =============================================== */}

      <ScrollToTop />

      {/* ===============================================
          MAIN APP
      =============================================== */}

      <div className="flex min-h-screen flex-col bg-[#030605]">

        {/* NAVBAR */}
        <Navbar />

        {/* =============================================
            PAGE CONTENT
        ============================================= */}

        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>

              {/* HOME */}
              <Route
                path="/"
                element={<Home />}
              />

              {/* SERVICES */}
              <Route
                path="/services"
                element={<Services />}
              />

              {/* PRICING */}
              <Route
                path="/pricing"
                element={<Pricing />}
              />

              {/* OUR WORK */}
              <Route
                path="/our-work"
                element={<OurWork />}
              />

              {/* ABOUT */}
              <Route
                path="/about"
                element={<About />}
              />

              {/* FAQ */}
              <Route
                path="/faq"
                element={<FAQ />}
              />

              {/* CONTACT */}
              <Route
                path="/contact"
                element={<Contact />}
              />

              {/* THANK YOU */}
              <Route
                path="/thank-you"
                element={<ThankYou />}
              />

              {/* BLOG */}
              <Route
                path="/blog"
                element={<Blog />}
              />

              {/* CASE STUDY */}
              <Route
                path="/case-study/:id"
                element={<CaseStudy />}
              />

            </Routes>
          </Suspense>
        </main>

        {/* =============================================
            FOOTER
        ============================================= */}

        <Footer />

        {/* =============================================
            FLOATING WHATSAPP
        ============================================= */}

        <WhatsAppButton />

      </div>
    </Router>
  );
}

export default App;
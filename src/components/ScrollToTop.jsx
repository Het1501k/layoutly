import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Wait until the new route has rendered
    const scrollToTop = () => {
      const locomotive = window.__locomotiveScroll;

      if (locomotive) {
        try {
          locomotive.scrollTo(0, {
            duration: 0,
            disableLerp: true,
            offset: 0,
          });

          console.log("🟢 Locomotive moved to top:", pathname);
        } catch (error) {
          console.warn("Locomotive scrollTo failed:", error);

          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "auto",
          });
        }
      } else {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "auto",
        });
      }
    };

    // First frame
    const frame1 = requestAnimationFrame(() => {
      // Second frame ensures the new page is mounted
      const frame2 = requestAnimationFrame(scrollToTop);

      // Cleanup second frame
      return () => cancelAnimationFrame(frame2);
    });

    return () => cancelAnimationFrame(frame1);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
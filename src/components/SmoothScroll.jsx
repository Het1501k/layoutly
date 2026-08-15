import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const SmoothScroll = () => {
  useEffect(() => {
    let scroll;

    const initScroll = () => {
      scroll = new LocomotiveScroll({
        smooth: true,
        lerp: 0.075,
        multiplier: 1,
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
      });

      // Make the instance available to ScrollToTop
      window.__locomotiveScroll = scroll;

      console.log("🟢 Locomotive Scroll initialized");

      return scroll;
    };

    const instance = initScroll();

    return () => {
      if (instance) {
        instance.destroy();
      }

      window.__locomotiveScroll = null;
    };
  }, []);

  return null;
};

export default SmoothScroll;
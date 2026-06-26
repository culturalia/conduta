"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    // Small delay to let new page DOM render
    const timer = setTimeout(() => {
      const revealElements = document.querySelectorAll(".reveal:not(.visible)");

      if (revealElements.length === 0) return;

      const revealObs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("visible");
              revealObs.unobserve(e.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
      );

      revealElements.forEach((el) => {
        revealObs.observe(el);
      });

      return () => {
        revealObs.disconnect();
      };
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

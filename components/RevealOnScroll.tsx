"use client";

import { useEffect } from "react";

export default function RevealOnScroll() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

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
  }, []);

  return null;
}

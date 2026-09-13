import {useEffect} from "react";

/**
 * Fades `.reveal` elements in as they enter the viewport.
 *
 * If IntersectionObserver is unavailable, or the visitor asked for reduced
 * motion, every element is marked visible immediately — the content must never
 * depend on the animation running.
 */
export function useReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll(".reveal"));
    if (nodes.length === 0) return;

    const showAll = () => nodes.forEach((n) => n.classList.add("is-in"));

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || typeof IntersectionObserver === "undefined") {
      showAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        });
      },
      {rootMargin: "0px 0px -8% 0px", threshold: 0.08}
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);
}

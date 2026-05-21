"use client";

import { useEffect, useRef } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type GsapCtx = any;

export function GsapAnimations() {
  const ctxRef = useRef<GsapCtx>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;
    // Will be called when resume:ready fires (or immediately if already fired)
    let triggerProfile: (() => void) | null = null;
    let profileReady = false;

    const onReady = () => {
      profileReady = true;
      triggerProfile?.();
    };
    // Register listener synchronously — before the async import below
    window.addEventListener("resume:ready", onReady, { once: true });

    (async () => {
      const { gsap } = await import("gsap");
      if (cancelled) return;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);

      ctxRef.current = gsap.context(() => {
        // ─────────────────────────────────────────────────────────────────
        // PROFILE HEADER
        // Set from-state immediately (hidden behind loading screen — no flash).
        // Animate to final state only when resume:ready fires.
        // ─────────────────────────────────────────────────────────────────
        const photo = document.querySelector('[data-gsap="profile-photo"]');
        const textCol = document.querySelector('[data-gsap="profile-text"]');
        const cta = document.querySelector('[data-gsap="profile-cta"]');

        if (photo) gsap.set(photo, { x: -45, opacity: 0, scale: 0.92 });
        if (textCol) gsap.set(Array.from(textCol.children), { x: 35, opacity: 0 });
        if (cta) gsap.set(Array.from(cta.children), { y: 18, opacity: 0, scale: 0.88 });

        triggerProfile = () => {
          if (photo) {
            gsap.to(photo, {
              x: 0, opacity: 1, scale: 1,
              duration: 0.95, ease: "expo.out",
            });
          }
          if (textCol) {
            gsap.to(Array.from(textCol.children), {
              x: 0, opacity: 1,
              duration: 0.7, ease: "power3.out",
              stagger: 0.09, delay: 0.15,
            });
          }
          if (cta) {
            gsap.to(Array.from(cta.children), {
              y: 0, opacity: 1, scale: 1,
              duration: 0.6, ease: "back.out(1.6)",
              stagger: 0.1, delay: 0.4,
            });
          }
        };

        // Event may have fired before async import completed
        if (profileReady) triggerProfile();

        // ─────────────────────────────────────────────────────────────────
        // SCROLL ANIMATIONS — initialised immediately so from-states are
        // applied while the loading screen still covers the page.
        // ScrollTrigger fires as soon as each element enters the viewport,
        // which naturally happens after the loading screen reveals.
        // once: true kills the trigger after first fire → no replay.
        // ─────────────────────────────────────────────────────────────────

        // Section cards — fade up
        gsap.utils.toArray<HTMLElement>('[data-gsap="section"]').forEach((el) => {
          gsap.fromTo(
            el,
            { y: 42, opacity: 0 },
            {
              y: 0, opacity: 1,
              duration: 0.78, ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 88%", once: true },
            }
          );
        });

        // Tech pills — scale in, staggered
        ScrollTrigger.batch('[data-gsap="tech-pill"]', {
          onEnter: (els) =>
            gsap.fromTo(els,
              { scale: 0.55, opacity: 0 },
              { scale: 1, opacity: 1, duration: 0.48, ease: "back.out(2.2)", stagger: 0.038 }
            ),
          start: "top 90%",
          once: true,
        });

        // Experience items — slide from right
        ScrollTrigger.batch('[data-gsap="exp-item"]', {
          onEnter: (els) =>
            gsap.fromTo(els,
              { x: 28, opacity: 0 },
              { x: 0, opacity: 1, duration: 0.52, ease: "power3.out", stagger: 0.055 }
            ),
          start: "top 90%",
          once: true,
        });

        // Project cards — pop up
        ScrollTrigger.batch('[data-gsap="project-card"]', {
          onEnter: (els) =>
            gsap.fromTo(els,
              { y: 32, opacity: 0, scale: 0.94 },
              { y: 0, opacity: 1, scale: 1, duration: 0.58, ease: "power3.out", stagger: 0.1 }
            ),
          start: "top 90%",
          once: true,
        });

        // Cert items — slide from left
        ScrollTrigger.batch('[data-gsap="cert-item"]', {
          onEnter: (els) =>
            gsap.fromTo(els,
              { x: -28, opacity: 0 },
              { x: 0, opacity: 1, duration: 0.52, ease: "power3.out", stagger: 0.06 }
            ),
          start: "top 90%",
          once: true,
        });

        // Connect columns — stagger up
        ScrollTrigger.batch('[data-gsap="connect-col"]', {
          onEnter: (els) =>
            gsap.fromTo(els,
              { y: 34, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.65, ease: "power3.out", stagger: 0.14 }
            ),
          start: "top 88%",
          once: true,
        });

        // Footer — fade up
        const footer = document.querySelector('[data-gsap="footer"]');
        if (footer) {
          gsap.fromTo(footer,
            { y: 18, opacity: 0 },
            {
              y: 0, opacity: 1,
              duration: 0.55, ease: "power2.out",
              scrollTrigger: { trigger: footer, start: "top 96%", once: true },
            }
          );
        }
      });
    })();

    return () => {
      cancelled = true;
      window.removeEventListener("resume:ready", onReady);
      ctxRef.current?.revert();
      ctxRef.current = null;
    };
  }, []);

  return null;
}

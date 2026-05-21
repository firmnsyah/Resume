"use client";

import { useEffect, useState } from "react";

type Phase = "loading" | "revealing" | "done";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<Phase>("loading");
  const [viewport, setViewport] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const updateViewport = () => {
      setViewport({ w: window.innerWidth, h: window.innerHeight });
    };
    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + 2;
      });
    }, 60);

    const revealTimer = setTimeout(() => setPhase("revealing"), 3300);
    const doneTimer = setTimeout(() => {
      setPhase("done");
      window.dispatchEvent(new CustomEvent("resume:ready"));
    }, 4700);

    return () => {
      clearInterval(interval);
      clearTimeout(revealTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "done") return null;

  const isRevealing = phase === "revealing";
  const cx = viewport.w / 2;
  const cy = viewport.h / 2;

  // Battery body 192x80; tip extends ~12px right of body
  const maxScale =
    Math.max(viewport.w / 192, viewport.h / 80) * 1.6 + 2;

  const fillColor =
    progress < 25 ? "#ef4444" : progress < 60 ? "#f59e0b" : "#10b981";

  return (
    <>
      <svg
        className="pointer-events-none fixed inset-0 z-[100]"
        width="100%"
        height="100%"
        aria-hidden
      >
        <defs>
          <mask id="batteryReveal" maskUnits="userSpaceOnUse">
            <rect width="100%" height="100%" fill="white" />
            <g
              style={{
                transform: `translate(${cx}px, ${cy}px) scale(${
                  isRevealing ? maxScale : 1
                })`,
                transition: isRevealing
                  ? "transform 1200ms cubic-bezier(0.65, 0, 0.35, 1)"
                  : "none",
              }}
            >
              <rect
                x="-96"
                y="-40"
                width="192"
                height="80"
                rx="29"
                fill="black"
              />
              <path
                d="M96 -18 A10 10 0 0 1 106 -8 L106 8 A10 10 0 0 1 96 18 Z"
                fill="black"
              />
            </g>
          </mask>
        </defs>
        <rect
          width="100%"
          height="100%"
          style={{ fill: "var(--neu-base)" }}
          mask="url(#batteryReveal)"
        />
      </svg>

      <div
        className={`fixed inset-0 z-[101] flex items-center justify-center transition-all ease-out ${
          isRevealing
            ? "pointer-events-none scale-[1.15] opacity-0 duration-500"
            : "scale-100 opacity-100 duration-300"
        }`}
        aria-hidden={isRevealing}
      >
        <div className="relative">
          <div className="neu-raised relative h-20 w-48 rounded-2xl p-2.5">
            <div className="neu-pressed-sm relative h-full w-full overflow-hidden rounded-xl">
              <div
                className="h-full transition-[width,background-color] duration-150 ease-out"
                style={{ width: `${progress}%`, backgroundColor: fillColor }}
              />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="h-8 w-8 text-[#facc15] drop-shadow-[0_2px_3px_rgba(0,0,0,0.35)]"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M13 2L4.09 12.97a.5.5 0 00.39.83H10v8l8.91-10.97a.5.5 0 00-.39-.83H13V2z" />
                </svg>
              </div>
              <div className="pointer-events-none absolute inset-0 flex items-center justify-around opacity-30">
                {Array.from({ length: 4 }).map((_, i) => (
                  <span key={i} className="h-8 w-px bg-[var(--neu-dark)]" />
                ))}
              </div>
            </div>
          </div>
          <div className="neu-raised-xs absolute left-full top-1/2 h-9 w-2.5 -translate-y-1/2 rounded-r-md" />

          <div className="absolute left-1/2 top-full mt-10 flex -translate-x-1/2 flex-col items-center gap-1.5 whitespace-nowrap">
            <span className="text-4xl font-bold tabular-nums text-[var(--neu-text)]">
              {progress}
              <span className="ml-0.5 text-2xl text-[var(--neu-text-soft)]">
                %
              </span>
            </span>
            <p className="animate-pulse text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-[var(--neu-text-soft)]">
              Firmansyah&apos;s Resume Loading
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

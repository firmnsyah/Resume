"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@/components/icons";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Read the class already applied by the blocking script in layout
    const alreadyDark = document.documentElement.classList.contains("dark");
    setIsDark(alreadyDark);
    setMounted(true);
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("neu-theme", next ? "dark" : "light");
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="neu-interactive relative inline-flex h-8 w-12.5 items-center rounded-full px-1 transition-opacity duration-200"
      style={{ opacity: mounted ? 1 : 0 }}
    >
      {/* Recessed track */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-1 rounded-full neu-pressed-sm"
      />
      {/* Sliding thumb */}
      <span
        className="neu-raised-xs relative z-10 flex h-6.5 w-6.5 items-center justify-center rounded-full text-neu-text transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
        style={{ transform: isDark ? "translateX(18px)" : "translateX(0px)" }}
      >
        {isDark
          ? <MoonIcon className="h-3.5 w-3.5" />
          : <SunIcon className="h-3.5 w-3.5" />}
      </span>
    </button>
  );
}

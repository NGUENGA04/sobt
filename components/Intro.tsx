"use client";

import { useEffect, useRef } from "react";

export function Intro() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const t = setTimeout(() => document.documentElement.classList.remove("play-intro"), 2000);
    return () => clearTimeout(t);
  }, []);
  return (
    <div ref={ref} className="intro" aria-hidden="true" onClick={() => document.documentElement.classList.remove("play-intro")}>
      <div className="sun-wrap">
        <div className="sun-core" />
        <svg className="sun-rays" viewBox="0 0 100 100">
          <path d="M50 8V20M50 80V92M8 50H20M80 50H92M20.3 20.3L28.8 28.8M71.2 71.2L79.7 79.7M20.3 79.7L28.8 71.2M71.2 28.8L79.7 20.3" stroke="#F5C214" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}

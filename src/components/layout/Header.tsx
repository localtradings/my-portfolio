"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import Navigation from "./Navigation";

function ThemeToggle({
  className = "",
  onToggle,
}: {
  className?: string;
  onToggle: () => void;
}) {
  return (
    <button
      aria-label="Toggle light and dark mode"
      className={[
        "group relative h-10 w-[4.75rem] overflow-hidden rounded-full border border-white/25 bg-white/15 p-1 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur transition hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-950 dark:bg-slate-950/70",
        className,
      ].join(" ")}
      onClick={onToggle}
      type="button"
    >
      <span className="sr-only">Toggle color theme</span>
      <span className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(253,224,71,0.24),_rgba(125,211,252,0.2))] opacity-100 transition-opacity duration-300 dark:opacity-0" />
      <span className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(15,23,42,0.2),_rgba(14,116,144,0.28))] opacity-0 transition-opacity duration-300 dark:opacity-100" />
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-200 transition duration-300 dark:scale-75 dark:opacity-35">
        <svg
          aria-hidden="true"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
          <path
            d="M12 2v2M12 20v2M4 12H2M22 12h-2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M19.07 4.93l-1.41 1.42M6.34 17.66l-1.41 1.41"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
          />
        </svg>
      </span>
      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-cyan-100 opacity-45 transition duration-300 dark:scale-110 dark:opacity-100">
        <svg
          aria-hidden="true"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5 8.5 8.5 0 1 0 20.5 14.5Z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span className="absolute left-1 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-white shadow-lg shadow-slate-950/20 transition-transform duration-300 ease-out group-hover:scale-105 dark:translate-x-9 dark:bg-cyan-200" />
    </button>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = savedTheme ? savedTheme === "dark" : prefersDark;

    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  function toggleTheme() {
    const nextValue = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", nextValue);
    window.localStorage.setItem("theme", nextValue ? "dark" : "light");
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-transparent text-white backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5">
        <a
          className="group inline-flex items-center gap-3"
          href="#home"
          onClick={() => setMenuOpen(false)}
        >
          <span className="relative h-11 w-11 overflow-hidden rounded-lg border border-white/35 bg-white/10 shadow-lg shadow-slate-950/25 transition group-hover:-translate-y-0.5">
            <Image
              alt="Lance Ian T. Leanillo"
              className="object-cover"
              fill
              priority
              sizes="44px"
              src="/profile.jpg"
            />
          </span>
          <span>
            <span className="block text-sm font-black text-white">
              Lance Ian T. Leanillo
            </span>
            <span className="block text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">
              Software Developer
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-3 md:flex">
          <Navigation className="flex items-center gap-1" />
          <ThemeToggle onToggle={toggleTheme} />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle className="scale-95" onToggle={toggleTheme} />
          <button
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            className="grid h-10 min-w-16 place-items-center rounded-lg bg-white px-3 text-slate-950"
            onClick={() => setMenuOpen((current) => !current)}
            type="button"
          >
            <span className="text-sm font-black">{menuOpen ? "Close" : "Menu"}</span>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="border-t border-white/10 bg-slate-950/90 px-5 py-4 backdrop-blur-xl md:hidden">
          <Navigation
            className="mx-auto grid max-w-6xl gap-2"
            itemClassName="block"
            onNavigate={() => setMenuOpen(false)}
          />
        </div>
      ) : null}
    </header>
  );
}

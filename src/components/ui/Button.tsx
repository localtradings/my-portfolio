"use client";

import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  ariaLabel?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-slate-950 text-white hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-100",
  secondary:
    "bg-cyan-300 text-slate-950 hover:-translate-y-0.5 hover:bg-cyan-200",
  outline:
    "border border-slate-300 bg-white/70 text-slate-900 hover:-translate-y-0.5 hover:border-cyan-500 hover:bg-cyan-50 dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:border-cyan-300 dark:hover:bg-cyan-300/10",
};

export default function Button({
  children,
  variant = "primary",
  onClick,
  href,
  type = "button",
  className = "",
  ariaLabel,
}: ButtonProps) {
  const classes = [
    "inline-flex min-h-11 items-center justify-center rounded-lg px-5 py-2.5 text-sm font-bold transition duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-950",
    variantClasses[variant],
    className,
  ].join(" ");

  if (href) {
    return (
      <a
        aria-label={ariaLabel}
        className={classes}
        href={href}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        target={href.startsWith("http") ? "_blank" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      aria-label={ariaLabel}
      className={classes}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

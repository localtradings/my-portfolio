import type { NavigationItem } from "@/lib/types";

interface NavigationProps {
  className?: string;
  itemClassName?: string;
  onNavigate?: () => void;
}

export const navigationItems: NavigationItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation({
  className = "",
  itemClassName = "",
  onNavigate,
}: NavigationProps) {
  return (
    <nav aria-label="Main navigation" className={className}>
      {navigationItems.map((item) => (
        <a
          className={[
            "rounded-lg px-3 py-2 text-sm font-bold text-white/85 transition hover:bg-white/10 hover:text-white",
            itemClassName,
          ].join(" ")}
          href={item.href}
          key={item.href}
          onClick={onNavigate}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}

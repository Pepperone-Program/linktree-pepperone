"use client";

import React from "react";
import { Instagram, Linkedin, Globe, ChevronRight } from "lucide-react";
import { useLocale } from "../context/locale-context";

type LinkItem = {
  href: string;
  labelPt: string;
  labelEn: string;
  Icon: React.ElementType;
  accent: "lime" | "orange" | "green";
};

const items: LinkItem[] = [
  {
    href: "https://www.pepperone.com.br",
    labelPt: "Site Oficial",
    labelEn: "Official Website",
    Icon: Globe,
    accent: "lime",
  },
  {
    href: "https://www.instagram.com/pepperonebrindes",
    labelPt: "Instagram",
    labelEn: "Instagram",
    Icon: Instagram,
    accent: "orange",
  },
  {
    href: "https://www.linkedin.com/company/pepperone/posts/?feedView=all",
    labelPt: "LinkedIn",
    labelEn: "LinkedIn",
    Icon: Linkedin,
    accent: "green",
  },
];

function accentClass(accent: LinkItem["accent"]) {
  if (accent === "lime") {
    return {
      ring: "focus-visible:ring-[#accb04]/55",
      // mais “premium” no branco (menos saturado, mais elegante)
      bg: "bg-[linear-gradient(135deg,rgba(172,203,4),rgba(172,203,4,0.55))]",
      border: "border-[#accb04]/25",
      icon: "text-[#5b6f00]",
      pill: "bg-[#accb04]/14 border-[#accb04]/20",
      glow: "shadow-[0_18px_50px_-30px_rgba(172,203,4,0.65)]",
    };
  }
  if (accent === "orange") {
    return {
      ring: "focus-visible:ring-[#eb4c04]/55",
      bg: "bg-[linear-gradient(135deg,rgba(235,76,4),rgba(235,76,4,0.56))]",
      border: "border-[#eb4c04]/22",
      icon: "text-[#9d3405]",
      pill: "bg-[#eb4c04]/12 border-[#eb4c04]/18",
      glow: "shadow-[0_18px_50px_-30px_rgba(235,76,4,0.55)]",
    };
  }
  return {
    ring: "focus-visible:ring-[#048c3b]/50",
    bg: "bg-[linear-gradient(135deg,rgba(4,140,59),rgba(4,140,59,0.56))]",
    border: "border-[#048c3b]/18",
    icon: "text-[#045a27]",
    pill: "bg-[#048c3b]/12 border-[#048c3b]/16",
    glow: "shadow-[0_18px_50px_-30px_rgba(4,140,59,0.45)]",
  };
}

export default function LinksList() {
  const { locale } = useLocale();

  return (
    <nav className="w-full">
      <ul className="flex flex-col gap-3 sm:gap-4">
        {items.map((item) => {
          const a = accentClass(item.accent);
          const label = locale === "pt-BR" ? item.labelPt : item.labelEn;
          const Icon = item.Icon;

          return (
            <li key={item.href}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={[
                  "group relative flex items-center justify-between gap-4",
                  "rounded-2xl",
                  "border",
                  "px-4 sm:px-5 py-4 sm:py-5",
                  "transition-all duration-300",
                  "hover:-translate-y-px hover:shadow-lg",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                  "bg-white/70 backdrop-blur-md",
                  a.ring,
                  a.border,
                  a.glow,
                ].join(" ")}
              >
                {/* camada de cor (accent) */}
                <span className={["pointer-events-none absolute inset-0 rounded-2xl", a.bg].join(" ")} />

                {/* shine */}
                <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
                  <span className="absolute -left-1/2 top-0 h-full w-1/2 -skew-x-12 bg-white/55 opacity-0 blur-md transition-all duration-500 group-hover:opacity-70 group-hover:left-[110%]" />
                </span>

                <span className="relative flex items-center gap-3 min-w-0">
                  {/* icon container */}
                  <span
                    className={[
                      "grid place-items-center size-12 rounded-2xl border shadow-sm",
                      "bg-white/80",
                      a.pill,
                    ].join(" ")}
                  >
                    <Icon className={a.icon} size={20} />
                  </span>

                  <span className="min-w-0">
                    <span className="block truncate text-[15px] sm:text-[16px] font-extrabold tracking-tight text-zinc-950">
                      {label}
                    </span>
                    <span className="block truncate text-xs sm:text-sm text-zinc-700">
                      {locale === "pt-BR" ? "Abrir em nova aba" : "Open in a new tab"}
                    </span>
                  </span>
                </span>

                <span className="relative flex items-center gap-2">
                  <span className="hidden sm:inline text-xs font-semibold text-zinc-700 opacity-0 group-hover:opacity-100 transition-opacity">
                    {locale === "pt-BR" ? "Acessar" : "Open"}
                  </span>

                  <ChevronRight
                    size={18}
                    className="text-zinc-800 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </a>
            </li>
          );
        })}
      </ul>

      <div className="mt-6 text-center">
        <p className="text-[11px] sm:text-xs text-zinc-700">
          {locale === "pt-BR"
            ? "Sua experiência personalizada • Líder de mercado • Mais de 15 anos de experiência"
            : "Personalized experience • Market leader • 15+ years of expertise"}
        </p>
      </div>
    </nav>
  );
}
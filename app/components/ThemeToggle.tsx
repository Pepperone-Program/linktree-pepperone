"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/theme-context";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}
      className={[
        "h-11 w-11 rounded-full grid place-items-center",
        "transition-all duration-300",
        "hover:-translate-y-px hover:shadow-md",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#eb4c04]/60 focus-visible:ring-offset-2",
        "border border-black/10 bg-white shadow-sm",
        "hover:bg-zinc-50",
        "focus-visible:ring-offset-white",
        // ✅ dark
        "dark:border-white/10 dark:bg-white/5 dark:shadow-none dark:hover:bg-white/10 dark:focus-visible:ring-offset-[#0b0b0b]",
      ].join(" ")}
    >
      {theme === "dark" ? (
        <Sun size={18} className="text-white" />
      ) : (
        <Moon size={18} className="text-zinc-900" />
      )}

      {/* brilho sutil (premium) */}
      <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 hover:opacity-100 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.9),transparent_55%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_55%)]" />
    </button>
  );
}
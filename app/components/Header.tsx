"use client";

import Image from "next/image";
import React, { useMemo, useState } from "react";
import { ShieldCheck, Truck, BriefcaseBusiness, Share2, X, Copy, Check, QrCode } from "lucide-react";
import { useLocale } from "../context/locale-context";

const LINKTREE_URL = "https://linktree.pepperone.com.br";

export default function Header() {
  const { locale, setLocale } = useLocale();

  const [shareOpen, setShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const title = locale === "pt-BR" ? "Pepperone Brindes" : "Pepperone Gifts";
  const subtitle =
    locale === "pt-BR"
      ? "Brindes corporativos personalizados com padrão premium."
      : "Premium corporate gifts, fully customizable.";

  const shareLabel = locale === "pt-BR" ? "Compartilhar" : "Share";
  const closeLabel = locale === "pt-BR" ? "Fechar" : "Close";

  const qrSrc = useMemo(() => {
    const encoded = encodeURIComponent(LINKTREE_URL);
    return `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encoded}`;
  }, []);

  async function handleNativeShare() {
    const data = {
      title: "Pepperone Brindes",
      text: locale === "pt-BR" ? "Acesse os links oficiais da Pepperone:" : "Access Pepperone official links:",
      url: LINKTREE_URL,
    };

    if (typeof navigator !== "undefined" && "share" in navigator) {
      try {
        await navigator.share(data);
        return;
      } catch {}
    }

    try {
      await navigator.clipboard.writeText(LINKTREE_URL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      window.prompt(locale === "pt-BR" ? "Copie o link:" : "Copy the link:", LINKTREE_URL);
    }
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(LINKTREE_URL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      window.prompt(locale === "pt-BR" ? "Copie o link:" : "Copy the link:", LINKTREE_URL);
    }
  }

  return (
    <>
      <header className="flex flex-col gap-5 sm:gap-6">
        <div className="flex items-center justify-between gap-3">
          {/* Locale switcher (light premium) */}
          <div className="relative">
            <select
              value={locale}
              onChange={(e) => setLocale(e.target.value as "pt-BR" | "en-US")}
              aria-label={locale === "pt-BR" ? "Selecionar idioma" : "Select language"}
              className={[
                "h-11 rounded-full pl-4 pr-10 text-sm font-semibold transition-all",
                "bg-white text-zinc-900 border border-black/10 shadow-sm hover:bg-zinc-50",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#accb04]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                "appearance-none cursor-pointer",
              ].join(" ")}
            >
              <option value="pt-BR">🇧🇷 Português</option>
              <option value="en-US">🇺🇸 English</option>
            </select>

            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500">
              ▾
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Share icon */}
            <button
              type="button"
              onClick={() => setShareOpen(true)}
              aria-label={shareLabel}
              className={[
                "relative h-11 w-11 rounded-full grid place-items-center transition-all",
                "bg-white border border-black/10 text-zinc-900 shadow-sm hover:bg-zinc-50",
                "hover:-translate-y-[1px] hover:shadow-md",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#eb4c04]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
              ].join(" ")}
            >
              <Share2 size={18} />
              <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 hover:opacity-100 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.95),transparent_60%)]" />
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center text-center gap-3">
          <div className="inline-flex items-center gap-2">
            <Image
              src="/logoPepperone.png"
              alt="Logo Pepperone"
              width={140}
              height={102}
              className="bg-transparent"
              priority
            />
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-zinc-950">
            {title}
          </h1>

          <p className="max-w-xl text-sm sm:text-base text-zinc-700">
            {subtitle}
          </p>

        </div>
      </header>

      {/* Modal Share + QR (light-only: cinza com borda) */}
      {shareOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4" role="dialog" aria-modal="true" aria-label={shareLabel}>
          <button
            type="button"
            onClick={() => setShareOpen(false)}
            aria-label={closeLabel}
            className="absolute inset-0 bg-black/35"
          />

          <div className="relative w-full max-w-[420px] overflow-hidden rounded-2xl border border-black/10 bg-zinc-100 shadow-[0_30px_90px_-55px_rgba(0,0,0,0.55)] backdrop-blur-xl">
            {/* acabamento */}
            <div className="pointer-events-none absolute inset-0 opacity-60 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.55)_18%,transparent_42%)]" />
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/5" />

            <div className="relative p-5 sm:p-6">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="size-10 rounded-xl grid place-items-center border bg-white border-black/10 text-zinc-900 shadow-sm">
                    <QrCode size={18} />
                  </div>

                  <div className="text-left">
                    <p className="text-zinc-950 font-extrabold">
                      {locale === "pt-BR" ? "Compartilhar Linktree" : "Share Linktree"}
                    </p>
                    <p className="text-zinc-700 text-xs">{LINKTREE_URL}</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setShareOpen(false)}
                  aria-label={closeLabel}
                  className="h-10 w-10 rounded-full grid place-items-center transition-all border bg-white hover:bg-zinc-50 text-zinc-700 border-black/10 shadow-sm"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="mt-5 flex justify-center">
                <div className="rounded-2xl p-4 border shadow-sm bg-white border-black/10">
                  <img
                    src={qrSrc}
                    alt="QR Code Linktree Pepperone"
                    width={240}
                    height={240}
                    className="block rounded-xl"
                  />
                </div>
              </div>

              <p className="mt-4 text-center text-xs text-zinc-700">
                {locale === "pt-BR" ? "Aponte a câmera para acessar rapidamente." : "Point your camera to open quickly."}
              </p>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={handleNativeShare}
                  className={[
                    "h-12 rounded-xl font-extrabold tracking-tight transition-all",
                    "bg-zinc-950 text-white",
                    "hover:-translate-y-px hover:shadow-md",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#eb4c04]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-100",
                  ].join(" ")}
                >
                  {locale === "pt-BR" ? "Compartilhar" : "Share"}
                </button>

                <button
                  type="button"
                  onClick={handleCopy}
                  className={[
                    "h-12 rounded-xl font-extrabold tracking-tight transition-all border",
                    "bg-white border-black/10 text-zinc-950 hover:bg-zinc-50",
                    "hover:-translate-y-px hover:shadow-md",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#accb04]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-100",
                    "inline-flex items-center justify-center gap-2",
                  ].join(" ")}
                >
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                  {copied ? (locale === "pt-BR" ? "Copiado" : "Copied") : (locale === "pt-BR" ? "Copiar link" : "Copy link")}
                </button>
              </div>
            </div>

            <div className="h-1 bg-black/5" />
          </div>
        </div>
      )}
    </>
  );
}

function Proof({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center justify-center gap-2 rounded-2xl px-3 py-2 text-xs sm:text-[13px] font-semibold border border-black/10 bg-white/80 text-zinc-800 shadow-[0_10px_30px_-22px_rgba(0,0,0,0.28)]">
      <span className="opacity-80">{icon}</span>
      <span className="truncate">{text}</span>
    </div>
  );
}
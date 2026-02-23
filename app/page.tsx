"use client";

import Header from "./components/Header";
import LinksList from "./components/LinksList";

export default function Page() {
  return (
    <div className="min-h-dvh w-full overflow-x-hidden bg-white">
      {/* Fundo branco + luz sutil premium (continua branco de verdade) */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(900px_circle_at_15%_10%,rgba(172,203,4,0.10),transparent_56%),radial-gradient(900px_circle_at_85%_18%,rgba(235,76,4,0.08),transparent_58%),radial-gradient(900px_circle_at_50%_92%,rgba(4,140,59,0.06),transparent_60%)]" />

      <div className="mx-auto w-full max-w-[760px] px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Card principal (light-only) */}
        <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/85 shadow-[0_28px_90px_-55px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          {/* brilho sutil */}
          <div className="pointer-events-none absolute inset-0 opacity-70 bg-[linear-gradient(120deg,transparent_0%,rgba(0,0,0,0.03)_18%,transparent_42%)]" />
          {/* acabamento: ring interno */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-black/5" />

          <div className="relative p-5 sm:p-8 lg:p-10 text-zinc-900">
            <Header />

            <div className="mt-6 sm:mt-8">
              <LinksList />
            </div>

            <footer className="mt-8 sm:mt-10 border-t border-black/10 pt-6">
              <div className="text-center text-xs sm:text-sm text-zinc-800">
                <span>© {new Date().getFullYear()} Pepperone Brindes</span>
                <span className="mx-2 opacity-40">•</span>
                <span>Brindes que criam experiências</span>
              </div>
              <div className="mt-2 text-center text-[11px] text-zinc-600">
                Produção em escala • Atendimento B2B • Envio para todo o Brasil
              </div>
            </footer>
          </div>
        </div>

        <div className="h-8 sm:h-12" />
      </div>
    </div>
  );
}
import type { Metadata, Viewport } from "next";
import "./globals.css";
import Providers from "./providers";

const SITE_NAME = "Pepperone Brindes";
const SITE_URL = "https://linktree.pepperone.com.br";
const TITLE = "Pepperone Brindes | Links Oficiais";
const DESCRIPTION =
  "Acesse os links oficiais da Pepperone Brindes: site, Instagram e LinkedIn. Brindes corporativos personalizados com padrão premium e produção em escala para empresas.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: TITLE,
    template: "%s | Pepperone Brindes",
  },

  description: DESCRIPTION,

  applicationName: SITE_NAME,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  category: "business",
  keywords: [
    "Pepperone Brindes",
    "brindes corporativos",
    "brindes personalizados",
    "brindes para empresas",
    "presentes corporativos",
    "brindes premium",
    "kits corporativos",
    "brindes para eventos",
    "produção em escala",
    "linktree pepperone",
  ],

  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
      "en-US": "/?lang=en-US",
    },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    locale: "pt_BR",
    images: [
      {
        url: "/og.png", // ✅ crie esse arquivo em /public/og.png (1200x630)
        width: 1200,
        height: 630,
        alt: "Pepperone Brindes - Links Oficiais",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.png"], // mesma imagem
  },

  icons: {
    icon: [
      { url: "/iconPepperone.png" },
      { url: "/iconPepperone.png", type: "image/png" }, // opcional
    ],
    apple: [{ url: "/iconPepperone.png" }], // opcional
  },

  // Se tiver Google Search Console / Bing, coloque tokens aqui
  verification: {
    // google: "SEU_TOKEN_AQUI",
    // other: { "msvalidate.01": "SEU_TOKEN_AQUI" },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // JSON-LD (Organization / WebSite) — ajuda rich results e confiança sem “keyword stuffing”
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/logoPepperone.png`,
        sameAs: [
          "https://www.pepperone.com.br",
          "https://www.instagram.com/pepperonebrindes",
          "https://www.linkedin.com/company/pepperone/posts/?feedView=all",
        ],
      },
      {
        "@type": "WebSite",
        name: `${SITE_NAME} - Links Oficiais`,
        url: SITE_URL,
        inLanguage: ["pt-BR", "en-US"],
      },
      {
        "@type": "WebPage",
        name: TITLE,
        url: SITE_URL,
        description: DESCRIPTION,
        inLanguage: "pt-BR",
      },
    ],
  };

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {/* JSON-LD */}
        <script
          type="application/ld+json"
           
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
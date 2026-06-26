import type { Metadata, Viewport } from "next";
import { Work_Sans, Inter } from "next/font/google";
import "./globals.css";
import RevealOnScroll from "@/components/RevealOnScroll";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://condutasaude.com"),
  title: {
    default:
      "Conduta Saúde — Você cuida de pessoas. A gente cuida do resto.",
    template: "%s | Conduta Saúde",
  },
  description:
    "Consultoria especializada em gestão e automação para clínicas e consultórios. Organizamos sua operação para que o cuidado aconteça. Diagnóstico gratuito.",
  openGraph: {
    title:
      "Conduta Saúde — Operação organizada, cuidado humanizado.",
    description:
      "Consultoria especializada em gestão e automação para profissionais de saúde. Organizamos sua operação para que o cuidado aconteça.",
    url: "https://condutasaude.com",
    siteName: "Conduta Saúde",
    locale: "pt_BR",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Conduta Saúde — Operação organizada, cuidado humanizado.",
    description:
      "Você cuida de pessoas. A gente cuida do resto. Consultoria em gestão e automação para clínicas e consultórios.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://condutasaude.com",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#FAFAF7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${workSans.variable} ${inter.variable}`}>
      <head>
        {/* Google Analytics 4 — substitua G-XXXXXXXXXX pelo seu ID de medição */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_ID}');`,
              }}
            />
          </>
        )}
      </head>
      <body>
        {children}
        <RevealOnScroll />
      </body>
    </html>
  );
}

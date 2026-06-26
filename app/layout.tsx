import type { Metadata, Viewport } from "next";
import { Work_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
      "Conduta Saúde — Consultoria em Processos e Automação para Clínicas",
    template: "%s | Conduta Saúde",
  },
  description:
    "A Conduta Saúde estrutura processos e implementa automação inteligente para clínicas médicas e odontológicas. Diagnóstico gratuito de 60 minutos.",
  openGraph: {
    title:
      "Conduta Saúde — Consultoria em Processos e Automação para Clínicas",
    description:
      "Estruturamos processos e implementamos automação inteligente para clínicas médicas e odontológicas. Diagnóstico gratuito de 60 minutos.",
    url: "https://condutasaude.com",
    siteName: "Conduta Saúde",
    locale: "pt_BR",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Conduta Saúde — Consultoria para Clínicas",
    description:
      "Processos organizados. Automação que funciona. Diagnóstico gratuito.",
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
      <body>
        <a href="#inicio" className="skip-link">
          Pular para o conteúdo
        </a>
        <Header />
        {children}
        <Footer />
        <RevealOnScroll />
      </body>
    </html>
  );
}

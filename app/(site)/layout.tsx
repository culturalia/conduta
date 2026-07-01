import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WHATSAPP_URL =
  "https://wa.me/5516996131393?text=Oi%20Hilary%2C%20vim%20do%20site%20da%20Conduta%20Sa%C3%BAde%20e%20quero%20agendar%20meu%20diagn%C3%B3stico%20com%20voc%C3%AA";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <a href="#inicio" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header />
      {children}
      <Footer />

      {/* Botão flutuante WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener"
        className="whatsapp-float"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <svg viewBox="0 0 32 32" width="28" height="28" fill="#FFFFFF" aria-hidden="true">
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.92 15.92 0 0016.004 32C24.826 32 32 24.826 32 16.004 32 7.176 24.826 0 16.004 0zm9.53 22.608c-.396 1.116-2.328 2.136-3.21 2.226-.882.09-1.698.396-5.724-1.194-4.842-1.908-7.902-6.876-8.136-7.194-.234-.318-1.908-2.538-1.908-4.842 0-2.304 1.206-3.438 1.638-3.906.432-.468.936-.588 1.254-.588.318 0 .63.006.9.018.312.012.714-.108 1.11.852.396.96 1.362 3.312 1.476 3.546.12.234.198.51.042.822-.162.318-.234.51-.468.786-.234.276-.492.618-.702.828-.234.234-.48.486-.204.954.276.468 1.218 2.01 2.616 3.258 1.794 1.602 3.312 2.1 3.78 2.334.468.234.744.198 1.014-.12.276-.318 1.17-1.362 1.482-1.83.312-.468.63-.39 1.062-.234.432.156 2.784 1.314 3.258 1.554.48.234.798.354.918.546.12.198.12 1.116-.276 2.232z"/>
        </svg>
        <span className="whatsapp-float-label">Fale conosco</span>
      </a>
    </>
  );
}

import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    </>
  );
}

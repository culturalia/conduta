"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const WHATSAPP_URL =
  "https://wa.me/5516996131393?text=Oi%20Hilary%2C%20vim%20do%20site%20da%20Conduta%20Sa%C3%BAde%20e%20quero%20agendar%20meu%20diagn%C3%B3stico%20com%20voc%C3%AA";

const NAV_LINKS = [
  { label: "Serviços", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Sobre", href: "/sobre" },
  { label: "FAQ", href: "/faq" },
];

export default function Header() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const lastScrollY = useRef(0);
  const accumulated = useRef(0);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      const delta = current - lastScrollY.current;
      lastScrollY.current = current;

      // Scroll progress bar
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? current / docHeight : 0);

      // Close mobile menu on scroll
      if (menuOpen && Math.abs(delta) > 10) {
        setMenuOpen(false);
      }

      // Auto-hide nav
      if (current < 80) {
        accumulated.current = 0;
        setHidden(false);
        return;
      }

      if (delta > 0) {
        accumulated.current += delta;
        if (accumulated.current > 15) {
          setHidden(true);
        }
      } else if (delta < 0) {
        accumulated.current = 0;
        setHidden(false);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className="site-nav"
        aria-label="Navegação principal"
        style={{
          transform: hidden && !menuOpen ? "translateY(-100%)" : "translateY(0)",
        }}
      >
        {/* Scroll progress bar */}
        <div
          className="scroll-progress"
          style={{ transform: `scaleX(${scrollProgress})` }}
          aria-hidden="true"
        />

        <Link href="/" className="nav-logo" aria-label="Conduta Saúde — início">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 520 120"
            width="176"
            height="40"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="ng1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#0EA5E9" }} />
                <stop offset="100%" style={{ stopColor: "#14B8A6" }} />
              </linearGradient>
              <linearGradient id="ng2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: "#0EA5E9" }} />
                <stop offset="100%" style={{ stopColor: "#14B8A6" }} />
              </linearGradient>
              <linearGradient
                id="ng3"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" style={{ stopColor: "#0EA5E9", stopOpacity: 0 }} />
                <stop offset="18%" style={{ stopColor: "#0EA5E9", stopOpacity: 1 }} />
                <stop offset="82%" style={{ stopColor: "#14B8A6", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#14B8A6", stopOpacity: 0 }} />
              </linearGradient>
            </defs>
            <path
              d="M 90 15 A 48 48 0 1 0 90 105"
              fill="none"
              stroke="url(#ng1)"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <polyline
              points="48,60 62,60 68,38 75,82 82,48 89,60 100,60 112,60"
              fill="none"
              stroke="url(#ng3)"
              strokeWidth="5.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <text
              x="128"
              y="56"
              fontFamily="Inter,'Helvetica Neue',Arial,sans-serif"
              fontSize="34"
              fontWeight="700"
              letterSpacing="-0.5"
              fill="#1A1A2E"
            >
              conduta
            </text>
            <line
              x1="128"
              y1="64"
              x2="390"
              y2="64"
              stroke="rgba(26,26,46,0.08)"
              strokeWidth="1"
            />
            <text
              x="128"
              y="88"
              fontFamily="Inter,'Helvetica Neue',Arial,sans-serif"
              fontSize="26"
              fontWeight="300"
              letterSpacing="6"
              fill="url(#ng2)"
            >
              SAÚDE
            </text>
          </svg>
        </Link>

        {/* Desktop links */}
        <div className="nav-links">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                item.href === "/"
                  ? pathname === "/" ? "active" : ""
                  : pathname.startsWith(item.href) ? "active" : ""
              }
            >
              {item.label}
            </Link>
          ))}
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener"
          className="nav-cta nav-cta-desktop"
        >
          Agendar diagnóstico
        </a>

        {/* Hamburger button (mobile only) */}
        <button
          className={`nav-hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`nav-mobile-overlay ${menuOpen ? "open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="nav-mobile-content">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-mobile-link ${
                item.href === "/"
                  ? pathname === "/" ? "active" : ""
                  : pathname.startsWith(item.href) ? "active" : ""
              }`}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            className="nav-mobile-cta"
            onClick={closeMenu}
          >
            Agendar diagnóstico gratuito
          </a>
        </div>
      </div>
    </>
  );
}

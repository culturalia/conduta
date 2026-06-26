import Link from "next/link";

const WHATSAPP_URL =
  "https://wa.me/5516996131393?text=Oi%20Hilary%2C%20vim%20do%20site%20da%20Conduta%20Sa%C3%BAde%20e%20quero%20agendar%20meu%20diagn%C3%B3stico%20com%20voc%C3%AA";

export default function Footer() {
  return (
    <footer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 520 120"
        width="156"
        height="36"
        aria-label="Conduta Saúde"
      >
        <defs>
          <linearGradient id="fg1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#0EA5E9" }} />
            <stop offset="100%" style={{ stopColor: "#14B8A6" }} />
          </linearGradient>
          <linearGradient id="fg2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#0EA5E9" }} />
            <stop offset="100%" style={{ stopColor: "#14B8A6" }} />
          </linearGradient>
          <linearGradient
            id="fg3"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              offset="0%"
              style={{ stopColor: "#0EA5E9", stopOpacity: 0 }}
            />
            <stop
              offset="18%"
              style={{ stopColor: "#0EA5E9", stopOpacity: 1 }}
            />
            <stop
              offset="82%"
              style={{ stopColor: "#14B8A6", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#14B8A6", stopOpacity: 0 }}
            />
          </linearGradient>
        </defs>
        <path
          d="M 90 15 A 48 48 0 1 0 90 105"
          fill="none"
          stroke="url(#fg1)"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <polyline
          points="48,60 62,60 68,38 75,82 82,48 89,60 100,60 112,60"
          fill="none"
          stroke="url(#fg3)"
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
          fill="white"
        >
          conduta
        </text>
        <line
          x1="128"
          y1="64"
          x2="390"
          y2="64"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
        />
        <text
          x="128"
          y="88"
          fontFamily="Inter,'Helvetica Neue',Arial,sans-serif"
          fontSize="26"
          fontWeight="300"
          letterSpacing="6"
          fill="url(#fg2)"
        >
          SAÚDE
        </text>
      </svg>
      <p className="footer-tagline">
        Operação organizada, cuidado humanizado.
      </p>
      <p className="footer-copy">
        &copy; 2026 Conduta Sa&uacute;de &middot; condutasaude.com
      </p>
      <div className="footer-links">
        <a href={WHATSAPP_URL} target="_blank" rel="noopener">
          Contato
        </a>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/sobre">Sobre</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/privacidade">Privacidade</Link>
        <a
          href="https://www.instagram.com/conduta.saude/"
          target="_blank"
          rel="noopener"
        >
          @conduta.saude
        </a>
      </div>
    </footer>
  );
}

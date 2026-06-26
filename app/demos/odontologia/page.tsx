import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dr. Felipe Oliveira — Cirurgião-Dentista em São Paulo",
  description:
    "Clínica odontológica do Dr. Felipe Oliveira em São Paulo. Implantes, clareamento, ortodontia, lente de contato dental e harmonização orofacial. Agende sua consulta.",
  robots: { index: false, follow: false },
};

const dentistSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Dr. Felipe Oliveira — Cirurgião-Dentista",
  description:
    "Clínica odontológica especializada em implantes dentários, clareamento, ortodontia, lente de contato dental, prótese e harmonização orofacial.",
  url: "https://condutasaude.com/demos/odontologia",
  telephone: "+5511999990000",
  image: "https://condutasaude.com/demos/odontologia/og.png",
  priceRange: "$$",
  currenciesAccepted: "BRL",
  paymentAccepted: "Cash, Credit Card, Debit Card, PIX",
  openingHours: ["Mo-Fr 08:00-19:00", "Sa 08:00-13:00"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Haddock Lobo, 595",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    postalCode: "01414-001",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -23.5567,
    longitude: -46.6612,
  },
  medicalSpecialty: "Dentistry",
  hasCredential: "CRO/SP 45678",
};

export default function OdontologiaDemo() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistSchema) }}
      />

      {/* ── INLINE STYLES ── */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
/* ── RESET & BASE ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

.demo-odonto-root {
  font-family: var(--font-inter, 'Inter', sans-serif);
  background: #FFFFFF;
  color: #1A1A2E;
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

/* ── REVEAL ANIMATION ── */
.demo-odonto-reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.55s ease, transform 0.55s ease;
  transition-delay: var(--od, 0s);
}
.demo-odonto-reveal.visible {
  opacity: 1;
  transform: none;
}

/* ── NAV ── */
.demo-odonto-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid #E0F2FE;
}
.demo-odonto-nav-inner {
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 24px;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}
.demo-odonto-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  flex-shrink: 0;
}
.demo-odonto-brand-logo {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #0EA5E9 0%, #14B8A6 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.demo-odonto-brand-text {
  display: flex;
  flex-direction: column;
  gap: 1px;
}
.demo-odonto-brand-name {
  font-family: var(--font-work-sans, 'Work Sans', sans-serif);
  font-size: 15px;
  font-weight: 700;
  color: #1A1A2E;
  line-height: 1.2;
}
.demo-odonto-brand-specialty {
  font-size: 11px;
  font-weight: 500;
  color: #0EA5E9;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.demo-odonto-nav-links {
  display: flex;
  align-items: center;
  gap: 28px;
  list-style: none;
}
.demo-odonto-nav-links a {
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  color: #444460;
  transition: color 0.2s;
}
.demo-odonto-nav-links a:hover { color: #0EA5E9; }
.demo-odonto-nav-cta {
  background: #0EA5E9;
  color: #FFFFFF !important;
  padding: 9px 20px;
  border-radius: 8px;
  font-weight: 600 !important;
  font-size: 14px !important;
  transition: background 0.2s, transform 0.15s !important;
}
.demo-odonto-nav-cta:hover {
  background: #0284C7 !important;
  color: #fff !important;
  transform: translateY(-1px);
}

@media (max-width: 768px) {
  .demo-odonto-nav-links { display: none; }
  .demo-odonto-nav-cta-mobile {
    display: flex !important;
  }
}

/* ── HERO ── */
.demo-odonto-hero {
  background: linear-gradient(160deg, #F0F9FF 0%, #E0F2FE 40%, #FFFFFF 100%);
  padding: 80px 24px 96px;
  position: relative;
  overflow: hidden;
}
.demo-odonto-hero::before {
  content: '';
  position: absolute;
  top: -80px;
  right: -80px;
  width: 560px;
  height: 560px;
  background: radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%);
  pointer-events: none;
}
.demo-odonto-hero::after {
  content: '';
  position: absolute;
  bottom: -40px;
  left: -40px;
  width: 360px;
  height: 360px;
  background: radial-gradient(circle, rgba(20,184,166,0.07) 0%, transparent 70%);
  pointer-events: none;
}
.demo-odonto-hero-inner {
  max-width: 1160px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
  position: relative;
  z-index: 1;
}
.demo-odonto-hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(14,165,233,0.1);
  color: #0369A1;
  border: 1px solid rgba(14,165,233,0.2);
  border-radius: 100px;
  padding: 6px 14px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.03em;
  margin-bottom: 24px;
}
.demo-odonto-hero-badge-dot {
  width: 6px;
  height: 6px;
  background: #0EA5E9;
  border-radius: 50%;
  animation: odPulse 2s infinite;
}
@keyframes odPulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.8); }
}
.demo-odonto-hero-title {
  font-family: var(--font-work-sans, 'Work Sans', sans-serif);
  font-size: clamp(36px, 5vw, 56px);
  font-weight: 700;
  color: #1A1A2E;
  line-height: 1.15;
  margin-bottom: 20px;
}
.demo-odonto-hero-title em {
  font-style: normal;
  color: #0EA5E9;
}
.demo-odonto-hero-sub {
  font-size: 17px;
  color: #4A4A6A;
  line-height: 1.75;
  margin-bottom: 36px;
  max-width: 480px;
}
.demo-odonto-hero-actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}
.demo-odonto-btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #0EA5E9;
  color: #fff;
  padding: 14px 28px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
  box-shadow: 0 4px 16px rgba(14,165,233,0.3);
}
.demo-odonto-btn-primary:hover {
  background: #0284C7;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(14,165,233,0.35);
}
.demo-odonto-btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  color: #0EA5E9;
  padding: 13px 24px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  border: 1.5px solid #0EA5E9;
  transition: background 0.2s, color 0.2s;
}
.demo-odonto-btn-ghost:hover {
  background: #0EA5E9;
  color: #fff;
}
.demo-odonto-hero-trust {
  display: flex;
  gap: 20px;
  margin-top: 32px;
  flex-wrap: wrap;
}
.demo-odonto-hero-trust-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #555570;
  font-weight: 500;
}
.demo-odonto-hero-trust-icon {
  color: #14B8A6;
  display: flex;
}
/* Hero visual placeholder */
.demo-odonto-hero-visual {
  position: relative;
}
.demo-odonto-hero-img {
  width: 100%;
  aspect-ratio: 4/5;
  max-width: 440px;
  margin: 0 auto;
  background: linear-gradient(145deg, #BAE6FD 0%, #99F6E4 50%, #E0F2FE 100%);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(14,165,233,0.15), 0 4px 16px rgba(0,0,0,0.06);
}
.demo-odonto-hero-img-initials {
  font-family: var(--font-work-sans, 'Work Sans', sans-serif);
  font-size: 80px;
  font-weight: 700;
  color: rgba(14,165,233,0.4);
  letter-spacing: -2px;
  user-select: none;
}
.demo-odonto-hero-card {
  position: absolute;
  bottom: -16px;
  left: -16px;
  background: #fff;
  border-radius: 14px;
  padding: 14px 18px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.12);
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 200px;
}
.demo-odonto-hero-card-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #0EA5E9 0%, #14B8A6 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.demo-odonto-hero-card-text strong {
  display: block;
  font-size: 14px;
  font-weight: 700;
  color: #1A1A2E;
  line-height: 1.2;
}
.demo-odonto-hero-card-text span {
  font-size: 12px;
  color: #777790;
}
.demo-odonto-hero-card-2 {
  position: absolute;
  top: 20px;
  right: -20px;
  background: #fff;
  border-radius: 12px;
  padding: 10px 14px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  font-size: 12px;
  font-weight: 600;
  color: #0EA5E9;
  white-space: nowrap;
}

@media (max-width: 768px) {
  .demo-odonto-hero-inner {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .demo-odonto-hero-visual { order: -1; }
  .demo-odonto-hero-img { max-width: 320px; }
  .demo-odonto-hero-card { left: 0; }
  .demo-odonto-hero-card-2 { right: 0; }
}

/* ── SECTION COMMON ── */
.demo-odonto-section {
  padding: 88px 24px;
}
.demo-odonto-section-alt {
  background: #F0F9FF;
}
.demo-odonto-container {
  max-width: 1160px;
  margin: 0 auto;
}
.demo-odonto-eyebrow {
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #0EA5E9;
  margin-bottom: 12px;
}
.demo-odonto-section-title {
  font-family: var(--font-work-sans, 'Work Sans', sans-serif);
  font-size: clamp(28px, 4vw, 40px);
  font-weight: 700;
  color: #1A1A2E;
  line-height: 1.2;
  margin-bottom: 16px;
}
.demo-odonto-section-desc {
  font-size: 16px;
  color: #555570;
  line-height: 1.75;
  max-width: 600px;
}

/* ── SOBRE ── */
.demo-odonto-sobre-grid {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 64px;
  align-items: start;
}
.demo-odonto-sobre-photo {
  width: 240px;
  height: 300px;
  background: linear-gradient(145deg, #BAE6FD 0%, #7DD3FC 40%, #99F6E4 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  box-shadow: 0 12px 40px rgba(14,165,233,0.18);
}
.demo-odonto-sobre-initials {
  font-family: var(--font-work-sans, 'Work Sans', sans-serif);
  font-size: 64px;
  font-weight: 700;
  color: rgba(14,165,233,0.5);
  user-select: none;
}
.demo-odonto-sobre-cro {
  position: absolute;
  bottom: -14px;
  left: 50%;
  transform: translateX(-50%);
  background: #0EA5E9;
  color: #fff;
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
}
.demo-odonto-sobre-content { padding-top: 8px; }
.demo-odonto-sobre-content h2 {
  font-family: var(--font-work-sans, 'Work Sans', sans-serif);
  font-size: clamp(24px, 3.5vw, 36px);
  font-weight: 700;
  color: #1A1A2E;
  line-height: 1.2;
  margin-bottom: 16px;
}
.demo-odonto-sobre-content p {
  font-size: 15px;
  color: #555570;
  line-height: 1.8;
  margin-bottom: 16px;
}
.demo-odonto-sobre-feats {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 28px;
}
.demo-odonto-sobre-feat {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}
.demo-odonto-sobre-feat-icon {
  width: 24px;
  height: 24px;
  background: rgba(14,165,233,0.12);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
}
.demo-odonto-sobre-feat-text {
  font-size: 14px;
  color: #444460;
  font-weight: 500;
}

@media (max-width: 768px) {
  .demo-odonto-sobre-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .demo-odonto-sobre-photo {
    width: 180px;
    height: 220px;
    margin: 0 auto;
  }
}

/* ── TRATAMENTOS ── */
.demo-odonto-tratamentos-header {
  text-align: center;
  margin-bottom: 56px;
}
.demo-odonto-tratamentos-header .demo-odonto-section-desc {
  margin: 0 auto;
}
.demo-odonto-tratamentos-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.demo-odonto-trat-card {
  background: #fff;
  border: 1.5px solid #E0F2FE;
  border-radius: 16px;
  padding: 28px 24px;
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
  position: relative;
  overflow: hidden;
}
.demo-odonto-trat-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #0EA5E9 0%, #14B8A6 100%);
  opacity: 0;
  transition: opacity 0.2s;
}
.demo-odonto-trat-card:hover {
  border-color: #BAE6FD;
  box-shadow: 0 8px 32px rgba(14,165,233,0.12);
  transform: translateY(-3px);
}
.demo-odonto-trat-card:hover::before { opacity: 1; }
.demo-odonto-trat-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, rgba(14,165,233,0.12) 0%, rgba(20,184,166,0.12) 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  color: #0EA5E9;
}
.demo-odonto-trat-name {
  font-family: var(--font-work-sans, 'Work Sans', sans-serif);
  font-size: 17px;
  font-weight: 700;
  color: #1A1A2E;
  margin-bottom: 8px;
}
.demo-odonto-trat-desc {
  font-size: 14px;
  color: #666680;
  line-height: 1.7;
}
.demo-odonto-trat-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-top: 14px;
  font-size: 13px;
  font-weight: 600;
  color: #0EA5E9;
  text-decoration: none;
  transition: gap 0.15s;
}
.demo-odonto-trat-link:hover { gap: 8px; }

@media (max-width: 768px) {
  .demo-odonto-tratamentos-grid {
    grid-template-columns: 1fr;
  }
}
@media (min-width: 769px) and (max-width: 1024px) {
  .demo-odonto-tratamentos-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* ── ANTES & DEPOIS ── */
.demo-odonto-ad-header {
  text-align: center;
  margin-bottom: 56px;
}
.demo-odonto-ad-header .demo-odonto-section-desc { margin: 0 auto; }
.demo-odonto-ad-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}
.demo-odonto-ad-card {
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #E0F2FE;
  background: #fff;
  box-shadow: 0 4px 16px rgba(0,0,0,0.05);
}
.demo-odonto-ad-images {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  height: 200px;
  position: relative;
}
.demo-odonto-ad-before {
  background: linear-gradient(145deg, #F1F5F9 0%, #CBD5E1 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}
.demo-odonto-ad-after {
  background: linear-gradient(145deg, #BAE6FD 0%, #99F6E4 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}
.demo-odonto-ad-divider {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background: #fff;
  z-index: 1;
}
.demo-odonto-ad-label-before,
.demo-odonto-ad-label-after {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 6px 10px;
  border-radius: 6px;
}
.demo-odonto-ad-label-before {
  background: rgba(255,255,255,0.7);
  color: #888;
}
.demo-odonto-ad-label-after {
  background: rgba(255,255,255,0.85);
  color: #0EA5E9;
}
.demo-odonto-ad-info {
  padding: 18px 20px;
}
.demo-odonto-ad-treatment {
  font-family: var(--font-work-sans, 'Work Sans', sans-serif);
  font-size: 15px;
  font-weight: 700;
  color: #1A1A2E;
  margin-bottom: 4px;
}
.demo-odonto-ad-note {
  font-size: 12px;
  color: #999;
  font-style: italic;
}

@media (max-width: 768px) {
  .demo-odonto-ad-grid { grid-template-columns: 1fr; }
}

/* ── DEPOIMENTOS ── */
.demo-odonto-dep-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 56px;
}
.demo-odonto-dep-card {
  background: #fff;
  border: 1px solid #E0F2FE;
  border-radius: 16px;
  padding: 28px 24px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
}
.demo-odonto-dep-stars {
  display: flex;
  gap: 3px;
  margin-bottom: 14px;
  color: #F59E0B;
}
.demo-odonto-dep-text {
  font-size: 15px;
  color: #555570;
  line-height: 1.75;
  margin-bottom: 20px;
  font-style: italic;
}
.demo-odonto-dep-text::before { content: open-quote; }
.demo-odonto-dep-text::after { content: close-quote; }
.demo-odonto-dep-author {
  display: flex;
  align-items: center;
  gap: 12px;
}
.demo-odonto-dep-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #BAE6FD 0%, #99F6E4 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  color: #0369A1;
  flex-shrink: 0;
}
.demo-odonto-dep-name {
  font-size: 14px;
  font-weight: 700;
  color: #1A1A2E;
  line-height: 1.2;
}
.demo-odonto-dep-detail {
  font-size: 12px;
  color: #999;
}

@media (max-width: 768px) {
  .demo-odonto-dep-grid { grid-template-columns: 1fr; }
}

/* ── LOCALIZAÇÃO ── */
.demo-odonto-loc-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;
}
.demo-odonto-loc-info h2 {
  font-family: var(--font-work-sans, 'Work Sans', sans-serif);
  font-size: clamp(24px, 3vw, 32px);
  font-weight: 700;
  color: #1A1A2E;
  margin-bottom: 28px;
}
.demo-odonto-loc-items {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.demo-odonto-loc-item {
  display: flex;
  gap: 14px;
  align-items: flex-start;
}
.demo-odonto-loc-item-icon {
  width: 40px;
  height: 40px;
  background: rgba(14,165,233,0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: #0EA5E9;
}
.demo-odonto-loc-item-text strong {
  display: block;
  font-size: 14px;
  font-weight: 700;
  color: #1A1A2E;
  margin-bottom: 2px;
}
.demo-odonto-loc-item-text span {
  font-size: 14px;
  color: #666680;
}
.demo-odonto-map-placeholder {
  width: 100%;
  aspect-ratio: 4/3;
  background: linear-gradient(145deg, #E0F2FE 0%, #BAE6FD 50%, #CFFAFE 100%);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border: 1px solid #BAE6FD;
  color: #0EA5E9;
}
.demo-odonto-map-placeholder-text {
  font-size: 14px;
  font-weight: 600;
  color: #0369A1;
}
.demo-odonto-map-placeholder-sub {
  font-size: 12px;
  color: #7DD3FC;
}

@media (max-width: 768px) {
  .demo-odonto-loc-grid { grid-template-columns: 1fr; gap: 32px; }
}

/* ── CTA ── */
.demo-odonto-cta {
  background: linear-gradient(135deg, #0EA5E9 0%, #0284C7 50%, #14B8A6 100%);
  padding: 88px 24px;
  text-align: center;
}
.demo-odonto-cta-inner {
  max-width: 640px;
  margin: 0 auto;
}
.demo-odonto-cta-icon {
  width: 72px;
  height: 72px;
  background: rgba(255,255,255,0.15);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  color: #fff;
}
.demo-odonto-cta h2 {
  font-family: var(--font-work-sans, 'Work Sans', sans-serif);
  font-size: clamp(28px, 4vw, 44px);
  font-weight: 700;
  color: #fff;
  line-height: 1.2;
  margin-bottom: 16px;
}
.demo-odonto-cta p {
  font-size: 16px;
  color: rgba(255,255,255,0.85);
  line-height: 1.7;
  margin-bottom: 36px;
}
.demo-odonto-cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #fff;
  color: #0284C7;
  padding: 16px 36px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.15s, box-shadow 0.2s;
  box-shadow: 0 8px 32px rgba(0,0,0,0.15);
}
.demo-odonto-cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.2);
}
.demo-odonto-cta-note {
  font-size: 13px;
  color: rgba(255,255,255,0.65);
  margin-top: 16px;
}

/* ── FOOTER ── */
.demo-odonto-footer {
  background: #1A1A2E;
  padding: 48px 24px 32px;
  text-align: center;
}
.demo-odonto-footer-inner {
  max-width: 1160px;
  margin: 0 auto;
}
.demo-odonto-footer-brand {
  font-family: var(--font-work-sans, 'Work Sans', sans-serif);
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 8px;
}
.demo-odonto-footer-cro {
  font-size: 13px;
  color: #7DD3FC;
  margin-bottom: 24px;
}
.demo-odonto-footer-links {
  display: flex;
  justify-content: center;
  gap: 28px;
  flex-wrap: wrap;
  margin-bottom: 32px;
}
.demo-odonto-footer-links a {
  font-size: 13px;
  color: #94A3B8;
  text-decoration: none;
  transition: color 0.2s;
}
.demo-odonto-footer-links a:hover { color: #7DD3FC; }
.demo-odonto-footer-divider {
  border: none;
  border-top: 1px solid rgba(255,255,255,0.07);
  margin: 0 0 24px;
}
.demo-odonto-footer-credit {
  font-size: 12px;
  color: #475569;
}
.demo-odonto-footer-credit a {
  color: #0EA5E9;
  text-decoration: none;
  font-weight: 600;
}
.demo-odonto-footer-credit a:hover {
  text-decoration: underline;
}
`,
        }}
      />

      <div className="demo-odonto-root">

        {/* ── NAV ── */}
        <nav className="demo-odonto-nav" aria-label="Navegação principal">
          <div className="demo-odonto-nav-inner">
            <a href="#inicio" className="demo-odonto-brand">
              <div className="demo-odonto-brand-logo" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C9.5 2 7.5 3.5 7.5 5.5c0 1.5.8 2.8 2 3.5L8 18c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2l-1.5-9c1.2-.7 2-2 2-3.5C16.5 3.5 14.5 2 12 2z"/>
                </svg>
              </div>
              <div className="demo-odonto-brand-text">
                <span className="demo-odonto-brand-name">Dr. Felipe Oliveira</span>
                <span className="demo-odonto-brand-specialty">Odontologia</span>
              </div>
            </a>

            <ul className="demo-odonto-nav-links">
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#tratamentos">Tratamentos</a></li>
              <li><a href="#resultados">Resultados</a></li>
              <li><a href="#localizacao">Localização</a></li>
              <li><a href="#contato" className="demo-odonto-nav-cta">Agendar consulta</a></li>
            </ul>
          </div>
        </nav>

        {/* ── HERO ── */}
        <section className="demo-odonto-hero" id="inicio">
          <div className="demo-odonto-hero-inner">
            <div>
              <div className="demo-odonto-hero-badge">
                <span className="demo-odonto-hero-badge-dot" aria-hidden="true" />
                Consultas disponíveis
              </div>
              <h1 className="demo-odonto-hero-title">
                Seu sorriso merece<br />
                o <em>melhor cuidado</em>
              </h1>
              <p className="demo-odonto-hero-sub">
                Tecnologia de ponta, ambiente acolhedor e uma equipe dedicada a transformar sua saúde bucal com conforto e segurança.
              </p>
              <div className="demo-odonto-hero-actions">
                <a href="#contato" className="demo-odonto-btn-primary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  Agendar consulta
                </a>
                <a href="#tratamentos" className="demo-odonto-btn-ghost">
                  Ver tratamentos
                </a>
              </div>
              <div className="demo-odonto-hero-trust">
                <div className="demo-odonto-hero-trust-item">
                  <span className="demo-odonto-hero-trust-icon" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  CRO/SP 45678
                </div>
                <div className="demo-odonto-hero-trust-item">
                  <span className="demo-odonto-hero-trust-icon" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  Atendimento humanizado
                </div>
                <div className="demo-odonto-hero-trust-item">
                  <span className="demo-odonto-hero-trust-icon" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  Tecnologia digital
                </div>
              </div>
            </div>

            <div className="demo-odonto-hero-visual" aria-hidden="true">
              <div className="demo-odonto-hero-img">
                <span className="demo-odonto-hero-img-initials">FO</span>
              </div>
              <div className="demo-odonto-hero-card">
                <div className="demo-odonto-hero-card-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C9.5 2 7.5 3.5 7.5 5.5c0 1.5.8 2.8 2 3.5L8 18c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2l-1.5-9c1.2-.7 2-2 2-3.5C16.5 3.5 14.5 2 12 2z"/>
                  </svg>
                </div>
                <div className="demo-odonto-hero-card-text">
                  <strong>+1.200 pacientes</strong>
                  <span>tratados com sucesso</span>
                </div>
              </div>
              <div className="demo-odonto-hero-card-2">
                ★ 4.9 — 340 avaliações
              </div>
            </div>
          </div>
        </section>

        {/* ── SOBRE ── */}
        <section className="demo-odonto-section" id="sobre">
          <div className="demo-odonto-container">
            <div className="demo-odonto-sobre-grid">
              <div className="demo-odonto-reveal" style={{"--od": "0s"} as React.CSSProperties}>
                <div className="demo-odonto-sobre-photo" aria-label="Foto do Dr. Felipe Oliveira">
                  <span className="demo-odonto-sobre-initials">FO</span>
                  <div className="demo-odonto-sobre-cro">CRO/SP 45678</div>
                </div>
              </div>

              <div className="demo-odonto-sobre-content demo-odonto-reveal" style={{"--od": "0.1s"} as React.CSSProperties}>
                <span className="demo-odonto-eyebrow">Sobre o dentista</span>
                <h2>Dr. Felipe Oliveira<br />Cirurgião-Dentista</h2>
                <p>
                  Formado pela Universidade de São Paulo (USP) e especialista em Implantodontia e Estética Dental, o Dr. Felipe Oliveira atua há mais de 12 anos transformando sorrisos em São Paulo.
                </p>
                <p>
                  Com formação contínua em centros de referência no Brasil e Europa, ele combina técnicas avançadas com uma abordagem humanizada, garantindo que cada paciente se sinta confortável e bem cuidado em todas as etapas do tratamento.
                </p>

                <div className="demo-odonto-sobre-feats">
                  <div className="demo-odonto-sobre-feat">
                    <div className="demo-odonto-sobre-feat-icon" aria-hidden="true">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span className="demo-odonto-sobre-feat-text">Especialista em Implantodontia e Estética Dental</span>
                  </div>
                  <div className="demo-odonto-sobre-feat">
                    <div className="demo-odonto-sobre-feat-icon" aria-hidden="true">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span className="demo-odonto-sobre-feat-text">Equipamentos de diagnóstico digital de última geração</span>
                  </div>
                  <div className="demo-odonto-sobre-feat">
                    <div className="demo-odonto-sobre-feat-icon" aria-hidden="true">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span className="demo-odonto-sobre-feat-text">Ambiente climatizado e conforto total para o paciente</span>
                  </div>
                  <div className="demo-odonto-sobre-feat">
                    <div className="demo-odonto-sobre-feat-icon" aria-hidden="true">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span className="demo-odonto-sobre-feat-text">Membro da Associação Brasileira de Odontologia (ABO)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TRATAMENTOS ── */}
        <section className="demo-odonto-section demo-odonto-section-alt" id="tratamentos">
          <div className="demo-odonto-container">
            <div className="demo-odonto-tratamentos-header demo-odonto-reveal">
              <span className="demo-odonto-eyebrow">Tratamentos</span>
              <h2 className="demo-odonto-section-title">Cuidado completo para o seu sorriso</h2>
              <p className="demo-odonto-section-desc">
                Oferecemos uma linha completa de tratamentos odontológicos com tecnologia avançada e resultados que falam por si.
              </p>
            </div>

            <div className="demo-odonto-tratamentos-grid">
              {/* Implante */}
              <div className="demo-odonto-trat-card demo-odonto-reveal" style={{"--od": "0s"} as React.CSSProperties}>
                <div className="demo-odonto-trat-icon" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C9.5 2 7.5 3.5 7.5 5.5c0 1.5.8 2.8 2 3.5L8 18c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2l-1.5-9c1.2-.7 2-2 2-3.5C16.5 3.5 14.5 2 12 2z"/>
                  </svg>
                </div>
                <div className="demo-odonto-trat-name">Implante Dentário</div>
                <p className="demo-odonto-trat-desc">Reposição de dentes perdidos com implantes de titânio de alta qualidade, devolvendo função e estética com resultado natural duradouro.</p>
                <a href="#contato" className="demo-odonto-trat-link" aria-label="Saiba mais sobre Implante Dentário">
                  Saiba mais
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </a>
              </div>

              {/* Clareamento */}
              <div className="demo-odonto-trat-card demo-odonto-reveal" style={{"--od": "0.07s"} as React.CSSProperties}>
                <div className="demo-odonto-trat-icon" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5"/>
                    <line x1="12" y1="1" x2="12" y2="3"/>
                    <line x1="12" y1="21" x2="12" y2="23"/>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                    <line x1="1" y1="12" x2="3" y2="12"/>
                    <line x1="21" y1="12" x2="23" y2="12"/>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                  </svg>
                </div>
                <div className="demo-odonto-trat-name">Clareamento Dental</div>
                <p className="demo-odonto-trat-desc">Clareamento a laser e de consultório com gel profissional. Resultados visíveis já na primeira sessão, sem sensibilidade excessiva.</p>
                <a href="#contato" className="demo-odonto-trat-link" aria-label="Saiba mais sobre Clareamento Dental">
                  Saiba mais
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </a>
              </div>

              {/* Ortodontia */}
              <div className="demo-odonto-trat-card demo-odonto-reveal" style={{"--od": "0.14s"} as React.CSSProperties}>
                <div className="demo-odonto-trat-icon" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 6h16M4 10h16M4 14h16"/>
                    <circle cx="7" cy="18" r="2"/>
                    <circle cx="12" cy="18" r="2"/>
                    <circle cx="17" cy="18" r="2"/>
                  </svg>
                </div>
                <div className="demo-odonto-trat-name">Ortodontia</div>
                <p className="demo-odonto-trat-desc">Aparelhos fixos, removíveis e alinhadores invisíveis (Invisalign). Corrija o alinhamento dos dentes com conforto e discrição.</p>
                <a href="#contato" className="demo-odonto-trat-link" aria-label="Saiba mais sobre Ortodontia">
                  Saiba mais
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </a>
              </div>

              {/* Lente de Contato */}
              <div className="demo-odonto-trat-card demo-odonto-reveal" style={{"--od": "0.21s"} as React.CSSProperties}>
                <div className="demo-odonto-trat-icon" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
                <div className="demo-odonto-trat-name">Lente de Contato Dental</div>
                <p className="demo-odonto-trat-desc">Facetas ultrafinas em porcelana que transformam forma, cor e tamanho dos dentes. O sorriso dos sonhos em poucas sessões.</p>
                <a href="#contato" className="demo-odonto-trat-link" aria-label="Saiba mais sobre Lente de Contato Dental">
                  Saiba mais
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </a>
              </div>

              {/* Prótese */}
              <div className="demo-odonto-trat-card demo-odonto-reveal" style={{"--od": "0.28s"} as React.CSSProperties}>
                <div className="demo-odonto-trat-icon" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l2-2 2 2 2-2 2 2 2-2 2 2 2-2 2 2"/>
                    <path d="M3 15l2 2 2-2 2 2 2-2 2 2 2-2 2 2"/>
                    <path d="M3 9v6M21 9v6"/>
                  </svg>
                </div>
                <div className="demo-odonto-trat-name">Prótese Dentária</div>
                <p className="demo-odonto-trat-desc">Próteses fixas, móveis e sobre implantes personalizadas. Restaure a função mastigatória e a estética com materiais de alta resistência.</p>
                <a href="#contato" className="demo-odonto-trat-link" aria-label="Saiba mais sobre Prótese Dentária">
                  Saiba mais
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </a>
              </div>

              {/* Harmonização */}
              <div className="demo-odonto-trat-card demo-odonto-reveal" style={{"--od": "0.35s"} as React.CSSProperties}>
                <div className="demo-odonto-trat-icon" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </div>
                <div className="demo-odonto-trat-name">Harmonização Orofacial</div>
                <p className="demo-odonto-trat-desc">Procedimentos minimamente invasivos com toxina botulínica e preenchimento para harmonizar o sorriso e o contorno facial com naturalidade.</p>
                <a href="#contato" className="demo-odonto-trat-link" aria-label="Saiba mais sobre Harmonização Orofacial">
                  Saiba mais
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── ANTES & DEPOIS ── */}
        <section className="demo-odonto-section" id="resultados">
          <div className="demo-odonto-container">
            <div className="demo-odonto-ad-header demo-odonto-reveal">
              <span className="demo-odonto-eyebrow">Resultados</span>
              <h2 className="demo-odonto-section-title">Antes &amp; Depois</h2>
              <p className="demo-odonto-section-desc">
                Transformações reais que mostram o poder de um sorriso cuidado com dedicação e tecnologia.
              </p>
            </div>

            <div className="demo-odonto-ad-grid">
              <div className="demo-odonto-ad-card demo-odonto-reveal" style={{"--od": "0s"} as React.CSSProperties}>
                <div className="demo-odonto-ad-images" aria-hidden="true">
                  <div className="demo-odonto-ad-before">
                    <span className="demo-odonto-ad-label-before">Antes</span>
                  </div>
                  <div className="demo-odonto-ad-divider" />
                  <div className="demo-odonto-ad-after">
                    <span className="demo-odonto-ad-label-after">Depois</span>
                  </div>
                </div>
                <div className="demo-odonto-ad-info">
                  <div className="demo-odonto-ad-treatment">Lente de Contato Dental</div>
                  <div className="demo-odonto-ad-note">Resultado ilustrativo</div>
                </div>
              </div>

              <div className="demo-odonto-ad-card demo-odonto-reveal" style={{"--od": "0.1s"} as React.CSSProperties}>
                <div className="demo-odonto-ad-images" aria-hidden="true">
                  <div className="demo-odonto-ad-before">
                    <span className="demo-odonto-ad-label-before">Antes</span>
                  </div>
                  <div className="demo-odonto-ad-divider" />
                  <div className="demo-odonto-ad-after">
                    <span className="demo-odonto-ad-label-after">Depois</span>
                  </div>
                </div>
                <div className="demo-odonto-ad-info">
                  <div className="demo-odonto-ad-treatment">Clareamento Dental</div>
                  <div className="demo-odonto-ad-note">Resultado ilustrativo</div>
                </div>
              </div>

              <div className="demo-odonto-ad-card demo-odonto-reveal" style={{"--od": "0.2s"} as React.CSSProperties}>
                <div className="demo-odonto-ad-images" aria-hidden="true">
                  <div className="demo-odonto-ad-before">
                    <span className="demo-odonto-ad-label-before">Antes</span>
                  </div>
                  <div className="demo-odonto-ad-divider" />
                  <div className="demo-odonto-ad-after">
                    <span className="demo-odonto-ad-label-after">Depois</span>
                  </div>
                </div>
                <div className="demo-odonto-ad-info">
                  <div className="demo-odonto-ad-treatment">Implante Dentário</div>
                  <div className="demo-odonto-ad-note">Resultado ilustrativo</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── DEPOIMENTOS ── */}
        <section className="demo-odonto-section demo-odonto-section-alt" id="depoimentos">
          <div className="demo-odonto-container">
            <div className="demo-odonto-reveal" style={{textAlign: "center"}}>
              <span className="demo-odonto-eyebrow">Depoimentos</span>
              <h2 className="demo-odonto-section-title">O que nossos pacientes dizem</h2>
            </div>

            <div className="demo-odonto-dep-grid">
              <div className="demo-odonto-dep-card demo-odonto-reveal" style={{"--od": "0s"} as React.CSSProperties}>
                <div className="demo-odonto-dep-stars" aria-label="5 estrelas">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  ))}
                </div>
                <p className="demo-odonto-dep-text">
                  Fiz minhas lentes de contato dental com o Dr. Felipe e ficou incrível! O atendimento foi muito cuidadoso, ele explicou tudo em detalhes e o resultado superou minhas expectativas.
                </p>
                <div className="demo-odonto-dep-author">
                  <div className="demo-odonto-dep-avatar" aria-hidden="true">AM</div>
                  <div>
                    <div className="demo-odonto-dep-name">Ana Maria S.</div>
                    <div className="demo-odonto-dep-detail">Lente de Contato Dental</div>
                  </div>
                </div>
              </div>

              <div className="demo-odonto-dep-card demo-odonto-reveal" style={{"--od": "0.1s"} as React.CSSProperties}>
                <div className="demo-odonto-dep-stars" aria-label="5 estrelas">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  ))}
                </div>
                <p className="demo-odonto-dep-text">
                  Coloquei um implante e o processo foi tranquilo do início ao fim. O Dr. Felipe transmite muita segurança. Já indiquei para toda a família e voltarei para o clareamento em breve.
                </p>
                <div className="demo-odonto-dep-author">
                  <div className="demo-odonto-dep-avatar" aria-hidden="true">RC</div>
                  <div>
                    <div className="demo-odonto-dep-name">Ricardo C.</div>
                    <div className="demo-odonto-dep-detail">Implante Dentário</div>
                  </div>
                </div>
              </div>

              <div className="demo-odonto-dep-card demo-odonto-reveal" style={{"--od": "0.2s"} as React.CSSProperties}>
                <div className="demo-odonto-dep-stars" aria-label="5 estrelas">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  ))}
                </div>
                <p className="demo-odonto-dep-text">
                  Tinha muito medo de dentista e o Dr. Felipe foi extremamente paciente. A clínica é moderna e aconchegante. Finalmente consegui tratar meus dentes sem ansiedade. Recomendo demais!
                </p>
                <div className="demo-odonto-dep-author">
                  <div className="demo-odonto-dep-avatar" aria-hidden="true">PL</div>
                  <div>
                    <div className="demo-odonto-dep-name">Patrícia L.</div>
                    <div className="demo-odonto-dep-detail">Ortodontia</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── LOCALIZAÇÃO ── */}
        <section className="demo-odonto-section" id="localizacao">
          <div className="demo-odonto-container">
            <div className="demo-odonto-loc-grid">
              <div className="demo-odonto-reveal" style={{"--od": "0s"} as React.CSSProperties}>
                <span className="demo-odonto-eyebrow">Localização</span>
                <div className="demo-odonto-loc-info">
                  <h2>Onde nos encontrar</h2>
                  <div className="demo-odonto-loc-items">
                    <div className="demo-odonto-loc-item">
                      <div className="demo-odonto-loc-item-icon" aria-hidden="true">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                          <circle cx="12" cy="10" r="3"/>
                        </svg>
                      </div>
                      <div className="demo-odonto-loc-item-text">
                        <strong>Endereço</strong>
                        <span>Rua Haddock Lobo, 595 — Cerqueira César<br />São Paulo, SP — CEP 01414-001</span>
                      </div>
                    </div>

                    <div className="demo-odonto-loc-item">
                      <div className="demo-odonto-loc-item-icon" aria-hidden="true">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.23h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91A16 16 0 0 0 15.09 16l.86-.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                      </div>
                      <div className="demo-odonto-loc-item-text">
                        <strong>Telefone / WhatsApp</strong>
                        <span>(11) 99999-0000</span>
                      </div>
                    </div>

                    <div className="demo-odonto-loc-item">
                      <div className="demo-odonto-loc-item-icon" aria-hidden="true">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"/>
                          <polyline points="12 6 12 12 16 14"/>
                        </svg>
                      </div>
                      <div className="demo-odonto-loc-item-text">
                        <strong>Horários de atendimento</strong>
                        <span>Segunda a Sexta: 8h às 19h<br />Sábado: 8h às 13h</span>
                      </div>
                    </div>

                    <div className="demo-odonto-loc-item">
                      <div className="demo-odonto-loc-item-icon" aria-hidden="true">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                          <line x1="8" y1="21" x2="16" y2="21"/>
                          <line x1="12" y1="17" x2="12" y2="21"/>
                        </svg>
                      </div>
                      <div className="demo-odonto-loc-item-text">
                        <strong>Registro Profissional</strong>
                        <span>CRO/SP 45678</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="demo-odonto-reveal" style={{"--od": "0.12s"} as React.CSSProperties}>
                <div className="demo-odonto-map-placeholder" aria-label="Mapa placeholder — Rua Haddock Lobo, 595, São Paulo">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <div className="demo-odonto-map-placeholder-text">Rua Haddock Lobo, 595</div>
                  <div className="demo-odonto-map-placeholder-sub">São Paulo — SP</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA / CONTATO ── */}
        <section className="demo-odonto-cta" id="contato">
          <div className="demo-odonto-cta-inner demo-odonto-reveal">
            <div className="demo-odonto-cta-icon" aria-hidden="true">
              {/* Smile / tooth SVG icon — no emoji */}
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C9.5 2 7.5 3.5 7.5 5.5c0 1.5.8 2.8 2 3.5L8 18c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2l-1.5-9c1.2-.7 2-2 2-3.5C16.5 3.5 14.5 2 12 2z"/>
                <path d="M9.5 13c.5 1.5 4.5 1.5 5 0" strokeWidth="1.5"/>
              </svg>
            </div>
            <h2>Agende sua avaliação gratuita</h2>
            <p>
              O primeiro passo para o sorriso que você sempre quis começa com uma conversa. Agende sua avaliação sem compromisso e descubra o melhor tratamento para você.
            </p>
            <a href="tel:+5511999990000" className="demo-odonto-cta-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              Agendar agora
            </a>
            <p className="demo-odonto-cta-note">
              (11) 99999-0000 · Seg–Sex 8h–19h · Sáb 8h–13h
            </p>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="demo-odonto-footer">
          <div className="demo-odonto-footer-inner">
            <div className="demo-odonto-footer-brand">Dr. Felipe Oliveira</div>
            <div className="demo-odonto-footer-cro">Cirurgião-Dentista · CRO/SP 45678</div>

            <nav className="demo-odonto-footer-links" aria-label="Links do rodapé">
              <a href="#inicio">Início</a>
              <a href="#sobre">Sobre</a>
              <a href="#tratamentos">Tratamentos</a>
              <a href="#resultados">Antes &amp; Depois</a>
              <a href="#localizacao">Localização</a>
              <a href="#contato">Agendar consulta</a>
            </nav>

            <hr className="demo-odonto-footer-divider" />

            <p className="demo-odonto-footer-credit">
              Site criado por{" "}
              <a href="https://condutasaude.com" target="_blank" rel="noopener">
                Conduta Saúde
              </a>{" "}
              · Esta é uma demonstração de site para clínicas odontológicas.
            </p>
          </div>
        </footer>

        {/* ── REVEAL SCRIPT ── */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function(){
  var els = document.querySelectorAll('.demo-odonto-reveal');
  if (!els.length) return;
  var obs = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  els.forEach(function(el){ obs.observe(el); });
})();
`,
          }}
        />
      </div>
    </>
  );
}

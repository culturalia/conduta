import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Dr. Ricardo Almeida — Cardiologista em São Paulo",
  description:
    "Dr. Ricardo Almeida, cardiologista com mais de 20 anos de experiência. CRM/SP 654321. Av. Paulista, 1000 — São Paulo. Agende sua consulta.",
  robots: { index: false, follow: false },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Ricardo Almeida",
  description:
    "Cardiologista com mais de 20 anos de experiência clínica e acadêmica, Fellow do American College of Cardiology.",
  medicalSpecialty: "Cardiology",
  url: "https://condutasaude.com/demos/cardiologia",
  telephone: "+55-11-3456-7890",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Paulista, 1000",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    postalCode: "01310-100",
    addressCountry: "BR",
  },
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: "CRM/SP 654321",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: "Fellow of the American College of Cardiology",
    },
  ],
  affiliation: [
    { "@type": "Hospital", name: "Instituto do Coração — InCor / HCFMUSP" },
    { "@type": "Hospital", name: "Hospital Sírio-Libanês" },
    { "@type": "Hospital", name: "Hospital Albert Einstein" },
  ],
};

export default function CardiologiaDemo() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── SCOPED STYLES ── */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
/* ── RESET & BASE ── */
.demo-cardio-root {
  font-family: var(--font-inter), 'Inter', sans-serif;
  color: #1A1A2E;
  background: #FFFFFF;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}
.demo-cardio-root *, .demo-cardio-root *::before, .demo-cardio-root *::after {
  box-sizing: border-box;
}
.demo-cardio-root a { text-decoration: none; color: inherit; }
.demo-cardio-root ul { list-style: none; padding: 0; margin: 0; }
.demo-cardio-root p { margin: 0; }

/* ── ANIMATIONS ── */
@keyframes demo-cardio-navIn {
  from { transform: translateY(-100%); opacity: 0; }
  to   { transform: none; opacity: 1; }
}
@keyframes demo-cardio-heroIn {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: none; }
}
@keyframes demo-cardio-pulse {
  0%, 100% { transform: scale(1); }
  50%       { transform: scale(1.04); }
}

.demo-cardio-hero-anim {
  opacity: 0;
  animation: demo-cardio-heroIn 0.6s ease forwards;
}
.demo-cardio-hero-anim:nth-child(1) { animation-delay: 0.08s; }
.demo-cardio-hero-anim:nth-child(2) { animation-delay: 0.20s; }
.demo-cardio-hero-anim:nth-child(3) { animation-delay: 0.34s; }
.demo-cardio-hero-anim:nth-child(4) { animation-delay: 0.48s; }
.demo-cardio-hero-anim:nth-child(5) { animation-delay: 0.60s; }

.demo-cardio-reveal {
  opacity: 0;
  transform: translateY(22px) scale(0.97);
  transition: opacity 0.45s ease-out var(--d, 0s), transform 0.45s ease-out var(--d, 0s);
}
.demo-cardio-reveal.visible {
  opacity: 1;
  transform: none;
}

@media (prefers-reduced-motion: reduce) {
  .demo-cardio-reveal, .demo-cardio-hero-anim {
    opacity: 1 !important; transform: none !important;
    animation: none !important; transition: none !important;
  }
  .demo-cardio-nav { animation: none !important; }
}

/* ── NAV ── */
.demo-cardio-nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 200;
  padding: 0 clamp(20px, 5vw, 64px);
  display: flex; align-items: center; justify-content: space-between;
  height: 68px;
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(30, 58, 95, 0.10);
  animation: demo-cardio-navIn 0.35s ease forwards;
}

.demo-cardio-nav-brand {
  display: flex; flex-direction: column;
}
.demo-cardio-nav-brand-name {
  font-family: var(--font-work-sans), 'Work Sans', sans-serif;
  font-size: 16px; font-weight: 700;
  color: #1E3A5F; letter-spacing: -0.01em; line-height: 1.2;
}
.demo-cardio-nav-brand-spec {
  font-size: 11px; font-weight: 500;
  color: #0EA5E9; letter-spacing: 0.06em; text-transform: uppercase;
  line-height: 1;
}

.demo-cardio-nav-links {
  display: flex; align-items: center; gap: 32px;
}
.demo-cardio-nav-links a {
  font-size: 13.5px; font-weight: 500; color: #374151;
  transition: color 0.2s; position: relative; cursor: pointer;
}
.demo-cardio-nav-links a:hover { color: #1E3A5F; }
.demo-cardio-nav-links a::after {
  content: ''; position: absolute; bottom: -3px; left: 0;
  width: 0; height: 2px; background: #0EA5E9;
  border-radius: 2px; transition: width 0.25s ease;
}
.demo-cardio-nav-links a:hover::after { width: 100%; }

.demo-cardio-nav-cta {
  background: #1E3A5F; color: #FFFFFF !important;
  padding: 10px 22px; border-radius: 6px;
  font-size: 13.5px !important; font-weight: 600 !important;
  transition: background 0.2s, transform 0.15s !important;
  letter-spacing: 0.01em;
}
.demo-cardio-nav-cta:hover { background: #0EA5E9 !important; transform: translateY(-1px); }
.demo-cardio-nav-cta::after { display: none !important; }

.demo-cardio-menu-btn {
  display: none; background: none; border: none;
  cursor: pointer; padding: 8px; color: #1E3A5F;
}

/* ── HERO ── */
.demo-cardio-hero {
  min-height: 100vh;
  background: linear-gradient(150deg, #EFF6FF 0%, #DBEAFE 35%, #BFDBFE 70%, #EFF6FF 100%);
  display: flex; align-items: center;
  padding: 100px clamp(20px, 6vw, 80px) 64px;
  position: relative; overflow: hidden;
}

.demo-cardio-hero::before {
  content: '';
  position: absolute; top: -120px; right: -80px;
  width: 600px; height: 600px;
  background: radial-gradient(circle, rgba(30,58,95,0.07) 0%, transparent 70%);
  border-radius: 50%; pointer-events: none;
}
.demo-cardio-hero::after {
  content: '';
  position: absolute; bottom: -80px; left: -60px;
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%);
  border-radius: 50%; pointer-events: none;
}

.demo-cardio-hero-inner {
  max-width: 1180px; margin: 0 auto;
  display: grid; grid-template-columns: 1fr 420px;
  gap: 64px; align-items: center; width: 100%;
  position: relative; z-index: 1;
}

.demo-cardio-hero-tag {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(30,58,95,0.08); border: 1px solid rgba(30,58,95,0.15);
  padding: 6px 14px; border-radius: 100px;
  font-size: 12px; font-weight: 600; color: #1E3A5F;
  letter-spacing: 0.07em; text-transform: uppercase;
  margin-bottom: 24px;
}
.demo-cardio-hero-tag-dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: #0EA5E9;
  animation: demo-cardio-pulse 2.5s ease-in-out infinite;
}

.demo-cardio-hero-h1 {
  font-family: var(--font-work-sans), 'Work Sans', sans-serif;
  font-size: clamp(38px, 5.5vw, 64px);
  font-weight: 700; line-height: 1.10;
  color: #1E3A5F; letter-spacing: -0.025em;
  margin-bottom: 20px;
}
.demo-cardio-hero-h1 span { color: #0EA5E9; }

.demo-cardio-hero-sub {
  font-size: 17px; line-height: 1.7; color: #374151;
  max-width: 520px; margin-bottom: 36px;
}

.demo-cardio-hero-creds {
  display: flex; flex-direction: column; gap: 10px;
  margin-bottom: 40px;
}
.demo-cardio-hero-cred {
  display: flex; align-items: center; gap: 10px;
  font-size: 14px; color: #4B5563; font-weight: 500;
}
.demo-cardio-hero-cred-icon {
  width: 20px; height: 20px; flex-shrink: 0; color: #0EA5E9;
}

.demo-cardio-hero-actions {
  display: flex; gap: 16px; flex-wrap: wrap;
}
.demo-cardio-btn-primary {
  background: #1E3A5F; color: #FFFFFF;
  padding: 14px 32px; border-radius: 7px;
  font-size: 15px; font-weight: 600; letter-spacing: 0.01em;
  transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
  box-shadow: 0 4px 16px rgba(30,58,95,0.25);
  cursor: pointer; border: none; display: inline-block;
}
.demo-cardio-btn-primary:hover {
  background: #0EA5E9; transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(14,165,233,0.30);
}
.demo-cardio-btn-secondary {
  background: transparent; color: #1E3A5F;
  padding: 14px 32px; border-radius: 7px;
  font-size: 15px; font-weight: 600; letter-spacing: 0.01em;
  border: 2px solid #1E3A5F;
  transition: background 0.2s, color 0.2s, transform 0.15s;
  cursor: pointer; display: inline-block;
}
.demo-cardio-btn-secondary:hover {
  background: #1E3A5F; color: #FFFFFF; transform: translateY(-2px);
}

/* Hero photo card */
.demo-cardio-hero-card {
  background: #FFFFFF;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(30,58,95,0.15), 0 4px 16px rgba(30,58,95,0.08);
  overflow: hidden;
  position: relative;
}
.demo-cardio-hero-photo-img {
  width: 100%; aspect-ratio: 3/4;
  object-fit: cover; object-position: center top;
  display: block;
}
.demo-cardio-hero-card-info {
  padding: 20px 24px;
  background: #FFFFFF;
  border-top: 3px solid #0EA5E9;
}
.demo-cardio-hero-card-name {
  font-family: var(--font-work-sans), 'Work Sans', sans-serif;
  font-size: 17px; font-weight: 700; color: #1E3A5F; line-height: 1.2;
}
.demo-cardio-hero-card-crm {
  font-size: 12px; color: #6B7280; margin-top: 4px; font-weight: 500;
}
.demo-cardio-hero-card-badge {
  display: inline-flex; align-items: center; gap: 5px;
  background: #EFF6FF; border: 1px solid #BFDBFE;
  padding: 4px 10px; border-radius: 100px;
  font-size: 11px; font-weight: 600; color: #1E40AF;
  margin-top: 10px; letter-spacing: 0.04em;
}

/* Hero stats strip */
.demo-cardio-hero-stats {
  display: flex; gap: 0;
  background: #1E3A5F; border-radius: 12px;
  margin-top: 40px; overflow: hidden;
}
.demo-cardio-hero-stat {
  flex: 1; padding: 20px 24px;
  border-right: 1px solid rgba(255,255,255,0.10);
  text-align: center;
}
.demo-cardio-hero-stat:last-child { border-right: none; }
.demo-cardio-hero-stat-val {
  font-family: var(--font-work-sans), 'Work Sans', sans-serif;
  font-size: 28px; font-weight: 700; color: #FFFFFF; line-height: 1;
}
.demo-cardio-hero-stat-lbl {
  font-size: 11px; color: rgba(255,255,255,0.60);
  letter-spacing: 0.05em; text-transform: uppercase;
  margin-top: 4px;
}

/* ── SOBRE ── */
.demo-cardio-sobre {
  padding: 96px clamp(20px, 6vw, 80px);
  background: #FFFFFF;
}
.demo-cardio-sobre-inner {
  max-width: 1180px; margin: 0 auto;
  display: grid; grid-template-columns: 380px 1fr;
  gap: 72px; align-items: start;
}

.demo-cardio-section-label {
  font-size: 11.5px; font-weight: 700;
  color: #0EA5E9; letter-spacing: 0.10em; text-transform: uppercase;
  margin-bottom: 12px; display: block;
}
.demo-cardio-section-h2 {
  font-family: var(--font-work-sans), 'Work Sans', sans-serif;
  font-size: clamp(26px, 3.5vw, 38px); font-weight: 700;
  color: #1E3A5F; letter-spacing: -0.02em; line-height: 1.2;
  margin-bottom: 20px;
}

.demo-cardio-sobre-photo {
  position: sticky; top: 88px;
}
.demo-cardio-sobre-photo-wrap {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(30,58,95,0.20);
  margin-bottom: 20px;
}
.demo-cardio-sobre-photo-img {
  width: 100%; aspect-ratio: 4/5;
  object-fit: cover; object-position: center top;
  display: block;
}

.demo-cardio-sobre-affiliations {
  display: flex; flex-direction: column; gap: 10px;
}
.demo-cardio-affiliation {
  display: flex; align-items: center; gap: 10px;
  padding: 12px 16px; background: #EFF6FF;
  border-radius: 8px; border-left: 3px solid #0EA5E9;
}
.demo-cardio-affiliation-icon {
  width: 18px; height: 18px; color: #0EA5E9; flex-shrink: 0;
}
.demo-cardio-affiliation-name {
  font-size: 13px; font-weight: 600; color: #1E3A5F;
}

.demo-cardio-sobre-body p {
  font-size: 16px; line-height: 1.80; color: #4B5563; margin-bottom: 18px;
}
.demo-cardio-sobre-highlights {
  display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 32px 0;
}
.demo-cardio-highlight-card {
  background: #EFF6FF; border: 1px solid #BFDBFE;
  border-radius: 12px; padding: 20px;
}
.demo-cardio-highlight-val {
  font-family: var(--font-work-sans), 'Work Sans', sans-serif;
  font-size: 32px; font-weight: 800; color: #1E3A5F; line-height: 1;
}
.demo-cardio-highlight-lbl {
  font-size: 13px; color: #6B7280; margin-top: 4px; line-height: 1.4;
}

.demo-cardio-creds-list {
  display: flex; flex-direction: column; gap: 8px; margin-top: 24px;
}
.demo-cardio-cred-item {
  display: flex; align-items: flex-start; gap: 10px;
  font-size: 14.5px; color: #374151; line-height: 1.5;
}
.demo-cardio-cred-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: #0EA5E9; flex-shrink: 0; margin-top: 8px;
}

/* ── ESPECIALIDADES ── */
.demo-cardio-espec {
  padding: 96px clamp(20px, 6vw, 80px);
  background: #EFF6FF;
}
.demo-cardio-espec-inner { max-width: 1180px; margin: 0 auto; }
.demo-cardio-espec-header { text-align: center; margin-bottom: 56px; }
.demo-cardio-espec-header p {
  font-size: 16px; color: #4B5563; max-width: 560px; margin: 0 auto; line-height: 1.7;
}
.demo-cardio-espec-grid {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px;
}
.demo-cardio-espec-card {
  background: #FFFFFF; border-radius: 16px;
  padding: 32px 28px;
  border: 1px solid rgba(30,58,95,0.08);
  box-shadow: 0 2px 12px rgba(30,58,95,0.06);
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  cursor: default;
  position: relative; overflow: hidden;
}
.demo-cardio-espec-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px;
  background: linear-gradient(90deg, #1E3A5F, #0EA5E9);
  transform: scaleX(0); transform-origin: left;
  transition: transform 0.3s ease;
}
.demo-cardio-espec-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(30,58,95,0.14);
  border-color: rgba(30,58,95,0.16);
}
.demo-cardio-espec-card:hover::before { transform: scaleX(1); }

.demo-cardio-espec-icon {
  width: 52px; height: 52px; border-radius: 12px;
  background: linear-gradient(135deg, #1E3A5F 0%, #0EA5E9 100%);
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 20px; color: #FFFFFF;
}
.demo-cardio-espec-icon svg { width: 26px; height: 26px; }

.demo-cardio-espec-name {
  font-family: var(--font-work-sans), 'Work Sans', sans-serif;
  font-size: 17px; font-weight: 700; color: #1E3A5F; margin-bottom: 10px;
}
.demo-cardio-espec-desc {
  font-size: 14px; color: #6B7280; line-height: 1.7;
}
.demo-cardio-espec-tag {
  display: inline-block; margin-top: 16px;
  padding: 4px 12px; background: #EFF6FF;
  border-radius: 100px; font-size: 12px; font-weight: 600;
  color: #1E40AF; letter-spacing: 0.04em;
}

/* ── PUBLICAÇÕES ── */
.demo-cardio-pub {
  padding: 96px clamp(20px, 6vw, 80px);
  background: #FFFFFF;
}
.demo-cardio-pub-inner { max-width: 1180px; margin: 0 auto; }
.demo-cardio-pub-header {
  display: flex; align-items: flex-end; justify-content: space-between;
  margin-bottom: 48px; flex-wrap: wrap; gap: 16px;
}
.demo-cardio-pub-header p {
  font-size: 15px; color: #6B7280; max-width: 480px;
}

.demo-cardio-pub-list {
  display: flex; flex-direction: column; gap: 20px;
}
.demo-cardio-pub-item {
  background: #FFFFFF; border: 1px solid #E5E7EB;
  border-radius: 12px; padding: 28px 32px;
  transition: border-color 0.2s, box-shadow 0.2s;
  border-left: 4px solid #1E3A5F;
}
.demo-cardio-pub-item:hover {
  border-color: #BFDBFE;
  border-left-color: #0EA5E9;
  box-shadow: 0 4px 20px rgba(30,58,95,0.08);
}
.demo-cardio-pub-journal {
  font-size: 11.5px; font-weight: 700; color: #0EA5E9;
  letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 8px;
}
.demo-cardio-pub-title {
  font-family: var(--font-work-sans), 'Work Sans', sans-serif;
  font-size: 17px; font-weight: 700; color: #1E3A5F;
  line-height: 1.4; margin-bottom: 10px;
}
.demo-cardio-pub-authors {
  font-size: 13.5px; color: #6B7280; margin-bottom: 6px;
}
.demo-cardio-pub-authors strong { color: #1E3A5F; }
.demo-cardio-pub-meta {
  display: flex; align-items: center; gap: 16px; flex-wrap: wrap;
  font-size: 12.5px; color: #9CA3AF;
}
.demo-cardio-pub-meta span {
  display: flex; align-items: center; gap: 5px;
}

/* ── DEPOIMENTOS ── */
.demo-cardio-dep {
  padding: 96px clamp(20px, 6vw, 80px);
  background: linear-gradient(160deg, #1E3A5F 0%, #0c2040 100%);
}
.demo-cardio-dep-inner { max-width: 1180px; margin: 0 auto; }
.demo-cardio-dep-header { text-align: center; margin-bottom: 56px; }
.demo-cardio-dep-label {
  font-size: 11.5px; font-weight: 700;
  color: #0EA5E9; letter-spacing: 0.10em; text-transform: uppercase;
  margin-bottom: 12px; display: block;
}
.demo-cardio-dep-h2 {
  font-family: var(--font-work-sans), 'Work Sans', sans-serif;
  font-size: clamp(26px, 3.5vw, 36px); font-weight: 700;
  color: #FFFFFF; letter-spacing: -0.02em; line-height: 1.2;
}

.demo-cardio-dep-grid {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
}
.demo-cardio-dep-card {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 16px; padding: 32px;
  backdrop-filter: blur(8px);
  transition: background 0.2s, transform 0.2s;
}
.demo-cardio-dep-card:hover {
  background: rgba(255,255,255,0.10); transform: translateY(-4px);
}
.demo-cardio-dep-stars {
  display: flex; gap: 3px; color: #FCD34D; font-size: 17px;
  margin-bottom: 16px;
}
.demo-cardio-dep-text {
  font-size: 15px; line-height: 1.75; color: rgba(255,255,255,0.82);
  font-style: italic; margin-bottom: 24px;
}
.demo-cardio-dep-text::before { content: '"'; }
.demo-cardio-dep-text::after  { content: '"'; }
.demo-cardio-dep-author {
  display: flex; align-items: center; gap: 12px;
}
.demo-cardio-dep-avatar {
  width: 44px; height: 44px; border-radius: 50%;
  background: linear-gradient(135deg, #0EA5E9, #1E3A5F);
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-work-sans), 'Work Sans', sans-serif;
  font-size: 16px; font-weight: 700; color: #FFFFFF; flex-shrink: 0;
}
.demo-cardio-dep-author-name {
  font-size: 14px; font-weight: 700; color: #FFFFFF; line-height: 1.2;
}
.demo-cardio-dep-author-meta {
  font-size: 12px; color: rgba(255,255,255,0.50); margin-top: 2px;
}

/* ── LOCALIZAÇÃO ── */
.demo-cardio-loc {
  padding: 96px clamp(20px, 6vw, 80px);
  background: #FFFFFF;
}
.demo-cardio-loc-inner {
  max-width: 1180px; margin: 0 auto;
  display: grid; grid-template-columns: 1fr 480px; gap: 64px; align-items: start;
}
.demo-cardio-loc-info { }
.demo-cardio-loc-info-list { margin-top: 28px; display: flex; flex-direction: column; gap: 20px; }
.demo-cardio-loc-info-item {
  display: flex; align-items: flex-start; gap: 14px;
}
.demo-cardio-loc-info-icon {
  width: 40px; height: 40px; border-radius: 10px;
  background: #EFF6FF; border: 1px solid #BFDBFE;
  display: flex; align-items: center; justify-content: center;
  color: #1E3A5F; flex-shrink: 0;
}
.demo-cardio-loc-info-icon svg { width: 20px; height: 20px; }
.demo-cardio-loc-info-label {
  font-size: 12px; font-weight: 700; color: #9CA3AF;
  letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 3px;
}
.demo-cardio-loc-info-val {
  font-size: 15px; font-weight: 600; color: #1E3A5F; line-height: 1.5;
}
.demo-cardio-loc-info-sub {
  font-size: 13px; color: #6B7280; margin-top: 2px;
}

.demo-cardio-map-placeholder {
  border-radius: 16px; overflow: hidden;
  box-shadow: 0 8px 32px rgba(30,58,95,0.12);
  border: 1px solid #E5E7EB;
  aspect-ratio: 4/3;
  background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 50%, #BFDBFE 100%);
  display: flex; flex-direction: column;
  align-items: center; justify-content: center; gap: 12px;
}
.demo-cardio-map-icon {
  width: 52px; height: 52px; color: #1E3A5F; opacity: 0.4;
}
.demo-cardio-map-text {
  font-size: 14px; color: #6B7280; text-align: center; max-width: 220px; line-height: 1.5;
}

/* ── CTA ── */
.demo-cardio-cta {
  padding: 96px clamp(20px, 6vw, 80px);
  background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%);
}
.demo-cardio-cta-inner {
  max-width: 760px; margin: 0 auto; text-align: center;
}
.demo-cardio-cta h2 {
  font-family: var(--font-work-sans), 'Work Sans', sans-serif;
  font-size: clamp(28px, 4vw, 44px); font-weight: 800;
  color: #1E3A5F; letter-spacing: -0.025em; line-height: 1.15;
  margin-bottom: 16px;
}
.demo-cardio-cta p {
  font-size: 17px; color: #4B5563; line-height: 1.7; margin-bottom: 40px;
  max-width: 540px; margin-left: auto; margin-right: auto;
}
.demo-cardio-cta-actions {
  display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;
}
.demo-cardio-cta-note {
  margin-top: 20px; font-size: 13px; color: #9CA3AF;
}

/* ── FOOTER ── */
.demo-cardio-footer {
  background: #0c1a2e;
  padding: 48px clamp(20px, 6vw, 80px) 32px;
}
.demo-cardio-footer-inner {
  max-width: 1180px; margin: 0 auto;
}
.demo-cardio-footer-top {
  display: flex; justify-content: space-between; align-items: flex-start;
  flex-wrap: wrap; gap: 32px; margin-bottom: 40px;
  padding-bottom: 40px; border-bottom: 1px solid rgba(255,255,255,0.08);
}
.demo-cardio-footer-brand-name {
  font-family: var(--font-work-sans), 'Work Sans', sans-serif;
  font-size: 18px; font-weight: 700; color: #FFFFFF; line-height: 1.2;
}
.demo-cardio-footer-brand-spec {
  font-size: 12px; color: #0EA5E9; font-weight: 500;
  letter-spacing: 0.06em; text-transform: uppercase; margin-top: 3px;
}
.demo-cardio-footer-brand-crm {
  font-size: 12px; color: rgba(255,255,255,0.35); margin-top: 8px;
}
.demo-cardio-footer-links {
  display: flex; flex-direction: column; gap: 10px;
}
.demo-cardio-footer-links a {
  font-size: 13.5px; color: rgba(255,255,255,0.55);
  transition: color 0.2s; cursor: pointer;
}
.demo-cardio-footer-links a:hover { color: #FFFFFF; }
.demo-cardio-footer-col-label {
  font-size: 11px; font-weight: 700; color: rgba(255,255,255,0.30);
  letter-spacing: 0.10em; text-transform: uppercase; margin-bottom: 14px;
}
.demo-cardio-footer-bottom {
  display: flex; justify-content: space-between; align-items: center;
  flex-wrap: wrap; gap: 12px;
}
.demo-cardio-footer-copy {
  font-size: 12.5px; color: rgba(255,255,255,0.30);
}
.demo-cardio-footer-credit {
  font-size: 12.5px; color: rgba(255,255,255,0.30);
}
.demo-cardio-footer-credit a {
  color: #0EA5E9; font-weight: 600; transition: color 0.2s;
}
.demo-cardio-footer-credit a:hover { color: #38BDF8; }

/* ── DEMO BANNER ── */
.demo-cardio-banner {
  position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%);
  z-index: 9999;
  background: rgba(30,58,95,0.96);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(14,165,233,0.30);
  border-radius: 100px;
  padding: 10px 24px;
  display: flex; align-items: center; gap: 10px;
  font-size: 13px; color: rgba(255,255,255,0.85);
  box-shadow: 0 8px 32px rgba(0,0,0,0.30);
  white-space: nowrap;
}
.demo-cardio-banner-dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: #0EA5E9;
  animation: demo-cardio-pulse 2s ease-in-out infinite;
}
.demo-cardio-banner a {
  color: #38BDF8; font-weight: 700; text-decoration: underline;
}

/* ── RESPONSIVE ── */
@media (max-width: 1024px) {
  .demo-cardio-espec-grid { grid-template-columns: repeat(2, 1fr); }
  .demo-cardio-dep-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .demo-cardio-nav-links { display: none; }
  .demo-cardio-menu-btn { display: flex; }

  .demo-cardio-hero-inner { grid-template-columns: 1fr; }
  .demo-cardio-hero-card { max-width: 320px; margin: 0 auto; }
  .demo-cardio-hero-stats { flex-direction: row; overflow-x: auto; }

  .demo-cardio-sobre-inner { grid-template-columns: 1fr; }
  .demo-cardio-sobre-photo { position: static; max-width: 300px; margin: 0 auto; }

  .demo-cardio-sobre-highlights { grid-template-columns: 1fr 1fr; }

  .demo-cardio-espec-grid { grid-template-columns: 1fr; }

  .demo-cardio-dep-grid { grid-template-columns: 1fr; }

  .demo-cardio-loc-inner { grid-template-columns: 1fr; }

  .demo-cardio-pub-header { flex-direction: column; align-items: flex-start; }

  .demo-cardio-footer-top { flex-direction: column; gap: 28px; }
  .demo-cardio-footer-bottom { flex-direction: column; align-items: flex-start; }

  .demo-cardio-banner { font-size: 11.5px; padding: 9px 18px; bottom: 12px; }
}
`,
        }}
      />

      <div className="demo-cardio-root">
        {/* ── NAV ── */}
        <nav className="demo-cardio-nav" role="navigation" aria-label="Navegação principal">
          <div className="demo-cardio-nav-brand">
            <span className="demo-cardio-nav-brand-name">Dr. Ricardo Almeida</span>
            <span className="demo-cardio-nav-brand-spec">Cardiologista</span>
          </div>

          <ul className="demo-cardio-nav-links" role="list">
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#especialidades">Especialidades</a></li>
            <li><a href="#publicacoes">Publicações</a></li>
            <li><a href="#depoimentos">Depoimentos</a></li>
            <li><a href="#localizacao">Localização</a></li>
            <li>
              <a href="#contato" className="demo-cardio-nav-cta">Agendar consulta</a>
            </li>
          </ul>

          <button
            className="demo-cardio-menu-btn"
            aria-label="Abrir menu"
            type="button"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="6" x2="20" y2="6" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </button>
        </nav>

        {/* ── HERO ── */}
        <section className="demo-cardio-hero" id="hero" aria-label="Apresentação">
          <div className="demo-cardio-hero-inner">
            {/* Left column */}
            <div>
              <div className="demo-cardio-hero-tag demo-cardio-hero-anim">
                <span className="demo-cardio-hero-tag-dot" />
                Cardiologista • São Paulo
              </div>

              <h1 className="demo-cardio-hero-h1 demo-cardio-hero-anim">
                Seu coração<br />em <span>boas mãos</span>.
              </h1>

              <p className="demo-cardio-hero-sub demo-cardio-hero-anim">
                Diagnóstico preciso, tratamento individualizado e acompanhamento contínuo da sua saúde cardiovascular. Mais de duas décadas de excelência clínica e acadêmica.
              </p>

              <div className="demo-cardio-hero-creds demo-cardio-hero-anim">
                <div className="demo-cardio-hero-cred">
                  <svg className="demo-cardio-hero-cred-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  Fellow — American College of Cardiology
                </div>
                <div className="demo-cardio-hero-cred">
                  <svg className="demo-cardio-hero-cred-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  20+ anos de experiência clínica e cirúrgica
                </div>
                <div className="demo-cardio-hero-cred">
                  <svg className="demo-cardio-hero-cred-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" /><path d="M12 6v6l4 2" />
                  </svg>
                  Atendimento no InCor / HCFMUSP — Sírio-Libanês
                </div>
                <div className="demo-cardio-hero-cred">
                  <svg className="demo-cardio-hero-cred-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
                  </svg>
                  CRM/SP 654321 · RQE 12345
                </div>
              </div>

              <div className="demo-cardio-hero-actions demo-cardio-hero-anim">
                <a href="#contato" className="demo-cardio-btn-primary">Agendar consulta</a>
                <a href="#sobre" className="demo-cardio-btn-secondary">Conheça o Dr. Ricardo</a>
              </div>

              <div className="demo-cardio-hero-stats demo-cardio-reveal">
                <div className="demo-cardio-hero-stat">
                  <div className="demo-cardio-hero-stat-val">20+</div>
                  <div className="demo-cardio-hero-stat-lbl">Anos de experiência</div>
                </div>
                <div className="demo-cardio-hero-stat">
                  <div className="demo-cardio-hero-stat-val">48</div>
                  <div className="demo-cardio-hero-stat-lbl">Artigos publicados</div>
                </div>
                <div className="demo-cardio-hero-stat">
                  <div className="demo-cardio-hero-stat-val">+12k</div>
                  <div className="demo-cardio-hero-stat-lbl">Pacientes atendidos</div>
                </div>
              </div>
            </div>

            {/* Right column — photo card */}
            <div>
              <div className="demo-cardio-hero-card demo-cardio-hero-anim">
                <Image
                  className="demo-cardio-hero-photo-img"
                  src="/images/demos/doctor-man-professional.jpg"
                  alt="Dr. Ricardo Almeida, cardiologista, em seu consultório"
                  width={400}
                  height={533}
                />
                <div className="demo-cardio-hero-card-info">
                  <div className="demo-cardio-hero-card-name">Dr. Ricardo Almeida</div>
                  <div className="demo-cardio-hero-card-crm">CRM/SP 654321 · RQE 12345</div>
                  <div className="demo-cardio-hero-card-badge">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                    Fellow ACC
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SOBRE ── */}
        <section className="demo-cardio-sobre" id="sobre" aria-label="Sobre o médico">
          <div className="demo-cardio-sobre-inner">
            {/* Left — photo + affiliations */}
            <div className="demo-cardio-sobre-photo demo-cardio-reveal">
              <div className="demo-cardio-sobre-photo-wrap">
                <Image
                  className="demo-cardio-sobre-photo-img"
                  src="/images/demos/doctor-man-professional.jpg"
                  alt="Dr. Ricardo Almeida em atendimento"
                  width={380}
                  height={475}
                />
              </div>
              <div className="demo-cardio-sobre-affiliations">
                <p style={{ fontSize: "12px", fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>
                  Afiliações Hospitalares
                </p>
                {[
                  "Instituto do Coração — InCor / HCFMUSP",
                  "Hospital Sírio-Libanês",
                  "Hospital Albert Einstein",
                ].map((h) => (
                  <div className="demo-cardio-affiliation" key={h}>
                    <svg className="demo-cardio-affiliation-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                    <span className="demo-cardio-affiliation-name">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — bio */}
            <div className="demo-cardio-sobre-body">
              <span className="demo-cardio-section-label demo-cardio-reveal">Sobre o médico</span>
              <h2 className="demo-cardio-section-h2 demo-cardio-reveal">
                Excelência clínica a serviço da sua saúde cardiovascular
              </h2>

              <div className="demo-cardio-reveal" style={{ "--d": "0.08s" } as React.CSSProperties}>
                <p>
                  O Dr. Ricardo Almeida é cardiologista com formação pela Faculdade de Medicina da Universidade de São Paulo (FMUSP) e especialização avançada em Cardiologia Intervencionista pelo InCor — Instituto do Coração do HCFMUSP, referência mundial em doenças cardiovasculares.
                </p>
                <p>
                  Com mais de duas décadas de prática clínica e hospitalar, dedica-se ao diagnóstico e tratamento das principais doenças do coração, com atenção especial à prevenção primária e secundária, insuficiência cardíaca, arritmias e doença arterial coronariana.
                </p>
                <p>
                  Professor colaborador da FMUSP, orienta residentes e pesquisadores, e mantém produção científica ativa em periódicos de alto impacto. É fellow do <em>American College of Cardiology</em> (ACC) e membro titular da Sociedade Brasileira de Cardiologia (SBC).
                </p>
              </div>

              <div className="demo-cardio-sobre-highlights demo-cardio-reveal" style={{ "--d": "0.14s" } as React.CSSProperties}>
                <div className="demo-cardio-highlight-card">
                  <div className="demo-cardio-highlight-val">48</div>
                  <div className="demo-cardio-highlight-lbl">Artigos publicados em periódicos indexados</div>
                </div>
                <div className="demo-cardio-highlight-card">
                  <div className="demo-cardio-highlight-val">+12k</div>
                  <div className="demo-cardio-highlight-lbl">Consultas e procedimentos realizados</div>
                </div>
                <div className="demo-cardio-highlight-card">
                  <div className="demo-cardio-highlight-val">3</div>
                  <div className="demo-cardio-highlight-lbl">Hospitais de referência em São Paulo</div>
                </div>
                <div className="demo-cardio-highlight-card">
                  <div className="demo-cardio-highlight-val">20+</div>
                  <div className="demo-cardio-highlight-lbl">Anos de experiência clínica e acadêmica</div>
                </div>
              </div>

              <div className="demo-cardio-creds-list demo-cardio-reveal" style={{ "--d": "0.20s" } as React.CSSProperties}>
                {[
                  "Graduação em Medicina — FMUSP (2004)",
                  "Residência em Clínica Médica — Hospital das Clínicas FMUSP (2005–2007)",
                  "Residência em Cardiologia — InCor / HCFMUSP (2007–2010)",
                  "Fellowship em Cardiologia Intervencionista — InCor (2010–2012)",
                  "Fellow — American College of Cardiology (ACC)",
                  "Membro Titular — Sociedade Brasileira de Cardiologia (SBC)",
                  "Professor Colaborador — Departamento de Cardiopneumologia, FMUSP",
                ].map((c) => (
                  <div className="demo-cardio-cred-item" key={c}>
                    <span className="demo-cardio-cred-dot" />
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── ESPECIALIDADES ── */}
        <section className="demo-cardio-espec" id="especialidades" aria-label="Especialidades">
          <div className="demo-cardio-espec-inner">
            <div className="demo-cardio-espec-header">
              <span className="demo-cardio-section-label demo-cardio-reveal">Procedimentos & Exames</span>
              <h2 className="demo-cardio-section-h2 demo-cardio-reveal">Especialidades & serviços</h2>
              <p className="demo-cardio-reveal" style={{ "--d": "0.08s" } as React.CSSProperties}>
                Avaliação diagnóstica completa com equipamentos de última geração e interpretação especializada.
              </p>
            </div>

            <div className="demo-cardio-espec-grid">
              {[
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  ),
                  name: "Ecocardiograma",
                  desc: "Imagem ultrassônica de alta resolução do coração. Avalia estrutura, função e hemodinâmica cardíaca com precisão diagnóstica superior.",
                  tag: "Exame de imagem",
                  delay: "0s",
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  ),
                  name: "Teste Ergométrico",
                  desc: "Avaliação funcional do sistema cardiovascular sob esforço físico. Fundamental para detecção de isquemia miocárdica e capacidade funcional.",
                  tag: "Avaliação funcional",
                  delay: "0.08s",
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  ),
                  name: "Holter 24h",
                  desc: "Monitorização contínua do ritmo cardíaco por 24 horas. Detecta arritmias, bloqueios e alterações que não aparecem no ECG convencional.",
                  tag: "Monitorização",
                  delay: "0.16s",
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  ),
                  name: "Check-up Cardiovascular",
                  desc: "Avaliação preventiva completa com histórico clínico, exames laboratoriais e funcionais, orientação personalizada de estilo de vida e riscos.",
                  tag: "Prevenção",
                  delay: "0.24s",
                },
              ].map(({ icon, name, desc, tag, delay }) => (
                <div
                  className="demo-cardio-espec-card demo-cardio-reveal"
                  key={name}
                  style={{ "--d": delay } as React.CSSProperties}
                >
                  <div className="demo-cardio-espec-icon">{icon}</div>
                  <div className="demo-cardio-espec-name">{name}</div>
                  <div className="demo-cardio-espec-desc">{desc}</div>
                  <div className="demo-cardio-espec-tag">{tag}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PUBLICAÇÕES ── */}
        <section className="demo-cardio-pub" id="publicacoes" aria-label="Publicações científicas">
          <div className="demo-cardio-pub-inner">
            <div className="demo-cardio-pub-header">
              <div>
                <span className="demo-cardio-section-label demo-cardio-reveal">Produção Científica</span>
                <h2 className="demo-cardio-section-h2 demo-cardio-reveal">Publicações recentes</h2>
                <p className="demo-cardio-reveal">
                  Seleção de artigos publicados em periódicos internacionais indexados no PubMed.
                </p>
              </div>
              <div className="demo-cardio-reveal" style={{ textAlign: "right" }}>
                <div style={{ fontSize: "36px", fontWeight: 800, color: "#1E3A5F", lineHeight: 1, fontFamily: "var(--font-work-sans), 'Work Sans', sans-serif" }}>48</div>
                <div style={{ fontSize: "12px", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.06em", marginTop: "4px" }}>artigos publicados</div>
              </div>
            </div>

            <div className="demo-cardio-pub-list">
              {[
                {
                  journal: "Journal of the American College of Cardiology · 2024",
                  title: "Long-term outcomes of percutaneous coronary intervention versus medical therapy in stable ischemic heart disease: a prospective cohort study in Brazilian patients",
                  authors: ["Almeida R", "Ferreira JC", "Sousa AM", "Lopes RD"],
                  doi: "10.1016/j.jacc.2024.03.441",
                  citations: "32 citações",
                  impact: "IF: 24.0",
                  delay: "0s",
                },
                {
                  journal: "European Heart Journal · 2023",
                  title: "Diastolic dysfunction assessment with three-dimensional echocardiography in hypertensive patients: correlation with NT-proBNP levels and clinical outcomes",
                  authors: ["Almeida R", "Carvalho MN", "Torres MB"],
                  doi: "10.1093/eurheartj/ehad289",
                  citations: "19 citações",
                  impact: "IF: 39.3",
                  delay: "0.10s",
                },
                {
                  journal: "JACC: Clinical Electrophysiology · 2022",
                  title: "Prevalence and risk factors of paroxysmal atrial fibrillation detected by prolonged Holter monitoring in post-stroke patients: a single-center retrospective analysis",
                  authors: ["Almeida R", "Ribeiro CR", "Nunes PR", "Silva TF"],
                  doi: "10.1016/j.jacep.2022.07.018",
                  citations: "27 citações",
                  impact: "IF: 9.0",
                  delay: "0.18s",
                },
              ].map(({ journal, title, authors, doi, citations, impact, delay }) => (
                <div
                  className="demo-cardio-pub-item demo-cardio-reveal"
                  key={doi}
                  style={{ "--d": delay } as React.CSSProperties}
                >
                  <div className="demo-cardio-pub-journal">{journal}</div>
                  <div className="demo-cardio-pub-title">{title}</div>
                  <div className="demo-cardio-pub-authors">
                    {authors.map((a, i) => (
                      <span key={a}>
                        {a === "Almeida R" ? <strong>Almeida R</strong> : a}
                        {i < authors.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </div>
                  <div className="demo-cardio-pub-meta">
                    <span>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
                      DOI: {doi}
                    </span>
                    <span>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                      {citations}
                    </span>
                    <span>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                      {impact}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DEPOIMENTOS ── */}
        <section className="demo-cardio-dep" id="depoimentos" aria-label="Depoimentos de pacientes">
          <div className="demo-cardio-dep-inner">
            <div className="demo-cardio-dep-header">
              <span className="demo-cardio-dep-label demo-cardio-reveal">Depoimentos</span>
              <h2 className="demo-cardio-dep-h2 demo-cardio-reveal">O que dizem nossos pacientes</h2>
            </div>

            <div className="demo-cardio-dep-grid">
              {[
                {
                  text: "O Dr. Ricardo foi extremamente cuidadoso e detalhista durante toda a minha avaliação. Explicou cada resultado com calma e clareza, e elaborou um plano de tratamento que realmente funcionou. Me sinto muito mais seguro com minha saúde cardíaca.",
                  name: "Carlos Eduardo M.",
                  meta: "Paciente desde 2019",
                  initials: "CM",
                  delay: "0s",
                },
                {
                  text: "Após três consultas com outros cardiologistas, o Dr. Ricardo foi o único que identificou a causa da minha arritmia. O Holter 24h que ele solicitou foi fundamental. Hoje estou bem controlada e com qualidade de vida muito melhor.",
                  name: "Mariana Lopes F.",
                  meta: "Paciente desde 2021",
                  initials: "MF",
                  delay: "0.10s",
                },
                {
                  text: "Como médico eu mesmo reconheço a excelência técnica do Dr. Ricardo. Ele combina um vasto conhecimento acadêmico com uma capacidade impressionante de comunicação com o paciente. Recomendo com total confiança.",
                  name: "Dr. André Silveira",
                  meta: "Médico — Paciente desde 2022",
                  initials: "AS",
                  delay: "0.18s",
                },
              ].map(({ text, name, meta, initials, delay }) => (
                <div
                  className="demo-cardio-dep-card demo-cardio-reveal"
                  key={name}
                  style={{ "--d": delay } as React.CSSProperties}
                >
                  <div className="demo-cardio-dep-stars" aria-label="5 estrelas">
                    {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
                  </div>
                  <p className="demo-cardio-dep-text">{text}</p>
                  <div className="demo-cardio-dep-author">
                    <div className="demo-cardio-dep-avatar">{initials}</div>
                    <div>
                      <div className="demo-cardio-dep-author-name">{name}</div>
                      <div className="demo-cardio-dep-author-meta">{meta}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LOCALIZAÇÃO ── */}
        <section className="demo-cardio-loc" id="localizacao" aria-label="Localização e contato">
          <div className="demo-cardio-loc-inner">
            <div className="demo-cardio-loc-info">
              <span className="demo-cardio-section-label demo-cardio-reveal">Onde nos encontrar</span>
              <h2 className="demo-cardio-section-h2 demo-cardio-reveal">Localização & horários</h2>

              <div className="demo-cardio-loc-info-list">
                {[
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    ),
                    label: "Endereço",
                    val: "Av. Paulista, 1000 — Conj. 1201",
                    sub: "Bela Vista, São Paulo — SP · CEP 01310-100",
                    delay: "0s",
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.28h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    ),
                    label: "Telefone & WhatsApp",
                    val: "(11) 3456-7890",
                    sub: "Também via WhatsApp para agendamentos",
                    delay: "0.08s",
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                    ),
                    label: "Horários de Atendimento",
                    val: "Segunda a Sexta: 8h–18h",
                    sub: "Sábado: 8h–12h (apenas consultas agendadas)",
                    delay: "0.14s",
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    ),
                    label: "E-mail",
                    val: "contato@drricardoalmeida.com.br",
                    sub: "Resposta em até 1 dia útil",
                    delay: "0.20s",
                  },
                ].map(({ icon, label, val, sub, delay }) => (
                  <div
                    className="demo-cardio-loc-info-item demo-cardio-reveal"
                    key={label}
                    style={{ "--d": delay } as React.CSSProperties}
                  >
                    <div className="demo-cardio-loc-info-icon">{icon}</div>
                    <div>
                      <div className="demo-cardio-loc-info-label">{label}</div>
                      <div className="demo-cardio-loc-info-val">{val}</div>
                      <div className="demo-cardio-loc-info-sub">{sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="demo-cardio-map-placeholder demo-cardio-reveal">
              <svg className="demo-cardio-map-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
                <line x1="9" y1="3" x2="9" y2="18" />
                <line x1="15" y1="6" x2="15" y2="21" />
              </svg>
              <div className="demo-cardio-map-text">
                <strong style={{ display: "block", marginBottom: "4px", color: "#374151" }}>
                  Av. Paulista, 1000
                </strong>
                Mapa interativo disponível no site final
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="demo-cardio-cta" id="contato" aria-label="Agendar consulta">
          <div className="demo-cardio-cta-inner">
            <span className="demo-cardio-section-label demo-cardio-reveal">Cuide do seu coração</span>
            <h2 className="demo-cardio-reveal" style={{ "--d": "0.06s" } as React.CSSProperties}>
              Agende sua avaliação cardiovascular
            </h2>
            <p className="demo-cardio-reveal" style={{ "--d": "0.12s" } as React.CSSProperties}>
              Prevenção é o melhor tratamento. Uma consulta pode identificar riscos silenciosos e garantir mais anos de saúde e qualidade de vida para você e sua família.
            </p>
            <div className="demo-cardio-cta-actions demo-cardio-reveal" style={{ "--d": "0.18s" } as React.CSSProperties}>
              <a href="tel:+551134567890" className="demo-cardio-btn-primary">
                Ligar agora: (11) 3456-7890
              </a>
              <a href="https://wa.me/5511934567890" className="demo-cardio-btn-secondary">
                Agendar via WhatsApp
              </a>
            </div>
            <p className="demo-cardio-cta-note demo-cardio-reveal" style={{ "--d": "0.24s" } as React.CSSProperties}>
              Atendimento de segunda a sexta, das 8h às 18h. Sábados das 8h às 12h.
            </p>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="demo-cardio-footer" role="contentinfo">
          <div className="demo-cardio-footer-inner">
            <div className="demo-cardio-footer-top">
              <div>
                <div className="demo-cardio-footer-brand-name">Dr. Ricardo Almeida</div>
                <div className="demo-cardio-footer-brand-spec">Cardiologista</div>
                <div className="demo-cardio-footer-brand-crm">CRM/SP 654321 · RQE 12345</div>
              </div>

              <div>
                <div className="demo-cardio-footer-col-label">Navegação</div>
                <ul className="demo-cardio-footer-links" role="list">
                  <li><a href="#sobre">Sobre o Dr. Ricardo</a></li>
                  <li><a href="#especialidades">Especialidades</a></li>
                  <li><a href="#publicacoes">Publicações</a></li>
                  <li><a href="#depoimentos">Depoimentos</a></li>
                  <li><a href="#localizacao">Localização</a></li>
                </ul>
              </div>

              <div>
                <div className="demo-cardio-footer-col-label">Contato</div>
                <ul className="demo-cardio-footer-links" role="list">
                  <li><a href="tel:+551134567890">(11) 3456-7890</a></li>
                  <li><a href="https://wa.me/5511934567890">WhatsApp</a></li>
                  <li><a href="mailto:contato@drricardoalmeida.com.br">contato@drricardoalmeida.com.br</a></li>
                  <li><a href="#contato">Agendar consulta</a></li>
                </ul>
              </div>

              <div>
                <div className="demo-cardio-footer-col-label">Endereço</div>
                <p style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>
                  Av. Paulista, 1000 — Conj. 1201<br />
                  Bela Vista, São Paulo — SP<br />
                  CEP 01310-100
                </p>
              </div>
            </div>

            <div className="demo-cardio-footer-bottom">
              <span className="demo-cardio-footer-copy">
                © {new Date().getFullYear()} Dr. Ricardo Almeida · CRM/SP 654321. Todos os direitos reservados.
              </span>
              <span className="demo-cardio-footer-credit">
                Site criado por{" "}
                <a href="https://condutasaude.com" target="_blank" rel="noopener noreferrer">
                  Conduta Saúde
                </a>
              </span>
            </div>
          </div>
        </footer>

        {/* ── DEMO BANNER ── */}
        <div className="demo-cardio-banner" role="status" aria-live="polite">
          <span className="demo-cardio-banner-dot" />
          <span>Este é um site de demonstração —{" "}</span>
          <a href="https://condutasaude.com" target="_blank" rel="noopener noreferrer">
            Conduta Saúde
          </a>
        </div>
      </div>
    </>
  );
}

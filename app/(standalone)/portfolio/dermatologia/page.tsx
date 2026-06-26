import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Dra. Marina Costa — Dermatologista | São Paulo",
  description:
    "Dra. Marina Costa, Dermatologista em São Paulo. Especialista em dermatologia clínica e estética. Agende sua consulta na Rua Augusta, 1500.",
};

const styles = `
/* ── RESET SCOPE ── */
.demo-derma-root *,
.demo-derma-root *::before,
.demo-derma-root *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.demo-derma-root {
  font-family: var(--font-inter), -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: #1A1A2E;
  background: #FFFFFF;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  line-height: 1.7;
}

.demo-derma-root a {
  text-decoration: none;
  color: inherit;
}
.demo-derma-root a[class*="btn-primary"] { color: #FFFFFF; }
.demo-derma-root a[class*="btn-white"] { color: var(--rose); }

.demo-derma-root img {
  max-width: 100%;
  display: block;
}

/* ── VARIABLES ── */
.demo-derma-root {
  --rose: #E11D48;
  --rose-hover: #BE123C;
  --rose-light: #FFF1F2;
  --rose-border: #FECDD3;
  --rose-subtle: #FFE4E6;
  --dark: #1A1A2E;
  --text-secondary: #4A4A6A;
  --text-muted: #8A8AAA;
  --white: #FFFFFF;
  --gray-light: #F8F8FB;
  --border: #E8E8F0;
  --shadow-card: 0 2px 12px rgba(0, 0, 0, 0.06);
  --shadow-hover: 0 8px 32px rgba(225, 29, 72, 0.12);
  --radius: 12px;
}

/* ── UTILITIES ── */
.demo-derma-container {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 24px;
}

.demo-derma-section {
  padding: 96px 0;
}

.demo-derma-section-sm {
  padding: 72px 0;
}

.demo-derma-section-title {
  font-family: var(--font-work-sans), sans-serif;
  font-size: 2.25rem;
  font-weight: 700;
  color: var(--dark);
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 12px;
}

.demo-derma-section-subtitle {
  font-size: 1.0625rem;
  color: var(--text-secondary);
  max-width: 520px;
  line-height: 1.65;
}

.demo-derma-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--rose);
  margin-bottom: 16px;
}

.demo-derma-eyebrow::before {
  content: "";
  display: inline-block;
  width: 24px;
  height: 2px;
  background: var(--rose);
  border-radius: 2px;
}

/* ── BUTTON ── */
.demo-derma-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  border-radius: 8px;
  font-family: var(--font-work-sans), sans-serif;
  font-size: 0.9375rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  text-decoration: none;
}

.demo-derma-btn-primary {
  background: var(--rose);
  color: var(--white);
}

.demo-derma-btn-primary:hover {
  background: var(--rose-hover);
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(225, 29, 72, 0.3);
}

.demo-derma-btn-outline {
  background: transparent;
  color: var(--rose);
  border: 2px solid var(--rose);
}

.demo-derma-btn-outline:hover {
  background: var(--rose);
  color: var(--white);
  transform: translateY(-1px);
}

.demo-derma-btn-white {
  background: var(--white);
  color: var(--rose);
}

.demo-derma-btn-white:hover {
  background: var(--rose-light);
  transform: translateY(-1px);
}

/* ── NAVIGATION ── */
.demo-derma-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}

.demo-derma-nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

.demo-derma-logo {
  display: flex;
  flex-direction: column;
  gap: 1px;
  text-decoration: none;
}

.demo-derma-logo-name {
  font-family: var(--font-work-sans), sans-serif;
  font-size: 1.0625rem;
  font-weight: 700;
  color: var(--dark);
  line-height: 1.2;
  letter-spacing: -0.01em;
}

.demo-derma-logo-specialty {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--rose);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.demo-derma-nav-links {
  display: flex;
  align-items: center;
  gap: 36px;
  list-style: none;
}

.demo-derma-nav-links a {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-secondary);
  transition: color 0.2s;
}

.demo-derma-nav-links a:hover {
  color: var(--rose);
}

.demo-derma-nav-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

/* ── HERO ── */
.demo-derma-hero {
  background: linear-gradient(135deg, #FFF1F2 0%, #FFE4E6 40%, #FFF1F2 100%);
  padding: 112px 0 96px;
  position: relative;
  overflow: hidden;
}

.demo-derma-hero::before {
  content: "";
  position: absolute;
  top: -40%;
  right: -10%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(225, 29, 72, 0.07) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

.demo-derma-hero::after {
  content: "";
  position: absolute;
  bottom: -20%;
  left: -5%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(225, 29, 72, 0.05) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

.demo-derma-hero-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.demo-derma-hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: white;
  border: 1px solid var(--rose-border);
  border-radius: 100px;
  padding: 6px 14px 6px 10px;
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--rose);
  margin-bottom: 24px;
}

.demo-derma-hero-badge-dot {
  width: 8px;
  height: 8px;
  background: var(--rose);
  border-radius: 50%;
  flex-shrink: 0;
}

.demo-derma-hero-title {
  font-family: var(--font-work-sans), sans-serif;
  font-size: 3.25rem;
  font-weight: 800;
  color: var(--dark);
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin-bottom: 20px;
}

.demo-derma-hero-title span {
  color: var(--rose);
}

.demo-derma-hero-subtitle {
  font-size: 1.125rem;
  color: var(--text-secondary);
  line-height: 1.65;
  margin-bottom: 36px;
  max-width: 480px;
}

.demo-derma-hero-actions {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.demo-derma-hero-stats {
  display: flex;
  gap: 32px;
  margin-top: 48px;
  padding-top: 32px;
  border-top: 1px solid var(--rose-border);
}

.demo-derma-stat-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.demo-derma-stat-number {
  font-family: var(--font-work-sans), sans-serif;
  font-size: 1.625rem;
  font-weight: 800;
  color: var(--rose);
  line-height: 1;
}

.demo-derma-stat-label {
  font-size: 0.8125rem;
  color: var(--text-muted);
  font-weight: 500;
}

/* Hero visual side */
.demo-derma-hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.demo-derma-hero-photo {
  width: 340px;
  height: 420px;
  border-radius: 24px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  box-shadow: 0 20px 60px rgba(225, 29, 72, 0.18);
  position: relative;
}

.demo-derma-hero-photo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
}

.demo-derma-hero-card {
  position: absolute;
  background: white;
  border-radius: 12px;
  padding: 14px 18px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  gap: 10px;
}

.demo-derma-hero-card-left {
  bottom: 24px;
  left: -32px;
}

.demo-derma-hero-card-right {
  top: 32px;
  right: -32px;
}

.demo-derma-hero-card-icon {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: var(--rose-light);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.125rem;
  flex-shrink: 0;
}

.demo-derma-hero-card-text {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.demo-derma-hero-card-value {
  font-family: var(--font-work-sans), sans-serif;
  font-size: 0.9375rem;
  font-weight: 700;
  color: var(--dark);
  line-height: 1.2;
}

.demo-derma-hero-card-desc {
  font-size: 0.75rem;
  color: var(--text-muted);
}

/* ── SOBRE ── */
.demo-derma-sobre {
  background: var(--white);
}

.demo-derma-sobre-inner {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 72px;
  align-items: center;
}

.demo-derma-sobre-photo-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.demo-derma-sobre-photo {
  width: 280px;
  height: 340px;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-shadow: var(--shadow-card);
  position: relative;
}

.demo-derma-sobre-photo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
}

.demo-derma-crm-badge {
  background: var(--rose-light);
  border: 1px solid var(--rose-border);
  border-radius: 8px;
  padding: 10px 20px;
  text-align: center;
}

.demo-derma-crm-label {
  font-size: 0.75rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 500;
  display: block;
}

.demo-derma-crm-value {
  font-family: var(--font-work-sans), sans-serif;
  font-size: 0.9375rem;
  font-weight: 700;
  color: var(--rose);
  display: block;
  margin-top: 2px;
}

.demo-derma-sobre-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.demo-derma-sobre-bio {
  font-size: 1.0625rem;
  color: var(--text-secondary);
  line-height: 1.75;
}

.demo-derma-sobre-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 4px;
}

.demo-derma-sobre-list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 0.9375rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

.demo-derma-check {
  width: 20px;
  height: 20px;
  background: var(--rose-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 1px;
}

.demo-derma-check svg {
  width: 11px;
  height: 11px;
  color: var(--rose);
}

.demo-derma-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
}

.demo-derma-tag {
  background: var(--rose-light);
  border: 1px solid var(--rose-border);
  color: #9F1239;
  font-size: 0.8125rem;
  font-weight: 500;
  padding: 5px 12px;
  border-radius: 100px;
}

/* ── PROCEDIMENTOS ── */
.demo-derma-procedimentos {
  background: var(--gray-light);
}

.demo-derma-procedimentos-header {
  text-align: center;
  margin-bottom: 56px;
}

.demo-derma-procedimentos-header .demo-derma-section-subtitle {
  margin: 0 auto;
}

.demo-derma-proc-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.demo-derma-proc-card {
  background: var(--white);
  border-radius: var(--radius);
  padding: 32px 28px;
  box-shadow: var(--shadow-card);
  border: 1px solid transparent;
  transition: all 0.25s ease;
  cursor: default;
  position: relative;
  overflow: hidden;
}

.demo-derma-proc-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--rose), #FB7185);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.demo-derma-proc-card:hover {
  box-shadow: var(--shadow-hover);
  border-color: var(--rose-border);
  transform: translateY(-3px);
}

.demo-derma-proc-card:hover::before {
  transform: scaleX(1);
}

.demo-derma-proc-icon {
  width: 52px;
  height: 52px;
  background: var(--rose-light);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.demo-derma-proc-name {
  font-family: var(--font-work-sans), sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 8px;
  line-height: 1.3;
}

.demo-derma-proc-desc {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.65;
}

.demo-derma-proc-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 16px;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--rose);
  transition: gap 0.2s;
}

.demo-derma-proc-card:hover .demo-derma-proc-link {
  gap: 10px;
}

/* ── DEPOIMENTOS ── */
.demo-derma-depoimentos {
  background: var(--white);
}

.demo-derma-depoimentos-header {
  text-align: center;
  margin-bottom: 56px;
}

.demo-derma-depoimentos-header .demo-derma-section-subtitle {
  margin: 0 auto;
}

.demo-derma-dep-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.demo-derma-dep-card {
  background: var(--rose-light);
  border: 1px solid var(--rose-border);
  border-radius: var(--radius);
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: all 0.25s ease;
}

.demo-derma-dep-card:hover {
  box-shadow: var(--shadow-hover);
  transform: translateY(-2px);
}

.demo-derma-dep-stars {
  display: flex;
  gap: 4px;
  color: var(--rose);
  font-size: 1rem;
}

.demo-derma-dep-quote {
  font-size: 0.9375rem;
  color: var(--dark);
  line-height: 1.7;
  font-style: italic;
  flex: 1;
}

.demo-derma-dep-author {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-top: 16px;
  border-top: 1px solid var(--rose-border);
}

.demo-derma-dep-avatar {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, var(--rose) 0%, #FB7185 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 700;
  color: white;
  flex-shrink: 0;
}

.demo-derma-dep-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.demo-derma-dep-name {
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--dark);
  line-height: 1.3;
}

.demo-derma-dep-date {
  font-size: 0.8rem;
  color: var(--text-muted);
}

/* ── LOCALIZAÇÃO ── */
.demo-derma-localizacao {
  background: var(--gray-light);
}

.demo-derma-loc-inner {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 56px;
  align-items: start;
}

.demo-derma-loc-info {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.demo-derma-loc-block {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.demo-derma-loc-item {
  display: flex;
  gap: 14px;
  align-items: flex-start;
}

.demo-derma-loc-icon {
  width: 40px;
  height: 40px;
  background: var(--rose-light);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.125rem;
  flex-shrink: 0;
  border: 1px solid var(--rose-border);
}

.demo-derma-loc-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.demo-derma-loc-label {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.demo-derma-loc-value {
  font-size: 0.9375rem;
  color: var(--dark);
  font-weight: 500;
  line-height: 1.5;
}

.demo-derma-hours-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-top: 4px;
}

.demo-derma-hours-row {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.demo-derma-hours-day {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.demo-derma-hours-time {
  font-size: 0.9375rem;
  color: var(--dark);
  font-weight: 500;
}

.demo-derma-map-placeholder {
  background: var(--white);
  border-radius: 16px;
  height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-card);
  position: relative;
  overflow: hidden;
}

.demo-derma-map-bg {
  position: absolute;
  inset: 0;
  background:
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 39px,
      #E8E8F0 39px,
      #E8E8F0 40px
    ),
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 39px,
      #E8E8F0 39px,
      #E8E8F0 40px
    );
  opacity: 0.5;
}

.demo-derma-map-pin {
  position: relative;
  z-index: 1;
  width: 56px;
  height: 56px;
  background: var(--rose);
  border-radius: 50% 50% 50% 0;
  transform: rotate(-45deg);
  box-shadow: 0 4px 16px rgba(225, 29, 72, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
}

.demo-derma-map-pin-inner {
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 50%;
  transform: rotate(45deg);
}

.demo-derma-map-label {
  position: relative;
  z-index: 1;
  background: white;
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 10px 18px;
  text-align: center;
  box-shadow: var(--shadow-card);
}

.demo-derma-map-address {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--dark);
}

.demo-derma-map-city {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-top: 2px;
}

/* ── CONTATO / CTA ── */
.demo-derma-contato {
  background: linear-gradient(135deg, var(--rose) 0%, #BE123C 100%);
  padding: 96px 0;
  position: relative;
  overflow: hidden;
}

.demo-derma-contato::before {
  content: "";
  position: absolute;
  top: -50%;
  right: -10%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%);
  border-radius: 50%;
}

.demo-derma-contato::after {
  content: "";
  position: absolute;
  bottom: -30%;
  left: -5%;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%);
  border-radius: 50%;
}

.demo-derma-contato-inner {
  text-align: center;
  position: relative;
  z-index: 1;
  max-width: 640px;
  margin: 0 auto;
}

.demo-derma-contato-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255,255,255,0.15);
  border: 1px solid rgba(255,255,255,0.25);
  border-radius: 100px;
  padding: 6px 16px;
  font-size: 0.8125rem;
  font-weight: 500;
  color: white;
  margin-bottom: 24px;
}

.demo-derma-contato-title {
  font-family: var(--font-work-sans), sans-serif;
  font-size: 2.625rem;
  font-weight: 800;
  color: white;
  line-height: 1.15;
  letter-spacing: -0.025em;
  margin-bottom: 16px;
}

.demo-derma-contato-subtitle {
  font-size: 1.0625rem;
  color: rgba(255,255,255,0.82);
  line-height: 1.65;
  margin-bottom: 40px;
}

.demo-derma-contato-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.demo-derma-btn-whatsapp {
  background: #25D366;
  color: white;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  border-radius: 8px;
  font-family: var(--font-work-sans), sans-serif;
  font-size: 0.9375rem;
  font-weight: 600;
  transition: all 0.2s ease;
  text-decoration: none;
}

.demo-derma-btn-whatsapp:hover {
  background: #1DAA54;
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(37, 211, 102, 0.35);
}

.demo-derma-contato-phone {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: rgba(255,255,255,0.9);
  font-size: 0.9375rem;
  font-weight: 600;
}

/* ── FOOTER ── */
.demo-derma-footer {
  background: var(--dark);
  padding: 56px 0 36px;
}

.demo-derma-footer-inner {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 48px;
  padding-bottom: 48px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}

.demo-derma-footer-brand-name {
  font-family: var(--font-work-sans), sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  color: white;
  line-height: 1.3;
}

.demo-derma-footer-brand-specialty {
  font-size: 0.8125rem;
  color: var(--rose);
  font-weight: 500;
  letter-spacing: 0.04em;
  margin-top: 2px;
}

.demo-derma-footer-bio {
  font-size: 0.875rem;
  color: rgba(255,255,255,0.5);
  line-height: 1.65;
  margin-top: 14px;
  max-width: 280px;
}

.demo-derma-footer-crm {
  font-size: 0.8125rem;
  color: rgba(255,255,255,0.35);
  margin-top: 10px;
}

.demo-derma-footer-col-title {
  font-family: var(--font-work-sans), sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  margin-bottom: 16px;
}

.demo-derma-footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.demo-derma-footer-links a {
  font-size: 0.875rem;
  color: rgba(255,255,255,0.5);
  transition: color 0.2s;
}

.demo-derma-footer-links a:hover {
  color: var(--rose);
}

.demo-derma-footer-contact-item {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 0.875rem;
  color: rgba(255,255,255,0.5);
  line-height: 1.5;
  margin-bottom: 10px;
}

.demo-derma-footer-contact-icon {
  font-size: 0.9rem;
  margin-top: 1px;
  flex-shrink: 0;
}

.demo-derma-footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 28px;
  flex-wrap: wrap;
  gap: 12px;
}

.demo-derma-footer-copy {
  font-size: 0.8125rem;
  color: rgba(255,255,255,0.3);
}

.demo-derma-footer-credit {
  font-size: 0.8125rem;
  color: rgba(255,255,255,0.4);
}

.demo-derma-footer-credit a {
  color: var(--rose);
  font-weight: 600;
  transition: opacity 0.2s;
}

.demo-derma-footer-credit a:hover {
  opacity: 0.8;
}

/* ── REVEAL ANIMATIONS ── */
.demo-derma-reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.demo-derma-reveal.demo-derma-visible {
  opacity: 1;
  transform: translateY(0);
}

.demo-derma-reveal-delay-1 { transition-delay: 0.1s; }
.demo-derma-reveal-delay-2 { transition-delay: 0.2s; }
.demo-derma-reveal-delay-3 { transition-delay: 0.3s; }
.demo-derma-reveal-delay-4 { transition-delay: 0.4s; }
.demo-derma-reveal-delay-5 { transition-delay: 0.5s; }

/* ── RESPONSIVE ── */
@media (max-width: 768px) {
  .demo-derma-section {
    padding: 64px 0;
  }

  .demo-derma-section-sm {
    padding: 48px 0;
  }

  .demo-derma-section-title {
    font-size: 1.75rem;
  }

  /* Nav */
  .demo-derma-nav-links {
    display: none;
  }

  .demo-derma-nav-inner {
    height: 64px;
  }

  /* Hero */
  .demo-derma-hero {
    padding: 64px 0 56px;
  }

  .demo-derma-hero-inner {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }

  .demo-derma-hero-title {
    font-size: 2.125rem;
  }

  .demo-derma-hero-subtitle {
    margin: 0 auto 36px;
  }

  .demo-derma-hero-actions {
    justify-content: center;
  }

  .demo-derma-hero-stats {
    justify-content: center;
  }

  .demo-derma-hero-visual {
    order: -1;
  }

  .demo-derma-hero-photo {
    width: 240px;
    height: 300px;
  }

  .demo-derma-hero-card-left,
  .demo-derma-hero-card-right {
    display: none;
  }

  /* Sobre */
  .demo-derma-sobre-inner {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }

  .demo-derma-sobre-list li {
    text-align: left;
  }

  .demo-derma-tags {
    justify-content: center;
  }

  /* Procedimentos */
  .demo-derma-proc-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  /* Depoimentos */
  .demo-derma-dep-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  /* Localização */
  .demo-derma-loc-inner {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .demo-derma-map-placeholder {
    height: 280px;
  }

  /* CTA */
  .demo-derma-contato-title {
    font-size: 2rem;
  }

  /* Footer */
  .demo-derma-footer-inner {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .demo-derma-footer-bottom {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .demo-derma-proc-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .demo-derma-hero-title {
    font-size: 2.5rem;
  }
}
`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dra. Marina Costa",
  description:
    "Dermatologista com especialização em dermatologia clínica, estética e cirúrgica. Atendimento especializado na Rua Augusta, São Paulo.",
  medicalSpecialty: "Dermatology",
  identifier: [
    {
      "@type": "PropertyValue",
      name: "CRM",
      value: "CRM/SP 123456",
    },
    {
      "@type": "PropertyValue",
      name: "RQE",
      value: "RQE 78901",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Augusta, 1500",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  telephone: "+55-11-99999-0000",
  url: "https://marinacostaderr.com.br",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "12:00",
    },
  ],
};

const procedures = [
  {
    icon: "💉",
    name: "Botox",
    desc: "Toxina botulínica para suavizar linhas de expressão e rugas, com resultados naturais e duradouros.",
  },
  {
    icon: "✨",
    name: "Peeling Químico",
    desc: "Renovação celular profunda para tratar manchas, melasma e melhorar a textura da pele.",
  },
  {
    icon: "🔬",
    name: "Laser",
    desc: "Tecnologia laser de última geração para rejuvenescimento, remoção de manchas e lesões vasculares.",
  },
  {
    icon: "💎",
    name: "Preenchimento",
    desc: "Ácido hialurônico para restaurar volumes, definir contornos e proporcionar harmonização facial.",
  },
  {
    icon: "🌿",
    name: "Tratamento de Acne",
    desc: "Protocolos individualizados para controle da acne e redução de cicatrizes com resultados eficazes.",
  },
  {
    icon: "🔭",
    name: "Dermatoscopia",
    desc: "Exame dermatoscópico digital para diagnóstico precoce de melanoma e lesões pigmentadas.",
  },
];

const testimonials = [
  {
    initials: "AC",
    name: "Ana Carolina M.",
    date: "Março 2025",
    quote:
      "A Dra. Marina transformou minha pele. Tratei o melasma que me incomodava há anos e hoje me sinto muito mais confiante. O atendimento é super humanizado e atencioso.",
  },
  {
    initials: "RP",
    name: "Rafael P.",
    date: "Janeiro 2025",
    quote:
      "Fiz botox pela primeira vez com a Dra. Marina e fiquei impressionado com o resultado natural. Explicou tudo detalhadamente e me deixou muito tranquilo durante o procedimento.",
  },
  {
    initials: "FS",
    name: "Fernanda S.",
    date: "Abril 2025",
    quote:
      "Consultório muito bem estruturado, equipe atenciosa e a médica é extremamente competente. Já indiquei para toda a família. Com certeza não troco de dermatologista.",
  },
];

export default function DermatologiaDemoPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="demo-derma-root">
        {/* ── NAV ── */}
        <nav className="demo-derma-nav" aria-label="Navegação principal">
          <div className="demo-derma-container">
            <div className="demo-derma-nav-inner">
              <a href="#" className="demo-derma-logo" aria-label="Início">
                <span className="demo-derma-logo-name">Dra. Marina Costa</span>
                <span className="demo-derma-logo-specialty">Dermatologia</span>
              </a>

              <ul className="demo-derma-nav-links" role="list">
                <li>
                  <a href="#sobre">Sobre</a>
                </li>
                <li>
                  <a href="#procedimentos">Procedimentos</a>
                </li>
                <li>
                  <a href="#localizacao">Localização</a>
                </li>
                <li>
                  <a href="#contato">Contato</a>
                </li>
              </ul>

              <div className="demo-derma-nav-right">
                <a
                  href="#contato"
                  className="demo-derma-btn demo-derma-btn-primary"
                  style={{ padding: "10px 22px", fontSize: "0.875rem" }}
                >
                  Agendar consulta
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* ── HERO ── */}
        <section className="demo-derma-hero" aria-labelledby="hero-title">
          <div className="demo-derma-container">
            <div className="demo-derma-hero-inner">
              {/* Content */}
              <div>
                <div className="demo-derma-hero-badge">
                  <span className="demo-derma-hero-badge-dot" />
                  Consultório em São Paulo
                </div>

                <h1 className="demo-derma-hero-title" id="hero-title">
                  Cuidado especializado<br />
                  para a saúde da{" "}
                  <span>sua pele</span>
                </h1>

                <p className="demo-derma-hero-subtitle">
                  Tratamentos dermatológicos clínicos e estéticos com tecnologia de ponta e
                  atendimento humanizado. Cuide da sua pele com quem mais entende.
                </p>

                <div className="demo-derma-hero-actions">
                  <a
                    href="#contato"
                    className="demo-derma-btn demo-derma-btn-primary"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    Agendar consulta
                  </a>
                  <a
                    href="#procedimentos"
                    className="demo-derma-btn demo-derma-btn-outline"
                  >
                    Ver procedimentos
                  </a>
                </div>

                <div className="demo-derma-hero-stats">
                  <div className="demo-derma-stat-item">
                    <span className="demo-derma-stat-number">+10</span>
                    <span className="demo-derma-stat-label">Anos de experiência</span>
                  </div>
                  <div className="demo-derma-stat-item">
                    <span className="demo-derma-stat-number">+3k</span>
                    <span className="demo-derma-stat-label">Pacientes atendidos</span>
                  </div>
                  <div className="demo-derma-stat-item">
                    <span className="demo-derma-stat-number">98%</span>
                    <span className="demo-derma-stat-label">Satisfação</span>
                  </div>
                </div>
              </div>

              {/* Visual */}
              <div className="demo-derma-hero-visual" aria-hidden="true">
                <div className="demo-derma-hero-photo">
                  <Image
                    className="demo-derma-hero-photo-img"
                    src="/images/demos/doctor-consultation.jpg"
                    alt="Dra. Marina Costa, dermatologista"
                    width={340}
                    height={420}
                  />
                </div>

                {/* Floating cards */}
                <div className="demo-derma-hero-card demo-derma-hero-card-left">
                  <div className="demo-derma-hero-card-icon">⭐</div>
                  <div className="demo-derma-hero-card-text">
                    <span className="demo-derma-hero-card-value">4.9 / 5.0</span>
                    <span className="demo-derma-hero-card-desc">Avaliação média</span>
                  </div>
                </div>

                <div className="demo-derma-hero-card demo-derma-hero-card-right">
                  <div className="demo-derma-hero-card-icon">🏥</div>
                  <div className="demo-derma-hero-card-text">
                    <span className="demo-derma-hero-card-value">CRM/SP</span>
                    <span className="demo-derma-hero-card-desc">123456</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SOBRE ── */}
        <section
          id="sobre"
          className="demo-derma-sobre demo-derma-section"
          aria-labelledby="sobre-title"
        >
          <div className="demo-derma-container">
            <div className="demo-derma-sobre-inner">
              {/* Photo column */}
              <div className="demo-derma-sobre-photo-wrap">
                <div className="demo-derma-sobre-photo">
                  <Image
                    className="demo-derma-sobre-photo-img"
                    src="/images/demos/doctor-consultation.jpg"
                    alt="Dra. Marina Costa em atendimento"
                    width={280}
                    height={340}
                  />
                </div>

                <div className="demo-derma-crm-badge">
                  <span className="demo-derma-crm-label">Registro médico</span>
                  <span className="demo-derma-crm-value">CRM/SP 123456</span>
                </div>
                <div className="demo-derma-crm-badge">
                  <span className="demo-derma-crm-label">Especialidade</span>
                  <span className="demo-derma-crm-value">RQE 78901</span>
                </div>
              </div>

              {/* Content column */}
              <div className="demo-derma-sobre-content">
                <div>
                  <span className="demo-derma-eyebrow">Sobre a médica</span>
                  <h2 className="demo-derma-section-title" id="sobre-title">
                    Dra. Marina Costa
                  </h2>
                  <p style={{ fontSize: "1.125rem", color: "#E11D48", fontWeight: 600, marginBottom: 16 }}>
                    Dermatologista · CRM/SP 123456 · RQE 78901
                  </p>
                </div>

                <p className="demo-derma-sobre-bio">
                  Com mais de 10 anos de experiência em dermatologia clínica e estética,
                  a Dra. Marina Costa é referência em São Paulo no cuidado integral da pele.
                  Formada pela Universidade de São Paulo (USP) e com residência médica no
                  Hospital das Clínicas, ela alia o conhecimento científico de ponta a um
                  atendimento profundamente humanizado.
                </p>

                <p className="demo-derma-sobre-bio">
                  Membro da Sociedade Brasileira de Dermatologia (SBD) e da American Academy
                  of Dermatology (AAD), está sempre atualizada com as mais recentes pesquisas
                  e tecnologias da área.
                </p>

                <div>
                  <p style={{ fontWeight: 600, fontSize: "0.9375rem", color: "#1A1A2E", marginBottom: 12 }}>
                    Formação e títulos
                  </p>
                  <ul className="demo-derma-sobre-list">
                    {[
                      "Graduação em Medicina — Universidade de São Paulo (USP)",
                      "Residência em Dermatologia — Hospital das Clínicas, FMUSP",
                      "Fellowship em Dermatologia Estética — New York University",
                      "Membro da Sociedade Brasileira de Dermatologia (SBD)",
                      "Membro da American Academy of Dermatology (AAD)",
                    ].map((item) => (
                      <li key={item}>
                        <span className="demo-derma-check" aria-hidden="true">
                          <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="2 6 5 9 10 3" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p style={{ fontWeight: 600, fontSize: "0.9375rem", color: "#1A1A2E", marginBottom: 12 }}>
                    Áreas de especialização
                  </p>
                  <div className="demo-derma-tags">
                    {[
                      "Dermatologia Clínica",
                      "Dermatologia Estética",
                      "Cirurgia Dermatológica",
                      "Oncologia Cutânea",
                      "Tricologia",
                      "Dermatoscopia Digital",
                    ].map((tag) => (
                      <span key={tag} className="demo-derma-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROCEDIMENTOS ── */}
        <section
          id="procedimentos"
          className="demo-derma-procedimentos demo-derma-section"
          aria-labelledby="proc-title"
        >
          <div className="demo-derma-container">
            <div className="demo-derma-procedimentos-header">
              <span className="demo-derma-eyebrow">Procedimentos</span>
              <h2 className="demo-derma-section-title" id="proc-title">
                Tratamentos disponíveis
              </h2>
              <p className="demo-derma-section-subtitle">
                Oferecemos uma gama completa de procedimentos dermatológicos clínicos
                e estéticos com equipamentos de última geração.
              </p>
            </div>

            <div className="demo-derma-proc-grid">
              {procedures.map((proc, i) => (
                <article
                  key={proc.name}
                  className={`demo-derma-proc-card demo-derma-reveal demo-derma-reveal-delay-${(i % 3) + 1}`}
                >
                  <div className="demo-derma-proc-icon" aria-hidden="true">
                    {proc.icon}
                  </div>
                  <h3 className="demo-derma-proc-name">{proc.name}</h3>
                  <p className="demo-derma-proc-desc">{proc.desc}</p>
                  <span className="demo-derma-proc-link">
                    Saiba mais
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── DEPOIMENTOS ── */}
        <section
          className="demo-derma-depoimentos demo-derma-section"
          aria-labelledby="dep-title"
        >
          <div className="demo-derma-container">
            <div className="demo-derma-depoimentos-header">
              <span className="demo-derma-eyebrow">Depoimentos</span>
              <h2 className="demo-derma-section-title" id="dep-title">
                O que nossos pacientes dizem
              </h2>
              <p className="demo-derma-section-subtitle">
                A satisfação de cada paciente é nossa maior conquista. Veja o que
                dizem sobre sua experiência.
              </p>
            </div>

            <div className="demo-derma-dep-grid">
              {testimonials.map((t, i) => (
                <article
                  key={t.name}
                  className={`demo-derma-dep-card demo-derma-reveal demo-derma-reveal-delay-${i + 1}`}
                >
                  <div className="demo-derma-dep-stars" aria-label="5 estrelas">
                    {"★★★★★".split("").map((s, j) => (
                      <span key={j}>{s}</span>
                    ))}
                  </div>

                  <blockquote>
                    <p className="demo-derma-dep-quote">"{t.quote}"</p>
                  </blockquote>

                  <div className="demo-derma-dep-author">
                    <div className="demo-derma-dep-avatar" aria-hidden="true">
                      {t.initials}
                    </div>
                    <div className="demo-derma-dep-info">
                      <span className="demo-derma-dep-name">{t.name}</span>
                      <span className="demo-derma-dep-date">{t.date}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── LOCALIZAÇÃO ── */}
        <section
          id="localizacao"
          className="demo-derma-localizacao demo-derma-section"
          aria-labelledby="loc-title"
        >
          <div className="demo-derma-container">
            <div className="demo-derma-loc-inner">
              {/* Info */}
              <div className="demo-derma-loc-info">
                <div>
                  <span className="demo-derma-eyebrow">Como chegar</span>
                  <h2 className="demo-derma-section-title" id="loc-title">
                    Localização e horários
                  </h2>
                  <p className="demo-derma-section-subtitle">
                    Consultório moderno e acessível no coração de São Paulo.
                  </p>
                </div>

                <div className="demo-derma-loc-block">
                  <div className="demo-derma-loc-item">
                    <div className="demo-derma-loc-icon" aria-hidden="true">📍</div>
                    <div className="demo-derma-loc-text">
                      <span className="demo-derma-loc-label">Endereço</span>
                      <span className="demo-derma-loc-value">
                        Rua Augusta, 1500 — Sala 304<br />
                        Consolação, São Paulo — SP<br />
                        CEP 01304-001
                      </span>
                    </div>
                  </div>

                  <div className="demo-derma-loc-item">
                    <div className="demo-derma-loc-icon" aria-hidden="true">📞</div>
                    <div className="demo-derma-loc-text">
                      <span className="demo-derma-loc-label">Telefone</span>
                      <span className="demo-derma-loc-value">(11) 99999-0000</span>
                    </div>
                  </div>

                  <div className="demo-derma-loc-item">
                    <div className="demo-derma-loc-icon" aria-hidden="true">💬</div>
                    <div className="demo-derma-loc-text">
                      <span className="demo-derma-loc-label">WhatsApp</span>
                      <span className="demo-derma-loc-value">(11) 99999-0001</span>
                    </div>
                  </div>
                </div>

                <div>
                  <p style={{ fontWeight: 600, fontSize: "0.9375rem", color: "#1A1A2E", marginBottom: 14 }}>
                    Horário de atendimento
                  </p>
                  <div className="demo-derma-hours-grid">
                    <div className="demo-derma-hours-row">
                      <span className="demo-derma-hours-day">Seg — Sex</span>
                      <span className="demo-derma-hours-time">08h — 18h</span>
                    </div>
                    <div className="demo-derma-hours-row">
                      <span className="demo-derma-hours-day">Sábado</span>
                      <span className="demo-derma-hours-time">08h — 12h</span>
                    </div>
                    <div className="demo-derma-hours-row">
                      <span className="demo-derma-hours-day">Domingo</span>
                      <span className="demo-derma-hours-time" style={{ color: "#E11D48" }}>Fechado</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div
                className="demo-derma-map-placeholder"
                role="img"
                aria-label="Mapa com localização do consultório na Rua Augusta, 1500, São Paulo"
              >
                <div className="demo-derma-map-bg" aria-hidden="true" />

                <div className="demo-derma-map-pin" aria-hidden="true">
                  <div className="demo-derma-map-pin-inner" />
                </div>

                <div className="demo-derma-map-label">
                  <p className="demo-derma-map-address">Rua Augusta, 1500 — Sala 304</p>
                  <p className="demo-derma-map-city">Consolação · São Paulo, SP</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTATO / CTA ── */}
        <section
          id="contato"
          className="demo-derma-contato"
          aria-labelledby="cta-title"
        >
          <div className="demo-derma-container">
            <div className="demo-derma-contato-inner">
              <div className="demo-derma-contato-eyebrow">
                <span>✨</span> Consulta especializada
              </div>

              <h2 className="demo-derma-contato-title" id="cta-title">
                Agende sua consulta hoje mesmo
              </h2>

              <p className="demo-derma-contato-subtitle">
                Nossa equipe está pronta para atendê-lo. Entre em contato e marque
                uma consulta com a Dra. Marina Costa — cuide da sua pele com quem entende.
              </p>

              <div className="demo-derma-contato-actions">
                <a
                  href="https://wa.me/5511999990001"
                  className="demo-derma-btn-whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Agendar consulta via WhatsApp"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Falar pelo WhatsApp
                </a>

                <span className="demo-derma-contato-phone">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.63 19.79 19.79 0 01.01 1 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14v2.92z" />
                  </svg>
                  (11) 99999-0000
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="demo-derma-footer">
          <div className="demo-derma-container">
            <div className="demo-derma-footer-inner">
              {/* Brand */}
              <div>
                <p className="demo-derma-footer-brand-name">Dra. Marina Costa</p>
                <p className="demo-derma-footer-brand-specialty">Dermatologista</p>
                <p className="demo-derma-footer-bio">
                  Consultório de dermatologia clínica e estética em São Paulo.
                  Cuidado especializado para a saúde e beleza da sua pele.
                </p>
                <p className="demo-derma-footer-crm">CRM/SP 123456 · RQE 78901</p>
              </div>

              {/* Links */}
              <div>
                <p className="demo-derma-footer-col-title">Navegação</p>
                <ul className="demo-derma-footer-links" role="list">
                  <li><a href="#sobre">Sobre a médica</a></li>
                  <li><a href="#procedimentos">Procedimentos</a></li>
                  <li><a href="#localizacao">Localização</a></li>
                  <li><a href="#contato">Contato</a></li>
                  <li><a href="#contato">Agendar consulta</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <p className="demo-derma-footer-col-title">Contato</p>
                <div className="demo-derma-footer-contact-item">
                  <span className="demo-derma-footer-contact-icon">📍</span>
                  <span>Rua Augusta, 1500 — Sala 304<br />Consolação · São Paulo, SP</span>
                </div>
                <div className="demo-derma-footer-contact-item">
                  <span className="demo-derma-footer-contact-icon">📞</span>
                  <span>(11) 99999-0000</span>
                </div>
                <div className="demo-derma-footer-contact-item">
                  <span className="demo-derma-footer-contact-icon">💬</span>
                  <span>WhatsApp: (11) 99999-0001</span>
                </div>
                <div className="demo-derma-footer-contact-item">
                  <span className="demo-derma-footer-contact-icon">🕐</span>
                  <span>Seg–Sex: 8h–18h · Sáb: 8h–12h</span>
                </div>
              </div>
            </div>

            <div className="demo-derma-footer-bottom">
              <p className="demo-derma-footer-copy">
                © 2025 Dra. Marina Costa — Dermatologia. Todos os direitos reservados.
              </p>
              <p className="demo-derma-footer-credit">
                Site criado por{" "}
                <a
                  href="https://condutasaude.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Conduta Saúde
                </a>
              </p>
            </div>
          </div>
        </footer>

        {/* Inline scroll reveal script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function() {
  function reveal() {
    var els = document.querySelectorAll('.demo-derma-reveal');
    els.forEach(function(el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        el.classList.add('demo-derma-visible');
      }
    });
  }
  document.addEventListener('DOMContentLoaded', reveal);
  window.addEventListener('scroll', reveal, { passive: true });
  reveal();
})();
`,
          }}
        />
      </div>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Dra. Carolina Ribeiro — Ginecologista e Obstetra | Ribeirão Preto",
  description:
    "Dra. Carolina Ribeiro, Ginecologista e Obstetra em Ribeirão Preto. Pré-natal, parto humanizado, ginecologia geral, contracepção, menopausa. Cuidando de cada fase da sua vida.",
};

const styles = `
/* ── RESET SCOPE ── */
.demo-go-root *,
.demo-go-root *::before,
.demo-go-root *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.demo-go-root {
  font-family: var(--font-inter), -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: #1A1A2E;
  background: #FAF5FF;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  line-height: 1.7;
}

.demo-go-root a {
  text-decoration: none;
  color: inherit;
}
.demo-go-root a[class*="btn-primary"] { color: #FFFFFF; }
.demo-go-root a[class*="btn-white"] { color: var(--violet); }

.demo-go-root img {
  max-width: 100%;
  display: block;
}

/* ── VARIABLES ── */
.demo-go-root {
  --violet: #7C3AED;
  --violet-hover: #6D28D9;
  --violet-dark: #5B21B6;
  --violet-light: #F3E8FF;
  --violet-subtle: #FAF5FF;
  --violet-border: #DDD6FE;
  --rose: #EC4899;
  --rose-light: #FDF2F8;
  --rose-border: #FBCFE8;
  --dark: #1A1A2E;
  --text-secondary: #4A4A6A;
  --text-muted: #6B7280;
  --white: #FFFFFF;
  --bg: #FAF5FF;
  --accent-bg: #F3E8FF;
  --border: #E8E8F0;
  --shadow-card: 0 2px 16px rgba(0, 0, 0, 0.06);
  --shadow-hover: 0 8px 32px rgba(124, 58, 237, 0.12);
  --radius: 16px;
}

/* ── UTILITIES ── */
.demo-go-container {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 24px;
}

.demo-go-section {
  padding: 96px 0;
}

.demo-go-section-sm {
  padding: 72px 0;
}

.demo-go-section-title {
  font-family: var(--font-work-sans), sans-serif;
  font-size: 2.25rem;
  font-weight: 700;
  color: var(--dark);
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 12px;
}

.demo-go-section-subtitle {
  font-size: 1.0625rem;
  color: var(--text-secondary);
  max-width: 560px;
  line-height: 1.7;
}

.demo-go-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--violet);
  margin-bottom: 16px;
}

.demo-go-eyebrow::before {
  content: "";
  display: inline-block;
  width: 24px;
  height: 2px;
  background: var(--violet);
  border-radius: 2px;
}

/* ── BUTTON ── */
.demo-go-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  border-radius: 100px;
  font-family: var(--font-work-sans), sans-serif;
  font-size: 0.9375rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
  border: none;
  text-decoration: none;
}

.demo-go-btn-primary {
  background: var(--violet);
  color: var(--white);
}

.demo-go-btn-primary:hover {
  background: var(--violet-hover);
  transform: translateY(-1px);
  box-shadow: 0 6px 24px rgba(124, 58, 237, 0.3);
}

.demo-go-btn-outline {
  background: transparent;
  color: var(--violet);
  border: 2px solid var(--violet-border);
}

.demo-go-btn-outline:hover {
  background: var(--violet);
  color: var(--white);
  border-color: var(--violet);
  transform: translateY(-1px);
}

.demo-go-btn-white {
  background: var(--white);
  color: var(--violet);
}

.demo-go-btn-white:hover {
  background: var(--violet-light);
  transform: translateY(-1px);
}

/* ── NAVIGATION ── */
.demo-go-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(250, 245, 255, 0.92);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--violet-border);
}

.demo-go-nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

.demo-go-logo {
  display: flex;
  flex-direction: column;
  gap: 1px;
  text-decoration: none;
}

.demo-go-logo-name {
  font-family: var(--font-work-sans), sans-serif;
  font-size: 1.0625rem;
  font-weight: 700;
  color: var(--dark);
  line-height: 1.2;
  letter-spacing: -0.01em;
}

.demo-go-logo-specialty {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--violet);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.demo-go-nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;
}

.demo-go-nav-links a {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-secondary);
  transition: color 0.2s;
}

.demo-go-nav-links a:hover {
  color: var(--violet);
}

.demo-go-nav-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

/* ── HERO ── */
.demo-go-hero {
  background: linear-gradient(135deg, #FAF5FF 0%, #F3E8FF 30%, #FDF2F8 60%, #FAF5FF 100%);
  padding: 112px 0 96px;
  position: relative;
  overflow: hidden;
}

.demo-go-hero::before {
  content: "";
  position: absolute;
  top: -30%;
  right: -8%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(124, 58, 237, 0.06) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

.demo-go-hero::after {
  content: "";
  position: absolute;
  bottom: -20%;
  left: -5%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(236, 72, 153, 0.05) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

.demo-go-hero-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.demo-go-hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: white;
  border: 1px solid var(--violet-border);
  border-radius: 100px;
  padding: 6px 16px 6px 10px;
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--violet);
  margin-bottom: 24px;
  box-shadow: 0 2px 8px rgba(124, 58, 237, 0.08);
}

.demo-go-hero-badge-dot {
  width: 8px;
  height: 8px;
  background: var(--violet);
  border-radius: 50%;
  flex-shrink: 0;
  animation: demo-go-pulse 2s ease-in-out infinite;
}

@keyframes demo-go-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.demo-go-hero-title {
  font-family: var(--font-work-sans), sans-serif;
  font-size: 3.25rem;
  font-weight: 800;
  color: var(--dark);
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin-bottom: 20px;
}

.demo-go-hero-title span {
  background: linear-gradient(135deg, var(--violet) 0%, var(--rose) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.demo-go-hero-subtitle {
  font-size: 1.125rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 36px;
  max-width: 480px;
}

.demo-go-hero-actions {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.demo-go-hero-stats {
  display: flex;
  gap: 36px;
  margin-top: 48px;
  padding-top: 32px;
  border-top: 1px solid var(--violet-border);
}

.demo-go-stat-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.demo-go-stat-number {
  font-family: var(--font-work-sans), sans-serif;
  font-size: 1.625rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--violet) 0%, var(--rose) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
}

.demo-go-stat-label {
  font-size: 0.8125rem;
  color: var(--text-muted);
  font-weight: 500;
}

/* Hero visual side */
.demo-go-hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.demo-go-hero-photo {
  width: 340px;
  height: 420px;
  border-radius: 24px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  box-shadow: 0 20px 60px rgba(124, 58, 237, 0.2);
  position: relative;
}

.demo-go-hero-photo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
}

.demo-go-hero-card {
  position: absolute;
  background: white;
  border-radius: 14px;
  padding: 14px 18px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  gap: 10px;
}

.demo-go-hero-card-left {
  bottom: 32px;
  left: -40px;
}

.demo-go-hero-card-right {
  top: 32px;
  right: -40px;
}

.demo-go-hero-card-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: var(--violet-light);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  flex-shrink: 0;
}

.demo-go-hero-card-text {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.demo-go-hero-card-value {
  font-family: var(--font-work-sans), sans-serif;
  font-size: 0.9375rem;
  font-weight: 700;
  color: var(--dark);
  line-height: 1.2;
}

.demo-go-hero-card-desc {
  font-size: 0.75rem;
  color: var(--text-muted);
}

/* ── SOBRE ── */
.demo-go-sobre {
  background: var(--white);
}

.demo-go-sobre-inner {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 72px;
  align-items: center;
}

.demo-go-sobre-photo-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.demo-go-sobre-photo {
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

.demo-go-sobre-photo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
}

.demo-go-crm-badge {
  background: var(--violet-light);
  border: 1px solid var(--violet-border);
  border-radius: 10px;
  padding: 10px 20px;
  text-align: center;
}

.demo-go-crm-label {
  font-size: 0.75rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 500;
  display: block;
}

.demo-go-crm-value {
  font-family: var(--font-work-sans), sans-serif;
  font-size: 0.9375rem;
  font-weight: 700;
  color: var(--violet);
  display: block;
  margin-top: 2px;
}

.demo-go-sobre-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.demo-go-sobre-bio {
  font-size: 1.0625rem;
  color: var(--text-secondary);
  line-height: 1.8;
}

.demo-go-sobre-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 4px;
}

.demo-go-sobre-list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 0.9375rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

.demo-go-check {
  width: 20px;
  height: 20px;
  background: var(--violet-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 1px;
}

.demo-go-check svg {
  width: 11px;
  height: 11px;
  color: var(--violet);
}

.demo-go-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
}

.demo-go-tag {
  background: var(--violet-light);
  border: 1px solid var(--violet-border);
  color: #5B21B6;
  font-size: 0.8125rem;
  font-weight: 500;
  padding: 5px 14px;
  border-radius: 100px;
}

/* ── TRATAMENTOS ── */
.demo-go-tratamentos {
  background: var(--bg);
}

.demo-go-tratamentos-header {
  text-align: center;
  margin-bottom: 56px;
}

.demo-go-tratamentos-header .demo-go-section-subtitle {
  margin: 0 auto;
}

.demo-go-trat-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.demo-go-trat-card {
  background: var(--white);
  border-radius: var(--radius);
  padding: 32px 28px;
  box-shadow: var(--shadow-card);
  border: 1px solid transparent;
  transition: all 0.3s ease;
  cursor: default;
  position: relative;
  overflow: hidden;
}

.demo-go-trat-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--violet), var(--rose));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.35s ease;
}

.demo-go-trat-card:hover {
  box-shadow: var(--shadow-hover);
  border-color: var(--violet-border);
  transform: translateY(-4px);
}

.demo-go-trat-card:hover::before {
  transform: scaleX(1);
}

.demo-go-trat-icon {
  width: 52px;
  height: 52px;
  background: var(--violet-light);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.demo-go-trat-icon svg {
  width: 24px;
  height: 24px;
  color: var(--violet);
}

.demo-go-trat-name {
  font-family: var(--font-work-sans), sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 8px;
  line-height: 1.3;
}

.demo-go-trat-desc {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.7;
}

.demo-go-trat-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 16px;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--violet);
  transition: gap 0.2s;
}

.demo-go-trat-card:hover .demo-go-trat-link {
  gap: 10px;
}

/* ── JORNADA ── */
.demo-go-jornada {
  background: var(--white);
}

.demo-go-jornada-header {
  text-align: center;
  margin-bottom: 64px;
}

.demo-go-jornada-header .demo-go-section-subtitle {
  margin: 0 auto;
}

.demo-go-timeline {
  display: flex;
  flex-direction: column;
  gap: 0;
  position: relative;
  max-width: 720px;
  margin: 0 auto;
}

.demo-go-timeline::before {
  content: "";
  position: absolute;
  left: 28px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, var(--violet) 0%, var(--rose) 100%);
  border-radius: 2px;
}

.demo-go-timeline-step {
  display: flex;
  gap: 28px;
  align-items: flex-start;
  position: relative;
  padding-bottom: 40px;
}

.demo-go-timeline-step:last-child {
  padding-bottom: 0;
}

.demo-go-timeline-marker {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--violet) 0%, var(--rose) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  z-index: 1;
  box-shadow: 0 4px 16px rgba(124, 58, 237, 0.2);
}

.demo-go-timeline-number {
  font-family: var(--font-work-sans), sans-serif;
  font-size: 1.125rem;
  font-weight: 800;
  color: var(--white);
}

.demo-go-timeline-content {
  padding-top: 8px;
  flex: 1;
}

.demo-go-timeline-title {
  font-family: var(--font-work-sans), sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 6px;
  line-height: 1.3;
}

.demo-go-timeline-subtitle {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--violet);
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.demo-go-timeline-desc {
  font-size: 0.9375rem;
  color: var(--text-secondary);
  line-height: 1.7;
}

/* ── PARA QUEM ── */
.demo-go-paraquem {
  background: var(--accent-bg);
}

.demo-go-paraquem-header {
  text-align: center;
  margin-bottom: 56px;
}

.demo-go-paraquem-header .demo-go-section-subtitle {
  margin: 0 auto;
}

.demo-go-paraquem-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.demo-go-paraquem-card {
  background: var(--white);
  border-radius: var(--radius);
  padding: 32px 24px;
  text-align: center;
  box-shadow: var(--shadow-card);
  border: 1px solid transparent;
  transition: all 0.3s ease;
}

.demo-go-paraquem-card:hover {
  border-color: var(--violet-border);
  box-shadow: var(--shadow-hover);
  transform: translateY(-3px);
}

.demo-go-paraquem-icon {
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: linear-gradient(135deg, var(--violet-light) 0%, var(--rose-light) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 18px;
}

.demo-go-paraquem-icon svg {
  width: 28px;
  height: 28px;
  color: var(--violet);
}

.demo-go-paraquem-name {
  font-family: var(--font-work-sans), sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 8px;
  line-height: 1.3;
}

.demo-go-paraquem-desc {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* ── DEPOIMENTOS ── */
.demo-go-depoimentos {
  background: var(--white);
}

.demo-go-depoimentos-header {
  text-align: center;
  margin-bottom: 56px;
}

.demo-go-depoimentos-header .demo-go-section-subtitle {
  margin: 0 auto;
}

.demo-go-dep-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.demo-go-dep-card {
  background: linear-gradient(145deg, var(--violet-light) 0%, var(--rose-light) 100%);
  border: 1px solid var(--violet-border);
  border-radius: var(--radius);
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: all 0.3s ease;
}

.demo-go-dep-card:hover {
  box-shadow: var(--shadow-hover);
  transform: translateY(-3px);
}

.demo-go-dep-hearts {
  display: flex;
  gap: 4px;
  color: var(--rose);
  font-size: 0.875rem;
}

.demo-go-dep-quote {
  font-size: 0.9375rem;
  color: var(--dark);
  line-height: 1.75;
  font-style: italic;
  flex: 1;
}

.demo-go-dep-author {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-top: 16px;
  border-top: 1px solid var(--violet-border);
}

.demo-go-dep-avatar {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, var(--violet) 0%, var(--rose) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8125rem;
  font-weight: 700;
  color: white;
  flex-shrink: 0;
}

.demo-go-dep-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.demo-go-dep-name {
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--dark);
  line-height: 1.3;
}

.demo-go-dep-detail {
  font-size: 0.8rem;
  color: var(--text-muted);
}

/* ── LOCALIZAÇÃO ── */
.demo-go-localizacao {
  background: var(--bg);
}

.demo-go-loc-inner {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 56px;
  align-items: start;
}

.demo-go-loc-info {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.demo-go-loc-block {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.demo-go-loc-item {
  display: flex;
  gap: 14px;
  align-items: flex-start;
}

.demo-go-loc-icon {
  width: 40px;
  height: 40px;
  background: var(--violet-light);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 1px solid var(--violet-border);
}

.demo-go-loc-icon svg {
  width: 18px;
  height: 18px;
  color: var(--violet);
}

.demo-go-loc-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.demo-go-loc-label {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.demo-go-loc-value {
  font-size: 0.9375rem;
  color: var(--dark);
  font-weight: 500;
  line-height: 1.5;
}

.demo-go-hours-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-top: 4px;
}

.demo-go-hours-row {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.demo-go-hours-day {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.demo-go-hours-time {
  font-size: 0.9375rem;
  color: var(--dark);
  font-weight: 500;
}

.demo-go-map-placeholder {
  background: var(--white);
  border-radius: var(--radius);
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

.demo-go-map-bg {
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
  opacity: 0.4;
}

.demo-go-map-pin {
  position: relative;
  z-index: 1;
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, var(--violet) 0%, var(--rose) 100%);
  border-radius: 50% 50% 50% 0;
  transform: rotate(-45deg);
  box-shadow: 0 4px 16px rgba(124, 58, 237, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
}

.demo-go-map-pin-inner {
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 50%;
  transform: rotate(45deg);
}

.demo-go-map-label {
  position: relative;
  z-index: 1;
  background: white;
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 10px 18px;
  text-align: center;
  box-shadow: var(--shadow-card);
}

.demo-go-map-address {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--dark);
}

.demo-go-map-city {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-top: 2px;
}

/* ── CONTATO / CTA ── */
.demo-go-contato {
  background: linear-gradient(135deg, var(--violet) 0%, var(--violet-dark) 40%, var(--rose) 100%);
  padding: 96px 0;
  position: relative;
  overflow: hidden;
}

.demo-go-contato::before {
  content: "";
  position: absolute;
  top: -50%;
  right: -10%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%);
  border-radius: 50%;
}

.demo-go-contato::after {
  content: "";
  position: absolute;
  bottom: -30%;
  left: -5%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%);
  border-radius: 50%;
}

.demo-go-contato-inner {
  text-align: center;
  position: relative;
  z-index: 1;
  max-width: 640px;
  margin: 0 auto;
}

.demo-go-contato-eyebrow {
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

.demo-go-contato-title {
  font-family: var(--font-work-sans), sans-serif;
  font-size: 2.625rem;
  font-weight: 800;
  color: white;
  line-height: 1.15;
  letter-spacing: -0.025em;
  margin-bottom: 16px;
}

.demo-go-contato-subtitle {
  font-size: 1.0625rem;
  color: rgba(255,255,255,0.85);
  line-height: 1.7;
  margin-bottom: 40px;
}

.demo-go-contato-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.demo-go-btn-whatsapp {
  background: #25D366;
  color: white;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  border-radius: 100px;
  font-family: var(--font-work-sans), sans-serif;
  font-size: 0.9375rem;
  font-weight: 600;
  transition: all 0.25s ease;
  text-decoration: none;
}

.demo-go-btn-whatsapp:hover {
  background: #1DAA54;
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(37, 211, 102, 0.35);
}

.demo-go-contato-note {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: rgba(255,255,255,0.7);
  font-size: 0.875rem;
  margin-top: 20px;
}

/* ── FOOTER ── */
.demo-go-footer {
  background: var(--dark);
  padding: 56px 0 36px;
}

.demo-go-footer-inner {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 48px;
  padding-bottom: 48px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}

.demo-go-footer-brand-name {
  font-family: var(--font-work-sans), sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  color: white;
  line-height: 1.3;
}

.demo-go-footer-brand-specialty {
  font-size: 0.8125rem;
  color: var(--violet);
  font-weight: 500;
  letter-spacing: 0.04em;
  margin-top: 2px;
}

.demo-go-footer-bio {
  font-size: 0.875rem;
  color: rgba(255,255,255,0.5);
  line-height: 1.65;
  margin-top: 14px;
  max-width: 300px;
}

.demo-go-footer-crm {
  font-size: 0.8125rem;
  color: rgba(255,255,255,0.35);
  margin-top: 10px;
}

.demo-go-footer-col-title {
  font-family: var(--font-work-sans), sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  margin-bottom: 16px;
}

.demo-go-footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.demo-go-footer-links a {
  font-size: 0.875rem;
  color: rgba(255,255,255,0.5);
  transition: color 0.2s;
}

.demo-go-footer-links a:hover {
  color: var(--violet);
}

.demo-go-footer-contact-item {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 0.875rem;
  color: rgba(255,255,255,0.5);
  line-height: 1.5;
  margin-bottom: 10px;
}

.demo-go-footer-contact-icon {
  font-size: 0.9rem;
  margin-top: 1px;
  flex-shrink: 0;
}

.demo-go-footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 28px;
  flex-wrap: wrap;
  gap: 12px;
}

.demo-go-footer-copy {
  font-size: 0.8125rem;
  color: rgba(255,255,255,0.3);
}

.demo-go-footer-credit {
  font-size: 0.8125rem;
  color: rgba(255,255,255,0.4);
}

.demo-go-footer-credit a {
  color: var(--violet);
  font-weight: 600;
  transition: opacity 0.2s;
}

.demo-go-footer-credit a:hover {
  opacity: 0.8;
}

/* ── REVEAL ANIMATIONS ── */
.demo-go-reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.demo-go-reveal.demo-go-visible {
  opacity: 1;
  transform: translateY(0);
}

.demo-go-reveal-delay-1 { transition-delay: 0.1s; }
.demo-go-reveal-delay-2 { transition-delay: 0.2s; }
.demo-go-reveal-delay-3 { transition-delay: 0.3s; }
.demo-go-reveal-delay-4 { transition-delay: 0.4s; }
.demo-go-reveal-delay-5 { transition-delay: 0.5s; }
.demo-go-reveal-delay-6 { transition-delay: 0.6s; }

/* ── RESPONSIVE ── */
@media (max-width: 768px) {
  .demo-go-section {
    padding: 64px 0;
  }

  .demo-go-section-sm {
    padding: 48px 0;
  }

  .demo-go-section-title {
    font-size: 1.75rem;
  }

  /* Nav */
  .demo-go-nav-links {
    display: none;
  }

  .demo-go-nav-inner {
    height: 64px;
  }

  /* Hero */
  .demo-go-hero {
    padding: 64px 0 56px;
  }

  .demo-go-hero-inner {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }

  .demo-go-hero-title {
    font-size: 2.125rem;
  }

  .demo-go-hero-subtitle {
    margin: 0 auto 36px;
  }

  .demo-go-hero-actions {
    justify-content: center;
  }

  .demo-go-hero-stats {
    justify-content: center;
    gap: 24px;
  }

  .demo-go-hero-visual {
    order: -1;
  }

  .demo-go-hero-photo {
    width: 240px;
    height: 300px;
  }

  .demo-go-hero-card-left,
  .demo-go-hero-card-right {
    display: none;
  }

  /* Sobre */
  .demo-go-sobre-inner {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }

  .demo-go-sobre-list li {
    text-align: left;
  }

  .demo-go-tags {
    justify-content: center;
  }

  /* Tratamentos */
  .demo-go-trat-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  /* Jornada */
  .demo-go-timeline::before {
    left: 20px;
  }

  .demo-go-timeline-marker {
    width: 40px;
    height: 40px;
  }

  .demo-go-timeline-number {
    font-size: 0.9375rem;
  }

  .demo-go-timeline-step {
    gap: 18px;
  }

  /* Para Quem */
  .demo-go-paraquem-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  /* Depoimentos */
  .demo-go-dep-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  /* Localização */
  .demo-go-loc-inner {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .demo-go-map-placeholder {
    height: 280px;
  }

  /* CTA */
  .demo-go-contato-title {
    font-size: 2rem;
  }

  /* Footer */
  .demo-go-footer-inner {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .demo-go-footer-bottom {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .demo-go-trat-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .demo-go-paraquem-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .demo-go-hero-title {
    font-size: 2.5rem;
  }
}
`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dra. Carolina Ribeiro",
  description:
    "Ginecologista e Obstetra em Ribeirão Preto. Pré-natal, parto humanizado, ginecologia geral, contracepção, menopausa. Cuidando de cada fase da sua vida.",
  medicalSpecialty: "Obstetrics and Gynecology",
  identifier: [
    {
      "@type": "PropertyValue",
      name: "CRM",
      value: "CRM-SP 154.832",
    },
    {
      "@type": "PropertyValue",
      name: "RQE",
      value: "RQE 72.456",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Brasil, 1200",
    addressLocality: "Ribeirão Preto",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  telephone: "+55-16-99999-0000",
  url: "https://dracarolinaribeiro.com.br",
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

const treatments = [
  {
    name: "Pré-natal e Gestação",
    desc: "Acompanhamento completo da gestação, do primeiro ultrassom ao pós-parto. Cada consulta pensada para que você e seu bebê estejam seguros e acolhidos.",
  },
  {
    name: "Parto Humanizado",
    desc: "Parto normal ou cesárea — a decisão é sua, com informação e respeito. Acompanho cada momento para que o nascimento seja seguro e como você escolheu.",
  },
  {
    name: "Ginecologia Geral",
    desc: "Check-up ginecológico, Papanicolau, ultrassom, rastreamento de câncer de mama e colo de útero. Prevenção é o melhor cuidado que existe.",
  },
  {
    name: "Contracepção",
    desc: "DIU, implante hormonal, pílula — oriento sobre cada método para que você escolha o que faz sentido para o seu corpo e o seu momento de vida.",
  },
  {
    name: "Menopausa e Climatério",
    desc: "Qualidade de vida durante a menopausa. Reposição hormonal quando indicada, saúde óssea, bem-estar emocional. Uma nova fase com saúde e vitalidade.",
  },
  {
    name: "Saúde da Adolescente",
    desc: "Primeira consulta ginecológica acolhedora. Orientação sobre ciclo menstrual, vacinas, saúde íntima. Um espaço seguro para as primeiras dúvidas.",
  },
];

const journeySteps = [
  {
    title: "Primeira Consulta",
    subtitle: "Escuta e acolhimento",
    desc: "O primeiro passo é uma conversa sem pressa. Quero ouvir você, entender sua história, seus medos e seus objetivos. Aqui, você não é um número — é uma pessoa que merece atenção.",
  },
  {
    title: "Exames e Diagnóstico",
    subtitle: "Avaliação completa",
    desc: "Com delicadeza e precisão, realizamos os exames necessários. Cada resultado é explicado com clareza, sem jargão, com toda a paciência que você merece.",
  },
  {
    title: "Plano de Cuidado",
    subtitle: "Personalizado para você",
    desc: "Juntas, desenhamos o plano de cuidado mais adequado para a sua realidade e o seu momento de vida. Não existe receita pronta — cada mulher é única.",
  },
  {
    title: "Acompanhamento",
    subtitle: "Presente em cada etapa",
    desc: "Do pré-natal ao pós-parto, do check-up anual ao início da menopausa — estou ao seu lado em cada etapa. Meu telefone está sempre aberto para suas dúvidas.",
  },
  {
    title: "Cada Fase, Juntas",
    subtitle: "Parceria de vida",
    desc: "Saúde feminina não é um evento — é uma jornada. Da adolescência à maturidade, quero ser a médica que te acompanha, te escuta e cuida de você em cada fase.",
  },
];

const audiences = [
  {
    name: "Gestantes",
    desc: "Pré-natal completo, do primeiro ultrassom ao pós-parto. Acompanhamento que prioriza a sua escolha, a sua saúde e a do seu bebê.",
  },
  {
    name: "Mulheres em Check-up",
    desc: "Preventivo, exames de rotina e cuidados ginecológicos para quem quer manter a saúde em dia — sem medo, sem vergonha.",
  },
  {
    name: "Adolescentes",
    desc: "Primeira consulta acolhedora, orientação sobre ciclo menstrual, vacinas e saúde íntima. Um espaço seguro para tirar todas as dúvidas.",
  },
  {
    name: "Mulheres na Menopausa",
    desc: "Qualidade de vida, reposição hormonal quando indicada, saúde óssea e bem-estar emocional. Uma nova fase vivida com plenitude.",
  },
];

const testimonials = [
  {
    initials: "LS",
    name: "Larissa S.",
    detail: "Mãe do Pedro, parto humanizado em 2024",
    quote:
      "A Dra. Carolina me acompanhou desde a primeira consulta do pré-natal. Eu tinha medo do parto, mas ela me ouviu, me explicou cada opção e respeitou minhas escolhas. O Pedro nasceu de parto normal, no tempo dele, e eu me senti segura o tempo inteiro. Não existe gratidão que dê conta.",
  },
  {
    initials: "MF",
    name: "Márcia F.",
    detail: "Paciente há 8 anos, menopausa",
    quote:
      "Quando a menopausa chegou, achei que ia perder qualidade de vida. A Dra. Carolina me mostrou que é uma fase, não um fim. Com o tratamento certo, voltei a dormir bem, a ter disposição e a me sentir eu mesma. Ela cuida de mim há 8 anos e eu não troco por nada.",
  },
  {
    initials: "AP",
    name: "Ana Paula R.",
    detail: "Levou a filha Isabella, 14 anos, à primeira consulta",
    quote:
      "Minha filha morria de vergonha de ir ao ginecologista pela primeira vez. A Dra. Carolina recebeu a Isabella com tanta naturalidade e carinho que, na saída, ela me disse: 'mãe, não era nada do que eu imaginava'. Saímos as duas aliviadas e felizes. Toda menina merece uma médica assim.",
  },
];

export default function GinecologiaDemoPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="demo-go-root">
        {/* ── NAV ── */}
        <nav className="demo-go-nav" aria-label="Navegação principal">
          <div className="demo-go-container">
            <div className="demo-go-nav-inner">
              <a href="#" className="demo-go-logo" aria-label="Início">
                <span className="demo-go-logo-name">Dra. Carolina Ribeiro</span>
                <span className="demo-go-logo-specialty">Ginecologia e Obstetrícia</span>
              </a>

              <ul className="demo-go-nav-links" role="list">
                <li>
                  <a href="#sobre">Sobre</a>
                </li>
                <li>
                  <a href="#tratamentos">Tratamentos</a>
                </li>
                <li>
                  <a href="#jornada">Jornada</a>
                </li>
                <li>
                  <a href="#depoimentos">Depoimentos</a>
                </li>
                <li>
                  <a href="#contato">Contato</a>
                </li>
              </ul>

              <div className="demo-go-nav-right">
                <a
                  href="#contato"
                  className="demo-go-btn demo-go-btn-primary"
                  style={{ padding: "10px 22px", fontSize: "0.875rem" }}
                >
                  Agendar consulta
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* ── HERO ── */}
        <section className="demo-go-hero" aria-labelledby="hero-title">
          <div className="demo-go-container">
            <div className="demo-go-hero-inner">
              {/* Content */}
              <div>
                <div className="demo-go-hero-badge">
                  <span className="demo-go-hero-badge-dot" />
                  Cuidado integral
                </div>

                <h1 className="demo-go-hero-title" id="hero-title">
                  Cuidando da sua saúde<br />
                  em{" "}
                  <span>cada fase da vida.</span>
                </h1>

                <p className="demo-go-hero-subtitle">
                  Da adolescência à menopausa, da gestação ao pós-parto. Meu consultório
                  é um espaço de escuta, confiança e cuidado — para que você se sinta
                  segura em todas as fases.
                </p>

                <div className="demo-go-hero-actions">
                  <a
                    href="#contato"
                    className="demo-go-btn demo-go-btn-primary"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                    </svg>
                    Agendar consulta
                  </a>
                  <a
                    href="#tratamentos"
                    className="demo-go-btn demo-go-btn-outline"
                  >
                    Conhecer serviços
                  </a>
                </div>

                <div className="demo-go-hero-stats">
                  <div className="demo-go-stat-item">
                    <span className="demo-go-stat-number">+2.000</span>
                    <span className="demo-go-stat-label">Partos realizados</span>
                  </div>
                  <div className="demo-go-stat-item">
                    <span className="demo-go-stat-number">15</span>
                    <span className="demo-go-stat-label">Anos de experiência</span>
                  </div>
                  <div className="demo-go-stat-item">
                    <span className="demo-go-stat-number">98%</span>
                    <span className="demo-go-stat-label">De satisfação</span>
                  </div>
                </div>
              </div>

              {/* Visual */}
              <div className="demo-go-hero-visual" aria-hidden="true">
                <div className="demo-go-hero-photo">
                  <Image
                    className="demo-go-hero-photo-img"
                    src="/images/demos/doctor-woman-smile.jpg"
                    alt="Dra. Carolina Ribeiro, ginecologista e obstetra"
                    width={340}
                    height={420}
                  />
                </div>

                {/* Floating cards */}
                <div className="demo-go-hero-card demo-go-hero-card-left">
                  <div className="demo-go-hero-card-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                    </svg>
                  </div>
                  <div className="demo-go-hero-card-text">
                    <span className="demo-go-hero-card-value">+2.000 partos</span>
                    <span className="demo-go-hero-card-desc">Nascimentos acompanhados</span>
                  </div>
                </div>

                <div className="demo-go-hero-card demo-go-hero-card-right">
                  <div className="demo-go-hero-card-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <div className="demo-go-hero-card-text">
                    <span className="demo-go-hero-card-value">FEBRASGO</span>
                    <span className="demo-go-hero-card-desc">Título de especialista</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SOBRE ── */}
        <section
          id="sobre"
          className="demo-go-sobre demo-go-section"
          aria-labelledby="sobre-title"
        >
          <div className="demo-go-container">
            <div className="demo-go-sobre-inner">
              {/* Photo column */}
              <div className="demo-go-sobre-photo-wrap demo-go-reveal">
                <div className="demo-go-sobre-photo">
                  <Image
                    className="demo-go-sobre-photo-img"
                    src="/images/demos/doctor-woman-smile.jpg"
                    alt="Dra. Carolina Ribeiro em seu consultório"
                    width={280}
                    height={340}
                  />
                </div>

                <div className="demo-go-crm-badge">
                  <span className="demo-go-crm-label">Registro médico</span>
                  <span className="demo-go-crm-value">CRM-SP 154.832</span>
                </div>
                <div className="demo-go-crm-badge">
                  <span className="demo-go-crm-label">Especialidade</span>
                  <span className="demo-go-crm-value">RQE 72.456</span>
                </div>
              </div>

              {/* Content column */}
              <div className="demo-go-sobre-content demo-go-reveal demo-go-reveal-delay-2">
                <div>
                  <span className="demo-go-eyebrow">Sobre a médica</span>
                  <h2 className="demo-go-section-title" id="sobre-title">
                    Dra. Carolina Ribeiro
                  </h2>
                  <p style={{ fontSize: "1.125rem", color: "#7C3AED", fontWeight: 600, marginBottom: 16 }}>
                    Ginecologista e Obstetra · CRM-SP 154.832 · RQE 72.456
                  </p>
                </div>

                <p className="demo-go-sobre-bio">
                  Acredito que toda mulher merece ser ouvida. Meu consultório é um espaço
                  seguro para você tirar dúvidas, fazer seus exames de rotina, planejar uma
                  gestação ou atravessar a menopausa com qualidade de vida.{" "}
                  <strong>Cada fase merece atenção</strong>, e por isso cada atendimento é
                  pensado individualmente, com respeito, empatia e transparência.
                </p>

                <p className="demo-go-sobre-bio">
                  Com 15 anos de experiência, formação pela USP e residência em GO no
                  Hospital das Clínicas da FMUSP, trago o que há de mais atual na
                  ginecologia e obstetrícia aliado a um atendimento profundamente
                  humanizado. Porque não existe protocolo que substitua o olhar atento
                  e a escuta sem pressa.
                </p>

                <div>
                  <p style={{ fontWeight: 600, fontSize: "0.9375rem", color: "#1A1A2E", marginBottom: 12 }}>
                    Formação e títulos
                  </p>
                  <ul className="demo-go-sobre-list">
                    {[
                      "Graduação em Medicina — Universidade de São Paulo (USP)",
                      "Residência em Ginecologia e Obstetrícia — HCFMUSP",
                      "TEGO — Título de Especialista em GO (FEBRASGO/AMB)",
                      "Membro da FEBRASGO (Federação Brasileira de Ginecologia e Obstetrícia)",
                      "Membro da SOGESP (Associação de Obstetrícia e Ginecologia de SP)",
                    ].map((item) => (
                      <li key={item}>
                        <span className="demo-go-check" aria-hidden="true">
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
                    Áreas de atuação
                  </p>
                  <div className="demo-go-tags">
                    {[
                      "Pré-natal",
                      "Parto Humanizado",
                      "Ginecologia Preventiva",
                      "Contracepção",
                      "Menopausa",
                      "Saúde da Adolescente",
                    ].map((tag) => (
                      <span key={tag} className="demo-go-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TRATAMENTOS ── */}
        <section
          id="tratamentos"
          className="demo-go-tratamentos demo-go-section"
          aria-labelledby="trat-title"
        >
          <div className="demo-go-container">
            <div className="demo-go-tratamentos-header">
              <span className="demo-go-eyebrow">Serviços</span>
              <h2 className="demo-go-section-title" id="trat-title">
                Cuidado para cada fase da sua vida
              </h2>
              <p className="demo-go-section-subtitle">
                Da primeira consulta ginecológica ao acompanhamento na menopausa.
                Cada atendimento é pensado para o seu momento — com escuta,
                respeito e ciência.
              </p>
            </div>

            <div className="demo-go-trat-grid">
              {treatments.map((trat, i) => (
                <article
                  key={trat.name}
                  className={`demo-go-trat-card demo-go-reveal demo-go-reveal-delay-${(i % 3) + 1}`}
                >
                  <div className="demo-go-trat-icon" aria-hidden="true">
                    {i === 0 && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <circle cx="12" cy="12" r="4" />
                        <line x1="12" y1="2" x2="12" y2="6" />
                        <line x1="12" y1="18" x2="12" y2="22" />
                        <line x1="2" y1="12" x2="6" y2="12" />
                        <line x1="18" y1="12" x2="22" y2="12" />
                      </svg>
                    )}
                    {i === 1 && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 8v8" />
                        <path d="M8 12h8" />
                      </svg>
                    )}
                    {i === 2 && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                      </svg>
                    )}
                    {i === 3 && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="6" width="20" height="12" rx="2" />
                        <path d="M12 6v12" />
                        <path d="M2 12h20" />
                      </svg>
                    )}
                    {i === 4 && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    )}
                    {i === 5 && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      </svg>
                    )}
                  </div>
                  <h3 className="demo-go-trat-name">{trat.name}</h3>
                  <p className="demo-go-trat-desc">{trat.desc}</p>
                  <span className="demo-go-trat-link">
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

        {/* ── JORNADA ── */}
        <section
          id="jornada"
          className="demo-go-jornada demo-go-section"
          aria-labelledby="jornada-title"
        >
          <div className="demo-go-container">
            <div className="demo-go-jornada-header">
              <span className="demo-go-eyebrow">Sua jornada</span>
              <h2 className="demo-go-section-title" id="jornada-title">
                Com você em cada etapa
              </h2>
              <p className="demo-go-section-subtitle">
                Saúde feminina é uma jornada, não um evento. Por isso, cada etapa
                do atendimento é pensada para que você se sinta segura, informada
                e acolhida — sempre.
              </p>
            </div>

            <div className="demo-go-timeline">
              {journeySteps.map((step, i) => (
                <div
                  key={step.title}
                  className={`demo-go-timeline-step demo-go-reveal demo-go-reveal-delay-${i + 1}`}
                >
                  <div className="demo-go-timeline-marker">
                    <span className="demo-go-timeline-number">{i + 1}</span>
                  </div>
                  <div className="demo-go-timeline-content">
                    <p className="demo-go-timeline-subtitle">{step.subtitle}</p>
                    <h3 className="demo-go-timeline-title">{step.title}</h3>
                    <p className="demo-go-timeline-desc">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PARA QUEM ── */}
        <section
          className="demo-go-paraquem demo-go-section"
          aria-labelledby="paraquem-title"
        >
          <div className="demo-go-container">
            <div className="demo-go-paraquem-header">
              <span className="demo-go-eyebrow">Para quem</span>
              <h2 className="demo-go-section-title" id="paraquem-title">
                Para mulheres em todas as fases
              </h2>
              <p className="demo-go-section-subtitle">
                Da adolescente que vem pela primeira vez à mulher que quer viver
                a menopausa com qualidade. Cada paciente é recebida com o mesmo
                cuidado e atenção.
              </p>
            </div>

            <div className="demo-go-paraquem-grid">
              {audiences.map((aud, i) => (
                <article
                  key={aud.name}
                  className={`demo-go-paraquem-card demo-go-reveal demo-go-reveal-delay-${i + 1}`}
                >
                  <div className="demo-go-paraquem-icon" aria-hidden="true">
                    {i === 0 && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 00-3-3.87" />
                        <path d="M16 3.13a4 4 0 010 7.75" />
                      </svg>
                    )}
                    {i === 1 && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                      </svg>
                    )}
                    {i === 2 && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    )}
                    {i === 3 && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    )}
                  </div>
                  <h3 className="demo-go-paraquem-name">{aud.name}</h3>
                  <p className="demo-go-paraquem-desc">{aud.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── DEPOIMENTOS ── */}
        <section
          id="depoimentos"
          className="demo-go-depoimentos demo-go-section"
          aria-labelledby="dep-title"
        >
          <div className="demo-go-container">
            <div className="demo-go-depoimentos-header">
              <span className="demo-go-eyebrow">Depoimentos</span>
              <h2 className="demo-go-section-title" id="dep-title">
                Quem confia na Dra. Carolina
              </h2>
              <p className="demo-go-section-subtitle">
                Histórias reais de pacientes que encontraram escuta, cuidado e
                confiança no consultório.
              </p>
            </div>

            <div className="demo-go-dep-grid">
              {testimonials.map((t, i) => (
                <article
                  key={t.name}
                  className={`demo-go-dep-card demo-go-reveal demo-go-reveal-delay-${i + 1}`}
                >
                  <div className="demo-go-dep-hearts" aria-label="5 corações">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                      </svg>
                    ))}
                  </div>

                  <blockquote>
                    <p className="demo-go-dep-quote">&ldquo;{t.quote}&rdquo;</p>
                  </blockquote>

                  <div className="demo-go-dep-author">
                    <div className="demo-go-dep-avatar" aria-hidden="true">
                      {t.initials}
                    </div>
                    <div className="demo-go-dep-info">
                      <span className="demo-go-dep-name">{t.name}</span>
                      <span className="demo-go-dep-detail">{t.detail}</span>
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
          className="demo-go-localizacao demo-go-section"
          aria-labelledby="loc-title"
        >
          <div className="demo-go-container">
            <div className="demo-go-loc-inner">
              {/* Info */}
              <div className="demo-go-loc-info demo-go-reveal">
                <div>
                  <span className="demo-go-eyebrow">Como chegar</span>
                  <h2 className="demo-go-section-title" id="loc-title">
                    Localização e horários
                  </h2>
                  <p className="demo-go-section-subtitle">
                    Nosso consultório foi pensado para receber você com todo o conforto
                    e acolhimento que esse momento merece.
                  </p>
                </div>

                <div className="demo-go-loc-block">
                  <div className="demo-go-loc-item">
                    <div className="demo-go-loc-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div className="demo-go-loc-text">
                      <span className="demo-go-loc-label">Endereço</span>
                      <span className="demo-go-loc-value">
                        Av. Brasil, 1200 — Sala 501<br />
                        Centro, Ribeirão Preto — SP<br />
                        CEP 14010-000
                      </span>
                    </div>
                  </div>

                  <div className="demo-go-loc-item">
                    <div className="demo-go-loc-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                      </svg>
                    </div>
                    <div className="demo-go-loc-text">
                      <span className="demo-go-loc-label">Telefone</span>
                      <span className="demo-go-loc-value">(16) 99999-0000</span>
                    </div>
                  </div>

                  <div className="demo-go-loc-item">
                    <div className="demo-go-loc-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                      </svg>
                    </div>
                    <div className="demo-go-loc-text">
                      <span className="demo-go-loc-label">WhatsApp</span>
                      <span className="demo-go-loc-value">(16) 99999-0001</span>
                    </div>
                  </div>
                </div>

                <div>
                  <p style={{ fontWeight: 600, fontSize: "0.9375rem", color: "#1A1A2E", marginBottom: 14 }}>
                    Horário de atendimento
                  </p>
                  <div className="demo-go-hours-grid">
                    <div className="demo-go-hours-row">
                      <span className="demo-go-hours-day">Seg — Sex</span>
                      <span className="demo-go-hours-time">08h — 18h</span>
                    </div>
                    <div className="demo-go-hours-row">
                      <span className="demo-go-hours-day">Sábado</span>
                      <span className="demo-go-hours-time">08h — 12h</span>
                    </div>
                    <div className="demo-go-hours-row">
                      <span className="demo-go-hours-day">Domingo</span>
                      <span className="demo-go-hours-time" style={{ color: "#7C3AED" }}>Fechado</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div
                className="demo-go-map-placeholder demo-go-reveal demo-go-reveal-delay-2"
                role="img"
                aria-label="Mapa com localização do consultório na Av. Brasil, 1200, Ribeirão Preto"
              >
                <div className="demo-go-map-bg" aria-hidden="true" />

                <div className="demo-go-map-pin" aria-hidden="true">
                  <div className="demo-go-map-pin-inner" />
                </div>

                <div className="demo-go-map-label">
                  <p className="demo-go-map-address">Av. Brasil, 1200 — Sala 501</p>
                  <p className="demo-go-map-city">Centro · Ribeirão Preto, SP</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTATO / CTA ── */}
        <section
          id="contato"
          className="demo-go-contato"
          aria-labelledby="cta-title"
        >
          <div className="demo-go-container">
            <div className="demo-go-contato-inner">
              <div className="demo-go-contato-eyebrow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
                Primeiro passo
              </div>

              <h2 className="demo-go-contato-title" id="cta-title">
                Vamos cuidar de você?
              </h2>

              <p className="demo-go-contato-subtitle">
                O primeiro passo é uma conversa, sem compromisso. Estou aqui para
                ouvir você, tirar suas dúvidas e começar a cuidar da sua saúde
                com a atenção que você merece. Quando estiver pronta, é só chamar.
              </p>

              <div className="demo-go-contato-actions">
                <a
                  href="https://wa.me/5516999990001"
                  className="demo-go-btn-whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Agendar consulta via WhatsApp"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Falar pelo WhatsApp
                </a>

                <a
                  href="#"
                  className="demo-go-btn demo-go-btn-white"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  (16) 99999-0000
                </a>
              </div>

              <p className="demo-go-contato-note">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                Primeiro passo sem compromisso. Estou aqui para ouvir.
              </p>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="demo-go-footer">
          <div className="demo-go-container">
            <div className="demo-go-footer-inner">
              {/* Brand */}
              <div>
                <p className="demo-go-footer-brand-name">Dra. Carolina Ribeiro</p>
                <p className="demo-go-footer-brand-specialty">Ginecologia e Obstetrícia</p>
                <p className="demo-go-footer-bio">
                  Consultório de ginecologia e obstetrícia em Ribeirão Preto.
                  Pré-natal, parto humanizado, ginecologia preventiva, contracepção
                  e menopausa com atendimento acolhedor e personalizado.
                </p>
                <p className="demo-go-footer-crm">CRM-SP 154.832 · RQE 72.456</p>
              </div>

              {/* Links */}
              <div>
                <p className="demo-go-footer-col-title">Navegação</p>
                <ul className="demo-go-footer-links" role="list">
                  <li><a href="#sobre">Sobre a médica</a></li>
                  <li><a href="#tratamentos">Serviços</a></li>
                  <li><a href="#jornada">Sua jornada</a></li>
                  <li><a href="#depoimentos">Depoimentos</a></li>
                  <li><a href="#localizacao">Localização</a></li>
                  <li><a href="#contato">Agendar consulta</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <p className="demo-go-footer-col-title">Contato</p>
                <div className="demo-go-footer-contact-item">
                  <span className="demo-go-footer-contact-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <span>Av. Brasil, 1200 — Sala 501<br />Centro · Ribeirão Preto, SP</span>
                </div>
                <div className="demo-go-footer-contact-item">
                  <span className="demo-go-footer-contact-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </span>
                  <span>(16) 99999-0000</span>
                </div>
                <div className="demo-go-footer-contact-item">
                  <span className="demo-go-footer-contact-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                    </svg>
                  </span>
                  <span>WhatsApp: (16) 99999-0001</span>
                </div>
                <div className="demo-go-footer-contact-item">
                  <span className="demo-go-footer-contact-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </span>
                  <span>Seg-Sex: 8h-18h · Sab: 8h-12h</span>
                </div>
              </div>
            </div>

            <div className="demo-go-footer-bottom">
              <p className="demo-go-footer-copy">
                © 2025 Dra. Carolina Ribeiro — Ginecologia e Obstetrícia. Todos os direitos reservados.
              </p>
              <p className="demo-go-footer-credit">
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
  var io = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('demo-go-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  function init() {
    var els = document.querySelectorAll('.demo-go-reveal');
    els.forEach(function(el) { io.observe(el); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
`,
          }}
        />
      </div>
    </>
  );
}

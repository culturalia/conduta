import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Dra. Juliana Mendes — Reprodução Humana | Ribeirão Preto",
  description:
    "Dra. Juliana Mendes, Especialista em Reprodução Humana em Ribeirão Preto. FIV, ICSI, preservação de fertilidade, inseminação artificial. Realizando o sonho de ser mãe e pai.",
};

const styles = `
/* ── RESET SCOPE ── */
.demo-fertil-root *,
.demo-fertil-root *::before,
.demo-fertil-root *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.demo-fertil-root {
  font-family: var(--font-inter), -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: #1A1A2E;
  background: #FAF5FF;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  line-height: 1.7;
}

.demo-fertil-root a {
  text-decoration: none;
  color: inherit;
}
.demo-fertil-root a[class*="btn-primary"] { color: #FFFFFF; }
.demo-fertil-root a[class*="btn-white"] { color: var(--violet); }

.demo-fertil-root img {
  max-width: 100%;
  display: block;
}

/* ── VARIABLES ── */
.demo-fertil-root {
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
.demo-fertil-container {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 24px;
}

.demo-fertil-section {
  padding: 96px 0;
}

.demo-fertil-section-sm {
  padding: 72px 0;
}

.demo-fertil-section-title {
  font-family: var(--font-work-sans), sans-serif;
  font-size: 2.25rem;
  font-weight: 700;
  color: var(--dark);
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 12px;
}

.demo-fertil-section-subtitle {
  font-size: 1.0625rem;
  color: var(--text-secondary);
  max-width: 560px;
  line-height: 1.7;
}

.demo-fertil-eyebrow {
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

.demo-fertil-eyebrow::before {
  content: "";
  display: inline-block;
  width: 24px;
  height: 2px;
  background: var(--violet);
  border-radius: 2px;
}

/* ── BUTTON ── */
.demo-fertil-btn {
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

.demo-fertil-btn-primary {
  background: var(--violet);
  color: var(--white);
}

.demo-fertil-btn-primary:hover {
  background: var(--violet-hover);
  transform: translateY(-1px);
  box-shadow: 0 6px 24px rgba(124, 58, 237, 0.3);
}

.demo-fertil-btn-outline {
  background: transparent;
  color: var(--violet);
  border: 2px solid var(--violet-border);
}

.demo-fertil-btn-outline:hover {
  background: var(--violet);
  color: var(--white);
  border-color: var(--violet);
  transform: translateY(-1px);
}

.demo-fertil-btn-white {
  background: var(--white);
  color: var(--violet);
}

.demo-fertil-btn-white:hover {
  background: var(--violet-light);
  transform: translateY(-1px);
}

/* ── NAVIGATION ── */
.demo-fertil-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(250, 245, 255, 0.92);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--violet-border);
}

.demo-fertil-nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

.demo-fertil-logo {
  display: flex;
  flex-direction: column;
  gap: 1px;
  text-decoration: none;
}

.demo-fertil-logo-name {
  font-family: var(--font-work-sans), sans-serif;
  font-size: 1.0625rem;
  font-weight: 700;
  color: var(--dark);
  line-height: 1.2;
  letter-spacing: -0.01em;
}

.demo-fertil-logo-specialty {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--violet);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.demo-fertil-nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;
}

.demo-fertil-nav-links a {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-secondary);
  transition: color 0.2s;
}

.demo-fertil-nav-links a:hover {
  color: var(--violet);
}

.demo-fertil-nav-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

/* ── HERO ── */
.demo-fertil-hero {
  background: linear-gradient(135deg, #FAF5FF 0%, #F3E8FF 30%, #FDF2F8 60%, #FAF5FF 100%);
  padding: 112px 0 96px;
  position: relative;
  overflow: hidden;
}

.demo-fertil-hero::before {
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

.demo-fertil-hero::after {
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

.demo-fertil-hero-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.demo-fertil-hero-badge {
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

.demo-fertil-hero-badge-dot {
  width: 8px;
  height: 8px;
  background: var(--violet);
  border-radius: 50%;
  flex-shrink: 0;
  animation: demo-fertil-pulse 2s ease-in-out infinite;
}

@keyframes demo-fertil-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.demo-fertil-hero-title {
  font-family: var(--font-work-sans), sans-serif;
  font-size: 3.25rem;
  font-weight: 800;
  color: var(--dark);
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin-bottom: 20px;
}

.demo-fertil-hero-title span {
  background: linear-gradient(135deg, var(--violet) 0%, var(--rose) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.demo-fertil-hero-subtitle {
  font-size: 1.125rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 36px;
  max-width: 480px;
}

.demo-fertil-hero-actions {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.demo-fertil-hero-stats {
  display: flex;
  gap: 36px;
  margin-top: 48px;
  padding-top: 32px;
  border-top: 1px solid var(--violet-border);
}

.demo-fertil-stat-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.demo-fertil-stat-number {
  font-family: var(--font-work-sans), sans-serif;
  font-size: 1.625rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--violet) 0%, var(--rose) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
}

.demo-fertil-stat-label {
  font-size: 0.8125rem;
  color: var(--text-muted);
  font-weight: 500;
}

/* Hero visual side */
.demo-fertil-hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.demo-fertil-hero-photo {
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

.demo-fertil-hero-photo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
}

.demo-fertil-hero-card {
  position: absolute;
  background: white;
  border-radius: 14px;
  padding: 14px 18px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  gap: 10px;
}

.demo-fertil-hero-card-left {
  bottom: 32px;
  left: -40px;
}

.demo-fertil-hero-card-right {
  top: 32px;
  right: -40px;
}

.demo-fertil-hero-card-icon {
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

.demo-fertil-hero-card-text {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.demo-fertil-hero-card-value {
  font-family: var(--font-work-sans), sans-serif;
  font-size: 0.9375rem;
  font-weight: 700;
  color: var(--dark);
  line-height: 1.2;
}

.demo-fertil-hero-card-desc {
  font-size: 0.75rem;
  color: var(--text-muted);
}

/* ── SOBRE ── */
.demo-fertil-sobre {
  background: var(--white);
}

.demo-fertil-sobre-inner {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 72px;
  align-items: center;
}

.demo-fertil-sobre-photo-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.demo-fertil-sobre-photo {
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

.demo-fertil-sobre-photo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
}

.demo-fertil-crm-badge {
  background: var(--violet-light);
  border: 1px solid var(--violet-border);
  border-radius: 10px;
  padding: 10px 20px;
  text-align: center;
}

.demo-fertil-crm-label {
  font-size: 0.75rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 500;
  display: block;
}

.demo-fertil-crm-value {
  font-family: var(--font-work-sans), sans-serif;
  font-size: 0.9375rem;
  font-weight: 700;
  color: var(--violet);
  display: block;
  margin-top: 2px;
}

.demo-fertil-sobre-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.demo-fertil-sobre-bio {
  font-size: 1.0625rem;
  color: var(--text-secondary);
  line-height: 1.8;
}

.demo-fertil-sobre-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 4px;
}

.demo-fertil-sobre-list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 0.9375rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

.demo-fertil-check {
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

.demo-fertil-check svg {
  width: 11px;
  height: 11px;
  color: var(--violet);
}

.demo-fertil-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
}

.demo-fertil-tag {
  background: var(--violet-light);
  border: 1px solid var(--violet-border);
  color: #5B21B6;
  font-size: 0.8125rem;
  font-weight: 500;
  padding: 5px 14px;
  border-radius: 100px;
}

/* ── TRATAMENTOS ── */
.demo-fertil-tratamentos {
  background: var(--bg);
}

.demo-fertil-tratamentos-header {
  text-align: center;
  margin-bottom: 56px;
}

.demo-fertil-tratamentos-header .demo-fertil-section-subtitle {
  margin: 0 auto;
}

.demo-fertil-trat-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.demo-fertil-trat-card {
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

.demo-fertil-trat-card::before {
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

.demo-fertil-trat-card:hover {
  box-shadow: var(--shadow-hover);
  border-color: var(--violet-border);
  transform: translateY(-4px);
}

.demo-fertil-trat-card:hover::before {
  transform: scaleX(1);
}

.demo-fertil-trat-icon {
  width: 52px;
  height: 52px;
  background: var(--violet-light);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.demo-fertil-trat-icon svg {
  width: 24px;
  height: 24px;
  color: var(--violet);
}

.demo-fertil-trat-name {
  font-family: var(--font-work-sans), sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 8px;
  line-height: 1.3;
}

.demo-fertil-trat-desc {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.7;
}

.demo-fertil-trat-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 16px;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--violet);
  transition: gap 0.2s;
}

.demo-fertil-trat-card:hover .demo-fertil-trat-link {
  gap: 10px;
}

/* ── JORNADA ── */
.demo-fertil-jornada {
  background: var(--white);
}

.demo-fertil-jornada-header {
  text-align: center;
  margin-bottom: 64px;
}

.demo-fertil-jornada-header .demo-fertil-section-subtitle {
  margin: 0 auto;
}

.demo-fertil-timeline {
  display: flex;
  flex-direction: column;
  gap: 0;
  position: relative;
  max-width: 720px;
  margin: 0 auto;
}

.demo-fertil-timeline::before {
  content: "";
  position: absolute;
  left: 28px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, var(--violet) 0%, var(--rose) 100%);
  border-radius: 2px;
}

.demo-fertil-timeline-step {
  display: flex;
  gap: 28px;
  align-items: flex-start;
  position: relative;
  padding-bottom: 40px;
}

.demo-fertil-timeline-step:last-child {
  padding-bottom: 0;
}

.demo-fertil-timeline-marker {
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

.demo-fertil-timeline-number {
  font-family: var(--font-work-sans), sans-serif;
  font-size: 1.125rem;
  font-weight: 800;
  color: var(--white);
}

.demo-fertil-timeline-content {
  padding-top: 8px;
  flex: 1;
}

.demo-fertil-timeline-title {
  font-family: var(--font-work-sans), sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 6px;
  line-height: 1.3;
}

.demo-fertil-timeline-subtitle {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--violet);
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.demo-fertil-timeline-desc {
  font-size: 0.9375rem;
  color: var(--text-secondary);
  line-height: 1.7;
}

/* ── PARA QUEM ── */
.demo-fertil-paraquem {
  background: var(--accent-bg);
}

.demo-fertil-paraquem-header {
  text-align: center;
  margin-bottom: 56px;
}

.demo-fertil-paraquem-header .demo-fertil-section-subtitle {
  margin: 0 auto;
}

.demo-fertil-paraquem-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.demo-fertil-paraquem-card {
  background: var(--white);
  border-radius: var(--radius);
  padding: 32px 24px;
  text-align: center;
  box-shadow: var(--shadow-card);
  border: 1px solid transparent;
  transition: all 0.3s ease;
}

.demo-fertil-paraquem-card:hover {
  border-color: var(--violet-border);
  box-shadow: var(--shadow-hover);
  transform: translateY(-3px);
}

.demo-fertil-paraquem-icon {
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: linear-gradient(135deg, var(--violet-light) 0%, var(--rose-light) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 18px;
}

.demo-fertil-paraquem-icon svg {
  width: 28px;
  height: 28px;
  color: var(--violet);
}

.demo-fertil-paraquem-name {
  font-family: var(--font-work-sans), sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 8px;
  line-height: 1.3;
}

.demo-fertil-paraquem-desc {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* ── DEPOIMENTOS ── */
.demo-fertil-depoimentos {
  background: var(--white);
}

.demo-fertil-depoimentos-header {
  text-align: center;
  margin-bottom: 56px;
}

.demo-fertil-depoimentos-header .demo-fertil-section-subtitle {
  margin: 0 auto;
}

.demo-fertil-dep-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.demo-fertil-dep-card {
  background: linear-gradient(145deg, var(--violet-light) 0%, var(--rose-light) 100%);
  border: 1px solid var(--violet-border);
  border-radius: var(--radius);
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: all 0.3s ease;
}

.demo-fertil-dep-card:hover {
  box-shadow: var(--shadow-hover);
  transform: translateY(-3px);
}

.demo-fertil-dep-hearts {
  display: flex;
  gap: 4px;
  color: var(--rose);
  font-size: 0.875rem;
}

.demo-fertil-dep-quote {
  font-size: 0.9375rem;
  color: var(--dark);
  line-height: 1.75;
  font-style: italic;
  flex: 1;
}

.demo-fertil-dep-author {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-top: 16px;
  border-top: 1px solid var(--violet-border);
}

.demo-fertil-dep-avatar {
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

.demo-fertil-dep-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.demo-fertil-dep-name {
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--dark);
  line-height: 1.3;
}

.demo-fertil-dep-detail {
  font-size: 0.8rem;
  color: var(--text-muted);
}

/* ── LOCALIZAÇÃO ── */
.demo-fertil-localizacao {
  background: var(--bg);
}

.demo-fertil-loc-inner {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 56px;
  align-items: start;
}

.demo-fertil-loc-info {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.demo-fertil-loc-block {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.demo-fertil-loc-item {
  display: flex;
  gap: 14px;
  align-items: flex-start;
}

.demo-fertil-loc-icon {
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

.demo-fertil-loc-icon svg {
  width: 18px;
  height: 18px;
  color: var(--violet);
}

.demo-fertil-loc-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.demo-fertil-loc-label {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.demo-fertil-loc-value {
  font-size: 0.9375rem;
  color: var(--dark);
  font-weight: 500;
  line-height: 1.5;
}

.demo-fertil-hours-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-top: 4px;
}

.demo-fertil-hours-row {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.demo-fertil-hours-day {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.demo-fertil-hours-time {
  font-size: 0.9375rem;
  color: var(--dark);
  font-weight: 500;
}

.demo-fertil-map-placeholder {
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

.demo-fertil-map-bg {
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

.demo-fertil-map-pin {
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

.demo-fertil-map-pin-inner {
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 50%;
  transform: rotate(45deg);
}

.demo-fertil-map-label {
  position: relative;
  z-index: 1;
  background: white;
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 10px 18px;
  text-align: center;
  box-shadow: var(--shadow-card);
}

.demo-fertil-map-address {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--dark);
}

.demo-fertil-map-city {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-top: 2px;
}

/* ── CONTATO / CTA ── */
.demo-fertil-contato {
  background: linear-gradient(135deg, var(--violet) 0%, var(--violet-dark) 40%, var(--rose) 100%);
  padding: 96px 0;
  position: relative;
  overflow: hidden;
}

.demo-fertil-contato::before {
  content: "";
  position: absolute;
  top: -50%;
  right: -10%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%);
  border-radius: 50%;
}

.demo-fertil-contato::after {
  content: "";
  position: absolute;
  bottom: -30%;
  left: -5%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%);
  border-radius: 50%;
}

.demo-fertil-contato-inner {
  text-align: center;
  position: relative;
  z-index: 1;
  max-width: 640px;
  margin: 0 auto;
}

.demo-fertil-contato-eyebrow {
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

.demo-fertil-contato-title {
  font-family: var(--font-work-sans), sans-serif;
  font-size: 2.625rem;
  font-weight: 800;
  color: white;
  line-height: 1.15;
  letter-spacing: -0.025em;
  margin-bottom: 16px;
}

.demo-fertil-contato-subtitle {
  font-size: 1.0625rem;
  color: rgba(255,255,255,0.85);
  line-height: 1.7;
  margin-bottom: 40px;
}

.demo-fertil-contato-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.demo-fertil-btn-whatsapp {
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

.demo-fertil-btn-whatsapp:hover {
  background: #1DAA54;
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(37, 211, 102, 0.35);
}

.demo-fertil-contato-note {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: rgba(255,255,255,0.7);
  font-size: 0.875rem;
  margin-top: 20px;
}

/* ── FOOTER ── */
.demo-fertil-footer {
  background: var(--dark);
  padding: 56px 0 36px;
}

.demo-fertil-footer-inner {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 48px;
  padding-bottom: 48px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}

.demo-fertil-footer-brand-name {
  font-family: var(--font-work-sans), sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  color: white;
  line-height: 1.3;
}

.demo-fertil-footer-brand-specialty {
  font-size: 0.8125rem;
  color: var(--violet);
  font-weight: 500;
  letter-spacing: 0.04em;
  margin-top: 2px;
}

.demo-fertil-footer-bio {
  font-size: 0.875rem;
  color: rgba(255,255,255,0.5);
  line-height: 1.65;
  margin-top: 14px;
  max-width: 300px;
}

.demo-fertil-footer-crm {
  font-size: 0.8125rem;
  color: rgba(255,255,255,0.35);
  margin-top: 10px;
}

.demo-fertil-footer-col-title {
  font-family: var(--font-work-sans), sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  margin-bottom: 16px;
}

.demo-fertil-footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.demo-fertil-footer-links a {
  font-size: 0.875rem;
  color: rgba(255,255,255,0.5);
  transition: color 0.2s;
}

.demo-fertil-footer-links a:hover {
  color: var(--violet);
}

.demo-fertil-footer-contact-item {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 0.875rem;
  color: rgba(255,255,255,0.5);
  line-height: 1.5;
  margin-bottom: 10px;
}

.demo-fertil-footer-contact-icon {
  font-size: 0.9rem;
  margin-top: 1px;
  flex-shrink: 0;
}

.demo-fertil-footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 28px;
  flex-wrap: wrap;
  gap: 12px;
}

.demo-fertil-footer-copy {
  font-size: 0.8125rem;
  color: rgba(255,255,255,0.3);
}

.demo-fertil-footer-credit {
  font-size: 0.8125rem;
  color: rgba(255,255,255,0.4);
}

.demo-fertil-footer-credit a {
  color: var(--violet);
  font-weight: 600;
  transition: opacity 0.2s;
}

.demo-fertil-footer-credit a:hover {
  opacity: 0.8;
}

/* ── REVEAL ANIMATIONS ── */
.demo-fertil-reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.demo-fertil-reveal.demo-fertil-visible {
  opacity: 1;
  transform: translateY(0);
}

.demo-fertil-reveal-delay-1 { transition-delay: 0.1s; }
.demo-fertil-reveal-delay-2 { transition-delay: 0.2s; }
.demo-fertil-reveal-delay-3 { transition-delay: 0.3s; }
.demo-fertil-reveal-delay-4 { transition-delay: 0.4s; }
.demo-fertil-reveal-delay-5 { transition-delay: 0.5s; }
.demo-fertil-reveal-delay-6 { transition-delay: 0.6s; }

/* ── RESPONSIVE ── */
@media (max-width: 768px) {
  .demo-fertil-section {
    padding: 64px 0;
  }

  .demo-fertil-section-sm {
    padding: 48px 0;
  }

  .demo-fertil-section-title {
    font-size: 1.75rem;
  }

  /* Nav */
  .demo-fertil-nav-links {
    display: none;
  }

  .demo-fertil-nav-inner {
    height: 64px;
  }

  /* Hero */
  .demo-fertil-hero {
    padding: 64px 0 56px;
  }

  .demo-fertil-hero-inner {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }

  .demo-fertil-hero-title {
    font-size: 2.125rem;
  }

  .demo-fertil-hero-subtitle {
    margin: 0 auto 36px;
  }

  .demo-fertil-hero-actions {
    justify-content: center;
  }

  .demo-fertil-hero-stats {
    justify-content: center;
    gap: 24px;
  }

  .demo-fertil-hero-visual {
    order: -1;
  }

  .demo-fertil-hero-photo {
    width: 240px;
    height: 300px;
  }

  .demo-fertil-hero-card-left,
  .demo-fertil-hero-card-right {
    display: none;
  }

  /* Sobre */
  .demo-fertil-sobre-inner {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }

  .demo-fertil-sobre-list li {
    text-align: left;
  }

  .demo-fertil-tags {
    justify-content: center;
  }

  /* Tratamentos */
  .demo-fertil-trat-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  /* Jornada */
  .demo-fertil-timeline::before {
    left: 20px;
  }

  .demo-fertil-timeline-marker {
    width: 40px;
    height: 40px;
  }

  .demo-fertil-timeline-number {
    font-size: 0.9375rem;
  }

  .demo-fertil-timeline-step {
    gap: 18px;
  }

  /* Para Quem */
  .demo-fertil-paraquem-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  /* Depoimentos */
  .demo-fertil-dep-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  /* Localização */
  .demo-fertil-loc-inner {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .demo-fertil-map-placeholder {
    height: 280px;
  }

  /* CTA */
  .demo-fertil-contato-title {
    font-size: 2rem;
  }

  /* Footer */
  .demo-fertil-footer-inner {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .demo-fertil-footer-bottom {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .demo-fertil-trat-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .demo-fertil-paraquem-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .demo-fertil-hero-title {
    font-size: 2.5rem;
  }
}
`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dra. Juliana Mendes",
  description:
    "Especialista em Reprodução Humana em Ribeirão Preto. FIV, ICSI, preservação de fertilidade, inseminação artificial. Atendimento humanizado e personalizado.",
  medicalSpecialty: "Reproductive Medicine",
  identifier: [
    {
      "@type": "PropertyValue",
      name: "CRM",
      value: "CRM/SP 567890",
    },
    {
      "@type": "PropertyValue",
      name: "RQE",
      value: "RQE 23456",
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
  url: "https://drajulianamendes.com.br",
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
    name: "Fertilização In Vitro (FIV)",
    desc: "A FIV é o tratamento mais avançado de reprodução assistida, indicada para diversos casos de infertilidade. Acompanhamos cada etapa com carinho e transparência.",
  },
  {
    name: "Injeção Intracitoplasmática (ICSI)",
    desc: "Técnica de alta precisão onde o espermatozoide é selecionado e injetado diretamente no óvulo, aumentando significativamente as chances de fertilização.",
  },
  {
    name: "Inseminação Artificial",
    desc: "Procedimento menos invasivo, ideal para casais com causas leves de infertilidade. Os espermatozoides são preparados e colocados diretamente no útero.",
  },
  {
    name: "Preservação de Fertilidade",
    desc: "Congelamento de óvulos para preservar sua fertilidade para o futuro. Indicado para mulheres que desejam adiar a maternidade com segurança.",
  },
  {
    name: "Doação de Óvulos",
    desc: "Programa de ovodoação que possibilita a gestação para mulheres com baixa reserva ovariana ou outras indicações, com total sigilo e acolhimento.",
  },
  {
    name: "Investigação de Infertilidade",
    desc: "Avaliação completa e individualizada do casal, com exames específicos para identificar as causas e definir o melhor caminho para o tratamento.",
  },
];

const journeySteps = [
  {
    title: "Consulta Inicial",
    subtitle: "Acolhimento e escuta",
    desc: "O primeiro passo é uma conversa sincera. Queremos ouvir sua história, entender seus desejos e acolher suas emoções. Aqui, você não é um número — é uma pessoa com um sonho.",
  },
  {
    title: "Investigação",
    subtitle: "Exames e diagnóstico",
    desc: "Com delicadeza e precisão, realizamos os exames necessários para compreender o cenário completo. Cada resultado é explicado com clareza, sem jargões, com toda a paciência que você merece.",
  },
  {
    title: "Planejamento",
    subtitle: "Tratamento personalizado",
    desc: "Juntos, desenhamos o plano de tratamento mais adequado para a sua realidade. Não existe receita pronta — cada história é única e cada plano é feito sob medida.",
  },
  {
    title: "Tratamento",
    subtitle: "Acompanhamento próximo",
    desc: "Durante todo o tratamento, estamos ao seu lado. Cada consulta, cada exame, cada etapa — você terá suporte médico e emocional. Nosso telefone está sempre aberto para suas dúvidas.",
  },
  {
    title: "Resultado",
    subtitle: "Celebramos juntos",
    desc: "O momento que todos esperamos. Seja qual for o resultado, estaremos com você. E quando o positivo chega... não existe alegria maior do que compartilhar esse momento.",
  },
];

const audiences = [
  {
    name: "Casais Heterossexuais",
    desc: "Investigação completa e tratamentos personalizados para casais que buscam realizar o sonho da gestação.",
  },
  {
    name: "Casais Homoafetivos",
    desc: "Acolhimento e suporte especializado com protocolos adaptados para casais do mesmo sexo que desejam formar sua família.",
  },
  {
    name: "Produção Independente",
    desc: "Apoio integral para mulheres que escolhem a maternidade solo, com todo o carinho e respeito pela sua decisão.",
  },
  {
    name: "Preservação de Fertilidade",
    desc: "Para quem deseja adiar a maternidade ou paternidade e quer preservar suas chances futuras com segurança.",
  },
];

const testimonials = [
  {
    initials: "CM",
    name: "Camila e Marcos R.",
    detail: "Pais do Theo, nascido em 2024",
    quote:
      "Após 3 tentativas e muitas lágrimas, a Dra. Juliana nunca nos deixou desistir. Ela segurava nossas mãos e dizia: 'confiem no processo'. Hoje, nosso Theo tem 1 ano e cada sorriso dele é a prova de que valeu cada segundo. Obrigada por acreditar quando nós quase paramos de acreditar.",
  },
  {
    initials: "FS",
    name: "Fernanda S.",
    detail: "Mãe da Valentina, produção independente",
    quote:
      "Aos 38 anos, tomei a decisão mais corajosa da minha vida: ser mãe sozinha. A Dra. Juliana não apenas me deu suporte médico — ela me deu coragem. Nunca me senti julgada, só acolhida. A Valentina nasceu em março e eu nunca fui tão feliz. Esse consultório muda vidas.",
  },
  {
    initials: "RA",
    name: "Renata e Amanda L.",
    detail: "Mães do Bento, nascido em 2025",
    quote:
      "Como casal homoafetivo, tínhamos medo de não sermos bem recebidas. A Dra. Juliana desfez todos os nossos medos na primeira consulta. O tratamento foi leve, humano e respeitoso. Nosso Bento é a prova de que família é amor, independente da forma. Gratidão eterna.",
  },
];

export default function FertilidadeDemoPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="demo-fertil-root">
        {/* ── NAV ── */}
        <nav className="demo-fertil-nav" aria-label="Navegação principal">
          <div className="demo-fertil-container">
            <div className="demo-fertil-nav-inner">
              <a href="#" className="demo-fertil-logo" aria-label="Início">
                <span className="demo-fertil-logo-name">Dra. Juliana Mendes</span>
                <span className="demo-fertil-logo-specialty">Reprodução Humana</span>
              </a>

              <ul className="demo-fertil-nav-links" role="list">
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

              <div className="demo-fertil-nav-right">
                <a
                  href="#contato"
                  className="demo-fertil-btn demo-fertil-btn-primary"
                  style={{ padding: "10px 22px", fontSize: "0.875rem" }}
                >
                  Agendar consulta
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* ── HERO ── */}
        <section className="demo-fertil-hero" aria-labelledby="hero-title">
          <div className="demo-fertil-container">
            <div className="demo-fertil-hero-inner">
              {/* Content */}
              <div>
                <div className="demo-fertil-hero-badge">
                  <span className="demo-fertil-hero-badge-dot" />
                  Atendimento humanizado
                </div>

                <h1 className="demo-fertil-hero-title" id="hero-title">
                  Realizando o sonho<br />
                  de ser{" "}
                  <span>mãe e pai</span>
                </h1>

                <p className="demo-fertil-hero-subtitle">
                  Cada família tem uma história. A nossa missão é caminhar ao seu lado,
                  com empatia, ciência e carinho, para que o sonho de ter um filho
                  se torne realidade.
                </p>

                <div className="demo-fertil-hero-actions">
                  <a
                    href="#contato"
                    className="demo-fertil-btn demo-fertil-btn-primary"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                    </svg>
                    Agendar consulta
                  </a>
                  <a
                    href="#tratamentos"
                    className="demo-fertil-btn demo-fertil-btn-outline"
                  >
                    Conhecer tratamentos
                  </a>
                </div>

                <div className="demo-fertil-hero-stats">
                  <div className="demo-fertil-stat-item">
                    <span className="demo-fertil-stat-number">+800</span>
                    <span className="demo-fertil-stat-label">Bebês nascidos</span>
                  </div>
                  <div className="demo-fertil-stat-item">
                    <span className="demo-fertil-stat-number">12</span>
                    <span className="demo-fertil-stat-label">Anos de experiência</span>
                  </div>
                  <div className="demo-fertil-stat-item">
                    <span className="demo-fertil-stat-number">97%</span>
                    <span className="demo-fertil-stat-label">De satisfação</span>
                  </div>
                </div>
              </div>

              {/* Visual */}
              <div className="demo-fertil-hero-visual" aria-hidden="true">
                <div className="demo-fertil-hero-photo">
                  <Image
                    className="demo-fertil-hero-photo-img"
                    src="/images/demos/doctor-tablet.jpg"
                    alt="Dra. Juliana Mendes, especialista em reprodução humana"
                    width={340}
                    height={420}
                  />
                </div>

                {/* Floating cards */}
                <div className="demo-fertil-hero-card demo-fertil-hero-card-left">
                  <div className="demo-fertil-hero-card-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                    </svg>
                  </div>
                  <div className="demo-fertil-hero-card-text">
                    <span className="demo-fertil-hero-card-value">+800 bebês</span>
                    <span className="demo-fertil-hero-card-desc">Sonhos realizados</span>
                  </div>
                </div>

                <div className="demo-fertil-hero-card demo-fertil-hero-card-right">
                  <div className="demo-fertil-hero-card-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <div className="demo-fertil-hero-card-text">
                    <span className="demo-fertil-hero-card-value">SBRA</span>
                    <span className="demo-fertil-hero-card-desc">Membro certificado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SOBRE ── */}
        <section
          id="sobre"
          className="demo-fertil-sobre demo-fertil-section"
          aria-labelledby="sobre-title"
        >
          <div className="demo-fertil-container">
            <div className="demo-fertil-sobre-inner">
              {/* Photo column */}
              <div className="demo-fertil-sobre-photo-wrap demo-fertil-reveal">
                <div className="demo-fertil-sobre-photo">
                  <Image
                    className="demo-fertil-sobre-photo-img"
                    src="/images/demos/doctor-tablet.jpg"
                    alt="Dra. Juliana Mendes em seu consultório"
                    width={280}
                    height={340}
                  />
                </div>

                <div className="demo-fertil-crm-badge">
                  <span className="demo-fertil-crm-label">Registro médico</span>
                  <span className="demo-fertil-crm-value">CRM/SP 567890</span>
                </div>
                <div className="demo-fertil-crm-badge">
                  <span className="demo-fertil-crm-label">Especialidade</span>
                  <span className="demo-fertil-crm-value">RQE 23456</span>
                </div>
              </div>

              {/* Content column */}
              <div className="demo-fertil-sobre-content demo-fertil-reveal demo-fertil-reveal-delay-2">
                <div>
                  <span className="demo-fertil-eyebrow">Sobre a médica</span>
                  <h2 className="demo-fertil-section-title" id="sobre-title">
                    Dra. Juliana Mendes
                  </h2>
                  <p style={{ fontSize: "1.125rem", color: "#7C3AED", fontWeight: 600, marginBottom: 16 }}>
                    Especialista em Reprodução Humana · CRM/SP 567890 · RQE 23456
                  </p>
                </div>

                <p className="demo-fertil-sobre-bio">
                  Para mim, medicina reprodutiva vai muito além da ciência — é sobre
                  esperança. Cada casal, cada pessoa que chega ao consultório traz consigo
                  um sonho, e eu tenho o privilégio de caminhar junto nessa jornada.
                  Acredito que <strong>cada história é única</strong>, e por isso cada
                  tratamento precisa ser pensado individualmente, com respeito, empatia
                  e transparência total.
                </p>

                <p className="demo-fertil-sobre-bio">
                  Com 12 anos de experiência em reprodução humana, formação pela USP e
                  residência no Hospital das Clínicas da FMUSP, trago o que há de mais
                  moderno na ciência reprodutiva aliado a um atendimento profundamente
                  humanizado. Porque não existe protocolo que substitua o olhar atento
                  e a escuta genuína.
                </p>

                <div>
                  <p style={{ fontWeight: 600, fontSize: "0.9375rem", color: "#1A1A2E", marginBottom: 12 }}>
                    Formação e títulos
                  </p>
                  <ul className="demo-fertil-sobre-list">
                    {[
                      "Graduação em Medicina — Universidade de São Paulo (USP)",
                      "Residência em Ginecologia e Obstetrícia — HCFMUSP",
                      "Especialização em Reprodução Humana — HCFMUSP",
                      "Membro da SBRA (Sociedade Brasileira de Reprodução Assistida)",
                      "Membro da ESHRE (European Society of Human Reproduction)",
                    ].map((item) => (
                      <li key={item}>
                        <span className="demo-fertil-check" aria-hidden="true">
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
                  <div className="demo-fertil-tags">
                    {[
                      "Fertilização In Vitro",
                      "ICSI",
                      "Inseminação Artificial",
                      "Preservação de Fertilidade",
                      "Doação de Óvulos",
                      "Investigação de Infertilidade",
                    ].map((tag) => (
                      <span key={tag} className="demo-fertil-tag">{tag}</span>
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
          className="demo-fertil-tratamentos demo-fertil-section"
          aria-labelledby="trat-title"
        >
          <div className="demo-fertil-container">
            <div className="demo-fertil-tratamentos-header">
              <span className="demo-fertil-eyebrow">Tratamentos</span>
              <h2 className="demo-fertil-section-title" id="trat-title">
                Caminhos para realizar o seu sonho
              </h2>
              <p className="demo-fertil-section-subtitle">
                Cada caso é único. Oferecemos diferentes tratamentos de reprodução
                assistida, sempre com transparência sobre as possibilidades e o
                acompanhamento que você merece.
              </p>
            </div>

            <div className="demo-fertil-trat-grid">
              {treatments.map((trat, i) => (
                <article
                  key={trat.name}
                  className={`demo-fertil-trat-card demo-fertil-reveal demo-fertil-reveal-delay-${(i % 3) + 1}`}
                >
                  <div className="demo-fertil-trat-icon" aria-hidden="true">
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
                  <h3 className="demo-fertil-trat-name">{trat.name}</h3>
                  <p className="demo-fertil-trat-desc">{trat.desc}</p>
                  <span className="demo-fertil-trat-link">
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
          className="demo-fertil-jornada demo-fertil-section"
          aria-labelledby="jornada-title"
        >
          <div className="demo-fertil-container">
            <div className="demo-fertil-jornada-header">
              <span className="demo-fertil-eyebrow">Sua jornada</span>
              <h2 className="demo-fertil-section-title" id="jornada-title">
                Estamos com você em cada etapa
              </h2>
              <p className="demo-fertil-section-subtitle">
                Sabemos que a jornada da reprodução assistida envolve muitas emoções.
                Por isso, criamos um processo pensado para que você se sinta segura,
                informada e acolhida do início ao fim.
              </p>
            </div>

            <div className="demo-fertil-timeline">
              {journeySteps.map((step, i) => (
                <div
                  key={step.title}
                  className={`demo-fertil-timeline-step demo-fertil-reveal demo-fertil-reveal-delay-${i + 1}`}
                >
                  <div className="demo-fertil-timeline-marker">
                    <span className="demo-fertil-timeline-number">{i + 1}</span>
                  </div>
                  <div className="demo-fertil-timeline-content">
                    <p className="demo-fertil-timeline-subtitle">{step.subtitle}</p>
                    <h3 className="demo-fertil-timeline-title">{step.title}</h3>
                    <p className="demo-fertil-timeline-desc">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PARA QUEM ── */}
        <section
          className="demo-fertil-paraquem demo-fertil-section"
          aria-labelledby="paraquem-title"
        >
          <div className="demo-fertil-container">
            <div className="demo-fertil-paraquem-header">
              <span className="demo-fertil-eyebrow">Para quem</span>
              <h2 className="demo-fertil-section-title" id="paraquem-title">
                Cada família tem sua história
              </h2>
              <p className="demo-fertil-section-subtitle">
                Não importa como sua família será formada — o que importa é o amor.
                Recebemos todas as pessoas com o mesmo respeito e dedicação.
              </p>
            </div>

            <div className="demo-fertil-paraquem-grid">
              {audiences.map((aud, i) => (
                <article
                  key={aud.name}
                  className={`demo-fertil-paraquem-card demo-fertil-reveal demo-fertil-reveal-delay-${i + 1}`}
                >
                  <div className="demo-fertil-paraquem-icon" aria-hidden="true">
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
                  <h3 className="demo-fertil-paraquem-name">{aud.name}</h3>
                  <p className="demo-fertil-paraquem-desc">{aud.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── DEPOIMENTOS ── */}
        <section
          id="depoimentos"
          className="demo-fertil-depoimentos demo-fertil-section"
          aria-labelledby="dep-title"
        >
          <div className="demo-fertil-container">
            <div className="demo-fertil-depoimentos-header">
              <span className="demo-fertil-eyebrow">Depoimentos</span>
              <h2 className="demo-fertil-section-title" id="dep-title">
                Histórias que nos emocionam
              </h2>
              <p className="demo-fertil-section-subtitle">
                Cada bebê que nasce é uma história de coragem, persistência e amor.
                Estas são algumas das famílias que confiaram em nós.
              </p>
            </div>

            <div className="demo-fertil-dep-grid">
              {testimonials.map((t, i) => (
                <article
                  key={t.name}
                  className={`demo-fertil-dep-card demo-fertil-reveal demo-fertil-reveal-delay-${i + 1}`}
                >
                  <div className="demo-fertil-dep-hearts" aria-label="5 corações">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                      </svg>
                    ))}
                  </div>

                  <blockquote>
                    <p className="demo-fertil-dep-quote">&ldquo;{t.quote}&rdquo;</p>
                  </blockquote>

                  <div className="demo-fertil-dep-author">
                    <div className="demo-fertil-dep-avatar" aria-hidden="true">
                      {t.initials}
                    </div>
                    <div className="demo-fertil-dep-info">
                      <span className="demo-fertil-dep-name">{t.name}</span>
                      <span className="demo-fertil-dep-detail">{t.detail}</span>
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
          className="demo-fertil-localizacao demo-fertil-section"
          aria-labelledby="loc-title"
        >
          <div className="demo-fertil-container">
            <div className="demo-fertil-loc-inner">
              {/* Info */}
              <div className="demo-fertil-loc-info demo-fertil-reveal">
                <div>
                  <span className="demo-fertil-eyebrow">Como chegar</span>
                  <h2 className="demo-fertil-section-title" id="loc-title">
                    Localização e horários
                  </h2>
                  <p className="demo-fertil-section-subtitle">
                    Nosso consultório foi pensado para receber você com todo o conforto
                    e acolhimento que esse momento merece.
                  </p>
                </div>

                <div className="demo-fertil-loc-block">
                  <div className="demo-fertil-loc-item">
                    <div className="demo-fertil-loc-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div className="demo-fertil-loc-text">
                      <span className="demo-fertil-loc-label">Endereço</span>
                      <span className="demo-fertil-loc-value">
                        Av. Brasil, 1200 — Sala 501<br />
                        Centro, Ribeirão Preto — SP<br />
                        CEP 14010-000
                      </span>
                    </div>
                  </div>

                  <div className="demo-fertil-loc-item">
                    <div className="demo-fertil-loc-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                      </svg>
                    </div>
                    <div className="demo-fertil-loc-text">
                      <span className="demo-fertil-loc-label">Telefone</span>
                      <span className="demo-fertil-loc-value">(16) 99999-0000</span>
                    </div>
                  </div>

                  <div className="demo-fertil-loc-item">
                    <div className="demo-fertil-loc-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                      </svg>
                    </div>
                    <div className="demo-fertil-loc-text">
                      <span className="demo-fertil-loc-label">WhatsApp</span>
                      <span className="demo-fertil-loc-value">(16) 99999-0001</span>
                    </div>
                  </div>
                </div>

                <div>
                  <p style={{ fontWeight: 600, fontSize: "0.9375rem", color: "#1A1A2E", marginBottom: 14 }}>
                    Horário de atendimento
                  </p>
                  <div className="demo-fertil-hours-grid">
                    <div className="demo-fertil-hours-row">
                      <span className="demo-fertil-hours-day">Seg — Sex</span>
                      <span className="demo-fertil-hours-time">08h — 18h</span>
                    </div>
                    <div className="demo-fertil-hours-row">
                      <span className="demo-fertil-hours-day">Sábado</span>
                      <span className="demo-fertil-hours-time">08h — 12h</span>
                    </div>
                    <div className="demo-fertil-hours-row">
                      <span className="demo-fertil-hours-day">Domingo</span>
                      <span className="demo-fertil-hours-time" style={{ color: "#7C3AED" }}>Fechado</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div
                className="demo-fertil-map-placeholder demo-fertil-reveal demo-fertil-reveal-delay-2"
                role="img"
                aria-label="Mapa com localização do consultório na Av. Brasil, 1200, Ribeirão Preto"
              >
                <div className="demo-fertil-map-bg" aria-hidden="true" />

                <div className="demo-fertil-map-pin" aria-hidden="true">
                  <div className="demo-fertil-map-pin-inner" />
                </div>

                <div className="demo-fertil-map-label">
                  <p className="demo-fertil-map-address">Av. Brasil, 1200 — Sala 501</p>
                  <p className="demo-fertil-map-city">Centro · Ribeirão Preto, SP</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTATO / CTA ── */}
        <section
          id="contato"
          className="demo-fertil-contato"
          aria-labelledby="cta-title"
        >
          <div className="demo-fertil-container">
            <div className="demo-fertil-contato-inner">
              <div className="demo-fertil-contato-eyebrow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
                Primeiro passo
              </div>

              <h2 className="demo-fertil-contato-title" id="cta-title">
                Vamos conversar sobre o seu sonho?
              </h2>

              <p className="demo-fertil-contato-subtitle">
                O primeiro passo é uma conversa, sem compromisso. Estamos aqui para
                ouvir você, tirar suas dúvidas e mostrar que você não está sozinha
                nessa jornada. Quando estiver pronta, é só nos chamar.
              </p>

              <div className="demo-fertil-contato-actions">
                <a
                  href="https://wa.me/5516999990001"
                  className="demo-fertil-btn-whatsapp"
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
                  className="demo-fertil-btn demo-fertil-btn-white"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  (16) 99999-0000
                </a>
              </div>

              <p className="demo-fertil-contato-note">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                Primeiro passo sem compromisso. Estamos aqui para ouvir.
              </p>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="demo-fertil-footer">
          <div className="demo-fertil-container">
            <div className="demo-fertil-footer-inner">
              {/* Brand */}
              <div>
                <p className="demo-fertil-footer-brand-name">Dra. Juliana Mendes</p>
                <p className="demo-fertil-footer-brand-specialty">Reprodução Humana</p>
                <p className="demo-fertil-footer-bio">
                  Consultório de reprodução humana em Ribeirão Preto. Fertilização
                  in vitro, ICSI, inseminação artificial e preservação de fertilidade
                  com atendimento humanizado.
                </p>
                <p className="demo-fertil-footer-crm">CRM/SP 567890 · RQE 23456</p>
              </div>

              {/* Links */}
              <div>
                <p className="demo-fertil-footer-col-title">Navegação</p>
                <ul className="demo-fertil-footer-links" role="list">
                  <li><a href="#sobre">Sobre a médica</a></li>
                  <li><a href="#tratamentos">Tratamentos</a></li>
                  <li><a href="#jornada">Jornada do paciente</a></li>
                  <li><a href="#depoimentos">Depoimentos</a></li>
                  <li><a href="#localizacao">Localização</a></li>
                  <li><a href="#contato">Agendar consulta</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <p className="demo-fertil-footer-col-title">Contato</p>
                <div className="demo-fertil-footer-contact-item">
                  <span className="demo-fertil-footer-contact-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <span>Av. Brasil, 1200 — Sala 501<br />Centro · Ribeirão Preto, SP</span>
                </div>
                <div className="demo-fertil-footer-contact-item">
                  <span className="demo-fertil-footer-contact-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </span>
                  <span>(16) 99999-0000</span>
                </div>
                <div className="demo-fertil-footer-contact-item">
                  <span className="demo-fertil-footer-contact-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                    </svg>
                  </span>
                  <span>WhatsApp: (16) 99999-0001</span>
                </div>
                <div className="demo-fertil-footer-contact-item">
                  <span className="demo-fertil-footer-contact-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </span>
                  <span>Seg-Sex: 8h-18h · Sab: 8h-12h</span>
                </div>
              </div>
            </div>

            <div className="demo-fertil-footer-bottom">
              <p className="demo-fertil-footer-copy">
                © 2025 Dra. Juliana Mendes — Reprodução Humana. Todos os direitos reservados.
              </p>
              <p className="demo-fertil-footer-credit">
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
        entry.target.classList.add('demo-fertil-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  function init() {
    var els = document.querySelectorAll('.demo-fertil-reveal');
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

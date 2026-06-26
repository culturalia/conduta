import type { Metadata } from "next";

/* ─────────────────────────────────────────────
   DEMO — Dra. Camila Santos · Pediatria
   CRM/SP 789012 · RQE 34567
   Rua Oscar Freire, 800 — São Paulo, SP
   Built by Conduta Saúde
───────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Dra. Camila Santos — Pediatra em São Paulo",
  description:
    "Consultório de pediatria da Dra. Camila Santos em São Paulo. Puericultura, vacinação, acompanhamento do desenvolvimento infantil e orientação nutricional. Agende a consulta do seu pequeno.",
  openGraph: {
    title: "Dra. Camila Santos — Pediatra em São Paulo",
    description:
      "Cuidando do bem mais precioso da sua família. Consultas pediátricas no Jardim Paulista, São Paulo.",
    locale: "pt_BR",
    type: "website",
  },
  robots: { index: false, follow: false },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dra. Camila Santos",
  description: "Pediatra com foco em puericultura, desenvolvimento infantil e vacinação.",
  medicalSpecialty: "Pediatrics",
  identifier: [
    { "@type": "PropertyValue", name: "CRM", value: "CRM/SP 789012" },
    { "@type": "PropertyValue", name: "RQE", value: "RQE 34567" },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Oscar Freire, 800",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    postalCode: "01426-001",
    addressCountry: "BR",
  },
  telephone: "+55-11-3456-7890",
  url: "https://condutasaude.com/demos/pediatria",
  availableService: [
    { "@type": "MedicalProcedure", name: "Consulta Pediátrica" },
    { "@type": "MedicalProcedure", name: "Puericultura" },
    { "@type": "MedicalProcedure", name: "Vacinação" },
    { "@type": "MedicalProcedure", name: "Acompanhamento do Desenvolvimento" },
    { "@type": "MedicalProcedure", name: "Consulta de Urgência" },
    { "@type": "MedicalProcedure", name: "Orientação Nutricional" },
  ],
};

/* ─── VACCINATION SCHEDULE ─────────────────── */
const vaccinationSchedule = [
  { age: "Ao nascer", vaccines: ["BCG", "Hepatite B"] },
  { age: "2 meses", vaccines: ["VORH", "Penta", "VIP", "PCV10"] },
  { age: "3 meses", vaccines: ["Meningocócica C"] },
  { age: "4 meses", vaccines: ["VORH", "Penta", "VIP", "PCV10"] },
  { age: "5 meses", vaccines: ["Meningocócica C"] },
  { age: "6 meses", vaccines: ["Penta", "VIP", "Influenza", "Hepatite B"] },
  { age: "9 meses", vaccines: ["Febre Amarela"] },
  { age: "12 meses", vaccines: ["PCV10", "Meningo C", "SCR"] },
  { age: "15 meses", vaccines: ["DTP", "VOP", "SCRV", "Hepatite A"] },
  { age: "4 anos", vaccines: ["DTP", "VOP", "Varicela", "SCR"] },
  { age: "9 anos", vaccines: ["HPV", "Meningocócica ACWY"] },
];

/* ─── SERVICES ─────────────────────────────── */
const services = [
  {
    icon: "🩺",
    title: "Consulta Pediátrica",
    desc: "Avaliação completa da saúde do seu filho com atenção personalizada a cada fase do crescimento.",
  },
  {
    icon: "👶",
    title: "Puericultura",
    desc: "Acompanhamento contínuo do crescimento e desenvolvimento saudável do bebê desde o nascimento.",
  },
  {
    icon: "💉",
    title: "Vacinação",
    desc: "Orientação e acompanhamento do calendário vacinal completo, de acordo com o Ministério da Saúde.",
  },
  {
    icon: "📊",
    title: "Acompanhamento do Desenvolvimento",
    desc: "Avaliação das etapas motoras, cognitivas e de linguagem, com encaminhamentos quando necessário.",
  },
  {
    icon: "🏥",
    title: "Consulta de Urgência",
    desc: "Atendimento ágil para febre, infecções, alergias e outras situações que não podem esperar.",
  },
  {
    icon: "🥦",
    title: "Orientação Nutricional",
    desc: "Guia para introdução alimentar, alimentação saudável e manejo de dificuldades alimentares.",
  },
];

/* ─── TESTIMONIALS ──────────────────────────── */
const testimonials = [
  {
    text: "A Dra. Camila é incrível! Meu filho tem 3 anos e sempre saiu da consulta sorrindo. Ela tem uma paciência e carinho únicos com as crianças. Me sinto muito segura sabendo que ele está em boas mãos.",
    author: "Ana Paula M.",
    role: "Mãe do Pedro, 3 anos",
    initials: "AP",
  },
  {
    text: "Desde o nascimento da minha filha, a Dra. Camila nos acompanha. Ela explica tudo com clareza e está sempre disponível quando precisamos. A relação de confiança que ela constrói com a família é algo raro.",
    author: "Ricardo e Fernanda L.",
    role: "Pais da Sofia, 18 meses",
    initials: "RF",
  },
  {
    text: "Meu filho tinha muita resistência a médicos, mas a Dra. Camila conquistou ele na primeira consulta. O ambiente do consultório é acolhedor, e ela sabe exatamente como acalmar uma criança ansiosa.",
    author: "Juliana C.",
    role: "Mãe do Gabriel, 6 anos",
    initials: "JC",
  },
];

export default function PediatriaDemo() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div
        className="demo-pedia-root"
        style={{
          fontFamily: "var(--font-inter), 'Inter', sans-serif",
          color: "#1A1A2E",
          background: "#FFFFFF",
          overflowX: "hidden",
        }}
      >
        {/* ══════════════════════════════════════════
            NAV
        ══════════════════════════════════════════ */}
        <header
          className="demo-pedia-nav"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            background: "rgba(255,255,255,0.96)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            borderBottom: "1px solid rgba(217,119,6,0.12)",
            height: "68px",
            display: "flex",
            alignItems: "center",
            padding: "0 clamp(20px, 5vw, 64px)",
            justifyContent: "space-between",
            animation: "pediaNavIn 0.35s ease forwards",
          }}
        >
          <a
            href="#hero"
            style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #D97706 0%, #F59E0B 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFFFFF",
                fontFamily: "var(--font-work-sans), 'Work Sans', sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                flexShrink: 0,
              }}
            >
              CS
            </div>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-work-sans), 'Work Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "15px",
                  color: "#1A1A2E",
                  lineHeight: 1.2,
                }}
              >
                Dra. Camila Santos
              </div>
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 500,
                  color: "#D97706",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                Pediatria
              </div>
            </div>
          </a>

          <nav
            aria-label="Menu principal"
            style={{ display: "flex", alignItems: "center", gap: "28px" }}
          >
            <div
              className="demo-pedia-navlinks"
              style={{ display: "flex", gap: "24px", alignItems: "center" }}
            >
              {[
                ["#sobre", "Sobre"],
                ["#servicos", "Serviços"],
                ["#vacinacao", "Vacinação"],
                ["#depoimentos", "Depoimentos"],
                ["#contato", "Contato"],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#555566",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                >
                  {label}
                </a>
              ))}
            </div>
            <a
              href="#contato"
              style={{
                background: "linear-gradient(135deg, #D97706 0%, #F59E0B 100%)",
                color: "#FFFFFF",
                padding: "10px 22px",
                borderRadius: "50px",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "none",
                whiteSpace: "nowrap",
                boxShadow: "0 4px 14px rgba(217,119,6,0.30)",
                transition: "transform 0.15s, box-shadow 0.15s",
              }}
            >
              Agendar consulta
            </a>
          </nav>
        </header>

        {/* ══════════════════════════════════════════
            HERO
        ══════════════════════════════════════════ */}
        <section
          id="hero"
          className="demo-pedia-hero"
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            paddingTop: "68px",
            background:
              "linear-gradient(145deg, #FFF7ED 0%, #FEF3C7 45%, #ECFDF5 100%)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative blobs */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "-120px",
              right: "-120px",
              width: "480px",
              height: "480px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(217,119,6,0.10) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              bottom: "-80px",
              left: "-80px",
              width: "360px",
              height: "360px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "80px clamp(20px, 5vw, 64px)",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "64px",
              alignItems: "center",
              width: "100%",
            }}
          >
            {/* Left: text */}
            <div>
              <div
                className="hero-anim"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(217,119,6,0.10)",
                  color: "#D97706",
                  padding: "6px 16px",
                  borderRadius: "50px",
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  marginBottom: "24px",
                }}
              >
                <span>🌟</span> Pediatria com carinho
              </div>

              <h1
                className="hero-anim"
                style={{
                  fontFamily: "var(--font-work-sans), 'Work Sans', sans-serif",
                  fontSize: "clamp(32px, 4.2vw, 56px)",
                  fontWeight: 800,
                  lineHeight: 1.15,
                  color: "#1A1A2E",
                  marginBottom: "24px",
                }}
              >
                Cuidando do{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #D97706, #F59E0B)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  bem mais precioso
                </span>{" "}
                da sua família
              </h1>

              <p
                className="hero-anim"
                style={{
                  fontSize: "clamp(16px, 1.8vw, 18px)",
                  color: "#555566",
                  lineHeight: 1.7,
                  marginBottom: "40px",
                  maxWidth: "520px",
                }}
              >
                Medicina pediátrica com escuta ativa, acolhimento e atenção personalizada para cada
                criança. Porque cada sorriso pequeno é a maior recompensa.
              </p>

              <div
                className="hero-anim"
                style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
              >
                <a
                  href="#contato"
                  style={{
                    background: "linear-gradient(135deg, #D97706 0%, #F59E0B 100%)",
                    color: "#FFFFFF",
                    padding: "16px 32px",
                    borderRadius: "50px",
                    fontSize: "15px",
                    fontWeight: 700,
                    textDecoration: "none",
                    boxShadow: "0 6px 20px rgba(217,119,6,0.35)",
                    display: "inline-block",
                  }}
                >
                  Agendar consulta
                </a>
                <a
                  href="#sobre"
                  style={{
                    background: "rgba(255,255,255,0.8)",
                    color: "#1A1A2E",
                    padding: "16px 32px",
                    borderRadius: "50px",
                    fontSize: "15px",
                    fontWeight: 600,
                    textDecoration: "none",
                    border: "2px solid rgba(217,119,6,0.25)",
                    display: "inline-block",
                  }}
                >
                  Conhecer a Dra. Camila
                </a>
              </div>

              {/* Stats row */}
              <div
                className="hero-anim"
                style={{
                  display: "flex",
                  gap: "32px",
                  marginTop: "48px",
                  paddingTop: "32px",
                  borderTop: "1px solid rgba(217,119,6,0.15)",
                }}
              >
                {[
                  { number: "+2.000", label: "Pacientes atendidos" },
                  { number: "12 anos", label: "De experiência" },
                  { number: "100%", label: "Dedicação" },
                ].map(({ number, label }) => (
                  <div key={label}>
                    <div
                      style={{
                        fontFamily: "var(--font-work-sans), 'Work Sans', sans-serif",
                        fontSize: "22px",
                        fontWeight: 800,
                        color: "#D97706",
                        lineHeight: 1.1,
                      }}
                    >
                      {number}
                    </div>
                    <div style={{ fontSize: "12px", color: "#7C7C8A", marginTop: "4px" }}>
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: doctor photo placeholder */}
            <div
              className="hero-anim demo-pedia-hero-photo"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div
                style={{
                  position: "relative",
                  width: "clamp(280px, 35vw, 420px)",
                  aspectRatio: "4/5",
                }}
              >
                {/* Main card */}
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "32px 32px 32px 8px",
                    background: "linear-gradient(160deg, #FEF3C7 0%, #FDE68A 50%, #FCD34D 100%)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "12px",
                    boxShadow:
                      "0 20px 60px rgba(217,119,6,0.20), 0 4px 16px rgba(0,0,0,0.06)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #D97706 0%, #92400E 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#FEF3C7",
                      fontFamily: "var(--font-work-sans), 'Work Sans', sans-serif",
                      fontWeight: 800,
                      fontSize: "32px",
                      boxShadow: "0 6px 24px rgba(217,119,6,0.4)",
                    }}
                  >
                    CS
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div
                      style={{
                        fontFamily: "var(--font-work-sans), 'Work Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: "17px",
                        color: "#92400E",
                      }}
                    >
                      Dra. Camila Santos
                    </div>
                    <div style={{ fontSize: "13px", color: "#B45309", marginTop: "4px" }}>
                      Pediatra · CRM/SP 789012
                    </div>
                  </div>
                </div>

                {/* Floating badge: availability */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "-16px",
                    left: "-16px",
                    background: "#FFFFFF",
                    borderRadius: "16px",
                    padding: "12px 16px",
                    boxShadow: "0 8px 28px rgba(0,0,0,0.12)",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "#10B981",
                      flexShrink: 0,
                      boxShadow: "0 0 0 3px rgba(16,185,129,0.20)",
                    }}
                  />
                  <div>
                    <div style={{ fontSize: "12px", fontWeight: 700, color: "#1A1A2E" }}>
                      Consultas disponíveis
                    </div>
                    <div style={{ fontSize: "11px", color: "#7C7C8A" }}>
                      Seg–Sex · 8h às 17h
                    </div>
                  </div>
                </div>

                {/* Floating badge: reviews */}
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "-16px",
                    background: "#FFFFFF",
                    borderRadius: "16px",
                    padding: "10px 14px",
                    boxShadow: "0 8px 28px rgba(0,0,0,0.12)",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-work-sans), 'Work Sans', sans-serif",
                      fontWeight: 800,
                      fontSize: "18px",
                      color: "#D97706",
                    }}
                  >
                    ⭐ 4.9
                  </div>
                  <div style={{ fontSize: "10px", color: "#7C7C8A", marginTop: "2px" }}>
                    Google Reviews
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            SOBRE
        ══════════════════════════════════════════ */}
        <section
          id="sobre"
          style={{
            background: "#FFFFFF",
            padding: "96px clamp(20px, 5vw, 64px)",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1fr 1.4fr",
              gap: "64px",
              alignItems: "center",
            }}
          >
            {/* Photo placeholder */}
            <div className="reveal" style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  width: "clamp(240px, 30vw, 360px)",
                  aspectRatio: "3/4",
                  borderRadius: "24px 8px 24px 8px",
                  background: "linear-gradient(145deg, #FFF7ED 0%, #FEF3C7 100%)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "16px",
                  boxShadow: "0 16px 48px rgba(217,119,6,0.16), 0 4px 12px rgba(0,0,0,0.06)",
                  border: "1px solid rgba(217,119,6,0.12)",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: "88px",
                    height: "88px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #D97706 0%, #92400E 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#FFFFFF",
                    fontFamily: "var(--font-work-sans), 'Work Sans', sans-serif",
                    fontWeight: 800,
                    fontSize: "28px",
                    boxShadow: "0 4px 16px rgba(217,119,6,0.4)",
                  }}
                >
                  CS
                </div>
                <div style={{ textAlign: "center", padding: "0 24px" }}>
                  <div
                    style={{
                      fontFamily: "var(--font-work-sans), 'Work Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: "16px",
                      color: "#1A1A2E",
                    }}
                  >
                    Dra. Camila Santos
                  </div>
                  <div style={{ fontSize: "13px", color: "#D97706", marginTop: "4px", fontWeight: 600 }}>
                    Pediatra
                  </div>
                  <div style={{ fontSize: "12px", color: "#7C7C8A", marginTop: "8px" }}>
                    CRM/SP 789012 · RQE 34567
                  </div>
                </div>

                {/* Credential ribbon */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "20px",
                    right: "20px",
                    background: "rgba(255,255,255,0.92)",
                    borderRadius: "12px",
                    padding: "10px 14px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "#10B981",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    ✓ CFM Verificado
                  </div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="reveal">
              <div
                style={{
                  display: "inline-block",
                  background: "rgba(217,119,6,0.08)",
                  color: "#D97706",
                  padding: "5px 14px",
                  borderRadius: "50px",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                Sobre a médica
              </div>

              <h2
                style={{
                  fontFamily: "var(--font-work-sans), 'Work Sans', sans-serif",
                  fontSize: "clamp(26px, 3vw, 38px)",
                  fontWeight: 800,
                  color: "#1A1A2E",
                  lineHeight: 1.2,
                  marginBottom: "24px",
                }}
              >
                Uma pediatra que se torna{" "}
                <span style={{ color: "#D97706" }}>amiga da família</span>
              </h2>

              <p style={{ fontSize: "16px", color: "#555566", lineHeight: 1.8, marginBottom: "20px" }}>
                Com mais de 12 anos de experiência, a Dra. Camila Santos acredita que a medicina
                pediátrica vai muito além do tratamento de doenças. É sobre construir vínculos com as
                famílias, compreender o contexto de cada criança e promover saúde de forma integral e
                acolhedora.
              </p>

              <p style={{ fontSize: "16px", color: "#555566", lineHeight: 1.8, marginBottom: "32px" }}>
                Formada pela Universidade de São Paulo (USP) com residência médica em Pediatria pelo
                Hospital das Clínicas, ela dedica especial atenção à puericultura — o acompanhamento
                preventivo que garante um crescimento saudável e feliz para cada pequeno paciente.
              </p>

              {/* Credential badges */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "32px" }}>
                {[
                  "Graduação USP",
                  "Residência HC-FMUSP",
                  "Membro SBP",
                  "Título de Especialista",
                ].map((badge) => (
                  <span
                    key={badge}
                    style={{
                      background: "#FEF3C7",
                      color: "#92400E",
                      padding: "6px 14px",
                      borderRadius: "50px",
                      fontSize: "12px",
                      fontWeight: 600,
                      border: "1px solid rgba(217,119,6,0.20)",
                    }}
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <a
                href="#contato"
                style={{
                  background: "linear-gradient(135deg, #D97706 0%, #F59E0B 100%)",
                  color: "#FFFFFF",
                  padding: "14px 28px",
                  borderRadius: "50px",
                  fontSize: "14px",
                  fontWeight: 700,
                  textDecoration: "none",
                  display: "inline-block",
                  boxShadow: "0 4px 16px rgba(217,119,6,0.30)",
                }}
              >
                Agendar com a Dra. Camila
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            SERVIÇOS
        ══════════════════════════════════════════ */}
        <section
          id="servicos"
          style={{
            background: "#FFF7ED",
            padding: "96px clamp(20px, 5vw, 64px)",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div
              className="reveal"
              style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 56px" }}
            >
              <div
                style={{
                  display: "inline-block",
                  background: "rgba(217,119,6,0.10)",
                  color: "#D97706",
                  padding: "5px 14px",
                  borderRadius: "50px",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                Atendimentos
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-work-sans), 'Work Sans', sans-serif",
                  fontSize: "clamp(26px, 3vw, 38px)",
                  fontWeight: 800,
                  color: "#1A1A2E",
                  marginBottom: "16px",
                  lineHeight: 1.2,
                }}
              >
                Cuidado completo para todas as fases
              </h2>
              <p style={{ fontSize: "16px", color: "#555566", lineHeight: 1.7 }}>
                Do recém-nascido ao adolescente, oferecemos acompanhamento especializado em cada etapa
                do desenvolvimento.
              </p>
            </div>

            {/* Services grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "24px",
              }}
            >
              {services.map((service, i) => (
                <div
                  key={service.title}
                  className="reveal"
                  style={{ "--d": `${i * 0.08}s` } as React.CSSProperties}
                >
                  <div
                    style={{
                      background: "#FFFFFF",
                      borderRadius: "20px",
                      padding: "32px 28px",
                      boxShadow: "0 2px 16px rgba(217,119,6,0.08), 0 1px 4px rgba(0,0,0,0.05)",
                      border: "1px solid rgba(217,119,6,0.10)",
                      height: "100%",
                      transition: "transform 0.2s, box-shadow 0.2s",
                    }}
                  >
                    <div
                      style={{
                        width: "56px",
                        height: "56px",
                        borderRadius: "16px",
                        background: "linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "26px",
                        marginBottom: "20px",
                      }}
                    >
                      {service.icon}
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-work-sans), 'Work Sans', sans-serif",
                        fontSize: "17px",
                        fontWeight: 700,
                        color: "#1A1A2E",
                        marginBottom: "10px",
                      }}
                    >
                      {service.title}
                    </h3>
                    <p style={{ fontSize: "14px", color: "#555566", lineHeight: 1.7 }}>
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            CALENDÁRIO DE VACINAÇÃO
        ══════════════════════════════════════════ */}
        <section
          id="vacinacao"
          style={{
            background: "#FFFFFF",
            padding: "96px clamp(20px, 5vw, 64px)",
          }}
        >
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div
              className="reveal"
              style={{ textAlign: "center", maxWidth: "620px", margin: "0 auto 56px" }}
            >
              <div
                style={{
                  display: "inline-block",
                  background: "rgba(16,185,129,0.08)",
                  color: "#10B981",
                  padding: "5px 14px",
                  borderRadius: "50px",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                Calendário oficial SBP / MS
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-work-sans), 'Work Sans', sans-serif",
                  fontSize: "clamp(26px, 3vw, 38px)",
                  fontWeight: 800,
                  color: "#1A1A2E",
                  marginBottom: "16px",
                  lineHeight: 1.2,
                }}
              >
                Calendário de Vacinação Infantil
              </h2>
              <p style={{ fontSize: "16px", color: "#555566", lineHeight: 1.7 }}>
                A Dra. Camila orienta e acompanha toda a caderneta vacinal do seu filho, desde o
                nascimento até a adolescência, seguindo o calendário do Ministério da Saúde.
              </p>
            </div>

            {/* Timeline cards */}
            <div
              className="reveal"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
                gap: "16px",
              }}
            >
              {vaccinationSchedule.map((item, i) => (
                <div
                  key={item.age}
                  style={{
                    background: i === 0
                      ? "linear-gradient(135deg, #D97706 0%, #F59E0B 100%)"
                      : i % 3 === 1
                      ? "#ECFDF5"
                      : "#FEF3C7",
                    borderRadius: "16px",
                    padding: "20px 18px",
                    border: i === 0
                      ? "none"
                      : i % 3 === 1
                      ? "1px solid rgba(16,185,129,0.15)"
                      : "1px solid rgba(217,119,6,0.15)",
                    boxShadow: i === 0
                      ? "0 6px 20px rgba(217,119,6,0.30)"
                      : "0 2px 8px rgba(0,0,0,0.05)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-work-sans), 'Work Sans', sans-serif",
                      fontWeight: 800,
                      fontSize: "14px",
                      color: i === 0 ? "#FFFFFF" : "#1A1A2E",
                      marginBottom: "10px",
                      paddingBottom: "10px",
                      borderBottom: i === 0
                        ? "1px solid rgba(255,255,255,0.25)"
                        : i % 3 === 1
                        ? "1px solid rgba(16,185,129,0.15)"
                        : "1px solid rgba(217,119,6,0.15)",
                    }}
                  >
                    {item.age}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "5px",
                    }}
                  >
                    {item.vaccines.map((vaccine) => (
                      <span
                        key={vaccine}
                        style={{
                          fontSize: "12px",
                          fontWeight: 600,
                          color: i === 0
                            ? "rgba(255,255,255,0.92)"
                            : i % 3 === 1
                            ? "#065F46"
                            : "#92400E",
                          lineHeight: 1.3,
                        }}
                      >
                        · {vaccine}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Disclaimer */}
            <div
              className="reveal"
              style={{
                marginTop: "32px",
                background: "#FEF3C7",
                borderRadius: "16px",
                padding: "20px 24px",
                display: "flex",
                alignItems: "flex-start",
                gap: "12px",
                border: "1px solid rgba(217,119,6,0.15)",
              }}
            >
              <span style={{ fontSize: "20px", flexShrink: 0 }}>💡</span>
              <p style={{ fontSize: "14px", color: "#92400E", lineHeight: 1.6 }}>
                <strong>Lembre-se:</strong> A caderneta de vacinação é o documento mais importante da
                infância do seu filho. A Dra. Camila avalia e orienta o calendário vacinal em cada
                consulta, garantindo que nenhuma dose seja esquecida.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            DEPOIMENTOS
        ══════════════════════════════════════════ */}
        <section
          id="depoimentos"
          style={{
            background: "#FFF7ED",
            padding: "96px clamp(20px, 5vw, 64px)",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div
              className="reveal"
              style={{ textAlign: "center", maxWidth: "540px", margin: "0 auto 56px" }}
            >
              <div
                style={{
                  display: "inline-block",
                  background: "rgba(217,119,6,0.10)",
                  color: "#D97706",
                  padding: "5px 14px",
                  borderRadius: "50px",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                O que as famílias dizem
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-work-sans), 'Work Sans', sans-serif",
                  fontSize: "clamp(26px, 3vw, 38px)",
                  fontWeight: 800,
                  color: "#1A1A2E",
                  lineHeight: 1.2,
                }}
              >
                Famílias que confiam no nosso cuidado
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "24px",
              }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={t.author}
                  className="reveal"
                  style={{ "--d": `${i * 0.1}s` } as React.CSSProperties}
                >
                  <div
                    style={{
                      background: "#FFFFFF",
                      borderRadius: "20px",
                      padding: "32px 28px",
                      boxShadow: "0 2px 16px rgba(217,119,6,0.08), 0 1px 4px rgba(0,0,0,0.05)",
                      border: "1px solid rgba(217,119,6,0.10)",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {/* Stars */}
                    <div style={{ marginBottom: "16px", color: "#D97706", fontSize: "16px" }}>
                      ★★★★★
                    </div>

                    <p
                      style={{
                        fontSize: "15px",
                        color: "#555566",
                        lineHeight: 1.75,
                        flex: 1,
                        marginBottom: "24px",
                        fontStyle: "italic",
                      }}
                    >
                      &ldquo;{t.text}&rdquo;
                    </p>

                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div
                        style={{
                          width: "44px",
                          height: "44px",
                          borderRadius: "50%",
                          background: "linear-gradient(135deg, #FDE68A 0%, #FCD34D 100%)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: "var(--font-work-sans), 'Work Sans', sans-serif",
                          fontWeight: 800,
                          fontSize: "13px",
                          color: "#92400E",
                          flexShrink: 0,
                        }}
                      >
                        {t.initials}
                      </div>
                      <div>
                        <div
                          style={{
                            fontSize: "14px",
                            fontWeight: 700,
                            color: "#1A1A2E",
                          }}
                        >
                          {t.author}
                        </div>
                        <div style={{ fontSize: "12px", color: "#7C7C8A", marginTop: "2px" }}>
                          {t.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            LOCALIZAÇÃO
        ══════════════════════════════════════════ */}
        <section
          id="localizacao"
          style={{
            background: "#FFFFFF",
            padding: "96px clamp(20px, 5vw, 64px)",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div
              className="reveal"
              style={{ textAlign: "center", maxWidth: "540px", margin: "0 auto 56px" }}
            >
              <div
                style={{
                  display: "inline-block",
                  background: "rgba(16,185,129,0.08)",
                  color: "#10B981",
                  padding: "5px 14px",
                  borderRadius: "50px",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                Como nos encontrar
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-work-sans), 'Work Sans', sans-serif",
                  fontSize: "clamp(26px, 3vw, 38px)",
                  fontWeight: 800,
                  color: "#1A1A2E",
                  lineHeight: 1.2,
                }}
              >
                Localização e horários
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1.4fr",
                gap: "40px",
                alignItems: "start",
              }}
            >
              {/* Info cards */}
              <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  {
                    icon: "📍",
                    title: "Endereço",
                    content: "Rua Oscar Freire, 800\nJardim Paulista — São Paulo, SP\nCEP 01426-001",
                    color: "#D97706",
                    bg: "#FEF3C7",
                  },
                  {
                    icon: "📞",
                    title: "Telefone / WhatsApp",
                    content: "(11) 3456-7890\n(11) 99876-5432",
                    color: "#10B981",
                    bg: "#ECFDF5",
                  },
                  {
                    icon: "🕐",
                    title: "Horários de atendimento",
                    content: "Segunda a Sexta: 8h às 17h\nSábado: 8h às 12h\nDomingo: fechado",
                    color: "#D97706",
                    bg: "#FEF3C7",
                  },
                  {
                    icon: "🚗",
                    title: "Como chegar",
                    content: "Próximo à estação Consolação (Metrô)\nEstacionamento no local\nAcessível para cadeirantes",
                    color: "#10B981",
                    bg: "#ECFDF5",
                  },
                ].map(({ icon, title, content, color, bg }) => (
                  <div
                    key={title}
                    style={{
                      background: bg,
                      borderRadius: "16px",
                      padding: "20px 24px",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "14px",
                      border: `1px solid ${color}22`,
                    }}
                  >
                    <span style={{ fontSize: "22px", flexShrink: 0, marginTop: "2px" }}>{icon}</span>
                    <div>
                      <div
                        style={{
                          fontFamily: "var(--font-work-sans), 'Work Sans', sans-serif",
                          fontWeight: 700,
                          fontSize: "14px",
                          color: "#1A1A2E",
                          marginBottom: "6px",
                        }}
                      >
                        {title}
                      </div>
                      <div
                        style={{
                          fontSize: "13px",
                          color: "#555566",
                          lineHeight: 1.6,
                          whiteSpace: "pre-line",
                        }}
                      >
                        {content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div
                className="reveal"
                style={{
                  background: "linear-gradient(135deg, #FEF3C7 0%, #FDE68A 50%, #ECFDF5 100%)",
                  borderRadius: "24px",
                  aspectRatio: "4/3",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "16px",
                  boxShadow: "0 8px 32px rgba(217,119,6,0.14)",
                  border: "1px solid rgba(217,119,6,0.12)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Grid overlay to suggest a map */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage:
                      "linear-gradient(rgba(217,119,6,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(217,119,6,0.06) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
                {/* "Roads" */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: "rgba(217,119,6,0.15)",
                    transform: "translateY(-50%)",
                  }}
                />
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: 0,
                    bottom: 0,
                    width: "3px",
                    background: "rgba(217,119,6,0.15)",
                    transform: "translateX(-50%)",
                  }}
                />

                {/* Pin */}
                <div
                  style={{
                    position: "relative",
                    zIndex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "50% 50% 50% 0",
                      background: "linear-gradient(135deg, #D97706 0%, #F59E0B 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#FFFFFF",
                      fontSize: "22px",
                      boxShadow: "0 4px 16px rgba(217,119,6,0.40)",
                      transform: "rotate(-45deg)",
                    }}
                  >
                    <span style={{ transform: "rotate(45deg)" }}>📍</span>
                  </div>
                  <div
                    style={{
                      background: "#FFFFFF",
                      borderRadius: "12px",
                      padding: "10px 18px",
                      boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-work-sans), 'Work Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: "14px",
                        color: "#1A1A2E",
                      }}
                    >
                      Dra. Camila Santos
                    </div>
                    <div style={{ fontSize: "12px", color: "#7C7C8A", marginTop: "2px" }}>
                      Rua Oscar Freire, 800
                    </div>
                  </div>
                </div>

                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    position: "relative",
                    zIndex: 1,
                    background: "#FFFFFF",
                    color: "#D97706",
                    padding: "10px 20px",
                    borderRadius: "50px",
                    fontSize: "13px",
                    fontWeight: 700,
                    textDecoration: "none",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.10)",
                    border: "2px solid rgba(217,119,6,0.20)",
                  }}
                >
                  Abrir no Google Maps
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            CONTATO / CTA
        ══════════════════════════════════════════ */}
        <section
          id="contato"
          style={{
            background: "linear-gradient(135deg, #D97706 0%, #F59E0B 40%, #10B981 100%)",
            padding: "96px clamp(20px, 5vw, 64px)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative blob */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "-80px",
              right: "-80px",
              width: "320px",
              height: "320px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.08)",
              pointerEvents: "none",
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              bottom: "-60px",
              left: "-60px",
              width: "240px",
              height: "240px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.06)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              maxWidth: "960px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "64px",
              alignItems: "center",
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* Left */}
            <div className="reveal">
              <div
                style={{
                  display: "inline-block",
                  background: "rgba(255,255,255,0.18)",
                  color: "#FFFFFF",
                  padding: "5px 14px",
                  borderRadius: "50px",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                Agendamento
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-work-sans), 'Work Sans', sans-serif",
                  fontSize: "clamp(26px, 3.2vw, 42px)",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  lineHeight: 1.2,
                  marginBottom: "20px",
                }}
              >
                Agende a consulta do seu pequeno
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  color: "rgba(255,255,255,0.85)",
                  lineHeight: 1.7,
                  marginBottom: "32px",
                }}
              >
                Entre em contato pelo WhatsApp ou preencha o formulário. Nossa equipe retornará em até
                2 horas durante o horário de atendimento.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  { icon: "📞", text: "(11) 3456-7890" },
                  { icon: "💬", text: "(11) 99876-5432 · WhatsApp" },
                  { icon: "✉️", text: "dracamila@pediatriasp.com.br" },
                ].map(({ icon, text }) => (
                  <div
                    key={text}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      color: "rgba(255,255,255,0.90)",
                      fontSize: "14px",
                    }}
                  >
                    <span>{icon}</span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form card */}
            <div
              className="reveal"
              style={{
                background: "#FFFFFF",
                borderRadius: "24px",
                padding: "36px 32px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.18)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-work-sans), 'Work Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: "20px",
                  color: "#1A1A2E",
                  marginBottom: "24px",
                }}
              >
                Solicitar agendamento
              </h3>

              <form
                action="#"
                style={{ display: "flex", flexDirection: "column", gap: "16px" }}
              >
                {[
                  { id: "nome", label: "Nome do responsável", type: "text", placeholder: "Seu nome completo" },
                  { id: "crianca", label: "Nome da criança", type: "text", placeholder: "Nome do paciente" },
                  { id: "telefone", label: "Telefone / WhatsApp", type: "tel", placeholder: "(11) 99999-9999" },
                  { id: "email", label: "E-mail", type: "email", placeholder: "email@exemplo.com" },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id}>
                    <label
                      htmlFor={id}
                      style={{
                        display: "block",
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "#1A1A2E",
                        marginBottom: "6px",
                      }}
                    >
                      {label}
                    </label>
                    <input
                      id={id}
                      type={type}
                      placeholder={placeholder}
                      style={{
                        width: "100%",
                        padding: "12px 14px",
                        borderRadius: "12px",
                        border: "1.5px solid #E8E8E0",
                        fontSize: "14px",
                        color: "#1A1A2E",
                        background: "#FAFAF7",
                        outline: "none",
                        fontFamily: "var(--font-inter), 'Inter', sans-serif",
                        boxSizing: "border-box",
                        transition: "border-color 0.2s",
                      }}
                    />
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="mensagem"
                    style={{
                      display: "block",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#1A1A2E",
                      marginBottom: "6px",
                    }}
                  >
                    Mensagem (opcional)
                  </label>
                  <textarea
                    id="mensagem"
                    rows={3}
                    placeholder="Descreva brevemente o motivo da consulta..."
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      borderRadius: "12px",
                      border: "1.5px solid #E8E8E0",
                      fontSize: "14px",
                      color: "#1A1A2E",
                      background: "#FAFAF7",
                      outline: "none",
                      fontFamily: "var(--font-inter), 'Inter', sans-serif",
                      resize: "vertical",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    background: "linear-gradient(135deg, #D97706 0%, #F59E0B 100%)",
                    color: "#FFFFFF",
                    padding: "14px 28px",
                    borderRadius: "50px",
                    fontSize: "15px",
                    fontWeight: 700,
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 4px 16px rgba(217,119,6,0.35)",
                    fontFamily: "var(--font-inter), 'Inter', sans-serif",
                    marginTop: "4px",
                  }}
                >
                  Enviar solicitação
                </button>

                <p style={{ fontSize: "11px", color: "#7C7C8A", textAlign: "center", margin: 0 }}>
                  Seus dados estão seguros. Responderemos em até 2 horas.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            FOOTER
        ══════════════════════════════════════════ */}
        <footer
          style={{
            background: "#1A1A2E",
            color: "rgba(255,255,255,0.6)",
            padding: "48px clamp(20px, 5vw, 64px) 32px",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.5fr 1fr 1fr",
                gap: "40px",
                paddingBottom: "40px",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                marginBottom: "28px",
              }}
            >
              {/* Brand */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #D97706 0%, #F59E0B 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#FFFFFF",
                      fontFamily: "var(--font-work-sans), 'Work Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: "12px",
                      flexShrink: 0,
                    }}
                  >
                    CS
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-work-sans), 'Work Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: "14px",
                        color: "#FFFFFF",
                      }}
                    >
                      Dra. Camila Santos
                    </div>
                    <div style={{ fontSize: "11px", color: "#D97706", fontWeight: 600 }}>
                      Pediatria · CRM/SP 789012
                    </div>
                  </div>
                </div>
                <p style={{ fontSize: "13px", lineHeight: 1.7, maxWidth: "280px" }}>
                  Cuidando da saúde e do desenvolvimento das crianças de São Paulo com carinho,
                  dedicação e excelência médica.
                </p>
              </div>

              {/* Links */}
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-work-sans), 'Work Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "13px",
                    color: "#FFFFFF",
                    marginBottom: "16px",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  Atendimentos
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {["Consulta Pediátrica", "Puericultura", "Vacinação", "Desenvolvimento Infantil", "Urgências"].map(
                    (item) => (
                      <a
                        key={item}
                        href="#servicos"
                        style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "13px" }}
                      >
                        {item}
                      </a>
                    )
                  )}
                </div>
              </div>

              {/* Contact */}
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-work-sans), 'Work Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "13px",
                    color: "#FFFFFF",
                    marginBottom: "16px",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  Contato
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "13px" }}>
                  <span>📍 R. Oscar Freire, 800 — SP</span>
                  <span>📞 (11) 3456-7890</span>
                  <span>💬 (11) 99876-5432</span>
                  <span>🕐 Seg–Sex 8h–17h · Sáb 8h–12h</span>
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              <p style={{ fontSize: "12px", margin: 0 }}>
                © 2025 Dra. Camila Santos — CRM/SP 789012 · RQE 34567. Todos os direitos reservados.
              </p>
              <a
                href="/"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "rgba(217,119,6,0.12)",
                  border: "1px solid rgba(217,119,6,0.25)",
                  color: "#D97706",
                  padding: "6px 14px",
                  borderRadius: "50px",
                  fontSize: "11px",
                  fontWeight: 700,
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                }}
              >
                ✦ Site criado por Conduta Saúde
              </a>
            </div>
          </div>
        </footer>

        {/* ══════════════════════════════════════════
            RESPONSIVE STYLES
        ══════════════════════════════════════════ */}
        <style>{`
          @keyframes pediaNavIn {
            from { transform: translateY(-100%); opacity: 0; }
            to   { transform: none; opacity: 1; }
          }

          /* Hide nav links on mobile */
          @media (max-width: 768px) {
            .demo-pedia-navlinks {
              display: none !important;
            }
            .demo-pedia-hero > div {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }
            .demo-pedia-hero-photo {
              display: none !important;
            }
            /* Sobre section grid */
            #sobre > div {
              grid-template-columns: 1fr !important;
            }
            /* Localização grid */
            #localizacao > div > div:last-child {
              grid-template-columns: 1fr !important;
            }
            /* CTA grid */
            #contato > div {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }
            /* Footer grid */
            footer > div > div:first-child {
              grid-template-columns: 1fr !important;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .demo-pedia-nav {
              animation: none !important;
            }
            .hero-anim {
              opacity: 1 !important;
              transform: none !important;
              animation: none !important;
            }
            .reveal {
              opacity: 1 !important;
              transform: none !important;
              transition: none !important;
            }
          }
        `}</style>
      </div>
    </>
  );
}

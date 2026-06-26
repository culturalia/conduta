import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nossa Conduta — Propósito, Valores e Equipe',
  description:
    'Nosso nome não é acidental. Conduta é protocolo, ação e princípio. Conheça o propósito e a equipe que organiza operações para que o cuidado aconteça.',
  alternates: { canonical: 'https://condutasaude.com/sobre' },
};

const WHATSAPP_URL =
  'https://wa.me/5516996131393?text=Oi%20Hilary%2C%20vim%20do%20site%20da%20Conduta%20Sa%C3%BAde%20e%20quero%20agendar%20meu%20diagn%C3%B3stico%20com%20voc%C3%AA';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Início',
      item: 'https://condutasaude.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Sobre',
      item: 'https://condutasaude.com/sobre',
    },
  ],
};

const VALUES = [
  {
    title: 'Conduta antes de tudo',
    text: 'Fazemos a coisa certa, mesmo quando ninguém está olhando. Se a solução mais simples resolve, é ela que recomendamos.',
  },
  {
    title: 'Diagnóstico antes de receita',
    text: 'Entendemos antes de propor. Escutamos antes de falar. Sem entender sua realidade, qualquer proposta é chute.',
  },
  {
    title: 'Resultado que se mede',
    text: 'Se não dá para medir, não dá para melhorar. Cada projeto tem KPIs desde o dia 1. Celebramos números, não sensações.',
  },
  {
    title: 'Tecnologia a serviço do humano',
    text: 'A IA existe para que você tenha mais tempo para o que só humanos fazem: olhar nos olhos, escutar, cuidar.',
  },
  {
    title: 'Parceria, não projeto',
    text: 'Não entregamos e sumimos. Estamos junto, mês a mês, ajustando, medindo, crescendo com você.',
  },
];

const TEAM = [
  {
    name: 'Guilherme Ferreira',
    role: 'Tecnologia & Produto',
    initials: 'GF',
    color: '#0EA5E9',
    description:
      'Transforma complexidade técnica em soluções que funcionam na rotina real. Opera a plataforma Cloudia e conecta tecnologia à realidade de quem cuida de pessoas.',
  },
  {
    name: 'Filipe',
    role: 'Comercial & Relacionamento',
    initials: 'FP',
    color: '#0369A1',
    description:
      'Escuta antes de vender. Entende a necessidade de cada clínica e traduz em uma proposta que faz sentido — sem promessa vazia, só resultado.',
  },
  {
    name: 'Hilary',
    role: 'Consultoria & Operações',
    initials: 'HY',
    color: '#0369A1',
    description:
      'A pessoa que entra na sua operação, mapeia cada processo e transforma caos em rotina. SOPs, KPIs, gestão de mudança — ela garante que a transformação aconteça.',
  },
];

export default function SobrePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-inner">
          <span className="hero-eyebrow hero-anim">Nossa conduta</span>
          <h1 className="hero-anim" style={{ fontSize: 'clamp(32px, 4.5vw, 52px)' }}>
            Quando a operação funciona,
            <br />
            <strong>o cuidado acontece.</strong>
          </h1>
          <p className="hero-sub hero-anim" style={{ maxWidth: '640px' }}>
            Nosso nome não é acidental. Conduta é protocolo. É ação. É a decisão
            sobre o que fazer em seguida. É o passo que transforma diagnóstico em resultado.
          </p>
        </div>
      </section>

      {/* ── MANIFESTO ── */}
      <section className="section-pad" style={{ background: '#FFFFFF' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div className="reveal">
            <div
              style={{
                borderLeft: '3px solid #0EA5E9',
                paddingLeft: '32px',
                marginBottom: '48px',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-work-sans)',
                  fontSize: 'clamp(20px, 2.5vw, 28px)',
                  fontWeight: 300,
                  color: 'var(--text)',
                  lineHeight: 1.6,
                  letterSpacing: '-0.3px',
                }}
              >
                Existe um momento em que todo profissional de saúde percebe:
                cuidar de pessoas é a parte que ele ama.{' '}
                <strong style={{ fontWeight: 600 }}>O resto é o que consome.</strong>
              </p>
            </div>

            <div style={{ fontSize: '16px', lineHeight: 1.9, color: 'var(--text-secondary)' }}>
              <p style={{ marginBottom: '20px' }}>
                Agenda desorganizada. WhatsApp sem controle. Confirmação manual.
                Paciente que não aparece. Equipe sobrecarregada. Processos que cada um
                faz de um jeito.
              </p>
              <p style={{ marginBottom: '20px' }}>
                A Conduta Saúde existe para resolver esse &ldquo;resto&rdquo;.
              </p>
              <p style={{ marginBottom: '20px' }}>
                Não somos uma agência que faz sites bonitos.
                Não somos um software que cobra por acesso.
                Somos consultores que sentam com você, entendem sua operação,
                e constroem — <strong>junto</strong> — o caminho para ela funcionar.
              </p>
              <p style={{ marginBottom: '20px', color: 'var(--text)', fontWeight: 500 }}>
                Acreditamos que quando a operação funciona, o cuidado acontece.
                Que a tecnologia certa, implementada da maneira certa, liberta.
                Que um processo bem desenhado vale mais que qualquer ferramenta.
                E que resultado se mede em números, não em sensações.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-work-sans)',
                  fontSize: '18px',
                  fontWeight: 600,
                  color: 'var(--text)',
                  marginTop: '32px',
                }}
              >
                Essa é a nossa conduta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROPÓSITO + MISSÃO + VISÃO ── */}
      <section className="section-pad" style={{ background: 'var(--cream)' }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
            }}
          >
            {[
              {
                label: 'Propósito',
                text: 'Transformar a saúde pela organização. Quando a operação funciona, o cuidado acontece.',
              },
              {
                label: 'Missão',
                text: 'Organizar a operação de clínicas e consultórios com consultoria de processos e automação inteligente — para que profissionais de saúde foquem no que importa: cuidar de pessoas.',
              },
              {
                label: 'Visão',
                text: 'Ser a referência em gestão e automação para saúde no Brasil — a primeira ligação quando um profissional quer organizar, automatizar e crescer.',
              },
            ].map(({ label, text }) => (
              <div
                key={label}
                className="reveal"
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '36px 32px',
                  borderTop: '3px solid #0EA5E9',
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#0369A1',
                    marginBottom: '16px',
                  }}
                >
                  {label}
                </span>
                <p
                  style={{
                    fontFamily: 'var(--font-work-sans)',
                    fontSize: '18px',
                    fontWeight: 400,
                    color: 'var(--text)',
                    lineHeight: 1.6,
                  }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALORES ── */}
      <section className="section-pad" style={{ background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span
              style={{
                display: 'inline-block',
                background: 'rgba(14,165,233,0.08)',
                color: '#0369A1',
                padding: '4px 12px',
                borderRadius: '50px',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              Nossos valores
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-work-sans)',
                fontSize: 'clamp(24px, 3vw, 36px)',
                fontWeight: 300,
                color: 'var(--text)',
                lineHeight: 1.3,
                letterSpacing: '-0.5px',
              }}
            >
              Não são frases na parede. São <strong>critérios de decisão.</strong>
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {VALUES.map(({ title, text }, i) => (
              <div
                key={title}
                className="reveal"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '48px 1fr',
                  gap: '24px',
                  alignItems: 'start',
                  background: 'var(--cream)',
                  borderRadius: '16px',
                  padding: '32px',
                  border: '1px solid rgba(0,0,0,0.04)',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(14,165,233,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-work-sans)',
                    fontWeight: 700,
                    fontSize: '18px',
                    color: '#0369A1',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-work-sans)',
                      fontSize: '20px',
                      fontWeight: 600,
                      color: 'var(--text)',
                      marginBottom: '8px',
                    }}
                  >
                    {title}
                  </h3>
                  <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EQUIPE ── */}
      <section className="section-pad" style={{ background: 'var(--cream)' }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span
              style={{
                display: 'inline-block',
                background: 'rgba(14,165,233,0.08)',
                color: '#0369A1',
                padding: '4px 12px',
                borderRadius: '50px',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              A equipe
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-work-sans)',
                fontSize: 'clamp(24px, 3vw, 36px)',
                fontWeight: 300,
                color: 'var(--text)',
                lineHeight: 1.3,
                letterSpacing: '-0.5px',
              }}
            >
              Quem está por trás da <strong>Conduta</strong>
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '32px',
            }}
          >
            {TEAM.map(({ name, role, initials, color, description }) => (
              <div
                key={name}
                className="reveal"
                style={{
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  padding: '40px 32px',
                  textAlign: 'center',
                  border: '1px solid rgba(0,0,0,0.04)',
                }}
              >
                <div
                  style={{
                    width: '88px',
                    height: '88px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${color}, ${color}cc)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-work-sans)',
                    fontWeight: 700,
                    fontSize: '28px',
                    boxShadow: `0 8px 24px ${color}33`,
                  }}
                >
                  {initials}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-work-sans)',
                    fontSize: '20px',
                    fontWeight: 600,
                    color: 'var(--text)',
                    marginBottom: '4px',
                  }}
                >
                  {name}
                </h3>
                <p
                  style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    color,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    marginBottom: '16px',
                  }}
                >
                  {role}
                </p>
                <p style={{ fontSize: '14.5px', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="cta-section"
        style={{ textAlign: 'center' }}
      >
        <div className="cta-inner reveal">
          <span className="cta-eyebrow">O primeiro passo</span>
          <h2>
            Pronto para ter a <strong>conduta certa?</strong>
          </h2>
          <p>
            60 minutos de conversa. Sem custo, sem compromisso.
            Só a clareza que você precisa para dar o próximo passo.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            className="btn-cta"
          >
            Agendar diagnóstico gratuito
          </a>
          <p className="cta-note">
            Operação organizada, cuidado humanizado.
          </p>
        </div>
      </section>
    </>
  );
}

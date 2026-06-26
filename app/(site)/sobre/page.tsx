import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre a Conduta Saúde — Quem Somos',
  description:
    'Conheça a equipe da Conduta Saúde. Consultoria especializada em gestão de processos e automação com IA para médicos que atendem particular.',
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

const TEAM = [
  {
    name: 'Guilherme Ferreira',
    role: 'Tecnologia & Produto',
    initials: 'GF',
    color: '#0EA5E9',
    description:
      'Responsável pela implementação técnica, produto digital e operação da plataforma Cloudia de automação via WhatsApp. Conecta tecnologia e saúde para criar soluções que simplificam o dia a dia do médico.',
  },
  {
    name: 'Filipe',
    role: 'Comercial & Relacionamento',
    initials: 'FP',
    color: '#0369A1',
    description:
      'Lidera o relacionamento com médicos e a estratégia comercial. Especialista em entender as necessidades de cada consultório e traduzir isso em uma proposta que gera resultado real.',
  },
  {
    name: 'Hilary',
    role: 'Consultoria & Operações',
    initials: 'HY',
    color: '#0369A1',
    description:
      'Conduz a consultoria de processos — mapeamento de fluxos, criação de SOPs, KPIs e gestão de mudança. Garante que cada implementação gere impacto mensurável no consultório.',
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
      <section className="hero" style={{ paddingBottom: '48px' }}>
        <div className="hero-inner" style={{ maxWidth: '840px' }}>
          <span className="hero-eyebrow hero-anim">Quem somos</span>
          <h1 className="hero-anim" style={{ fontSize: 'clamp(32px, 4.5vw, 52px)' }}>
            Processos claros. <strong>Tecnologia com propósito.</strong>
          </h1>
          <p className="hero-sub hero-anim" style={{ maxWidth: '640px' }}>
            A Conduta Saúde nasceu da convicção de que médicos que atendem particular
            merecem uma operação organizada, digital e humana — sem precisar entender de tecnologia.
          </p>
        </div>
      </section>

      {/* ── MISSÃO ── */}
      <section className="section-pad" style={{ background: '#FFFFFF' }}>
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div className="reveal">
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
                marginBottom: '20px',
              }}
            >
              Nossa missão
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-work-sans)',
                fontSize: 'clamp(24px, 3vw, 36px)',
                fontWeight: 300,
                color: 'var(--text)',
                lineHeight: 1.3,
                letterSpacing: '-0.5px',
                marginBottom: '24px',
              }}
            >
              Organizar a operação do seu consultório para que você se dedique
              ao que importa: <strong>cuidar de pessoas.</strong>
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-secondary)', maxWidth: '700px' }}>
              Combinamos consultoria de processos com automação inteligente para transformar
              a rotina de médicos que atendem particular. Do agendamento à presença digital,
              cuidamos da estrutura para que seu consultório funcione com previsibilidade,
              eficiência e profissionalismo.
            </p>
          </div>
        </div>
      </section>

      {/* ── O QUE NOS DIFERENCIA ── */}
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
              Por que a Conduta
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
              Não somos agência. Não somos software. <strong>Somos parceiros do seu consultório.</strong>
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {[
              {
                icon: '🔍',
                title: 'Diagnóstico real',
                text: 'Antes de qualquer solução, entendemos sua rotina. 60 minutos de conversa gratuita para mapear o que realmente precisa de atenção.',
              },
              {
                icon: '🤝',
                title: 'Acompanhamento contínuo',
                text: 'Não entregamos e sumimos. Monitoramos indicadores, ajustamos processos e te acompanhamos mês a mês.',
              },
              {
                icon: '⚡',
                title: 'Tecnologia acessível',
                text: 'Automação via WhatsApp, sites profissionais e ferramentas digitais — tudo configurado e explicado para você.',
              },
              {
                icon: '🏥',
                title: 'Especialistas em saúde',
                text: 'Entendemos as particularidades de um consultório médico: CFM, LGPD, jornada do paciente, no-show, agenda.',
              },
            ].map(({ icon, title, text }) => (
              <div
                key={title}
                className="reveal"
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '32px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                  border: '1px solid rgba(0,0,0,0.04)',
                }}
              >
                <div style={{ fontSize: '28px', marginBottom: '16px' }}>{icon}</div>
                <h3
                  style={{
                    fontFamily: 'var(--font-work-sans)',
                    fontSize: '18px',
                    fontWeight: 600,
                    color: 'var(--text)',
                    marginBottom: '10px',
                  }}
                >
                  {title}
                </h3>
                <p style={{ fontSize: '14.5px', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EQUIPE ── */}
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
                  background: 'var(--cream)',
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
        className="section-pad"
        style={{
          background: 'linear-gradient(180deg, var(--cream) 0%, #FFFFFF 100%)',
          textAlign: 'center',
        }}
      >
        <div className="reveal" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: 'var(--font-work-sans)',
              fontSize: 'clamp(24px, 3.5vw, 40px)',
              fontWeight: 300,
              color: 'var(--text)',
              lineHeight: 1.2,
              letterSpacing: '-1px',
              marginBottom: '16px',
            }}
          >
            Vamos <strong>conversar?</strong>
          </h2>
          <p
            style={{
              fontSize: '16px',
              lineHeight: 1.7,
              color: 'var(--text-secondary)',
              marginBottom: '32px',
            }}
          >
            Agende um diagnóstico gratuito de 60 minutos. Sem compromisso, sem jargão técnico
            — só uma conversa sobre como organizar o seu consultório.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn-primary">
            Agendar diagnóstico gratuito
          </a>
        </div>
      </section>
    </>
  );
}

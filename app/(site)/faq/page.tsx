import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Perguntas Frequentes | Conduta Saúde',
  description:
    'Tire suas dúvidas sobre a consultoria da Conduta Saúde para médicos que atendem particular: diagnóstico gratuito, automação com IA, criação de site profissional e investimento mensal.',
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
      name: 'Perguntas Frequentes',
      item: 'https://condutasaude.com/faq',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'O que é o diagnóstico gratuito?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'É uma conversa remota de 30 a 60 minutos onde analisamos a rotina do seu consultório, identificamos gargalos e entendemos seus objetivos. Rápido, sem custo e sem compromisso de contratação. Ao final, você recebe um panorama claro dos pontos de melhoria e das oportunidades de automação para o seu dia a dia.',
      },
    },
    {
      '@type': 'Question',
      name: 'Preciso entender de tecnologia para trabalhar com vocês?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não. A Conduta cuida de toda a parte técnica. Configuramos, integramos e te acompanhamos em cada etapa para que você use as ferramentas com confiança. Você não precisa saber nada de tecnologia. Nosso papel é justamente traduzir a complexidade técnica em soluções simples para o seu consultório.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quanto tempo leva para ver resultados?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Os primeiros resultados aparecem em 30 a 60 dias. A automação de confirmação de consultas, por exemplo, reduz faltas no seu consultório já na primeira semana de operação. Resultados mais estruturais, como reorganização completa de processos, amadurecem ao longo de 90 dias de acompanhamento.',
      },
    },
    {
      '@type': 'Question',
      name: 'Para quais médicos vocês trabalham?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Médicos de todas as especialidades que atendem particular. Do consultório individual ao profissional que atende em múltiplos espaços. Cada proposta é adaptada à sua realidade e ao momento da sua carreira.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como funciona a automação do WhatsApp?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Utilizamos a Cloudia, plataforma de IA especializada em saúde, integrada à API Oficial do WhatsApp (Meta). Isso garante estabilidade, entregabilidade e zero risco de banimento do seu número.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual o investimento mensal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cada proposta é personalizada com base no diagnóstico. Temos planos a partir de valores que cabem no orçamento de um consultório individual, até o 360° com presença digital completa. O valor é definido após o diagnóstico gratuito, considerando as frentes de atuação necessárias.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vocês atendem médicos de reprodução humana?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. Nosso time tem experiência direta com medicina reprodutiva e fertilidade. Entendemos as particularidades do atendimento em reprodução assistida e podemos adaptar toda a comunicação e automação para essa especialidade.',
      },
    },
    {
      '@type': 'Question',
      name: 'Posso começar apenas com o site?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Claro. Muitos médicos começam com a criação do site profissional e depois evoluem para automação do WhatsApp e organização de processos. Você escolhe o ritmo.',
      },
    },
  ],
};

export default function FAQPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── HERO / HEADER ── */}
      <section
        className="hero"
      >
        <div className="hero-inner">
          <span className="hero-eyebrow hero-anim">Perguntas frequentes</span>
          <h1 className="hero-anim" style={{ fontSize: 'clamp(32px, 4.5vw, 52px)' }}>
            Dúvidas sobre a <strong>Conduta Saúde</strong>
          </h1>
          <p className="hero-sub hero-anim">
            Reunimos as perguntas mais comuns de médicos que atendem particular sobre nosso processo
            de consultoria, automação e presença digital. Se sua dúvida não estiver aqui, fale com a
            gente pelo WhatsApp.
          </p>
        </div>
      </section>

      {/* ── FAQ ACCORDION ── */}
      <section className="faq section-pad" id="faq">
        <div className="container">
          <div className="faq-grid">
            <details className="faq-item reveal">
              <summary>O que é o diagnóstico gratuito?</summary>
              <p>
                É uma conversa remota de 30 a 60 minutos onde analisamos a rotina do seu
                consultório, identificamos gargalos e entendemos seus objetivos. Rápido, sem custo e
                sem compromisso de contratação. Ao final, você já sai com um panorama claro dos
                pontos de melhoria e das oportunidades de automação para o seu dia a dia.
              </p>
            </details>
            <details
              className="faq-item reveal"
              style={{ '--d': '.05s' } as React.CSSProperties}
            >
              <summary>Preciso entender de tecnologia para trabalhar com vocês?</summary>
              <p>
                Não. A Conduta cuida de toda a parte técnica. Configuramos, integramos e te
                acompanhamos em cada etapa para que você use as ferramentas com confiança. Você não
                precisa saber nada de tecnologia. Nosso papel é justamente traduzir a complexidade
                técnica em soluções simples para o seu consultório.
              </p>
            </details>
            <details
              className="faq-item reveal"
              style={{ '--d': '.1s' } as React.CSSProperties}
            >
              <summary>Quanto tempo leva para ver resultados?</summary>
              <p>
                Os primeiros resultados aparecem em 30 a 60 dias. A automação de confirmação de
                consultas, por exemplo, reduz faltas no seu consultório já na primeira semana de
                operação. Resultados mais estruturais, como a reorganização completa de processos,
                amadurecem ao longo de 90 dias de acompanhamento contínuo.
              </p>
            </details>
            <details
              className="faq-item reveal"
              style={{ '--d': '.15s' } as React.CSSProperties}
            >
              <summary>Para quais médicos vocês trabalham?</summary>
              <p>
                Médicos de todas as especialidades que atendem particular. Do consultório individual
                ao profissional que atende em múltiplos espaços. Cada proposta é adaptada à sua
                realidade e ao momento da sua carreira.
              </p>
            </details>
            <details
              className="faq-item reveal"
              style={{ '--d': '.2s' } as React.CSSProperties}
            >
              <summary>Como funciona a automação do WhatsApp?</summary>
              <p>
                Utilizamos a Cloudia, plataforma de IA especializada em saúde, integrada à API
                Oficial do WhatsApp (Meta). Isso garante estabilidade, entregabilidade e zero
                risco de banimento do seu número. A Cloudia já realizou mais de 7 milhões de
                atendimentos e agendou mais de 1 milhão de consultas automaticamente.
              </p>
            </details>
            <details
              className="faq-item reveal"
              style={{ '--d': '.25s' } as React.CSSProperties}
            >
              <summary>Qual o investimento mensal?</summary>
              <p>
                Cada proposta é personalizada com base no diagnóstico. Temos planos a partir de
                valores que cabem no orçamento de um consultório individual, até o 360° com presença
                digital completa. O valor é definido após o diagnóstico gratuito, considerando as
                frentes de atuação necessárias.
              </p>
            </details>
            <details
              className="faq-item reveal"
              style={{ '--d': '.3s' } as React.CSSProperties}
            >
              <summary>Vocês atendem médicos de reprodução humana?</summary>
              <p>
                Sim. Nosso time tem experiência direta com medicina reprodutiva e fertilidade.
                Entendemos as particularidades do atendimento em reprodução assistida e podemos
                adaptar toda a comunicação e automação para essa especialidade.
              </p>
            </details>
            <details
              className="faq-item reveal"
              style={{ '--d': '.35s' } as React.CSSProperties}
            >
              <summary>Posso começar apenas com o site?</summary>
              <p>
                Claro. Muitos médicos começam com a criação do site profissional e depois evoluem
                para automação do WhatsApp e organização de processos. Você escolhe o ritmo.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section" id="diagnostico">
        <div className="cta-inner reveal">
          <span className="cta-eyebrow">Ainda tem dúvidas?</span>
          <h2>
            Fale com a gente e tire suas <strong>dúvidas</strong>
          </h2>
          <p>
            Agende seu diagnóstico gratuito ou envie sua pergunta diretamente pelo WhatsApp. Remoto,
            rápido e sem compromisso.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            className="btn-cta"
          >
            Falar pelo WhatsApp
          </a>
          <p className="cta-note">Atendimento remoto · Resposta em até 24h</p>
        </div>
      </section>
    </>
  );
}

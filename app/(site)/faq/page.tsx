import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Perguntas Frequentes | Conduta Saúde',
  description:
    'Tire suas dúvidas sobre a consultoria da Conduta Saúde: diagnóstico gratuito, automação com IA, gestão de processos para clínicas e consultórios.',
  alternates: { canonical: 'https://condutasaude.com/faq' },
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
        text: 'Uma conversa de 60 minutos onde entendemos sua operação, identificamos gargalos e mapeamos oportunidades. Sem custo, sem compromisso, sem apresentação de vendas. Você sai com clareza sobre o que precisa mudar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Preciso entender de tecnologia para trabalhar com vocês?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não. A Conduta cuida de toda a parte técnica — configuração, integração e acompanhamento. Nosso trabalho é traduzir complexidade em soluções simples. Você foca no que sabe fazer: cuidar de pessoas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quanto tempo leva para ver resultados?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A automação de confirmação reduz faltas já na primeira semana. Resultados estruturais, como reorganização completa de processos, amadurecem em 60 a 90 dias de acompanhamento contínuo.',
      },
    },
    {
      '@type': 'Question',
      name: 'Para quais profissionais vocês trabalham?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Profissionais de saúde de todas as especialidades — do consultório individual à policlínica. Cada proposta é adaptada à sua realidade e ao momento da sua operação.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como funciona a automação do WhatsApp?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Utilizamos a Cloudia, IA especializada em saúde, integrada à API Oficial do WhatsApp (Meta). Estabilidade total e risco mínimo de banimento do seu número.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual o investimento mensal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cada proposta é personalizada com base no diagnóstico. Temos planos desde o consultório individual até a transformação completa com presença digital. O valor é definido após entendermos sua operação.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vocês atendem especialistas em reprodução humana?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. Nosso time tem experiência direta com medicina reprodutiva e fertilidade. Entendemos as particularidades do atendimento em reprodução assistida.',
      },
    },
    {
      '@type': 'Question',
      name: 'Posso começar apenas com o site?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Claro. Muitos profissionais começam pela presença digital e depois evoluem para automação e gestão de processos. Você escolhe o ritmo — a gente acompanha.',
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
            Sem letra miúda. <strong>Sem rodeios.</strong>
          </h1>
          <p className="hero-sub hero-anim">
            As dúvidas mais comuns de profissionais de saúde sobre como trabalhamos.
            Se a sua não estiver aqui, manda pelo WhatsApp — a gente responde rápido.
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
                Uma conversa de 60 minutos — remota ou presencial — onde
                entendemos sua operação de verdade. Processos, dores, objetivos.
                Sem custo, sem compromisso, sem apresentação de vendas. Ao final,
                você sai com um panorama claro do que precisa mudar e por onde começar.
              </p>
            </details>
            <details
              className="faq-item reveal"
              style={{ '--d': '.05s' } as React.CSSProperties}
            >
              <summary>Preciso entender de tecnologia?</summary>
              <p>
                Zero. A Conduta cuida de toda a parte técnica — configuração,
                integração, treinamento. Nosso trabalho é traduzir complexidade
                em soluções simples que funcionam na sua rotina. Você foca no que
                sabe fazer: cuidar de pessoas.
              </p>
            </details>
            <details
              className="faq-item reveal"
              style={{ '--d': '.1s' } as React.CSSProperties}
            >
              <summary>Quanto tempo até ver resultado?</summary>
              <p>
                A automação de confirmação reduz faltas já na primeira semana —
                é o resultado mais imediato. Transformações mais profundas, como
                reorganização completa de processos e adoção pela equipe, amadurecem
                em 60 a 90 dias. A gente fica junto durante todo esse período.
              </p>
            </details>
            <details
              className="faq-item reveal"
              style={{ '--d': '.15s' } as React.CSSProperties}
            >
              <summary>Vocês trabalham com quais profissionais?</summary>
              <p>
                Profissionais de saúde de todas as especialidades — do consultório
                individual à policlínica com múltiplos profissionais. Cada proposta
                é adaptada à sua realidade. Não existe pacote engessado.
              </p>
            </details>
            <details
              className="faq-item reveal"
              style={{ '--d': '.2s' } as React.CSSProperties}
            >
              <summary>Como funciona a automação do WhatsApp?</summary>
              <p>
                Utilizamos a Cloudia, IA especializada em saúde, integrada à API
                Oficial do WhatsApp (Meta). Isso significa: estabilidade total,
                entregabilidade garantida e risco mínimo de banimento do seu número.
                A Cloudia já realizou mais de 7 milhões de atendimentos e agendou
                mais de 1 milhão de consultas automaticamente.
              </p>
            </details>
            <details
              className="faq-item reveal"
              style={{ '--d': '.25s' } as React.CSSProperties}
            >
              <summary>Qual o investimento?</summary>
              <p>
                Cada proposta é personalizada — porque cada operação é diferente.
                Temos planos desde o consultório individual até a transformação
                completa com presença digital. O valor é definido após o diagnóstico
                gratuito, quando já entendemos o que faz sentido para você.
              </p>
            </details>
            <details
              className="faq-item reveal"
              style={{ '--d': '.3s' } as React.CSSProperties}
            >
              <summary>Atendem especialistas em reprodução humana?</summary>
              <p>
                Sim. Nosso time tem experiência direta com medicina reprodutiva e
                fertilidade. Entendemos as particularidades do atendimento em
                reprodução assistida e adaptamos toda a comunicação e automação
                para essa especialidade.
              </p>
            </details>
            <details
              className="faq-item reveal"
              style={{ '--d': '.35s' } as React.CSSProperties}
            >
              <summary>Posso começar só com o site?</summary>
              <p>
                Claro. Muitos profissionais começam pela presença digital e depois
                evoluem para automação e gestão de processos. Você escolhe o ritmo
                — a gente acompanha. A ideia é crescer junto, no tempo que faz
                sentido para você.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section" id="diagnostico">
        <div className="cta-inner reveal">
          <span className="cta-eyebrow">Não achou sua dúvida?</span>
          <h2>
            Pergunta direto. <strong>A gente responde.</strong>
          </h2>
          <p>
            Manda um WhatsApp ou agenda seu diagnóstico gratuito.
            Sem robô, sem fila — conversa de verdade.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            className="btn-cta"
          >
            Falar pelo WhatsApp
          </a>
          <p className="cta-note">Operação organizada, cuidado humanizado.</p>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Perguntas Frequentes | Conduta Saúde',
  description:
    'Tire suas dúvidas sobre a consultoria da Conduta Saúde: diagnóstico gratuito, automação com IA, implementação de ferramentas, tipos de clínica atendidos e investimento mensal.',
};

const WHATSAPP_URL =
  'https://wa.me/5516996131393?text=Oi%20Hilary%2C%20vim%20do%20site%20da%20Conduta%20Sa%C3%BAde%20e%20quero%20agendar%20meu%20diagn%C3%B3stico%20com%20voc%C3%AA';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'O que é o diagnóstico gratuito?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'É uma reunião de 60 minutos — remota ou presencial — onde mapeamos os processos da sua clínica, identificamos gargalos e entendemos seus objetivos. Sem custo e sem compromisso de contratação. Ao final, você recebe um panorama claro dos pontos de melhoria e das oportunidades de automação para a sua operação.',
      },
    },
    {
      '@type': 'Question',
      name: 'Preciso entender de tecnologia para trabalhar com vocês?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não. A Conduta cuida de toda a parte técnica. Configuramos, integramos e treinamos seu time para usar as ferramentas. Você não precisa saber nada de tecnologia. Nosso papel é justamente traduzir a complexidade técnica em soluções simples para o dia a dia da clínica.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quanto tempo leva para ver resultados?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Os primeiros resultados aparecem em 30 a 60 dias. A automação de confirmação de consultas, por exemplo, reduz faltas já na primeira semana de operação. Resultados mais estruturais, como reorganização completa de processos, amadurecem ao longo de 90 dias de acompanhamento.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vocês trabalham com quais tipos de clínica?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Atendemos clínicas médicas, odontológicas e grupos com múltiplas unidades. Do consultório com 1 profissional ao grupo com 15+ colaboradores. Cada proposta é adaptada ao porte e à maturidade operacional da clínica.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como funciona a automação do WhatsApp?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Utilizamos a Cloudia, plataforma de IA especializada em saúde, integrada à API Oficial do WhatsApp (Meta). Isso garante estabilidade, entregabilidade e zero risco de banimento do número da clínica.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual o investimento mensal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cada proposta é personalizada com base no diagnóstico. Temos planos a partir do Essencial (consultórios pequenos) até o 360° (transformação completa com presença digital). O valor é definido após o diagnóstico gratuito, considerando as frentes de atuação necessárias.',
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

      {/* ── HERO / HEADER ── */}
      <section
        className="hero"
        style={{ paddingBottom: '48px' }}
      >
        <div className="hero-inner">
          <span className="hero-eyebrow hero-anim">Perguntas frequentes</span>
          <h1 className="hero-anim" style={{ fontSize: 'clamp(32px, 4.5vw, 52px)' }}>
            Dúvidas sobre a <strong>Conduta Saúde</strong>
          </h1>
          <p className="hero-sub hero-anim">
            Reunimos as perguntas mais comuns sobre nosso processo de consultoria, implementação de
            ferramentas e automação para clínicas. Se sua dúvida não estiver aqui, fale com a gente
            pelo WhatsApp.
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
                É uma reunião de 60 minutos — remota ou presencial — onde mapeamos os processos da
                sua clínica, identificamos gargalos e entendemos seus objetivos. Sem custo e sem
                compromisso de contratação. Ao final da conversa, você já sai com um panorama claro
                dos pontos de melhoria e das oportunidades de automação para a sua operação.
              </p>
            </details>
            <details
              className="faq-item reveal"
              style={{ '--d': '.05s' } as React.CSSProperties}
            >
              <summary>Preciso entender de tecnologia para trabalhar com vocês?</summary>
              <p>
                Não. A Conduta cuida de toda a parte técnica. Configuramos, integramos e treinamos
                seu time para usar as ferramentas. Você não precisa saber nada de tecnologia. Nosso
                papel é justamente traduzir a complexidade técnica em soluções simples e funcionais
                para o dia a dia da sua clínica.
              </p>
            </details>
            <details
              className="faq-item reveal"
              style={{ '--d': '.1s' } as React.CSSProperties}
            >
              <summary>Quanto tempo leva para ver resultados?</summary>
              <p>
                Os primeiros resultados aparecem em 30 a 60 dias. A automação de confirmação de
                consultas, por exemplo, reduz faltas já na primeira semana de operação. Resultados
                mais estruturais, como a reorganização completa de processos e a melhoria de KPIs
                operacionais, amadurecem ao longo de 90 dias de acompanhamento contínuo.
              </p>
            </details>
            <details
              className="faq-item reveal"
              style={{ '--d': '.15s' } as React.CSSProperties}
            >
              <summary>Vocês trabalham com quais tipos de clínica?</summary>
              <p>
                Atendemos clínicas médicas, odontológicas e grupos com múltiplas unidades. Do
                consultório com 1 profissional ao grupo com 15+ colaboradores. Cada proposta é
                adaptada ao porte, à especialidade e à maturidade operacional da clínica, garantindo
                que as soluções façam sentido para o seu contexto.
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
                risco de banimento do número da clínica. A Cloudia já realizou mais de 7 milhões
                de atendimentos e agendou mais de 1 milhão de consultas automaticamente.
              </p>
            </details>
            <details
              className="faq-item reveal"
              style={{ '--d': '.25s' } as React.CSSProperties}
            >
              <summary>Qual o investimento mensal?</summary>
              <p>
                Cada proposta é personalizada com base no diagnóstico. Temos planos a partir do
                Essencial (para consultórios pequenos) até o 360° (para clínicas que querem
                transformação completa com presença digital). O valor é definido após o diagnóstico
                gratuito, levando em conta as frentes de atuação necessárias e o porte da sua
                operação.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section" id="diagnostico" style={{ minHeight: '60vh' }}>
        <div className="cta-inner reveal">
          <span className="cta-eyebrow">Ainda tem dúvidas?</span>
          <h2>
            Fale com a gente e tire suas <strong>dúvidas</strong>
          </h2>
          <p>
            Agende um diagnóstico gratuito de 60 minutos ou envie sua pergunta diretamente pelo
            WhatsApp. Sem compromisso.
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

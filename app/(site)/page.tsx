// No extra metadata needed — layout.tsx handles defaults

const WHATSAPP_URL =
  'https://wa.me/5516996131393?text=Oi%20Hilary%2C%20vim%20do%20site%20da%20Conduta%20Sa%C3%BAde%20e%20quero%20agendar%20meu%20diagn%C3%B3stico%20com%20voc%C3%AA';

const medicalBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Conduta Saúde',
  description:
    'Consultoria especializada em gestão de processos e automação para clínicas médicas e odontológicas.',
  url: 'https://condutasaude.com',
  telephone: '+5516996131393',
  image: 'https://condutasaude.com/og-image.png',
  logo: 'https://condutasaude.com/favicon.svg',
  sameAs: ['https://www.instagram.com/conduta.saude/'],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+5516996131393',
    contactType: 'sales',
    availableLanguage: 'Portuguese',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Serviços',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Gestão de Processos',
          description:
            'Mapeamento e redesenho dos fluxos operacionais. SOPs, checklists, KPIs e relatórios de performance.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Implementação de IA no Atendimento',
          description:
            'Automação de agendamento, confirmação e follow-up via WhatsApp com inteligência artificial.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Capacitação de Times',
          description:
            'Treinamento da equipe para adoção de novos processos e ferramentas. Gestão de mudança organizacional.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Presença Digital e Autoridade',
          description:
            'Gestão de redes sociais, conteúdo, Google Meu Negócio e reputação online para clínicas.',
        },
      },
    ],
  },
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
        text: 'É uma reunião de 60 minutos — remota ou presencial — onde mapeamos os processos da sua clínica, identificamos gargalos e entendemos seus objetivos. Sem custo e sem compromisso de contratação.',
      },
    },
    {
      '@type': 'Question',
      name: 'Preciso entender de tecnologia para trabalhar com vocês?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não. A Conduta cuida de toda a parte técnica. Configuramos, integramos e treinamos seu time para usar as ferramentas. Você não precisa saber nada de tecnologia.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quanto tempo leva para ver resultados?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Os primeiros resultados aparecem em 30 a 60 dias. A automação de confirmação de consultas, por exemplo, reduz faltas já na primeira semana de operação.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vocês trabalham com quais tipos de clínica?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Atendemos clínicas médicas, odontológicas e grupos com múltiplas unidades. Do consultório com 1 profissional ao grupo com 15+ colaboradores.',
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
        text: 'Cada proposta é personalizada com base no diagnóstico. Temos planos a partir do Essencial (consultórios pequenos) até o 360° (transformação completa com presença digital).',
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── HERO ── */}
      <section className="hero" id="inicio">
        <div className="hero-inner">
          <span className="hero-eyebrow hero-anim">Consultoria especializada em clínicas</span>
          <h1 className="hero-anim">
            Processos organizados.
            <br />
            Automação <strong>que funciona.</strong>
          </h1>
          <p className="hero-sub hero-anim">
            A Conduta Saúde estrutura os processos da sua clínica e implementa automações que
            realmente funcionam no dia a dia — para você parar de apagar incêndio e começar a
            crescer.
          </p>
          <div className="hero-actions hero-anim">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              className="btn-primary"
            >
              Agendar diagnóstico gratuito
            </a>
            <a href="#servicos" className="btn-ghost">
              Ver como atuamos
            </a>
          </div>
        </div>
      </section>

      {/* ── STATS (integrated with hero) ── */}
      <div className="hero-stats">
        <div className="hero-stats-inner reveal">
          <div className="hero-stats-ecg" aria-hidden="true">
            <svg viewBox="0 0 160 32" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 16 H50 L58 10 L66 16 L69 18 L76 4 L83 28 L88 16 L95 12 L102 16 H160"
                stroke="#0EA5E9"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="stats-grid" aria-label="Dados sobre o mercado de clínicas">
            <div className="stat-card">
              <div className="stat-number">59%</div>
              <div className="stat-label">
                dos agendamentos acontecem fora do horário comercial
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-number">53%</div>
              <div className="stat-label">
                dos pacientes faltam porque simplesmente esquecem
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-number">42%</div>
              <div className="stat-label">
                das clínicas têm dificuldade em confirmar consultas
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-number">R$144mil</div>
              <div className="stat-label">
                perda anual com problemas de agendamento por clínica
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── CHALLENGE ── */}
      <section className="challenge section-pad" id="problema">
        <div className="container">
          <div className="challenge-header reveal">
            <span className="eyebrow">O problema</span>
            <h2 className="section-title">
              Já tentou usar uma IA ou uma ferramenta e <strong>não saiu do lugar?</strong>
            </h2>
            <p className="section-desc">
              A maioria das clínicas sabe que precisa se modernizar — mas entre contratar uma
              ferramenta e colocá-la para funcionar de verdade, existe um abismo. A Conduta existe
              para atravessar esse abismo com você.
            </p>
          </div>
          <div className="pain-grid">
            <div className="pain-card reveal">
              <h4>&ldquo;Contratei uma IA e ninguém usa&rdquo;</h4>
              <p>
                Ferramentas implementadas pela metade, sem treinamento do time e sem processo por
                trás — não funcionam.
              </p>
            </div>
            <div
              className="pain-card reveal"
              style={{ '--d': '.1s' } as React.CSSProperties}
            >
              <h4>&ldquo;Cada um faz do seu jeito&rdquo;</h4>
              <p>
                Sem processos definidos, nenhuma ferramenta resolve. A tecnologia amplifica o caos,
                não resolve.
              </p>
            </div>
            <div
              className="pain-card reveal"
              style={{ '--d': '.15s' } as React.CSSProperties}
            >
              <h4>&ldquo;Ainda perdemos consultas por falha de comunicação&rdquo;</h4>
              <p>
                Confirmações manuais, remarcações esquecidas e agenda ociosa — tudo resolvível com a
                ferramenta certa implementada do jeito certo.
              </p>
            </div>
            <div
              className="pain-card reveal"
              style={{ '--d': '.25s' } as React.CSSProperties}
            >
              <h4>&ldquo;Demoro para responder e perco o paciente&rdquo;</h4>
              <p>
                Paciente que não recebe resposta em minutos vai para a clínica concorrente.
                Atendimento lento custa novos pacientes todos os dias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="services section-pad" id="servicos">
        <div className="container">
          <div className="services-header reveal">
            <div>
              <span className="eyebrow">O que fazemos</span>
              <h2 className="section-title">
                Quatro frentes,
                <br />
                uma <strong>solução integrada</strong>
              </h2>
            </div>
            <p className="section-desc">
              Atuamos nas áreas que mais impactam resultado. A combinação de frentes é definida no
              diagnóstico — personalizada para cada clínica.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card reveal">
              <div className="service-accent-line"></div>
              <h3 className="service-name">Gestão de Processos</h3>
              <div className="service-body">
                <p>
                  Mapeamento e redesenho dos fluxos operacionais. Eliminação de gargalos, criação de
                  rotinas, SOPs e checklists que o time realmente usa. Acompanhamento contínuo com
                  reuniões e relatórios.
                </p>
                <div className="service-tags">
                  <span className="service-tag">Mapeamento de fluxos</span>
                  <span className="service-tag">SOPs</span>
                  <span className="service-tag">KPIs</span>
                  <span className="service-tag">Relatórios mensais</span>
                </div>
              </div>
            </div>

            <div
              className="service-card reveal"
              style={{ '--d': '.1s' } as React.CSSProperties}
            >
              <div className="service-accent-line"></div>
              <h3 className="service-name">Implementação de IA no atendimento</h3>
              <div className="service-body">
                <p>
                  Ajudamos a clínica a escolher, implementar e colocar em operação a IA certa para o
                  seu atendimento — agendamento, confirmação, follow-up e comunicação automática com
                  pacientes via WhatsApp.
                </p>
                <div className="service-tags">
                  <span className="service-tag">Automação WhatsApp</span>
                  <span className="service-tag">Redução de no-show</span>
                  <span className="service-tag">Dashboard</span>
                </div>
              </div>
            </div>

            <div
              className="service-card reveal"
              style={{ '--d': '.2s' } as React.CSSProperties}
            >
              <div className="service-accent-line"></div>
              <h3 className="service-name">Capacitação de Times</h3>
              <div className="service-body">
                <p>
                  Treinamento completo da equipe para adoção dos novos processos e ferramentas.
                  Gestão de mudança organizacional para garantir que a transformação aconteça na
                  prática — não só no papel.
                </p>
                <div className="service-tags">
                  <span className="service-tag">Onboarding</span>
                  <span className="service-tag">Gestão de mudança</span>
                  <span className="service-tag">Adoção de processos</span>
                </div>
              </div>
            </div>

            <div
              className="service-card reveal"
              style={{ '--d': '.3s' } as React.CSSProperties}
            >
              <div className="service-accent-line"></div>
              <h3 className="service-name">Presença Digital &amp; Autoridade</h3>
              <div className="service-body">
                <p>
                  Gestão de redes sociais, produção de conteúdo, Google Meu Negócio e reputação
                  online. Posicionamento da clínica como referência e autoridade na sua especialidade
                  e região.
                </p>
                <div className="service-tags">
                  <span className="service-tag">Redes sociais</span>
                  <span className="service-tag">Conteúdo</span>
                  <span className="service-tag">Google Meu Negócio</span>
                  <span className="service-tag">Reputação</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGY ── */}
      <section className="technology section-pad" id="ferramentas">
        <div className="container">
          <div className="tech-header reveal">
            <span className="eyebrow">Implementação de ferramentas</span>
            <h2 className="section-title">
              Ajudamos você a implementar IA no seu atendimento
            </h2>
            <p className="section-desc">
              Não basta contratar uma ferramenta — ela precisa ser configurada, integrada ao processo
              da clínica e o time precisa saber usar. É exatamente isso que a Conduta faz.
            </p>
          </div>

          <div className="tech-grid">
            <div className="tech-feat reveal">
              <div className="tech-dot"></div>
              <div>
                <h4>Escolhemos a ferramenta certa</h4>
                <p>
                  Avaliamos o perfil da clínica e indicamos a solução que realmente faz sentido — sem
                  empurrar o que não funciona.
                </p>
              </div>
            </div>
            <div
              className="tech-feat reveal"
              style={{ '--d': '.1s' } as React.CSSProperties}
            >
              <div className="tech-dot"></div>
              <div>
                <h4>Implementamos do zero</h4>
                <p>
                  Configuramos, integramos e colocamos em operação. A clínica não precisa saber nada
                  de tecnologia para isso.
                </p>
              </div>
            </div>
            <div
              className="tech-feat reveal"
              style={{ '--d': '.15s' } as React.CSSProperties}
            >
              <div className="tech-dot"></div>
              <div>
                <h4>Treinamos o time</h4>
                <p>
                  Sem treinamento, a ferramenta fica parada. Garantimos a adoção real pela equipe da
                  clínica.
                </p>
              </div>
            </div>
            <div
              className="tech-feat reveal"
              style={{ '--d': '.25s' } as React.CSSProperties}
            >
              <div className="tech-dot"></div>
              <div>
                <h4>Acompanhamos e ajustamos</h4>
                <p>
                  Ficamos junto depois da implementação para ajustar, otimizar e garantir que o
                  resultado apareça.
                </p>
              </div>
            </div>
          </div>

          <div className="api-note reveal">
            Para automação via WhatsApp, utilizamos a{' '}
            <strong>Cloudia — IA especializada em saúde</strong>, integrada à API Oficial do
            WhatsApp (Meta). Isso garante estabilidade, entregabilidade e zero risco de banimento
            do número da clínica.
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="process section-pad" id="como-funciona">
        <div className="container">
          <div
            className="process-header reveal"
            style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto 56px' }}
          >
            <span className="eyebrow">O processo</span>
            <h2 className="section-title">Como funciona na prática</h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              Nada começa com uma proposta. Tudo começa com escuta.
            </p>
          </div>

          <div className="process-timeline">
            <div className="process-step reveal">
              <div className="step-circle">01</div>
              <div>
                <h3>Diagnóstico gratuito</h3>
                <p>
                  60 minutos para entender os processos, as dores e os objetivos da clínica. Remoto.
                  Sem compromisso.
                </p>
              </div>
            </div>
            <div
              className="process-step reveal"
              style={{ '--d': '.08s' } as React.CSSProperties}
            >
              <div className="step-circle">02</div>
              <div>
                <h3>Proposta personalizada</h3>
                <p>
                  Com base no diagnóstico, montamos uma proposta com as frentes de atuação que fazem
                  sentido para aquele momento específico.
                </p>
              </div>
            </div>
            <div
              className="process-step reveal"
              style={{ '--d': '.16s' } as React.CSSProperties}
            >
              <div className="step-circle">03</div>
              <div>
                <h3>Mapeamento e Planejamento</h3>
                <p>
                  Mapeamos todos os fluxos e planejamos as mudanças com clareza — antes de mexer em
                  qualquer coisa.
                </p>
              </div>
            </div>
            <div
              className="process-step reveal"
              style={{ '--d': '.24s' } as React.CSSProperties}
            >
              <div className="step-circle">04</div>
              <div>
                <h3>Implementação e Execução</h3>
                <p>
                  Configuramos as ferramentas, redesenhamos os processos e treinamos o time para que
                  a mudança aconteça de verdade.
                </p>
              </div>
            </div>
            <div
              className="process-step reveal"
              style={{ '--d': '.32s' } as React.CSSProperties}
            >
              <div className="step-circle">05</div>
              <div>
                <h3>Acompanhamento Contínuo</h3>
                <p>
                  Ficamos junto após a implementação — monitorando resultados e garantindo que as
                  melhorias se sustentem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AUDIENCE ── */}
      <section className="audience section-pad" id="para-quem">
        <div className="container">
          <div className="audience-header reveal">
            <span className="eyebrow">Para quem</span>
            <h2 className="section-title">Feito para quem cuida de pessoas</h2>
            <p className="section-desc">
              A Conduta atende clínicas em diferentes estágios — do consultório que quer se organizar
              ao grupo que quer escalar.
            </p>
          </div>
          <div className="audience-grid">
            <div className="audience-card reveal">
              <div className="audience-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0EA5E9"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h3>Clínicas médicas</h3>
              <p>
                Clínicas gerais, especialidades e centros de saúde que querem processos mais
                eficientes e menor taxa de no-show.
              </p>
            </div>
            <div
              className="audience-card reveal"
              style={{ '--d': '.1s' } as React.CSSProperties}
            >
              <div className="audience-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0EA5E9"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M12 12v9M9 21h6" />
                  <path d="M9 14l3-2 3 2" />
                </svg>
              </div>
              <h3>Clínicas odontológicas</h3>
              <p>
                Consultórios e clínicas de odontologia que precisam organizar agenda, atendimento e
                comunicação com pacientes.
              </p>
            </div>
            <div
              className="audience-card reveal"
              style={{ '--d': '.2s' } as React.CSSProperties}
            >
              <div className="audience-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0EA5E9"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="7" width="6" height="14" rx="1" />
                  <rect x="9" y="3" width="6" height="18" rx="1" />
                  <rect x="16" y="10" width="6" height="11" rx="1" />
                </svg>
              </div>
              <h3>Grupos e redes</h3>
              <p>
                Grupos com múltiplas unidades que precisam de padronização e escala com qualidade
                consistente em todas as unidades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section" id="diagnostico">
        <div className="cta-inner reveal">
          <span className="cta-eyebrow">Diagnóstico gratuito</span>
          <h2>
            Pronto para <strong>transformar</strong> sua clínica?
          </h2>
          <p>
            Comece com um diagnóstico gratuito de 60 minutos. Sem custo, sem compromisso — e
            descubra onde sua clínica pode melhorar.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            className="btn-cta"
          >
            Agendar diagnóstico gratuito
          </a>
          <p className="cta-note">Ou fale direto pelo WhatsApp · Atendimento remoto</p>
        </div>
      </section>
    </>
  );
}

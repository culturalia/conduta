// No extra metadata needed — layout.tsx handles defaults
import Image from 'next/image';
import StatCard from '@/components/StatCard';

const WHATSAPP_URL =
  'https://wa.me/5516996131393?text=Oi%20Hilary%2C%20vim%20do%20site%20da%20Conduta%20Sa%C3%BAde%20e%20quero%20agendar%20meu%20diagn%C3%B3stico%20com%20voc%C3%AA';

const medicalBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['MedicalBusiness', 'Organization'],
  name: 'Conduta Saúde',
  description:
    'Consultoria especializada em gestão de processos e automação para clínicas e consultórios. Organizamos sua operação para que o cuidado aconteça.',
  url: 'https://condutasaude.com',
  telephone: '+5516996131393',
  image: 'https://condutasaude.com/og-image.png',
  logo: 'https://condutasaude.com/favicon.svg',
  sameAs: ['https://www.instagram.com/conduta.saude/'],
  areaServed: {
    '@type': 'Country',
    name: 'BR',
  },
  knowsLanguage: 'pt-BR',
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
            'Treinamento e gestão de mudança para que sua equipe domine os novos processos e ferramentas.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Presença Digital e Autoridade',
          description:
            'Sites, Google Meu Negócio, conteúdo e reputação online para profissionais de saúde.',
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
      name: 'O que é o diagnóstico gratuito da Conduta Saúde?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'É uma conversa de 60 minutos — remota ou presencial — onde entendemos sua operação, identificamos gargalos e mapeamos oportunidades. Sem custo e sem compromisso.',
      },
    },
    {
      '@type': 'Question',
      name: 'Preciso entender de tecnologia para trabalhar com a Conduta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não. A Conduta cuida de toda a parte técnica — configuração, integração e acompanhamento. Você foca no que sabe fazer: cuidar de pessoas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quanto tempo leva para ver resultados?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A automação de confirmação de consultas reduz faltas já na primeira semana. Resultados mais estruturais, como reorganização completa de processos, amadurecem em 60 a 90 dias.',
      },
    },
    {
      '@type': 'Question',
      name: 'Para quais profissionais de saúde a Conduta trabalha?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Profissionais de saúde de todas as especialidades — do consultório individual à clínica com múltiplos profissionais. Cada proposta é adaptada à sua realidade.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como funciona a automação do WhatsApp?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Utilizamos a Cloudia, plataforma de IA especializada em saúde, integrada à API Oficial do WhatsApp (Meta). Estabilidade total e zero risco de banimento.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual o investimento mensal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cada proposta é personalizada com base no diagnóstico. Temos planos desde o consultório individual até a transformação completa com presença digital.',
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
        <div className="hero-inner hero-split">
          <div className="hero-text">
            <span className="hero-eyebrow hero-anim">Gestão e automação para saúde</span>
            <h1 className="hero-anim">
              Você cuida de pessoas.
              <br />
              <strong>A gente cuida do resto.</strong>
            </h1>
            <p className="hero-sub hero-anim">
              Agenda, confirmação, WhatsApp, processos — tudo que consome seu dia
              sem ter nada a ver com cuidar. A Conduta organiza sua operação
              para que o atendimento funcione e o cuidado aconteça.
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
          <div className="hero-image hero-anim">
            <Image
              src="/images/demos/doctor-tablet.jpg"
              alt="Profissional de saúde sorrindo em consultório moderno"
              width={480}
              height={600}
              priority
              style={{ width: '100%', height: 'auto', borderRadius: '20px' }}
            />
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
          <div className="stats-grid" aria-label="O custo de não organizar">
            <StatCard value={59} suffix="%" label="dos agendamentos acontecem fora do horário comercial" />
            <StatCard value={53} suffix="%" label="dos pacientes faltam porque simplesmente esquecem" />
            <StatCard value={42} suffix="%" label="dos profissionais têm dificuldade em confirmar consultas" />
            <StatCard value={144} prefix="R$" suffix="mil" label="perda anual com problemas de agendamento por clínica" />
          </div>
        </div>
      </div>

      {/* ── CHALLENGE ── */}
      <section className="challenge section-pad" id="problema">
        <div className="container">
          <div className="services-header reveal">
            <div>
              <span className="eyebrow">O problema real</span>
              <h2 className="section-title">
                Tecnologia sem processo <strong>é só mais um problema.</strong>
              </h2>
            </div>
            <p className="section-desc">
              Ferramentas existem aos montes. O que falta é alguém que entenda
              sua operação antes de propor qualquer solução. Sem processo, a
              tecnologia amplifica o caos — não resolve.
            </p>
          </div>
          <div className="pain-grid">
            <div className="pain-card reveal">
              <h4>&ldquo;Contratei uma IA e ninguém usa&rdquo;</h4>
              <p>
                Implementação pela metade, sem acompanhamento e sem processo por trás.
                A ferramenta não falhou — faltou quem fizesse ela funcionar na sua rotina.
              </p>
            </div>
            <div
              className="pain-card reveal"
              style={{ '--d': '.1s' } as React.CSSProperties}
            >
              <h4>&ldquo;Cada um faz do seu jeito&rdquo;</h4>
              <p>
                Sem processos definidos, a equipe improvisa. A recepção faz de um jeito,
                o financeiro de outro. Resultado: retrabalho, erro e paciente insatisfeito.
              </p>
            </div>
            <div
              className="pain-card reveal"
              style={{ '--d': '.15s' } as React.CSSProperties}
            >
              <h4>&ldquo;Perco consultas por falha de comunicação&rdquo;</h4>
              <p>
                Confirmação manual, remarcação esquecida, agenda com buracos.
                Cada consulta perdida é receita que vai embora — e um paciente
                que talvez não volte.
              </p>
            </div>
            <div
              className="pain-card reveal"
              style={{ '--d': '.25s' } as React.CSSProperties}
            >
              <h4>&ldquo;Demoro para responder e perco o paciente&rdquo;</h4>
              <p>
                O paciente mandou mensagem às 21h. Você viu às 8h. Ele já agendou
                com outro profissional. Atendimento lento custa pacientes todos os dias.
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
              <span className="eyebrow">Como atuamos</span>
              <h2 className="section-title">
                Quatro frentes.
                <br />
                Uma <strong>transformação.</strong>
              </h2>
            </div>
            <p className="section-desc">
              Cada proposta nasce do diagnóstico. Combinamos as frentes que fazem
              sentido para o seu momento — nada genérico, nada desnecessário.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card reveal">
              <div className="service-accent-line"></div>
              <h3 className="service-name">Gestão de Processos</h3>
              <div className="service-body">
                <p>
                  Entramos na sua operação, mapeamos cada fluxo e transformamos
                  caos em rotina. SOPs que a equipe realmente segue, KPIs que mostram
                  a verdade, e acompanhamento contínuo para garantir que funcione.
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
              <h3 className="service-name">Implementação de IA</h3>
              <div className="service-body">
                <p>
                  Escolhemos a ferramenta certa, configuramos, integramos e ficamos
                  junto até a equipe dominar. Agendamento, confirmação, follow-up
                  — tudo automático, via WhatsApp, sem risco para o seu número.
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
                  A melhor ferramenta do mundo não funciona se a equipe não compra a
                  ideia. Treinamos, acompanhamos e gerenciamos a mudança — porque
                  se a equipe não adota, a implementação falhou, não a equipe.
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
                  Seus pacientes pesquisam no Google antes de agendar. Criamos sua
                  presença digital — site, conteúdo, Google Meu Negócio — para que
                  quem te procura, te encontre. E confie.
                </p>
                <div className="service-tags">
                  <span className="service-tag">Site profissional</span>
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
            <span className="eyebrow">Tecnologia a serviço do humano</span>
            <h2 className="section-title">
              A ferramenta certa, implementada do jeito certo.
            </h2>
            <p className="section-desc">
              Não basta contratar — precisa funcionar na sua rotina real.
              Avaliamos, configuramos, treinamos e acompanhamos. Esse é o trabalho
              que ninguém faz e que faz toda a diferença.
            </p>
          </div>

          <div className="tech-grid">
            <div className="tech-feat reveal">
              <div className="tech-dot"></div>
              <div>
                <h4>Diagnóstico antes de receita</h4>
                <p>
                  Primeiro entendemos sua operação. Depois — e só depois — indicamos
                  a solução que realmente faz sentido. Sem empurrar o que não funciona.
                </p>
              </div>
            </div>
            <div
              className="tech-feat reveal"
              style={{ '--d': '.1s' } as React.CSSProperties}
            >
              <div className="tech-dot"></div>
              <div>
                <h4>Implementação completa</h4>
                <p>
                  Configuramos, integramos e colocamos em operação. Você não precisa
                  saber nada de tecnologia — esse é o nosso trabalho.
                </p>
              </div>
            </div>
            <div
              className="tech-feat reveal"
              style={{ '--d': '.15s' } as React.CSSProperties}
            >
              <div className="tech-dot"></div>
              <div>
                <h4>Treinamento da equipe</h4>
                <p>
                  Ferramenta parada é dinheiro jogado fora. Garantimos que toda a equipe
                  domine e confie no novo processo.
                </p>
              </div>
            </div>
            <div
              className="tech-feat reveal"
              style={{ '--d': '.25s' } as React.CSSProperties}
            >
              <div className="tech-dot"></div>
              <div>
                <h4>Acompanhamento contínuo</h4>
                <p>
                  Não entregamos e sumimos. Ficamos junto depois — ajustando,
                  otimizando e medindo até o resultado aparecer nos números.
                </p>
              </div>
            </div>
          </div>

          <div className="api-note reveal">
            Para automação via WhatsApp, utilizamos a{' '}
            <strong>Cloudia — IA especializada em saúde</strong>, integrada à API Oficial do
            WhatsApp (Meta). Estabilidade total, entregabilidade garantida e zero risco de
            banimento do seu número.
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
            <h2 className="section-title">Nada começa com uma proposta.</h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              Tudo começa com escuta. Entendemos antes de propor — porque sem
              diagnóstico, qualquer solução é chute.
            </p>
          </div>

          <div className="process-timeline">
            <div className="process-step reveal">
              <div className="step-circle">01</div>
              <div>
                <h3>Diagnóstico gratuito</h3>
                <p>
                  60 minutos para entender sua operação de verdade — processos, dores,
                  objetivos. Remoto, sem custo, sem compromisso. Você sai com clareza
                  sobre o que precisa mudar.
                </p>
              </div>
            </div>
            <div
              className="process-step reveal"
              style={{ '--d': '.08s' } as React.CSSProperties}
            >
              <div className="step-circle">02</div>
              <div>
                <h3>Proposta sob medida</h3>
                <p>
                  Com base no que ouvimos, montamos uma proposta com as frentes
                  que fazem sentido para o seu momento. Sem pacote engessado.
                </p>
              </div>
            </div>
            <div
              className="process-step reveal"
              style={{ '--d': '.16s' } as React.CSSProperties}
            >
              <div className="step-circle">03</div>
              <div>
                <h3>Mapeamento e planejamento</h3>
                <p>
                  Mapeamos todos os fluxos e planejamos cada mudança com clareza
                  — antes de mexer em qualquer coisa. Sem surpresa.
                </p>
              </div>
            </div>
            <div
              className="process-step reveal"
              style={{ '--d': '.24s' } as React.CSSProperties}
            >
              <div className="step-circle">04</div>
              <div>
                <h3>Implementação</h3>
                <p>
                  Configuramos as ferramentas, redesenhamos os processos e
                  acompanhamos sua equipe para que a mudança aconteça — de verdade,
                  não só no papel.
                </p>
              </div>
            </div>
            <div
              className="process-step reveal"
              style={{ '--d': '.32s' } as React.CSSProperties}
            >
              <div className="step-circle">05</div>
              <div>
                <h3>Parceria contínua</h3>
                <p>
                  Ficamos junto após a implementação. Monitoramos resultados,
                  ajustamos o que precisar e crescemos com você. Parceria, não projeto.
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
            <h2 className="section-title">Para quem cuida — e quer parar de apagar incêndio.</h2>
            <p className="section-desc">
              Se você é profissional de saúde e sente que passa mais tempo resolvendo
              problemas operacionais do que atendendo pacientes, a Conduta é para você.
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
              <h3>Consultórios</h3>
              <p>
                Profissionais que atendem sozinhos ou com equipe enxuta e
                precisam organizar agenda, comunicação e rotina — sem perder
                a proximidade com o paciente.
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
              <h3>Clínicas e policlínicas</h3>
              <p>
                Operações com múltiplos profissionais que precisam de
                padronização, processos claros e ferramentas que funcionem
                para toda a equipe.
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
              <h3>Em crescimento</h3>
              <p>
                Profissionais expandindo para novos espaços ou especialidades
                e que sabem: crescer sem processo é multiplicar o caos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── NOSSA CONDUTA (values teaser) ── */}
      <section className="section-pad" id="nossa-conduta" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 48px' }}>
            <span className="eyebrow">Nossa conduta</span>
            <h2 className="section-title">
              Nosso nome não é acidental.
            </h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              <strong>Conduta</strong> é protocolo. É ação. É a decisão sobre o que fazer em seguida.
              Esses são os princípios que guiam cada decisão que tomamos.
            </p>
          </div>

          <div className="pain-grid">
            <div className="pain-card reveal">
              <h4>Conduta antes de tudo</h4>
              <p>
                Fazemos a coisa certa, mesmo quando ninguém está olhando.
                Se a solução mais simples resolve, é ela que recomendamos.
              </p>
            </div>
            <div
              className="pain-card reveal"
              style={{ '--d': '.08s' } as React.CSSProperties}
            >
              <h4>Diagnóstico antes de receita</h4>
              <p>
                Entendemos antes de propor. Escutamos antes de falar.
                Sem entender sua realidade, qualquer proposta é chute.
              </p>
            </div>
            <div
              className="pain-card reveal"
              style={{ '--d': '.16s' } as React.CSSProperties}
            >
              <h4>Resultado que se mede</h4>
              <p>
                Se não dá para medir, não dá para melhorar. Cada projeto tem
                KPIs desde o dia 1. Celebramos números, não sensações.
              </p>
            </div>
            <div
              className="pain-card reveal"
              style={{ '--d': '.24s' } as React.CSSProperties}
            >
              <h4>Tecnologia a serviço do humano</h4>
              <p>
                A IA existe para que você tenha mais tempo para o que só humanos fazem:
                olhar nos olhos, escutar, cuidar.
              </p>
            </div>
            <div
              className="pain-card reveal"
              style={{ '--d': '.32s' } as React.CSSProperties}
            >
              <h4>Parceria, não projeto</h4>
              <p>
                Não entregamos e sumimos. Estamos junto, mês a mês,
                ajustando, medindo, crescendo com você.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
<section className="cta-section" id="diagnostico">
        <div className="cta-inner reveal">
          <span className="cta-eyebrow">O primeiro passo</span>
          <h2>
            O próximo passo é <strong>uma conversa.</strong>
          </h2>
          <p>
            60 minutos. Sem custo, sem compromisso. Só a clareza que você precisa
            para transformar sua operação.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            className="btn-cta"
          >
            Agendar diagnóstico gratuito
          </a>
          <p className="cta-note">Operação organizada, cuidado humanizado.</p>
        </div>
      </section>
    </>
  );
}

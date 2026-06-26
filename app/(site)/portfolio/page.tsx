import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sites para Médicos que Atendem Particular — Portfolio',
  description:
    'Veja exemplos de sites profissionais que criamos para médicos. SEO otimizado, design responsivo, agendamento integrado. Veja nosso portfolio.',
  alternates: { canonical: 'https://condutasaude.com/portfolio' },
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
      name: 'Portfólio',
      item: 'https://condutasaude.com/portfolio',
    },
  ],
};

export default function SitesMedicosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* ── HERO / HEADER ── */}
      <section className="hero" style={{ paddingBottom: '48px' }}>
        <div className="hero-inner" style={{ maxWidth: '840px' }}>
          <span className="hero-eyebrow hero-anim">Presença digital</span>
          <h1 className="hero-anim" style={{ fontSize: 'clamp(32px, 4.5vw, 52px)' }}>
            Criamos o site do seu <strong>consultório</strong>
          </h1>
          <p className="hero-sub hero-anim" style={{ maxWidth: '640px' }}>
            Seus pacientes estão no Google. A Conduta cria sites profissionais, otimizados para SEO,
            com agendamento integrado e design pensado para cada especialidade médica. Sites que
            transmitem credibilidade, convertem visitantes em pacientes e posicionam você como
            referência na sua região.
          </p>
        </div>
      </section>

      {/* ── SHOWCASE CARDS ── */}
      <section className="showcase section-pad" id="templates">
        <div className="container">
          <div
            className="showcase-header reveal"
            style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 48px' }}
          >
            <span className="eyebrow">Templates por especialidade</span>
            <h2 className="section-title">
              Design pensado para cada <strong>especialidade</strong>
            </h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              Cada template é projetado com identidade visual, paleta de cores e estrutura de
              conteúdo adaptados à sua especialidade.
            </p>
          </div>
          <div className="showcase-grid">
            <a href="/portfolio/fertilidade" className="showcase-card reveal" target="_blank">
              <div
                className="showcase-preview"
                style={{ background: 'linear-gradient(135deg, #FAF5FF 0%, #F3E8FF 100%)' }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="1.5">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <div className="showcase-info">
                <h3>Fertilidade</h3>
                <p>Delicado, acolhedor, jornada do casal</p>
                <span className="showcase-badge">Ver exemplo</span>
              </div>
            </a>
            <a
              href="/portfolio/cardiologia"
              className="showcase-card reveal"
              style={{ '--d': '.1s' } as React.CSSProperties}
              target="_blank"
            >
              <div className="showcase-preview showcase-preview-cardio">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1D4ED8" strokeWidth="1.5">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <div className="showcase-info">
                <h3>Cardiologia</h3>
                <p>Sério, institucional, credenciais em destaque</p>
                <span className="showcase-badge">Ver exemplo</span>
              </div>
            </a>
            <a
              href="/portfolio/odontologia"
              className="showcase-card reveal"
              style={{ '--d': '.2s' } as React.CSSProperties}
              target="_blank"
            >
              <div className="showcase-preview showcase-preview-odonto">
                <svg viewBox="0 0 24 24" fill="none" stroke="#0369A1" strokeWidth="1.5">
                  <path d="M12 5.5c-1.5-2-4-2.5-5.5-1S4 7 6 9.5C8 12 12 18 12 18s4-6 6-8.5c2-2.5 1-4.5-.5-5s-4 1-5.5 1z" />
                </svg>
              </div>
              <div className="showcase-info">
                <h3>Odontologia</h3>
                <p>Moderno, sorriso em destaque, tratamentos</p>
                <span className="showcase-badge">Ver exemplo</span>
              </div>
            </a>
            <a
              href="/portfolio/dermatologia"
              className="showcase-card reveal"
              style={{ '--d': '.3s' } as React.CSSProperties}
              target="_blank"
            >
              <div className="showcase-preview showcase-preview-derma">
                <svg viewBox="0 0 24 24" fill="none" stroke="#BE123C" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" />
                  <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
              </div>
              <div className="showcase-info">
                <h3>Dermatologia</h3>
                <p>Clean, luminoso, galeria de procedimentos</p>
                <span className="showcase-badge">Ver exemplo</span>
              </div>
            </a>
            <a
              href="/portfolio/pediatria"
              className="showcase-card reveal"
              style={{ '--d': '.4s' } as React.CSSProperties}
              target="_blank"
            >
              <div className="showcase-preview showcase-preview-pedia">
                <svg viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="1.5">
                  <path d="M12 2a5 5 0 0 1 5 5v3a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5z" />
                  <path d="M8 14v1a4 4 0 0 0 8 0v-1" />
                  <line x1="12" y1="18" x2="12" y2="22" />
                  <line x1="8" y1="22" x2="16" y2="22" />
                </svg>
              </div>
              <div className="showcase-info">
                <h3>Pediatria</h3>
                <p>Acolhedor, pastel, foco na família</p>
                <span className="showcase-badge">Ver exemplo</span>
              </div>
            </a>
          </div>
          <p className="reveal" style={{ textAlign: 'center', fontSize: '13px', color: 'var(--text-muted)', marginTop: '24px' }}>
            * Exemplos com dados ilustrativos. Cada site é criado sob medida para o médico e sua especialidade.
          </p>
        </div>
      </section>

      {/* ── O QUE ESTÁ INCLUÍDO ── */}
      <section className="services section-pad" id="incluido">
        <div className="container">
          <div className="services-header reveal">
            <div>
              <span className="eyebrow">O que está incluído</span>
              <h2 className="section-title">
                Tudo que você precisa para <strong>aparecer no Google</strong>
              </h2>
            </div>
            <p className="section-desc">
              Cada site é desenvolvido com foco em performance, conversão e posicionamento nos
              resultados de busca. Sem templates genéricos — tudo personalizado para a sua
              especialidade.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card reveal">
              <div className="service-accent-line"></div>
              <h3 className="service-name">SEO otimizado</h3>
              <div className="service-body">
                <p>
                  Estrutura semântica, meta tags, schema markup para médicos (MedicalBusiness,
                  Physician), sitemap XML e otimização de Core Web Vitals. Seu site aparece para quem
                  busca sua especialidade na sua região.
                </p>
                <div className="service-tags">
                  <span className="service-tag">Schema markup</span>
                  <span className="service-tag">Meta tags</span>
                  <span className="service-tag">Sitemap</span>
                  <span className="service-tag">Core Web Vitals</span>
                </div>
              </div>
            </div>

            <div
              className="service-card reveal"
              style={{ '--d': '.1s' } as React.CSSProperties}
            >
              <div className="service-accent-line"></div>
              <h3 className="service-name">Responsivo</h3>
              <div className="service-body">
                <p>
                  Design que funciona perfeitamente em qualquer dispositivo — celular, tablet e
                  desktop. Mais de 70% dos pacientes acessam pelo celular, e o site é construído
                  priorizando essa experiência.
                </p>
                <div className="service-tags">
                  <span className="service-tag">Mobile-first</span>
                  <span className="service-tag">Tablet</span>
                  <span className="service-tag">Desktop</span>
                </div>
              </div>
            </div>

            <div
              className="service-card reveal"
              style={{ '--d': '.2s' } as React.CSSProperties}
            >
              <div className="service-accent-line"></div>
              <h3 className="service-name">Agendamento integrado</h3>
              <div className="service-body">
                <p>
                  Botão de agendamento direto no site — via WhatsApp, formulário ou integração com o
                  sistema de agenda do consultório. O paciente encontra você no Google e agenda
                  sem fricção.
                </p>
                <div className="service-tags">
                  <span className="service-tag">WhatsApp</span>
                  <span className="service-tag">Formulário</span>
                  <span className="service-tag">Integração agenda</span>
                </div>
              </div>
            </div>

            <div
              className="service-card reveal"
              style={{ '--d': '.3s' } as React.CSSProperties}
            >
              <div className="service-accent-line"></div>
              <h3 className="service-name">Lighthouse 95+</h3>
              <div className="service-body">
                <p>
                  Performance, acessibilidade, boas práticas e SEO acima de 95 no Google Lighthouse.
                  Sites rápidos, acessíveis e otimizados — critérios que o Google usa para rankear
                  sua página nos resultados de busca.
                </p>
                <div className="service-tags">
                  <span className="service-tag">Performance</span>
                  <span className="service-tag">Acessibilidade</span>
                  <span className="service-tag">Boas práticas</span>
                  <span className="service-tag">SEO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIFERENCIAIS ── */}
      <section className="technology section-pad" id="diferenciais">
        <div className="container">
          <div className="tech-header reveal">
            <span className="eyebrow">Por que a Conduta</span>
            <h2 className="section-title">Mais do que um site bonito</h2>
            <p className="section-desc">
              Não entregamos apenas um site — entregamos uma presença digital completa, integrada à
              sua estratégia. O site é a porta de entrada; o processo por trás é o que
              converte.
            </p>
          </div>

          <div className="tech-grid">
            <div className="tech-feat reveal">
              <div className="tech-dot"></div>
              <div>
                <h4>Conteúdo otimizado para SEO</h4>
                <p>
                  Textos escritos para posicionar você nas buscas locais. Cada página é
                  pensada para atrair pacientes que procuram sua especialidade na região.
                </p>
              </div>
            </div>
            <div
              className="tech-feat reveal"
              style={{ '--d': '.1s' } as React.CSSProperties}
            >
              <div className="tech-dot"></div>
              <div>
                <h4>Schema markup médico</h4>
                <p>
                  Dados estruturados (MedicalBusiness, Physician, FAQPage) que ajudam o Google a
                  entender e destacar seu consultório nos resultados de busca.
                </p>
              </div>
            </div>
            <div
              className="tech-feat reveal"
              style={{ '--d': '.15s' } as React.CSSProperties}
            >
              <div className="tech-dot"></div>
              <div>
                <h4>Google Meu Negócio integrado</h4>
                <p>
                  Configuramos e otimizamos seu perfil no Google Meu Negócio para aparecer no mapa,
                  com avaliações, fotos e informações completas.
                </p>
              </div>
            </div>
            <div
              className="tech-feat reveal"
              style={{ '--d': '.25s' } as React.CSSProperties}
            >
              <div className="tech-dot"></div>
              <div>
                <h4>Suporte e manutenção contínua</h4>
                <p>
                  Após o lançamento, acompanhamos métricas, atualizamos conteúdo e garantimos que o
                  site continue performando e gerando agendamentos.
                </p>
              </div>
            </div>
          </div>

          <div className="api-note reveal">
            <strong>Como funciona:</strong> Após o diagnóstico gratuito, definimos juntos o escopo do
            site — especialidade, páginas, integrações e conteúdo. O prazo médio de entrega é de 2 a
            4 semanas, com revisões ilimitadas até a aprovação final. O investimento é definido no
            diagnóstico, de acordo com a complexidade do projeto.
          </div>
        </div>
      </section>

      {/* ── CHECKLIST VISUAL ── */}
      <section className="challenge section-pad" id="checklist">
        <div className="container">
          <div className="challenge-header reveal" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 44px' }}>
            <span className="eyebrow">Checklist técnico</span>
            <h2 className="section-title">
              O que todo site médico <strong>precisa ter</strong>
            </h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              Cada site que entregamos passa por um checklist rigoroso de qualidade antes de ir ao ar.
            </p>
          </div>
          <div className="pain-grid">
            <div className="pain-card reveal">
              <h4>SEO otimizado</h4>
              <p>
                Meta tags, headings semânticos, URLs amigáveis, sitemap XML e robots.txt configurados
                para máxima indexação pelo Google.
              </p>
            </div>
            <div
              className="pain-card reveal"
              style={{ '--d': '.1s' } as React.CSSProperties}
            >
              <h4>Responsivo</h4>
              <p>
                Layout adaptável para celular, tablet e desktop. Mobile-first: a experiência no
                celular é prioridade absoluta.
              </p>
            </div>
            <div
              className="pain-card reveal"
              style={{ '--d': '.15s' } as React.CSSProperties}
            >
              <h4>Agendamento integrado</h4>
              <p>
                Botão de WhatsApp, formulário de contato ou integração direta com o sistema de agenda
                do consultório — sem fricção para o paciente.
              </p>
            </div>
            <div
              className="pain-card reveal"
              style={{ '--d': '.2s' } as React.CSSProperties}
            >
              <h4>Schema markup</h4>
              <p>
                Dados estruturados para Google (MedicalBusiness, Physician, FAQPage) que aumentam
                visibilidade e rich snippets nos resultados de busca.
              </p>
            </div>
            <div
              className="pain-card reveal"
              style={{ '--d': '.25s' } as React.CSSProperties}
            >
              <h4>Lighthouse 95+</h4>
              <p>
                Performance, acessibilidade, boas práticas e SEO acima de 95 pontos no Google
                Lighthouse — o padrão de excelência técnica.
              </p>
            </div>
            <div
              className="pain-card reveal"
              style={{ '--d': '.3s' } as React.CSSProperties}
            >
              <h4>HTTPS e segurança</h4>
              <p>
                Certificado SSL, headers de segurança e conformidade com LGPD para proteger os dados
                dos seus pacientes e do seu consultório.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section" id="contato">
        <div className="cta-inner reveal">
          <span className="cta-eyebrow">Presença digital</span>
          <h2>
            Pronto para colocar seu consultório <strong>no Google?</strong>
          </h2>
          <p>
            Comece com um diagnóstico gratuito. Vamos entender sua especialidade, sua região e criar
            um site que atrai e converte pacientes.
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

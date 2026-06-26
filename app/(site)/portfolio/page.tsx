import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Presença Digital para Profissionais de Saúde | Conduta Saúde',
  description:
    'Presença digital integrada à sua consultoria de gestão e automação. Sites otimizados para atrair pacientes, conectados à operação da sua clínica.',
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
      name: 'Presença Digital',
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
      <section className="hero">
        <div className="hero-inner">
          <span className="hero-eyebrow hero-anim">Presença digital</span>
          <h1 className="hero-anim" style={{ fontSize: 'clamp(32px, 4.5vw, 52px)' }}>
            Quem te procura precisa <strong>te encontrar.</strong>
          </h1>
          <p className="hero-sub hero-anim" style={{ maxWidth: '640px' }}>
            Seus pacientes pesquisam no Google antes de agendar. Como parte
            da nossa consultoria, criamos sua presença digital — otimizada para
            aparecer, transmitir credibilidade e converter visitantes em pacientes.
            Uma extensão da sua operação, não um projeto isolado.
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
            <span className="eyebrow">Exemplos por especialidade</span>
            <h2 className="section-title">
              Cada especialidade tem sua <strong>linguagem.</strong>
            </h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              Ginecologia pede acolhimento. Cardiologia pede confiança. Pediatria pede
              leveza. O site precisa falar a língua do seu paciente.
            </p>
          </div>
          <div className="showcase-grid">
            <a href="/portfolio/ginecologia" className="showcase-card reveal" target="_blank">
              <div
                className="showcase-preview"
                style={{ background: 'linear-gradient(135deg, #FAF5FF 0%, #F3E8FF 100%)' }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="1.5">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <div className="showcase-info">
                <h3>Ginecologia</h3>
                <p>Acolhedor, empoderador, saúde feminina</p>
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
                <p>Institucional, sério, credenciais em destaque</p>
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
            * Exemplos com dados ilustrativos. Cada site é criado sob medida para o profissional e sua especialidade.
          </p>
        </div>
      </section>

      {/* ── O QUE ESTÁ INCLUÍDO ── */}
      <section className="services section-pad" id="incluido">
        <div className="container">
          <div className="services-header reveal">
            <div>
              <span className="eyebrow">O que entregamos</span>
              <h2 className="section-title">
                Não é só um site. É a sua <strong>autoridade online.</strong>
              </h2>
            </div>
            <p className="section-desc">
              Cada site nasce do diagnóstico da sua operação. Sem templates genéricos —
              tudo pensado para a sua especialidade, a sua região e o paciente que você
              quer atrair.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card reveal">
              <div className="service-accent-line"></div>
              <h3 className="service-name">SEO que posiciona</h3>
              <div className="service-body">
                <p>
                  Estrutura semântica, schema markup para saúde, sitemap e Core
                  Web Vitals otimizados. Seu site aparece para quem busca sua
                  especialidade na sua região — não para o mundo inteiro.
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
              <h3 className="service-name">Mobile primeiro</h3>
              <div className="service-body">
                <p>
                  Mais de 70% dos pacientes acessam pelo celular. O site é construído
                  priorizando essa experiência — rápido, bonito e funcional em qualquer tela.
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
              <h3 className="service-name">Agendamento sem fricção</h3>
              <div className="service-body">
                <p>
                  Botão de WhatsApp, formulário ou integração com sua agenda.
                  O paciente encontra você no Google e agenda em segundos —
                  sem ligar, sem esperar.
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
              <h3 className="service-name">Performance 95+</h3>
              <div className="service-body">
                <p>
                  Performance, acessibilidade e SEO acima de 95 no Google Lighthouse.
                  Sites rápidos rankeiam melhor — e pacientes não esperam site lento.
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
            <span className="eyebrow">Por que com a Conduta</span>
            <h2 className="section-title">Site é só o começo. O que muda é a estratégia por trás.</h2>
            <p className="section-desc">
              Diferente de uma agência, a presença digital é parte da sua consultoria
              operacional. Integramos o site à automação, ao WhatsApp, ao Google —
              tudo conectado.
            </p>
          </div>

          <div className="tech-grid">
            <div className="tech-feat reveal">
              <div className="tech-dot"></div>
              <div>
                <h4>Conteúdo que atrai o paciente certo</h4>
                <p>
                  Textos escritos para posicionar você nas buscas locais. Cada página
                  é pensada para atrair quem procura a sua especialidade na sua região.
                </p>
              </div>
            </div>
            <div
              className="tech-feat reveal"
              style={{ '--d': '.1s' } as React.CSSProperties}
            >
              <div className="tech-dot"></div>
              <div>
                <h4>Google entende que você é referência</h4>
                <p>
                  Dados estruturados (MedicalBusiness, Physician, FAQPage) que ajudam
                  o Google a entender e destacar seu consultório nos resultados de busca.
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
                  Seu perfil configurado e otimizado para aparecer no mapa, com
                  avaliações, fotos e informações que geram confiança.
                </p>
              </div>
            </div>
            <div
              className="tech-feat reveal"
              style={{ '--d': '.25s' } as React.CSSProperties}
            >
              <div className="tech-dot"></div>
              <div>
                <h4>Parceria, não entrega</h4>
                <p>
                  Após o lançamento, acompanhamos métricas, atualizamos conteúdo e
                  garantimos que o site continue gerando agendamentos. Mês a mês.
                </p>
              </div>
            </div>
          </div>

          <div className="api-note reveal">
            <strong>Como funciona:</strong> Após o diagnóstico gratuito, definimos juntos o
            escopo — especialidade, páginas, integrações e conteúdo. Prazo médio de 2 a 4
            semanas, com revisões até a aprovação final. Investimento definido no diagnóstico.
          </div>
        </div>
      </section>

      {/* ── CHECKLIST VISUAL ── */}
      <section className="challenge section-pad" id="checklist">
        <div className="container">
          <div className="challenge-header reveal" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 44px' }}>
            <span className="eyebrow">Checklist técnico</span>
            <h2 className="section-title">
              Todo site que sai da Conduta <strong>passa por isso.</strong>
            </h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              Padrão de excelência técnica. Sem exceção.
            </p>
          </div>
          <div className="pain-grid">
            <div className="pain-card reveal">
              <h4>SEO otimizado</h4>
              <p>
                Meta tags, headings semânticos, URLs amigáveis, sitemap XML e robots.txt
                configurados para máxima indexação.
              </p>
            </div>
            <div
              className="pain-card reveal"
              style={{ '--d': '.1s' } as React.CSSProperties}
            >
              <h4>Responsivo</h4>
              <p>
                Layout adaptável para celular, tablet e desktop. Mobile-first:
                a experiência no celular é prioridade absoluta.
              </p>
            </div>
            <div
              className="pain-card reveal"
              style={{ '--d': '.15s' } as React.CSSProperties}
            >
              <h4>Agendamento integrado</h4>
              <p>
                WhatsApp, formulário ou integração direta com o sistema de agenda
                — sem fricção para o paciente.
              </p>
            </div>
            <div
              className="pain-card reveal"
              style={{ '--d': '.2s' } as React.CSSProperties}
            >
              <h4>Schema markup</h4>
              <p>
                Dados estruturados para Google que aumentam visibilidade e rich
                snippets nos resultados de busca.
              </p>
            </div>
            <div
              className="pain-card reveal"
              style={{ '--d': '.25s' } as React.CSSProperties}
            >
              <h4>Lighthouse 95+</h4>
              <p>
                Performance, acessibilidade, boas práticas e SEO acima de 95 pontos.
                O padrão de excelência técnica.
              </p>
            </div>
            <div
              className="pain-card reveal"
              style={{ '--d': '.3s' } as React.CSSProperties}
            >
              <h4>HTTPS e LGPD</h4>
              <p>
                Certificado SSL, headers de segurança e conformidade com LGPD.
                Os dados dos seus pacientes, protegidos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section" id="contato">
        <div className="cta-inner reveal">
          <span className="cta-eyebrow">O primeiro passo</span>
          <h2>
            Pronto para ser <strong>encontrado?</strong>
          </h2>
          <p>
            Comece com um diagnóstico gratuito. Vamos entender sua especialidade,
            sua região e criar uma presença digital que trabalha por você.
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

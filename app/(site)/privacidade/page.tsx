import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description:
    'Política de privacidade da Conduta Saúde. Saiba como tratamos seus dados pessoais em conformidade com a LGPD.',
  alternates: { canonical: 'https://condutasaude.com/privacidade' },
};

export default function PrivacidadePage() {
  return (
    <section className="section-pad" style={{ background: '#FFFFFF' }}>
      <div style={{ maxWidth: '780px', margin: '0 auto' }}>
        <h1
          style={{
            fontFamily: 'var(--font-work-sans)',
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 300,
            color: 'var(--text)',
            lineHeight: 1.2,
            letterSpacing: '-0.5px',
            marginBottom: '40px',
            paddingTop: '60px',
          }}
        >
          Política de <strong>Privacidade</strong>
        </h1>

        <div
          style={{
            fontSize: '15px',
            lineHeight: 1.8,
            color: 'var(--text-secondary)',
          }}
        >
          <p style={{ marginBottom: '12px', fontSize: '13px', color: 'var(--text-muted)' }}>
            Última atualização: 26 de junho de 2026
          </p>

          <p style={{ marginBottom: '24px' }}>
            A Conduta Saúde (&quot;nós&quot;) respeita a sua privacidade e está comprometida
            com a proteção dos seus dados pessoais, em conformidade com a Lei Geral de
            Proteção de Dados Pessoais (LGPD — Lei nº 13.709/2018).
          </p>

          <h2 style={h2Style}>1. Dados que coletamos</h2>
          <p style={pStyle}>
            Coletamos apenas os dados fornecidos voluntariamente por você ao entrar em contato
            conosco via WhatsApp, formulário do site ou e-mail:
          </p>
          <ul style={ulStyle}>
            <li>Nome completo</li>
            <li>Telefone / WhatsApp</li>
            <li>E-mail</li>
            <li>Especialidade médica</li>
            <li>Informações sobre seu consultório (quando compartilhadas voluntariamente)</li>
          </ul>

          <h2 style={h2Style}>2. Como usamos seus dados</h2>
          <p style={pStyle}>Utilizamos seus dados exclusivamente para:</p>
          <ul style={ulStyle}>
            <li>Realizar o diagnóstico gratuito do seu consultório</li>
            <li>Elaborar e enviar propostas comerciais</li>
            <li>Prestar os serviços contratados</li>
            <li>Enviar comunicações relevantes sobre nossos serviços (com seu consentimento)</li>
          </ul>

          <h2 style={h2Style}>3. Compartilhamento de dados</h2>
          <p style={pStyle}>
            Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para
            fins de marketing. Seus dados podem ser compartilhados apenas com:
          </p>
          <ul style={ulStyle}>
            <li>Plataformas de automação necessárias para a prestação do serviço (ex: Cloudia, WhatsApp Business API)</li>
            <li>Autoridades competentes, quando exigido por lei</li>
          </ul>

          <h2 style={h2Style}>4. Cookies e Analytics</h2>
          <p style={pStyle}>
            Utilizamos o Google Analytics 4 para entender como os visitantes interagem com o site.
            Os dados coletados são anônimos e incluem: páginas visitadas, tempo de permanência,
            tipo de dispositivo e localização aproximada. Não coletamos dados pessoais
            identificáveis por meio de cookies.
          </p>

          <h2 style={h2Style}>5. Seus direitos (LGPD)</h2>
          <p style={pStyle}>
            Conforme a LGPD, você tem o direito de:
          </p>
          <ul style={ulStyle}>
            <li>Solicitar acesso aos seus dados pessoais</li>
            <li>Solicitar a correção de dados incompletos ou desatualizados</li>
            <li>Solicitar a exclusão dos seus dados</li>
            <li>Revogar seu consentimento a qualquer momento</li>
            <li>Solicitar a portabilidade dos seus dados</li>
          </ul>

          <h2 style={h2Style}>6. Segurança</h2>
          <p style={pStyle}>
            Adotamos medidas técnicas e administrativas para proteger seus dados contra acesso
            não autorizado, perda, alteração ou destruição. Todas as comunicações são realizadas
            por canais criptografados.
          </p>

          <h2 style={h2Style}>7. Contato</h2>
          <p style={pStyle}>
            Para exercer seus direitos ou tirar dúvidas sobre esta política, entre em contato:
          </p>
          <ul style={{ ...ulStyle, listStyle: 'none', paddingLeft: 0 }}>
            <li><strong>Conduta Saúde</strong></li>
            <li>WhatsApp: +55 16 99613-1393</li>
            <li>E-mail: contato@condutasaude.com</li>
          </ul>

          <h2 style={h2Style}>8. Alterações</h2>
          <p style={pStyle}>
            Esta política pode ser atualizada periodicamente. Recomendamos que a consulte
            regularmente. A data da última atualização está indicada no topo desta página.
          </p>
        </div>
      </div>
    </section>
  );
}

const h2Style: React.CSSProperties = {
  fontFamily: 'var(--font-work-sans)',
  fontSize: '20px',
  fontWeight: 600,
  color: 'var(--text)',
  marginTop: '40px',
  marginBottom: '12px',
};

const pStyle: React.CSSProperties = {
  marginBottom: '16px',
};

const ulStyle: React.CSSProperties = {
  paddingLeft: '24px',
  marginBottom: '16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
};

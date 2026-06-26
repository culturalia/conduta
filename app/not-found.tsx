import Link from "next/link";

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "40px 24px",
        background: "var(--cream)",
      }}
    >
      <div style={{ maxWidth: "480px" }}>
        <p
          style={{
            fontFamily: "var(--font-work-sans)",
            fontSize: "120px",
            fontWeight: 300,
            color: "var(--accent)",
            lineHeight: 1,
            marginBottom: "16px",
            letterSpacing: "-4px",
          }}
        >
          404
        </p>
        <h1
          style={{
            fontFamily: "var(--font-work-sans)",
            fontSize: "28px",
            fontWeight: 500,
            color: "var(--text)",
            marginBottom: "12px",
          }}
        >
          Página não encontrada
        </h1>
        <p
          style={{
            fontSize: "16px",
            color: "var(--text-secondary)",
            marginBottom: "32px",
            lineHeight: 1.7,
          }}
        >
          A página que você procura não existe ou foi movida.
        </p>
        <Link
          href="/"
          style={{
            display: "inline-block",
            padding: "14px 28px",
            borderRadius: "12px",
            fontSize: "15px",
            fontWeight: 600,
            fontFamily: "var(--font-inter)",
            background: "var(--accent-dark)",
            color: "#FFFFFF",
            textDecoration: "none",
          }}
        >
          Voltar ao início
        </Link>
      </div>
    </section>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s — Demo Conduta Saúde",
    default: "Demo de Site Médico — Conduta Saúde",
  },
  robots: { index: false, follow: false },
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from "next";
import "./globals.css";
import "./product-polish.css";
import "./home-final.css";
import "./brand-integration.css";

export const metadata: Metadata = {
  title: "ALM Representações | Febella Makeup",
  description: "ALM Representações: beleza que conecta negócios, com catálogo Febella Makeup, atendimento, campanhas e experiência digital.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

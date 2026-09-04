import type { Metadata } from "next";
import "./globals.css";
import "./product-polish.css";

export const metadata: Metadata = {
  title: "ALM Representações | Febella Makeup",
  description: "ALM Representações: catálogo, atendimento e experiência digital para produtos Febella Makeup.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

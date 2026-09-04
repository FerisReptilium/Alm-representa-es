import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ALM Representações | K-Beauty & Cosméticos",
  description: "E-commerce ALM Representações com curadoria K-Beauty, cosméticos e experiência premium.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

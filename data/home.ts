export const categories = [
  { name: "Rosto", subtitle: "Base, corretivo, pó e blush", icon: "◌" },
  { name: "Olhos", subtitle: "Máscara, delineador e lápis", icon: "✦" },
  { name: "Lábios", subtitle: "Gloss, tint, balm e batom", icon: "♡" },
  { name: "Preparação", subtitle: "Primer, blindagem e fixação", icon: "◇" },
  { name: "Sobrancelhas", subtitle: "Gel e cuidados", icon: "⌁" },
  { name: "Cabelo & Corpo", subtitle: "Wax stick e body splash", icon: "◉" },
];

export const needs = ["Pele preparada", "Efeito glow", "Longa duração", "Olhar marcado", "Lábios em destaque", "Praticidade"];

export type Product = {
  name: string;
  brand: string;
  category: string;
  price: string;
  badge: string;
  image: string;
  alt: string;
  imagePosition: string;
  description: string;
  features: string[];
  whatsappMessage: string;
};

export const products: Product[] = [
  {
    name: "Jelly Tint Multifuncional",
    brand: "FEBELLA MAKEUP",
    category: "Rosto · olhos · lábios",
    price: "Valor sob consulta",
    badge: "MULTIUSO",
    image: "/images/febella-jelly-tint.webp",
    alt: "Jelly Tint Febella Makeup em quatro tonalidades",
    imagePosition: "50% 58%",
    description: "Textura gelatinosa e cor construível para usar como sombra, blush ou lip tint.",
    features: ["3 em 1", "Alta pigmentação", "Longa duração"],
    whatsappMessage: "Olá! Tenho interesse no Jelly Tint Multifuncional da Febella Makeup. Gostaria de consultar cores, disponibilidade e valor.",
  },
  {
    name: "Magic Blush · Cristal Blush",
    brand: "FEBELLA MAKEUP",
    category: "Rosto",
    price: "Valor sob consulta",
    badge: "DESTAQUE",
    image: "/images/febella-magic-blush.webp",
    alt: "Magic Blush e Cristal Blush da Febella Makeup",
    imagePosition: "58% 61%",
    description: "Blush com textura leve, brilho delicado e acabamento natural para realçar a pele.",
    features: ["Textura leve", "Brilho natural", "Efeito radiante"],
    whatsappMessage: "Olá! Tenho interesse no Magic Blush e Cristal Blush da Febella Makeup. Gostaria de consultar tons, disponibilidade e valor.",
  },
  {
    name: "Blindagem 3 em 1",
    brand: "FEBELLA MAKEUP",
    category: "Preparação",
    price: "Valor sob consulta",
    badge: "3 EM 1",
    image: "/images/febella-blindagem-3-em-1.webp",
    alt: "Blindagem 3 em 1 Febella Makeup",
    imagePosition: "50% 62%",
    description: "Diluidor, fixador e primer para potencializar a pigmentação e aumentar a durabilidade da maquiagem.",
    features: ["Diluidor", "Fixador", "Primer"],
    whatsappMessage: "Olá! Tenho interesse na Blindagem 3 em 1 da Febella Makeup. Gostaria de consultar disponibilidade e valor.",
  },
  {
    name: "Coleção de Lábios · Linha Mel",
    brand: "FEBELLA MAKEUP",
    category: "Lábios",
    price: "Valor sob consulta",
    badge: "LINHA MEL",
    image: "/images/febella-linha-mel.webp",
    alt: "Coleção de itens labiais da linha Mel Febella Makeup",
    imagePosition: "50% 66%",
    description: "Bocão Mel Goldish, Mel Tint Oil e Mel Gloss para hidratação, brilho e lábios macios.",
    features: ["Hidratação", "Brilho", "Efeito confortável"],
    whatsappMessage: "Olá! Tenho interesse na Linha Mel da Febella Makeup. Gostaria de conhecer os itens disponíveis e consultar valores.",
  },
];

export const brands = ["FEBELLA MAKEUP"];

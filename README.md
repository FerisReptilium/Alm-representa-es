# ALM Representações — E-commerce K-Beauty

Fundação responsiva do e-commerce empresarial da **ALM Representações**.

## Fase atual

- Home mobile-first com direção visual premium/editorial.
- Header responsivo com navegação desktop e drawer mobile.
- Hero preparado para campanhas rotativas.
- Categorias, necessidades da pele, best sellers, campanhas e marcas.
- Protótipo visual da Beauty Assistant.
- CTA comercial preparado para WhatsApp.
- Design tokens, acessibilidade básica e `prefers-reduced-motion`.
- Estrutura Next.js + TypeScript preparada para Supabase, frete, analytics e IA.

## Próximas etapas

1. Validar a Home em preview.
2. Inserir logo e dados empresariais finais.
3. Conectar Supabase/Postgres e modelar catálogo inicial.
4. Transformar navegação em mega-menu com marcas e categorias reais.
5. Implementar carrinho + WhatsApp + analytics.
6. Implementar Shipping Engine, admin e Beauty AI em fases isoladas.

## Segurança

Nunca colocar chaves privadas no frontend. O `.env.example` separa configuração pública de secrets server-side.

## Fluxo Git

O `main` permanece estável. Desenvolvimento é feito em branches de feature e integrado somente após validação visual e funcional.

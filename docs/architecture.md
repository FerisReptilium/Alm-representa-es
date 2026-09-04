# Arquitetura inicial — ALM Representações

## Princípio

Monólito modular em Next.js: simples para o MVP, com fronteiras claras para catálogo, admin, shipping, analytics e IA.

## Fases

- **Foundation:** UI, design system, responsividade e navegação.
- **Catalog:** Supabase/Postgres, produtos, marcas, categorias e busca.
- **Commercial:** promoções, carrinho e WhatsApp.
- **Shipping:** CEP, endereço, estimativas e providers plugáveis.
- **Admin:** gestão sem editar código.
- **Analytics:** eventos e funil.
- **AI:** backend seguro e knowledge layer.

## Regras

- Mobile-first e `prefers-reduced-motion`.
- Conteúdo comercial sairá dos mocks e irá para banco/admin.
- Nenhuma credencial privada de IA, Supabase service role ou transportadora irá para o bundle público.
- Frete estimado e cotação oficial devem permanecer conceitos distintos.
- O `main` só recebe alterações após validação da branch de feature.
